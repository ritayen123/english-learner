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

export type WordDomain = "business" | "daily" | "academic" | "travel" | "colloquial";

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
  placementLevel: number;
  placementCompleted: boolean;
  toeicGoalPart5: number;
  toeicGoalPart2: number;
  toeicGoalVocab: number;
}

export const DEFAULT_SETTINGS: UserSettings = {
  dailyNewWords: 50,
  dailyReviewCap: 100,
  sessionMinutes: 15,
  darkMode: true,
  autoPlayPronunciation: true,
  placementLevel: 2,
  placementCompleted: false,
  toeicGoalPart5: 30,
  toeicGoalPart2: 25,
  toeicGoalVocab: 20,
};

// ===== Scenario Dialogue =====
export interface Scenario {
  id: string;
  title: string;
  titleEn: string;
  category: ScenarioCategory;
  difficulty: 1 | 2 | 3;
  situation: string;
  situationEn: string;
  steps: DialogueStep[];
  relatedPhraseIds: string[];
}

export type ScenarioCategory = "airport" | "hotel" | "restaurant" | "directions" | "shopping" | "emergency";

export interface DialogueStep {
  speaker: "staff" | "you";
  line: string;
  lineZh: string;
  options?: DialogueOption[];
}

export interface DialogueOption {
  text: string;
  textZh: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface UserScenario {
  scenarioId: string;
  completedAt: string;
  mistakeCount: number;
}

// ===== Milestones =====
export const WORD_MILESTONES = [100, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000];
export const STREAK_MILESTONES = [3, 7, 14, 30, 60, 90];

// ===== TOEIC 衝刺模式 =====
export type ToeicQType = "part5" | "part2" | "vocab";

export interface ToeicWrong {
  qid: string;
  qtype: ToeicQType;
  category: string;
  wrongCount: number;
  interval: number; // 天數，答對翻倍，>=16 畢業（刪除）
  nextReview: string; // "2026-06-11"
  lastWrong: string;
}

export interface ToeicDaily {
  date: string;
  part5Done: number;
  part2Done: number;
  vocabDone: number;
  part5Correct: number;
  part2Correct: number;
  vocabCorrect: number;
}

export const TOEIC_EXAM_DATE = "2026-09-01";
export const TOEIC_DAILY_GOALS = { part5: 30, part2: 25, vocab: 20 } as const;
