// src/components/BackgroundInfo.tsx
import { backgrounds } from "@/data/backgrounds";
import { WorldviewBackground } from "@/data/types";

export default function BackgroundInfoPanel({ bgId }: { bgId: WorldviewBackground }) {
  const bg = backgrounds.find((b) => b.id === bgId);
  if (!bg) return null;
  return (
    <div className="bg-gradient-to-r from-white/[0.06] to-transparent border border-white/10 rounded-xl p-4 sm:p-5 flex gap-4 transition-colors hover:from-white/[0.08]">
      <span className="text-3xl flex-shrink-0" aria-hidden="true">{bg.icon}</span>
      <div>
        <div className="font-semibold text-white">{bg.label}</div>
        <div className="text-xs text-slate-400 mb-2">
          Primary framework:{" "}
          <span className="bg-indigo-500/20 text-indigo-300 rounded-full px-2 py-0.5 text-[11px] font-medium">
            {bg.worldviewFramework}
          </span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">{bg.description}</p>
      </div>
    </div>
  );
}
