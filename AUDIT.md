# Student resource audit — implemented improvements, 4 November 2026

## What is now implemented

- **Broader assessment:** four fixed forms (Core A/B and Extension A/B), each with 20 questions: 16 auto checks and four written responses, 28 marks. Core practice time is 45 minutes; extension is 55, with optional 25% or 50% extra time. Both Core forms together sample all 30 core checkpoints; all four forms together sample all 40 checkpoints. A/B forms vary content and objective sampling; they are practice forms, not psychometrically calibrated equivalents.
- **Explicit coverage:** each submitted paper identifies sampled and unsampled objectives, missed marks and writing awaiting self-assessment. Missed items link directly into the matching objective. The older eight-question attempts remain readable with their original totals and deadlines.
- **One dashboard:** existing objective checks, topic-quiz results, cell-division checks, mock results and linked revision-plan check-offs feed one student overview. Next actions prioritise an active mock, pending written marking, then a missed objective. A checked workshop objective completed after the latest mock is identified as revised since that attempt. Different evidence types remain labelled; the dashboard does not invent a course mastery percentage.
- **Unified backup:** export/restore objectives, quizzes, mocks, plans and cell-division records as one local JSON file. Restore validates records, requires an explicit in-page replacement action, blocks replacement during an active mock, and preserves absolute deadlines. Records are browser-local and do not automatically sync.
- **Annotated responses:** 12 original worked examples compare weak and stronger answers, with an explanation for each of three marking points. They appear in focused topic views, relevant workshop entries and expanded mock marking guides. Answers stay hidden during an active mock.
- **Focused navigation:** the living workbench opens four topic views. Each has Learn & check, Visual models, Watch, Exam practice and Worked answers. Only the selected activity is shown; dashboard, mocks and revision plan have direct navigation. Existing section links and browser back/forward remain supported. Animations pause when their view is left.
- **Audit corrections:** fixed a navigation event that accidentally treated the page body as a topic button; improved dark-panel heading contrast; corrected the phylogeny written task and marking guide to match the A/(B,C) diagram. Only that objective's outdated written check-offs are invalidated, preserving its draft and other progress.

## Validation

Thirteen automated test groups pass, including legacy grading/timers/plans, all four new form blueprints and objective coverage, reload-stable question sets/deadlines, pending written evidence, dashboard aggregation and revision timing, and annotation structure. All scripts compile. Browser QA covered topic switching, hidden view isolation, worked-answer expansion, new-mock start/resume/reload/submit, partial self-marking, objective coverage, live dashboard updates, and an actual export/restore round trip. Dashboard and expanded annotations were checked at 390 × 844 with no horizontal overflow. Existing and new mock records were both restored. This is functional QA, not formal accessibility certification or a study of learning outcomes.

## Remaining worthwhile improvements

1. Teacher moderation and student trials: review difficulty and marking consistency, then observe several students completing the full journey.
2. Larger unseen question pool: these four forms broaden coverage, but repeated fixed questions can still reward recall. Add further diagram, graph and experimental-design variants after classroom feedback.
3. Video timestamps and prompts: add objective-specific viewing ranges, durations and a short retrieval question for each selected clip.
4. Accessibility testing: test keyboard-only use and screen-reader output with students, particularly the diagrams and timed assessment interface.
5. Optional accounts/sync only if needed: the current backup approach avoids student accounts; a future sync feature would require a separate privacy and school-data design decision.

## Resource and assessment limits

The supplied 2026 objective sheets determine scope. Electricity, Newton's laws and Earth/space remain excluded. The six supplied Stile extracts and 2025 exams informed original practice, rather than republication of source papers. The school Firefly resource listing and video metadata were reviewed; its presentation/worksheet downloads did not complete, so they remain school-sign-in links rather than independently audited imported content. The assessed practical still requires teacher instructions and assessment. Written scores are explicitly self-assessed. Simplified inheritance models state their assumptions; mock scores are not official school grades.

## Objective coverage map

IDs are site checkpoints derived from the supplied objectives, not official curriculum codes. Every row includes auto practice, an explanation task and its marking guide.

