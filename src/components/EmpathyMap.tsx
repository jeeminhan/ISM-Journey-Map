// src/components/EmpathyMap.tsx
"use client";
import { EmpathyMap as EmpathyMapType } from "@/data/types";

interface Props {
  data: EmpathyMapType;
}

const quadrants = [
  { key: "seeing" as const, label: "👀 What they're seeing", color: "blue" },
  { key: "hearing" as const, label: "👂 What they're hearing", color: "violet" },
  { key: "thinkingFeeling" as const, label: "🧠 What they're thinking & feeling", color: "indigo" },
  { key: "sayingDoing" as const, label: "🗣 What they're saying & doing", color: "emerald" },
];

export default function EmpathyMap({ data }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Empathy Map</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quadrants.map((q) => (
          <div
            key={q.key}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <div className="text-sm font-semibold text-slate-300 mb-3">
              {q.label}
            </div>
            <ul className="space-y-2">
              {data[q.key].map((item, i) => (
                <li key={i} className="text-sm text-slate-400 flex gap-2">
                  <span className="text-slate-600 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
