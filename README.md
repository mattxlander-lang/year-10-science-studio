# Year 10 Science Studio

An interactive revision prototype for Victorian Year 10 Science. Original HTML, CSS and SVG models informed by selected Impact Curriculum unit plans and supplied Stile lesson exports.

## Open the library

Live private site: https://science-study-library-2026-lab.opensiren64.chatgpt.site/#moreLabs

Serve the static directory locally:

```sh
python3 -m http.server 8765 --directory dist
```

Then open http://127.0.0.1:8765 . No installation or build is needed. The downloadable standalone HTML works offline.

## Included activities

- Mitosis, meiosis and Punnett-square revision activities, quizzes and self-assessment.
- Crossing over, DNA organisation, temperature and reaction rates, heat transfer.
- Electricity: ideal series/parallel resistor circuits, main switch, variable supply and resistors, current and voltage readouts.
- Newton’s laws: force/mass controls, coasting after release, velocity graph, two-cart force pairs.
- Evolution: one-locus selection over generations, reversible environmental pressure, allele-frequency graph.
- Periodic patterns: neutral atoms 1–20, electron shells and outer electrons.
- Big Bang evidence: expansion, observer choice and cosmological redshift.
- Global change: albedo and a one-layer radiative-equilibrium model, with explicit limitations.
- Chemical reactions: three balancing challenges and atom accounting.
- Immunology: a supplementary five-stage immune-memory sequence.

These are focused models, not complete courses or a substitute for the school exam checklist. The exam workspace records first-check results, current quiz runs, best completed runs, drafts and written self-assessments for 11 topics. The original three genetics activities retain their separate completion checks. Student drafts and progress stay in browser local storage; no backend, accounts or analytics are implemented in the source.

## Tests

```sh
node tests/models.test.cjs
node tests/exam.test.cjs
node tests/mock.test.cjs
node tests/plan.test.cjs
node --check dist/remaining.js
node --check dist/labs.js
```

Numerical checks cover circuit conservation, motion and coasting, selection direction, electron counts and climate behaviour. Browser checks cover the new controls, equation feedback, sequence boundaries and narrow layouts.

## Exam practice

66 original/adapted questions: 44 auto-marked items and 22 written responses. Each of 11 topics has core and extension practice, feedback and a source note. Progress stays in this browser; changing device/browser does not transfer it. Use the JSON export to keep a readable record. Written marks are self-assessed, not AI-graded. Original exam documents are not redistributed.

## Timed mocks

- Core: 22 questions, 44 marks, 55 minutes.
- Extension: 22 questions, 55 marks, 70 minutes.
- Both sample all 11 topics from the existing question bank; these are fixed practice papers.
- Optional 25%/50% extra time, absolute-deadline countdown, autosave, flags and early/automatic submission.
- Topic breakdown, missing-point revision suggestions and direct practice links.
- Written marks remain pending until self-assessment; combined scores explicitly include those marks.
- Current attempt plus six archived results stay in the same browser. Use one tab per attempt.

Open the mocks at `#mockExams`. The durations are practice settings, not official school exam timings.

## Source files

- `dist/index.html`: core study library and genetics activities.
- `dist/labs.js`, `dist/labs.css`: visual lab and shared styling.
- `dist/remaining.js`: eight additional topic explorers.
- `dist/science-models.js`: deterministic numerical teaching models.
- `dist/exam-bank.js`: question content and practice marking guides.
- `dist/exam-core.js`: grading, validation and progress rules.
- `dist/exam.js`, `dist/exam.css`: exam workspace UI.
- `dist/mock-core.js`, `dist/mock.js`, `dist/mock.css`: timed papers, deadlines, results and revision suggestions.
- `tests/models.test.cjs`, `tests/exam.test.cjs`, `tests/mock.test.cjs`: model and assessment checks.
- `SOURCES.md`: resource coverage, scientific assumptions and limitations.

The hosted Site and this GitHub repository are separate destinations; a GitHub commit does not automatically redeploy the Site. For other static hosting, publish the contents of `dist/`.

No proprietary lesson PDFs, answer sheets, student records, credentials or browser exports are included. No affiliation with or endorsement by Impact, Stile or VCAA is implied.

## Personalised revision plans

Open `#revisionPlan` or choose “Build my revision plan” from mock results. The latest completed mock is selected automatically; older saved results remain selectable. Known missed marks prioritise topics, while unmarked writing is flagged for marking first. Each plan links to the matching animation, a fresh topic quiz, and written marking guides.

Choose estimated 15-, 30- or 45-minute sessions. Model exploration and written revision use explicit student check-offs. Completing a linked fresh four-question quiz with at least 3/4 marks completes its quiz step automatically. Records are saved separately for each mock in this browser; they do not sync across devices. Completion records practice, not mastery. New mock results create a new plan. Use one tab for revision to avoid conflicting local changes.

`dist/plan-core.js` holds prioritisation/session rules; `dist/plan.js` and `dist/plan.css` provide the interface. `tests/plan.test.cjs` checks pending marks, priorities, time budgets and completion thresholds.
