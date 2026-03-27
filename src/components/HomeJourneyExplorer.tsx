"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import BackgroundInfoPanel from "@/components/BackgroundInfo";
import BackgroundSelector from "@/components/BackgroundSelector";
import EmpathyMap from "@/components/EmpathyMap";
import MinistryPanel from "@/components/MinistryPanel";
import QuotesSection from "@/components/QuotesSection";
import StageHero from "@/components/StageHero";
import StageMap from "@/components/StageMap";
import { stages } from "@/data/stages";
import { LifecycleStage, WorldviewBackground } from "@/data/types";
import { getJourneyCell } from "@/lib/getJourneyCell";
import { stageColors } from "@/lib/stageColors";

const VALID_BACKGROUNDS: WorldviewBackground[] = ["muslim", "hindu", "buddhist", "secular", "nominal"];
const DEFAULT_STAGE: LifecycleStage = "pre-arrival";
const DEFAULT_BACKGROUND: WorldviewBackground = "muslim";
const MAIN_STAGE_ORDER = stages.filter((stage) => stage.stageType === "main");

function buildHomeUrl(stageId: LifecycleStage, background?: WorldviewBackground) {
  const params = new URLSearchParams({ stage: stageId });

  if (background) {
    params.set("bg", background);
  }

  return `/?${params.toString()}`;
}

interface Props {
  backgroundParam?: string;
  stageParam?: string;
}

