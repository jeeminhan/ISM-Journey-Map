"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import clsx from "clsx";
import { journeyCells } from "@/data/journeyContent";
import { stages } from "@/data/stages";
import { backgrounds } from "@/data/backgrounds";
import { LifecycleStage, WorldviewBackground, JourneyCell } from "@/data/types";
import { stageColors } from "@/lib/stageColors";

interface SearchResult {
  cell: JourneyCell;
  stageName: string;
  bgName: string;
  matchContext: string;
  matchField: string;
}

function searchCells(query: string): SearchResult[] {
  if (!query || query.length < 2) return [];

  const lower = query.toLowerCase();
  const results: SearchResult[] = [];

  for (const cell of journeyCells) {
    const stageInfo = stages.find((s) => s.id === cell.stage);
    const bgInfo = backgrounds.find((b) => b.id === cell.background);
    if (!stageInfo || !bgInfo) continue;

    const matches: { context: string; field: string }[] = [];

    // Search empathy map
    const empathyFields = [
      { items: cell.empathyMap.seeing, field: "Seeing" },
      { items: cell.empathyMap.hearing, field: "Hearing" },
      { items: cell.empathyMap.thinkingFeeling, field: "Thinking & Feeling" },
      { items: cell.empathyMap.sayingDoing, field: "Saying & Doing" },
    ];
    for (const { items, field } of empathyFields) {
      for (const item of items) {
        if (item.toLowerCase().includes(lower)) {
          matches.push({ context: item, field: `Empathy: ${field}` });
        }
      }
    }

    // Search quotes
    for (const quote of cell.quotes) {
      if (quote.text.toLowerCase().includes(lower)) {
        matches.push({ context: `"${quote.text}"`, field: "Quote" });
      }
    }

    // Search ministry guidance
    if (cell.ministry.posture.toLowerCase().includes(lower)) {
      matches.push({ context: cell.ministry.posture, field: "Posture" });
    }
    for (const approach of cell.ministry.approaches) {
      if (approach.toLowerCase().includes(lower)) {
        matches.push({ context: approach, field: "Approach" });
      }
    }
    for (const pitfall of cell.ministry.pitfalls) {
      if (pitfall.toLowerCase().includes(lower)) {
        matches.push({ context: pitfall, field: "Pitfall" });
      }
    }

    // Search bridges and barriers
    for (const bridge of cell.bridges) {
      if (bridge.toLowerCase().includes(lower)) {
        matches.push({ context: bridge, field: "Bridge" });
      }
    }
    for (const barrier of cell.barriers) {
      if (barrier.toLowerCase().includes(lower)) {
        matches.push({ context: barrier, field: "Barrier" });
      }
    }

    if (matches.length > 0) {
      results.push({
        cell,
        stageName: stageInfo.label,
        bgName: bgInfo.label,
        matchContext: matches[0].context,
        matchField: matches[0].field,
      });
    }
  }

  return results.slice(0, 20);
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query || query.length < 2) return text;

  const lower = text.toLowerCase();
  const idx = lower.indexOf(query.toLowerCase());
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);

  return (
    <>
      {before}
      <mark className="bg-indigo-500/30 text-indigo-200 rounded px-0.5">{match}</mark>
      {after}
    </>
  );
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (stage: LifecycleStage, background: WorldviewBackground) => void;
}

