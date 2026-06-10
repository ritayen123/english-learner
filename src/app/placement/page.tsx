"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../../lib/context/AppContext";
import { useSpeech } from "../../hooks/useSpeech";
import { db } from "../../lib/db";
import { VolumeIcon, ChevronLeftIcon } from "../../components/ui/Icons";
import Link from "next/link";
import type { Word } from "../../lib/types";

interface Question {
  word: Word;
  options: string[]; // 4 Chinese options
  correctIndex: number;
  difficulty: number;
}

const QUESTIONS_PER_LEVEL = 4;
const LEVELS = [1, 2, 3, 4, 5] as const;
const TOTAL_QUESTIONS = QUESTIONS_PER_LEVEL * LEVELS.length;

const LEVEL_LABELS: Record<number, string> = {
  1: "基礎",
  2: "初中級",
  3: "中級",
  4: "中高級",
  5: "高級",
};

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function generateQuestions(): Promise<Question[]> {
  const allWords = await db.words.toArray();
  const questions: Question[] = [];

  for (const level of LEVELS) {
    const wordsAtLevel = allWords.filter((w) => w.difficulty === level);
    if (wordsAtLevel.length < QUESTIONS_PER_LEVEL + 3) continue;

    const sampled = shuffleArray(wordsAtLevel).slice(0, QUESTIONS_PER_LEVEL);

    for (const word of sampled) {
      // Pick 3 distractors from same difficulty level
      const distractors = shuffleArray(
        wordsAtLevel.filter((w) => w.id !== word.id && w.chinese !== word.chinese)
      )
        .slice(0, 3)
        .map((w) => w.chinese);

      const options = shuffleArray([word.chinese, ...distractors]);
      questions.push({
        word,
        options,
        correctIndex: options.indexOf(word.chinese),
        difficulty: level,
      });
    }
  }

  return questions;
}