| ID | Level | Objective | Visual activity | Teaching reference |
|---|---|---|---|---|
| G01 | core | Cell structures and organelle functions | cells | 2025 EXT Q1; 2026 Genetics p1 |
| G02 | core | Chromosomes, genes and DNA | dna | 2026 learning objectives |
| G03 | core | The parts of a nucleotide | dna | 2026 learning objectives |
| G04 | core | DNA structure and complementary strands | dna | 2026 learning objectives |
| G05 | core | DNA instructions and proteins | protein | 2025 CORE short answer Q2 |
| G06 | core | Cell cycle: G1, S, G2 and division | cycle | 2025 CORE short answer Q1 |
| G07 | core | Mitosis: sequence and processes | mitosis | 2025 CORE Q1 and mitosis questions |
| G08 | core | Identify mitosis from a diagram | mitosis | 2025 CORE short answer Q1(d) |
| G09 | core | Draw labelled mitosis diagrams | mitosis | 2026 learning objectives |
| G10 | core | Mutagens and DNA damage | mutation | 2026 learning objectives |
| G11 | core | Consequences of mutation | mutation | 2026 learning objectives |
| G12 | core | Cancer and cell-cycle control | mutation | 2025 CORE short answer Q6 |
| G13 | core | Diploid to haploid cells | meiosis | 2026 learning objectives |
| G14 | core | Fertilisation restores diploidy | fertilisation | 2026 learning objectives |
| G15 | extension | Detailed meiosis stages | meiosis | 2025 EXT Q6; 2026 Genetics p1 |
| G16 | extension | Identify meiosis from a diagram | meiosis | 2026 learning objectives |
| G17 | extension | Draw labelled meiosis diagrams | meiosis | 2025 EXT Q6 |
| G18 | core | Gene mutations and karyotypes | karyotype | 2025 CORE short answer Q3 |
| G19 | core | Sex chromosomes and birth sex | fertilisation | 2025 CORE sex-chromosome MC; Q3 |
| G20 | core | Inherited and acquired traits | traits | 2026 learning objectives |
| G21 | core | Monohybrid crosses and probabilities | cross | 2025 CORE short answer Q4–5; use a fictional single-gene trait |
| G22 | extension | X-linked recessive crosses | sexlinked | 2025 EXT Q7; new presentation and worked model |
| G23 | extension | Codominant inheritance | codominance | 2025 EXT Q2 |
| G24 | core | Autosomal dominant and recessive pedigrees | pedigree | 2025 CORE short answer Q7–8 |
| G25 | extension | X-linked recessive pedigrees | pedigreeX | 2025 EXT Q7(b–c) |
| G26 | extension | Rough ER and ribosomes | cells | 2025 EXT Q3; bold organelles in 2026 Genetics p1 |
| E01 | core | Define a species | speciation | 2025 CORE short answer Q10(b) |
| E02 | core | Define evolution | selection | 2026 learning objectives |
| E03 | core | Phenotypic variation in populations | traits | 2026 learning objectives |
| E04 | core | Alleles and inherited differences | dna | 2026 learning objectives |
| E05 | core | Explain natural selection | selection | 2025 CORE short answer Q9 |
| E06 | extension | Genetic drift: bottlenecks and founders | drift | 2025 EXT Q4–5 and Q8 |
| E07 | extension | Gene flow | flow | 2025 EXT Q5; 2026 Term 4 objectives |
| E08 | core | Allopatric speciation | speciation | 2025 CORE MC20–21 and short answer Q11 |
| E09 | core | Read a phylogenetic tree | phylogeny | 2025 CORE MC22–23 and short answer Q10–11 |
| H01 | core | Conduction, convection and radiation | heat | 2025 CORE Q14; EXT Q12–13 |
| H02 | core | Plan the assessed physics investigation | investigation | 2026 Term 4 assessed Physics investigation; practice planning only |
| R01 | core | Kinetic and collision theories | rates | 2025 CORE MC26 and short answer Q13 |
| R02 | core | Rate factors and graph reasoning | rates | 2025 CORE MC24–26, Q12–13; EXT Q10 graph reasoning only |
| R03 | extension | Enzymes and activation energy | enzyme | 2025 EXT Q9; 2026 Term 4 extension enzymes |

