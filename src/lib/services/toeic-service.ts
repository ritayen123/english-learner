import { db } from "../db";
import { getToday } from "../srs";
import type { ToeicWrong, ToeicQType, ToeicDaily } from "../types";
import type { Part5Question } from "../../data/toeic-part5";
import type { Part2Question } from "../../data/toeic-part2";
import type { ToeicVocab } from "../../data/toeic-vocab";
import type { Part6Set } from "../../data/toeic-part6";
import type { Part7Set } from "../../data/toeic-part7";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export const toeicService = {
  // ===== 題庫批次（到期錯題優先，其餘隨機補滿）=====
  async getPart5Batch(n: number = 30, category?: string): Promise<Part5Question[]> {
    const { part5Questions } = await import("../../data/toeic-part5");
    const pool = category ? part5Questions.filter((q) => q.category === category) : part5Questions;
    return pickBatch(pool, "part5", n);
  },

  async getPart2Batch(n: number = 25): Promise<Part2Question[]> {
    const { part2Questions } = await import("../../data/toeic-part2");
    return pickBatch(part2Questions, "part2", n);
  },

  async getVocabBatch(n: number = 20): Promise<ToeicVocab[]> {
    const { toeicVocab } = await import("../../data/toeic-vocab");
    return pickBatch(toeicVocab, "vocab", n);
  },

  // Part 6 / Part 7 以「篇（組）」為單位抽題：含到期錯題子題的篇優先，不足隨機補滿
  async getPart6Batch(nSets: number = 2): Promise<Part6Set[]> {
    const { part6Sets } = await import("../../data/toeic-part6");
    return pickSetBatch(part6Sets, "part6", nSets);
  },

  async getPart7Batch(nSets: number = 2): Promise<Part7Set[]> {
    const { part7Sets } = await import("../../data/toeic-part7");
    return pickSetBatch(part7Sets, "part7", nSets);
  },

  // ===== 作答結果：錯 → 進錯題本（隔天到期）；對 → 間隔翻倍，>=16 天畢業 =====
  async recordResult(
    qid: string,
    qtype: ToeicQType,
    category: string,
    correct: boolean
  ): Promise<void> {
    const today = getToday();
    const existing = await db.toeicWrong.get(qid);

    if (!correct) {
      await db.toeicWrong.put({
        qid,
        qtype,
        category,
        wrongCount: (existing?.wrongCount ?? 0) + 1,
        interval: 1,
        nextReview: addDays(today, 1),
        lastWrong: today,
      });
      return;
    }

    if (existing) {
      const newInterval = existing.interval * 2;
      if (newInterval >= 16) {
        await db.toeicWrong.delete(qid);
      } else {
        await db.toeicWrong.put({
          ...existing,
          interval: newInterval,
          nextReview: addDays(today, newInterval),
        });
      }
    }
  },

  async getDueWrong(qtype?: ToeicQType): Promise<ToeicWrong[]> {
    const today = getToday();
    const all = qtype
      ? await db.toeicWrong.where("qtype").equals(qtype).toArray()
      : await db.toeicWrong.toArray();
    return all.filter((w) => w.nextReview <= today);
  },

  async getAllWrong(): Promise<ToeicWrong[]> {
    return db.toeicWrong.toArray();
  },

  // ===== 每日進度（含正確率）=====
  async getDaily(date?: string): Promise<ToeicDaily> {
    const d = date ?? getToday();
    const row = await db.toeicDaily.get(d);
    return {
      date: d,
      part5Done: 0,
      part2Done: 0,
      vocabDone: 0,
      part6Done: 0,
      part7Done: 0,
      part5Correct: 0,
      part2Correct: 0,
      vocabCorrect: 0,
      part6Correct: 0,
      part7Correct: 0,
      ...row, // 舊資料列缺新欄位時由上方預設值補 0
    };
  },

  async recordDaily(qtype: ToeicQType, correct: boolean): Promise<void> {
    await db.transaction("rw", db.toeicDaily, async () => {
      const row = await this.getDaily();
      const doneKey = (qtype + "Done") as `${ToeicQType}Done`;
      const correctKey = (qtype + "Correct") as `${ToeicQType}Correct`;
      await db.toeicDaily.put({
        ...row,
        [doneKey]: row[doneKey] + 1,
        [correctKey]: row[correctKey] + (correct ? 1 : 0),
      });
    });
  },

  async getLast7Days(): Promise<ToeicDaily[]> {
    const today = getToday();
    const dates: string[] = [];
    for (let i = 6; i >= 0; i--) dates.push(addDays(today, -i));
    return Promise.all(dates.map((d) => this.getDaily(d)));
  },

  // ===== 錯題本用：依 id 取回原題 =====
  // Part 6 / Part 7 的子題 qid 格式為 "p6-001-q1"、"p7-001-q3"，
  // 解析出所屬篇（set）與題號後回傳 { set, questionIndex }
  async getQuestionsByIds(
    ids: string[]
  ): Promise<{
    part5: Part5Question[];
    part2: Part2Question[];
    vocab: ToeicVocab[];
    part6: { set: Part6Set; questionIndex: number }[];
    part7: { set: Part7Set; questionIndex: number }[];
  }> {
    const idSet = new Set(ids);
    const [{ part5Questions }, { part2Questions }, { toeicVocab }, { part6Sets }, { part7Sets }] =
      await Promise.all([
        import("../../data/toeic-part5"),
        import("../../data/toeic-part2"),
        import("../../data/toeic-vocab"),
        import("../../data/toeic-part6"),
        import("../../data/toeic-part7"),
      ]);
    const part6: { set: Part6Set; questionIndex: number }[] = [];
    const part7: { set: Part7Set; questionIndex: number }[] = [];
    for (const id of ids) {
      const parsed = parseSubQid(id);
      if (!parsed) continue;
      if (id.startsWith("p6-")) {
        const set = part6Sets.find((s) => s.id === parsed.setId);
        if (set && parsed.questionIndex < set.questions.length)
          part6.push({ set, questionIndex: parsed.questionIndex });
      } else if (id.startsWith("p7-")) {
        const set = part7Sets.find((s) => s.id === parsed.setId);
        if (set && parsed.questionIndex < set.questions.length)
          part7.push({ set, questionIndex: parsed.questionIndex });
      }
    }
    return {
      part5: part5Questions.filter((q) => idSet.has(q.id)),
      part2: part2Questions.filter((q) => idSet.has(q.id)),
      vocab: toeicVocab.filter((q) => idSet.has(q.id)),
      part6,
      part7,
    };
  },
};

