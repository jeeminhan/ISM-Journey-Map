// src/components/StageMap.tsx
"use client";

import { stages } from "@/data/stages";
import { LifecycleStage, StageColor } from "@/data/types";
import { stageColors } from "@/lib/stageColors";
import clsx from "clsx";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface Props {
  selected?: LifecycleStage;
  onChange?: (stage: LifecycleStage) => void;
}

/* ------------------------------------------------------------------ */
/*  Static data: positions, blob paths, colours, connections, decor   */
/* ------------------------------------------------------------------ */

interface RegionMeta {
  id: LifecycleStage;
  cx: number;
  cy: number;
  blob: string; // SVG path (cubic bezier organic shape)
  fill: string;
  fillSelected: string;
  stroke: string;
  strokeSelected: string;
}

export const REGION_META: Record<LifecycleStage, RegionMeta> = {
  /* ---- main stages (upper archipelago) ---- */
  "pre-arrival": {
    id: "pre-arrival",
    cx: 130,
    cy: 210,
    blob: "M60 195 C68 160,95 145,130 140 C165 135,185 155,195 180 C205 205,200 240,180 258 C160 276,120 278,95 265 C70 252,52 230,60 195Z",
    fill: "rgba(99,102,241,0.15)",
    fillSelected: "rgba(99,102,241,0.38)",
    stroke: "rgba(129,140,248,0.6)",
    strokeSelected: "rgba(129,140,248,0.9)",
  },
  arrival: {
    id: "arrival",
    cx: 320,
    cy: 290,
    blob: "M250 275 C258 240,280 225,320 220 C360 215,388 235,395 265 C402 295,395 330,375 348 C355 366,300 372,275 360 C250 348,242 310,250 275Z",
    fill: "rgba(139,92,246,0.15)",
    fillSelected: "rgba(139,92,246,0.38)",
    stroke: "rgba(167,139,250,0.6)",
    strokeSelected: "rgba(167,139,250,0.9)",
  },
  integration: {
    id: "integration",
    cx: 560,
    cy: 230,
    blob: "M490 215 C498 178,525 162,560 158 C595 154,622 168,632 195 C642 222,638 260,618 278 C598 296,535 298,510 282 C485 266,482 252,490 215Z",
    fill: "rgba(59,130,246,0.15)",
    fillSelected: "rgba(59,130,246,0.38)",
    stroke: "rgba(96,165,250,0.6)",
    strokeSelected: "rgba(96,165,250,0.9)",
  },
  leadership: {
    id: "leadership",
    cx: 790,
    cy: 190,
    blob: "M720 178 C728 142,755 128,790 124 C825 120,855 136,865 162 C875 188,868 225,848 242 C828 259,760 262,738 248 C716 234,712 214,720 178Z",
    fill: "rgba(16,185,129,0.15)",
    fillSelected: "rgba(16,185,129,0.38)",
    stroke: "rgba(52,211,153,0.6)",
    strokeSelected: "rgba(52,211,153,0.9)",
  },
  reentry: {
    id: "reentry",
    cx: 1010,
    cy: 270,
    blob: "M940 258 C948 222,975 205,1010 200 C1045 195,1075 210,1082 238 C1089 266,1082 302,1062 318 C1042 334,978 338,955 322 C932 306,932 294,940 258Z",
    fill: "rgba(245,158,11,0.15)",
    fillSelected: "rgba(245,158,11,0.38)",
    stroke: "rgba(252,211,77,0.6)",
    strokeSelected: "rgba(252,211,77,0.9)",
  },

  /* ---- attrition stages (lower dark lowlands) ---- */
  "invisible-years": {
    id: "invisible-years",
    cx: 200,
    cy: 570,
    blob: "M132 558 C140 525,165 510,200 506 C235 502,262 516,270 542 C278 568,272 600,254 616 C236 632,172 635,150 620 C128 605,124 591,132 558Z",
    fill: "rgba(100,116,139,0.10)",
    fillSelected: "rgba(100,116,139,0.28)",
    stroke: "rgba(148,163,184,0.4)",
    strokeSelected: "rgba(148,163,184,0.7)",
  },
  drift: {
    id: "drift",
    cx: 480,
    cy: 590,
    blob: "M412 578 C420 545,445 530,480 526 C515 522,542 536,550 562 C558 588,552 620,534 636 C516 652,452 655,430 640 C408 625,404 611,412 578Z",
    fill: "rgba(244,63,94,0.10)",
    fillSelected: "rgba(244,63,94,0.28)",
    stroke: "rgba(251,113,133,0.4)",
    strokeSelected: "rgba(251,113,133,0.7)",
  },
  "silent-exit": {
    id: "silent-exit",
    cx: 730,
    cy: 600,
    blob: "M662 588 C670 555,695 540,730 536 C765 532,792 546,800 572 C808 598,802 630,784 646 C766 662,702 665,680 650 C658 635,654 621,662 588Z",
    fill: "rgba(244,63,94,0.10)",
    fillSelected: "rgba(244,63,94,0.28)",
    stroke: "rgba(251,113,133,0.4)",
    strokeSelected: "rgba(251,113,133,0.7)",
  },
  "cultural-reversion": {
    id: "cultural-reversion",
    cx: 970,
    cy: 570,
    blob: "M902 558 C910 525,935 510,970 506 C1005 502,1032 516,1040 542 C1048 568,1042 600,1024 616 C1006 632,942 635,920 620 C898 605,894 591,902 558Z",
    fill: "rgba(244,63,94,0.10)",
    fillSelected: "rgba(244,63,94,0.28)",
    stroke: "rgba(251,113,133,0.4)",
    strokeSelected: "rgba(251,113,133,0.7)",
  },
};

