// src/components/MinistryPanel.tsx
"use client";
import { JourneyCell } from "@/data/types";

export default function MinistryPanel({ cell }: { cell: JourneyCell }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Ministry Guidance */}
      <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
            Recommended Posture
          </div>
          <div className="text-lg font-semibold text-white">
            {cell.ministry.posture}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
            Approaches
          </div>
          <ul className="space-y-2">
            {cell.ministry.approaches.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 flex-shrink-0">✓</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
            Watch Out For
          </div>
          <ul className="space-y-2">
            {cell.ministry.pitfalls.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300">
                <span className="text-red-400 flex-shrink-0">✗</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bridges & Barriers */}
      <div className="space-y-4">
        <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-4">
          <div className="text-xs uppercase tracking-wider text-emerald-400 mb-2">
            Bridges
          </div>
          <ul className="space-y-1">
            {cell.bridges.map((b, i) => (
              <li key={i} className="text-sm text-slate-300">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-950/40 border border-red-500/20 rounded-xl p-4">
          <div className="text-xs uppercase tracking-wider text-red-400 mb-2">
            Barriers
          </div>
          <ul className="space-y-1">
            {cell.barriers.map((b, i) => (
              <li key={i} className="text-sm text-slate-300">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
