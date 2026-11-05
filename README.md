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


### Objective workshop update

The workshop now covers 40 derived objectives (30 core, 10 extension), with 54 auto checks, 40 written/drawing prompts, visual activities and browser-local progress export/restore. New diagrams include pedigrees, X-linked inheritance, codominance, eight-stage meiosis, speciation, phylogeny, drift/gene flow, organelles, cell cycle, protein production, mutation/cancer, karyotypes, fertilisation, enzymes and investigation planning. Existing detailed models remain linked.

Review [AUDIT.md](AUDIT.md) for objective mapping, validation, known limits and prioritised student-experience improvements. Run `node --test tests/*.test.cjs`. No source PDFs, exams, login details or student records are included.


### Focused student experience

Start at `#studentDashboard` or choose a topic on the living workbench. Four 20-question mock forms span the 40 checkpoints across the set; their immutable form IDs preserve attempts across reloads. Existing eight-question results remain supported. Twelve annotated examples explain strong and weak responses. The dashboard combines existing records and can back up/restore them together. Focused topic routes use `#topic-genetics-learn` (and evolution/rates/heat with explore/watch/practice/answers); `#objective-G22` opens a specific checkpoint.

`mock-bank.js` stores original expanded-paper questions and stimuli; `answer-bank.js` stores worked examples; `dashboard-core.js` aggregates evidence; `student-nav.js` manages focused views. No server or student account is required.

### Guided viewing

Watch & learn includes 58 video guides with objective buttons, timestamp jump links, focus prompts and quick checks with feedback. Video checks save first/latest answers, attempt counts and dates in this browser. The dashboard reports them separately from objective and exam progress and includes them in backup/restore. The revision plan recommends videos for missed mock objectives and incorrect video checks. Timing review and source limitations are documented in `SOURCES.md`. Run `node --test tests/*.test.cjs` to validate the full resource, including video coverage.

### Science missions and skill badges

Eight objective-linked missions combine a saved video check, the objective workshop, a model reflection and two original application questions. The second question unlocks at least 24 hours after the first correct application answer, using the device clock. Badges recognise this limited evidence, not an official grade or whole-topic mastery. Suggested missions prioritise due follow-ups and recorded weak areas; extension is labelled. Browser-local mission records are included in dashboard backup/restore. Older backups without missions preserve current mission records. Workbench gold milestones distinguish guided practice from earned badges and respect the animation toggle and reduced-motion setting.

### Cartoon badges and collection reward

The quests bar is the second main home section, directly below the living workbench. Each badge has original animated vector artwork. A progress wheel and eight-item collection line show earned badges and the remaining count. Earning all eight badges, including X-linked extension, unlocks a cartoon trophy celebration and a printable A4 voucher for one chocolate bar. The teacher verifies completion and signs redemption; browser-local progress is not a secure redemption ledger. All animations respect reduced motion and the existing animation toggle.
