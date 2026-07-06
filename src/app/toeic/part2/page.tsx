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
  // iOS/Safari 的 TTS 必須由使用者手勢觸發第一次播放，之後才能自動播
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  const loadBatch = useCallback(async () => {
    window.speechSynthesis?.cancel();
    setQuestions([]);
    setIdx(0);
    setPicked(null);
    setResults([]);
    setFinished(false);
    const batch = await toeicService.getPart2Batch(BATCH);
    setQuestions(batch);
  }, []);

  useEffect(() => {
    if (!initialized) return;
    loadBatch();
  }, [initialized, loadBatch]);

  const q = questions[idx];

  const play = useCallback(() => {
    if (!q) return;
    const text = `${q.question} ... A. ${q.options[0]} ... B. ${q.options[1]} ... C. ${q.options[2]}`;
    speak(text, "en-US", speed);
  }, [q, speed]);

  // 音訊解鎖後，換題自動播放
  useEffect(() => {
    if (!q || !audioUnlocked || picked !== null || finished) return;
    const t = setTimeout(play, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, questions.length, audioUnlocked]);

  const startFirstQuestion = () => {
    setAudioUnlocked(true);
    play(); // 在使用者手勢的呼叫棧內觸發，解鎖 iOS TTS
  };

  const answer = async (choice: number) => {
    if (!q || picked !== null) return;
    window.speechSynthesis?.cancel();
    const correct = choice === q.answer;
    // 先更新 UI（顯示答案），再等待寫入完成，避免快速離開頁面時紀錄遺失
    setPicked(choice);
    setResults((r) => [...r, { q, correct }]);
    await toeicService.recordResult(q.id, "part2", q.type, correct);
    await toeicService.recordDaily("part2", correct);
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
          <button onClick={loadBatch} className="px-5 py-3 bg-accent text-white rounded-xl font-medium text-sm">再來 {BATCH} 題</button>
          <Link href="/toeic" className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm">回 TOEIC</Link>
        </div>
        <BottomNav />
      </main>
    );
  }

  // 第一題前的開始畫面（取得音訊手勢授權）
  if (!audioUnlocked) {
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header />
        <div className="flex flex-col items-center justify-center mt-16 gap-5">
          <div className="flex gap-1 items-center">
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
          <button
            onClick={startFirstQuestion}
            className="w-28 h-28 rounded-full bg-accent text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            aria-label="開始第一題"
          >
            <VolumeIcon size={48} />
          </button>
          <div className="text-center">
            <p className="text-base font-bold text-text-primary">點擊開始播放第一題</p>
            <p className="text-xs text-text-muted mt-1">共 {questions.length} 題・聽題目選出最合適的回應<br />之後每題會自動播放</p>
          </div>
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