## Guided video update — 4 November 2026

- Reviewed all 58 linked YouTube resources using visible chapter markers and available timestamped captions.
- Added linked objective tags, extension distinctions, focus prompts, timestamp jump links and a short check with feedback to every video.
- Added explicit qualification notes for misleading simplifications and out-of-scope sections.
- Preserved all existing links, topic navigation and assessment progress; no new persistent storage keys.
- Validated guidance coverage and objective references, question validity, dependency order and exclusions. Existing 13 test groups remain passing; 2 new video test groups pass.
- Browser checks: incorrect/correct feedback, objective link to G26, generated timestamp URLs, desktop cards, and 390px mobile layout without horizontal overflow.

## Saved video checks and recommendations — 4 November 2026

- Added validated, question-versioned browser storage for first/latest video-check answers, attempts and last checked date; stale or malformed records are ignored. Storage failures retain session results with a warning.
- Added a dashboard summary and topic counts, plus direct links to revisit unsuccessful checks. No video activity alters objective or mock scores.
- Added up to six recommendations from the selected mock’s marked objective gaps and unsuccessful video checks. Pending writing and unattempted videos are not treated as weaknesses. Legacy mocks without objective evidence use explicitly labelled topic recommendations.
- Included video records in unified backup/restore; backups made before this addition preserve existing video results.
- Verified 20 automated test groups; browser-tested persistence after reload, wrong-to-correct retry totals, no-mock recommendations, mock-specific recommendations, exact-video navigation, backup export, new-backup restoration and old-backup compatibility on an isolated local origin.

## Missions release — 5 November 2026

- Added eight missions across all four retained topic areas, eight skill badges and sixteen fresh application/follow-up questions. Extension is clearly labelled.
- Added three personalised dashboard suggestions, prioritising due follow-ups, marked mock gaps and unsuccessful linked video checks. Scheduled follow-ups do not crowd out actionable suggestions.
- Mission challenge requires linked objective completion, a correct video check and a saved model reflection. Badge requires both mission questions correct with at least 24 hours between them. Reflection length is explicitly a participation check, not grading.
- Added saved mission records to unified backup/restore, preserving current mission records when restoring legacy backups. Award state is cleaned against mission version, valid answers and timing.
- Added gold workbench practice/badge milestones with restrained glow animation; existing motion controls and reduced-motion preferences disable the effect.
- All 24 automated test groups pass. Browser checks covered prerequisite gating, reflection persistence, initial challenge, scheduled follow-up, backup restoration, delayed follow-up and badge persistence using an isolated time-shifted test backup, dashboard/workbench updates, and 390px layout with no horizontal overflow. No test progress was written to the public site.

## Cartoon collection and classroom reward — 5 November 2026

- Moved quests into a dedicated second home section below the workbench, retaining dashboard and saved-progress integration without duplicating the bar.
- Added eight original inline SVG cartoon badge illustrations plus a trophy character; no external image service or student data transfer is involved.
- Added an accessible earned-badge progress wheel and eight-item completion line. Guided practice alone does not increment the earned count.
- Trophy animation and print control unlock only when all eight distinct badges are demonstrated, including extension. Replays, confetti and badge motion respect reduced motion and the existing motion toggle.
- Print handler regenerates eligibility at click time and creates a single A4 chocolate-bar voucher with student/class lines and teacher verification/redemption fields. No automatic redemption tracking is claimed.
- 28 automated test groups passed. Browser checks verified 0/8 locked state, 8/8 completion via isolated test backup, eight cartoons, second-section placement, 390px layout without overflow and motion-off suppression.
- Native print-dialog automation stalled in the in-app browser. The actual print handler was additionally executed in an isolated DOM harness: complete collection generated the voucher and an incomplete collection was blocked. Its generated output was visually checked with print media at the 688px A4 printable width; height was 879px within the available page. No physical print or public-site test progress was created.
