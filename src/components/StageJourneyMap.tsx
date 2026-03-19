"use client";

import { stages } from "@/data/stages";
import { FaithMilestone, LifecycleStage } from "@/data/types";
import { stageColors } from "@/lib/stageColors";
import clsx from "clsx";

interface Props {
  selected: LifecycleStage;
  onChange: (stage: LifecycleStage) => void;
}

const milestoneMeta: Record<FaithMilestone, { label: string; tone: string }> = {
  "pre-decision": {
    label: "Pre-Decision",
    tone: "border-sky-500/40 bg-sky-950/45 text-sky-200",
  },
  "decision-window": {
    label: "Decision Window Bridge",
    tone: "border-cyan-500/50 bg-cyan-950/60 text-cyan-200",
  },
  "post-decision": {
    label: "Post-Decision",
    tone: "border-emerald-500/50 bg-emerald-950/60 text-emerald-200",
  },
  unreached: {
    label: "Never Reached",
    tone: "border-slate-600/50 bg-slate-900/60 text-slate-400",
  },
  erosion: {
    label: "Faith at Risk",
    tone: "border-rose-700/50  bg-rose-950/60  text-rose-300",
  },
};

const nodePositions: Partial<Record<LifecycleStage, { x: number; y: number }>> = {
  "pre-arrival": { x: 18, y: 34 },
  arrival: { x: 26, y: 60 },
  integration: { x: 50, y: 45 },
  leadership: { x: 73, y: 38 },
  reentry: { x: 82, y: 62 },
};

const attritionNodePositions: Partial<Record<LifecycleStage, { x: number; y: number }>> = {
  "invisible-years": { x: 14, y: 78 },
  drift: { x: 44, y: 78 },
  "silent-exit": { x: 68, y: 78 },
  "cultural-reversion": { x: 85, y: 78 },
};