export default function HomeJourneyExplorer({ backgroundParam, stageParam }: Props) {
  const router = useRouter();
  const detailsRef = useRef<HTMLElement>(null);

  const selectedStage =
    stages.find((stage) => stage.id === stageParam)?.id ?? DEFAULT_STAGE;
  const stage = stages.find((item) => item.id === selectedStage) ?? stages[0];

  const selectedBackground =
    stage.stageType === "main" && VALID_BACKGROUNDS.includes(backgroundParam as WorldviewBackground)
      ? (backgroundParam as WorldviewBackground)
      : DEFAULT_BACKGROUND;

  const cell = stage.stageType === "main" ? getJourneyCell(stage.id, selectedBackground) : null;

  function scrollToDetails() {
    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleStageChange(stageId: LifecycleStage) {
    const nextStage = stages.find((stageItem) => stageItem.id === stageId);

    if (!nextStage) {
      return;
    }

    const nextBackground = nextStage.stageType === "main" ? selectedBackground : undefined;
    router.replace(buildHomeUrl(stageId, nextBackground), { scroll: false });
    scrollToDetails();
  }

  function handleBackgroundChange(background: WorldviewBackground) {
    router.replace(buildHomeUrl(stage.id, background), { scroll: false });
  }

  const branchSource = stage.branchesFrom
    ? stages.find((stageItem) => stageItem.id === stage.branchesFrom) ?? null
    : null;
  const nextMainStage =
    stage.stageType === "main"
      ? MAIN_STAGE_ORDER[MAIN_STAGE_ORDER.findIndex((stageItem) => stageItem.id === stage.id) + 1] ?? null
      : null;
  const attritionBranches = stages.filter((stageItem) => stageItem.branchesFrom === stage.id);
  const branchTargets = [nextMainStage, ...attritionBranches].filter(Boolean);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      <section className="text-center py-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">
          See the Student. <span className="text-indigo-400">Love the Person.</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Select a lifecycle stage to explore how to come alongside international
          students with empathy and strategic clarity.
        </p>
      </section>

      <StageMap selected={selectedStage} onChange={handleStageChange} />

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">Main Journey</p>
          <p className="text-sm leading-relaxed text-slate-300">
            The upper islands show the intended progression from pre-arrival through re-entry.
            Moving left to right means the student is still meaningfully connected and being
            shepherded forward.
          </p>
        </div>
        <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-rose-300/80 mb-2">The Lowlands</p>
          <p className="text-sm leading-relaxed text-slate-300">
            The lowlands are not parallel “next steps.” They represent common attrition territory:
            places students drift when ministry presence, follow-up, or re-entry support breaks down.
          </p>
        </div>
      </section>

      <section ref={detailsRef} id="stage-details" className="space-y-8 animate-fade-in">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Stage Detail</p>
            {branchSource ? (
              <button
                type="button"
                onClick={() => handleStageChange(branchSource.id)}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Back to {branchSource.label}
              </button>
            ) : null}
          </div>
          <StageHero stageId={stage.id} />
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 space-y-4">
          {branchSource ? (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Branches From</p>
              <button
                type="button"
                onClick={() => handleStageChange(branchSource.id)}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-white/20 hover:bg-white/8"
              >
                <p className="text-sm font-semibold text-white">{branchSource.label}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">
                  {branchSource.subtitle}
                </p>
                <p className="text-sm text-slate-400 mt-3">
                  This off-ramp emerges when the main journey breaks down at this stage.
                </p>
              </button>
            </div>
          ) : null}

          {branchTargets.length > 0 ? (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Branches To</p>
              {stage.stageType === "main" ? (
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-sm text-slate-300">
                    Read these cards in two categories: the <span className="font-semibold text-emerald-300">expected next step</span> shows the intended progression, while any <span className="font-semibold text-rose-300">warning off-ramp</span> shows where students can be lost if that window is missed.
                  </p>
                </div>
              ) : null}
              <div className="grid gap-3 md:grid-cols-2">
                {branchTargets.map((target) => {
                  if (!target) {
                    return null;
                  }

                  const isMainRoute = target.stageType === "main";

                  return (
                    <button
                      type="button"
                      key={target.id}
                      onClick={() => handleStageChange(target.id)}
                      className={clsx(
                        "rounded-xl border p-4 text-left transition hover:bg-white/8",
                        isMainRoute
                          ? "border-emerald-500/25 bg-emerald-950/20 hover:border-emerald-400/40"
                          : "border-rose-500/25 bg-rose-950/20 hover:border-rose-400/40",
                      )}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={clsx(
                            "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]",
                            isMainRoute
                              ? "bg-emerald-400/15 text-emerald-200"
                              : "bg-rose-400/15 text-rose-200",
                          )}
                        >
                          {isMainRoute ? "Expected Next Step" : "Warning Off-Ramp"}
                        </span>
                        <span className="text-xs uppercase tracking-wide text-slate-500">
                          {isMainRoute ? "Keep moving forward" : "What to prevent"}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white mt-3">{target.label}</p>
                      <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">
                        {target.subtitle}
                      </p>
                      <p className={clsx("text-sm mt-3", isMainRoute ? "text-emerald-50" : "text-rose-50")}>
                        {isMainRoute
                          ? `If support continues, the intended next movement is into ${target.label.toLowerCase()}.`
                          : `If this ministry window is missed, students can slip toward ${target.label.toLowerCase()}.`}
                      </p>
                      <p className="text-sm text-slate-500 mt-2">{target.description}</p>
                    </button>
                  );
                })}
              </div>
              {stage.stageType === "main" && attritionBranches.length > 0 ? (
                <p className="text-sm text-slate-400">
                  The expected next step is the intended movement. Warning off-ramp cards show what can happen
                  if that ministry window is missed.
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        {stage.stageType === "main" ? (
          <>
            <div className="space-y-4">
              <BackgroundSelector
                selected={selectedBackground}
                onChange={handleBackgroundChange}
              />
              <BackgroundInfoPanel bgId={selectedBackground} />
            </div>

            {cell ? (
              <div className="space-y-8">
                <EmpathyMap data={cell.empathyMap} />
                <QuotesSection quotes={cell.quotes} />
                <MinistryPanel cell={cell} />
              </div>
            ) : (
              <div className="p-6 border border-white/10 rounded-xl bg-slate-900/40 space-y-3">
                <p className="text-sm font-semibold text-slate-300">Content coming soon</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We&apos;re building out the {stage.label} × {selectedBackground} combination.
                  The Muslim background currently has the most complete content.
                </p>
                <button
                  type="button"
                  onClick={() => handleBackgroundChange(DEFAULT_BACKGROUND)}
                  className="inline-flex items-center gap-1.5 text-sm text-indigo-400 transition hover:text-indigo-300"
                >
                  Explore {stage.label} × Muslim →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-rose-500/20 bg-slate-900/40 p-6 space-y-4">
            <p className="text-xs uppercase tracking-widest text-rose-400/70">Attrition Off-Ramp</p>
            <p className="text-sm font-medium text-rose-200/90">
              This is a warning pattern, not the intended next step in the journey.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              {stage.description}
            </p>
            {branchSource ? (
              <button
                type="button"
                onClick={() => handleStageChange(branchSource.id)}
                className="inline-flex items-center gap-1.5 text-sm text-indigo-400 transition hover:text-indigo-300"
              >
                Return to {branchSource.label} →
              </button>
            ) : null}
          </div>
        )}

        <nav aria-label="Explore other stages" className="pt-4 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Explore Other Stages</p>
          <div className="flex flex-wrap gap-2">
            {stages.map((stageItem) => {
              const colors = stageColors[stageItem.color];
              const isCurrent = stageItem.id === stage.id;

              return (
                <button
                  type="button"
                  key={stageItem.id}
                  onClick={() => handleStageChange(stageItem.id)}
                  className={clsx(
                    "px-3 py-2 rounded-full text-sm border transition min-h-[44px] flex items-center",
                    isCurrent
                      ? clsx(colors.text, "border-current bg-white/5 font-semibold")
                      : "border-white/20 text-slate-400 hover:border-white/40 hover:text-slate-200",
                  )}
                  aria-pressed={isCurrent}
                >
                  {stageItem.label}
                  {isCurrent ? " ✓" : ""}
                </button>
              );
            })}
          </div>
        </nav>
      </section>
    </main>
  );
}
