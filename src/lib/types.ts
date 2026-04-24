// ===== Word Data (pre-loaded 4000 + custom) =====
export interface Word {
  id: string;
  english: string;
  chinese: string;
  partOfSpeech: string;
  phonetic: string;
  domain: WordDomain;
  difficulty: 1 | 2 | 3 | 4 | 5;
  exampleEn: string;
  exampleZh: string;
}

export type WordDomain = "business" | "daily" | "academic";

// ===== User SRS state per word =====
export interface UserWord {
  wordId: string;
  interval: number;
  repetition: number;
  easeFactor: number;
  nextReview: string; // ISO date "2026-04-23"
  lastReview: string;
  status: WordStatus;
  isCustom: boolean;
  customEnglish?: string;
  customChinese?: string;
  customExample?: string;
}

export type WordStatus = "new" | "learning" | "review" | "mastered";

// ===== Article Data (pre-loaded 90) =====
export interface Article {
  id: string;
  title: string;
  content: string;
  contentZh?: string;
  domain: WordDomain;
  difficulty: 1 | 2 | 3;
  wordCount: number;
  targetWords: string[];
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

// ===== User reading progress =====
export interface UserArticle {
  articleId: string;
  completedAt: string;
  score: number;
  totalQuestions: number;
  readingTimeSeconds: number;
}

// ===== Daily stats =====
export interface DailyStats {
  date: string; // "2026-04-22"
  newWordsLearned: number;
  wordsReviewed: number;
  articlesRead: number;
  studyTimeSeconds: number;
}

// ===== Settings =====
export interface UserSettings {
  dailyNewWords: number;
  dailyReviewCap: number;
  sessionMinutes: number;
  darkMode: boolean;
  autoPlayPronunciation: boolean;
}

export const DEFAULT_SETTINGS: UserSettings = {
  dailyNewWords: 50,
  dailyReviewCap: 100,
  sessionMinutes: 15,
  darkMode: true,
  autoPlayPronunciation: true,
};

// ===== Milestones =====
export const WORD_MILESTONES = [100, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000];
export const STREAK_MILESTONES = [3, 7, 14, 30, 60, 90];
