"use client";

import clsx from "clsx";
import { stages } from "@/data/stages";
import { LifecycleStage } from "@/data/types";
import { stageColors } from "@/lib/stageColors";

interface Props {
  selected: LifecycleStage;
  onChange: (stage: LifecycleStage) => void;
}

export default function MobileStageList({ selected, onChange }: Props) {
  const mainStages = stages.filter((s) => s.stageType === "main");
  const attritionStages = stages.filter((s) => s.stageType === "attrition");

  return (
    <div className="md:hidden space-y-3">
      {/* Main journey stages as horizontal scroll */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-2 px-1">
          Main Journey
        </p>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-2 px-2">
          {mainStages.map((stage, i) => {
            const colors = stageColors[stage.color];
            const isSelected = stage.id === selected;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => onChange(stage.id)}
                className={clsx(
                  "flex-shrink-0 relative rounded-xl border p-3 text-left transition-all min-w-[140px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50",
                  isSelected
                    ? `bg-gradient-to-br ${colors.gradient} to-transparent ${colors.border} border-2`
                    : "border-white/10 bg-slate-900/50 hover:border-white/20 hover:bg-slate-900/80",
                )}
                aria-pressed={isSelected}
              >
                <span className="text-[10px] text-slate-500 font-mono">{i + 1}</span>
                <p className={clsx(
                  "text-sm font-semibold leading-tight",
                  isSelected ? "text-white" : "text-slate-300",
                )}>
                  {stage.label}
                </p>
                <p className={clsx(
                  "text-[11px] mt-0.5",
                  isSelected ? colors.text : "text-slate-500",
                )}>
                  {stage.emotion}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Attrition stages */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-rose-400/70 mb-2 px-1">
          Attrition Off-Ramps
        </p>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-2 px-2">
          {attritionStages.map((stage) => {
            const isSelected = stage.id === selected;
            const parentStage = stages.find((s) => s.id === stage.branchesFrom);

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => onChange(stage.id)}
                className={clsx(
                  "flex-shrink-0 rounded-xl border p-3 text-left transition-all min-w-[140px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50",
                  isSelected
                    ? "border-rose-500/40 bg-rose-950/40 border-2"
                    : "border-rose-500/10 bg-rose-950/10 hover:border-rose-500/20",
                )}
                aria-pressed={isSelected}
              >
                <p className={clsx(
                  "text-sm font-semibold leading-tight",
                  isSelected ? "text-rose-200" : "text-slate-400",
                )}>
                  {stage.label}
                </p>
                {parentStage ? (
                  <p className="text-[10px] text-slate-600 mt-0.5">
                    from {parentStage.label}
                  </p>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
