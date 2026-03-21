// src/app/page.tsx
"use client";

import StageMap from "@/components/StageMap";

export default function Home() {
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

      <StageMap />
    </main>
  );
}
