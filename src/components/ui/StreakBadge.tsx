"use client";

import { FireIcon } from "./Icons";

interface StreakBadgeProps {
  days: number;
}

export default function StreakBadge({ days }: StreakBadgeProps) {
  if (days === 0) return null;

  return (
    <div className="inline-flex items-center gap-1.5 bg-bg-card border border-border rounded-full px-3 py-1.5">
      <FireIcon size={18} className="text-streak fire-glow" />
      <span className="text-sm font-bold text-text-primary">{days}</span>
      <span className="text-xs text-text-muted">天</span>
    </div>
  );
}
