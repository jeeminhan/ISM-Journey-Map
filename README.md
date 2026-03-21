# ISM Journey Map

An interactive tool for international student ministry workers to explore how to come alongside international students with empathy and strategic clarity — organized by lifecycle stage and worldview background.

## Content Model

The core experience is built around a 5×5 matrix: five main lifecycle stages crossed with five worldview backgrounds, creating 25 primary content cells. Each cell is designed to help ministry workers interpret a student's moment with empathy, clarity, and practical next-step wisdom, while the attrition stages extend the map to show where students are commonly lost along the journey.

Each cell includes:

- **Empathy map** — What the student is seeing, hearing, thinking/feeling, and saying/doing
- **Ministry guidance** — Recommended posture, practical approaches, and common pitfalls
- **Anonymized student quotes** — First-person voice snippets that surface real tensions and motivations
- **Cultural bridges & barriers** — Relational openings and resistance points specific to that stage-background combination

### Lifecycle Stages

| Stage | Subtitle | Type |
|---|---|---|
| Pre-Arrival | The Hidden Window | Main |
| Arrival & Orientation | The Vulnerable Phase | Main |
| Integration | The Formation Phase | Main |
| Leadership | The Empowerment Phase | Main |
| Re-Entry Home | The Deployment Phase | Main |
| Invisible Years | The Missed Window | Attrition (from Pre-Arrival) |
| The Drift | The Fading Phase | Attrition (from Integration) |
| Silent Exit | The Unequipped Departure | Attrition (from Leadership) |
| Cultural Reversion | The Quiet Fade | Attrition (from Re-Entry) |

### Worldview Backgrounds

| Background | Framework |
|---|---|
| Muslim | Honor/Shame |
| Hindu | Bhakti/Devotion |
| Buddhist | Suffering/Peace |
| Secular/Postmodern | Rationalist |
| Nominally Religious | Cultural Christian / Folk Religion |

**Live:** https://ism-journey-map.vercel.app

## Features

- **Stage x Background matrix** — Select from five lifecycle stages (Pre-Arrival, Arrival & Orientation, Integration, Leadership, Re-Entry Home) and five worldview backgrounds (Muslim, Hindu, Buddhist, Secular/Postmodern, Nominally Religious) to surface content tailored to that combination.
- **Attrition off-ramp markers** — Four named failure modes (Invisible Years, The Drift, Silent Exit, Cultural Reversion) shown alongside the main journey to visualize where students are commonly lost.
- **Empathy maps** — Per-cell breakdowns of what a student is seeing, hearing, thinking/feeling, and saying/doing at that stage.
- **Ministry panels** — Practical ministry posture, recommended approaches, common pitfalls, cultural bridges, and barriers for each stage-background combination.
- **Quotes section** — Anonymized first-person student quotes surfaced per cell.
- **Stage journey map** — Visual map of the main lifecycle with attrition branches shown inline.
- **Lightweight transitions** — Stage and background changes fade between content panels.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| UI library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | CSS keyframes |
| Typography | Geist Sans / Geist Mono |
| Deployment | Vercel |

## Project Structure

```text
src/
├── app/
│   ├── favicon.ico              # App favicon
│   ├── globals.css              # Global styles, theme primitives, and transition keyframes
│   ├── layout.tsx               # Root layout with metadata, fonts, and shared header
│   └── page.tsx                 # Main interactive page that binds stage/background state to content panels
├── components/
│   ├── BackgroundInfo.tsx       # Summary panel for the selected worldview background
│   ├── BackgroundSelector.tsx   # Background filter pills for switching worldview lenses
│   ├── EmpathyMap.tsx           # Four-quadrant empathy map renderer
│   ├── Header.tsx               # Top-level app header and subtitle
│   ├── MinistryPanel.tsx        # Posture, approaches, pitfalls, bridges, and barriers panel
│   ├── QuotesSection.tsx        # Anonymized student quote cards for the active cell
│   ├── StageHero.tsx            # Stage summary card with subtitle, emotion, and milestone
│   ├── StageJourneyMap.tsx      # Alternate journey-map visualization component
│   ├── StageMap.tsx             # Primary stage map and attrition-path selector
│   ├── StageSelector.tsx        # Alternate button-based stage selector
│   └── WorldMap.tsx             # Clickable GeoJSON world map for country-to-background selection
├── data/
│   ├── backgrounds.ts           # Worldview background metadata and framework descriptions
│   ├── journeyContent.ts        # Per-cell content across stages and backgrounds
│   ├── stages.ts                # Main and attrition stage definitions
│   ├── types.ts                 # Shared TypeScript types for stages, backgrounds, and cells
│   ├── world.json               # Local GeoJSON source used by the world map
│   └── worldMapCountries.ts     # Country metadata mapped to worldview backgrounds
├── lib/
│   ├── getJourneyCell.ts        # Resolver for the active stage/background cell
│   └── stageColors.ts           # Stage color tokens used across UI components
└── types/
    └── geojson.ts               # Local GeoJSON type definitions for the map
```

## Getting Started

**Prerequisites:** Node.js 18+, npm

```bash
# Clone the repository
git clone https://github.com/jeeminhan/ISM-Journey-Map.git
cd ISM-Journey-Map

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Run the production build locally
npm start
```

## Environment Variables

No environment variables are required. The app is fully static with all content defined in TypeScript data files under `src/data/`.

## Deployment

The app is deployed on Vercel. Any push to the main branch triggers a production deployment automatically via Vercel's GitHub integration.

To deploy manually:

```bash
npm run build
vercel --prod
```

## License

Private. All rights reserved.
