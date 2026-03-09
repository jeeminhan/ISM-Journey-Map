// src/components/StageHero.tsx
"use client";
import { stages } from "@/data/stages";
import { FaithMilestone, LifecycleStage, StageColor } from "@/data/types";

const colorMap: Record<StageColor, string> = {
  indigo: "from-indigo-900/40 border-indigo-500/30 text-indigo-300",
  violet: "from-violet-900/40 border-violet-500/30 text-violet-300",
  blue: "from-blue-900/40 border-blue-500/30 text-blue-300",
  emerald: "from-emerald-900/40 border-emerald-500/30 text-emerald-300",
  amber: "from-amber-900/40 border-amber-500/30 text-amber-300",
  rose: "from-rose-900/40 border-rose-700/30 text-rose-300",
  slate: "from-slate-900/40 border-slate-600/30 text-slate-400",
};

const milestoneLabel: Record<FaithMilestone, string> = {
  "pre-decision": "Pre-Decision Stage",
  "decision-window": "Decision Window Stage",
  "post-decision": "Post-Decision Growth Stage",
  "unreached": "Never Reached",
  "erosion": "Faith at Risk",
};

export default function StageHero({ stageId }: { stageId: LifecycleStage }) {
  const stage = stages.find((s) => s.id === stageId);
  if (!stage) return null;
  const colors = colorMap[stage.color];

  return (
    <div className={`rounded-2xl border bg-gradient-to-br ${colors} to-transparent p-6`}>
      <div className={`text-sm font-semibold uppercase tracking-wider mb-1 ${colors.split(" ")[2]}`}>
        {stage.subtitle}
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">{stage.label}</h2>
      <p className="text-slate-300 text-sm italic mb-4">&quot;{stage.emotion}&quot;</p>
      <span className="mb-4 inline-flex rounded-full border border-white/20 bg-slate-900/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
        {milestoneLabel[stage.faithMilestone]}
      </span>
      <p className="text-slate-200 max-w-2xl">{stage.description}</p>
    </div>
  );
}