// 子題 qid（如 "p6-001-q2"）→ { setId: "p6-001", questionIndex: 1 }
function parseSubQid(qid: string): { setId: string; questionIndex: number } | null {
  const m = qid.match(/^(p[67]-\d+)-q(\d+)$/);
  if (!m) return null;
  return { setId: m[1], questionIndex: parseInt(m[2], 10) - 1 };
}

// 以「篇」為單位的批次抽題：含到期錯題子題的篇優先，其餘隨機補滿
async function pickSetBatch<T extends { id: string }>(
  pool: T[],
  qtype: ToeicQType,
  nSets: number
): Promise<T[]> {
  const due = await toeicService.getDueWrong(qtype);
  const dueSetIds = new Set(
    due.map((w) => parseSubQid(w.qid)?.setId).filter((s): s is string => s !== undefined && s !== null)
  );
  const dueSets = pool.filter((s) => dueSetIds.has(s.id));
  const rest = shuffle(pool.filter((s) => !dueSetIds.has(s.id)));
  return [...shuffle(dueSets), ...rest].slice(0, nSets);
}

async function pickBatch<T extends { id: string }>(
  pool: T[],
  qtype: ToeicQType,
  n: number
): Promise<T[]> {
  const due = await toeicService.getDueWrong(qtype);
  const dueIds = new Set(due.map((w) => w.qid));
  const dueQuestions = pool.filter((q) => dueIds.has(q.id));
  const rest = shuffle(pool.filter((q) => !dueIds.has(q.id)));
  return [...shuffle(dueQuestions), ...rest].slice(0, n);
}
