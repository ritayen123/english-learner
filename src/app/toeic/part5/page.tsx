"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import BottomNav from "../../../components/ui/BottomNav";
import { ChevronLeftIcon } from "../../../components/ui/Icons";
import { useApp } from "../../../lib/context/AppContext";
import { toeicService } from "../../../lib/services/toeic-service";
import type { Part5Question } from "../../../data/toeic-part5";

const SECONDS_PER_Q = 20;
const BATCH = 30;

export default function Part5Page() {
  const { initialized } = useApp();
  const [questions, setQuestions] = useState<Part5Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null); // -1 = 逾時
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_Q);
  const [results, setResults] = useState<{ q: Part5Question; correct: boolean }[]>([]);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!initialized) return;
    toeicService.getPart5Batch(BATCH).then(setQuestions);
  }, [initialized]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const answer = useCallback(
    (choice: number) => {
      stopTimer();
      const q = questions[idx];
      if (!q) return;
      const correct = choice === q.answer;
      setPicked(choice);
      setResults((r) => [...r, { q, correct }]);
      toeicService.recordResult(q.id, "part5", q.category, correct);
      toeicService.bumpDaily("part5Done");
    },
    [questions, idx, stopTimer]
  );

  // 每題計時
  useEffect(() => {
    if (questions.length === 0 || finished || picked !== null) return;
    setTimeLeft(SECONDS_PER_Q);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          answer(-1); // 逾時算錯
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, questions.length, finished]);

  const next = () => {
    setPicked(null);
    if (idx + 1 < questions.length) setIdx((i) => i + 1);
    else setFinished(true);
  };

  if (!initialized || questions.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入題庫中...</p>
      </div>
    );
  }

  if (finished) {
    const score = results.filter((r) => r.correct).length;
    const byCategory = new Map<string, { wrong: number; total: number }>();
    results.forEach(({ q, correct }) => {
      const c = byCategory.get(q.category) ?? { wrong: 0, total: 0 };
      c.total += 1;
      if (!correct) c.wrong += 1;
      byCategory.set(q.category, c);
    });
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header timeLeft={null} />
        <div className="text-center mt-8 mb-6">
          <div className="text-5xl mb-3">{score >= results.length * 0.9 ? "🏆" : score >= results.length * 0.7 ? "💪" : "📚"}</div>
          <p className="text-2xl font-bold text-text-primary">{score} / {results.length}</p>
          <p className="text-sm text-text-muted mt-1">答對率 {Math.round((score / results.length) * 100)}%（950 目標：90%+）</p>
        </div>
        <div className="bg-bg-card border border-border rounded-2xl p-4 mb-4">
          <p className="text-sm font-bold text-text-primary mb-2">弱點分析</p>
          {[...byCategory.entries()].sort((a, b) => b[1].wrong - a[1].wrong).map(([cat, c]) => (
            <div key={cat} className="flex justify-between text-sm py-1">
              <span className="text-text-secondary">{cat}</span>
              <span className={c.wrong > 0 ? "text-danger font-medium" : "text-success"}>
                {c.wrong > 0 ? `錯 ${c.wrong}/${c.total}` : `全對 ${c.total} 題`}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted text-center mb-4">錯題已自動加入錯題本，明天到期複習</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => location.reload()} className="px-5 py-3 bg-accent text-white rounded-xl font-medium text-sm">再來 30 題</button>
          <Link href="/toeic" className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm">回 TOEIC</Link>
        </div>
        <BottomNav />
      </main>
    );
  }

  const q = questions[idx];
  const answered = picked !== null;

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <Header timeLeft={answered ? null : timeLeft} />

      {/* 進度與計時條 */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-text-muted mb-1.5">
          <span>{idx + 1} / {questions.length}</span>
          <span>{q.category}・難度 {"★".repeat(q.difficulty)}</span>
        </div>
        <div className="h-1.5 bg-bg-input rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${timeLeft <= 5 ? "bg-danger" : "bg-accent"}`}
            style={{ width: `${(timeLeft / SECONDS_PER_Q) * 100}%` }}
          />
        </div>
      </div>

      {/* 題目 */}
      <div className="bg-bg-card border border-border rounded-2xl p-5 mb-4">
        <p className="text-base text-text-primary leading-relaxed">{q.sentence}</p>
      </div>

      {/* 選項 */}
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
          {picked === -1 && <p className="text-sm text-danger font-medium mb-2">⏰ 逾時！實戰 Part 5 每題只有 20 秒</p>}
          <div className="bg-bg-card border border-border rounded-2xl p-4">
            <p className="text-xs font-bold text-text-muted mb-1">解說</p>
            <p className="text-sm text-text-secondary leading-relaxed">{q.explanation}</p>
          </div>
          <button onClick={next} className="w-full mt-3 py-3.5 bg-accent text-white rounded-xl font-bold">
            {idx + 1 < questions.length ? "下一題" : "看成績"}
          </button>
        </div>
      )}

      <BottomNav />
    </main>
  );
}

function Header({ timeLeft }: { timeLeft: number | null }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <Link href="/toeic" className="p-2 -ml-2 text-text-secondary">
        <ChevronLeftIcon size={24} />
      </Link>
      <h1 className="text-lg font-bold">Part 5 文法</h1>
      <span className={`text-sm font-bold w-10 text-right ${timeLeft !== null && timeLeft <= 5 ? "text-danger" : "text-text-muted"}`}>
        {timeLeft !== null ? `${timeLeft}s` : ""}
      </span>
    </div>
  );
}
