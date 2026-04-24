"use client";

import { useState, useEffect, useCallback } from "react";
import { useApp } from "../../lib/context/AppContext";
import { srsService } from "../../lib/services/srs-service";
import { statsService } from "../../lib/services/stats-service";
import { articleService } from "../../lib/services/article-service";
import { db } from "../../lib/db";
import BottomNav from "../../components/ui/BottomNav";
import StreakBadge from "../../components/ui/StreakBadge";
import {
  BookIcon,
  SearchIcon,
  SettingsIcon,
  BarChartIcon,
  PlusIcon,
} from "../../components/ui/Icons";
import Link from "next/link";
import type { DailyStats } from "../../lib/types";

export default function MePage() {
  const { initialized, totalLearned, streak } = useApp();
  const [wordStats, setWordStats] = useState({
    new: 0,
    learning: 0,
    review: 0,
    mastered: 0,
    total: 0,
  });
  const [weeklyData, setWeeklyData] = useState<DailyStats[]>([]);
  const [allTimeStats, setAllTimeStats] = useState({
    totalStudySeconds: 0,
    totalNewWords: 0,
    totalReviews: 0,
    totalArticles: 0,
    daysActive: 0,
  });
  const [articlesCompleted, setArticlesCompleted] = useState(0);
  const [exportStatus, setExportStatus] = useState<"idle" | "copying" | "copied">("idle");

  const handleExport = useCallback(async () => {
    setExportStatus("copying");
    const [userWords, userArticles, dailyStats] = await Promise.all([
      db.userWords.toArray(),
      db.userArticles.toArray(),
      db.dailyStats.toArray(),
    ]);
    const data = {
      exportedAt: new Date().toISOString(),
      userWords,
      userArticles,
      dailyStats,
    };
    const json = JSON.stringify(data, null, 2);
    try {
      await navigator.clipboard.writeText(json);
      setExportStatus("copied");
    } catch {
      // Fallback: download as file
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `learning-data-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setExportStatus("copied");
    }
    setTimeout(() => setExportStatus("idle"), 2000);
  }, []);

  useEffect(() => {
    if (!initialized) return;
    async function load() {
      const [ws, weekly, allTime, artCount] = await Promise.all([
        srsService.getStats(),
        statsService.getWeekly(),
        statsService.getAllTimeStats(),
        articleService.getCompletedCount(),
      ]);
      setWordStats(ws);
      setWeeklyData(weekly);
      setAllTimeStats(allTime);
      setArticlesCompleted(artCount);
    }
    load();
  }, [initialized]);

  if (!initialized) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入中...</p>
      </div>
    );
  }

  const maxStudyTime = Math.max(
    ...weeklyData.map((d) => d.studyTimeSeconds),
    1
  );

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <h1 className="text-2xl font-bold mb-6">我的學習</h1>

      {/* Overview cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-text-muted mb-1">已學單字</p>
          <p className="text-2xl font-bold text-accent">{totalLearned}</p>
          <p className="text-xs text-text-muted">/ 4000</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-text-muted mb-1">連續天數</p>
          <div className="mt-1">
            <StreakBadge days={streak} />
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-text-muted mb-1">文章已讀</p>
          <p className="text-2xl font-bold text-success">{articlesCompleted}</p>
          <p className="text-xs text-text-muted">/ 90</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-text-muted mb-1">總學習時間</p>
          <p className="text-2xl font-bold text-text-primary">
            {Math.round(allTimeStats.totalStudySeconds / 60)}
          </p>
          <p className="text-xs text-text-muted">分鐘</p>
        </div>
      </div>

      {/* Word status breakdown */}
      <div className="bg-bg-card border border-border rounded-xl p-4 mb-6">
        <h2 className="text-sm font-semibold mb-3">單字狀態分佈</h2>
        <div className="flex gap-1 h-3 rounded-full overflow-hidden bg-bg-input">
          {wordStats.total > 0 && (
            <>
              <div
                className="bg-accent rounded-l-full transition-all"
                style={{
                  width: `${(wordStats.learning / wordStats.total) * 100}%`,
                }}
              />
              <div
                className="bg-warning transition-all"
                style={{
                  width: `${(wordStats.review / wordStats.total) * 100}%`,
                }}
              />
              <div
                className="bg-success rounded-r-full transition-all"
                style={{
                  width: `${(wordStats.mastered / wordStats.total) * 100}%`,
                }}
              />
            </>
          )}
        </div>
        <div className="flex justify-between mt-2 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent" />
            學習中 {wordStats.learning}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-warning" />
            複習中 {wordStats.review}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-success" />
            已精熟 {wordStats.mastered}
          </span>
        </div>
      </div>

      {/* Weekly chart */}
      {weeklyData.length > 0 && (
        <div className="bg-bg-card border border-border rounded-xl p-4 mb-6">
          <h2 className="text-sm font-semibold mb-3">本週學習時間</h2>
          <div className="flex items-end gap-2 h-24">
            {weeklyData.map((d) => (
              <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-accent rounded-t transition-all"
                  style={{
                    height: `${(d.studyTimeSeconds / maxStudyTime) * 80}px`,
                    minHeight: d.studyTimeSeconds > 0 ? 4 : 0,
                  }}
                />
                <span className="text-[10px] text-text-muted">
                  {["日","一","二","三","四","五","六"][new Date(d.date).getDay()]}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick links */}
      <div className="space-y-2">
        <QuickLink
          href="/words"
          icon={<SearchIcon size={20} />}
          label="瀏覽單字庫"
        />
        <QuickLink
          href="/words?add=1"
          icon={<PlusIcon size={20} />}
          label="新增自訂單字"
        />
        <QuickLink
          href="/settings"
          icon={<SettingsIcon size={20} />}
          label="設定"
        />
        <button
          onClick={handleExport}
          disabled={exportStatus !== "idle"}
          className="w-full flex items-center gap-3 bg-bg-card border border-border rounded-xl p-3.5 transition-transform active:scale-[0.98] text-left"
        >
          <span className="text-text-secondary">
            <BarChartIcon size={20} />
          </span>
          <span className="text-sm font-medium text-text-primary">
            {exportStatus === "copied" ? "已複製到剪貼簿！" : "匯出學習資料"}
          </span>
        </button>
      </div>

      <BottomNav />
    </main>
  );
}

function QuickLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 bg-bg-card border border-border rounded-xl p-3.5 transition-transform active:scale-[0.98]"
    >
      <span className="text-text-secondary">{icon}</span>
      <span className="text-sm font-medium text-text-primary">{label}</span>
    </Link>
  );
}
