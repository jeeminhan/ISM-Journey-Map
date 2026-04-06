"use client";

import clsx from "clsx";
import { stages } from "@/data/stages";
import { backgrounds } from "@/data/backgrounds";
import { LifecycleStage, WorldviewBackground } from "@/data/types";
import { stageColors } from "@/lib/stageColors";

interface Props {
  stage: LifecycleStage;
  background?: WorldviewBackground;
  onStageClick?: () => void;
}

export default function Breadcrumbs({ stage, background, onStageClick }: Props) {
  const stageInfo = stages.find((s) => s.id === stage);
  const bgInfo = background ? backgrounds.find((b) => b.id === background) : null;

  if (!stageInfo) return null;

  const colors = stageColors[stageInfo.color];

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm flex-wrap">
      <span className="text-slate-500">Map</span>
      <span className="text-slate-600" aria-hidden="true">/</span>
      <button
        type="button"
        onClick={onStageClick}
        className={clsx(
          "transition-colors hover:underline underline-offset-2",
          colors.text,
        )}
      >
        {stageInfo.label}
      </button>
      {bgInfo ? (
        <>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span className="text-slate-300">
            {bgInfo.icon} {bgInfo.label}
          </span>
        </>
      ) : null}
    </nav>
  );
}
