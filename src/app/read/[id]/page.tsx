"use client";

import { useState, useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../../../lib/context/AppContext";
import { articleService } from "../../../lib/services/article-service";
import { wordService } from "../../../lib/services/word-service";
import { statsService } from "../../../lib/services/stats-service";
import BottomNav from "../../../components/ui/BottomNav";
import DomainBadge from "../../../components/ui/DomainBadge";
import { ChevronLeftIcon } from "../../../components/ui/Icons";
import Link from "next/link";
import type { Article, Word } from "../../../lib/types";

export default function ArticleReaderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { initialized, refreshStats } = useApp();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [targetWordMap, setTargetWordMap] = useState<Record<string, Word>>({});
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [answered, setAnswered] = useState<number | null>(null);
  const startTime = useRef(Date.now());

  useEffect(() => {
    if (!initialized) return;
    async function load() {
      const a = await articleService.getById(id);
      if (!a) return;
      setArticle(a);

      const wordMap: Record<string, Word> = {};
      for (const wid of a.targetWords) {
        const w = await wordService.getById(wid);
        if (w) wordMap[w.english.toLowerCase()] = w;
      }
      setTargetWordMap(wordMap);
    }
    load();
  }, [initialized, id]);

  async function handleQuizAnswer(optionIndex: number) {
    if (!article || answered !== null) return;
    setAnswered(optionIndex);

    const isCorrect =
      optionIndex === article.questions[quizIndex].correctIndex;
    if (isCorrect) setQuizScore((s) => s + 1);

    setTimeout(() => {
      if (quizIndex + 1 < article.questions.length) {
        setQuizIndex((i) => i + 1);
        setAnswered(null);
      } else {
        const readingTime = Math.round((Date.now() - startTime.current) / 1000);
        const finalScore = isCorrect ? quizScore + 1 : quizScore;
        articleService.markCompleted(
          article.id,
          finalScore,
          article.questions.length,
          readingTime
        );
        statsService.recordArticle();
        refreshStats();
        setQuizDone(true);
      }
    }, 1200);
  }

  if (!initialized || !article) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入中...</p>
      </div>
    );
  }

  // Quiz results
  if (quizDone) {
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <div className="flex flex-col items-center justify-center mt-20 gap-4">
          <div className="text-5xl mb-2">📖</div>
          <p className="text-xl font-bold text-text-primary">閱讀完成！</p>
          <p className="text-text-secondary">
            測驗成績：
            <span className="font-bold text-accent">
              {quizScore}/{article.questions.length}
            </span>
          </p>
          <div className="flex gap-3 mt-4">
            <Link
              href="/read"
              className="px-5 py-3 bg-accent text-white rounded-xl font-medium text-sm"
            >
              更多文章
            </Link>
            <Link
              href="/"
              className="px-5 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm"
            >
              回首頁
            </Link>
          </div>
        </div>
        <BottomNav />
      </main>
    );
  }

  // Quiz
  if (showQuiz) {
    const q = article.questions[quizIndex];
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setShowQuiz(false)}
            className="p-2 -ml-2 text-text-secondary"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <h1 className="text-lg font-bold">閱讀測驗</h1>
          <span className="text-sm text-text-muted">
            {quizIndex + 1}/{article.questions.length}
          </span>
        </div>

        <p className="text-base font-medium text-text-primary mb-6 leading-relaxed">
          {q.question}
        </p>

        <div className="space-y-3">
          {q.options.map((option, i) => {
            let bg = "bg-bg-card border-border";
            if (answered !== null) {
              if (i === q.correctIndex) bg = "bg-success-light border-success";
              else if (i === answered && i !== q.correctIndex)
                bg = "bg-danger-light border-danger";
            }
            return (
              <button
                key={i}
                onClick={() => handleQuizAnswer(i)}
                disabled={answered !== null}
                className={`w-full text-left p-4 rounded-xl border transition-colors ${bg}`}
              >
                <span className="text-sm text-text-primary">{option}</span>
              </button>
            );
          })}
        </div>
        <BottomNav />
      </main>
    );
  }

  // Article reader
  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <div className="flex items-center justify-between mb-4">
        <Link href="/read" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <DomainBadge domain={article.domain} size="md" />
        <div className="w-10" />
      </div>

      <h1 className="text-xl font-bold text-text-primary mb-4">
        {article.title}
      </h1>

      {/* Article content with highlighted words */}
      <div className="prose-sm leading-relaxed text-text-primary mb-8">
        {article.content.split(/(\s+)/).map((token, i) => {
          const clean = token.toLowerCase().replace(/[.,!?;:'"()]/g, "");
          const word = targetWordMap[clean];
          if (word) {
            return (
              <span
                key={i}
                onClick={() => setSelectedWord(selectedWord?.id === word.id ? null : word)}
                className="text-accent underline decoration-accent/30 underline-offset-2 cursor-pointer"
              >
                {token}
              </span>
            );
          }
          return <span key={i}>{token}</span>;
        })}
      </div>

      {/* Word tooltip */}
      {selectedWord && (
        <div className="fixed bottom-20 left-4 right-4 max-w-lg mx-auto bg-bg-card border border-accent rounded-xl p-4 shadow-lg z-40">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-accent">{selectedWord.english}</p>
              <p className="text-sm text-text-muted">{selectedWord.phonetic}</p>
            </div>
            <button
              onClick={() => setSelectedWord(null)}
              className="text-text-muted text-lg"
            >
              ×
            </button>
          </div>
          <p className="text-sm font-medium text-text-primary mt-2">
            {selectedWord.chinese}
          </p>
          <p className="text-xs text-text-secondary mt-1">
            {selectedWord.exampleEn}
          </p>
        </div>
      )}

      {/* Take quiz button */}
      <button
        onClick={() => setShowQuiz(true)}
        className="w-full py-4 bg-accent text-white rounded-xl font-medium text-base mb-4"
      >
        開始測驗 ({article.questions.length} 題)
      </button>

      <BottomNav />
    </main>
  );
}
