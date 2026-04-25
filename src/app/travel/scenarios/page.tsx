"use client";

import { useState, useEffect } from "react";
import { useApp } from "../../../lib/context/AppContext";
import { scenarioService } from "../../../lib/services/scenario-service";
import BottomNav from "../../../components/ui/BottomNav";
import { ChevronLeftIcon, CheckIcon } from "../../../components/ui/Icons";
import Link from "next/link";
import type { Scenario, ScenarioCategory, UserScenario } from "../../../lib/types";

const categoryConfig: Record<
  ScenarioCategory,
  { label: string; color: string }
> = {
  airport: { label: "機場", color: "var(--domain-travel)" },
  hotel: { label: "住宿", color: "var(--domain-business)" },
  restaurant: { label: "餐廳", color: "var(--domain-daily)" },
  directions: { label: "問路", color: "var(--domain-academic)" },
  shopping: { label: "購物", color: "var(--domain-colloquial)" },
  emergency: { label: "緊急", color: "var(--danger)" },
};

const filters: { key: ScenarioCategory | "all"; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "airport", label: "機場" },
  { key: "hotel", label: "住宿" },
  { key: "restaurant", label: "餐廳" },
  { key: "directions", label: "問路" },
  { key: "shopping", label: "購物" },
  { key: "emergency", label: "緊急" },
];

export default function ScenariosPage() {
  const { initialized } = useApp();
  const [filter, setFilter] = useState<ScenarioCategory | "all">("all");
  const [completed, setCompleted] = useState<Record<string, UserScenario>>({});
  const scenarios = scenarioService.getAll();

  useEffect(() => {
    if (!initialized) return;
    scenarioService.getAllCompleted().then(setCompleted);
  }, [initialized]);

  const filtered =
    filter === "all"
      ? scenarios
      : scenarios.filter((s) => s.category === filter);

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-lg font-bold">情境對話</h1>
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

      {/* Scenario list */}
      <div className="space-y-3">
        {filtered.map((scenario) => {
          const done = completed[scenario.id];
          const catConf = categoryConfig[scenario.category];
          return (
            <Link
              key={scenario.id}
              href={`/travel/scenarios/${scenario.id}`}
              className="block bg-bg-card border border-border rounded-xl p-4 transition-transform active:scale-[0.98]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                      style={{
                        color: catConf.color,
                        backgroundColor: `color-mix(in srgb, ${catConf.color} 15%, transparent)`,
                      }}
                    >
                      {catConf.label}
                    </span>
                    <span className="text-xs text-text-muted">
                      {"★".repeat(scenario.difficulty)}
                      {"☆".repeat(3 - scenario.difficulty)}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-0.5">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-text-muted">{scenario.titleEn}</p>
                </div>
                {done && (
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-success-light flex items-center justify-center">
                      <CheckIcon size={16} className="text-success" />
                    </div>
                    {done.mistakeCount === 0 && (
                      <span className="text-[10px] text-success font-medium">
                        完美
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-text-muted">此分類暫無情境</p>
        </div>
      )}

      <BottomNav />
    </main>
  );
}
