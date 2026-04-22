"use client";

import { useRef, useCallback, type RefObject } from "react";

interface SwipeConfig {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

interface SwipeState {
  startX: number;
  startY: number;
  currentX: number;
  isDragging: boolean;
}

export function useSwipe(
  ref: RefObject<HTMLElement | null>,
  config: SwipeConfig
) {
  const { onSwipeLeft, onSwipeRight, threshold = 80 } = config;
  const state = useRef<SwipeState>({
    startX: 0,
    startY: 0,
    currentX: 0,
    isDragging: false,
  });

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    state.current.startX = e.touches[0].clientX;
    state.current.startY = e.touches[0].clientY;
    state.current.isDragging = true;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!state.current.isDragging || !ref.current) return;

    const deltaX = e.touches[0].clientX - state.current.startX;
    const deltaY = e.touches[0].clientY - state.current.startY;

    // Only horizontal swipe (prevent conflict with scroll)
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    state.current.currentX = deltaX;
    const rotation = deltaX * 0.05;
    ref.current.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
    ref.current.style.transition = "none";
  }, [ref]);

  const onTouchEnd = useCallback(() => {
    if (!ref.current) return;
    state.current.isDragging = false;

    const deltaX = state.current.currentX;

    if (deltaX > threshold && onSwipeRight) {
      ref.current.style.transition = "transform 0.3s ease-out, opacity 0.3s";
      ref.current.style.transform = `translateX(120%) rotate(15deg)`;
      ref.current.style.opacity = "0";
      setTimeout(onSwipeRight, 300);
    } else if (deltaX < -threshold && onSwipeLeft) {
      ref.current.style.transition = "transform 0.3s ease-out, opacity 0.3s";
      ref.current.style.transform = `translateX(-120%) rotate(-15deg)`;
      ref.current.style.opacity = "0";
      setTimeout(onSwipeLeft, 300);
    } else {
      // Snap back
      ref.current.style.transition = "transform 0.3s ease-out";
      ref.current.style.transform = "translateX(0) rotate(0)";
    }

    state.current.currentX = 0;
  }, [ref, threshold, onSwipeLeft, onSwipeRight]);

  return { onTouchStart, onTouchMove, onTouchEnd };
}
