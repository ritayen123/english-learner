"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
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
  initError: string | null;
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
  const [initError, setInitError] = useState<string | null>(null);
  const [settings, setSettings] = useState(settingsService.get());
  const [todayStats, setTodayStats] = useState<DailyStats | null>(null);
  const [totalLearned, setTotalLearned] = useState(0);
  const [dueCount, setDueCount] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    async function init() {
      try {
        await Promise.all([wordService.init(), articleService.init()]);
        setInitialized(true);
      } catch (e) {
        console.error("DB init failed:", e);
        setInitError(e instanceof Error ? e.message : "初始化失敗");
      }
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

  // Sync dark mode class with settings
  useEffect(() => {
    document.documentElement.classList.toggle("dark", settings.darkMode);
  }, [settings.darkMode]);

  const value = useMemo(
    () => ({
      initialized,
      initError,
      settings,
      todayStats,
      totalLearned,
      dueCount,
      streak,
      refreshStats,
      updateSettings,
    }),
    [initialized, initError, settings, todayStats, totalLearned, dueCount, streak, refreshStats, updateSettings]
  );

  if (initError) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen gap-4 px-4" role="alert">
        <p className="text-xl font-bold text-text-primary">初始化失敗</p>
        <p className="text-sm text-text-muted text-center">{initError}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-accent text-white rounded-xl font-medium text-sm"
        >
          重新載入
        </button>
      </div>
    );
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
