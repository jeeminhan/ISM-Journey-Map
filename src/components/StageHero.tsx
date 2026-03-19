// src/components/StageHero.tsx
"use client";
import { stages } from "@/data/stages";
import { FaithMilestone, LifecycleStage } from "@/data/types";
import { stageColors } from "@/lib/stageColors";

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
  const colors = stageColors[stage.color];

  return (
    <div className={`rounded-2xl border bg-gradient-to-br ${colors.gradient} to-transparent p-6`}>
      <div className={`text-sm font-semibold uppercase tracking-wider mb-1 ${colors.text}`}>
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
