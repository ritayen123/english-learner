"use client";

import { useState, useEffect, useCallback } from "react";
import { useApp } from "../lib/context/AppContext";
import BottomNav from "../components/ui/BottomNav";
import ProgressRing from "../components/ui/ProgressRing";
import StreakBadge from "../components/ui/StreakBadge";
import { BookIcon, RepeatIcon, FileTextIcon, ClockIcon, ChatBubbleIcon, VolumeIcon } from "../components/ui/Icons";
import { useSpeech } from "../hooks/useSpeech";
import { getDailyPhraseId, getPhraseContext } from "../lib/daily-phrase";
import { db } from "../lib/db";
import Link from "next/link";
import type { Word } from "../lib/types";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "早安";
  if (hour < 18) return "午安";
  return "晚安";
}

export default function Dashboard() {
  const { initialized, todayStats, totalLearned, dueCount, streak, settings } =
    useApp();

  if (!initialized) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入中...</p>
      </div>
    );
  }

  return (
    <main className="flex-1 pb-20 px-4 pt-8 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{getGreeting()}</h1>
          <p className="text-sm text-text-secondary mt-1">
            每天 {settings.dailyNewWords} 個新字，持續累積！
          </p>
        </div>
        <StreakBadge days={streak} />
      </div>

      {/* Progress Ring */}
      <div className="flex justify-center mb-8">
        <ProgressRing current={totalLearned} total={6000} label="學習進度" />
      </div>

      {/* Daily Travel Phrase */}
      <DailyTravelPhrase />

      {/* Today Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard
          label="新學"
          value={todayStats?.newWordsLearned ?? 0}
          target={settings.dailyNewWords}
        />
        <StatCard
          label="複習"
          value={todayStats?.wordsReviewed ?? 0}
          target={settings.dailyReviewCap}
        />
        <StatCard
          label="閱讀"
          value={todayStats?.articlesRead ?? 0}
          target={1}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <QuickAction
          href="/learn"
          icon={<BookIcon size={24} />}
          label="學新字"
          subtitle={`還有 ${Math.max(0, 6000 - totalLearned)} 字可學`}
          color="var(--accent)"
        />
        <QuickAction
          href="/review"
          icon={<RepeatIcon size={24} />}
          label="複習"
          subtitle={dueCount > 0 ? `${dueCount} 字待複習` : "目前沒有待複習"}
          color="var(--warning)"
          urgent={dueCount > 0}
        />
        <QuickAction
          href="/read"
          icon={<FileTextIcon size={24} />}
          label="閱讀文章"
          subtitle="提升閱讀力"
          color="var(--success)"
        />
        <QuickAction
          href="/me"
          icon={<ClockIcon size={24} />}
          label="學習紀錄"
          subtitle="查看進度"
          color="var(--domain-academic)"
        />
        <QuickAction
          href="/travel/scenarios"
          icon={<ChatBubbleIcon size={24} />}
          label="情境對話"
          subtitle="模擬真實會話"
          color="var(--domain-colloquial)"
        />
      </div>

      <BottomNav />
    </main>
  );
}

function StatCard({
  label,
  value,
  target,
}: {
  label: string;
  value: number;
  target: number;
}) {
  const percent = target > 0 ? Math.min((value / target) * 100, 100) : 0;
  return (
    <div className="bg-bg-card border border-border rounded-xl p-3 text-center">
      <p className="text-xs text-text-muted mb-1">{label}</p>
      <p className="text-xl font-bold text-text-primary">
        {value}
        <span className="text-sm text-text-muted font-normal">/{target}</span>
      </p>
      <div className="mt-2 h-1 bg-bg-input rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function QuickAction({
  href,
  icon,
  label,
  subtitle,
  color,
  urgent,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  subtitle: string;
  color: string;
  urgent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`bg-bg-card border rounded-xl p-4 flex flex-col gap-2 transition-transform active:scale-[0.97] ${
        urgent ? "border-warning animate-pulse" : "border-border"
      }`}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{
          backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
          color,
        }}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-text-primary">{label}</p>
        <p className="text-xs text-text-muted">{subtitle}</p>
      </div>
    </Link>
  );
}

function DailyTravelPhrase() {
  const [phrase, setPhrase] = useState<Word | null>(null);
  const [flipped, setFlipped] = useState(false);
  const { playWord } = useSpeech();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const phraseId = getDailyPhraseId(today);
    db.words.get(phraseId).then((w) => {
      if (w) setPhrase(w);
    });
  }, []);

  if (!phrase) return null;

  const context = getPhraseContext(phrase.id);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-text-secondary">每日一句</h2>
        <span className="text-xs" style={{ color: "var(--domain-travel)" }}>
          旅遊情境
        </span>
      </div>
      <div
        onClick={() => setFlipped(!flipped)}
        className="bg-bg-card border border-border rounded-xl p-4 cursor-pointer transition-transform active:scale-[0.98]"
      >
        <p className="text-xs text-text-muted mb-2">{context}</p>
        <p className="text-base font-semibold text-text-primary leading-relaxed">
          {phrase.english}
        </p>
        {flipped && (
          <p className="text-sm mt-2 animate-fadeIn" style={{ color: "var(--accent)" }}>
            {phrase.chinese}
          </p>
        )}
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              playWord(phrase.english);
            }}
            className="p-2 rounded-full transition-colors"
            style={{
              backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
              color: "var(--accent)",
            }}
          >
            <VolumeIcon size={18} />
          </button>
          <span className="text-xs text-text-muted">
            {flipped ? "點擊收起" : "點擊看翻譯"}
          </span>
        </div>
      </div>
    </div>
  );
}
