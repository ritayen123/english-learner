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
  const wasReviewing = repetition > 0;

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

  const next = new Date();
  next.setDate(next.getDate() + interval);
  const nextReview = formatLocalDate(next);

  let status: WordStatus;
  if (quality < 3 && wasReviewing) {
    status = "review";
  } else if (repetition === 0) {
    status = "learning";
  } else if (interval >= 21) {
    status = "mastered";
  } else {
    status = "review";
  }

  return { interval, repetition, easeFactor, nextReview, status };
}

function formatLocalDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function getToday(): string {
  return formatLocalDate(new Date());
}
