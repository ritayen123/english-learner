"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { statsService } from "../lib/services/stats-service";

export function useStudySession(durationMinutes: number = 15) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastSaveRef = useRef(0);

  const totalSeconds = durationMinutes * 60;
  const remainingSeconds = Math.max(0, totalSeconds - elapsedSeconds);
  const isExpired = elapsedSeconds >= totalSeconds;

  const start = useCallback(() => {
    setIsActive(true);
    lastSaveRef.current = elapsedSeconds;
  }, [elapsedSeconds]);

  const pause = useCallback(() => {
    setIsActive(false);
    const unsaved = elapsedSeconds - lastSaveRef.current;
    if (unsaved > 0) {
      statsService.recordStudyTime(unsaved);
      lastSaveRef.current = elapsedSeconds;
    }
  }, [elapsedSeconds]);

  const reset = useCallback(() => {
    setIsActive(false);
    const unsaved = elapsedSeconds - lastSaveRef.current;
    if (unsaved > 0) {
      statsService.recordStudyTime(unsaved);
    }
    setElapsedSeconds(0);
    lastSaveRef.current = 0;
  }, [elapsedSeconds]);

  useEffect(() => {
    if (isActive && !isExpired) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, isExpired]);

  // Pause on visibility change
  useEffect(() => {
    function handleVisibility() {
      if (document.hidden && isActive) {
        pause();
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [isActive, pause]);

  // Save unsaved time on tab close
  useEffect(() => {
    function handleBeforeUnload() {
      const unsaved = elapsedSeconds - lastSaveRef.current;
      if (unsaved > 0 && isActive) {
        statsService.recordStudyTime(unsaved);
        lastSaveRef.current = elapsedSeconds;
      }
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [elapsedSeconds, isActive]);

  const formatTime = useCallback((seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }, []);

  return {
    elapsedSeconds,
    remainingSeconds,
    isActive,
    isExpired,
    start,
    pause,
    reset,
    formattedRemaining: formatTime(remainingSeconds),
    formattedElapsed: formatTime(elapsedSeconds),
  };
}
