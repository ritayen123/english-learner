"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import BottomNav from "../../../components/ui/BottomNav";
import { ChevronLeftIcon } from "../../../components/ui/Icons";
import { useApp } from "../../../lib/context/AppContext";
import { toeicService } from "../../../lib/services/toeic-service";
import type { Part7Set } from "../../../data/toeic-part7";

const SETS_PER_BATCH = 2;

function fmt(sec: number): string {
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}

export default function Part7Page() {
  const { initialized } = useApp();
  const [sets, setSets] = useState<Part7Set[]>([]);
  const [setIdx, setSetIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<{ correct: boolean; kind: string }[]>([]);
  const [finished, setFinished] = useState(false);
  const [elapsed, setElapsed] = useState(0); // 全程經過秒數
  const [setStart, setSetStart] = useState(0); // 目前這組開始時的 elapsed
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({}); // 各篇摺疊狀態
  const [reload, setReload] = useState(0); // 「再來一組」時 +1 觸發重新抽題
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!initialized) return;
    let cancelled = false;
    toeicService.getPart7Batch(SETS_PER_BATCH).then((batch) => {
      if (cancelled) return;
      setSetIdx(0);
      setQIdx(0);
      setPicked(null);
      setResults([]);
      setFinished(false);
      setElapsed(0);
      setSetStart(0);
      setCollapsed({});
      setSets(batch);
    });
    return () => {
      cancelled = true;
    };
  }, [initialized, reload]);

  const loadBatch = useCallback(() => setReload((r) => r + 1), []);

  // 經過時間：載入完成開始計時，完成畫面停止
  useEffect(() => {
    if (sets.length === 0 || finished) return;
    timerRef.current = setInterval(() => setElapsed((t) => t + 1), 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [sets.length, finished]);

  const answer = useCallback(
    async (choice: number) => {
      const set = sets[setIdx];
      const q = set?.questions[qIdx];
      if (!q || picked !== null) return;
      const correct = choice === q.answer;
      // 先更新 UI（選項變色），再等待寫入完成，避免快速離開頁面時紀錄遺失
      setPicked(choice);
      setResults((r) => [...r, { correct, kind: q.kind }]);
      await toeicService.recordResult(`${set.id}-q${qIdx + 1}`, "part7", q.kind, correct);
      await toeicService.recordDaily("part7", correct);
    },
    [sets, setIdx, qIdx, picked]
  );

  const next = () => {
    setPicked(null);
    const set = sets[setIdx];
    if (qIdx + 1 < set.questions.length) {
      setQIdx((i) => i + 1);
    } else if (setIdx + 1 < sets.length) {
      setSetIdx((i) => i + 1);
      setQIdx(0);
      setSetStart(elapsed); // 下一組計時歸零
      setCollapsed({});
    } else {
      setFinished(true);
    }
  };

  if (!initialized || sets.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入題庫中...</p>
      </div>
    );
  }

  if (finished) {
    const score = results.filter((r) => r.correct).length;
    const suggested = sets.reduce((s, x) => s + x.suggestedMinutes, 0) * 60;
    const byKind = new Map<string, { wrong: number; total: number }>();
    results.forEach(({ correct, kind }) => {
      const c = byKind.get(kind) ?? { wrong: 0, total: 0 };
      c.total += 1;
      if (!correct) c.wrong += 1;
      byKind.set(kind, c);
    });
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header groupElapsed={null} overtime={false} suggestedMinutes={null} />
        <div className="text-center mt-8 mb-6">
          <div className="text-5xl mb-3">{score >= results.length * 0.9 ? "🏆" : score >= results.length * 0.7 ? "💪" : "📚"}</div>
          <p className="text-2xl font-bold text-text-primary">{score} / {results.length}</p>
          <p className="text-sm text-text-muted mt-1">答對率 {Math.round((score / results.length) * 100)}%（950 目標：90%+）</p>
        </div>
        <div className="bg-bg-card border border-border rounded-2xl p-4 mb-4">
          <div className="flex justify-between items-center text-sm py-1.5">
            <span className="text-text-secondary">總時間</span>
            <span className={`font-bold ${elapsed > suggested ? "text-danger" : "text-success"}`}>{fmt(elapsed)}</span>
          </div>
          <div className="flex justify-between items-center text-sm py-1.5">
            <span className="text-text-secondary">建議時間（{sets.map((s) => `${s.suggestedMinutes} 分`).join(" + ")}）</span>
            <span className="text-text-muted">{fmt(suggested)}</span>
          </div>
          <p className="text-[11px] text-text-muted mt-1">
            {elapsed > suggested ? "超出建議時間，先求對再求快，速度會跟上" : "在建議時間內完成，維持這個節奏 👍"}
          </p>
        </div>
        <div className="bg-bg-card border border-border rounded-2xl p-4 mb-4">
          <p className="text-sm font-bold text-text-primary mb-2">題型分析</p>
          {[...byKind.entries()].sort((a, b) => b[1].wrong - a[1].wrong).map(([kind, c]) => (
            <div key={kind} className="flex justify-between items-center text-sm py-1.5">
              <span className="text-text-secondary">{kind}</span>
              <span className={c.wrong > 0 ? "text-danger font-medium" : "text-success"}>
                {c.wrong > 0 ? `錯 ${c.wrong}/${c.total}` : `全對 ${c.total} 題`}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted text-center mb-4">錯題已自動加入錯題本，明天到期複習</p>
        <div className="flex gap-3 justify-center">
          <button onClick={loadBatch} className="px-5 py-3 bg-accent text-white rounded-xl font-medium text-sm">
            再來一組（{SETS_PER_BATCH} 組）
          </button>
          <Link href="/toeic" className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm">回 TOEIC</Link>
        </div>
        <BottomNav />
      </main>
    );
  }

  const set = sets[setIdx];
  const q = set.questions[qIdx];
  const answered = picked !== null;
  const groupElapsed = elapsed - setStart; // 目前這組的經過秒數
  const overtime = groupElapsed > set.suggestedMinutes * 60;

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <Header groupElapsed={groupElapsed} overtime={overtime} suggestedMinutes={set.suggestedMinutes} />

      {/* 進度條 */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-text-muted mb-1.5">
          <span>第 {setIdx + 1}/{sets.length} 組・第 {qIdx + 1}/{set.questions.length} 題</span>
          <span>{set.format === "double" ? "雙篇" : "單篇"}・{q.kind}・難度 {"★".repeat(set.difficulty)}</span>
        </div>
        <div className="h-1.5 bg-bg-input rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{
              width: `${((sets.slice(0, setIdx).reduce((s, x) => s + x.questions.length, 0) + qIdx + (answered ? 1 : 0)) / sets.reduce((s, x) => s + x.questions.length, 0)) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* 文章（double 兩篇都顯示、可各自摺疊） */}
      <p className="text-xs font-bold text-text-muted mb-2">{set.title}</p>
      <div className="flex flex-col gap-3 mb-4">
        {set.passages.map((p, i) => {
          const isCollapsed = collapsed[i] ?? false;
          return (
            <div key={i} className="bg-bg-card border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setCollapsed((c) => ({ ...c, [i]: !isCollapsed }))}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <span className="text-xs font-bold text-text-primary">{p.label}</span>
                <span className="text-xs text-text-muted">{isCollapsed ? "展開 ▾" : "摺疊 ▴"}</span>
              </button>
              {!isCollapsed && (
                <div className="px-4 pb-4">
                  <p
                    className={`text-sm text-text-primary leading-relaxed whitespace-pre-wrap ${
                      p.type === "chat" || p.type === "form" ? "font-mono text-[13px]" : ""
                    }`}
                  >
                    {p.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 題目與選項 */}
      <div className="bg-bg-card border border-border rounded-2xl p-4 mb-3">
        <p className="text-sm font-medium text-text-primary leading-relaxed">
          <span className="font-bold mr-1.5">{qIdx + 1}.</span>
          {q.question}
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        {q.options.map((opt, i) => {
          let cls = "bg-bg-card border-border text-text-primary";
          if (answered) {
            if (i === q.answer) cls = "bg-success/15 border-success text-success font-bold";
            else if (i === picked) cls = "bg-danger/15 border-danger text-danger";
            else cls = "bg-bg-card border-border text-text-muted";
          }
          return (
            <button
              key={i}
              disabled={answered}
              onClick={() => answer(i)}
              className={`border rounded-xl px-4 py-3 text-left text-sm transition-colors ${cls}`}
            >
              <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* 解說 */}
      {answered && (
        <div className="mt-4">
          <div className="bg-bg-card border border-border rounded-2xl p-4">
            <p className="text-xs font-bold text-text-muted mb-1">解說（{q.kind}）</p>
            <p className="text-sm text-text-secondary leading-relaxed">{q.explanation}</p>
          </div>
          <button onClick={next} className="w-full mt-3 py-3.5 bg-accent text-white rounded-xl font-bold">
            {qIdx + 1 < set.questions.length ? "下一題" : setIdx + 1 < sets.length ? "下一組" : "看成績"}
          </button>
        </div>
      )}

      <BottomNav />
    </main>
  );
}

function Header({
  groupElapsed,
  overtime,
  suggestedMinutes,
}: {
  groupElapsed: number | null;
  overtime: boolean;
  suggestedMinutes: number | null;
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <Link href="/toeic" className="p-2 -ml-2 text-text-secondary">
        <ChevronLeftIcon size={24} />
      </Link>
      <h1 className="text-lg font-bold">Part 7 閱讀題組</h1>
      <span className={`text-xs font-bold text-right ${overtime ? "text-danger" : "text-text-muted"}`}>
        {groupElapsed !== null ? (
          <>
            {fmt(groupElapsed)}
            {suggestedMinutes !== null && <span className="block font-normal text-[10px]">建議 {suggestedMinutes} 分</span>}
          </>
        ) : (
          <span className="inline-block w-12" />
        )}
      </span>
    </div>
  );
}
