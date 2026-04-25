"use client";

import { useState, useEffect, useRef, use } from "react";
import { scenarioService } from "../../../../lib/services/scenario-service";
import { useSpeech } from "../../../../hooks/useSpeech";
import { ChevronLeftIcon, VolumeIcon, CheckIcon } from "../../../../components/ui/Icons";
import Link from "next/link";
import type { Scenario, DialogueStep } from "../../../../lib/types";

export default function ScenarioPlayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const scenario = scenarioService.getById(id);

  if (!scenario) {
    return (
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <p className="text-text-muted">找不到此情境</p>
      </main>
    );
  }

  return <ScenarioPlayer scenario={scenario} />;
}

function ScenarioPlayer({ scenario }: { scenario: Scenario }) {
  const { playWord } = useSpeech();
  const [currentStep, setCurrentStep] = useState(0);
  const [revealedSteps, setRevealedSteps] = useState<number[]>([0]);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, number>
  >({});
  const [mistakeCount, setMistakeCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState<Set<number>>(
    new Set()
  );
  const chatEndRef = useRef<HTMLDivElement>(null);

  const totalUserSteps = scenario.steps.filter(
    (s) => s.speaker === "you"
  ).length;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [revealedSteps]);

  // Auto-play staff lines
  useEffect(() => {
    const step = scenario.steps[currentStep];
    if (step?.speaker === "staff") {
      setTimeout(() => playWord(step.line), 300);
    }
  }, [currentStep, scenario.steps, playWord]);

  function handleSelect(stepIndex: number, optionIndex: number) {
    if (selectedOptions[stepIndex] !== undefined) return;

    const step = scenario.steps[stepIndex];
    const option = step.options?.[optionIndex];
    if (!option) return;

    if (option.isCorrect) {
      setSelectedOptions((prev) => ({ ...prev, [stepIndex]: optionIndex }));
      // Reveal next steps until next "you" turn or end
      const nextSteps: number[] = [];
      let i = stepIndex + 1;
      while (i < scenario.steps.length) {
        nextSteps.push(i);
        if (scenario.steps[i].speaker === "you") break;
        i++;
      }
      if (nextSteps.length > 0) {
        setRevealedSteps((prev) => [...prev, ...nextSteps]);
        setCurrentStep(nextSteps[nextSteps.length - 1]);
      } else {
        // Scenario complete
        setCompleted(true);
        scenarioService.markCompleted(scenario.id, mistakeCount);
      }
    } else {
      setMistakeCount((prev) => prev + 1);
      // Show wrong feedback but don't lock
      setSelectedOptions((prev) => ({ ...prev, [stepIndex]: -optionIndex - 1 }));
      // Allow retry after brief delay
      setTimeout(() => {
        setSelectedOptions((prev) => {
          const next = { ...prev };
          delete next[stepIndex];
          return next;
        });
      }, 1500);
    }
  }

  function toggleTranslation(stepIndex: number) {
    setShowTranslation((prev) => {
      const next = new Set(prev);
      if (next.has(stepIndex)) next.delete(stepIndex);
      else next.add(stepIndex);
      return next;
    });
  }

  if (completed) {
    return (
      <main className="flex-1 pb-20 px-4 pt-6 max-w-lg mx-auto w-full">
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <div className="w-16 h-16 rounded-full bg-success-light flex items-center justify-center">
            <CheckIcon size={32} className="text-success" />
          </div>
          <h2 className="text-xl font-bold text-text-primary">對話完成！</h2>
          <p className="text-sm text-text-secondary text-center">
            {scenario.title} — {scenario.titleEn}
          </p>
          <div className="bg-bg-card border border-border rounded-xl p-4 w-full max-w-xs text-center">
            <p className="text-xs text-text-muted mb-1">錯誤次數</p>
            <p
              className={`text-2xl font-bold ${
                mistakeCount === 0 ? "text-success" : "text-warning"
              }`}
            >
              {mistakeCount}
            </p>
            {mistakeCount === 0 && (
              <p className="text-xs text-success mt-1">完美通關！</p>
            )}
          </div>
          <div className="flex gap-3 mt-4">
            <Link
              href="/travel/scenarios"
              className="px-6 py-2.5 bg-bg-card border border-border rounded-xl text-sm font-medium text-text-primary"
            >
              返回列表
            </Link>
            <button
              onClick={() => {
                setCurrentStep(0);
                setRevealedSteps([0]);
                setSelectedOptions({});
                setMistakeCount(0);
                setCompleted(false);
                setShowTranslation(new Set());
              }}
              className="px-6 py-2.5 bg-accent text-white rounded-xl text-sm font-medium"
            >
              再試一次
            </button>
          </div>
        </div>
      </main>
    );
  }

  const progress =
    Object.keys(selectedOptions).filter(
      (k) => (selectedOptions[Number(k)] ?? -1) >= 0
    ).length / totalUserSteps;

  return (
    <main className="flex-1 pb-6 px-4 pt-6 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <Link
          href="/travel/scenarios"
          className="p-2 -ml-2 text-text-secondary"
        >
          <ChevronLeftIcon size={24} />
        </Link>
        <h1 className="text-base font-bold">{scenario.title}</h1>
        <div className="w-10" />
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-bg-input rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Situation */}
      <div className="bg-accent-light border border-border rounded-xl p-3 mb-4">
        <p className="text-xs text-text-muted mb-1">情境</p>
        <p className="text-sm text-text-primary">{scenario.situation}</p>
        <p className="text-xs text-text-muted mt-1 italic">
          {scenario.situationEn}
        </p>
      </div>

      {/* Chat messages */}
      <div className="space-y-3 mb-4">
        {revealedSteps.map((stepIndex) => {
          const step = scenario.steps[stepIndex];
          if (!step) return null;

          if (step.speaker === "staff") {
            return (
              <div key={stepIndex} className="flex gap-2 animate-fadeIn">
                <div className="w-8 h-8 rounded-full bg-bg-input flex items-center justify-center text-xs shrink-0">
                  🧑‍💼
                </div>
                <div className="flex-1">
                  <div className="bg-bg-card border border-border rounded-xl rounded-tl-sm p-3">
                    <p className="text-sm text-text-primary leading-relaxed">
                      {step.line}
                    </p>
                    {showTranslation.has(stepIndex) && (
                      <p className="text-xs text-text-muted mt-1 animate-fadeIn">
                        {step.lineZh}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={() => playWord(step.line)}
                      className="p-1 text-text-muted hover:text-accent"
                    >
                      <VolumeIcon size={14} />
                    </button>
                    <button
                      onClick={() => toggleTranslation(stepIndex)}
                      className="text-[10px] text-text-muted hover:text-accent"
                    >
                      {showTranslation.has(stepIndex) ? "隱藏翻譯" : "看翻譯"}
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          // User turn
          const selected = selectedOptions[stepIndex];
          const hasAnswered = selected !== undefined && selected >= 0;

          return (
            <div key={stepIndex} className="animate-fadeIn">
              {hasAnswered ? (
                // Show selected answer as chat bubble
                <div className="flex gap-2 justify-end">
                  <div className="flex-1 max-w-[80%]">
                    <div className="bg-accent text-white rounded-xl rounded-tr-sm p-3 ml-auto">
                      <p className="text-sm leading-relaxed">
                        {step.options![selected].text}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-1 justify-end">
                      <button
                        onClick={() =>
                          playWord(step.options![selected].text)
                        }
                        className="p-1 text-text-muted hover:text-accent"
                      >
                        <VolumeIcon size={14} />
                      </button>
                      <button
                        onClick={() => toggleTranslation(stepIndex)}
                        className="text-[10px] text-text-muted hover:text-accent"
                      >
                        {showTranslation.has(stepIndex)
                          ? "隱藏翻譯"
                          : "看翻譯"}
                      </button>
                    </div>
                    {showTranslation.has(stepIndex) && (
                      <p className="text-xs text-text-muted mt-1 text-right animate-fadeIn">
                        {step.options![selected].textZh}
                      </p>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-xs shrink-0">
                    🙋
                  </div>
                </div>
              ) : (
                // Show options
                <div className="pl-10 space-y-2">
                  <p className="text-xs text-text-muted mb-1">選擇你的回應：</p>
                  {step.options?.map((opt, oi) => {
                    const isWrong =
                      selected !== undefined && selected === -oi - 1;
                    return (
                      <button
                        key={oi}
                        onClick={() => handleSelect(stepIndex, oi)}
                        disabled={selected !== undefined}
                        className={`w-full text-left p-3 rounded-xl text-sm transition-colors ${
                          isWrong
                            ? "bg-danger-light border border-danger text-danger"
                            : "bg-bg-card border border-border text-text-primary hover:border-accent"
                        }`}
                      >
                        <p className="leading-relaxed">{opt.text}</p>
                        <p className="text-xs text-text-muted mt-0.5">
                          {opt.textZh}
                        </p>
                        {isWrong && opt.explanation && (
                          <p className="text-xs text-danger mt-1 animate-fadeIn">
                            {opt.explanation}
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        <div ref={chatEndRef} />
      </div>
    </main>
  );
}
