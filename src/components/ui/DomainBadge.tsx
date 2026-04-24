"use client";

import type { WordDomain } from "../../lib/types";

const domainConfig: Record<WordDomain, { label: string; colorVar: string }> = {
  business: { label: "商業", colorVar: "var(--domain-business)" },
  daily: { label: "日常", colorVar: "var(--domain-daily)" },
  academic: { label: "學術", colorVar: "var(--domain-academic)" },
  travel: { label: "旅行", colorVar: "var(--domain-travel)" },
  colloquial: { label: "口語", colorVar: "var(--domain-colloquial)" },
};

interface DomainBadgeProps {
  domain: WordDomain;
  size?: "sm" | "md";
}

export default function DomainBadge({ domain, size = "sm" }: DomainBadgeProps) {
  const config = domainConfig[domain];
  const sizeClass = size === "sm" ? "text-[10px] px-1.5 py-0.5" : "text-xs px-2 py-1";

  return (
    <span
      className={`inline-block rounded-full font-medium ${sizeClass}`}
      style={{
        color: config.colorVar,
        backgroundColor: `color-mix(in srgb, ${config.colorVar} 15%, transparent)`,
      }}
    >
      {config.label}
    </span>
  );
}
