export interface JourneyNode {
  title: string;
  desc: string;
  toward: string;
  away: string;
}

export interface Posture {
  id: string;
  label: string;
  color: string;
  colorRgb: string;
}

export const postures: Posture[] = [
  { id: "christian", label: "Christian", color: "#10b981", colorRgb: "16,185,129" },
  { id: "seeking", label: "Seeking", color: "#3b82f6", colorRgb: "59,130,246" },
  { id: "open", label: "Open", color: "#eab308", colorRgb: "234,179,8" },
  { id: "unaware", label: "Unaware", color: "#f97316", colorRgb: "249,115,22" },
  { id: "resistant", label: "Resistant", color: "#ef4444", colorRgb: "239,68,68" },
];

export const stages = ["Pre-Arrival", "Arrival", "Integration", "Re-Entry"] as const;

export const stageSubtitles: Record<string, string> = {
  "Pre-Arrival": "The Hidden Window",
  "Arrival": "The Vulnerable Phase",
  "Integration": "The Formation Phase",
  "Re-Entry": "Going Home",
};

export const stageColors = ["#818cf8", "#a78bfa", "#60a5fa", "#fbbf24"];

// nodes[postureId][stageIndex]
export const nodes: Record<string, JourneyNode[]> = {
  resistant: [
    { title: "Burned before arriving", desc: "Negative media, family warnings, past bad experience.", toward: "Time + distance softens wound. A different kind of Christian shows up.", away: "Anti-Christian content reinforces existing bias." },
    { title: "Felt targeted, not welcomed", desc: "Aggressive evangelism at orientation. Felt like a project.", toward: "One genuine act of kindness. \"Maybe they're not all like that.\"", away: "Pushy tract handout at airport pickup. Feels targeted day one." },
    { title: "Betrayed trust", desc: "Friendship felt conditional. Saw hypocrisy. Actively avoids Christians.", toward: "A Christian friend apologizes. Disarms the wall.", away: "Dinner invite was a gospel ambush. Never again." },
    { title: "Warns others back home", desc: "Returns with a negative story. Tells others to avoid Christians. Ripple effect.", toward: "Reconnects with a good Christian online. Remembers the good ones.", away: "Family validates their bad experience. \"See, we told you.\"" },
  ],
  unaware: [
    { title: "Spiritual questions dormant", desc: "Focused on logistics. Faith not on their radar.", toward: "Sees a Christian friend's post online. First spark of curiosity.", away: "Family warns: \"Stay away from religious groups abroad.\"" },
    { title: "First encounter with Christians", desc: "Christians are \"friendly locals.\" Hospitality builds trust.", toward: "Invited to a meal with no strings. Feels genuinely cared for.", away: "Overheard Christians mocking their culture. Closes off immediately." },
    { title: "Curiosity through friendship", desc: "Questions arise through relationships. Be present, not pushy.", toward: "Christian roommate lives with integrity. \"Something different about them.\"", away: "Felt excluded at a church event \u2014 couldn't follow the cultural norms." },
    { title: "Returns without connection", desc: "Reverse culture shock. No lasting relationships.", toward: "Crisis at home triggers spiritual questions. Remembers a kind Christian.", away: "Back home, no one follows up. The experience fades to nothing." },
  ],
  open: [
    { title: "Spiritually curious pre-departure", desc: "Googling, asking friends about faith. Digital bridge moment.", toward: "Finds a testimony from someone with their background.", away: "Researches Christianity, finds culture-war content." },
    { title: "Actively accepts invitations", desc: "Says yes to meals, events, studies. Loneliness + novelty = openness.", toward: "Bible study answers a real question. Not scripted \u2014 a real conversation.", away: "Pressured to pray or commit before ready. Feels manipulated." },
    { title: "Exploring faith seriously", desc: "Attending regularly. Asking hard questions. Needs patient guides.", toward: "A personal crisis meets a community that shows up. Real love.", away: "Christians can't answer hard questions and get defensive. Loses trust." },
    { title: "Doesn't fit in at home", desc: "Changed by the experience. Family doesn't understand.", toward: "Misses the community. Starts reading the Bible. Seeks a local church.", away: "Parents discover their interest. Family shame and pressure shut it down." },
  ],
  seeking: [
    { title: "Researching before arrival", desc: "Reading, watching, comparing religions. High intent, low context.", toward: "Reads the Gospel in their own language. \"This is the God I was looking for.\"", away: "Feels they must abandon their entire culture to follow Jesus." },
    { title: "Looking for answers immediately", desc: "Seeks Christian community on purpose. Ready for conversation.", toward: "Mentor walks with them through specific doubts. No shortcuts.", away: "Told they can't be Christian and honor their family. Chooses family." },
    { title: "Decision window", desc: "Commitment often happens here. Needs mentorship, not just info.", toward: "Prays for the first time and something shifts. Community celebrates.", away: "Church demands behavioral changes before belonging. Feels judged." },
    { title: "Tested conviction going home", desc: "Strong belief, untested at home. Needs preparation + network.", toward: "Connected to a believer in their home country before they land.", away: "No one prepared them for the cost at home. Faith crumbles under pressure." },
  ],
  christian: [
    { title: "Looking for church & community", desc: "Wants to plug in. May want to serve, not just receive.", toward: "", away: "" },
    { title: "Worship style shock", desc: "Faith is real but expression is different. Needs welcome, not re-evangelism.", toward: "", away: "" },
    { title: "Cross-cultural faith deepening", desc: "Growing through difference. Becoming a bridge between cultures.", toward: "", away: "" },
    { title: "Reverse culture shock + faith", desc: "Worship different at home. Needs local church + alumni network.", toward: "", away: "" },
  ],
};

