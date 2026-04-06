"use client";

import clsx from "clsx";
import { stages } from "@/data/stages";
import { backgrounds } from "@/data/backgrounds";
import { LifecycleStage, WorldviewBackground } from "@/data/types";
import { stageColors } from "@/lib/stageColors";

interface Props {
  currentStage: LifecycleStage;
  currentBackground: WorldviewBackground;
  onSelect: (stage: LifecycleStage, background: WorldviewBackground) => void;
}

interface Suggestion {
  stage: LifecycleStage;
  background: WorldviewBackground;
  reason: string;
}

function getRelatedCells(stage: LifecycleStage, background: WorldviewBackground): Suggestion[] {
  const stageInfo = stages.find((s) => s.id === stage);
  if (!stageInfo) return [];

  const mainStages = stages.filter((s) => s.stageType === "main");
  const suggestions: Suggestion[] = [];

  if (stageInfo.stageType === "main") {
    const idx = mainStages.findIndex((s) => s.id === stage);

    // Previous stage, same background
    if (idx > 0) {
      suggestions.push({
        stage: mainStages[idx - 1].id,
        background,
        reason: "Previous stage",
      });
    }

    // Next stage, same background
    if (idx < mainStages.length - 1) {
      suggestions.push({
        stage: mainStages[idx + 1].id,
        background,
        reason: "Next stage",
      });
    }

    // Attrition branch from this stage
    const attritionBranch = stages.find((s) => s.branchesFrom === stage);
    if (attritionBranch) {
      suggestions.push({
        stage: attritionBranch.id,
        background,
        reason: "Attrition risk",
      });
    }

    // Same stage, different background (pick one that isn't current)
    const otherBgs = backgrounds.filter((b) => b.id !== background);
    if (otherBgs.length > 0) {
      const nextBg = otherBgs[0];
      suggestions.push({
        stage,
        background: nextBg.id,
        reason: `Compare: ${nextBg.label}`,
      });
    }
  } else {
    // Attrition stage
    if (stageInfo.branchesFrom) {
      suggestions.push({
        stage: stageInfo.branchesFrom,
        background,
        reason: "Parent stage",
      });
    }

    // Other attrition stages
    const otherAttrition = stages.filter(
      (s) => s.stageType === "attrition" && s.id !== stage,
    );
    for (const other of otherAttrition.slice(0, 2)) {
      suggestions.push({
        stage: other.id,
        background,
        reason: "Related off-ramp",
      });
    }
  }

  return suggestions.slice(0, 4);
}

export default function RelatedCells({ currentStage, currentBackground, onSelect }: Props) {
  const suggestions = getRelatedCells(currentStage, currentBackground);
  if (suggestions.length === 0) return null;

  return (
    <section className="space-y-3">
      <h3 className="text-xs uppercase tracking-[0.25em] text-slate-500">
        Explore Related Cells
      </h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {suggestions.map((s) => {
          const stageInfo = stages.find((st) => st.id === s.stage);
          const bgInfo = backgrounds.find((b) => b.id === s.background);
          if (!stageInfo || !bgInfo) return null;

          const colors = stageColors[stageInfo.color];

          return (
            <button
              key={`${s.stage}-${s.background}`}
              type="button"
              onClick={() => onSelect(s.stage, s.background)}
              className={clsx(
                "group relative rounded-xl border p-3 text-left transition-all",
                "border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50",
              )}
            >
              <span className={clsx(
                "inline-block rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest mb-2",
                colors.text,
                "bg-white/5",
              )}>
                {s.reason}
              </span>
              <p className="text-sm font-medium text-white leading-tight">
                {stageInfo.label}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {bgInfo.icon} {bgInfo.label}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
