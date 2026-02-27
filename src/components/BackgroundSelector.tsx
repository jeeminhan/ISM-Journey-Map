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
    <div className="flex flex-wrap gap-2">
      <span className="text-sm text-slate-400 self-center mr-2">Filter by background:</span>
      {backgrounds.map((bg) => (
        <button
          key={bg.id}
          onClick={() => onChange(bg.id)}
          className={clsx(
            "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition-all",
            selected === bg.id
              ? "bg-white text-slate-900 border-white font-medium"
              : "border-white/20 text-slate-300 hover:border-white/40"
          )}
        >
          <span>{bg.icon}</span>
          <span>{bg.label}</span>
        </button>
      ))}
    </div>
  );
}
