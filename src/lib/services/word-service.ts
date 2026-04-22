import { db } from "../db";
import type { Word, WordDomain } from "../types";
import { wordsData } from "../../data/words";

export const wordService = {
  async init(): Promise<void> {
    const count = await db.words.count();
    if (count === 0) {
      await db.words.bulkPut(wordsData);
    }
  },

  async getById(id: string): Promise<Word | undefined> {
    return db.words.get(id);
  },

  async getByDomain(domain: WordDomain): Promise<Word[]> {
    return db.words.where("domain").equals(domain).toArray();
  },

  async search(query: string): Promise<Word[]> {
    const q = query.toLowerCase();
    return db.words
      .filter(
        (w) =>
          w.english.toLowerCase().includes(q) ||
          w.chinese.includes(q)
      )
      .toArray();
  },

  async getCount(): Promise<number> {
    return db.words.count();
  },

  async getAll(): Promise<Word[]> {
    return db.words.toArray();
  },
};
