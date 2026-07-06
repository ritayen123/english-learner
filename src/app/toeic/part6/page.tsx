"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import BottomNav from "../../../components/ui/BottomNav";
import { ChevronLeftIcon } from "../../../components/ui/Icons";
import { useApp } from "../../../lib/context/AppContext";
import { toeicService } from "../../../lib/services/toeic-service";
import type { Part6Set } from "../../../data/toeic-part6";

const SETS_PER_BATCH = 2; // 一次 2 篇 × 4 題 = 8 題
const SUGGESTED_SECONDS_PER_SET = 120; // 實戰建議 2 分/篇

const TYPE_LABEL: Record<Part6Set["passageType"], string> = {
  email: "電子郵件",
  notice: "公告",
  memo: "備忘錄",
  article: "文章",
  letter: "信件",
  ad: "廣告",
};

function fmt(sec: number): string {
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}

export default function Part6Page() {
  const { initialized } = useApp();
  const [sets, setSets] = useState<Part6Set[]>([]);
  const [setIdx, setSetIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0); // 目前作答中的空格（0-3）
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<{ correct: boolean; kind: string }[]>([]);
  const [finished, setFinished] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [reload, setReload] = useState(0); // 「再來一組」時 +1 觸發重新抽題
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!initialized) return;
    let cancelled = false;
    toeicService.getPart6Batch(SETS_PER_BATCH).then((batch) => {
      if (cancelled) return;
      setSetIdx(0);
      setQIdx(0);
      setPicked(null);
      setResults([]);
      setFinished(false);
      setElapsed(0);
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
      await toeicService.recordResult(`${set.id}-q${qIdx + 1}`, "part6", q.kind, correct);
      await toeicService.recordDaily("part6", correct);
    },
    [sets, setIdx, qIdx, picked]
  );

  const next = () => {
    setPicked(null);
    if (qIdx + 1 < 4) {
      setQIdx((i) => i + 1);
    } else if (setIdx + 1 < sets.length) {
      // 4 題完成 → 自動進下一篇
      setSetIdx((i) => i + 1);
      setQIdx(0);
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
    const suggested = sets.length * SUGGESTED_SECONDS_PER_SET;
    const byKind = new Map<string, { wrong: number; total: number }>();
    results.forEach(({ correct, kind }) => {
      const c = byKind.get(kind) ?? { wrong: 0, total: 0 };
      c.total += 1;
      if (!correct) c.wrong += 1;
      byKind.set(kind, c);
    });
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header elapsed={null} />
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
            <span className="text-text-secondary">建議時間（2 分/篇 × {sets.length} 篇）</span>
            <span className="text-text-muted">{fmt(suggested)}</span>
          </div>
          <p className="text-[11px] text-text-muted mt-1">
            {elapsed > suggested ? "超出建議時間，實戰要再快一點" : "在建議時間內完成，維持這個節奏 👍"}
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
            再來一組（{SETS_PER_BATCH} 篇）
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

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <Header elapsed={elapsed} />

      {/* 進度條 */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-text-muted mb-1.5">
          <span>第 {setIdx + 1}/{sets.length} 篇・第 {qIdx + 1}/4 題</span>
          <span>{TYPE_LABEL[set.passageType]}・{q.kind}・難度 {"★".repeat(set.difficulty)}</span>
        </div>
        <div className="h-1.5 bg-bg-input rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${((setIdx * 4 + qIdx + (answered ? 1 : 0)) / (sets.length * 4)) * 100}%` }}
          />
        </div>
      </div>

      {/* 文章卡：空格高亮，作答中的空格用重點色 */}
      <div className="bg-bg-card border border-border rounded-2xl p-5 mb-4">
        <p className="text-xs font-bold text-text-muted mb-2">{set.title}</p>
        <PassageWithBlanks set={set} qIdx={qIdx} answeredCurrent={answered} />
      </div>

      {/* 目前題目的選項 */}
      <p className="text-sm font-bold text-text-primary mb-2">空格 [{qIdx + 1}]（{q.kind}）</p>
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
            <p className="text-xs font-bold text-text-muted mb-1">解說</p>
            <p className="text-sm text-text-secondary leading-relaxed">{q.explanation}</p>
          </div>
          <button onClick={next} className="w-full mt-3 py-3.5 bg-accent text-white rounded-xl font-bold">
            {qIdx + 1 < 4 ? "下一題" : setIdx + 1 < sets.length ? "下一篇" : "看成績"}
          </button>
        </div>
      )}

      <BottomNav />
    </main>
  );
}

// 文章內文：把 [1]____~[4]____ 依作答狀態高亮
// 已作答的空格 → 填入正確答案（綠色）；作答中 → 重點色；未到 → 灰色
function PassageWithBlanks({ set, qIdx, answeredCurrent }: { set: Part6Set; qIdx: number; answeredCurrent: boolean }) {
  const parts = set.text.split(/(\[[1-4]\]____)/g);
  return (
    <p className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
      {parts.map((part, i) => {
        const m = part.match(/^\[([1-4])\]____$/);
        if (!m) return <span key={i}>{part}</span>;
        const n = parseInt(m[1], 10) - 1; // 空格索引 0-3
        if (n < qIdx || (n === qIdx && answeredCurrent)) {
          // 已作答 → 顯示正確答案
          return (
            <span key={i} className="text-success font-medium underline decoration-success/50 underline-offset-2">
              {set.questions[n].options[set.questions[n].answer]}
            </span>
          );
        }
        if (n === qIdx) {
          // 作答中 → 重點色
          return (
            <span key={i} className="bg-accent/15 text-accent font-bold rounded px-1">
              [{n + 1}]____
            </span>
          );
        }
        return (
          <span key={i} className="text-text-muted font-medium">
            [{n + 1}]____
          </span>
        );
      })}
    </p>
  );
}

function Header({ elapsed }: { elapsed: number | null }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <Link href="/toeic" className="p-2 -ml-2 text-text-secondary">
        <ChevronLeftIcon size={24} />
      </Link>
      <h1 className="text-lg font-bold">Part 6 段落填空</h1>
      <span className="text-sm font-bold w-12 text-right text-text-muted">
        {elapsed !== null ? fmt(elapsed) : ""}
      </span>
    </div>
  );
}
