"use client";

import { useState, useCallback, useEffect, useRef, type ReactNode } from "react";
import { ToastContext, type Toast } from "../../hooks/useToast";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timerMap = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  // Cleanup all timers on unmount
  useEffect(() => {
    return () => {
      timerMap.current.forEach(clearTimeout);
    };
  }, []);

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" = "info") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type }]);
      const tid = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
        timerMap.current.delete(id);
      }, 3000);
      timerMap.current.set(id, tid);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
      <div className="fixed top-4 left-4 right-4 z-[100] flex flex-col items-center gap-2 pointer-events-none" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`px-4 py-3 rounded-xl text-sm font-medium shadow-lg animate-fadeIn pointer-events-auto max-w-sm w-full ${
              t.type === "success"
                ? "bg-success text-white"
                : t.type === "error"
                  ? "bg-danger text-white"
                  : "bg-bg-card border border-border text-text-primary"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
