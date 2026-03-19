// src/components/StageSelector.tsx
"use client";
import { stages } from "@/data/stages";
import { LifecycleStage, StageColor } from "@/data/types";
import clsx from "clsx";

interface Props {
  selected: LifecycleStage;
  onChange: (stage: LifecycleStage) => void;
}

const colorMap: Record<StageColor, string> = {
  indigo: "border-indigo-500 text-indigo-400",
  violet: "border-violet-500 text-violet-400",
  blue: "border-blue-500 text-blue-400",
  emerald: "border-emerald-500 text-emerald-400",
  amber: "border-amber-500 text-amber-400",
  rose: "border-rose-500 text-rose-400",
  slate: "border-slate-500 text-slate-400",
};

export default function StageSelector({ selected, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {stages.filter((s) => s.stageType === "main").map((stage, i) => (
        <button
          key={stage.id}
          onClick={() => onChange(stage.id)}
          className={clsx(
            "flex-shrink-0 px-4 py-3 rounded-xl border text-left transition-all",
            selected === stage.id
              ? clsx("bg-white/10", colorMap[stage.color])
              : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
          )}
        >
          <div className="text-xs font-semibold uppercase tracking-wider mb-1">
            {i + 1}. {stage.label}
          </div>
          <div className="text-xs opacity-70">{stage.emotion}</div>
        </button>
      ))}
    </div>
  );
}
