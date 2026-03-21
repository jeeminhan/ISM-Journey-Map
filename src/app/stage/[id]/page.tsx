// src/app/stage/[id]/page.tsx
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { stages } from "@/data/stages";
import { stageColors } from "@/lib/stageColors";
import clsx from "clsx";
import { getJourneyCell } from "@/lib/getJourneyCell";
import { isMainStage } from "@/lib/stageUtils";
import { REGION_META } from "@/components/StageMap";
import { LifecycleStage, WorldviewBackground } from "@/data/types";
import BackgroundSelectorBar from "@/components/BackgroundSelectorBar";
import BackgroundInfoPanel from "@/components/BackgroundInfo";
import EmpathyMap from "@/components/EmpathyMap";
import QuotesSection from "@/components/QuotesSection";
import MinistryPanel from "@/components/MinistryPanel";

const VALID_BACKGROUNDS: WorldviewBackground[] = ["muslim", "hindu", "buddhist", "secular", "nominal"];

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ bg?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { id } = await params;
  const { bg } = await searchParams;
  const stage = stages.find((s) => s.id === id);
  if (!stage) return {};
  const bgLabel = bg ? ` · ${bg.charAt(0).toUpperCase() + bg.slice(1)}` : "";
  return {
    title: `${stage.label}${bgLabel} — ISM Journey Map`,
    description: stage.description,
  };
}

export default async function StagePage({ params, searchParams }: Props) {
  const { id } = await params;
  const { bg } = await searchParams;

  const stage = stages.find((s) => s.id === id);
  if (!stage) notFound();

  const stageId = stage.id as LifecycleStage;

  if (isMainStage(stageId)) {
    // Canonicalize invalid ?bg= values
    const background = VALID_BACKGROUNDS.includes(bg as WorldviewBackground)
      ? (bg as WorldviewBackground)
      : null;

    if (!background) {
      redirect(`/stage/${stageId}?bg=muslim`);
    }

    const cell = getJourneyCell(stageId, background);
    const meta = REGION_META[stageId];
    const colors = stageColors[stage.color];

    return (
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Back nav */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition text-sm"
        >
          ← Back to Map
        </Link>

        {/* Stage hero with island silhouette */}
        <section className={`rounded-2xl border bg-gradient-to-br ${colors.gradient} to-transparent p-8`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Island blob decorative SVG — hidden on mobile, shown md+ */}
            <div className="hidden md:block flex-shrink-0">
              <svg
                width="100"
                height="100"
                viewBox={`${meta.cx - 80} ${meta.cy - 80} 160 160`}
                aria-hidden="true"
              >
                <path
                  d={meta.blob}
                  fill={meta.fillSelected}
                  stroke={meta.strokeSelected}
                  strokeWidth={2}
                />
              </svg>
            </div>

            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{stage.emotion}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{stage.label}</h1>
              <p className={`${colors.text} font-medium mb-3`}>{stage.subtitle}</p>
              <p className="text-slate-400 text-base leading-relaxed mb-4">{stage.description}</p>
              <span className="inline-flex rounded-full border border-white/20 bg-slate-900/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                {stage.faithMilestone.replace(/-/g, " ")}
              </span>
            </div>
          </div>
        </section>

        {/* Background selector */}
        <section className="space-y-4">
          <BackgroundSelectorBar stageId={stageId} selected={background} />
        </section>

        {/* Content panels */}
        <div className="space-y-8 animate-fade-in">
          <BackgroundInfoPanel bgId={background} />
          {cell ? (
            <>
              <EmpathyMap data={cell.empathyMap} />
              <QuotesSection quotes={cell.quotes} />
              <MinistryPanel cell={cell} />
            </>
          ) : (
            <div className="p-6 border border-white/10 rounded-xl bg-slate-900/40 space-y-3">
              <p className="text-sm font-semibold text-slate-300">Content coming soon</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                We&apos;re building out the {stage.label} &times; {background} combination.
                In the meantime, the Muslim background has the most complete content right now.
              </p>
              <Link
                href={`/stage/${stageId}?bg=muslim`}
                className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition"
              >
                Explore {stage.label} × Muslim →
              </Link>
            </div>
          )}
        </div>
        {/* Stage navigator */}
        <nav aria-label="Explore other stages" className="pt-4 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Explore Other Stages</p>
          <div className="flex flex-wrap gap-2">
            {stages
              .filter((s) => s.stageType === "main")
              .map((s) => {
                const colors = stageColors[s.color];
                const isCurrent = s.id === stageId;
                return (
                  <Link
                    key={s.id}
                    href={`/stage/${s.id}?bg=${background}`}
                    className={clsx(
                      "px-3 py-2 rounded-full text-sm border transition min-h-[44px] flex items-center",
                      isCurrent
                        ? clsx(colors.text, "border-current bg-white/5 font-semibold")
                        : "border-white/20 text-slate-400 hover:border-white/40 hover:text-slate-200",
                    )}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {s.label}
                    {isCurrent && " ✓"}
                  </Link>
                );
              })}
          </div>
        </nav>
      </main>
    );
  }

  // Attrition stage page
  return (
    <main className="max-w-3xl mx-auto px-6 py-8 space-y-8">
      {/* Back nav */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition text-sm"
      >
        ← Back to Map
      </Link>

      <section className="rounded-2xl border border-rose-500/20 bg-slate-900/70 p-8">
        <p className="text-xs uppercase tracking-widest text-rose-400/70 mb-1">Attrition Off-Ramp</p>
        <h1 className="text-3xl font-bold text-white mb-2">{stage.label}</h1>
        <p className="text-rose-300/80 font-medium mb-4">{stage.subtitle}</p>
        <p className="text-slate-400 text-base leading-relaxed">{stage.description}</p>

        {stage.branchesFrom && (
          <p className="mt-6 text-sm text-slate-500">
            Branches from:{" "}
            <Link
              href={`/stage/${stage.branchesFrom}?bg=muslim`}
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
            >
              {stages.find((s) => s.id === stage.branchesFrom)?.label ?? stage.branchesFrom}
            </Link>
          </p>
        )}
      </section>
    </main>
  );
}
