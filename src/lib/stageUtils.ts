import { stages } from "@/data/stages";
import { LifecycleStage } from "@/data/types";

export function isMainStage(id: LifecycleStage): boolean {
  return stages.find((s) => s.id === id)?.stageType === "main";
}
