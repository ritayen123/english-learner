"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BottomNav from "../../../components/ui/BottomNav";
import { ChevronLeftIcon } from "../../../components/ui/Icons";
import { useApp } from "../../../lib/context/AppContext";
import { toeicService } from "../../../lib/services/toeic-service";
import { getToday } from "../../../lib/srs";
import type { ToeicWrong } from "../../../lib/types";
import type { Part5Question } from "../../../data/toeic-part5";
import type { Part2Question } from "../../../data/toeic-part2";
import type { ToeicVocab } from "../../../data/toeic-vocab";

const TYPE_LABEL = { part5: "Part 5", part2: "Part 2", vocab: "同義字", part6: "Part 6", part7: "Part 7" } as const;
const TYPE_HREF = { part5: "/toeic/part5", part2: "/toeic/part2", vocab: "/toeic/vocab", part6: "/toeic/part6", part7: "/toeic/part7" } as const;

interface Detail {
  question: string;
  answer: string;
  explanation: string;
  passage?: string; // Part 6/7 展開時可看的原文
}

export default function MistakesPage() {
  const { initialized } = useApp();
  const [wrongs, setWrongs] = useState<ToeicWrong[]>([]);
  const [details, setDetails] = useState<Map<string, Detail>>(new Map());
  const [expanded, setExpanded] = useState<string | null>(null);
  const today = getToday();

  useEffect(() => {
    if (!initialized) return;
    toeicService.getAllWrong().then(async (w) => {
      setWrongs(w.sort((a, b) => a.nextReview.localeCompare(b.nextReview)));
      const { part5, part2, vocab, part6, part7 } = await toeicService.getQuestionsByIds(w.map((x) => x.qid));
      const m = new Map<string, Detail>();
      part5.forEach((q: Part5Question) =>
        m.set(q.id, { question: q.sentence, answer: q.options[q.answer], explanation: q.explanation })
      );
      part2.forEach((q: Part2Question) =>
        m.set(q.id, { question: q.question, answer: q.options[q.answer], explanation: q.explanation })
      );
      vocab.forEach((q: ToeicVocab) =>
        m.set(q.id, {
          question: `${q.word}（${q.meaning}）`,
          answer: `同義詞：${q.synonyms.join("、")}`,
          explanation: `例句：${q.example}`,
        })
      );
      // Part 6/7 為子題：顯示所屬篇標題＋子題，展開可看原文
      part6.forEach(({ set, questionIndex }) => {
        const q = set.questions[questionIndex];
        m.set(`${set.id}-q${questionIndex + 1}`, {
          question: `《${set.title}》空格 [${questionIndex + 1}]`,
          answer: q.options[q.answer],
          explanation: q.explanation,
          passage: set.text,
        });
      });
      part7.forEach(({ set, questionIndex }) => {
        const q = set.questions[questionIndex];
        m.set(`${set.id}-q${questionIndex + 1}`, {
          question: `《${set.title}》${q.question}`,
          answer: q.options[q.answer],
          explanation: q.explanation,
          passage: set.passages.map((p) => `【${p.label}】\n${p.text}`).join("\n\n"),
        });
      });
      setDetails(m);
    });
  }, [initialized]);

  if (!initialized) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入中...</p>
      </div>
    );
  }

  const due = wrongs.filter((w) => w.nextReview <= today);
  const byType = (t: ToeicWrong["qtype"]) => due.filter((w) => w.qtype === t).length;

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <div className="flex items-center justify-between mb-4">
        <Link href="/toeic" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-lg font-bold">錯題本</h1>
        <span className="w-10" />
      </div>

      {wrongs.length === 0 ? (
        <div className="text-center mt-20">
          <div className="text-5xl mb-3">✨</div>
          <p className="text-lg font-bold text-text-primary">錯題本是空的</p>
          <p className="text-sm text-text-muted mt-1">去做題，錯的會自動進來</p>
          <Link href="/toeic" className="inline-block mt-4 px-6 py-3 bg-accent text-white rounded-xl font-medium text-sm">開始訓練</Link>
        </div>
      ) : (
        <>
          {/* 到期重練入口 */}
          {due.length > 0 && (
            <div className="bg-bg-card border border-danger/40 rounded-2xl p-4 mb-4">
              <p className="text-sm font-bold text-danger mb-2">今日到期 {due.length} 題</p>
              <div className="flex gap-2">
                {(["part5", "part2", "vocab", "part6", "part7"] as const).map((t) =>
                  byType(t) > 0 ? (
                    <Link key={t} href={TYPE_HREF[t]} className="text-xs px-3 py-2 bg-danger text-white rounded-lg font-medium">
                      重練 {TYPE_LABEL[t]}（{byType(t)}）
                    </Link>
                  ) : null
                )}
              </div>
              <p className="text-[11px] text-text-muted mt-2">訓練時到期錯題會自動排在最前面；答對間隔翻倍，連續答對就從錯題本畢業</p>
            </div>
          )}

          {/* 全部錯題 */}
          <p className="text-sm font-bold text-text-primary mb-2">全部錯題（{wrongs.length}）</p>
          <div className="flex flex-col gap-2">
            {wrongs.map((w) => {
              const d = details.get(w.qid);
              const isDue = w.nextReview <= today;
              const isOpen = expanded === w.qid;
              return (
                <button
                  key={w.qid}
                  onClick={() => setExpanded(isOpen ? null : w.qid)}
                  className="bg-bg-card border border-border rounded-xl p-3.5 text-left"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-text-muted shrink-0">
                      {TYPE_LABEL[w.qtype]}・{w.category}・錯 {w.wrongCount} 次
                    </span>
                    <span className={`text-[11px] shrink-0 ${isDue ? "text-danger font-bold" : "text-text-muted"}`}>
                      {isDue ? "已到期" : `${w.nextReview} 到期`}
                    </span>
                  </div>
                  {d && (
                    <p className={`text-sm text-text-primary mt-1.5 ${isOpen ? "" : "line-clamp-1"}`}>{d.question}</p>
                  )}
                  {isOpen && d && (
                    <div className="mt-2 pt-2 border-t border-border">
                      {d.passage && (
                        <div className="mb-2 max-h-48 overflow-y-auto bg-bg-input rounded-lg p-2.5">
                          <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">{d.passage}</p>
                        </div>
                      )}
                      <p className="text-sm text-success font-medium">答案：{d.answer}</p>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">{d.explanation}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}

      <BottomNav />
    </main>
  );
}