/* Connections (paths between regions) */
interface Connection {
  from: LifecycleStage;
  to: LifecycleStage;
  path: string;
  color: string; // stroke colour
}

const CONNECTIONS: Connection[] = [
  /* main chain – white dashed */
  { from: "pre-arrival", to: "arrival", path: "M195 225 C240 240,260 265,250 275", color: "rgba(255,255,255,0.35)" },
  { from: "arrival", to: "integration", path: "M395 270 C430 250,460 235,490 225", color: "rgba(255,255,255,0.35)" },
  { from: "integration", to: "leadership", path: "M632 210 C660 200,690 192,720 185", color: "rgba(255,255,255,0.35)" },
  { from: "leadership", to: "reentry", path: "M865 210 C895 225,920 245,940 258", color: "rgba(255,255,255,0.35)" },
  /* main → attrition – rose dashed */
  { from: "pre-arrival", to: "invisible-years", path: "M120 260 C130 360,160 460,165 510", color: "rgba(251,113,133,0.30)" },
  { from: "arrival", to: "invisible-years", path: "M280 350 C260 420,235 475,220 510", color: "rgba(251,113,133,0.30)" },
  { from: "integration", to: "drift", path: "M530 290 C520 380,500 460,490 530", color: "rgba(251,113,133,0.30)" },
  { from: "leadership", to: "silent-exit", path: "M770 250 C760 350,745 460,738 540", color: "rgba(251,113,133,0.30)" },
  { from: "reentry", to: "cultural-reversion", path: "M1000 320 C995 400,982 470,975 510", color: "rgba(251,113,133,0.30)" },
  /* attrition ↔ attrition */
  { from: "drift", to: "invisible-years", path: "M412 585 C360 580,310 575,270 568", color: "rgba(148,163,184,0.25)" },
  { from: "silent-exit", to: "cultural-reversion", path: "M800 598 C845 592,880 582,902 572", color: "rgba(148,163,184,0.25)" },
];

/* Colour lookup for mobile dots */
const DOT_COLORS: Record<StageColor, string> = {
  indigo: "#818cf8",
  violet: "#a78bfa",
  blue: "#60a5fa",
  emerald: "#34d399",
  amber: "#fcd34d",
  rose: "#fb7185",
  slate: "#94a3b8",
};

