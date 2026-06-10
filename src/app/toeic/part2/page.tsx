"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import BottomNav from "../../../components/ui/BottomNav";
import { ChevronLeftIcon, VolumeIcon } from "../../../components/ui/Icons";
import { useApp } from "../../../lib/context/AppContext";
import { toeicService } from "../../../lib/services/toeic-service";
import { speak } from "../../../lib/speech";
import type { Part2Question } from "../../../data/toeic-part2";

const BATCH = 25;
const SPEEDS = [0.85, 1.0, 1.2] as const;

export default function Part2Page() {
  const { initialized } = useApp();
  const [questions, setQuestions] = useState<Part2Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [speed, setSpeed] = useState<number>(1.0);
  const [results, setResults] = useState<{ q: Part2Question; correct: boolean }[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!initialized) return;
    toeicService.getPart2Batch(BATCH).then(setQuestions);
  }, [initialized]);

  const q = questions[idx];

  const play = useCallback(() => {
    if (!q) return;
    const text = `${q.question} ... A. ${q.options[0]} ... B. ${q.options[1]} ... C. ${q.options[2]}`;
    speak(text, "en-US", speed);
  }, [q, speed]);

  // 換題自動播放
  useEffect(() => {
    if (!q || picked !== null || finished) return;
    const t = setTimeout(play, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, questions.length]);

  const answer = (choice: number) => {
    if (!q || picked !== null) return;
    window.speechSynthesis?.cancel();
    const correct = choice === q.answer;
    setPicked(choice);
    setResults((r) => [...r, { q, correct }]);
    toeicService.recordResult(q.id, "part2", q.type, correct);
    toeicService.bumpDaily("part2Done");
  };

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
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header />
        <div className="text-center mt-8 mb-6">
          <div className="text-5xl mb-3">{score >= results.length * 0.92 ? "🏆" : "🎧"}</div>
          <p className="text-2xl font-bold text-text-primary">{score} / {results.length}</p>
          <p className="text-sm text-text-muted mt-1">答對率 {Math.round((score / results.length) * 100)}%（L490 目標：92%+）</p>
          {speed < 1.2 && (
            <p className="text-xs text-warning mt-2">建議練到 1.2x 全對，實戰會像慢動作</p>
          )}
        </div>
        <p className="text-xs text-text-muted text-center mb-4">錯題已自動加入錯題本</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => location.reload()} className="px-5 py-3 bg-accent text-white rounded-xl font-medium text-sm">再來 25 題</button>
          <Link href="/toeic" className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm">回 TOEIC</Link>
        </div>
        <BottomNav />
      </main>
    );
  }

  const answered = picked !== null;

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <Header />

      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-text-muted">{idx + 1} / {questions.length}・{q.type}</span>
        <div className="flex gap-1">
          {SPEEDS.map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`text-xs px-2.5 py-1 rounded-full border ${speed === s ? "bg-accent text-white border-accent" : "bg-bg-card text-text-muted border-border"}`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* 播放區：作答前不顯示文字（純聽力） */}
      <div className="bg-bg-card border border-border rounded-2xl p-8 mb-5 flex flex-col items-center gap-4">
        {!answered ? (
          <>
            <button onClick={play} className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center" aria-label="重播">
              <VolumeIcon size={36} />
            </button>
            <p className="text-xs text-text-muted">聽題目，選出最合適的回應（點圖示重播）</p>
          </>
        ) : (
          <div className="w-full">
            <p className="text-sm font-bold text-text-primary mb-3">{q.question}</p>
            {q.options.map((opt, i) => (
              <p
                key={i}
                className={`text-sm py-1 ${i === q.answer ? "text-success font-bold" : i === picked ? "text-danger" : "text-text-muted"}`}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* A/B/C 按鈕 */}
      {!answered && (
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => answer(i)}
              className="flex-1 py-5 bg-bg-card border border-border rounded-2xl text-xl font-bold text-text-primary active:bg-bg-input"
            >
              {String.fromCharCode(65 + i)}
            </button>
          ))}
        </div>
      )}

      {/* 解說 */}
      {answered && (
        <div>
          <div className="bg-bg-card border border-border rounded-2xl p-4">
            <p className={`text-sm font-bold mb-1 ${picked === q.answer ? "text-success" : "text-danger"}`}>
              {picked === q.answer ? "✓ 答對" : "✗ 答錯"}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">{q.explanation}</p>
            {q.trap && (
              <p className="text-xs text-warning mt-2">⚠️ 陷阱：{q.trap}</p>
            )}
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

function Header() {
  return (
    <div className="flex items-center justify-between mb-4">
      <Link href="/toeic" className="p-2 -ml-2 text-text-secondary">
        <ChevronLeftIcon size={24} />
      </Link>
      <h1 className="text-lg font-bold">Part 2 聽力</h1>
      <span className="w-10" />
    </div>
  );
}
