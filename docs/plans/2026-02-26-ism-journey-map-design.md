# ISM Journey Map Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an interactive web tool (like audiencemap.cru.org) that helps ISM staff and volunteers understand the 5-stage lifecycle of international students, filtered by cultural/worldview background, so they can engage with greater empathy and strategic clarity.

**Architecture:** Static Next.js app with hardcoded seed content (IFI primer data). No backend or database required for MVP. All content lives in typed TypeScript data files. Interactive filtering + visualization done client-side.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion (animations), Vercel (deployment)

---

## Content Model

The map has two dimensions:
- **Lifecycle Stage** (5 stages from the IFI primer)
- **Worldview Background** (5 lenses)

Each `[Stage × Background]` cell contains:
- Empathy data (see, hear, think/feel, say/do)
- Ministry posture guidance
- 1–3 real or representative quotes
- Common barriers and bridges

### Lifecycle Stages
1. Pre-Arrival (Hidden Window)
2. Arrival & Orientation (Vulnerable Phase)
3. Integration (Formation Phase)
4. Leadership (Empowerment Phase)
5. Re-Entry Home (Deployment Phase)

### Worldview Backgrounds
1. Muslim (Honor/Shame framework)
2. Hindu (Bhakti/Devotion framework)
3. Buddhist (Suffering/Peace framework)
4. Secular/Postmodern (Rationalist framework)
5. Nominally Religious (Cultural Christian/folk religion)

---

## Task 1: Initialize Next.js Project

**Files:**
- Create: `ism-journey-map/` (project root)

**Step 1: Scaffold the project**

```bash
cd /Users/jeeminhan/Documents/Claudette
npx create-next-app@latest ism-journey-map \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git
```

**Step 2: Install additional dependencies**

```bash
cd ism-journey-map
npm install framer-motion lucide-react clsx
```

**Step 3: Verify dev server starts**

```bash
npm run dev
```
Expected: Server running at http://localhost:3000

**Step 4: Clean default boilerplate**

Remove contents of `src/app/page.tsx` and replace with:
```tsx
export default function Home() {
  return <main>ISM Journey Map</main>
}
```

Remove `src/app/globals.css` default styles, keep only Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step 5: Commit**

```bash
git init
git add .
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind"
```

---

## Task 2: Define Content Data Types and Seed Data

**Files:**
- Create: `src/data/types.ts`
- Create: `src/data/stages.ts`
- Create: `src/data/backgrounds.ts`
- Create: `src/data/journeyContent.ts`

**Step 1: Write types**

Create `src/data/types.ts`:
```typescript
export type LifecycleStage =
  | "pre-arrival"
  | "arrival"
  | "integration"
  | "leadership"
  | "reentry";

export type WorldviewBackground =
  | "muslim"
  | "hindu"
  | "buddhist"
  | "secular"
  | "nominal";

export interface EmpathyMap {
  seeing: string[];
  hearing: string[];
  thinkingFeeling: string[];
  sayingDoing: string[];
}

export interface Quote {
  text: string;
  attribution: string; // e.g., "Chinese graduate student" — keep anonymous
}

export interface MinistryGuidance {
  posture: string; // e.g., "Be a guide, not a host"
  approaches: string[];
  pitfalls: string[];
}

export interface JourneyCell {
  stage: LifecycleStage;
  background: WorldviewBackground;
  empathyMap: EmpathyMap;
  quotes: Quote[];
  ministry: MinistryGuidance;
  bridges: string[];
  barriers: string[];
}

export interface StageInfo {
  id: LifecycleStage;
  label: string;
  subtitle: string;
  emotion: string;
  description: string;
  color: string; // Tailwind color class
}

export interface BackgroundInfo {
  id: WorldviewBackground;
  label: string;
  worldviewFramework: string;
  description: string;
  icon: string; // emoji or lucide icon name
}
```

**Step 2: Write stage metadata**

Create `src/data/stages.ts`:
```typescript
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
```

**Step 3: Write background metadata**

Create `src/data/backgrounds.ts`:
```typescript
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
```

