"use client";

import { useRouter } from "next/navigation";
import BackgroundSelector from "@/components/BackgroundSelector";
import { LifecycleStage, WorldviewBackground } from "@/data/types";

interface Props {
  stageId: LifecycleStage;
  selected: WorldviewBackground;
}

export default function BackgroundSelectorBar({ stageId, selected }: Props) {
  const router = useRouter();

  return (
    <BackgroundSelector
      selected={selected}
      onChange={(bg) => router.replace(`/stage/${stageId}?bg=${bg}`)}
    />
  );
}
