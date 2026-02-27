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
      <span aria-hidden="true" className="text-sm text-slate-400 self-center mr-2">Filter by background:</span>
      {backgrounds.map((bg) => (
        <button
          type="button"
          key={bg.id}
          onClick={() => onChange(bg.id)}
          aria-pressed={selected === bg.id}
          className={clsx(
            "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition-all",
            selected === bg.id
              ? "bg-white text-slate-900 border-white font-medium"
              : "border-white/20 text-slate-300 hover:border-white/40"
          )}
        >
          <span aria-hidden="true">{bg.icon}</span>
          <span>{bg.label}</span>
        </button>
      ))}
    </div>
  );
}
