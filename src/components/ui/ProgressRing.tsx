"use client";

interface ProgressRingProps {
  current: number;
  total: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export default function ProgressRing({
  current,
  total,
  size = 160,
  strokeWidth = 10,
  label,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percent = total > 0 ? Math.min(current / total, 1) : 0;
  const offset = circumference - percent * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90" role="img" aria-label={`${label || "進度"} ${Math.round(percent * 100)}%`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="var(--border)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="var(--accent)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-text-primary">{current}</span>
          <span className="text-sm text-text-muted">/ {total}</span>
        </div>
      </div>
      {label && (
        <span className="text-sm text-text-secondary font-medium">{label}</span>
      )}
    </div>
  );
}
