import { db } from "../db";
import { sm2, getToday } from "../srs";
import type { Word, UserWord, WordDomain } from "../types";
import { TOEIC_EXAM_DATE } from "../types";

// TOEIC 衝刺期（考前）抽新字的領域優先序：商業/學術最貼近考試，旅遊/口語最後
const TOEIC_DOMAIN_PRIORITY: Record<WordDomain, number> = {
  business: 0,
  academic: 1,
  daily: 2,
  travel: 3,
  colloquial: 4,
};

export const srsService = {
  async getDueReviews(
    limit: number = 100
  ): Promise<(UserWord & { word: Word })[]> {
    const today = getToday();
    const dueWords = await db.userWords
      .where("nextReview")
      .belowOrEqual(today)
      // mastered 字依 nextReview 到期照常回到複習佇列（SM-2 本意），只排除尚未開始學的字
      .filter((uw) => uw.status !== "new")
      .limit(limit)
      .toArray();

    // Batch fetch non-custom words
    const customWords: (UserWord & { word: Word })[] = [];
    const nonCustomUWs: UserWord[] = [];
    for (const uw of dueWords) {
      if (uw.isCustom) {
        customWords.push({
          ...uw,
          word: {
            id: uw.wordId,
            english: uw.customEnglish || "",
            chinese: uw.customChinese || "",
            partOfSpeech: "",
            phonetic: "",
            domain: "daily" as WordDomain,
            difficulty: 3 as const,
            exampleEn: uw.customExample || "",
            exampleZh: "",
          },
        });
      } else {
        nonCustomUWs.push(uw);
      }
    }

    const wordIds = nonCustomUWs.map((uw) => uw.wordId);
    const words = await db.words.bulkGet(wordIds);
    const results: (UserWord & { word: Word })[] = [...customWords];
    for (let i = 0; i < nonCustomUWs.length; i++) {
      const word = words[i];
      if (word) results.push({ ...nonCustomUWs[i], word });
    }
    return results;
  },

  async getNewWords(count: number, domain?: WordDomain, minDifficulty: number = 1): Promise<Word[]> {
    const learnedIds = new Set(
      await db.userWords.toCollection().primaryKeys()
    );

    let query = domain
      ? db.words.where("domain").equals(domain)
      : db.words.toCollection();

    const allWords = await query.toArray();
    const unlearned = allWords.filter((w) => !learnedIds.has(w.id));

    // TOEIC 衝刺期且未指定領域時，優先抽商業/學術字，衝刺時間不花在旅遊/口語字上
    const inToeicSprint = !domain && getToday() <= TOEIC_EXAM_DATE;
    const byPriority = (a: Word, b: Word) =>
      inToeicSprint && TOEIC_DOMAIN_PRIORITY[a.domain] !== TOEIC_DOMAIN_PRIORITY[b.domain]
        ? TOEIC_DOMAIN_PRIORITY[a.domain] - TOEIC_DOMAIN_PRIORITY[b.domain]
        : a.difficulty - b.difficulty;

    // 優先抽符合分級門檻的字；不足額時用低難度未學字補滿（由接近門檻者優先），確保 6000 字進度可達成
    const preferred = unlearned
      .filter((w) => w.difficulty >= minDifficulty)
      .sort(byPriority);
    if (preferred.length >= count) return preferred.slice(0, count);

    const fallback = unlearned
      .filter((w) => w.difficulty < minDifficulty)
      .sort((a, b) => b.difficulty - a.difficulty);
    return [...preferred, ...fallback].slice(0, count);
  },

  async startLearning(wordId: string): Promise<UserWord> {
    const today = getToday();
    const userWord: UserWord = {
      wordId,
      interval: 0,
      repetition: 0,
      easeFactor: 2.5,
      nextReview: today,
      lastReview: today,
      status: "learning",
      isCustom: false,
    };
    await db.userWords.put(userWord);
    return userWord;
  },

  async processReview(wordId: string, quality: number): Promise<UserWord> {
    const existing = await db.userWords.get(wordId);
    if (!existing) throw new Error(`UserWord not found: ${wordId}`);

    const result = sm2({
      quality,
      repetition: existing.repetition,
      easeFactor: existing.easeFactor,
      interval: existing.interval,
      currentStatus: existing.status,
    });

    const updated: UserWord = {
      ...existing,
      interval: result.interval,
      repetition: result.repetition,
      easeFactor: result.easeFactor,
      nextReview: result.nextReview,
      lastReview: getToday(),
      status: result.status,
    };

    await db.userWords.put(updated);
    return updated;
  },

  async addCustomWord(
    english: string,
    chinese: string,
    example?: string
  ): Promise<UserWord> {
    const id = `custom_${Date.now()}`;
    const today = getToday();
    const userWord: UserWord = {
      wordId: id,
      interval: 0,
      repetition: 0,
      easeFactor: 2.5,
      nextReview: today,
      lastReview: today,
      status: "learning",
      isCustom: true,
      customEnglish: english,
      customChinese: chinese,
      customExample: example,
    };
    await db.userWords.put(userWord);
    return userWord;
  },

  async getStats(): Promise<{
    new: number;
    learning: number;
    review: number;
    mastered: number;
    total: number;
  }> {
    const all = await db.userWords.toArray();
    return {
      new: all.filter((w) => w.status === "new").length,
      learning: all.filter((w) => w.status === "learning").length,
      review: all.filter((w) => w.status === "review").length,
      mastered: all.filter((w) => w.status === "mastered").length,
      total: all.length,
    };
  },

  async getDueCount(): Promise<number> {
    const today = getToday();
    return db.userWords
      .where("nextReview")
      .belowOrEqual(today)
      .filter((uw) => uw.status !== "new")
      .count();
  },
};
