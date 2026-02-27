// src/components/StageHero.tsx
"use client";
import { stages } from "@/data/stages";
import { LifecycleStage, StageColor } from "@/data/types";

const colorMap: Record<StageColor, string> = {
  indigo: "from-indigo-900/40 border-indigo-500/30 text-indigo-300",
  violet: "from-violet-900/40 border-violet-500/30 text-violet-300",
  blue: "from-blue-900/40 border-blue-500/30 text-blue-300",
  emerald: "from-emerald-900/40 border-emerald-500/30 text-emerald-300",
  amber: "from-amber-900/40 border-amber-500/30 text-amber-300",
};

export default function StageHero({ stageId }: { stageId: LifecycleStage }) {
  const stage = stages.find((s) => s.id === stageId)!;
  const colors = colorMap[stage.color];

  return (
    <div className={`rounded-2xl border bg-gradient-to-br ${colors} to-transparent p-6`}>
      <div className={`text-sm font-semibold uppercase tracking-wider mb-1 ${colors.split(" ")[2]}`}>
        {stage.subtitle}
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">{stage.label}</h2>
      <p className="text-slate-300 text-sm italic mb-4">"{stage.emotion}"</p>
      <p className="text-slate-200 max-w-2xl">{stage.description}</p>
    </div>
  );
}
