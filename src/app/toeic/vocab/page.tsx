"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import BottomNav from "../../../components/ui/BottomNav";
import { ChevronLeftIcon, VolumeIcon } from "../../../components/ui/Icons";
import { useApp } from "../../../lib/context/AppContext";
import { toeicService } from "../../../lib/services/toeic-service";
import { speak } from "../../../lib/speech";
import type { ToeicVocab } from "../../../data/toeic-vocab";

const BATCH = 20;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function VocabPage() {
  const { initialized } = useApp();
  const [items, setItems] = useState<ToeicVocab[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!initialized) return;
    toeicService.getVocabBatch(BATCH).then(setItems);
  }, [initialized]);

  const v = items[idx];

  // 每題固定一個正確同義詞 + 3 誘答，順序隨機
  const options = useMemo(() => {
    if (!v) return [];
    const correct = v.synonyms[Math.floor(Math.random() * v.synonyms.length)];
    return shuffle([
      { text: correct, isCorrect: true },
      ...v.distractors.map((d) => ({ text: d, isCorrect: false })),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v?.id]);

  const answer = (i: number) => {
    if (!v || picked !== null) return;
    const correct = options[i].isCorrect;
    setPicked(i);
    if (correct) setScore((s) => s + 1);
    toeicService.recordResult(v.id, "vocab", "同義替換", correct);
    toeicService.bumpDaily("vocabDone");
  };

  const next = () => {
    setPicked(null);
    if (idx + 1 < items.length) setIdx((i) => i + 1);
    else setFinished(true);
  };

  if (!initialized || items.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入字庫中...</p>
      </div>
    );
  }

  if (finished) {
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <Header />
        <div className="text-center mt-8 mb-6">
          <div className="text-5xl mb-3">📖</div>
          <p className="text-2xl font-bold text-text-primary">{score} / {items.length}</p>
          <p className="text-sm text-text-muted mt-1">Part 7 同義替換是 950 的必修課</p>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => location.reload()} className="px-5 py-3 bg-accent text-white rounded-xl font-medium text-sm">再來 20 組</button>
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
      <p className="text-xs text-text-muted mb-3">{idx + 1} / {items.length}</p>

      {/* 題目卡 */}
      <div className="bg-bg-card border border-border rounded-2xl p-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-2xl font-bold text-text-primary">{v.word}</p>
          <span className="text-xs text-text-muted">{v.pos}</span>
          <button onClick={() => speak(v.word)} className="text-text-muted" aria-label="發音">
            <VolumeIcon size={18} />
          </button>
        </div>
        <p className="text-sm text-text-secondary italic leading-relaxed">{v.example}</p>
        <p className="text-xs text-text-muted mt-3">在 TOEIC 中，哪個字可以替換 <span className="font-bold text-accent">{v.word}</span>？</p>
      </div>

      {/* 選項 */}
      <div className="flex flex-col gap-2.5">
        {options.map((opt, i) => {
          let cls = "bg-bg-card border-border text-text-primary";
          if (answered) {
            if (opt.isCorrect) cls = "bg-success/15 border-success text-success font-bold";
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
              {opt.text}
            </button>
          );
        })}
      </div>

      {/* 解說 */}
      {answered && (
        <div className="mt-4">
          <div className="bg-bg-card border border-border rounded-2xl p-4">
            <p className="text-sm text-text-secondary">
              <span className="font-bold text-text-primary">{v.word}</span>（{v.meaning}）
              在 TOEIC 可替換為：<span className="text-success font-medium">{v.synonyms.join("、")}</span>
            </p>
          </div>
          <button onClick={next} className="w-full mt-3 py-3.5 bg-accent text-white rounded-xl font-bold">
            {idx + 1 < items.length ? "下一組" : "看成績"}
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
      <h1 className="text-lg font-bold">同義替換</h1>
      <span className="w-10" />
    </div>
  );
}
