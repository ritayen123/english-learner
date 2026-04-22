"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useApp } from "../../lib/context/AppContext";
import { wordService } from "../../lib/services/word-service";
import { srsService } from "../../lib/services/srs-service";
import { db } from "../../lib/db";
import BottomNav from "../../components/ui/BottomNav";
import DomainBadge from "../../components/ui/DomainBadge";
import {
  ChevronLeftIcon,
  SearchIcon,
  PlusIcon,
  VolumeIcon,
  XIcon,
} from "../../components/ui/Icons";
import { useSpeech } from "../../hooks/useSpeech";
import Link from "next/link";
import type { Word, UserWord, WordDomain } from "../../lib/types";

export default function WordsPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-screen"><p className="text-text-muted animate-pulse">載入中...</p></div>}>
      <WordsContent />
    </Suspense>
  );
}

function WordsContent() {
  const { initialized, refreshStats } = useApp();
  const searchParams = useSearchParams();
  const showAddOnLoad = searchParams.get("add") === "1";
  const [words, setWords] = useState<Word[]>([]);
  const [userWords, setUserWords] = useState<Record<string, UserWord>>({});
  const [search, setSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState<WordDomain | "all">("all");
  const [showAddModal, setShowAddModal] = useState(showAddOnLoad);
  const [newEnglish, setNewEnglish] = useState("");
  const [newChinese, setNewChinese] = useState("");
  const [newExample, setNewExample] = useState("");
  const { playWord } = useSpeech();

  const loadData = useCallback(async () => {
    const allWords = await wordService.getAll();
    setWords(allWords);
    const uws = await db.userWords.toArray();
    const map: Record<string, UserWord> = {};
    for (const uw of uws) map[uw.wordId] = uw;
    setUserWords(map);
  }, []);

  useEffect(() => {
    if (initialized) loadData();
  }, [initialized, loadData]);

  const filtered = words.filter((w) => {
    const matchDomain = domainFilter === "all" || w.domain === domainFilter;
    const matchSearch =
      !search ||
      w.english.toLowerCase().includes(search.toLowerCase()) ||
      w.chinese.includes(search);
    return matchDomain && matchSearch;
  });

  async function handleAdd() {
    if (!newEnglish.trim() || !newChinese.trim()) return;
    await srsService.addCustomWord(newEnglish.trim(), newChinese.trim(), newExample.trim() || undefined);
    setNewEnglish("");
    setNewChinese("");
    setNewExample("");
    setShowAddModal(false);
    loadData();
    refreshStats();
  }

  const statusColors: Record<string, string> = {
    learning: "bg-accent",
    review: "bg-warning",
    mastered: "bg-success",
  };

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <div className="flex items-center justify-between mb-4">
        <Link href="/me" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-lg font-bold">單字庫</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="p-2 text-accent"
        >
          <PlusIcon size={24} />
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <SearchIcon
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        />
        <input
          type="text"
          placeholder="搜尋英��或中文..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-bg-input border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent"
        />
      </div>

      {/* Domain filter */}
      <div className="flex gap-2 mb-4">
        {(["all", "business", "daily", "academic"] as const).map((d) => (
          <button
            key={d}
            onClick={() => setDomainFilter(d)}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              domainFilter === d
                ? "bg-accent text-white"
                : "bg-bg-card border border-border text-text-secondary"
            }`}
          >
            {d === "all" ? "全部" : d === "business" ? "商業" : d === "daily" ? "日常" : "學術"}
          </button>
        ))}
      </div>

      <p className="text-xs text-text-muted mb-3">{filtered.length} 個單字</p>

      {/* Word list */}
      <div className="space-y-2">
        {filtered.slice(0, 50).map((w) => {
          const uw = userWords[w.id];
          return (
            <div
              key={w.id}
              className="bg-bg-card border border-border rounded-xl p-3 flex items-center gap-3"
            >
              <button
                onClick={() => playWord(w.english)}
                className="p-1.5 text-text-muted hover:text-accent"
              >
                <VolumeIcon size={16} />
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary truncate">
                  {w.english}
                </p>
                <p className="text-xs text-text-muted truncate">{w.chinese}</p>
              </div>
              <DomainBadge domain={w.domain} />
              {uw && (
                <span
                  className={`w-2 h-2 rounded-full ${statusColors[uw.status] || "bg-text-muted"}`}
                />
              )}
            </div>
          );
        })}
      </div>

      {filtered.length > 50 && (
        <p className="text-center text-xs text-text-muted mt-4">
          顯示前 50 個結果，請用搜尋縮小範圍
        </p>
      )}

      {/* Add custom word modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full max-w-lg mx-auto bg-bg-card rounded-t-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">新增自訂單字</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-text-muted"
              >
                <XIcon size={24} />
              </button>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="English word"
                value={newEnglish}
                onChange={(e) => setNewEnglish(e.target.value)}
                className="w-full px-4 py-3 bg-bg-input border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent"
              />
              <input
                type="text"
                placeholder="中文意思"
                value={newChinese}
                onChange={(e) => setNewChinese(e.target.value)}
                className="w-full px-4 py-3 bg-bg-input border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent"
              />
              <input
                type="text"
                placeholder="例句（選填）"
                value={newExample}
                onChange={(e) => setNewExample(e.target.value)}
                className="w-full px-4 py-3 bg-bg-input border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent"
              />
              <button
                onClick={handleAdd}
                disabled={!newEnglish.trim() || !newChinese.trim()}
                className="w-full py-3 bg-accent text-white rounded-xl font-medium disabled:opacity-50"
              >
                新增
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </main>
  );
}
