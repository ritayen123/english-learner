"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useApp } from "../../lib/context/AppContext";
import { wordService } from "../../lib/services/word-service";
import { srsService } from "../../lib/services/srs-service";
import { useSpeech } from "../../hooks/useSpeech";
import BottomNav from "../../components/ui/BottomNav";
import DomainBadge from "../../components/ui/DomainBadge";
import {
  ChevronLeftIcon,
  VolumeIcon,
  SearchIcon,
  PlusIcon,
} from "../../components/ui/Icons";
import Link from "next/link";
import { useToast } from "../../hooks/useToast";
import type { Word, WordDomain } from "../../lib/types";

export default function WordsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center min-h-screen">
          <p className="text-text-muted animate-pulse">載入中...</p>
        </div>
      }
    >
      <WordsContent />
    </Suspense>
  );
}

function WordsContent() {
  const { initialized } = useApp();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { playWord } = useSpeech();
  const { showToast } = useToast();

  const [query, setQuery] = useState("");
  const [words, setWords] = useState<Word[]>([]);
  const [displayCount, setDisplayCount] = useState(50);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Add custom word state
  const showAdd = searchParams.get("add") === "1";
  const [customEnglish, setCustomEnglish] = useState("");
  const [customChinese, setCustomChinese] = useState("");
  const [customExample, setCustomExample] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const filter =
    (searchParams.get("filter") as WordDomain | "all") || "all";

  const setFilter = (key: WordDomain | "all") => {
    const params = new URLSearchParams(searchParams.toString());
    if (key === "all") {
      params.delete("filter");
    } else {
      params.set("filter", key);
    }
    const qs = params.toString();
    router.replace(`/words${qs ? `?${qs}` : ""}`, { scroll: false });
  };

  const filters: { key: WordDomain | "all"; label: string }[] = [
    { key: "all", label: "全部" },
    { key: "business", label: "商業" },
    { key: "daily", label: "日常" },
    { key: "academic", label: "學術" },
    { key: "travel", label: "旅行" },
    { key: "colloquial", label: "口語" },
  ];

  // Load words based on search query or domain filter with 300ms debounce
  useEffect(() => {
    if (!initialized) return;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // If no query and filter is "all", show nothing (prompt user)
    if (!query && filter === "all") {
      setWords([]);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        let results: Word[];
        if (query) {
          results = await wordService.search(query);
          // Apply domain filter on top of search
          if (filter !== "all") {
            results = results.filter((w) => w.domain === filter);
          }
        } else {
          results = await wordService.getByDomain(filter as WordDomain);
        }
        setWords(results);
        setDisplayCount(50);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [initialized, query, filter]);

  const handleSaveCustomWord = async () => {
    if (!customEnglish.trim() || !customChinese.trim()) return;
    setSaving(true);
    try {
      const { db } = await import("../../lib/db");
      // Check for duplicate
      const existing = await db.userWords
        .filter((uw) => uw.customEnglish?.toLowerCase() === customEnglish.trim().toLowerCase())
        .first();
      if (existing) {
        showToast("此單字已存在", "error");
        setSaving(false);
        return;
      }
      await db.userWords.put({
        wordId: `custom_${Date.now()}`,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReview: new Date().toISOString().slice(0, 10),
        lastReview: "",
        status: "learning" as const,
        isCustom: true,
        customEnglish: customEnglish.trim(),
        customChinese: customChinese.trim(),
        customExample: customExample.trim() || undefined,
      });
      setSaveSuccess(true);
      setCustomEnglish("");
      setCustomChinese("");
      setCustomExample("");
      setTimeout(() => setSaveSuccess(false), 2000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/me" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-lg font-bold">單字庫</h1>
        <div className="w-10" />
      </div>

      {/* Add custom word section */}
      {showAdd && (
        <div className="bg-bg-card border border-border rounded-xl p-4 mb-4">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <PlusIcon size={16} />
            新增自訂單字
          </h2>
          <div className="space-y-2.5">
            <input
              type="text"
              value={customEnglish}
              onChange={(e) => setCustomEnglish(e.target.value)}
              placeholder="英文單字"
              className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              value={customChinese}
              onChange={(e) => setCustomChinese(e.target.value)}
              placeholder="中文意思"
              className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              value={customExample}
              onChange={(e) => setCustomExample(e.target.value)}
              placeholder="例句（選填）"
              className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              onClick={handleSaveCustomWord}
              disabled={saving || !customEnglish.trim() || !customChinese.trim()}
              className="w-full bg-accent text-white rounded-lg py-2.5 text-sm font-medium transition-colors disabled:opacity-50 active:scale-[0.98]"
            >
              {saveSuccess
                ? "已儲存！"
                : saving
                ? "儲存中..."
                : "儲存單字"}
            </button>
          </div>
        </div>
      )}

      {/* Search bar */}
      <div className="relative mb-4">
        <SearchIcon
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜尋英文或中文..."
          className="w-full bg-bg-input border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === f.key
                ? "bg-accent text-white"
                : "bg-bg-card border border-border text-text-secondary"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Word list */}
      {loading ? (
        <div className="text-center mt-12">
          <p className="text-text-muted animate-pulse">搜尋中...</p>
        </div>
      ) : words.length > 0 ? (
        <div className="space-y-2">
          {words.slice(0, displayCount).map((word) => (
            <div
              key={word.id}
              className="bg-bg-card border border-border rounded-xl p-3.5 flex items-center gap-3"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-bold text-text-primary">
                    {word.english}
                  </span>
                  <DomainBadge domain={word.domain} />
                </div>
                <p className="text-xs text-text-secondary">{word.chinese}</p>
                {word.phonetic && (
                  <p className="text-[11px] text-text-muted mt-0.5">
                    {word.phonetic}
                  </p>
                )}
              </div>
              <button
                onClick={() => playWord(word.english)}
                className="p-2 text-text-muted hover:text-accent transition-colors shrink-0"
                aria-label={`播放 ${word.english} 發音`}
              >
                <VolumeIcon size={20} />
              </button>
            </div>
          ))}
          {displayCount < words.length && (
            <button
              onClick={() => setDisplayCount((c) => c + 50)}
              className="w-full py-3 bg-bg-card border border-border rounded-xl text-sm font-medium text-accent mt-2"
            >
              載入更多（還有 {words.length - displayCount} 個）
            </button>
          )}
        </div>
      ) : !query && filter === "all" ? (
        <div className="text-center mt-12">
          <SearchIcon
            size={40}
            className="mx-auto text-text-muted mb-3 opacity-40"
          />
          <p className="text-text-muted text-sm">
            搜尋或選擇分類來瀏覽單字
          </p>
        </div>
      ) : (
        <div className="text-center mt-12">
          <p className="text-text-muted text-sm">找不到符合的單字</p>
        </div>
      )}

      <BottomNav />
    </main>
  );
}
