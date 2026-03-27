import { StageInfo } from "./types";

export const stages: StageInfo[] = [
  {
    id: "pre-arrival",
    stageType: "main",
    label: "Pre-Arrival",
    subtitle: "The Hidden Window",
    emotion: "Anticipation & Fear",
    description:
      "Before a student ever steps foot on campus, they are forming expectations, fears, and hopes. Ministry can begin here through digital touchpoints that build trust before the first handshake.",
    color: "indigo",
    faithMilestone: "pre-decision",
  },
  {
    id: "arrival",
    stageType: "main",
    label: "Arrival & Orientation",
    subtitle: "The Vulnerable Phase",
    emotion: "Overwhelmed & Lonely",
    description:
      "The first 2–4 weeks are the most significant. Students face culture shock, logistical confusion, and acute social isolation. Early relational support here is the strongest predictor of long-term connection.",
    color: "violet",
    faithMilestone: "pre-decision",
  },
  {
    id: "integration",
    stageType: "main",
    label: "Integration",
    subtitle: "The Formation Phase",
    emotion: "Curious & Conflicted",
    description:
      "Students begin building rhythms of life, exploring faith questions, and navigating identity between two cultures. Move from being a host to being a guide.",
    color: "blue",
    faithMilestone: "decision-window",
  },
  {
    id: "leadership",
    stageType: "main",
    label: "Leadership",
    subtitle: "The Empowerment Phase",
    emotion: "Empowered & Purposeful",
    description:
      "The view shifts from students as recipients of ministry to equipping them as partners. Empower them to lead Bible studies, organize outreach, and contextualize the gospel for their own peers.",
    color: "emerald",
    faithMilestone: "post-decision",
  },
  {
    id: "reentry",
    stageType: "main",
    label: "Re-Entry Home",
    subtitle: "The Deployment Phase",
    emotion: "Determined & Pressured",
    description:
      "Often the most neglected phase. Re-entry is not the end of ministry — it is the beginning of multiplication. Transform departure into deployment.",
    color: "amber",
    faithMilestone: "post-decision",
  },
  {
    id: "invisible-years",
    stageType: "attrition",
    branchesFrom: "pre-arrival",
    label: "Invisible Years",
    subtitle: "The Missed Window",
    emotion: "Unaware & Self-Sufficient",
    description:
      "When the pre-arrival and early-arrival window is missed, the student can spend years on campus without a single meaningful Christian relationship. They arrive, study, and return home largely unseen. This is the default outcome for many international students.",
    color: "slate",
    faithMilestone: "unreached",
  },
  {
    id: "drift",
    stageType: "attrition",
    branchesFrom: "integration",
    label: "The Drift",
    subtitle: "The Fading Phase",
    emotion: "Forgotten & Indifferent",
    description:
      "The student had initial contact but gradually disengages. Hospitality faded after the 'new student' novelty wore off. They retreated into their national social bubble, and no one noticed.",
    color: "rose",
    faithMilestone: "erosion",
  },
  {
    id: "silent-exit",
    stageType: "attrition",
    branchesFrom: "leadership",
    label: "Silent Exit",
    subtitle: "The Unequipped Departure",
    emotion: "Sentimental & Unequipped",
    description:
      "The student departs without re-entry preparation. No training, no network handed off, no plan. Departure happens, but there is no deployment — just goodbye.",
    color: "rose",
    faithMilestone: "erosion",
  },
  {
    id: "cultural-reversion",
    stageType: "attrition",
    branchesFrom: "reentry",
    label: "Cultural Reversion",
    subtitle: "The Quiet Fade",
    emotion: "Conflicted & Ashamed",
    description:
      "Back home: family pressure, no local church, no peer network. Faith quietly fades. The absence of a home church landing pad is the #1 predictor of reversion.",
    color: "rose",
    faithMilestone: "erosion",
  },
];
