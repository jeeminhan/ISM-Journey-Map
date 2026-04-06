// src/components/BackgroundSelector.tsx
"use client";
import { backgrounds } from "@/data/backgrounds";
import { WorldviewBackground } from "@/data/types";
import clsx from "clsx";

interface Props {
  selected: WorldviewBackground;
  onChange: (bg: WorldviewBackground) => void;
}

export default function BackgroundSelector({ selected, onChange }: Props) {
  return (
    <div role="group" aria-label="Filter by background" className="flex flex-wrap gap-2">
      <span aria-hidden="true" className="text-[11px] uppercase tracking-widest text-slate-500 self-center mr-1">
        Background:
      </span>
      {backgrounds.map((bg) => (
        <button
          type="button"
          key={bg.id}
          onClick={() => onChange(bg.id)}
          aria-pressed={selected === bg.id}
          className={clsx(
            "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50",
            selected === bg.id
              ? "bg-white text-slate-900 border-white font-medium shadow-lg shadow-white/10 scale-[1.02]"
              : "border-white/15 text-slate-300 hover:border-white/30 hover:bg-white/5 active:scale-95"
          )}
        >
          <span aria-hidden="true" className="text-base">{bg.icon}</span>
          <span>{bg.label}</span>
        </button>
      ))}
    </div>
  );
}
