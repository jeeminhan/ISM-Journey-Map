import HomeJourneyExplorer from "@/components/HomeJourneyExplorer";

interface Props {
  searchParams: Promise<{ bg?: string; stage?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { bg, stage } = await searchParams;

  return <HomeJourneyExplorer backgroundParam={bg} stageParam={stage} />;
}