**Step 4: Write seed journey content (partial — expand over time)**

Create `src/data/journeyContent.ts` with at least 5 cells (one per stage for Muslim background as a starting point, others can be added iteratively):

```typescript
import { JourneyCell } from "./types";

export const journeyCells: JourneyCell[] = [
  {
    stage: "pre-arrival",
    background: "muslim",
    empathyMap: {
      seeing: [
        "Social media images of Western wealth and freedom",
        "Western lifestyle portrayed as the goal",
      ],
      hearing: [
        "Family warnings that Christianity is a political threat",
        "Pressure to represent the family well",
        "Stories of students who 'lost their faith' abroad",
      ],
      thinkingFeeling: [
        "Will I be safe practicing my faith?",
        "Will I be pressured to change who I am?",
        "Excitement about new possibilities mixed with anxiety",
      ],
      sayingDoing: [
        "Researching Islamic centers near campus",
        "Connecting with other Muslim students online",
        "Memorizing key phrases in English",
      ],
    },
    quotes: [
      {
        text: "I was told by my uncle that American Christians would try to convert me. I was on guard before I even landed.",
        attribution: "Graduate student from Pakistan",
      },
    ],
    ministry: {
      posture: "Digital Bridge-Builder",
      approaches: [
        "Establish a welcoming digital presence (social media, WhatsApp groups) before they arrive",
        "Send a personal welcome message to accepted students",
        "Connect them with a peer from their country who is already on campus",
      ],
      pitfalls: [
        "Leading with religious content before trust is built",
        "Assuming they know what ISM does",
        "Ignoring this stage entirely — it is the hidden window",
      ],
    },
    bridges: [
      "Shared emphasis on community and family",
      "Practical hospitality that meets real needs",
      "Curiosity about the West without pressure",
    ],
    barriers: [
      "Family warnings framing Christianity as dangerous",
      "Fear of cultural extraction",
      "Social media portraying Christians as hypocrites",
    ],
  },
  // ... (5 more cells to be added — one per stage for this background)
  // Task 3 will flesh out more cells. Start with at least 5 total cells across backgrounds.
  {
    stage: "arrival",
    background: "secular",
    empathyMap: {
      seeing: [
        "Confusing church cultures and Christian subcultures",
        "Extreme consumerism in Western society",
        "Christians who don't seem to match what they preach",
      ],
      hearing: [
        "Secular academic narratives in the classroom",
        "That science explains everything",
        "That religion is a private, irrational matter",
      ],
      thinkingFeeling: [
        "I don't belong here",
        "Will I get a job with my degree?",
        "These Christian groups seem like they have an agenda",
      ],
      sayingDoing: [
        "Attending ISM events for free food or social connection",
        "Withdrawing to their international student community",
        "Asking hard questions about faith when they feel safe",
      ],
    },
    quotes: [
      {
        text: "The ISM staff helped me with my resume. I thought they were just going to push religion on me. They actually cared.",
        attribution: "Engineering student from China",
      },
    ],
    ministry: {
      posture: "Practical Co-Laborer",
      approaches: [
        "Meet immediate practical needs (furniture, airport pickup) as a bridge to relationship, not an end",
        "Offer vocational help: resume reviews, mock interviews, career conversations",
        "Earn the right to spiritual conversations through genuine friendship",
      ],
      pitfalls: [
        "Getting stuck in 'Service Land' — practical help without relational depth",
        "Treating students as consumers of your services",
        "Moving to spiritual topics before trust is established",
      ],
    },
    bridges: [
      "Vocational discipleship connecting faith and career",
      "Authentic relationships where words match lives",
      "Intellectual honesty and willingness to engage hard questions",
    ],
    barriers: [
      "Perception that Christians have an agenda",
      "Scientific worldview as the only path to truth",
      "Fear of religion as cult-like",
    ],
  },
  {
    stage: "integration",
    background: "hindu",
    empathyMap: {
      seeing: [
        "Western church culture that feels culturally foreign",
        "Christianity associated with colonialism or beef-eating",
        "Christians who seem to demand cultural conversion, not just spiritual",
      ],
      hearing: [
        "Pressure from family to maintain Hindu identity",
        "Academic narratives that relativize all religions",
        "Spiritual hunger from peers exploring new ideas",
      ],
      thinkingFeeling: [
        "Can I follow Jesus without betraying my family and culture?",
        "Is there a way to explore faith without being extracted from my community?",
        "I am genuinely curious, but afraid of what it might cost",
      ],
      sayingDoing: [
        "Asking deep questions about meaning and purpose",
        "Exploring faith privately before engaging publicly",
        "Forming friendships across cultural lines for the first time",
      ],
    },
    quotes: [
      {
        text: "My friend said I could love Jesus and still honor my family. That was the first time I thought it might be possible.",
        attribution: "Graduate student from India",
      },
    ],
    ministry: {
      posture: "Cultural Bridge-Builder (Guide on the Side)",
      approaches: [
        "Explore Jesus as the ultimate Bhagwan (Lord of devotion) rather than a Western import",
        "Host satsang-style gatherings (truth gatherings) rather than formal church events",
        "Emphasize implantation: the gospel spreading through their family network, not extraction from it",
        "Use the Bhagavad Gita as a bridge, not a barrier",
      ],
      pitfalls: [
        "Asking students to eat beef or adopt Western cultural markers",
        "'Expert mentality' — being the teacher rather than a co-learner",
        "Extraction evangelism that separates students from their family oikos",
      ],
    },
    bridges: [
      "Bhakti (devotion) as a concept that resonates with loving Jesus",
      "Sensory worship and ritual that can be contextualized",
      "Implantation strategy that honors family relationships",
    ],
    barriers: [
      "Perception that becoming Christian means cultural betrayal",
      "Caste and community boundary concerns",
      "Expert/teacher dynamic that disempowers students",
    ],
  },
  {
    stage: "leadership",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "A faith community that has genuinely embraced them",
        "The possibility of leading others from their own background",
        "Their own transformation as evidence of something real",
      ],
      hearing: [
        "Encouragement to lead, not just follow",
        "Their own voice being taken seriously",
        "The Great Commission as something they can participate in",
      ],
      thinkingFeeling: [
        "I have something to offer",
        "I want to share what I've found with my family back home",
        "How do I lead a Bible study for people like me?",
      ],
      sayingDoing: [
        "Beginning to lead Discovery Bible Studies for peers",
        "Contextualizing the gospel for East Asian culture",
        "Connecting faith with their vocational future",
      ],
    },
    quotes: [
      {
        text: "I was afraid to lead at first. But when I did, I realized I could explain Jesus in a way my friends actually understood.",
        attribution: "Student from Thailand",
      },
    ],
    ministry: {
      posture: "Equipper and Multiplier",
      approaches: [
        "Equip with Discovery Bible Study (DBS) or M:28 strategy — reproducible, high-agency tools",
        "Follow the 'Daniel Paradigm': empower them to lead outreach among their own peers",
        "Integrate faith and vocation — help them see their career as their mission field",
        "Begin re-entry preparation early: plant the vision for what multiplication can look like at home",
      ],
      pitfalls: [
        "Keeping students as perpetual recipients rather than empowering them as leaders",
        "Teacher-centered Bible studies that create expert-dependency",
        "Neglecting re-entry preparation until the last minute",
      ],
    },
    bridges: [
      "Water imagery for cleansing and purification (resonates with Buddhist aesthetics)",
      "Family-oriented framing of Jesus' sonship",
      "Music and experiential worship rather than purely propositional truth",
    ],
    barriers: [
      "Self-effort framework (Buddhism): grace can feel too easy",
      "God perceived as impersonal void rather than personal Father",
      "'Sin' translated as 'crime' causing confusion",
    ],
  },
  {
    stage: "reentry",
    background: "nominal",
    empathyMap: {
      seeing: [
        "A home culture that has moved on without them",
        "Family who don't understand who they've become",
        "A society where faith must be private or hidden",
      ],
      hearing: [
        "Family pressure to conform to old patterns",
        "Skepticism about their faith journey",
        "The loneliness of reverse culture shock",
      ],
      thinkingFeeling: [
        "Will my faith survive when I'm no longer surrounded by the community that nurtured it?",
        "How do I maintain what I found without a church or support network?",
        "I feel like a stranger in my own home",
      ],
      sayingDoing: [
        "Seeking online communities to sustain faith",
        "Slowly sharing their faith story with family members",
        "Looking for local believers to connect with",
      ],
    },
    quotes: [
      {
        text: "I thought going home would feel like relief. Instead, I felt more alone than I did my first week in America.",
        attribution: "Graduate student from Eastern Europe",
      },
    ],
    ministry: {
      posture: "Deployment Coach (Long-term Accompanier)",
      approaches: [
        "Begin re-entry preparation 3–6 months before departure (use Think Home, Back Home curricula)",
        "Connect them to a local church or believer network before they leave",
        "Establish a VoIP/Zoom mentoring relationship that continues after departure",
        "Cast vision: their return is the beginning of multiplication, not the end of ministry",
        "Conduct a 'spiritual risk assessment' for the pressures they'll face at home",
      ],
      pitfalls: [
        "Treating graduation/departure as the end of the relationship",
        "Failing to prepare them for reverse culture shock",
        "No plan for ongoing community in their home country",
      ],
    },
    bridges: [
      "Vision of being an 'Ambassador in Exile' — giving purpose to the hardship",
      "Digital community that spans borders",
      "The oikos strategy: gospel spreading through existing family networks",
    ],
    barriers: [
      "Reverse culture shock and social isolation",
      "No local faith community to land in",
      "Family pressure to re-assimilate fully",
    ],
  },
];
```

