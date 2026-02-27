// src/lib/getJourneyCell.ts
import { journeyCells } from "@/data/journeyContent";
import { JourneyCell, LifecycleStage, WorldviewBackground } from "@/data/types";

export function getJourneyCell(
  stage: LifecycleStage,
  background: WorldviewBackground
): JourneyCell | null {
  return (
    journeyCells.find(
      (cell) => cell.stage === stage && cell.background === background
    ) ?? null
  );
}