export default function StageJourneyMap({ selected, onChange }: Props) {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 md:p-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">Student Journey Map</h3>
          <p className="text-sm text-slate-300">
            Follow the main lifecycle and note where students are commonly lost. Milestone labels show
            where each stage often sits in spiritual openness.
          </p>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap gap-2 text-xs">
        {Object.entries(milestoneMeta).map(([key, meta]) => (
          <span key={key} className={clsx("rounded-full border px-2.5 py-1", meta.tone)}>
            {meta.label}
          </span>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-slate-950/80 p-4">
        <div className="grid gap-2 md:hidden">
          {stages
            .filter((s) => s.stageType === "main")
            .map((stage, index) => {
              const isSelected = stage.id === selected;
              const colors = stageColors[stage.color];
              const milestone = milestoneMeta[stage.faithMilestone];

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => onChange(stage.id)}
                  className={clsx(
                    "rounded-xl border px-3 py-3 text-left transition",
                    "bg-slate-900/90 border-white/20 hover:border-white/50",
                    isSelected && clsx("ring-2", colors.ring, "border-white/70")
                  )}
                  aria-pressed={isSelected}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={clsx(
                        "inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white",
                        colors.bg
                      )}
                    >
                      {index + 1}
                    </span>
                    <span className={clsx("text-xs font-semibold uppercase tracking-wide", colors.text)}>
                      {stage.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{stage.subtitle}</p>
                  <span className={clsx("mt-2 inline-flex rounded-full border px-2 py-0.5 text-[11px]", milestone.tone)}>
                    {milestone.label}
                  </span>
                </button>
              );
            })}

          <div className="mt-1 flex items-center gap-2 text-xs text-rose-300">
            <span>↘</span>
            <span className="uppercase tracking-wide">Attrition Off-Ramps</span>
          </div>

          {stages
            .filter((s) => s.stageType === "attrition")
            .map((stage) => {
              const colors = stageColors[stage.color];
              const milestone = milestoneMeta[stage.faithMilestone];

              return (
                <div
                  key={stage.id}
                  className={clsx(
                    "rounded-xl border px-3 py-2 text-left opacity-80",
                    "bg-slate-950/90 border-rose-900/50"
                  )}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-rose-400 text-xs">↘</span>
                    <span className={clsx("text-xs font-semibold uppercase tracking-wide", colors.text)}>
                      {stage.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{stage.subtitle}</p>
                  <span className={clsx("mt-2 inline-flex rounded-full border px-2 py-0.5 text-[11px]", milestone.tone)}>
                    {milestone.label}
                  </span>
                </div>
              );
            })}
        </div>

        <div className="relative mx-auto hidden h-[460px] w-full max-w-5xl md:block">
          <svg viewBox="0 0 1000 460" className="h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="ocean-stage" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#082f49" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="bridge-current" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="1000" height="460" fill="url(#ocean-stage)" rx="20" />

            <g fill="#1e3a5f" stroke="#7dd3fc" strokeOpacity="0.35" strokeWidth="2">
              <path d="M80 120l40-40 80-18 86 14 62 34 18 34-18 30-50 12-26 23-32 18-67-6-58-26-36-38z" />
              <path d="M403 137l28-35 52-12 46 16 18 30-10 32-34 14-42 2-36-16z" />
              <path d="M620 106l54-20 88 10 72 36 30 40-10 48-52 28-76 8-62-26-42-46z" />
            </g>

            <path
              d="M342 160 C 372 150, 392 150, 415 156"
              fill="none"
              stroke="url(#bridge-current)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 7"
              opacity="0.95"
            />
            <path
              d="M548 160 C 575 152, 597 150, 622 156"
              fill="none"
              stroke="url(#bridge-current)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 7"
              opacity="0.95"
            />

            <g>
              <path
                d="M269 156.4 C 269 257.6, 229 257.6, 229 358.8"
                stroke="#f43f5e"
                strokeWidth="2"
                strokeDasharray="6 5"
                strokeOpacity="0.6"
                fill="none"
              />
              <path
                d="M589 207 C 589 282.9, 529 282.9, 529 358.8"
                stroke="#f43f5e"
                strokeWidth="2"
                strokeDasharray="6 5"
                strokeOpacity="0.6"
                fill="none"
              />
              <path
                d="M819 174.8 C 819 266.8, 769 266.8, 769 358.8"
                stroke="#f43f5e"
                strokeWidth="2"
                strokeDasharray="6 5"
                strokeOpacity="0.6"
                fill="none"
              />
              <path
                d="M909 285.2 C 909 322, 939 322, 939 358.8"
                stroke="#f43f5e"
                strokeWidth="2"
                strokeDasharray="6 5"
                strokeOpacity="0.6"
                fill="none"
              />
            </g>

            <text x="145" y="88" fill="#bae6fd" fontSize="12" fontWeight="700" letterSpacing="1.2">
              EARLY JOURNEY
            </text>
            <text x="412" y="80" fill="#a5f3fc" fontSize="12" fontWeight="700" letterSpacing="1.2">
              DECISION BRIDGE
            </text>
            <text x="665" y="92" fill="#bbf7d0" fontSize="12" fontWeight="700" letterSpacing="1.2">
              GROWTH & SENDING
            </text>
          </svg>

          {stages
            .filter((s) => s.stageType === "main")
            .map((stage, index) => {
              const pos = nodePositions[stage.id];
              if (!pos) return null;

              const isSelected = stage.id === selected;
              const colors = stageColors[stage.color];
              const milestone = milestoneMeta[stage.faithMilestone];

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => onChange(stage.id)}
                  className={clsx(
                    "absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border px-3 py-2 text-left transition",
                    "bg-slate-900/90 border-white/20 hover:border-white/50",
                    isSelected && clsx("ring-2", colors.ring, "border-white/70")
                  )}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: "178px" }}
                  aria-pressed={isSelected}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={clsx(
                        "inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white",
                        colors.bg
                      )}
                    >
                      {index + 1}
                    </span>
                    <span className={clsx("text-xs font-semibold uppercase tracking-wide", colors.text)}>
                      {stage.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{stage.subtitle}</p>
                  <span className={clsx("mt-2 inline-flex rounded-full border px-2 py-0.5 text-[11px]", milestone.tone)}>
                    {milestone.label}
                  </span>
                </button>
              );
            })}

          {stages
            .filter((s) => s.stageType === "attrition")
            .map((stage) => {
              const pos = attritionNodePositions[stage.id];
              if (!pos) return null;
              const colors = stageColors[stage.color];
              const milestone = milestoneMeta[stage.faithMilestone];

              return (
                <div
                  key={stage.id}
                  className={clsx(
                    "absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border px-3 py-2 text-left opacity-80",
                    "bg-slate-950/90 border-rose-900/50"
                  )}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: "168px" }}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-rose-400 text-xs">↘</span>
                    <span className={clsx("text-xs font-semibold uppercase tracking-wide", colors.text)}>
                      {stage.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{stage.subtitle}</p>
                  <span className={clsx("mt-2 inline-flex rounded-full border px-2 py-0.5 text-[11px]", milestone.tone)}>
                    {milestone.label}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
