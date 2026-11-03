# Year 10 Science Studio

Live site: https://mattxlander-lang.github.io/year-10-science-studio/

An independent revision library scoped to the supplied **2026 Genetics Objectives** and **2026 Term 4 Course Objectives**. Four areas remain: genetics, evolution, reaction rates and heat transfer. Newton’s laws, periodic-table/ion study, equation balancing and immunology have been removed, alongside the earlier electricity and Earth/space removals.

## Learning and practice

- Mitosis, meiosis, Punnett squares, crossing over and DNA organisation.
- Interactive complementary DNA base pairing with feedback.
- Collision-theory animation: temperature, concentration, surface area, mixing and enzymes (extension).
- Reaction-rate curves and conduction, convection and radiation animations.
- Evolution model with generation playback, stepping and changing selection pressure.
- All 51 original YouTube links, organised into the four retained topic areas.
- 24 practice questions: 16 automatically marked and eight written/self-assessed.
- Core mock: eight questions, 16 marks, 30 minutes. Extension mock: eight questions, 20 marks, 40 minutes. These are practice settings, not official exam specifications.
- Personalised revision plans using retained mock evidence. Old results are recalculated for the current scope. The revised heat extension item has a new ID so old buoyancy responses are not graded against it.

The objectives map identifies extension content. Models and questions sample the objectives; they do not cover every objective completely. Progress and drafts stay in the current browser. Video playback and web fonts require an internet connection; local font fallbacks are included.

## Design

CGS blue #002D72 and ochre #CC8A00 follow the Brand Identity Staff Guidelines, with Zilla Slab headings and Maven Pro body text. Layout direction follows the supplied Year 8 Cells lesson deck. No school logo is redrawn or animated. Decorative workbench animation can be paused; science models have pause/step controls and respect reduced-motion settings.

## Run and verify

Serve `dist/` with `python3 -m http.server 8765 --directory dist`.
Run `node --test tests/*.test.cjs` for grading, paper generation, saved-result filtering, revision priorities and selection-model checks. No build step or student accounts are required.
