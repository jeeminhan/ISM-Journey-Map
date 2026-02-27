import { StageInfo } from "./types";

export const stages: StageInfo[] = [
  {
    id: "pre-arrival",
    label: "Pre-Arrival",
    subtitle: "The Hidden Window",
    emotion: "Anticipation & Fear",
    description:
      "Before a student ever steps foot on campus, they are forming expectations, fears, and hopes. Ministry can begin here through digital touchpoints that build trust before the first handshake.",
    color: "indigo",
  },
  {
    id: "arrival",
    label: "Arrival & Orientation",
    subtitle: "The Vulnerable Phase",
    emotion: "Overwhelmed & Lonely",
    description:
      "The first 2–4 weeks are the most significant. Students face culture shock, logistical confusion, and acute social isolation. Early relational support here is the strongest predictor of long-term connection.",
    color: "violet",
  },
  {
    id: "integration",
    label: "Integration",
    subtitle: "The Formation Phase",
    emotion: "Curious & Conflicted",
    description:
      "Students begin building rhythms of life, exploring faith questions, and navigating identity between two cultures. Move from being a host to being a guide.",
    color: "blue",
  },
  {
    id: "leadership",
    label: "Leadership",
    subtitle: "The Empowerment Phase",
    emotion: "Empowered & Purposeful",
    description:
      "The view shifts from students as recipients of ministry to equipping them as partners. Empower them to lead Bible studies, organize outreach, and contextualize the gospel for their own peers.",
    color: "emerald",
  },
  {
    id: "reentry",
    label: "Re-Entry Home",
    subtitle: "The Deployment Phase",
    emotion: "Determined & Pressured",
    description:
      "Often the most neglected phase. Re-entry is not the end of ministry — it is the beginning of multiplication. Transform departure into deployment.",
    color: "amber",
  },
];
