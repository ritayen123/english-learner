"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { wordService } from "../services/word-service";
import { articleService } from "../services/article-service";
import { srsService } from "../services/srs-service";
import { statsService } from "../services/stats-service";
import { settingsService } from "../services/settings-service";
import type { UserSettings, DailyStats } from "../types";

interface AppState {
  initialized: boolean;
  settings: UserSettings;
  todayStats: DailyStats | null;
  totalLearned: number;
  dueCount: number;
  streak: number;
  refreshStats: () => Promise<void>;
  updateSettings: (s: Partial<UserSettings>) => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [initialized, setInitialized] = useState(false);
  const [settings, setSettings] = useState(settingsService.get());
  const [todayStats, setTodayStats] = useState<DailyStats | null>(null);
  const [totalLearned, setTotalLearned] = useState(0);
  const [dueCount, setDueCount] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    async function init() {
      await wordService.init();
      await articleService.init();
      setInitialized(true);
    }
    init();
  }, []);

  const refreshStats = useCallback(async () => {
    const [today, stats, due, currentStreak] = await Promise.all([
      statsService.getToday(),
      srsService.getStats(),
      srsService.getDueCount(),
      statsService.getStreak(),
    ]);
    setTodayStats(today);
    setTotalLearned(stats.total);
    setDueCount(due);
    setStreak(currentStreak);
  }, []);

  useEffect(() => {
    if (initialized) refreshStats();
  }, [initialized, refreshStats]);

  const updateSettings = useCallback((s: Partial<UserSettings>) => {
    settingsService.set(s);
    setSettings(settingsService.get());
  }, []);

  return (
    <AppContext.Provider
      value={{
        initialized,
        settings,
        todayStats,
        totalLearned,
        dueCount,
        streak,
        refreshStats,
        updateSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
