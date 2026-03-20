# ISM Journey Map — Project Documentation

> Generated: 2026-03-20 | Scan Level: Quick | Mode: initial_scan

---

## Overview

The ISM Journey Map is a static interactive web tool for **International Student Ministry (ISM) workers**. It helps volunteers and staff engage international students with empathy and strategic clarity by surfacing tailored ministry guidance for any combination of lifecycle stage and worldview background.

**Live:** https://ism-journey-map.vercel.app
**Repo:** https://github.com/jeeminhan/ISM-Journey-Map

---

## Core Concept: The 5×5 Matrix

The tool is built around a two-axis content model:

| Axis | Options |
|---|---|
| **Lifecycle Stage** (5) | Pre-Arrival, Arrival & Orientation, Integration, Leadership, Re-Entry Home |
| **Worldview Background** (5) | Muslim, Hindu, Buddhist, Secular/Postmodern, Nominally Religious |

Each `[Stage × Background]` cell contains:
- **Empathy map** — what the student sees, hears, thinks/feels, says/does
- **Ministry guidance** — posture, recommended approaches, common pitfalls
- **Quotes** — anonymized first-person student voices
- **Bridges & Barriers** — cultural entry points and obstacles

### Attrition Off-Ramps

Four named failure modes visualize where students are commonly lost:

| Stage | Type | Description |
|---|---|---|
| Invisible Years | attrition from Pre-Arrival | Student arrives, studies, returns home with zero meaningful Christian encounter |
| The Drift | attrition from Integration | Initial contact fades; student retreats into national social bubble |
| Silent Exit | attrition from Leadership | Student departs unequipped — no training, no network handoff |
| Cultural Reversion | attrition from Re-Entry | Faith quietly fades back home under family/cultural pressure |

---

## Technology Stack

| Category | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| UI Library | React | 19.2.3 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
| Typography | Geist (Sans + Mono) | ^1.7.0 |
| Utilities | clsx | ^2.1.1 |
| Deployment | Vercel | — |

**Architecture Pattern:** Static client-side SPA. No backend, no database, no API routes. All content is hardcoded in TypeScript data files under `src/data/`. Fully deployable as a static export.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Geist fonts, dark background)
│   ├── page.tsx            # Main page — stage/background state, cell lookup, composition
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── StageMap.tsx        # Visual stage map with attrition branches
│   ├── StageHero.tsx       # Hero section for selected stage
│   ├── BackgroundSelector.tsx   # Worldview background picker
│   ├── BackgroundInfo.tsx  # Info panel for selected background
│   ├── EmpathyMap.tsx      # 4-quadrant empathy map display
│   ├── QuotesSection.tsx   # Student quotes display
│   ├── MinistryPanel.tsx   # Ministry posture + approaches + pitfalls + bridges/barriers
│   ├── StageJourneyMap.tsx # Stage journey visualization
│   ├── StageSelector.tsx   # Stage picker
│   ├── Header.tsx          # App header
│   └── WorldMap.tsx        # World map visualization
├── data/
│   ├── types.ts            # All TypeScript interfaces and type definitions
│   ├── stages.ts           # Stage definitions (9 stages: 5 main + 4 attrition)
│   ├── journeyContent.ts   # Full 5×5 cell content (empathy maps, ministry, quotes)
│   ├── backgrounds.ts      # Worldview background definitions
│   └── worldMapCountries.ts / world.json  # Geographic data for world map
├── lib/
│   └── getJourneyCell.ts   # Lookup function: (stage, background) → JourneyCell
└── types/
    └── geojson.ts          # GeoJSON type definitions
```

---

## Key Data Types

```typescript
type LifecycleStage = "pre-arrival" | "arrival" | "integration" | "leadership" | "reentry"
  | "invisible-years" | "drift" | "silent-exit" | "cultural-reversion";

type WorldviewBackground = "muslim" | "hindu" | "buddhist" | "secular" | "nominal";

interface JourneyCell {
  stage: LifecycleStage;
  background: WorldviewBackground;
  empathyMap: EmpathyMap;        // seeing, hearing, thinkingFeeling, sayingDoing
  quotes: Quote[];
  ministry: MinistryGuidance;    // posture, approaches, pitfalls
  bridges: string[];
  barriers: string[];
}
```

---

## Content Coverage

- **Total cells possible:** 5 stages × 5 backgrounds = 25
- **Attrition stages:** 4 (not all have full cell content — some show "coming soon")
- **Content source:** Drawn from IFI primer data (hardcoded seed content)
- **No auth, no user data, no tracking** — fully static and private

---

## Existing Documentation

| File | Description |
|---|---|
| `README.md` | Feature overview, tech stack, dev setup, deployment instructions |
| `docs/plans/2026-02-26-ism-journey-map-design.md` | Original implementation plan |
| `docs/index.md` | This file |
