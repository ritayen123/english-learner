"use client";

import { useState, useEffect, useRef, useCallback, useMemo, use } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../../../lib/context/AppContext";
import { articleService } from "../../../lib/services/article-service";
import { wordService } from "../../../lib/services/word-service";
import { srsService } from "../../../lib/services/srs-service";
import { statsService } from "../../../lib/services/stats-service";
import BottomNav from "../../../components/ui/BottomNav";
import DomainBadge from "../../../components/ui/DomainBadge";
import { ChevronLeftIcon } from "../../../components/ui/Icons";
import Link from "next/link";
import { getDictMap } from "../../../lib/dict-cache";
import type { Article, Word } from "../../../lib/types";

const PUNCTUATION_RE = /^[.,!?;:'"()\[\]{}""''—–\-…]+$/;
const CLEAN_RE = /[.,!?;:'"()\[\]{}""''—–\-]/g;

let wordMapCache: Record<string, Word> | null = null;

export default function ArticleReaderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { initialized, refreshStats } = useApp();
  const router = useRouter();

  const [article, setArticle] = useState<Article | null>(null);
  const [allWordsMap, setAllWordsMap] = useState<Record<string, Word>>({});
  const [learnedWordIds, setLearnedWordIds] = useState<Set<string>>(new Set());
  const [dictMap, setDictMap] = useState<Record<string, string>>({});

  // Word tooltip state
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [customChinese, setCustomChinese] = useState("");
  const [addingWord, setAddingWord] = useState(false);
  const [justAdded, setJustAdded] = useState<Set<string>>(new Set());

  // Translation toggle
  const [showTranslation, setShowTranslation] = useState(false);

  // Quiz state
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

      // Load all words into a map for lookup (cached across articles)
      if (!wordMapCache) {
        const words = await wordService.getAll();
        const map: Record<string, Word> = {};
        for (const w of words) {
          map[w.english.toLowerCase()] = w;
        }
        wordMapCache = map;
      }
      setAllWordsMap(wordMapCache);

      // Load which words are already being learned
      const { db } = await import("../../../lib/db");
      const userWords = await db.userWords.toArray();
      setLearnedWordIds(new Set(userWords.map((uw) => uw.wordId)));

      // Load dictionary (cached after first load)
      const dict = await getDictMap();
      setDictMap(dict);
    }
    load();
  }, [initialized, id]);

  const refreshLearned = useCallback(async () => {
    const { db } = await import("../../../lib/db");
    const userWords = await db.userWords.toArray();
    setLearnedWordIds(new Set(userWords.map((uw) => uw.wordId)));
  }, []);

  const tokens = useMemo(
    () => (article ? article.content.split(/(\s+)/) : []),
    [article?.content]
  );

  const handleWordClick = (token: string) => {
    const clean = token.toLowerCase().replace(CLEAN_RE, "");
    if (!clean) return;
    setSelectedToken(selectedToken === clean ? null : clean);
    setCustomChinese("");
  };

  const handleAddToLearning = async (word: Word) => {
    setAddingWord(true);
    try {
      if (learnedWordIds.has(word.id)) return;
      await srsService.startLearning(word.id);
      await statsService.recordNewWord();
      await refreshStats();
      setLearnedWordIds((prev) => new Set([...prev, word.id]));
      setJustAdded((prev) => new Set([...prev, word.id]));
    } finally {
      setAddingWord(false);
    }
  };

  const handleAddCustomWord = async (english: string, chineseOverride?: string) => {
    const chinese = chineseOverride || customChinese.trim();
    if (!chinese) return;
    setAddingWord(true);
    try {
      await srsService.addCustomWord(english, chinese);
      await statsService.recordNewWord();
      await refreshStats();
      setJustAdded((prev) => new Set([...prev, `custom_${english}`]));
      setCustomChinese("");
      await refreshLearned();
    } finally {
      setAddingWord(false);
    }
  };

  function handleQuizAnswer(optionIndex: number) {
    if (!article || answered !== null) return;
    setAnswered(optionIndex);

    const isCorrect =
      optionIndex === article.questions[quizIndex].correctIndex;
    if (isCorrect) setQuizScore((s) => s + 1);
  }

  function handleNextQuestion() {
    if (!article) return;
    if (quizIndex + 1 < article.questions.length) {
      setQuizIndex((i) => i + 1);
      setAnswered(null);
    } else {
      const readingTime = Math.round((Date.now() - startTime.current) / 1000);
      articleService.markCompleted(
        article.id,
        quizScore,
        article.questions.length,
        readingTime
      );
      statsService.recordArticle();
      refreshStats();
      setQuizDone(true);
    }
  }

  if (!initialized || !article) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入中...</p>
      </div>
    );
  }

  // ── Quiz Results ──
  if (quizDone) {
    const pct = Math.round((quizScore / article.questions.length) * 100);
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <div className="flex flex-col items-center justify-center mt-12 gap-4">
          <div className="text-5xl mb-2">{pct >= 80 ? "🎉" : pct >= 50 ? "📖" : "💪"}</div>
          <p className="text-xl font-bold text-text-primary">閱讀完成！</p>
          <div className="bg-bg-card border border-border rounded-2xl p-6 w-full text-center">
            <p className="text-4xl font-bold text-accent mb-1">
              {quizScore}/{article.questions.length}
            </p>
            <p className="text-sm text-text-muted">
              {pct >= 80 ? "太棒了！" : pct >= 50 ? "繼續加油！" : "多讀幾次會更好！"}
            </p>
          </div>

          {/* Review all questions */}
          <div className="w-full mt-4 space-y-3">
            <p className="text-sm font-medium text-text-secondary">測驗回顧</p>
            {article.questions.map((q, i) => (
              <div key={i} className="bg-bg-card border border-border rounded-xl p-4">
                <p className="text-sm font-medium text-text-primary mb-2">
                  {i + 1}. {q.question}
                </p>
                <p className="text-sm text-success">
                  ✓ {q.options[q.correctIndex]}
                </p>
                {q.explanation && (
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">
                    💡 {q.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-4 w-full">
            <Link
              href="/read"
              className="flex-1 py-3 bg-accent text-white rounded-xl font-medium text-sm text-center"
            >
              更多文章
            </Link>
            <Link
              href="/"
              className="flex-1 py-3 bg-bg-card border border-border text-text-primary rounded-xl font-medium text-sm text-center"
            >
              回首頁
            </Link>
          </div>
        </div>
        <BottomNav />
      </main>
    );
  }

  // ── Quiz ──
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

        {/* Explanation after answering */}
        {answered !== null && (
          <div className="mt-4 space-y-3">
            {q.explanation && (
              <div className="bg-bg-card border border-accent/30 rounded-xl p-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  💡 {q.explanation}
                </p>
              </div>
            )}
            <button
              onClick={handleNextQuestion}
              className="w-full py-3 bg-accent text-white rounded-xl font-medium text-sm"
            >
              {quizIndex + 1 < article.questions.length ? "下一題" : "查看結果"}
            </button>
          </div>
        )}
        <BottomNav />
      </main>
    );
  }

  // ── Article Reader ──
  const selectedWord = selectedToken ? allWordsMap[selectedToken] : null;
  const isTargetWord = (clean: string) =>
    article.targetWords.some(
      (tw) => allWordsMap[clean]?.id === tw || allWordsMap[clean]?.english.toLowerCase() === clean
    );

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

      {/* Article content — all words clickable */}
      <div className="prose-sm leading-relaxed text-text-primary mb-4 break-words">
        {tokens.map((token, i) => {
          const clean = token.toLowerCase().replace(CLEAN_RE, "");
          if (!clean || /^\s+$/.test(token)) {
            return <span key={i}>{token}</span>;
          }

          const word = allWordsMap[clean];
          const isTarget = word && article.targetWords.includes(word.id);
          const isSelected = selectedToken === clean;
          const isLearned = word && (learnedWordIds.has(word.id) || justAdded.has(word.id));

          let className = "cursor-pointer rounded px-px transition-colors ";
          if (isSelected) {
            className += "bg-accent/20 text-accent";
          } else if (isTarget) {
            className += "text-accent underline decoration-accent/30 underline-offset-2";
          } else {
            className += "hover:bg-accent/10";
          }

          return (
            <span
              key={i}
              onClick={() => handleWordClick(token)}
              className={className}
            >
              {token}
            </span>
          );
        })}
      </div>

      {/* Chinese translation toggle */}
      {article.contentZh && (
        <div className="mb-6">
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="text-sm text-accent font-medium mb-2"
          >
            {showTranslation ? "▼ 隱藏中文翻譯" : "▶ 顯示中文翻譯"}
          </button>
          {showTranslation && (
            <div className="bg-bg-card border border-border rounded-xl p-4">
              <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                {article.contentZh}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Word tooltip */}
      {selectedToken && (
        <div className="fixed bottom-20 left-4 right-4 max-w-lg mx-auto bg-bg-card border border-accent rounded-xl p-4 shadow-lg z-40">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-accent text-lg">{selectedToken}</p>
              {selectedWord && (
                <p className="text-sm text-text-muted">{selectedWord.phonetic}</p>
              )}
            </div>
            <button
              onClick={() => setSelectedToken(null)}
              className="text-text-muted text-xl leading-none"
            >
              ×
            </button>
          </div>

          {selectedWord ? (
            <>
              <p className="text-sm font-medium text-text-primary mt-2">
                <span className="text-text-muted text-xs mr-1">{selectedWord.partOfSpeech}</span>
                {selectedWord.chinese}
              </p>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                {selectedWord.exampleEn}
              </p>
              <p className="text-xs text-text-muted mt-0.5">
                {selectedWord.exampleZh}
              </p>
              {learnedWordIds.has(selectedWord.id) || justAdded.has(selectedWord.id) ? (
                <p className="text-xs text-success mt-3 font-medium">✓ 已加入學習</p>
              ) : (
                <button
                  onClick={() => handleAddToLearning(selectedWord)}
                  disabled={addingWord}
                  className="mt-3 w-full py-2 bg-accent text-white rounded-lg text-sm font-medium disabled:opacity-50"
                >
                  加入學習
                </button>
              )}
            </>
          ) : (
            <>
              {dictMap[selectedToken] ? (
                <>
                  <p className="text-sm font-medium text-text-primary mt-2">
                    {dictMap[selectedToken]}
                  </p>
                  {justAdded.has(`custom_${selectedToken}`) ? (
                    <p className="text-xs text-success mt-3 font-medium">✓ 已加入學習</p>
                  ) : (
                    <button
                      onClick={() => handleAddCustomWord(selectedToken, dictMap[selectedToken])}
                      disabled={addingWord}
                      className="mt-3 w-full py-2 bg-accent text-white rounded-lg text-sm font-medium disabled:opacity-50"
                    >
                      加入學習
                    </button>
                  )}
                </>
              ) : (
                <>
                  <p className="text-xs text-text-muted mt-2">
                    查無此字，可自行輸入中文意思
                  </p>
                  {justAdded.has(`custom_${selectedToken}`) ? (
                    <p className="text-xs text-success mt-3 font-medium">✓ 已加入學習</p>
                  ) : (
                    <div className="mt-3 flex gap-2">
                      <input
                        type="text"
                        placeholder="輸入中文意思"
                        value={customChinese}
                        onChange={(e) => setCustomChinese(e.target.value)}
                        className="flex-1 px-3 py-2 bg-bg-input border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted"
                      />
                      <button
                        onClick={() => handleAddCustomWord(selectedToken)}
                        disabled={addingWord || !customChinese.trim()}
                        className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium disabled:opacity-50 whitespace-nowrap"
                      >
                        加入
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      )}

      {/* Take quiz button */}
      <button
        onClick={() => { setShowQuiz(true); window.scrollTo(0, 0); }}
        className="w-full py-4 bg-accent text-white rounded-xl font-medium text-base mb-4"
      >
        開始測驗 ({article.questions.length} 題)
      </button>

      <BottomNav />
    </main>
  );
}
