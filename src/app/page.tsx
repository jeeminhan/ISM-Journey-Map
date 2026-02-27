// src/app/page.tsx
"use client";
import { useState } from "react";
import StageSelector from "@/components/StageSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import StageHero from "@/components/StageHero";
import BackgroundInfoPanel from "@/components/BackgroundInfo";
import EmpathyMap from "@/components/EmpathyMap";
import QuotesSection from "@/components/QuotesSection";
import MinistryPanel from "@/components/MinistryPanel";
import { getJourneyCell } from "@/lib/getJourneyCell";
import { LifecycleStage, WorldviewBackground } from "@/data/types";

export default function Home() {
  const [stage, setStage] = useState<LifecycleStage>("pre-arrival");
  const [background, setBackground] = useState<WorldviewBackground>("muslim");

  const cell = getJourneyCell(stage, background);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      <section className="text-center py-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">
          See the Student. <span className="text-indigo-400">Love the Person.</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Select a lifecycle stage and worldview background to explore how to come
          alongside international students with empathy and strategic clarity.
        </p>
      </section>
      <StageSelector selected={stage} onChange={setStage} />
      <BackgroundSelector selected={background} onChange={setBackground} />
      <BackgroundInfoPanel bgId={background} />
      <StageHero stageId={stage} />
      {cell ? (
        <>
          <EmpathyMap data={cell.empathyMap} />
          <QuotesSection quotes={cell.quotes} />
          <MinistryPanel cell={cell} />
        </>
      ) : (
        <div className="text-slate-500 italic text-sm p-6 border border-white/10 rounded-xl">
          Content for this combination coming soon.
        </div>
      )}
    </main>
  );
}