**Step 5: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors

**Step 6: Commit**

```bash
git add src/data/
git commit -m "feat: add content types and seed journey data"
```

---

## Task 3: Build the Layout and Navigation Shell

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/globals.css` (update)
- Create: `src/components/Header.tsx`

**Step 1: Update layout.tsx**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISM Journey Map",
  description: "A missional guide to seeing and loving international students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Create Header component**

```tsx
// src/components/Header.tsx
export default function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div>
        <span className="text-sm font-semibold tracking-widest uppercase text-indigo-400">
          ISM
        </span>
        <h1 className="text-lg font-bold text-white leading-tight">
          Journey Map
        </h1>
      </div>
      <p className="text-sm text-slate-400 hidden md:block">
        A missional guide to seeing and loving international students
      </p>
    </header>
  );
}
```

**Step 3: Run dev server and verify header renders**

```bash
npm run dev
```
Open http://localhost:3000 and confirm header appears.

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: add layout shell and header"
```

---

## Task 4: Build the Stage Selector (Horizontal Timeline)

**Files:**
- Create: `src/components/StageSelector.tsx`
- Create: `src/components/StageCard.tsx`

**Step 1: Build StageSelector**

```tsx
// src/components/StageSelector.tsx
"use client";
import { stages } from "@/data/stages";
import { LifecycleStage } from "@/data/types";
import clsx from "clsx";

interface Props {
  selected: LifecycleStage;
  onChange: (stage: LifecycleStage) => void;
}

const colorMap: Record<string, string> = {
  indigo: "border-indigo-500 text-indigo-400",
  violet: "border-violet-500 text-violet-400",
  blue: "border-blue-500 text-blue-400",
  emerald: "border-emerald-500 text-emerald-400",
  amber: "border-amber-500 text-amber-400",
};

export default function StageSelector({ selected, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {stages.map((stage, i) => (
        <button
          key={stage.id}
          onClick={() => onChange(stage.id)}
          className={clsx(
            "flex-shrink-0 px-4 py-3 rounded-xl border text-left transition-all",
            selected === stage.id
              ? clsx("bg-white/10", colorMap[stage.color])
              : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
          )}
        >
          <div className="text-xs font-semibold uppercase tracking-wider mb-1">
            {i + 1}. {stage.label}
          </div>
          <div className="text-xs opacity-70">{stage.emotion}</div>
        </button>
      ))}
    </div>
  );
}
```

