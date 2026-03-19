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
          <div
            key={i}
            className="bg-white/5 border-l-2 border-indigo-500 rounded-r-xl px-4 py-3"
          >
            <p className="text-slate-200 italic text-sm">&quot;{q.text}&quot;</p>
            <p className="text-slate-500 text-xs mt-1">— {q.attribution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