export interface TransitionZone {
  from: string;
  to: string;
  towardLabel: string;
  awayLabel: string;
  toward: string[];
  away: string[];
}

export const transitions: TransitionZone[] = [
  {
    from: "resistant", to: "unaware",
    awayLabel: "Felt targeted or ambushed",
    towardLabel: "Unexpected kindness (no agenda)",
    away: [
      "Anti-Christian content online reinforces existing bias before they leave.",
      "Pushy tract handout at airport pickup. Feels targeted on day one.",
      "Invited to dinner, ambushed with a gospel presentation. Never again.",
      "Family validates their bad experience. \"See, we told you.\"",
    ],
    toward: [
      "Time + distance softens the wound. A different kind of Christian shows up online.",
      "One genuine act of kindness at pickup. \"Maybe they're not all like that.\"",
      "A Christian friend apologizes for how others treated them. Disarms the wall.",
      "Reconnects with a Christian friend online. Remembers the good ones.",
    ],
  },
  {
    from: "unaware", to: "open",
    awayLabel: "No safe space to explore / cultural insensitivity",
    towardLabel: "Meaningful community / genuine care",
    away: [
      "Family warns: \"Stay away from religious groups abroad.\"",
      "Overheard Christians mocking their culture. Closes off immediately.",
      "Felt excluded at a church event \u2014 couldn't follow the cultural norms. Doesn't go back.",
      "Back home, no one follows up. The experience fades to nothing.",
    ],
    toward: [
      "Sees a Christian friend's post about faith online. First spark of curiosity.",
      "Invited to a meal with no strings. Feels genuinely cared for. Starts asking questions.",
      "Christian roommate lives with integrity. \"There's something different about them.\"",
      "Crisis at home triggers spiritual questions. Remembers a kind Christian.",
    ],
  },
  {
    from: "open", to: "seeking",
    awayLabel: "Pressure before readiness / can't handle hard questions",
    towardLabel: "Freedom to explore / real answers to real questions",
    away: [
      "Researches Christianity, finds culture-war content. \"This isn't what I thought.\"",
      "Pressured to pray or commit before ready. Feels manipulated. Steps back.",
      "Christians can't answer their hard questions and get defensive. Loses trust.",
      "Parents discover their interest. Family shame and pressure shut it down.",
    ],
    toward: [
      "Finds a testimony from someone with their background. \"Maybe this is for me too.\"",
      "Bible study answers a real question. Not scripted \u2014 a real conversation.",
      "A personal crisis meets a community that shows up. \"They didn't just talk about love.\"",
      "Misses the community. Starts reading the Bible they were given. Seeks a local church.",
    ],
  },
  {
    from: "seeking", to: "christian",
    awayLabel: "Must abandon culture to belong / no preparation for cost",
    towardLabel: "Belonging before behaving / personal encounter with God",
    away: [
      "Feels they must abandon their entire culture to follow Jesus. The cost feels like erasure.",
      "Told they can't be Christian and honor their family. Chooses family.",
      "Church demands behavioral changes before belonging. Feels judged and retreats.",
      "No one prepared them for the cost at home. Faith crumbles under pressure.",
    ],
    toward: [
      "Reads the Gospel in their own language. \"This is the God I was looking for.\"",
      "Mentor walks with them through specific doubts. No shortcuts. Real answers.",
      "Prays for the first time and something shifts. Community celebrates without pressure.",
      "Connected to a believer in their home country before they land. Not alone.",
    ],
  },
];
