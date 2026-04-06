"use client";

import { useEffect, useCallback } from "react";
import { stages } from "@/data/stages";
import { backgrounds } from "@/data/backgrounds";
import { LifecycleStage, WorldviewBackground } from "@/data/types";

const mainStages = stages.filter((s) => s.stageType === "main");
const bgIds = backgrounds.map((b) => b.id);

interface UseKeyboardNavOptions {
  currentStage: LifecycleStage;
  currentBackground: WorldviewBackground;
  isMainStage: boolean;
  onStageChange: (stage: LifecycleStage) => void;
  onBackgroundChange: (bg: WorldviewBackground) => void;
  onSearchOpen: () => void;
}

export function useKeyboardNav({
  currentStage,
  currentBackground,
  isMainStage,
  onStageChange,
  onBackgroundChange,
  onSearchOpen,
}: UseKeyboardNavOptions): void {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't capture if user is typing in an input
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // Cmd/Ctrl+K for search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onSearchOpen();
        return;
      }

      if (!isMainStage) return;

      const stageIdx = mainStages.findIndex((s) => s.id === currentStage);
      const bgIdx = bgIds.indexOf(currentBackground);

      // Left/Right arrows navigate stages
      if (e.key === "ArrowLeft" && stageIdx > 0) {
        e.preventDefault();
        onStageChange(mainStages[stageIdx - 1].id);
      } else if (e.key === "ArrowRight" && stageIdx < mainStages.length - 1) {
        e.preventDefault();
        onStageChange(mainStages[stageIdx + 1].id);
      }

      // Up/Down arrows navigate backgrounds
      if (e.key === "ArrowUp" && bgIdx > 0) {
        e.preventDefault();
        onBackgroundChange(bgIds[bgIdx - 1]);
      } else if (e.key === "ArrowDown" && bgIdx < bgIds.length - 1) {
        e.preventDefault();
        onBackgroundChange(bgIds[bgIdx + 1]);
      }
    },
    [currentStage, currentBackground, isMainStage, onStageChange, onBackgroundChange, onSearchOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
