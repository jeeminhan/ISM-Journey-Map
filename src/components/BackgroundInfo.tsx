// src/components/BackgroundInfo.tsx
import { backgrounds } from "@/data/backgrounds";
import { WorldviewBackground } from "@/data/types";

export default function BackgroundInfoPanel({ bgId }: { bgId: WorldviewBackground }) {
  const bg = backgrounds.find((b) => b.id === bgId);
  if (!bg) return null;
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4">
      <span className="text-3xl" aria-hidden="true">{bg.icon}</span>
      <div>
        <div className="font-semibold text-white">{bg.label}</div>
        <div className="text-xs text-slate-400 mb-2">
          Primary framework: <span className="text-indigo-400">{bg.worldviewFramework}</span>
        </div>
        <p className="text-sm text-slate-300">{bg.description}</p>
      </div>
    </div>
  );
}
