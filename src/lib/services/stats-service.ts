import { db } from "../db";
import type { DailyStats } from "../types";
import { getToday } from "../srs";

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// 活躍日期集合：dailyStats 有學習/複習/閱讀，或 toeicDaily 同日有任何作答，都算當天有活動
async function getActiveDates(): Promise<Set<string>> {
  const [allStats, allToeic] = await Promise.all([
    db.dailyStats.toArray(),
    db.toeicDaily.toArray(),
  ]);
  const active = new Set<string>();
  for (const s of allStats) {
    if (s.newWordsLearned > 0 || s.wordsReviewed > 0 || s.articlesRead > 0) {
      active.add(s.date);
    }
  }
  for (const t of allToeic) {
    if ((t.part5Done ?? 0) > 0 || (t.part2Done ?? 0) > 0 || (t.vocabDone ?? 0) > 0) {
      active.add(t.date);
    }
  }
  return active;
}

async function ensureToday(): Promise<void> {
  const today = getToday();
  const existing = await db.dailyStats.get(today);
  if (!existing) {
    await db.dailyStats.put({
      date: today,
      newWordsLearned: 0,
      wordsReviewed: 0,
      articlesRead: 0,
      studyTimeSeconds: 0,
    });
  }
}

export const statsService = {
  async recordNewWord(): Promise<void> {
    const today = getToday();
    const count = await db.dailyStats
      .where("date")
      .equals(today)
      .modify((s) => {
        s.newWordsLearned += 1;
      });
    if (count === 0) {
      await db.dailyStats.put({
        date: today,
        newWordsLearned: 1,
        wordsReviewed: 0,
        articlesRead: 0,
        studyTimeSeconds: 0,
      });
    }
  },

  async recordReview(): Promise<void> {
    const today = getToday();
    const count = await db.dailyStats
      .where("date")
      .equals(today)
      .modify((s) => {
        s.wordsReviewed += 1;
      });
    if (count === 0) {
      await db.dailyStats.put({
        date: today,
        newWordsLearned: 0,
        wordsReviewed: 1,
        articlesRead: 0,
        studyTimeSeconds: 0,
      });
    }
  },

  async recordArticle(): Promise<void> {
    const today = getToday();
    const count = await db.dailyStats
      .where("date")
      .equals(today)
      .modify((s) => {
        s.articlesRead += 1;
      });
    if (count === 0) {
      await db.dailyStats.put({
        date: today,
        newWordsLearned: 0,
        wordsReviewed: 0,
        articlesRead: 1,
        studyTimeSeconds: 0,
      });
    }
  },

  async recordStudyTime(seconds: number): Promise<void> {
    const today = getToday();
    const count = await db.dailyStats
      .where("date")
      .equals(today)
      .modify((s) => {
        s.studyTimeSeconds += seconds;
      });
    if (count === 0) {
      await db.dailyStats.put({
        date: today,
        newWordsLearned: 0,
        wordsReviewed: 0,
        articlesRead: 0,
        studyTimeSeconds: seconds,
      });
    }
  },

  async getToday(): Promise<DailyStats> {
    await ensureToday();
    return (await db.dailyStats.get(getToday()))!;
  },

  async getWeekly(): Promise<DailyStats[]> {
    const today = getToday();
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 6);
    const startDate = `${weekAgo.getFullYear()}-${String(weekAgo.getMonth() + 1).padStart(2, "0")}-${String(weekAgo.getDate()).padStart(2, "0")}`;

    return db.dailyStats
      .where("date")
      .between(startDate, today, true, true)
      .toArray();
  },

  async getStreak(): Promise<number> {
    const activeDates = await getActiveDates();
    if (activeDates.size === 0) return 0;

    const now = new Date();
    // 今天有活動則從今天起算；今天還沒學則從昨天起算（昨天為止的連續天數照顯示，不歸零）
    const startOffset = activeDates.has(formatDate(now)) ? 0 : 1;

    let streak = 0;
    for (let i = startOffset; ; i++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      if (activeDates.has(formatDate(d))) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  },

  async getAllTimeStats(): Promise<{
    totalStudySeconds: number;
    totalNewWords: number;
    totalReviews: number;
    totalArticles: number;
    daysActive: number;
  }> {
    const [all, activeDates] = await Promise.all([
      db.dailyStats.toArray(),
      getActiveDates(),
    ]);
    return {
      totalStudySeconds: all.reduce((s, d) => s + d.studyTimeSeconds, 0),
      totalNewWords: all.reduce((s, d) => s + d.newWordsLearned, 0),
      totalReviews: all.reduce((s, d) => s + d.wordsReviewed, 0),
      totalArticles: all.reduce((s, d) => s + d.articlesRead, 0),
      daysActive: activeDates.size,
    };
  },
};
