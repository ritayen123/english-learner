"use client";

import { useState, useEffect } from "react";
import { useApp } from "../../../lib/context/AppContext";
import { db } from "../../../lib/db";
import { phraseCategories } from "../../../data/phrase-categories";
import { useSpeech } from "../../../hooks/useSpeech";
import BottomNav from "../../../components/ui/BottomNav";
import { ChevronLeftIcon, VolumeIcon, HeartIcon } from "../../../components/ui/Icons";
import Link from "next/link";
import type { Word } from "../../../lib/types";

const FAVORITES_KEY = "phrasebook_favorites";

function getFavorites(): Set<string> {
  if (typeof window === "undefined") return new Set();
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? new Set(JSON.parse(stored)) : new Set();
}

function saveFavorites(favs: Set<string>) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favs]));
}

export default function PhrasebookPage() {
  const { initialized } = useApp();
  const { playWord } = useSpeech();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [phrases, setPhrases] = useState<Word[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  useEffect(() => {
    if (!initialized) return;
    async function load() {
      if (!selectedCategory) {
        setPhrases([]);
        return;
      }
      const cat = phraseCategories.find((c) => c.id === selectedCategory);
      if (!cat) return;
      const loaded: Word[] = [];
      for (const id of cat.phraseIds) {
        const w = await db.words.get(id);
        if (w) loaded.push(w);
      }
      setPhrases(loaded);
    }
    load();
  }, [initialized, selectedCategory]);

  function toggleFavorite(id: string) {
    const next = new Set(favorites);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setFavorites(next);
    saveFavorites(next);
  }

  const displayPhrases = showFavoritesOnly
    ? phrases.filter((p) => favorites.has(p.id))
    : phrases;

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-lg font-bold">旅遊急用手冊</h1>
        <div className="w-10" />
      </div>

      {/* Category grid */}
      {!selectedCategory && (
        <div className="grid grid-cols-2 gap-3 mt-4">
          {phraseCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="bg-bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2 transition-transform active:scale-[0.97]"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-sm font-semibold text-text-primary">
                {cat.label}
              </span>
              <span className="text-xs text-text-muted">
                {cat.phraseIds.length} 句
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Phrase list */}
      {selectedCategory && (
        <>
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setShowFavoritesOnly(false);
              }}
              className="text-sm text-accent"
            >
              ← 返回分類
            </button>
            <div className="flex-1" />
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                showFavoritesOnly
                  ? "bg-accent text-white"
                  : "bg-bg-card border border-border text-text-secondary"
              }`}
            >
              {showFavoritesOnly ? "已收藏" : "全部"}
            </button>
          </div>

          <p className="text-xs text-text-muted mb-3">
            {displayPhrases.length} 句
          </p>

          <div className="space-y-2">
            {displayPhrases.map((p) => (
              <div
                key={p.id}
                className="bg-bg-card border border-border rounded-xl p-3"
              >
                <div className="flex items-start gap-2">
                  <button
                    onClick={() => playWord(p.english)}
                    className="p-1.5 text-text-muted hover:text-accent mt-0.5 shrink-0"
                  >
                    <VolumeIcon size={16} />
                  </button>
                  <div
                    className="flex-1 min-w-0 cursor-pointer"
                    onClick={() =>
                      setExpandedId(expandedId === p.id ? null : p.id)
                    }
                  >
                    <p className="text-sm font-medium text-text-primary leading-relaxed">
                      {p.english}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {p.chinese}
                    </p>
                    {expandedId === p.id && (
                      <div className="mt-2 pt-2 border-t border-border-light animate-fadeIn">
                        <p className="text-xs text-text-secondary italic">
                          &ldquo;{p.exampleEn}&rdquo;
                        </p>
                        <p className="text-xs text-text-muted mt-1">
                          {p.exampleZh}
                        </p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFavorite(p.id)}
                    className="p-1.5 shrink-0"
                    style={{
                      color: favorites.has(p.id)
                        ? "var(--danger)"
                        : "var(--text-muted)",
                    }}
                  >
                    <HeartIcon size={16} filled={favorites.has(p.id)} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {displayPhrases.length === 0 && showFavoritesOnly && (
            <div className="text-center mt-12">
              <p className="text-text-muted">尚未收藏任何短句</p>
            </div>
          )}
        </>
      )}

      <BottomNav />
    </main>
  );
}
