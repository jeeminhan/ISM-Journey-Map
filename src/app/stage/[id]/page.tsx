import { notFound, redirect } from "next/navigation";
import { stages } from "@/data/stages";
import { LifecycleStage, WorldviewBackground } from "@/data/types";

const VALID_BACKGROUNDS: WorldviewBackground[] = ["muslim", "hindu", "buddhist", "secular", "nominal"];

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ bg?: string }>;
}

export default async function StagePage({ params, searchParams }: Props) {
  const { id } = await params;
  const { bg } = await searchParams;

  const stage = stages.find((s) => s.id === id);
  if (!stage) notFound();

  const stageId = stage.id as LifecycleStage;

  if (stage.stageType === "main") {
    const background = VALID_BACKGROUNDS.includes(bg as WorldviewBackground)
      ? (bg as WorldviewBackground)
      : "muslim";

    redirect(`/?stage=${stageId}&bg=${background}`);
  }

  redirect(`/?stage=${stageId}`);
}
