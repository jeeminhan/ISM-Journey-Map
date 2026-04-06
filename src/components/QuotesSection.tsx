// src/components/QuotesSection.tsx
import { Quote } from "@/data/types";

export default function QuotesSection({ quotes }: { quotes: Quote[] }) {
  if (!quotes.length) return null;
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">
        Voices from the Journey
      </h3>
      <div className="space-y-3">
        {quotes.map((q, i) => (
          <blockquote
            key={i}
            className="relative bg-gradient-to-r from-indigo-950/40 to-transparent border-l-2 border-indigo-400 rounded-r-xl px-5 py-4 transition-colors hover:from-indigo-950/50"
          >
            <svg
              className="absolute top-3 right-4 h-8 w-8 text-indigo-500/10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
            <p className="text-slate-200 italic text-sm leading-relaxed relative">
              &ldquo;{q.text}&rdquo;
            </p>
            <p className="text-slate-500 text-xs mt-2">&mdash; {q.attribution}</p>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