**Step 2: Integrate into page.tsx**

```tsx
// src/app/page.tsx
"use client";
import { useState } from "react";
import StageSelector from "@/components/StageSelector";
import { LifecycleStage, WorldviewBackground } from "@/data/types";

export default function Home() {
  const [stage, setStage] = useState<LifecycleStage>("pre-arrival");
  const [background, setBackground] = useState<WorldviewBackground>("muslim");

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      <StageSelector selected={stage} onChange={setStage} />
      <div className="text-white">Stage: {stage} | Background: {background}</div>
    </main>
  );
}
```

**Step 3: Verify selector renders and selection state works**

Run `npm run dev` and click each stage to confirm state changes.

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: add stage selector timeline component"
```

---

## Task 5: Build the Background Selector (Filter Pills)

**Files:**
- Create: `src/components/BackgroundSelector.tsx`

**Step 1: Build BackgroundSelector**

```tsx
// src/components/BackgroundSelector.tsx
"use client";
import { backgrounds } from "@/data/backgrounds";
import { WorldviewBackground } from "@/data/types";
import clsx from "clsx";

interface Props {
  selected: WorldviewBackground;
  onChange: (bg: WorldviewBackground) => void;
}

export default function BackgroundSelector({ selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-sm text-slate-400 self-center mr-2">Filter by background:</span>
      {backgrounds.map((bg) => (
        <button
          key={bg.id}
          onClick={() => onChange(bg.id)}
          className={clsx(
            "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition-all",
            selected === bg.id
              ? "bg-white text-slate-900 border-white font-medium"
              : "border-white/20 text-slate-300 hover:border-white/40"
          )}
        >
          <span>{bg.icon}</span>
          <span>{bg.label}</span>
        </button>
      ))}
    </div>
  );
}
```

**Step 2: Integrate into page.tsx**

Add `BackgroundSelector` below `StageSelector`:
```tsx
<BackgroundSelector selected={background} onChange={setBackground} />
```

**Step 3: Verify filter works**

Click each background pill and confirm selection state updates.

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: add background filter selector"
```

