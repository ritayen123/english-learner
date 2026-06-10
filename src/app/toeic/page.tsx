"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BottomNav from "../../components/ui/BottomNav";
import { useApp } from "../../lib/context/AppContext";
import { toeicService } from "../../lib/services/toeic-service";
import { TOEIC_EXAM_DATE, type ToeicDaily } from "../../lib/types";

interface Phase {
  until: string;
  name: string;
  focus: string;
}

const PHASES: Phase[] = [
  { until: "2026-07-07", name: "第一階段：套路期", focus: "Part 5 文法套路＋同義字打底，聽力每日不間斷" },
  { until: "2026-08-04", name: "第二階段：聽力衝刺", focus: "Part 2 加量、1.2x 變速訓練，L350 → 450 的關鍵期" },
  { until: "2026-08-24", name: "第三階段：限時閱讀＋模考", focus: "每週 2 次實體模考，Part 7 限時訓練" },
  { until: "2026-08-31", name: "第四階段：錯題清算", focus: "只做錯題本，不碰新題，考前歸零" },
];

const REVIEW_GOAL = 50;
const READ_GOAL = 2;

export default function ToeicPage() {
  const { initialized, settings, todayStats } = useApp();
  const [daily, setDaily] = useState<ToeicDaily | null>(null);
  const [week, setWeek] = useState<ToeicDaily[]>([]);
  const [dueWrong, setDueWrong] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);

  useEffect(() => {
    if (!initialized) return;
    toeicService.getDaily().then(setDaily);
    toeicService.getLast7Days().then(setWeek);
    toeicService.getDueWrong().then((w) => setDueWrong(w.length));
    toeicService.getAllWrong().then((w) => setTotalWrong(w.length));
  }, [initialized]);

  const today = new Date();
  const exam = new Date(TOEIC_EXAM_DATE + "T00:00:00");
  const daysLeft = Math.max(0, Math.ceil((exam.getTime() - today.getTime()) / 86400000));
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const phase = PHASES.find((p) => todayStr <= p.until) ?? PHASES[PHASES.length - 1];

  const acc = (correct: number, done: number) => (done > 0 ? Math.round((correct / done) * 100) : null);

  const drills = [
    {
      href: "/toeic/part5", label: "Part 5 文法",
      done: daily?.part5Done ?? 0, goal: settings.toeicGoalPart5, unit: "題", time: "約 20 分",
      color: "bg-accent", accuracy: acc(daily?.part5Correct ?? 0, daily?.part5Done ?? 0),
    },
    {
      href: "/toeic/part2", label: "Part 2 聽力",
      done: daily?.part2Done ?? 0, goal: settings.toeicGoalPart2, unit: "題", time: "約 25 分",
      color: "bg-success", accuracy: acc(daily?.part2Correct ?? 0, daily?.part2Done ?? 0),
    },
    {
      href: "/toeic/vocab", label: "同義替換字",
      done: daily?.vocabDone ?? 0, goal: settings.toeicGoalVocab, unit: "組", time: "約 15 分",
      color: "bg-warning", accuracy: acc(daily?.vocabCorrect ?? 0, daily?.vocabDone ?? 0),
    },
    {
      href: "/review", label: "單字複習（SRS）",
      done: todayStats?.wordsReviewed ?? 0, goal: REVIEW_GOAL, unit: "字", time: "約 30 分",
      color: "bg-accent", accuracy: null,
    },
    {
      href: "/read?domain=business", label: "限時閱讀（Part 7 體感）",
      done: todayStats?.articlesRead ?? 0, goal: READ_GOAL, unit: "篇", time: "約 30 分",
      color: "bg-success", accuracy: null,
    },
  ];

  // 近 7 日整體正確率（三類合計）
  const weekTrend = week.map((d) => {
    const done = d.part5Done + d.part2Done + d.vocabDone;
    const correct = d.part5Correct + d.part2Correct + d.vocabCorrect;
    return { date: d.date.slice(5).replace("-", "/"), pct: done > 0 ? Math.round((correct / done) * 100) : null, done };
  });
  const hasTrend = weekTrend.some((d) => d.done > 0);

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      {/* 倒數 */}
      <div className="bg-bg-card border border-border rounded-2xl p-5 mb-4 text-center">
        <p className="text-sm text-text-muted mb-1">距離 9/1 多益考試</p>
        <p className="text-4xl font-bold text-accent">{daysLeft} <span className="text-lg">天</span></p>
        <p className="text-xs text-text-muted mt-2">目標：700 → 950（L350→490・R350→460）</p>
      </div>

      {/* 階段 */}
      <div className="bg-bg-card border border-border rounded-2xl p-4 mb-4">
        <p className="text-sm font-bold text-text-primary">{phase.name}</p>
        <p className="text-xs text-text-secondary mt-1">{phase.focus}</p>
      </div>

      {/* 錯題本 */}
      <Link href="/toeic/mistakes" className="block bg-bg-card border border-border rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-text-primary">錯題本</p>
            <p className="text-xs text-text-muted mt-0.5">累積 {totalWrong} 題待消滅</p>
          </div>
          {dueWrong > 0 ? (
            <span className="bg-danger text-white text-xs font-bold rounded-full px-2.5 py-1">{dueWrong} 題到期</span>
          ) : (
            <span className="text-xs text-success">今日無到期 ✓</span>
          )}
        </div>
      </Link>

      {/* 每日任務 */}
      <p className="text-sm font-bold text-text-primary mb-2">今日任務（每天 2 小時）</p>
      <div className="flex flex-col gap-3">
        {drills.map((t) => {
          const pct = Math.min((t.done / t.goal) * 100, 100);
          const finished = t.done >= t.goal;
          return (
            <Link key={t.href} href={t.href} className="block bg-bg-card border border-border rounded-2xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-text-primary">
                  {finished ? "✅ " : ""}{t.label}
                  {t.accuracy !== null && (
                    <span className={`ml-2 text-xs ${t.accuracy >= 90 ? "text-success" : "text-text-muted"}`}>
                      正確率 {t.accuracy}%
                    </span>
                  )}
                </span>
                <span className="text-xs text-text-muted">{t.done}/{t.goal} {t.unit}・{t.time}</span>
              </div>
              <div className="h-2 bg-bg-input rounded-full overflow-hidden">
                <div className={`h-full ${t.color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* 近 7 日正確率 */}
      {hasTrend && (
        <div className="bg-bg-card border border-border rounded-2xl p-4 mt-4">
          <p className="text-sm font-bold text-text-primary mb-3">近 7 日正確率</p>
          <div className="flex items-end justify-between gap-1.5 h-24">
            {weekTrend.map((d) => (
              <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] text-text-muted">{d.pct !== null ? `${d.pct}` : ""}</span>
                <div className="w-full bg-bg-input rounded-t-md overflow-hidden flex items-end" style={{ height: "60px" }}>
                  <div
                    className={`w-full rounded-t-md ${d.pct !== null && d.pct >= 90 ? "bg-success" : "bg-accent"}`}
                    style={{ height: d.pct !== null ? `${d.pct}%` : "0%" }}
                  />
                </div>
                <span className="text-[10px] text-text-muted">{d.date}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-text-muted mt-2 text-center">綠色 = 達到 90% 考試水準線</p>
        </div>
      )}

      <p className="text-xs text-text-muted mt-4 text-center">
        模考週（8月）請用實體題本計時模考，App 負責日常訓練與錯題管理
      </p>

      <BottomNav />
    </main>
  );
}
