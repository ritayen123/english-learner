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
import type { Word, UserWord } from "../../lib/types";

type ReviewItem = UserWord & { word: Word };

export default function ReviewPage() {
  const { initialized, settings, refreshStats } = useApp();
  const [queue, setQueue] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const session = useStudySession(settings.sessionMinutes);

  useEffect(() => {
    if (!initialized) return;
    srsService.getDueReviews(settings.dailyReviewCap).then((items) => {
      setQueue(items);
      if (items.length > 0) session.start();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized, settings.dailyReviewCap]);

  const handleRate = useCallback(
    async (quality: number) => {
      const item = queue[currentIndex];
      if (!item) return;

      await srsService.processReview(item.wordId, quality);
      await statsService.recordReview();
      setReviewedCount((c) => c + 1);

      // If "Again", push card to end of queue
      if (quality < 3) {
        setQueue((q) => [...q, item]);
      }

      if (currentIndex + 1 < queue.length) {
        setCurrentIndex((i) => i + 1);
      } else {
        setCompleted(true);
        session.pause();
        refreshStats();
      }
    },
    [queue, currentIndex, session, refreshStats]
  );

  if (!initialized) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入中...</p>
      </div>
    );
  }

  if (queue.length === 0) {
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header remaining={session.formattedRemaining} />
        <div className="flex-1 flex flex-col items-center justify-center mt-20 gap-4">
          <div className="text-5xl mb-2">✅</div>
          <p className="text-xl font-bold text-text-primary">複習完成！</p>
          <p className="text-text-secondary text-center">
            目前沒有待複習的字��<br />明天再來吧！
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
          <div className="text-5xl mb-2">💪</div>
          <p className="text-xl font-bold text-text-primary">複習完成！</p>
          <p className="text-text-secondary">
            複習了 <span className="font-bold text-accent">{reviewedCount}</span> 個字
          </p>
          <p className="text-sm text-text-muted">
            花了 {session.formattedElapsed}
          </p>
          <div className="w-full max-w-xs mt-2 bg-bg-card border border-border rounded-xl p-3">
            <div className="flex justify-between text-xs text-text-muted mb-1.5">
              <span>今日複習目標</span>
              <span>{reviewedCount} / {settings.dailyReviewCap}</span>
            </div>
            <div className="h-2 bg-bg-input rounded-full overflow-hidden">
              <div
                className="h-full bg-warning rounded-full transition-all duration-500"
                style={{ width: `${Math.min((reviewedCount / settings.dailyReviewCap) * 100, 100)}%` }}
              />
            </div>
            {reviewedCount >= settings.dailyReviewCap && (
              <p className="text-xs text-success mt-1.5 text-center">今日複習已達標！</p>
            )}
          </div>
          <div className="flex gap-3 mt-4">
            <Link
              href="/read"
              className="px-5 py-3 bg-success text-white rounded-xl font-medium text-sm"
            >
              去閱讀
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

  const currentItem = queue[currentIndex];

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <Header remaining={session.formattedRemaining} />

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-text-muted mb-2">
          <span>剩餘</span>
          <span>{queue.length - currentIndex} 張</span>
        </div>
        <div className="h-2 bg-bg-input rounded-full overflow-hidden">
          <div
            className="h-full bg-warning rounded-full transition-all duration-300"
            style={{
              width: `${(currentIndex / queue.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="flex-1 flex items-center justify-center mt-4">
        <Flashcard
          key={`${currentItem.wordId}-${currentIndex}`}
          word={currentItem.word}
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
      <h1 className="text-lg font-bold">複習</h1>
      <div className="flex items-center gap-1 text-text-muted text-sm">
        <ClockIcon size={16} />
        <span>{remaining}</span>
      </div>
    </div>
  );
}