export default function PlacementPage() {
  const { initialized, updateSettings, settings } = useApp();
  const { playWord } = useSpeech();
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // index -> selected option
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!initialized) return;
    generateQuestions().then((q) => {
      setQuestions(q);
      setLoading(false);
    });
  }, [initialized]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!initialized || loading) {
    return (
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">準備測驗中...</p>
      </main>
    );
  }

  if (questions.length === 0) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen gap-4 px-4">
        <p className="text-text-muted">無法產生測驗題目</p>
        <Link href="/learn" className="px-6 py-3 bg-accent text-white rounded-xl font-medium text-sm">
          返回學習
        </Link>
      </main>
    );
  }

  if (showResult) {
    return <ResultScreen questions={questions} answers={answers} updateSettings={updateSettings} router={router} currentLevel={settings.placementLevel} />;
  }

  const question = questions[currentIndex];

  function handleSelect(optionIndex: number) {
    if (selected !== null) return; // already answered
    setSelected(optionIndex);
    const correct = optionIndex === question.correctIndex;
    setIsCorrect(correct);
    setAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));

    const delay = correct ? 600 : 1500;
    timeoutRef.current = setTimeout(() => {
      setSelected(null);
      setIsCorrect(null);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((i) => i + 1);
      } else {
        setShowResult(true);
      }
    }, delay);
  }

  const progress = (currentIndex + 1) / questions.length;
  const currentLevel = question.difficulty;

  return (
    <main className="flex-1 pb-6 px-4 pt-6 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <Link href="/learn" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-base font-bold">分級測驗</h1>
        <div className="w-10" />
      </div>

      {/* Progress */}
      <div className="flex justify-between text-xs text-text-muted mb-2">
        <span>Level {currentLevel} — {LEVEL_LABELS[currentLevel]}</span>
        <span>{currentIndex + 1} / {questions.length}</span>
      </div>
      <div className="h-1.5 bg-bg-input rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-bg-card border border-border rounded-2xl p-6 flex flex-col items-center gap-3 mb-6">
        <p className="text-xs text-text-muted">{question.word.partOfSpeech}</p>
        <h2 className="text-3xl font-bold text-text-primary text-center break-words max-w-full">
          {question.word.english}
        </h2>
        <p className="text-sm text-text-muted">{question.word.phonetic}</p>
        <button
          onClick={() => playWord(question.word.english)}
          className="p-2 rounded-full bg-accent-light text-accent hover:bg-accent hover:text-white transition-colors"
        >
          <VolumeIcon size={20} />
        </button>
      </div>

      {/* Options */}
      <div className="space-y-3">
        <p className="text-xs text-text-muted mb-1">選擇正確的中文意思：</p>
        {question.options.map((option, i) => {
          let style = "bg-bg-card border border-border text-text-primary hover:border-accent";
          if (selected !== null) {
            if (i === question.correctIndex) {
              style = "bg-success-light border border-success text-success";
            } else if (i === selected && !isCorrect) {
              style = "bg-danger-light border border-danger text-danger";
            } else {
              style = "bg-bg-card border border-border text-text-muted opacity-50";
            }
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`w-full text-left p-4 rounded-xl text-sm font-medium transition-colors ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </main>
  );
}

function ResultScreen({
  questions,
  answers,
  updateSettings,
  router,
  currentLevel,
}: {
  questions: Question[];
  answers: Record<number, number>;
  updateSettings: (s: Record<string, unknown>) => void;
  router: ReturnType<typeof useRouter>;
  currentLevel: number;
}) {
  // Calculate scores per level
  const scoreByLevel: Record<number, { correct: number; total: number }> = {};
  for (const level of LEVELS) {
    scoreByLevel[level] = { correct: 0, total: 0 };
  }
  questions.forEach((q, i) => {
    const entry = scoreByLevel[q.difficulty];
    entry.total++;
    if (answers[i] === q.correctIndex) {
      entry.correct++;
    }
  });

  // Calculate recommended level
  let recommendedLevel = 1;
  for (const level of LEVELS) {
    const { correct, total } = scoreByLevel[level];
    if (total > 0 && correct >= Math.ceil(total * 0.75)) {
      recommendedLevel = Math.min(level + 1, 5);
    }
  }

  const totalCorrect = Object.values(scoreByLevel).reduce((sum, s) => sum + s.correct, 0);

  function handleStart() {
    updateSettings({
      placementLevel: recommendedLevel,
      placementCompleted: true,
    });
    router.push("/learn");
  }

  return (
    <main className="flex-1 pb-6 px-4 pt-6 max-w-lg mx-auto w-full">
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="text-5xl mb-2">
          {recommendedLevel >= 4 ? "🌟" : recommendedLevel >= 3 ? "📚" : "🌱"}
        </div>
        <h2 className="text-xl font-bold text-text-primary">測驗結果</h2>
        <p className="text-sm text-text-secondary">
          答對 {totalCorrect} / {questions.length} 題
        </p>

        {/* Score by level */}
        <div className="w-full bg-bg-card border border-border rounded-xl p-4 space-y-3">
          {LEVELS.map((level) => {
            const { correct, total } = scoreByLevel[level];
            const pct = total > 0 ? (correct / total) * 100 : 0;
            const passed = correct >= Math.ceil(total * 0.75);
            return (
              <div key={level}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-text-secondary">
                    Level {level} — {LEVEL_LABELS[level]}
                  </span>
                  <span className={passed ? "text-success font-medium" : "text-text-muted"}>
                    {correct}/{total} {passed ? "PASS" : ""}
                  </span>
                </div>
                <div className="h-2 bg-bg-input rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      passed ? "bg-success" : "bg-text-muted"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Recommendation */}
        <div className="w-full bg-accent-light border border-border rounded-xl p-4 text-center">
          <p className="text-xs text-text-muted mb-1">建議學習等級</p>
          <p className="text-2xl font-bold text-accent">
            Level {recommendedLevel}
          </p>
          <p className="text-sm text-text-secondary mt-1">
            {recommendedLevel === 1 && "從基礎單字開始打好根基"}
            {recommendedLevel === 2 && "你已掌握基礎，可以進入初中級詞彙"}
            {recommendedLevel === 3 && "你的詞彙量在中級水準，開始挑戰專業用語"}
            {recommendedLevel === 4 && "中高級程度，可以學習進階專業詞彙"}
            {recommendedLevel === 5 && "程度優秀！直接挑戰最高難度的學術/專業詞彙"}
          </p>
          {currentLevel !== recommendedLevel && currentLevel > 1 && (
            <p className="text-xs text-text-muted mt-2">
              (原等級 Level {currentLevel} → Level {recommendedLevel})
            </p>
          )}
        </div>

        <div className="flex gap-3 mt-4">
          <Link
            href="/learn"
            className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm"
          >
            暫時跳過
          </Link>
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-accent text-white rounded-xl font-medium text-sm"
          >
            套用並開始學習
          </button>
        </div>
      </div>
    </main>
  );
}
