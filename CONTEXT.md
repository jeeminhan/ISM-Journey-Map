# Context: CRU-Style Route-Based Stage Detail Pages

## Goal
Make each lifecycle stage island on StageMap navigate to its own dedicated full-page experience (like the CRU Audience Map), replacing the current in-page content panel pattern.

## Constraints (must be preserved)
- Next.js 16.1.6 — `params` and `searchParams` are Promises and MUST be awaited
- All existing content components (BackgroundInfoPanel, StageHero, EmpathyMap, QuotesSection, MinistryPanel) must be reused, not rewritten
- `BackgroundSelector.tsx` stays unchanged — wrap it in `BackgroundSelectorBar.tsx` for router integration
- `stageType: 'main' | 'attrition'` field on StageInfo (in stages.ts) is the source of truth for stage type — no hardcoded ID lists
- No `StagePageLayout.tsx` — layouts are inlined in the page files
- No `stageMeta.ts` — export REGION_META directly from StageMap.tsx
- TypeScript must compile with no errors

## Approach Chosen
Route-based stage pages: clicking any island navigates to /stage/[id]. Main stages get full pages with BackgroundSelector + content panels. Attrition stages get simple info pages. All 9 stage IDs are valid routes; unknown IDs get notFound().

## Rejected Approaches
- **Modal overlay**: rejected — no bookmarkable URLs
- **In-page expansion**: rejected — doesn't create the "destination" feeling
- **Geographic world map**: rejected — wrong direction for this app
- **StagePageLayout wrapper**: rejected — over-abstraction for a single route
- **stageMeta.ts**: rejected — REGION_META can just be exported from StageMap.tsx

## URL Structure
- `/` — main page with StageMap only (no content panels)
- `/stage/pre-arrival?bg=muslim` — main stage detail page
- `/stage/drift` — attrition stage info page (no bg param needed)
- `/stage/bogus` — 404 via notFound()
- `/stage/arrival?bg=garbage` — redirect to `/stage/arrival?bg=muslim`

## File Plan
DELETE (dead code):
  - src/components/WorldMap.tsx
  - src/components/StageJourneyMap.tsx
  - src/components/StageSelector.tsx
  - src/data/worldMapCountries.ts
  - src/data/world.json
  - src/types/geojson.ts

CREATE:
  - src/lib/stageUtils.ts — isMainStage(id: LifecycleStage): boolean
  - src/components/BackgroundSelectorBar.tsx — 'use client', wraps BackgroundSelector, calls router.replace
  - src/app/stage/[id]/page.tsx — Server Component, await params/searchParams, branches on isMainStage
  - e2e/map-navigation.spec.ts + playwright.config.ts — smoke tests

MODIFY:
  - src/components/StageMap.tsx — export REGION_META, make selected optional, onChange → router.push for all stages
  - src/app/page.tsx — strip content panels, use router.push via StageMap onChange

## Current State
[x] Step 1: Dead files deleted (WorldMap, StageJourneyMap, StageSelector, worldMapCountries, world.json, geojson.ts)
[x] Step 2: stageUtils.ts created (isMainStage derives from stages array stageType field)
[x] Step 3: StageMap.tsx modified (REGION_META exported, selected optional, onChange defaults to router.push)
[x] Step 4: BackgroundSelectorBar.tsx created ('use client', wraps BackgroundSelector, calls router.replace)
[x] Step 5: app/page.tsx stripped (StageMap only, no content panels)
[x] Step 6: app/stage/[id]/page.tsx created (Server Component, awaits params/searchParams, handles main + attrition, notFound for unknown IDs, redirect for invalid ?bg=)
[x] Step 7: Playwright tests added (playwright.config.ts + e2e/map-navigation.spec.ts, 8 smoke tests)
[x] Step 8: Build passes (next build --webpack, TypeScript clean)
