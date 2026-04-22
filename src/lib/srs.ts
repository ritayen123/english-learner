import type { WordStatus } from "./types";

export interface SM2Input {
  quality: number; // 0-5 (0-2=incorrect, 3=hard, 4=good, 5=easy)
  repetition: number;
  easeFactor: number;
  interval: number;
}

export interface SM2Output {
  interval: number;
  repetition: number;
  easeFactor: number;
  nextReview: string;
  status: WordStatus;
}

export function sm2(input: SM2Input): SM2Output {
  let { quality, repetition, easeFactor, interval } = input;

  if (quality >= 3) {
    if (repetition === 0) interval = 1;
    else if (repetition === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetition += 1;
  } else {
    repetition = 0;
    interval = 1;
  }

  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  const today = new Date();
  today.setDate(today.getDate() + interval);
  const nextReview = today.toISOString().split("T")[0];

  let status: WordStatus;
  if (repetition === 0) status = "learning";
  else if (interval >= 21) status = "mastered";
  else status = "review";

  return { interval, repetition, easeFactor, nextReview, status };
}

export function getToday(): string {
  return new Date().toISOString().split("T")[0];
}
