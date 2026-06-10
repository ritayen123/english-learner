"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const { initialized, settings, refreshStats, totalLearned, updateSettings } = useApp();
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [learnedCount, setLearnedCount] = useState(0);
  const session = useStudySession(settings.sessionMinutes);
  const isProcessingRef = useRef(false);

  useEffect(() => {
    if (!initialized) return;
    srsService.getNewWords(settings.dailyNewWords, undefined, settings.placementLevel).then((w) => {
      setWords(w);
      if (w.length > 0) session.start();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized, settings.dailyNewWords, settings.placementLevel]);

  const handleRate = useCallback(
    async (quality: number) => {
      if (isProcessingRef.current) return;
      isProcessingRef.current = true;
      try {
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
      } finally {
        isProcessingRef.current = false;
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

  if (!settings.placementCompleted && words.length > 0) {
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header remaining={session.formattedRemaining} />
        <div className="flex-1 flex flex-col items-center justify-center mt-16 gap-4">
          <div className="text-5xl mb-2">📝</div>
          <p className="text-xl font-bold text-text-primary">先做個分級測驗？</p>
          <p className="text-sm text-text-secondary text-center px-4">
            20 題快速測驗，幫你找到適合的學習起點，<br />避免學太簡單或太難的單字
          </p>
          <p className="text-xs text-text-muted">
            目前等級：Level {settings.placementLevel} — {settings.placementLevel === 1 ? "基礎" : settings.placementLevel === 2 ? "初中級" : settings.placementLevel === 3 ? "中級" : settings.placementLevel === 4 ? "中高級" : "高級"}
          </p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => {
                updateSettings({ placementCompleted: true });
              }}
              className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm"
            >
              跳過，直接學
            </button>
            <Link
              href="/placement"
              className="px-6 py-3 bg-accent text-white rounded-xl font-medium text-sm"
            >
              開始測驗
            </Link>
          </div>
        </div>
        <BottomNav />
      </main>
    );
  }

  if (words.length === 0) {
    const allLearned = totalLearned >= 6000;
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header remaining={session.formattedRemaining} />
        <div className="flex-1 flex flex-col items-center justify-center mt-20 gap-4">
          {allLearned ? (
            <>
              <div className="text-5xl mb-2">🏆</div>
              <p className="text-xl font-bold text-text-primary">恭喜！</p>
              <p className="text-text-secondary text-center">
                你已學完全部 6000 個單字！<br />可以去複習鞏固記憶
              </p>
              <Link href="/review" className="mt-4 px-6 py-3 bg-warning text-white rounded-xl font-medium">
                去複習
              </Link>
            </>
          ) : (
            <>
              <div className="text-5xl mb-2">👍</div>
              <p className="text-xl font-bold text-text-primary">今日學習完成！</p>
              <p className="text-text-secondary text-center">
                今日新字已全部學完，<br />可以去複習或明天再來！
              </p>
              <div className="flex gap-3 mt-4">
                <Link href="/review" className="px-5 py-3 bg-warning text-white rounded-xl font-medium text-sm">
                  去複習
                </Link>
                <Link href="/" className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm">
                  回首頁
                </Link>
              </div>
            </>
          )}
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
