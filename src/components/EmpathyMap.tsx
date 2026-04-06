// src/components/EmpathyMap.tsx
import { EmpathyMap as EmpathyMapType } from "@/data/types";

interface Props {
  data: EmpathyMapType;
}

const quadrants = [
  {
    key: "seeing" as const,
    label: "What they're seeing",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: "text-sky-400",
    border: "border-sky-500/15",
    bg: "bg-sky-950/20",
  },
  {
    key: "hearing" as const,
    label: "What they're hearing",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    accent: "text-violet-400",
    border: "border-violet-500/15",
    bg: "bg-violet-950/20",
  },
  {
    key: "thinkingFeeling" as const,
    label: "What they're thinking & feeling",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    accent: "text-amber-400",
    border: "border-amber-500/15",
    bg: "bg-amber-950/20",
  },
  {
    key: "sayingDoing" as const,
    label: "What they're saying & doing",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    accent: "text-emerald-400",
    border: "border-emerald-500/15",
    bg: "bg-emerald-950/20",
  },
];

export default function EmpathyMap({ data }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Empathy Map</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {quadrants.map((q) => (
          <div
            key={q.key}
            className={`${q.bg} border ${q.border} rounded-xl p-4 transition-colors hover:bg-opacity-30`}
          >
            <div className={`flex items-center gap-2 text-sm font-semibold mb-3 ${q.accent}`}>
              {q.icon}
              {q.label}
            </div>
            <ul className="space-y-2">
              {data[q.key].map((item, i) => (
                <li key={i} className="text-sm text-slate-300 flex gap-2 leading-relaxed">
                  <span className="text-slate-600 flex-shrink-0 mt-1">&mdash;</span>
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
