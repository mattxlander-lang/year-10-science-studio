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

These are focused models, not complete courses or a substitute for the school exam checklist. Only the original three genetics activities currently record completion. Student drafts and progress stay in browser local storage; no backend, accounts or analytics are implemented in the source.

## Tests

```sh
node tests/models.test.cjs
node --check dist/remaining.js
node --check dist/labs.js
```

Numerical checks cover circuit conservation, motion and coasting, selection direction, electron counts and climate behaviour. Browser checks cover the new controls, equation feedback, sequence boundaries and narrow layouts.

## Source files

- `dist/index.html`: core study library and genetics activities.
- `dist/labs.js`, `dist/labs.css`: visual lab and shared styling.
- `dist/remaining.js`: eight additional topic explorers.
- `dist/science-models.js`: deterministic numerical teaching models.
- `tests/models.test.cjs`: model checks.
- `SOURCES.md`: resource coverage, scientific assumptions and limitations.

The hosted Site and this GitHub repository are separate destinations; a GitHub commit does not automatically redeploy the Site. For other static hosting, publish the contents of `dist/`.

No proprietary lesson PDFs, answer sheets, student records, credentials or browser exports are included. No affiliation with or endorsement by Impact, Stile or VCAA is implied.