export default function SearchOverlay({ isOpen, onClose, onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [stageFilter, setStageFilter] = useState<LifecycleStage | "all">("all");
  const [bgFilter, setBgFilter] = useState<WorldviewBackground | "all">("all");
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setStageFilter("all");
      setBgFilter("all");
      setSelectedIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  let results = searchCells(query);

  // Apply filters
  if (stageFilter !== "all") {
    results = results.filter((r) => r.cell.stage === stageFilter);
  }
  if (bgFilter !== "all") {
    results = results.filter((r) => r.cell.background === bgFilter);
  }

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        const r = results[selectedIndex];
        onSelect(r.cell.stage, r.cell.background);
        onClose();
      }
    },
    [results, selectedIndex, onSelect, onClose],
  );

  if (!isOpen) return null;

  const mainStages = stages.filter((s) => s.stageType === "main");
  const attritionStages = stages.filter((s) => s.stageType === "attrition");

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <svg className="h-5 w-5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search across all cells... (quotes, approaches, bridges, barriers)"
            className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm outline-none"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <kbd className="hidden sm:inline-flex items-center rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Filter pills */}
        <div className="border-b border-white/10 px-5 py-3 flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 self-center mr-1">Stage:</span>
          <button
            type="button"
            onClick={() => setStageFilter("all")}
            className={clsx(
              "rounded-full px-2.5 py-1 text-[11px] border transition-all",
              stageFilter === "all"
                ? "bg-white/10 text-white border-white/20"
                : "border-white/5 text-slate-500 hover:text-slate-300",
            )}
          >
            All
          </button>
          {mainStages.map((s) => {
            const colors = stageColors[s.color];
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setStageFilter(s.id)}
                className={clsx(
                  "rounded-full px-2.5 py-1 text-[11px] border transition-all",
                  stageFilter === s.id
                    ? `${colors.bg} text-white ${colors.border}`
                    : `border-white/5 text-slate-500 hover:text-slate-300`,
                )}
              >
                {s.label}
              </button>
            );
          })}
          <span className="text-[10px] text-slate-600 self-center">|</span>
          {attritionStages.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStageFilter(s.id)}
              className={clsx(
                "rounded-full px-2.5 py-1 text-[11px] border transition-all",
                stageFilter === s.id
                  ? "bg-rose-700 text-white border-rose-500"
                  : "border-white/5 text-slate-500 hover:text-slate-300",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="border-b border-white/10 px-5 py-2.5 flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 self-center mr-1">Background:</span>
          <button
            type="button"
            onClick={() => setBgFilter("all")}
            className={clsx(
              "rounded-full px-2.5 py-1 text-[11px] border transition-all",
              bgFilter === "all"
                ? "bg-white/10 text-white border-white/20"
                : "border-white/5 text-slate-500 hover:text-slate-300",
            )}
          >
            All
          </button>
          {backgrounds.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setBgFilter(b.id)}
              className={clsx(
                "rounded-full px-2.5 py-1 text-[11px] border transition-all",
                bgFilter === b.id
                  ? "bg-white/10 text-white border-white/20"
                  : "border-white/5 text-slate-500 hover:text-slate-300",
              )}
            >
              {b.icon} {b.label}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto">
          {query.length < 2 ? (
            <div className="px-5 py-8 text-center text-sm text-slate-500">
              Type at least 2 characters to search across all {journeyCells.length} cells
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-slate-500">
              No results for &quot;{query}&quot;
            </div>
          ) : (
            <ul role="listbox">
              {results.map((r, i) => {
                const stageInfo = stages.find((s) => s.id === r.cell.stage);
                const colors = stageInfo ? stageColors[stageInfo.color] : stageColors.indigo;

                return (
                  <li
                    key={`${r.cell.stage}-${r.cell.background}-${i}`}
                    role="option"
                    aria-selected={i === selectedIndex}
                    className={clsx(
                      "px-5 py-3 cursor-pointer border-b border-white/5 transition-colors",
                      i === selectedIndex ? "bg-white/5" : "hover:bg-white/[0.03]",
                    )}
                    onClick={() => {
                      onSelect(r.cell.stage, r.cell.background);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(i)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={clsx("text-[10px] font-semibold uppercase tracking-wider", colors.text)}>
                        {r.stageName}
                      </span>
                      <span className="text-slate-600">/</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400">
                        {r.bgName}
                      </span>
                      <span className="ml-auto text-[10px] text-slate-600 bg-white/5 rounded-full px-2 py-0.5">
                        {r.matchField}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {highlightMatch(r.matchContext, query)}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
