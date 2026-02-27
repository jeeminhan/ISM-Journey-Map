import { BackgroundInfo } from "./types";

export const backgrounds: BackgroundInfo[] = [
  {
    id: "muslim",
    label: "Muslim Background",
    worldviewFramework: "Honor / Shame",
    description:
      "Faith is deeply tied to family honor and community belonging. Leaving Islam is seen as betrayal of the family name. Key bridges: personal prayer, God's oneness, and using the Qur'an as a bridge.",
    icon: "🌙",
  },
  {
    id: "hindu",
    label: "Hindu Background",
    worldviewFramework: "Bhakti / Devotion",
    description:
      "Spiritual life is expressed through devotion and ritual. The concern of 'cultural extraction' (e.g., being asked to abandon cultural practices) is a major barrier. Key bridges: Jesus as the ultimate Bhagwan, satsang-style gatherings.",
    icon: "🪔",
  },
  {
    id: "buddhist",
    label: "Buddhist Background",
    worldviewFramework: "Suffering / Peace",
    description:
      "Focus on escaping suffering through self-effort. God may be perceived as impersonal or distant. Key bridges: music, presence, water imagery, and Jesus' Sonship appealing to family-oriented cultures.",
    icon: "☸️",
  },
  {
    id: "secular",
    label: "Secular / Postmodern",
    worldviewFramework: "Rationalist / Consumer",
    description:
      "Scientific method as the only arbiter of truth. Fear of religion as cult-like. Preoccupied with career and consumerism. Key bridges: authentic incarnational relationships and vocational discipleship.",
    icon: "🔬",
  },
  {
    id: "nominal",
    label: "Nominally Religious",
    worldviewFramework: "Cultural / Folk Religion",
    description:
      "Identifies loosely with a religion for cultural/family reasons but lacks deep conviction. Often open to spiritual conversation when far from home and family pressure. Key bridges: community, belonging, and honest questions.",
    icon: "⛩️",
  },
];
