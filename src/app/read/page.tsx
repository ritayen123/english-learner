"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useApp } from "../../lib/context/AppContext";
import { articleService } from "../../lib/services/article-service";
import BottomNav from "../../components/ui/BottomNav";
import DomainBadge from "../../components/ui/DomainBadge";
import { ChevronLeftIcon, CheckIcon } from "../../components/ui/Icons";
import Link from "next/link";
import type { Article, UserArticle, WordDomain } from "../../lib/types";

export default function ReadListPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center min-h-screen">
          <p className="text-text-muted animate-pulse">載入中...</p>
        </div>
      }
    >
      <ReadListContent />
    </Suspense>
  );
}

function ReadListContent() {
  const { initialized } = useApp();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [completed, setCompleted] = useState<Record<string, UserArticle>>({});

  const filter = (searchParams.get("filter") as WordDomain | "all") || "all";

  const setFilter = (key: WordDomain | "all") => {
    const params = new URLSearchParams(searchParams.toString());
    if (key === "all") {
      params.delete("filter");
    } else {
      params.set("filter", key);
    }
    const qs = params.toString();
    router.replace(`/read${qs ? `?${qs}` : ""}`, { scroll: false });
  };

  useEffect(() => {
    if (!initialized) return;
    async function load() {
      const all = await articleService.getAll();
      setArticles(all);
      const { db } = await import("../../lib/db");
      const allUA = await db.userArticles.toArray();
      const records: Record<string, UserArticle> = {};
      for (const ua of allUA) {
        records[ua.articleId] = ua;
      }
      setCompleted(records);
    }
    load();
  }, [initialized]);

  const filtered =
    filter === "all"
      ? articles
      : articles.filter((a) => a.domain === filter);

  const filters: { key: WordDomain | "all"; label: string }[] = [
    { key: "all", label: "全部" },
    { key: "business", label: "商業" },
    { key: "daily", label: "日常" },
    { key: "academic", label: "學術" },
    { key: "travel", label: "旅行" },
    { key: "colloquial", label: "口語" },
  ];

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-lg font-bold">閱讀文章</h1>
        <div className="w-10" />
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

      {/* Article list */}
      <div className="space-y-3">
        {filtered.map((article) => {
          const done = completed[article.id];
          return (
            <Link
              key={article.id}
              href={`/read/${article.id}`}
              className="block bg-bg-card border border-border rounded-xl p-4 transition-transform active:scale-[0.98]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <DomainBadge domain={article.domain} />
                    <span
                      className="text-xs text-text-muted"
                      role="img"
                      aria-label={`難度 ${article.difficulty} 星（共 3 星）`}
                    >
                      {"★".repeat(article.difficulty)}
                      {"☆".repeat(3 - article.difficulty)}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-text-muted">
                    {article.wordCount} 字 · 約 {Math.ceil(article.wordCount / 60)} 分鐘
                  </p>
                </div>
                {done && (
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-success-light flex items-center justify-center">
                      <CheckIcon size={16} className="text-success" />
                    </div>
                    <span className="text-[10px] text-success font-medium">
                      {done.score}/{done.totalQuestions}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-text-muted">此分類暫無文章</p>
        </div>
      )}

      <BottomNav />
    </main>
  );
}
