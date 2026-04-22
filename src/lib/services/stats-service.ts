import { db } from "../db";
import type { DailyStats } from "../types";
import { getToday } from "../srs";

async function getOrCreateToday(): Promise<DailyStats> {
  const today = getToday();
  const existing = await db.dailyStats.get(today);
  if (existing) return existing;

  const stats: DailyStats = {
    date: today,
    newWordsLearned: 0,
    wordsReviewed: 0,
    articlesRead: 0,
    studyTimeSeconds: 0,
  };
  await db.dailyStats.put(stats);
  return stats;
}

export const statsService = {
  async recordNewWord(): Promise<void> {
    const stats = await getOrCreateToday();
    stats.newWordsLearned += 1;
    await db.dailyStats.put(stats);
  },

  async recordReview(): Promise<void> {
    const stats = await getOrCreateToday();
    stats.wordsReviewed += 1;
    await db.dailyStats.put(stats);
  },

  async recordArticle(): Promise<void> {
    const stats = await getOrCreateToday();
    stats.articlesRead += 1;
    await db.dailyStats.put(stats);
  },

  async recordStudyTime(seconds: number): Promise<void> {
    const stats = await getOrCreateToday();
    stats.studyTimeSeconds += seconds;
    await db.dailyStats.put(stats);
  },

  async getToday(): Promise<DailyStats> {
    return getOrCreateToday();
  },

  async getWeekly(): Promise<DailyStats[]> {
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 6);
    const startDate = weekAgo.toISOString().split("T")[0];
    const endDate = today.toISOString().split("T")[0];

    return db.dailyStats
      .where("date")
      .between(startDate, endDate, true, true)
      .toArray();
  },

  async getStreak(): Promise<number> {
    const allStats = await db.dailyStats
      .orderBy("date")
      .reverse()
      .toArray();

    if (allStats.length === 0) return 0;

    let streak = 0;
    const today = new Date();

    for (let i = 0; i < allStats.length; i++) {
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      const expectedDate = expected.toISOString().split("T")[0];

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
