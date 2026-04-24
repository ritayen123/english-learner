"use client";

import { useState, useEffect, useCallback } from "react";
import { useApp } from "../../lib/context/AppContext";
import { srsService } from "../../lib/services/srs-service";
import { statsService } from "../../lib/services/stats-service";
import Flashcard from "../../components/ui/Flashcard";
import BottomNav from "../../components/ui/BottomNav";
import { useStudySession } from "../../hooks/useStudySession";
import { ChevronLeftIcon, ClockIcon } from "../../components/ui/Icons";
import Link from "next/link";
import type { Word } from "../../lib/types";

export default function LearnPage() {
  const { initialized, settings, refreshStats } = useApp();
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [learnedCount, setLearnedCount] = useState(0);
  const session = useStudySession(settings.sessionMinutes);

  useEffect(() => {
    if (!initialized) return;
    srsService.getNewWords(settings.dailyNewWords).then((w) => {
      setWords(w);
      if (w.length > 0) session.start();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized, settings.dailyNewWords]);

  const handleRate = useCallback(
    async (quality: number) => {
      const word = words[currentIndex];
      if (!word) return;

      await srsService.startLearning(word.id);
      if (quality >= 3) {
        await srsService.processReview(word.id, quality);
      }
      await statsService.recordNewWord();
      setLearnedCount((c) => c + 1);

      if (currentIndex + 1 < words.length) {
        setCurrentIndex((i) => i + 1);
      } else {
        setCompleted(true);
        session.pause();
        refreshStats();
      }
    },
    [words, currentIndex, session, refreshStats]
  );

  if (!initialized) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入中...</p>
      </div>
    );
  }

  if (words.length === 0) {
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header remaining={session.formattedRemaining} />
        <div className="flex-1 flex flex-col items-center justify-center mt-20 gap-4">
          <p className="text-xl font-bold text-text-primary">太棒了！</p>
          <p className="text-text-secondary text-center">
            目前沒有新字可學，<br />已全部加入學習囉！
          </p>
          <Link href="/" className="mt-4 px-6 py-3 bg-accent text-white rounded-xl font-medium">
            回首頁
          </Link>
        </div>
        <BottomNav />
      </main>
    );
  }

  if (completed) {
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header remaining={session.formattedRemaining} />
        <div className="flex-1 flex flex-col items-center justify-center mt-20 gap-4">
          <div className="text-5xl mb-2">🎉</div>
          <p className="text-xl font-bold text-text-primary">學習完成！</p>
          <p className="text-text-secondary">
            今天學了 <span className="font-bold text-accent">{learnedCount}</span> 個新字
          </p>
          <p className="text-sm text-text-muted">
            花了 {session.formattedElapsed}
          </p>
          <div className="w-full max-w-xs mt-2 bg-bg-card border border-border rounded-xl p-3">
            <div className="flex justify-between text-xs text-text-muted mb-1.5">
              <span>今日新字目標</span>
              <span>{learnedCount} / {settings.dailyNewWords}</span>
            </div>
            <div className="h-2 bg-bg-input rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-500"
                style={{ width: `${Math.min((learnedCount / settings.dailyNewWords) * 100, 100)}%` }}
              />
            </div>
            {learnedCount >= settings.dailyNewWords && (
              <p className="text-xs text-success mt-1.5 text-center">今日目標已達成！</p>
            )}
          </div>
          <div className="flex gap-3 mt-4">
            <Link
              href="/review"
              className="px-5 py-3 bg-warning text-white rounded-xl font-medium text-sm"
            >
              去複習
            </Link>
            <Link
              href="/"
              className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm"
            >
              回首頁
            </Link>
          </div>
        </div>
        <BottomNav />
      </main>
    );
  }

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <Header remaining={session.formattedRemaining} />

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-text-muted mb-2">
          <span>進度</span>
          <span>
            {currentIndex + 1} / {words.length}
          </span>
        </div>
        <div className="h-2 bg-bg-input rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / words.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="flex-1 flex items-center justify-center mt-4">
        <Flashcard
          key={words[currentIndex].id}
          word={words[currentIndex]}
          onRate={handleRate}
        />
      </div>

      <BottomNav />
    </main>
  );
}

function Header({ remaining }: { remaining: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <Link href="/" className="p-2 -ml-2 text-text-secondary">
        <ChevronLeftIcon size={24} />
      </Link>
      <h1 className="text-lg font-bold">學新字</h1>
      <div className="flex items-center gap-1 text-text-muted text-sm">
        <ClockIcon size={16} />
        <span>{remaining}</span>
      </div>
    </div>
  );
}
