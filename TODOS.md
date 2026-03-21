# TODOS

## Attrition Stage Ministry Guidance

**What:** Add a "How to prevent / respond to this" section to attrition stage detail pages (Drift, Invisible Years, Silent Exit, Cultural Reversion).

**Why:** The current attrition pages describe what went wrong but leave the reader with no actionable guidance. A campus minister reading "The Drift" needs to know what to *do* — not just feel sad about it.

**Pros:** Closes the informational dead end on attrition pages. Gives them parity of purpose with main stage pages.

**Cons:** Requires new data in `journeyContent.ts` or a new attrition-specific content structure. Not trivially addable — needs content decisions.

**Context:** The attrition pages were added as navigation destinations (from `/stage/[id]` routing). They currently show: label, subtitle, description, emotion, and a link back to the branching main stage. All content from `stages.ts`. A full ministry guidance section would need a new content model similar to `JourneyCell` but for attrition stages (no worldview background variation needed).

**Depends on / blocked by:** Content authoring — someone needs to write the prevention/response guidance for each attrition stage.
