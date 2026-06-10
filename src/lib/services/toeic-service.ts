import { db } from "../db";
import { getToday } from "../srs";
import type { ToeicWrong, ToeicQType, ToeicDaily } from "../types";
import type { Part5Question } from "../../data/toeic-part5";
import type { Part2Question } from "../../data/toeic-part2";
import type { ToeicVocab } from "../../data/toeic-vocab";

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
  async getPart5Batch(n: number = 30): Promise<Part5Question[]> {
    const { part5Questions } = await import("../../data/toeic-part5");
    return pickBatch(part5Questions, "part5", n);
  },

  async getPart2Batch(n: number = 25): Promise<Part2Question[]> {
    const { part2Questions } = await import("../../data/toeic-part2");
    return pickBatch(part2Questions, "part2", n);
  },

  async getVocabBatch(n: number = 20): Promise<ToeicVocab[]> {
    const { toeicVocab } = await import("../../data/toeic-vocab");
    return pickBatch(toeicVocab, "vocab", n);
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

  // ===== 每日進度 =====
  async getDaily(): Promise<ToeicDaily> {
    const today = getToday();
    const row = await db.toeicDaily.get(today);
    return row ?? { date: today, part5Done: 0, part2Done: 0, vocabDone: 0 };
  },

  async bumpDaily(field: "part5Done" | "part2Done" | "vocabDone", by: number = 1): Promise<void> {
    const row = await this.getDaily();
    await db.toeicDaily.put({ ...row, [field]: row[field] + by });
  },

  // ===== 錯題本用：依 id 取回原題 =====
  async getQuestionsByIds(
    ids: string[]
  ): Promise<{ part5: Part5Question[]; part2: Part2Question[]; vocab: ToeicVocab[] }> {
    const idSet = new Set(ids);
    const [{ part5Questions }, { part2Questions }, { toeicVocab }] = await Promise.all([
      import("../../data/toeic-part5"),
      import("../../data/toeic-part2"),
      import("../../data/toeic-vocab"),
    ]);
    return {
      part5: part5Questions.filter((q) => idSet.has(q.id)),
      part2: part2Questions.filter((q) => idSet.has(q.id)),
      vocab: toeicVocab.filter((q) => idSet.has(q.id)),
    };
  },
};

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
