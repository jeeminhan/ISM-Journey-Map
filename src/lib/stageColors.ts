import { StageColor } from "@/data/types";

export const stageColors: Record<
  StageColor,
  { text: string; ring: string; bg: string; border: string; gradient: string }
> = {
  indigo: {
    text: "text-indigo-300",
    ring: "ring-indigo-400",
    bg: "bg-indigo-500",
    border: "border-indigo-500",
    gradient: "from-indigo-900/40 border-indigo-500/30",
  },
  violet: {
    text: "text-violet-300",
    ring: "ring-violet-400",
    bg: "bg-violet-500",
    border: "border-violet-500",
    gradient: "from-violet-900/40 border-violet-500/30",
  },
  blue: {
    text: "text-blue-300",
    ring: "ring-blue-400",
    bg: "bg-blue-500",
    border: "border-blue-500",
    gradient: "from-blue-900/40 border-blue-500/30",
  },
  emerald: {
    text: "text-emerald-300",
    ring: "ring-emerald-400",
    bg: "bg-emerald-500",
    border: "border-emerald-500",
    gradient: "from-emerald-900/40 border-emerald-500/30",
  },
  amber: {
    text: "text-amber-300",
    ring: "ring-amber-400",
    bg: "bg-amber-500",
    border: "border-amber-500",
    gradient: "from-amber-900/40 border-amber-500/30",
  },
  rose: {
    text: "text-rose-300",
    ring: "ring-rose-400",
    bg: "bg-rose-700",
    border: "border-rose-500",
    gradient: "from-rose-900/40 border-rose-700/30",
  },
  slate: {
    text: "text-slate-400",
    ring: "ring-slate-500",
    bg: "bg-slate-600",
    border: "border-slate-500",
    gradient: "from-slate-900/40 border-slate-600/30",
  },
};
