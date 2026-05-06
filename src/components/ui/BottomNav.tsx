"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, BookIcon, FileTextIcon, UserIcon } from "./Icons";
import { useApp } from "../../lib/context/AppContext";

const tabs = [
  { href: "/", label: "首頁", icon: HomeIcon },
  { href: "/learn", label: "學習", icon: BookIcon },
  { href: "/read", label: "閱讀", icon: FileTextIcon },
  { href: "/me", label: "我的", icon: UserIcon },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { dueCount } = useApp();

  return (
    <nav className="bottom-nav fixed bottom-0 left-0 right-0 bg-bg-card border-t border-border z-50" aria-label="主選單">
      <div className="flex justify-around items-center h-14 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          const Icon = tab.icon;
          const showBadge = tab.href === "/learn" && dueCount > 0;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full relative transition-colors ${
                isActive ? "text-accent" : "text-text-muted"
              }`}
            >
              <div className="relative">
                <Icon size={22} />
                {showBadge && (
                  <span className="absolute -top-1 -right-2 bg-danger text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
                    {dueCount > 99 ? "99+" : dueCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
