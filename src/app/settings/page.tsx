"use client";

import { useApp } from "../../lib/context/AppContext";
import BottomNav from "../../components/ui/BottomNav";
import { ChevronLeftIcon } from "../../components/ui/Icons";
import Link from "next/link";

export default function SettingsPage() {
  const { initialized, settings, updateSettings } = useApp();

  if (!initialized) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted animate-pulse">載入中...</p>
      </div>
    );
  }

  return (
    <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <Link href="/me" className="p-2 -ml-2 text-text-secondary">
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-lg font-bold">設定</h1>
        <div className="w-10" />
      </div>

      <div className="space-y-6">
        {/* Daily new words */}
        <SettingRow
          label="每日新字數量"
          description={`目前：${settings.dailyNewWords} 字/天`}
        >
          <input
            type="range"
            min={5}
            max={100}
            step={5}
            value={settings.dailyNewWords}
            onChange={(e) =>
              updateSettings({ dailyNewWords: Number(e.target.value) })
            }
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>5</span>
            <span>100</span>
          </div>
        </SettingRow>

        {/* Review cap */}
        <SettingRow
          label="每日複習上限"
          description={`目前：${settings.dailyReviewCap} 字/天`}
        >
          <input
            type="range"
            min={50}
            max={200}
            step={25}
            value={settings.dailyReviewCap}
            onChange={(e) =>
              updateSettings({ dailyReviewCap: Number(e.target.value) })
            }
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>50</span>
            <span>200</span>
          </div>
        </SettingRow>

        {/* Session length */}
        <SettingRow
          label="學習時段長度"
          description={`目前：${settings.sessionMinutes} 分鐘`}
        >
          <div className="flex gap-2">
            {[10, 15, 20, 25].map((m) => (
              <button
                key={m}
                onClick={() => updateSettings({ sessionMinutes: m })}
                className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                  settings.sessionMinutes === m
                    ? "bg-accent text-white"
                    : "bg-bg-input text-text-secondary"
                }`}
              >
                {m}分
              </button>
            ))}
          </div>
        </SettingRow>

        {/* Auto pronunciation */}
        <SettingRow label="自動播放發音" description="翻開卡片時自動播放">
          <ToggleSwitch
            checked={settings.autoPlayPronunciation}
            onChange={(v) => updateSettings({ autoPlayPronunciation: v })}
          />
        </SettingRow>

        {/* Dark mode */}
        <SettingRow label="深色模式" description="減少通勤時的眼睛疲勞">
          <ToggleSwitch
            checked={settings.darkMode}
            onChange={(v) => {
              updateSettings({ darkMode: v });
            }}
          />
        </SettingRow>
      </div>

      {/* App info */}
      <div className="mt-12 text-center text-xs text-text-muted space-y-1">
        <p>English Daily v1.0</p>
        <p>每日英文 — 5000 words</p>
      </div>

      <BottomNav />
    </main>
  );
}

function SettingRow({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-sm font-semibold text-text-primary">{label}</p>
          {description && (
            <p className="text-xs text-text-muted mt-0.5">{description}</p>
          )}
        </div>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
        checked ? "bg-accent" : "bg-bg-input"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