/* ------------------------------------------------------------------ */
/*  Decorative SVG helpers                                            */
/* ------------------------------------------------------------------ */

function Mountains() {
  return (
    <g opacity={0.18} stroke="#a7f3d0" strokeWidth={1.5} fill="none">
      {/* Three peaks near leadership */}
      <polyline points="740,128 755,100 770,128" />
      <polyline points="758,128 775,95 792,128" />
      <polyline points="780,128 798,105 816,128" />
    </g>
  );
}

function Lighthouse() {
  return (
    <g opacity={0.20} stroke="#93c5fd" strokeWidth={1.2} fill="none" transform="translate(625,162)">
      {/* tower */}
      <rect x={-5} y={0} width={10} height={28} rx={1} />
      {/* top */}
      <polygon points="-7,0 7,0 0,-12" />
      {/* light */}
      <circle cx={0} cy={-14} r={3} />
      {/* rays */}
      <line x1={-8} y1={-14} x2={-14} y2={-14} />
      <line x1={8} y1={-14} x2={14} y2={-14} />
      <line x1={0} y1={-22} x2={0} y2={-28} />
    </g>
  );
}

function Birds() {
  return (
    <g opacity={0.16} stroke="#c7d2fe" strokeWidth={1.2} fill="none">
      {/* near pre-arrival */}
      <polyline points="80,155 86,148 92,155" />
      <polyline points="95,148 101,141 107,148" />
      {/* near arrival */}
      <polyline points="350,205 356,198 362,205" />
      <polyline points="368,200 374,193 380,200" />
    </g>
  );
}

function Waves() {
  return (
    <g opacity={0.08} stroke="#94a3b8" strokeWidth={1} fill="none">
      <path d="M30 420 Q60 410,90 420 Q120 430,150 420 Q180 410,210 420" />
      <path d="M300 450 Q330 440,360 450 Q390 460,420 450 Q450 440,480 450" />
      <path d="M550 440 Q580 430,610 440 Q640 450,670 440" />
      <path d="M750 460 Q780 450,810 460 Q840 470,870 460 Q900 450,930 460" />
      <path d="M1050 400 Q1080 390,1110 400 Q1140 410,1170 400" />
    </g>
  );
}

function WitheredTrees() {
  return (
    <g opacity={0.14} stroke="#94a3b8" strokeWidth={1.2} fill="none">
      {/* near invisible-years */}
      <line x1={150} y1={510} x2={150} y2={488} />
      <line x1={150} y1={495} x2={140} y2={485} />
      <line x1={150} y1={498} x2={160} y2={486} />
      {/* near drift */}
      <line x1={440} y1={530} x2={440} y2={508} />
      <line x1={440} y1={515} x2={430} y2={505} />
      <line x1={440} y1={518} x2={450} y2={506} />
      {/* near cultural-reversion */}
      <line x1={1040} y1={510} x2={1040} y2={488} />
      <line x1={1040} y1={495} x2={1030} y2={485} />
      <line x1={1040} y1={498} x2={1050} y2={486} />
    </g>
  );
}

function CompassRose() {
  return (
    <g transform="translate(1140,70)" opacity={0.22} stroke="#cbd5e1" strokeWidth={1} fill="none">
      {/* N-S */}
      <line x1={0} y1={-24} x2={0} y2={24} />
      {/* E-W */}
      <line x1={-24} y1={0} x2={24} y2={0} />
      {/* diagonals */}
      <line x1={-14} y1={-14} x2={14} y2={14} />
      <line x1={14} y1={-14} x2={-14} y2={14} />
      {/* N arrow */}
      <polygon points="0,-24 -5,-16 5,-16" fill="#cbd5e1" fillOpacity={0.3} />
      <text x={0} y={-30} textAnchor="middle" fontSize={10} fill="#cbd5e1" fontFamily="serif">
        N
      </text>
    </g>
  );
}

