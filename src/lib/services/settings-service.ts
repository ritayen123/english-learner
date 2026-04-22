import type { UserSettings } from "../types";
import { DEFAULT_SETTINGS } from "../types";

const SETTINGS_KEY = "english_learner_settings";

export const settingsService = {
  get(): UserSettings {
    if (typeof window === "undefined") return DEFAULT_SETTINGS;
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (!stored) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
  },

  set(settings: Partial<UserSettings>): void {
    const current = settingsService.get();
    const updated = { ...current, ...settings };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
  },

  reset(): void {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS));
  },
};
