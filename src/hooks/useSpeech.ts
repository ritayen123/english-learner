"use client";

import { useCallback } from "react";
import { speak } from "../lib/speech";

export function useSpeech() {
  const playWord = useCallback((word: string) => {
    speak(word, "en-US");
  }, []);

  return { playWord };
}