function Anchor() {
  return (
    <g transform="translate(1060,310)" opacity={0.18} stroke="#fcd34d" strokeWidth={1.2} fill="none">
      {/* ring */}
      <circle cx={0} cy={-14} r={5} />
      {/* shaft */}
      <line x1={0} y1={-9} x2={0} y2={12} />
      {/* arms */}
      <path d="M-10,8 C-10,16 0,12 0,12 C0,12 10,16 10,8" />
      {/* cross */}
      <line x1={-7} y1={-4} x2={7} y2={-4} />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function StageMap({ selected, onChange }: Props) {
  const router = useRouter();

  const handleChange = useCallback(
    (id: LifecycleStage) => {
      if (onChange) {
        onChange(id);
      } else {
        router.push(`/stage/${id}`);
      }
    },
    [onChange, router],
  );

  const handleKey = useCallback(
    (e: React.KeyboardEvent, id: LifecycleStage) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleChange(id);
      }
    },
    [handleChange],
  );

  const stageMap = Object.fromEntries(stages.map((s) => [s.id, s])) as Record<LifecycleStage, (typeof stages)[number]>;

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 md:p-6">
      {/* ============ MOBILE ============ */}
      <div className="md:hidden space-y-4">
        <h3 className="text-lg font-semibold text-white mb-1">Student Journey Map</h3>

        {/* Main Journey */}
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Main Journey</p>
          <div className="space-y-1.5">
            {stages
              .filter((s) => s.stageType === "main")
              .map((stage) => {
                const isSel = selected !== undefined && stage.id === selected;
                const colors = stageColors[stage.color];
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => handleChange(stage.id)}
                    className={clsx(
                      "flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition",
                      isSel
                        ? clsx("ring-2 border-white/40", colors.ring, "bg-white/5")
                        : "border-white/10 hover:border-white/20 bg-slate-900/60",
                    )}
                    aria-pressed={isSel}
                  >
                    <span
                      className="block h-3 w-3 flex-shrink-0 rounded-full"
                      style={{ background: DOT_COLORS[stage.color] }}
                    />
                    <div>
                      <span className={clsx("text-sm font-semibold", isSel ? "text-white" : "text-slate-200")}>
                        {stage.label}
                      </span>
                      <span className="ml-2 text-xs text-slate-400">{stage.subtitle}</span>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Attrition Off-Ramps */}
        <div>
          <p className="text-xs uppercase tracking-widest text-rose-400/70 mb-2">Attrition Off-Ramps</p>
          <div className="space-y-1.5">
            {stages
              .filter((s) => s.stageType === "attrition")
              .map((stage) => {
                const isSel = selected !== undefined && stage.id === selected;
                const colors = stageColors[stage.color];
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => handleChange(stage.id)}
                    className={clsx(
                      "flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition opacity-80",
                      isSel
                        ? clsx("ring-2 border-white/40", colors.ring, "bg-white/5")
                        : "border-white/10 hover:border-white/20 bg-slate-950/60",
                    )}
                    aria-pressed={isSel}
                  >
                    <span
                      className="block h-3 w-3 flex-shrink-0 rounded-full"
                      style={{ background: DOT_COLORS[stage.color] }}
                    />
                    <div>
                      <span className={clsx("text-sm font-semibold", isSel ? "text-white" : "text-slate-300")}>
                        {stage.label}
                      </span>
                      <span className="ml-2 text-xs text-slate-500">{stage.subtitle}</span>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      </div>

      {/* ============ DESKTOP SVG MAP ============ */}
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1200 720"
          className="w-full h-auto"
          role="img"
          aria-label="ISM Journey Map — click a region to select a stage"
        >
          <defs>
            {/* Glow filter for selected region */}
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feComposite in="blur" in2="SourceGraphic" operator="over" />
            </filter>
            <filter id="glowPulse" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" result="blur">
                <animate attributeName="stdDeviation" values="6;12;6" dur="3s" repeatCount="indefinite" />
              </feGaussianBlur>
              <feComposite in="blur" in2="SourceGraphic" operator="over" />
            </filter>
          </defs>

          {/* Ocean background */}
          <rect x={0} y={0} width={1200} height={720} fill="#0c1222" rx={16} />

          {/* Subtle ocean gradient overlay */}
          <rect x={0} y={0} width={1200} height={720} fill="url(#oceanGrad)" rx={16} opacity={0.4} />
          <defs>
            <radialGradient id="oceanGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#1e3a5f" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#0c1222" stopOpacity={0} />
            </radialGradient>
          </defs>

          {/* Decorative ocean waves */}
          <Waves />

          {/* Map title */}
          <text
            x={600}
            y={52}
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize={30}
            fontWeight={700}
            fill="#cbd5e1"
            letterSpacing={4}
            opacity={0.6}
          >
            THE ISM JOURNEY
          </text>
          <text
            x={600}
            y={74}
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize={12}
            fill="#64748b"
            letterSpacing={2}
          >
            A MAP OF THE INTERNATIONAL STUDENT LIFECYCLE
          </text>

          {/* Dividing label */}
          <text
            x={600}
            y={490}
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize={11}
            fill="#94a3b8"
            opacity={0.35}
            letterSpacing={3}
          >
            THE LOWLANDS &mdash; ATTRITION TERRITORY
          </text>

          {/* Decorative elements */}
          <Mountains />
          <Lighthouse />
          <Birds />
          <WitheredTrees />
          <CompassRose />
          <Anchor />

          {/* Connection paths (behind regions) */}
          {CONNECTIONS.map((c, i) => (
            <path
              key={i}
              d={c.path}
              fill="none"
              stroke={c.color}
              strokeWidth={2}
              strokeDasharray="8 6"
              strokeLinecap="round"
            />
          ))}

          {/* Regions */}
          {stages.map((stage) => {
            const meta = REGION_META[stage.id];
            if (!meta) return null;
            const isSel = selected !== undefined && stage.id === selected;

            return (
              <g
                key={stage.id}
                style={{ cursor: "pointer" }}
                onClick={() => handleChange(stage.id)}
                onKeyDown={(e) => handleKey(e, stage.id)}
                role="button"
                tabIndex={0}
                aria-label={`${stage.label} — ${stage.subtitle}`}
                aria-pressed={isSel}
              >
                {/* Glow halo behind selected */}
                {isSel && (
                  <path
                    d={meta.blob}
                    fill={meta.fillSelected}
                    stroke="none"
                    filter="url(#glowPulse)"
                    opacity={0.6}
                  />
                )}

                {/* Region blob */}
                <path
                  d={meta.blob}
                  fill={isSel ? meta.fillSelected : meta.fill}
                  stroke={isSel ? meta.strokeSelected : meta.stroke}
                  strokeWidth={isSel ? 2.5 : 1.5}
                  className="transition-all duration-300"
                >
                  <title>{stage.label}</title>
                </path>

                {/* Hover brightener (invisible rect for pointer area isn't needed — path itself is clickable) */}

                {/* Label */}
                <text
                  x={meta.cx}
                  y={meta.cy - 6}
                  textAnchor="middle"
                  fontFamily="'Inter', system-ui, sans-serif"
                  fontSize={13}
                  fontWeight={700}
                  fill={isSel ? "#ffffff" : "#e2e8f0"}
                  className="pointer-events-none select-none"
                >
                  {stage.label}
                </text>
                <text
                  x={meta.cx}
                  y={meta.cy + 12}
                  textAnchor="middle"
                  fontFamily="'Inter', system-ui, sans-serif"
                  fontSize={10}
                  fill={isSel ? "#cbd5e1" : "#94a3b8"}
                  className="pointer-events-none select-none"
                >
                  {stage.subtitle}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
