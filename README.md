# ISM Journey Map

An interactive tool for international student ministry workers to explore how to come alongside international students with empathy and strategic clarity — organized by lifecycle stage and worldview background.

**Live:** https://ism-journey-map.vercel.app

## Features

- **Stage x Background matrix** — Select from five lifecycle stages (Pre-Arrival, Arrival & Orientation, Integration, Leadership, Re-Entry Home) and five worldview backgrounds (Muslim, Hindu, Buddhist, Secular/Postmodern, Nominally Religious) to surface content tailored to that combination.
- **Attrition off-ramp stages** — Three named failure modes (Invisible Years, The Drift, Silent Exit, Cultural Reversion) modeled as branches off the main journey, visualizing where students are commonly lost.
- **Empathy maps** — Per-cell breakdowns of what a student is seeing, hearing, thinking/feeling, and saying/doing at that stage.
- **Ministry panels** — Practical ministry posture, recommended approaches, common pitfalls, cultural bridges, and barriers for each stage-background combination.
- **Quotes section** — Anonymized first-person student quotes surfaced per cell.
- **World country map** — Interactive SVG world map that highlights countries associated with each worldview background; clicking a region updates the selected background.
- **Stage journey map** — Visual linear map of the main lifecycle with attrition branches shown inline.
- **Animated transitions** — Stage and background changes animate with Framer Motion.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| UI library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

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
