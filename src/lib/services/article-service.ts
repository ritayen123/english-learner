import { db } from "../db";
import type { Article, UserArticle, WordDomain } from "../types";

export const articleService = {
  async init(): Promise<void> {
    const count = await db.articles.count();
    if (count === 0) {
      const { articlesData } = await import("../../data/articles");
      await db.articles.bulkPut(articlesData);
    }
  },

  async getAll(): Promise<Article[]> {
    return db.articles.toArray();
  },

  async getById(id: string): Promise<Article | undefined> {
    return db.articles.get(id);
  },

  async getByDomain(domain: WordDomain): Promise<Article[]> {
    return db.articles.where("domain").equals(domain).toArray();
  },

  async getUnread(): Promise<Article[]> {
    const completedIds = new Set(
      (await db.userArticles.toArray()).map((ua) => ua.articleId)
    );
    const all = await db.articles.toArray();
    return all.filter((a) => !completedIds.has(a.id));
  },

  async markCompleted(
    articleId: string,
    score: number,
    totalQuestions: number,
    readingTimeSeconds: number
  ): Promise<void> {
    const record: UserArticle = {
      articleId,
      completedAt: new Date().toISOString(),
      score,
      totalQuestions,
      readingTimeSeconds,
    };
    await db.userArticles.put(record);
  },

  async getUserArticle(articleId: string): Promise<UserArticle | undefined> {
    return db.userArticles.get(articleId);
  },

  async getCompletedCount(): Promise<number> {
    return db.userArticles.count();
  },
};
