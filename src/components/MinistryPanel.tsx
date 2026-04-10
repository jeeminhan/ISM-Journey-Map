// src/components/MinistryPanel.tsx
import { JourneyCell } from "@/data/types";

export default function MinistryPanel({ cell }: { cell: JourneyCell }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
      {/* Ministry Guidance */}
      <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 space-y-5 transition-colors hover:bg-white/[0.06]">
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
            Recommended Posture
          </div>
          <div className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
            {cell.ministry.posture}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
            Approaches
          </div>
          <ul className="space-y-2.5">
            {cell.ministry.approaches.map((a, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                <span className="text-emerald-400 flex-shrink-0 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
            Watch Out For
          </div>
          <ul className="space-y-2.5">
            {cell.ministry.pitfalls.map((p, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                <span className="text-red-400 flex-shrink-0 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bridges & Barriers */}
      <div className="space-y-3 sm:space-y-4">
        <div className="bg-gradient-to-br from-emerald-950/50 to-transparent border border-emerald-500/20 rounded-xl p-4 transition-colors hover:from-emerald-950/60">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 mb-3">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            Bridges
          </div>
          <ul className="space-y-2">
            {cell.bridges.map((b, i) => (
              <li key={i} className="text-sm text-slate-300 leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-red-950/50 to-transparent border border-red-500/20 rounded-xl p-4 transition-colors hover:from-red-950/60">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-red-400 mb-3">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            Barriers
          </div>
          <ul className="space-y-2">
            {cell.barriers.map((b, i) => (
              <li key={i} className="text-sm text-slate-300 leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
