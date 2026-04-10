"use client";

import Link from "next/link";
import {
  postures,
  stages,
  stageSubtitles,
  nodes,
  transitions,
} from "../data";

const postureIcons: Record<string, string> = {
  resistant: "\u2717",
  unaware: "\u25CB",
  open: "\u25D1",
  seeking: "\u25C8",
  christian: "\u25CF",
};

export default function DetailPage() {
  return (
    <main className="px-6 py-10 md:px-10 max-w-[1080px] mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <Link
          href="/journey"
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors no-underline"
        >
          &larr; Back to river map
        </Link>
      </div>

      <h1 className="text-center text-2xl md:text-3xl font-bold tracking-wide mb-1">
        ISM Journey Map
      </h1>
      <p className="text-center text-slate-500 text-xs tracking-[0.15em] mb-4 uppercase">
        Every international student&rsquo;s lifecycle &times; spiritual posture
      </p>

      {/* Key insight */}
      <div className="max-w-[760px] mx-auto mb-10 text-center px-6 py-4 rounded-xl bg-emerald-400/[0.06] border border-emerald-400/20">
        <p className="text-sm text-emerald-300 leading-relaxed">
          Every student moves left to right{" "}
          <span className="text-emerald-400">&rarr;</span> through the same
          lifecycle. Spiritual movement is vertical and{" "}
          <strong>bidirectional</strong>. The same universal triggers{" "}
          <span className="text-emerald-400">draw toward Christ &darr;</span> or{" "}
          <span className="text-rose-400">push away &uarr;</span> at every stage
          &mdash; but they look different depending on where the student is in
          their journey.
        </p>
      </div>

      {/* Zone marker */}
      <div className="grid grid-cols-[180px_repeat(4,1fr)] mb-0">
        <div />
        <div className="col-span-4 text-center text-[9px] uppercase tracking-[2px] text-slate-500 border-b border-slate-700/30 pb-1 rounded-t-lg bg-slate-500/[0.03]">
          Every international student&rsquo;s journey
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-[180px_repeat(4,1fr)] rounded-2xl overflow-hidden border border-white/[0.06]">
        {/* Header row */}
        <div className="p-4 text-center bg-slate-900/80 border-b border-white/[0.04] relative">
          <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[1.5px] text-slate-600">
            Spiritual
            <br />
            posture &darr;
          </span>
          <span className="absolute bottom-2 right-3 text-[9px] uppercase tracking-[1.5px] text-slate-600">
            Lifecycle &rarr;
          </span>
        </div>
        {stages.map((s, i) => (
          <div
            key={s}
            className="p-4 text-center font-semibold text-[13px] bg-slate-900/80 border-b border-white/[0.04]"
          >
            {s}
            <span className="block font-normal text-[10px] text-slate-600 mt-1 uppercase tracking-[0.5px]">
              {stageSubtitles[s]}
            </span>
          </div>
        ))}

        {/* Posture rows with transition zones between them */}
        {postures
          .slice()
          .reverse()
          .map((p, pIdx) => {
            const postureNodes = nodes[p.id];
            const transition = transitions.find((t) => t.from === p.id);
            const sectionBarColors: Record<string, string> = {
              resistant: "from-red-500 to-red-500/15",
              unaware: "from-orange-500 to-orange-500/15",
              open: "from-yellow-500 to-yellow-500/15",
              seeking: "from-blue-500 to-blue-500/15",
              christian: "from-emerald-500 to-emerald-500/15",
            };

            return (
              <div key={p.id} className="contents">
                {/* Section bar */}
                <div
                  className={`col-span-5 h-[3px] bg-gradient-to-r ${sectionBarColors[p.id]}`}
                />

                {/* Row label */}
                <div
                  className="p-3 flex flex-col justify-center text-xs font-semibold leading-snug bg-slate-900/70 border-b border-white/[0.04]"
                  style={{ borderLeft: `3px solid ${p.color}` }}
                >
                  <span className="text-[15px] mb-0.5">
                    {postureIcons[p.id]}
                  </span>
                  <span style={{ color: p.color }}>{p.label}</span>
                  <span className="font-normal text-[9.5px] text-slate-600 mt-0.5 leading-snug">
                    {p.id === "resistant" && "Hostile to Christianity"}
                    {p.id === "unaware" && "No exposure to Christianity"}
                    {p.id === "open" && "Curious, willing to explore"}
                    {p.id === "seeking" && "Actively investigating"}
                    {p.id === "christian" && "Arrives with existing faith"}
                  </span>
                </div>

                {/* Content cells */}
                {postureNodes.map((n, i) => (
                  <div
                    key={i}
                    className={`p-2.5 text-[10px] leading-relaxed border-b border-white/[0.04] border-r border-r-white/[0.02] transition-all cursor-pointer hover:bg-slate-800/50 ${
                      p.id === "resistant"
                        ? "bg-red-500/[0.04] hover:bg-red-500/10"
                        : "bg-slate-900/40"
                    }`}
                  >
                    <strong
                      className={`text-[10.5px] block mb-0.5 ${
                        p.id === "resistant"
                          ? "text-red-300"
                          : "text-slate-200"
                      }`}
                    >
                      {n.title}
                    </strong>
                    <span className="text-slate-500">{n.desc}</span>
                  </div>
                ))}

                {/* Transition zone (except after last posture) */}
                {transition && (
                  <>
                    {/* Transition header */}
                    <div
                      className="col-span-5 flex items-center gap-2 px-3.5 py-2 bg-slate-900/60 border-b border-white/[0.03]"
                      style={{
                        borderLeft: `3px solid rgba(${p.colorRgb},0.3)`,
                      }}
                    >
                      <div className="flex flex-col items-center text-[11px] leading-none">
                        <span className="text-rose-400/50">&uarr;</span>
                        <span className="text-emerald-400/50">&darr;</span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-[1px]">
                        {p.label} &harr;{" "}
                        {postures.find((pp) => pp.id === transition.to)?.label}
                      </span>
                    </div>

                    {/* Away row (red) */}
                    <div className="flex items-center gap-1.5 px-3.5 py-1 bg-slate-900/45 border-b border-white/[0.03]">
                      <span className="text-[10px] text-rose-400/60">
                        &uarr;
                      </span>
                      <span className="text-[8.5px] font-semibold text-rose-300/70">
                        {transition.awayLabel}
                      </span>
                    </div>
                    {transition.away.map((text, i) => (
                      <div
                        key={`away-${i}`}
                        className="px-2.5 py-1 text-[8.5px] leading-snug text-rose-300/75 bg-rose-400/[0.03] border-b border-white/[0.03] border-r border-r-white/[0.02]"
                      >
                        {text}
                      </div>
                    ))}

                    {/* Toward row (green) */}
                    <div className="flex items-center gap-1.5 px-3.5 py-1 bg-slate-900/45 border-b border-white/[0.03]">
                      <span className="text-[10px] text-emerald-400/60">
                        &darr;
                      </span>
                      <span className="text-[8.5px] font-semibold text-emerald-300/70">
                        {transition.towardLabel}
                      </span>
                    </div>
                    {transition.toward.map((text, i) => (
                      <div
                        key={`toward-${i}`}
                        className="px-2.5 py-1 text-[8.5px] leading-snug text-emerald-300/75 bg-emerald-400/[0.03] border-b border-white/[0.03] border-r border-r-white/[0.02]"
                      >
                        {text}
                      </div>
                    ))}
                  </>
                )}
              </div>
            );
          })}
      </div>

      {/* Callouts */}
      <div className="grid md:grid-cols-3 gap-4 mt-6 max-w-[1080px] mx-auto">
        <div className="rounded-xl p-5 text-xs leading-relaxed text-slate-500 bg-slate-500/[0.05] border border-slate-500/10">
          <h3 className="text-xs font-semibold text-slate-300 mb-1.5">
            The Lifecycle &rarr;
          </h3>
          Every student moves through Pre-Arrival, Arrival, Integration, and
          Re-Entry. These are universal transitions that happen regardless of
          faith.
        </div>
        <div className="rounded-xl p-5 text-xs leading-relaxed text-slate-500 bg-emerald-400/[0.05] border border-emerald-400/10">
          <h3 className="text-xs font-semibold text-slate-300 mb-1.5">
            What Draws Toward Christ &darr;
          </h3>
          Genuine hospitality, patient friendship, authentic community, and real
          answers to real questions. No agenda, no pressure, no bait-and-switch.
        </div>
        <div className="rounded-xl p-5 text-xs leading-relaxed text-slate-500 bg-rose-400/[0.05] border border-rose-400/10">
          <h3 className="text-xs font-semibold text-slate-300 mb-1.5">
            What Pushes Away &uarr;
          </h3>
          Aggressive evangelism, conditional friendship, cultural insensitivity,
          pressure before readiness, and feeling like a project rather than a
          person.
        </div>
      </div>
    </main>
  );
}
