"use client";

import Link from "next/link";
import { useState } from "react";
import { postures, stages, stageColors, nodes } from "./data";

const postureYPositions = {
  christian: 100,
  seeking: 220,
  open: 340,
  unaware: 460,
  resistant: 570,
};

const stageX = [210, 450, 690, 930];

function channelPath(y: number): string {
  return `M80,${y} C180,${y} 280,${y - 5} 360,${y} C440,${y + 5} 540,${y - 5} 620,${y} C700,${y + 5} 800,${y - 5} 860,${y} C920,${y + 5} 1000,${y} 1060,${y}`;
}

export default function JourneyPage() {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    title: string;
    desc: string;
    toward: string;
    away: string;
  } | null>(null);

  return (
    <main className="px-6 py-10 md:px-10 max-w-[1200px] mx-auto">
      <h1 className="text-center text-2xl md:text-3xl font-bold tracking-wide mb-1">
        The International Student Journey
      </h1>
      <p className="text-center text-slate-500 text-xs tracking-[0.15em] mb-8 uppercase">
        How every international student moves through life abroad &mdash; and
        where faith enters the picture
      </p>

      {/* Intro */}
      <div className="grid md:grid-cols-[1fr_auto] gap-8 mb-10">
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7">
          <h2 className="text-base font-semibold text-slate-100 mb-3">
            How to read this map
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-2">
            Every international student flows through the same lifecycle:{" "}
            <strong className="text-slate-200">Pre-Arrival</strong> &rarr;{" "}
            <strong className="text-slate-200">Arrival</strong> &rarr;{" "}
            <strong className="text-slate-200">Integration</strong> &rarr;{" "}
            <strong className="text-slate-200">Re-Entry</strong>. That&rsquo;s
            the horizontal current &mdash; it&rsquo;s universal, regardless of
            faith.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed mb-2">
            The five channels represent{" "}
            <strong className="text-slate-200">spiritual posture</strong>{" "}
            &mdash; where a student stands in relation to Christianity. Students
            can move between channels at any stage.{" "}
            <span className="text-emerald-400">Green connections</span> show
            what draws someone closer to Christ.{" "}
            <span className="text-rose-400">Red connections</span> show what
            pushes them away.
          </p>
          <p className="text-xs text-slate-600 border-t border-white/5 pt-3 mt-3">
            Click any node to explore the full detail grid &darr;
          </p>
        </div>

        <div className="flex md:flex-col gap-4">
          {[
            { num: "4", label: "Lifecycle stages", sub: "every student experiences" },
            { num: "5", label: "Spiritual postures", sub: "from resistant to Christian" },
            { num: "\u2194", label: "Bidirectional", sub: "movement at every stage" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3.5 bg-white/[0.02] border border-white/5 rounded-xl px-5 py-3.5 min-w-[180px]"
            >
              <span className="text-2xl font-bold text-slate-200 min-w-[36px] text-center">
                {s.num}
              </span>
              <span className="text-xs font-semibold text-slate-400 leading-snug">
                {s.label}
                <br />
                <span className="font-normal text-slate-600 text-[11px]">
                  {s.sub}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* River SVG */}
      <div className="relative">
        {tooltip && (
          <div
            className="absolute z-10 bg-slate-900/95 border border-white/10 rounded-xl px-4 py-3.5 max-w-[260px] text-xs leading-relaxed text-slate-300 pointer-events-none shadow-xl"
            style={{ left: tooltip.x + 20, top: tooltip.y - 10 }}
          >
            <strong className="text-slate-100 text-sm block mb-1">
              {tooltip.title}
            </strong>
            {tooltip.desc}
            {tooltip.toward && (
              <div className="text-emerald-300 mt-1.5 text-[11px]">
                &darr; {tooltip.toward}
              </div>
            )}
            {tooltip.away && (
              <div className="text-rose-300 mt-1 text-[11px]">
                &uarr; {tooltip.away}
              </div>
            )}
            <div className="mt-2 text-[10px] text-indigo-400">
              Click to see full detail &rarr;
            </div>
          </div>
        )}

        <svg viewBox="0 0 1100 650" className="w-full h-auto">
          {/* Stage zone backgrounds */}
          {[
            { x: 100, fill: "99,102,241", stroke: "99,102,241" },
            { x: 340, fill: "139,92,246", stroke: "139,92,246" },
            { x: 580, fill: "59,130,246", stroke: "59,130,246" },
            { x: 820, fill: "245,158,11", stroke: "245,158,11" },
          ].map((z, i) => (
            <rect
              key={i}
              x={z.x}
              y={30}
              width={220}
              height={590}
              rx={8}
              fill={`rgba(${z.fill},0.03)`}
              stroke={`rgba(${z.stroke},0.08)`}
              strokeWidth={1}
            />
          ))}

          {/* Stage labels */}
          {stages.map((s, i) => (
            <text
              key={s}
              x={stageX[i]}
              y={55}
              fill={stageColors[i]}
              fontSize={13}
              fontWeight={600}
              textAnchor="middle"
            >
              {s}
            </text>
          ))}

          {/* River channels */}
          {postures.map((p) => {
            const y =
              postureYPositions[p.id as keyof typeof postureYPositions];
            const d = channelPath(y);
            return (
              <g key={p.id}>
                <path
                  d={d}
                  stroke={p.color}
                  strokeWidth={22}
                  fill="none"
                  opacity={p.id === "christian" ? 0.15 : 0.1}
                  strokeLinecap="round"
                />
                <path
                  d={d}
                  stroke={p.color}
                  strokeWidth={2}
                  fill="none"
                  opacity={0.5}
                  strokeLinecap="round"
                />
                <text
                  x={50}
                  y={y + 4}
                  fill={p.color}
                  fontSize={10}
                  fontWeight={600}
                  textAnchor="end"
                >
                  {p.label}
                </text>
              </g>
            );
          })}

          {/* Vertical connections at each stage */}
          {stageX.map((x, i) => {
            const pairs = [
              [570, 475],
              [445, 355],
              [325, 235],
              [205, 115],
            ];
            return pairs.map(([from, to], j) => (
              <g key={`${i}-${j}`}>
                <line
                  x1={x - 10}
                  y1={from}
                  x2={x - 10}
                  y2={to}
                  stroke="#34d399"
                  strokeWidth={2}
                  strokeDasharray="4,3"
                  opacity={j === 3 ? 0.5 : 0.4}
                />
                <line
                  x1={x + 10}
                  y1={to}
                  x2={x + 10}
                  y2={from}
                  stroke="#fb7185"
                  strokeWidth={2}
                  strokeDasharray="4,3"
                  opacity={0.3}
                />
              </g>
            ));
          })}

          {/* Nodes */}
          {postures.map((p) => {
            const y =
              postureYPositions[p.id as keyof typeof postureYPositions];
            const postureNodes = nodes[p.id];
            return postureNodes.map((n, i) => (
              <g
                key={`${p.id}-${i}`}
                className="cursor-pointer"
                onMouseEnter={(e) => {
                  const svgRect = e.currentTarget
                    .closest("svg")!
                    .getBoundingClientRect();
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltip({
                    x: rect.left - svgRect.left,
                    y: rect.top - svgRect.top,
                    title: n.title,
                    desc: n.desc,
                    toward: n.toward,
                    away: n.away,
                  });
                }}
                onMouseLeave={() => setTooltip(null)}
                onClick={() => {
                  window.location.href = "/journey/detail";
                }}
              >
                <circle
                  cx={stageX[i]}
                  cy={y}
                  r={12}
                  fill={`rgba(${p.colorRgb},0.25)`}
                  stroke={p.color}
                  strokeWidth={1.5}
                />
                <circle cx={stageX[i]} cy={y} r={4} fill={p.color} />
              </g>
            ));
          })}

          {/* Flow label */}
          <text
            x={550}
            y={635}
            fill="#475569"
            fontSize={10}
            textAnchor="middle"
            letterSpacing={3}
          >
            LIFECYCLE FLOW &rarr;
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex gap-6 justify-center mt-6 flex-wrap text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="text-emerald-400 text-base">|</span> Upstream
          (toward Christ)
        </span>
        <span className="flex items-center gap-2">
          <span className="text-rose-400 text-base">|</span> Downstream
          (pushed away)
        </span>
        <span>Hover nodes for details</span>
      </div>

      {/* Link to detail grid */}
      <div className="text-center mt-7">
        <Link
          href="/journey/detail"
          className="inline-flex items-center gap-2.5 bg-indigo-500/[0.08] border border-indigo-400/20 rounded-xl px-7 py-3.5 text-indigo-400 text-sm font-semibold no-underline transition-all hover:bg-indigo-500/[0.15] hover:border-indigo-400/40 hover:-translate-y-0.5"
        >
          Explore the full detail grid{" "}
          <span className="text-lg">&rarr;</span>
        </Link>
        <p className="text-xs text-slate-600 mt-2">
          See every posture &times; stage combination with specific triggers
          that move students toward or away from Christ
        </p>
      </div>
    </main>
  );
}
