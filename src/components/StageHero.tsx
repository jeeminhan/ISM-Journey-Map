// src/components/StageHero.tsx
"use client";
import clsx from "clsx";
import { stages } from "@/data/stages";
import { LifecycleStage } from "@/data/types";
import { stageColors } from "@/lib/stageColors";

export default function StageHero({ stageId }: { stageId: LifecycleStage }) {
  const stage = stages.find((s) => s.id === stageId);
  if (!stage) return null;
  const colors = stageColors[stage.color];

  const mainStages = stages.filter((s) => s.stageType === "main");
  const stageIndex = mainStages.findIndex((s) => s.id === stageId);
  const stageNumber = stageIndex >= 0 ? stageIndex + 1 : null;

  return (
    <div className={clsx(
      "rounded-2xl border bg-gradient-to-br to-transparent p-5 sm:p-6 relative overflow-hidden",
      colors.gradient,
    )}>
      {/* Decorative background number for main stages */}
      {stageNumber !== null ? (
        <span
          className="absolute -right-3 -top-6 text-[120px] font-black leading-none text-white/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          {stageNumber}
        </span>
      ) : null}

      <div className="relative">
        <div className="flex items-center gap-3 mb-2">
          <div className={clsx(
            "text-[11px] sm:text-sm font-semibold uppercase tracking-wider",
            colors.text,
          )}>
            {stage.subtitle}
          </div>
          {stage.stageType === "attrition" ? (
            <span className="inline-flex rounded-full bg-rose-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-rose-300">
              Off-Ramp
            </span>
          ) : null}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          {stage.label}
        </h2>
        <p className="text-slate-200 max-w-2xl leading-relaxed text-sm sm:text-base">
          {stage.description}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs text-slate-500">Emotional posture:</span>
          <span className={clsx("text-xs font-medium", colors.text)}>{stage.emotion}</span>
        </div>
      </div>
    </div>
  );
}