---

## Task 6: Build the Stage Hero Section

**Files:**
- Create: `src/components/StageHero.tsx`

The hero shows the selected stage's description, emotion, and subtitle — giving context before the deep-dive content.

**Step 1: Build StageHero**

```tsx
// src/components/StageHero.tsx
"use client";
import { stages } from "@/data/stages";
import { LifecycleStage } from "@/data/types";

const colorMap: Record<string, string> = {
  indigo: "from-indigo-900/40 border-indigo-500/30 text-indigo-300",
  violet: "from-violet-900/40 border-violet-500/30 text-violet-300",
  blue: "from-blue-900/40 border-blue-500/30 text-blue-300",
  emerald: "from-emerald-900/40 border-emerald-500/30 text-emerald-300",
  amber: "from-amber-900/40 border-amber-500/30 text-amber-300",
};

export default function StageHero({ stageId }: { stageId: LifecycleStage }) {
  const stage = stages.find((s) => s.id === stageId)!;
  const colors = colorMap[stage.color];

  return (
    <div className={`rounded-2xl border bg-gradient-to-br ${colors} to-transparent p-6`}>
      <div className={`text-sm font-semibold uppercase tracking-wider mb-1 ${colors.split(" ")[2]}`}>
        {stage.subtitle}
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">{stage.label}</h2>
      <p className="text-slate-300 text-sm italic mb-4">"{stage.emotion}"</p>
      <p className="text-slate-200 max-w-2xl">{stage.description}</p>
    </div>
  );
}
```

**Step 2: Integrate into page.tsx**

Add below the background selector:
```tsx
<StageHero stageId={stage} />
```

