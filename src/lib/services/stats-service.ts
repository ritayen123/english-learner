import { db } from "../db";
import type { DailyStats } from "../types";
import { getToday } from "../srs";

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
    const allStats = await db.dailyStats
      .orderBy("date")
      .reverse()
      .toArray();

    if (allStats.length === 0) return 0;

    let streak = 0;
    const now = new Date();

    for (let i = 0; i < allStats.length; i++) {
      const expected = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      const expectedDate = `${expected.getFullYear()}-${String(expected.getMonth() + 1).padStart(2, "0")}-${String(expected.getDate()).padStart(2, "0")}`;

      if (allStats[i].date === expectedDate) {
        const s = allStats[i];
        if (s.newWordsLearned > 0 || s.wordsReviewed > 0 || s.articlesRead > 0) {
          streak++;
        } else {
          break;
        }
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
    const all = await db.dailyStats.toArray();
    return {
      totalStudySeconds: all.reduce((s, d) => s + d.studyTimeSeconds, 0),
      totalNewWords: all.reduce((s, d) => s + d.newWordsLearned, 0),
      totalReviews: all.reduce((s, d) => s + d.wordsReviewed, 0),
      totalArticles: all.reduce((s, d) => s + d.articlesRead, 0),
      daysActive: all.filter(
        (d) => d.newWordsLearned > 0 || d.wordsReviewed > 0 || d.articlesRead > 0
      ).length,
    };
  },
};
