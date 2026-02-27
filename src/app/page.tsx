// src/app/page.tsx
"use client";
import { useState } from "react";
import StageSelector from "@/components/StageSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import { LifecycleStage, WorldviewBackground } from "@/data/types";

export default function Home() {
  const [stage, setStage] = useState<LifecycleStage>("pre-arrival");
  const [background, setBackground] = useState<WorldviewBackground>("muslim");

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      <StageSelector selected={stage} onChange={setStage} />
      <BackgroundSelector selected={background} onChange={setBackground} />
      <div className="text-white">Stage: {stage} | Background: {background}</div>
    </main>
  );
}