**Step 3: Verify hero updates when stage changes**

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: add stage hero section"
```

---

## Task 7: Build the Empathy Map Panel

**Files:**
- Create: `src/components/EmpathyMap.tsx`
- Create: `src/lib/getJourneyCell.ts`

**Step 1: Write helper to look up journey cell**

```typescript
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
```

**Step 2: Build EmpathyMap component**

```tsx
// src/components/EmpathyMap.tsx
"use client";
import { EmpathyMap as EmpathyMapType } from "@/data/types";

interface Props {
  data: EmpathyMapType;
}

const quadrants = [
  { key: "seeing" as const, label: "👀 What they're seeing", color: "blue" },
  { key: "hearing" as const, label: "👂 What they're hearing", color: "violet" },
  { key: "thinkingFeeling" as const, label: "🧠 What they're thinking & feeling", color: "indigo" },
  { key: "sayingDoing" as const, label: "🗣 What they're saying & doing", color: "emerald" },
];

export default function EmpathyMap({ data }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Empathy Map</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quadrants.map((q) => (
          <div
            key={q.key}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            <div className="text-sm font-semibold text-slate-300 mb-3">
              {q.label}
            </div>
            <ul className="space-y-2">
              {data[q.key].map((item, i) => (
                <li key={i} className="text-sm text-slate-400 flex gap-2">
                  <span className="text-slate-600 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Step 3: Wire up in page.tsx**

```tsx
import { getJourneyCell } from "@/lib/getJourneyCell";
import EmpathyMap from "@/components/EmpathyMap";

// Inside component:
const cell = getJourneyCell(stage, background);

// In JSX, after StageHero:
{cell ? (
  <EmpathyMap data={cell.empathyMap} />
) : (
  <div className="text-slate-500 italic text-sm p-6 border border-white/10 rounded-xl">
    Content for this combination coming soon.
  </div>
)}
```

**Step 4: Verify empathy map shows correct data per selection**

**Step 5: Commit**

```bash
git add src/
git commit -m "feat: add empathy map panel with cell lookup"
```

---

## Task 8: Build the Ministry Guidance + Bridges/Barriers Panel

**Files:**
- Create: `src/components/MinistryPanel.tsx`

**Step 1: Build MinistryPanel**

```tsx
// src/components/MinistryPanel.tsx
"use client";
import { JourneyCell } from "@/data/types";

export default function MinistryPanel({ cell }: { cell: JourneyCell }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Ministry Guidance */}
      <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
            Recommended Posture
          </div>
          <div className="text-lg font-semibold text-white">
            {cell.ministry.posture}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
            Approaches
          </div>
          <ul className="space-y-2">
            {cell.ministry.approaches.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 flex-shrink-0">✓</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
            Watch Out For
          </div>
          <ul className="space-y-2">
            {cell.ministry.pitfalls.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300">
                <span className="text-red-400 flex-shrink-0">✗</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bridges & Barriers */}
      <div className="space-y-4">
        <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-4">
          <div className="text-xs uppercase tracking-wider text-emerald-400 mb-2">
            Bridges
          </div>
          <ul className="space-y-1">
            {cell.bridges.map((b, i) => (
              <li key={i} className="text-sm text-slate-300">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-950/40 border border-red-500/20 rounded-xl p-4">
          <div className="text-xs uppercase tracking-wider text-red-400 mb-2">
            Barriers
          </div>
          <ul className="space-y-1">
            {cell.barriers.map((b, i) => (
              <li key={i} className="text-sm text-slate-300">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Integrate in page.tsx**

Add below EmpathyMap (inside the `cell ?` check):
```tsx
<MinistryPanel cell={cell} />
```

**Step 3: Verify all panels render correctly for each combination**

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: add ministry guidance and bridges/barriers panels"
```

---

## Task 9: Add Quotes Section

**Files:**
- Create: `src/components/QuotesSection.tsx`

**Step 1: Build QuotesSection**

```tsx
// src/components/QuotesSection.tsx
"use client";
import { Quote } from "@/data/types";

export default function QuotesSection({ quotes }: { quotes: Quote[] }) {
  if (!quotes.length) return null;
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">
        Voices from the Journey
      </h3>
      <div className="space-y-3">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="bg-white/5 border-l-2 border-indigo-500 rounded-r-xl px-4 py-3"
          >
            <p className="text-slate-200 italic text-sm">"{q.text}"</p>
            <p className="text-slate-500 text-xs mt-1">— {q.attribution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Step 2: Integrate in page.tsx above MinistryPanel**

```tsx
<QuotesSection quotes={cell.quotes} />
```

**Step 3: Commit**

```bash
git add src/
git commit -m "feat: add quotes section"
```

---

## Task 10: Add Background Info Sidebar

**Files:**
- Create: `src/components/BackgroundInfo.tsx`

When a background filter is selected, show a sidebar/callout explaining the worldview framework.

**Step 1: Build BackgroundInfo**

```tsx
// src/components/BackgroundInfo.tsx
"use client";
import { backgrounds } from "@/data/backgrounds";
import { WorldviewBackground } from "@/data/types";

export default function BackgroundInfoPanel({ bgId }: { bgId: WorldviewBackground }) {
  const bg = backgrounds.find((b) => b.id === bgId)!;
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4">
      <span className="text-3xl">{bg.icon}</span>
      <div>
        <div className="font-semibold text-white">{bg.label}</div>
        <div className="text-xs text-slate-400 mb-2">
          Primary framework: <span className="text-indigo-400">{bg.worldviewFramework}</span>
        </div>
        <p className="text-sm text-slate-300">{bg.description}</p>
      </div>
    </div>
  );
}
```

**Step 2: Add to page.tsx between background selector and stage hero**

```tsx
<BackgroundInfoPanel bgId={background} />
```

**Step 3: Commit**

```bash
git add src/
git commit -m "feat: add background info callout panel"
```

---

## Task 11: Polish and Responsive Layout

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

**Step 1: Add a hero intro section at the top of page.tsx**

```tsx
<section className="text-center py-12 max-w-2xl mx-auto">
  <h2 className="text-4xl font-bold text-white mb-4">
    See the Student. <span className="text-indigo-400">Love the Person.</span>
  </h2>
  <p className="text-slate-400 text-lg">
    Select a lifecycle stage and worldview background to explore how to come
    alongside international students with empathy and strategic clarity.
  </p>
</section>
```

**Step 2: Add scrollbar hiding utility to globals.css**

```css
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

**Step 3: Run Lighthouse audit**

```bash
npm run build
npm run start
```
Check http://localhost:3000 in browser dev tools for layout/responsiveness issues on mobile.

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: add hero intro and polish responsive layout"
```

---

## Task 12: Deploy to Vercel

**Step 1: Initialize git repo if not already done**

```bash
git status
```

**Step 2: Push to GitHub**

```bash
gh repo create ism-journey-map --public --source=. --remote=origin --push
```

**Step 3: Deploy via Vercel CLI**

Use the `vercel:deploy` skill in a new session, OR:
```bash
npx vercel --prod
```
Follow prompts. Accept defaults.

**Step 4: Verify deployed URL loads correctly**

Open the Vercel URL and confirm all stages and backgrounds render correctly.

**Step 5: Commit deployment confirmation**

```bash
git commit -m "chore: deployed to Vercel" --allow-empty
```

---

## Content Expansion Roadmap (Post-MVP)

After the initial 5 cells are live, expand in this priority order:

1. Add all 5 stages for Muslim background (highest strategic priority per primer)
2. Add all 5 stages for Hindu background (India = 31% of international students)
3. Add all 5 stages for Secular background
4. Add real student quotes sourced from IFI staff interviews
5. Add a "What's Next" section with links to recommended resources from the primer
6. Add an "About this Map" modal explaining methodology and IFI/Frontier Commons origin

---

## Key Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Backend? | No — static data files | YAGNI; content is stable enough for static MVP |
| CMS? | No — TypeScript files | Easy to edit, version-controlled, no auth needed |
| Auth? | None | Public tool for ISM staff and volunteers |
| Animations? | Framer Motion (subtle) | Smooth transitions between stage/background selections |
| i18n? | English only (MVP) | Add later if needed for global ISM networks |
