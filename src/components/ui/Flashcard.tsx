"use client";

import React, { useState, useRef } from "react";
import { useSwipe } from "../../hooks/useSwipe";
import { useSpeech } from "../../hooks/useSpeech";
import { VolumeIcon } from "./Icons";
import DomainBadge from "./DomainBadge";
import type { Word } from "../../lib/types";

interface FlashcardProps {
  word: Word;
  onRate: (quality: number) => void;
  showButtons?: boolean;
}

function Flashcard({
  word,
  onRate,
  showButtons = true,
}: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { playWord } = useSpeech();

  const swipeHandlers = useSwipe(cardRef, {
    onSwipeLeft: () => {
      setFlipped(false);
      onRate(1); // Again
    },
    onSwipeRight: () => {
      setFlipped(false);
      onRate(4); // Good
    },
  });

  function handleFlip() {
    setFlipped(!flipped);
  }

  function handleRate(quality: number) {
    setFlipped(false);
    // Reset card position
    if (cardRef.current) {
      cardRef.current.style.transform = "";
      cardRef.current.style.opacity = "";
    }
    onRate(quality);
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div
        ref={cardRef}
        className="w-full max-w-sm"
        {...swipeHandlers}
      >
        <div
          className="card-flip cursor-pointer"
          onClick={handleFlip}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleFlip(); } }}
          role="button"
          tabIndex={0}
          aria-label={flipped ? `${word.chinese} — 點擊翻回正面` : `${word.english} — 點擊翻面看解答`}
        >
          <div
            className={`card-flip-inner relative min-h-[260px] sm:min-h-[320px] ${flipped ? "flipped" : ""}`}
          >
            {/* Front - English + Example sentence */}
            <div className="card-front absolute inset-0 bg-bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm">
              <DomainBadge domain={word.domain} />
              <h2 className="text-3xl font-bold text-text-primary">
                {word.english}
              </h2>
              <p className="text-sm text-text-muted">{word.phonetic}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playWord(word.english);
                }}
                className="p-2 rounded-full bg-accent-light text-accent hover:bg-accent hover:text-white transition-colors"
              >
                <VolumeIcon size={20} />
              </button>
              <div className="w-full border-t border-border-light mt-1 pt-3 px-1">
                <p className="text-sm text-text-secondary leading-relaxed text-center italic">
                  &ldquo;{word.exampleEn}&rdquo;
                </p>
              </div>
              <p className="text-xs text-text-muted">點擊翻面看解答</p>
            </div>

            {/* Back - Chinese answer */}
            <div className="card-back absolute inset-0 bg-bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm">
              <p className="text-sm text-text-muted">{word.partOfSpeech}</p>
              <h2 className="text-2xl font-bold text-accent">
                {word.chinese}
              </h2>
              <div className="w-full border-t border-border-light mt-1 pt-3 px-2">
                <p className="text-xs text-text-secondary leading-relaxed text-center">
                  {word.exampleZh}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating buttons */}
      {showButtons && flipped && (
        <div className="flex gap-2 w-full max-w-sm">
          <button
            onClick={() => handleRate(1)}
            className="flex-1 py-3 rounded-xl bg-danger-light text-danger font-medium text-sm transition-colors hover:bg-danger hover:text-white"
          >
            Again
          </button>
          <button
            onClick={() => handleRate(3)}
            className="flex-1 py-3 rounded-xl bg-warning-light text-warning font-medium text-sm transition-colors hover:bg-warning hover:text-white"
          >
            Hard
          </button>
          <button
            onClick={() => handleRate(4)}
            className="flex-1 py-3 rounded-xl bg-success-light text-success font-medium text-sm transition-colors hover:bg-success hover:text-white"
          >
            Good
          </button>
          <button
            onClick={() => handleRate(5)}
            className="flex-1 py-3 rounded-xl bg-accent-light text-accent font-medium text-sm transition-colors hover:bg-accent hover:text-white"
          >
            Easy
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(Flashcard);
