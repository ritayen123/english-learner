import Dexie, { type EntityTable } from "dexie";
import type {
  Word,
  UserWord,
  Article,
  UserArticle,
  DailyStats,
} from "../types";

const db = new Dexie("EnglishLearnerDB") as Dexie & {
  words: EntityTable<Word, "id">;
  userWords: EntityTable<UserWord, "wordId">;
  articles: EntityTable<Article, "id">;
  userArticles: EntityTable<UserArticle, "articleId">;
  dailyStats: EntityTable<DailyStats, "date">;
};

db.version(1).stores({
  words: "id, domain, difficulty, [domain+difficulty]",
  userWords: "wordId, status, nextReview, [status+nextReview], isCustom",
  articles: "id, domain, difficulty",
  userArticles: "articleId, completedAt",
  dailyStats: "date",
});

export { db };
