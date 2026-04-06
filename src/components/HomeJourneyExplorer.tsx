"use client";

import clsx from "clsx";
import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import BackgroundInfoPanel from "@/components/BackgroundInfo";
import BackgroundSelector from "@/components/BackgroundSelector";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmpathyMap from "@/components/EmpathyMap";
import KeyboardHints from "@/components/KeyboardHints";
import MinistryPanel from "@/components/MinistryPanel";
import MobileStageList from "@/components/MobileStageList";
import PrintableCell from "@/components/PrintableCell";
import QuotesSection from "@/components/QuotesSection";
import RelatedCells from "@/components/RelatedCells";
import SearchOverlay from "@/components/SearchOverlay";
import StageHero from "@/components/StageHero";
import StageMap from "@/components/StageMap";
import { stages } from "@/data/stages";
import { LifecycleStage, WorldviewBackground } from "@/data/types";
import { getJourneyCell } from "@/lib/getJourneyCell";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";

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
  const [searchOpen, setSearchOpen] = useState(false);

  const selectedStage =
    stages.find((stage) => stage.id === stageParam)?.id ?? DEFAULT_STAGE;
  const stage = stages.find((item) => item.id === selectedStage) ?? stages[0];

  const selectedBackground =
    stage.stageType === "main" && VALID_BACKGROUNDS.includes(backgroundParam as WorldviewBackground)
      ? (backgroundParam as WorldviewBackground)
      : DEFAULT_BACKGROUND;

  const cell = stage.stageType === "main" ? getJourneyCell(stage.id, selectedBackground) : null;

  function scrollToDetails() {
    if (window.innerWidth >= 1280) {
      return;
    }

    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const handleStageChange = useCallback(
    (stageId: LifecycleStage) => {
      const nextStage = stages.find((stageItem) => stageItem.id === stageId);

      if (!nextStage) {
        return;
      }

      const nextBackground = nextStage.stageType === "main" ? selectedBackground : undefined;
      router.replace(buildHomeUrl(stageId, nextBackground), { scroll: false });
      scrollToDetails();
    },
    [router, selectedBackground],
  );

  const handleBackgroundChange = useCallback(
    (background: WorldviewBackground) => {
      router.replace(buildHomeUrl(stage.id, background), { scroll: false });
    },
    [router, stage.id],
  );

  const handleSearchSelect = useCallback(
    (searchStage: LifecycleStage, background: WorldviewBackground) => {
      const targetStage = stages.find((s) => s.id === searchStage);
      if (!targetStage) return;

      const bg = targetStage.stageType === "main" ? background : undefined;
      router.replace(buildHomeUrl(searchStage, bg), { scroll: false });
      scrollToDetails();
    },
    [router],
  );

  const handleSearchOpen = useCallback(() => {
    setSearchOpen(true);
  }, []);

  // Keyboard navigation
  useKeyboardNav({
    currentStage: selectedStage,
    currentBackground: selectedBackground,
    isMainStage: stage.stageType === "main",
    onStageChange: handleStageChange,
    onBackgroundChange: handleBackgroundChange,
    onSearchOpen: handleSearchOpen,
  });

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
    <>
      {/* Search overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelect={handleSearchSelect}
      />

      {/* Print-only view */}
      {cell ? <PrintableCell cell={cell} /> : null}
      {stage.stageType === "attrition" ? (() => {
        const attritionCell = getJourneyCell(stage.id, selectedBackground);
        return attritionCell ? <PrintableCell cell={attritionCell} /> : null;
      })() : null}

      {/* Screen-only main UI */}
      <main data-screen-only className="mx-auto max-w-[1600px] px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Hero section */}
        <section className="text-center py-8 sm:py-12 max-w-2xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            See the Student.{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Love the Person.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Select a lifecycle stage to explore how to come alongside international
            students with empathy and strategic clarity.
          </p>

          {/* Search trigger */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-400 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-slate-300 group"
          >
            <svg className="h-4 w-4 text-slate-500 group-hover:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search all cells...</span>
            <kbd className="hidden sm:inline-flex items-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-slate-600 ml-2">
              ⌘K
            </kbd>
          </button>
        </section>

        <div className="grid gap-6 sm:gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] xl:items-start">
          <aside className="space-y-4 xl:sticky xl:top-6">
            {/* Desktop SVG map */}
            <div className="hidden md:block">
              <StageMap selected={selectedStage} onChange={handleStageChange} />
            </div>

            {/* Mobile stage list */}
            <MobileStageList selected={selectedStage} onChange={handleStageChange} />

            <section className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 sm:p-5 transition-colors hover:bg-slate-900/60">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">Main Journey</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  The upper islands show the intended progression from pre-arrival through re-entry.
                  Moving left to right means the student is still meaningfully connected and being
                  shepherded forward.
                </p>
              </div>
              <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-4 sm:p-5 transition-colors hover:bg-rose-950/30">
                <p className="text-xs uppercase tracking-[0.25em] text-rose-300/80 mb-2">The Lowlands</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  The lowlands are not parallel &quot;next steps.&quot; They represent common attrition territory:
                  places students drift when ministry presence, follow-up, or re-entry support breaks down.
                </p>
              </div>
            </section>
          </aside>

          <section ref={detailsRef} id="stage-details" className="space-y-6 sm:space-y-8 xl:min-w-0">
            {/* Breadcrumbs and nav */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Breadcrumbs
                stage={stage.id}
                background={stage.stageType === "main" ? selectedBackground : undefined}
                onStageClick={() => {
                  const mapEl = document.querySelector("[aria-label='ISM Journey Map — click a region to select a stage']");
                  mapEl?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              />
              <div className="flex items-center gap-3">
                <KeyboardHints />
                {branchSource ? (
                  <button
                    type="button"
                    onClick={() => handleStageChange(branchSource.id)}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Back to {branchSource.label}
                  </button>
                ) : null}
              </div>
            </div>

            {/* Stage hero */}
            <div className="animate-fade-in-up">
              <StageHero stageId={stage.id} />
            </div>

            {/* Branch navigation */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 sm:p-6 space-y-4 animate-fade-in-up delay-75">
              {branchSource ? (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Branches From</p>
                  <button
                    type="button"
                    onClick={() => handleStageChange(branchSource.id)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-white/20 hover:bg-white/8 hover:shadow-lg hover:shadow-black/10 group"
                  >
                    <p className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors">
                      {branchSource.label}
                    </p>
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
                  <div className="grid gap-3 sm:grid-cols-2">
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
                            "rounded-xl border p-4 text-left transition-all group",
                            "hover:shadow-lg hover:shadow-black/10 hover:scale-[1.01]",
                            "focus-visible:outline-none focus-visible:ring-2",
                            isMainRoute
                              ? "border-emerald-500/25 bg-emerald-950/20 hover:border-emerald-400/40 focus-visible:ring-emerald-500/50"
                              : "border-rose-500/25 bg-rose-950/20 hover:border-rose-400/40 focus-visible:ring-rose-500/50",
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
                          <p className="text-sm font-semibold text-white mt-3 group-hover:translate-x-0.5 transition-transform">
                            {target.label}
                          </p>
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
                <div className="space-y-4 animate-fade-in-up delay-150">
                  <BackgroundSelector
                    selected={selectedBackground}
                    onChange={handleBackgroundChange}
                  />
                  <BackgroundInfoPanel bgId={selectedBackground} />
                </div>

                {cell ? (
                  <div className="space-y-6 sm:space-y-8">
                    <div className="animate-fade-in-up delay-150">
                      <EmpathyMap data={cell.empathyMap} />
                    </div>
                    <div className="animate-fade-in-up delay-225">
                      <QuotesSection quotes={cell.quotes} />
                    </div>
                    <div className="animate-fade-in-up delay-225">
                      <MinistryPanel cell={cell} />
                    </div>

                    {/* Print button */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-slate-300"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m0 0a48.159 48.159 0 018.5 0m-8.5 0V6.375a2.25 2.25 0 012.25-2.25h3.5a2.25 2.25 0 012.25 2.25V7.034" />
                        </svg>
                        Print One-Pager
                      </button>
                    </div>

                    {/* Related cells */}
                    <div className="animate-fade-in-up delay-300">
                      <RelatedCells
                        currentStage={stage.id}
                        currentBackground={selectedBackground}
                        onSelect={handleSearchSelect}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 border border-white/10 rounded-xl bg-slate-900/40 space-y-3 animate-fade-in">
                    <p className="text-sm font-semibold text-slate-300">Content coming soon</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      We&apos;re building out the {stage.label} &times; {selectedBackground} combination.
                      The Muslim background currently has the most complete content.
                    </p>
                    <button
                      type="button"
                      onClick={() => handleBackgroundChange(DEFAULT_BACKGROUND)}
                      className="inline-flex items-center gap-1.5 text-sm text-indigo-400 transition hover:text-indigo-300"
                    >
                      Explore {stage.label} &times; Muslim &rarr;
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-2xl border border-rose-500/20 bg-slate-900/40 p-5 sm:p-6 space-y-4 animate-fade-in-up delay-75">
                <p className="text-xs uppercase tracking-widest text-rose-400/70">Attrition Off-Ramp</p>
                <p className="text-sm font-medium text-rose-200/90">
                  This is a warning pattern, not the intended next step in the journey.
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {stage.description}
                </p>

                {/* Show attrition content for the selected background */}
                {(() => {
                  const attritionCell = getJourneyCell(stage.id, selectedBackground);
                  if (!attritionCell) return null;

                  return (
                    <div className="space-y-6 pt-4 border-t border-rose-500/10">
                      <BackgroundSelector
                        selected={selectedBackground}
                        onChange={handleBackgroundChange}
                      />
                      <BackgroundInfoPanel bgId={selectedBackground} />
                      <EmpathyMap data={attritionCell.empathyMap} />
                      <QuotesSection quotes={attritionCell.quotes} />
                      <MinistryPanel cell={attritionCell} />

                      {/* Print button for attrition */}
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => window.print()}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-slate-300"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m0 0a48.159 48.159 0 018.5 0m-8.5 0V6.375a2.25 2.25 0 012.25-2.25h3.5a2.25 2.25 0 012.25 2.25V7.034" />
                          </svg>
                          Print One-Pager
                        </button>
                      </div>

                      <RelatedCells
                        currentStage={stage.id}
                        currentBackground={selectedBackground}
                        onSelect={handleSearchSelect}
                      />
                    </div>
                  );
                })()}

                {branchSource ? (
                  <button
                    type="button"
                    onClick={() => handleStageChange(branchSource.id)}
                    className="inline-flex items-center gap-1.5 text-sm text-indigo-400 transition hover:text-indigo-300"
                  >
                    Return to {branchSource.label} &rarr;
                  </button>
                ) : null}
              </div>
            )}

          </section>
        </div>
      </main>
    </>
  );
}
