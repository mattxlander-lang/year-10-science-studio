/* Original objective practice informed by supplied objectives, exams and Stile extracts. */
(function(root){const data=[
  {
    "id": "G01",
    "title": "Cell structures and organelle functions",
    "topic": "genetics",
    "level": "core",
    "model": "cells",
    "learn": "The nucleus contains most DNA and helps control cell activity. Cytoplasm is the medium for many reactions. Mitochondria carry out aerobic respiration, transferring energy to ATP. Centrioles help organise the spindle in animal cells.",
    "question": "Which organelle is especially abundant in an active muscle cell?",
    "options": [
      "Mitochondria",
      "Cell wall",
      "Chloroplasts"
    ],
    "correct": 0,
    "feedback": "Muscle contraction needs ATP. Mitochondria support ATP production through aerobic respiration.",
    "task": "Sketch an animal cell and label the nucleus, cytoplasm, mitochondria and centrioles. Give a function for each.",
    "rubric": [
      "Place and label all four structures.",
      "Link nucleus to DNA/control and cytoplasm to reactions.",
      "Link mitochondria to respiration/ATP and centrioles to spindle organisation."
    ],
    "source": "2025 EXT Q1; 2026 Genetics p1"
  },
  {
    "id": "G02",
    "title": "Chromosomes, genes and DNA",
    "topic": "genetics",
    "level": "core",
    "model": "dna",
    "learn": "DNA is a molecule that stores genetic information. A gene is a section of DNA. A chromosome is a long DNA molecule associated with proteins; after replication it has two sister chromatids, each containing DNA.",
    "question": "Which statement is correct?",
    "options": [
      "DNA is made from whole cells",
      "A gene and a chromosome always mean the same thing",
      "A gene is a section of DNA"
    ],
    "correct": 2,
    "feedback": "A chromosome contains many genes along its DNA. These are different levels of organisation.",
    "task": "Explain the relationship between a chromosome, a gene and DNA.",
    "rubric": [
      "Define DNA as the information-carrying molecule.",
      "Describe a chromosome as packaged DNA with proteins.",
      "Identify a gene as a section of DNA."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G03",
    "title": "The parts of a nucleotide",
    "topic": "genetics",
    "level": "core",
    "model": "dna",
    "learn": "One DNA nucleotide consists of deoxyribose sugar, a phosphate group and a nitrogen-containing base. The base is adenine, thymine, cytosine or guanine.",
    "question": "Which set forms one DNA nucleotide?",
    "options": [
      "Two complete chromosomes",
      "Sugar, phosphate and base",
      "Amino acid, lipid and glucose"
    ],
    "correct": 1,
    "feedback": "Deoxyribose, phosphate and a base form one DNA nucleotide.",
    "task": "Draw and label one DNA nucleotide.",
    "rubric": [
      "Label deoxyribose sugar.",
      "Label phosphate.",
      "Label one nitrogen-containing base."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G04",
    "title": "DNA structure and complementary strands",
    "topic": "genetics",
    "level": "core",
    "model": "dna",
    "learn": "DNA has two antiparallel strands twisted into a double helix. Sugar and phosphate form each backbone. Hydrogen bonds join complementary bases: A with T, C with G. Antiparallel means the strands run in opposite directions.",
    "question": "The complementary sequence to A–C–G–T is:",
    "options": [
      "T–G–C–A",
      "A–C–G–T",
      "U–G–C–A"
    ],
    "correct": 0,
    "feedback": "Apply A–T and C–G at each position. DNA uses thymine, not uracil.",
    "task": "Draw four DNA base pairs. Label backbones, bases, hydrogen bonds and opposite strand directions.",
    "rubric": [
      "Show A–T and C–G pairing.",
      "Label sugar–phosphate backbones and hydrogen bonds.",
      "Show two opposite strand directions and describe the double helix."
    ],
    "source": "2026 learning objectives",
    "extra": [
      {
        "question": "The DNA strand shown left to right is 5′–GATTAC–3′. What is its complementary strand aligned beneath it?",
        "options": [
          "5′–CTAATG–3′",
          "3′–CTAATG–5′",
          "3′–GATTAC–5′"
        ],
        "correct": 1,
        "feedback": "Complementary bases pair G–C and A–T. The aligned strands run in opposite directions.",
        "source": "Stile Genetics pp32–33"
      }
    ]
  },
  {
    "id": "G05",
    "title": "DNA instructions and proteins",
    "topic": "genetics",
    "level": "core",
    "model": "protein",
    "learn": "Proteins are chains of amino acids. The order of DNA bases provides information used to determine amino-acid order. A working RNA copy carries this information to a ribosome, where amino acids are joined. Detailed codon memorisation is not needed here.",
    "question": "What determines the amino-acid order of a protein?",
    "options": [
      "The size of the nucleus alone",
      "The number of mitochondria alone",
      "Information in the DNA base sequence"
    ],
    "correct": 2,
    "feedback": "DNA sequence carries the information; ribosomes assemble the amino-acid chain using an RNA copy.",
    "task": "Explain how DNA is involved in producing a protein.",
    "rubric": [
      "DNA base order stores information.",
      "An RNA copy carries information to a ribosome.",
      "Amino acids are joined in a specified order to form a protein."
    ],
    "source": "2025 CORE short answer Q2"
  },
  {
    "id": "G06",
    "title": "Cell cycle: G1, S, G2 and division",
    "topic": "genetics",
    "level": "core",
    "model": "cycle",
    "learn": "G1 involves growth and normal activity. DNA is copied in S phase. G2 involves preparation and checking before division. Mitosis divides the nucleus; cytokinesis separates the cytoplasm. A cell entering meiosis also copies its DNA first, then undergoes two divisions.",
    "question": "When is DNA normally copied before division?",
    "options": [
      "Only after cytokinesis",
      "S phase",
      "Every stage of mitosis"
    ],
    "correct": 1,
    "feedback": "DNA is copied once in S phase. Copying DNA does not immediately double the chromosome count.",
    "task": "Describe the sequence G1 → S → G2 → mitosis → cytokinesis.",
    "rubric": [
      "State growth/activity in G1 and DNA copying in S.",
      "State preparation/checking in G2.",
      "Distinguish nuclear division from cytoplasmic division."
    ],
    "source": "2025 CORE short answer Q1"
  },
  {
    "id": "G07",
    "title": "Mitosis: sequence and processes",
    "topic": "genetics",
    "level": "core",
    "model": "mitosis",
    "learn": "Prophase: chromosomes condense and spindle forms. Metaphase: chromosomes line up individually at the equator. Anaphase: sister chromatids separate. Telophase: nuclei reform. Cytokinesis produces two cells, preserving chromosome number.",
    "question": "During anaphase of mitosis:",
    "options": [
      "Sister chromatids separate",
      "Homologous pairs exchange segments",
      "DNA is first replicated"
    ],
    "correct": 0,
    "feedback": "Sister chromatids separate to opposite poles. DNA replication happened before mitosis.",
    "task": "Explain the events in prophase, metaphase, anaphase and telophase.",
    "rubric": [
      "Put the four phases in the correct order.",
      "Describe alignment and chromatid separation.",
      "Describe condensation/spindle formation and nuclear reformation."
    ],
    "source": "2025 CORE Q1 and mitosis questions"
  },
  {
    "id": "G08",
    "title": "Identify mitosis from a diagram",
    "topic": "genetics",
    "level": "core",
    "model": "mitosis",
    "learn": "Use the chromosome arrangement to identify a stage: condensed chromosomes, aligned chromosomes, separating chromatids or re-forming nuclei. Identify the evidence rather than relying on cell shape.",
    "question": "A cell shows sister chromatids moving toward opposite poles. Which phase is shown?",
    "options": [
      "Metaphase",
      "Interphase",
      "Anaphase"
    ],
    "correct": 2,
    "feedback": "Moving chromatids at opposite ends indicate anaphase, not the central alignment of metaphase.",
    "task": "Pause the mitosis sequence at two different stages. Name each stage and describe the visible evidence.",
    "rubric": [
      "Give two correct phase names.",
      "Identify a specific chromosome arrangement for each.",
      "Distinguish alignment from separation."
    ],
    "source": "2025 CORE short answer Q1(d)"
  },
  {
    "id": "G09",
    "title": "Draw labelled mitosis diagrams",
    "topic": "genetics",
    "level": "core",
    "model": "mitosis",
    "learn": "Keep chromosome number consistent. For a model with 2n = 4, draw four replicated chromosomes at metaphase, then separate sister chromatids so each future nucleus receives four chromosomes. Label poles, spindle and chromosomes.",
    "question": "A starting cell has 2n = 4. Each daughter cell after mitosis normally has:",
    "options": [
      "8 chromosomes",
      "4 chromosomes",
      "2 chromosomes"
    ],
    "correct": 1,
    "feedback": "Mitosis preserves chromosome number. Replication creates sister chromatids before separation.",
    "task": "On paper, draw and label metaphase, anaphase and the two products for 2n = 4.",
    "rubric": [
      "Show four chromosomes at metaphase.",
      "Show sister chromatids separating and four chromosomes in each product.",
      "Label chromosomes, spindle and daughter cells."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G10",
    "title": "Mutagens and DNA damage",
    "topic": "genetics",
    "level": "core",
    "model": "mutation",
    "learn": "A mutagen is an agent that increases the chance of DNA change. UV radiation and certain chemicals can damage DNA; some viruses can disrupt genetic material or its regulation. Damage can be repaired, so exposure does not guarantee a permanent mutation.",
    "question": "Which statement about UV exposure is best?",
    "options": [
      "It can damage DNA and increase mutation risk",
      "It changes DNA only when a cell needs a useful trait",
      "It always causes the same mutation"
    ],
    "correct": 0,
    "feedback": "Mutagens increase risk; mutations are not directed by what an organism needs.",
    "task": "Define mutagen and explain one example.",
    "rubric": [
      "Define an agent that increases mutation risk.",
      "Name UV, a suitable chemical or certain viruses.",
      "Explain DNA damage and that repair may prevent a lasting change."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G11",
    "title": "Consequences of mutation",
    "topic": "genetics",
    "level": "core",
    "model": "mutation",
    "learn": "A mutation is a DNA change. It may be neutral, harmful or beneficial in a particular environment. Some changes alter protein structure or gene regulation; others have little observable effect. Only changes entering the reproductive lineage can be inherited by offspring.",
    "question": "Must every mutation change an organism’s phenotype?",
    "options": [
      "Yes; every mutation is fatal",
      "Yes; every mutation is beneficial",
      "No; some have little or no observable effect"
    ],
    "correct": 2,
    "feedback": "Consequences depend on where the change occurs and its effect on information or regulation.",
    "task": "Explain why mutations can have different consequences.",
    "rubric": [
      "Identify neutral, harmful and potentially beneficial effects.",
      "Link some mutations to protein or regulatory changes.",
      "Distinguish somatic changes from changes that can be inherited."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G12",
    "title": "Cancer and cell-cycle control",
    "topic": "genetics",
    "level": "core",
    "model": "mutation",
    "learn": "Mutations affecting growth-control and DNA-repair mechanisms can allow uncontrolled cell division. A benign tumour remains local; a malignant tumour invades surrounding tissue and may spread. Not every mutation or tumour is cancer.",
    "question": "A malignant tumour differs from a benign tumour because it:",
    "options": [
      "Must be caused by one specific mutagen",
      "Can invade tissue and spread",
      "Contains no dividing cells"
    ],
    "correct": 1,
    "feedback": "Malignancy involves invasion and potential spread; benign tumours remain local.",
    "task": "Explain cancer as a malfunction of cell-cycle control and distinguish benign from malignant.",
    "rubric": [
      "Link altered control to excessive cell division.",
      "State that benign tumours remain local.",
      "State that malignant tumours invade and may spread."
    ],
    "source": "2025 CORE short answer Q6"
  },
  {
    "id": "G13",
    "title": "Diploid to haploid cells",
    "topic": "genetics",
    "level": "core",
    "model": "meiosis",
    "learn": "Diploid cells have two sets of chromosomes, one from each parental origin. Haploid cells have one set. Meiosis reduces the number: a 2n = 4 cell produces haploid products with n = 2. The detailed stages are extension.",
    "question": "A diploid cell has 10 chromosomes. A normal gamete has:",
    "options": [
      "5",
      "10",
      "20"
    ],
    "correct": 0,
    "feedback": "A gamete contains one chromosome from each homologous pair: half the diploid number.",
    "task": "Draw a simplified 2n = 4 cell forming haploid products with n = 2.",
    "rubric": [
      "Show two homologous pairs initially.",
      "Show one member of each pair in each haploid product.",
      "Label diploid, haploid and chromosome numbers."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G14",
    "title": "Fertilisation restores diploidy",
    "topic": "genetics",
    "level": "core",
    "model": "fertilisation",
    "learn": "Fertilisation joins haploid gametes. In a simplified human model, an egg with 23 chromosomes and a sperm with 23 form a diploid zygote with 46. Chromosomes from two parental origins become paired sets.",
    "question": "Fertilisation combines two n = 3 gametes. The zygote has:",
    "options": [
      "3 chromosomes",
      "12 chromosomes",
      "6 chromosomes"
    ],
    "correct": 2,
    "feedback": "The two haploid sets combine: 3 + 3 = 6.",
    "task": "Explain why meiosis and fertilisation together maintain chromosome number across generations.",
    "rubric": [
      "Meiosis halves chromosome number in gametes.",
      "Fertilisation joins two haploid sets.",
      "The diploid number is restored rather than doubling each generation."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G15",
    "title": "Detailed meiosis stages",
    "topic": "genetics",
    "level": "extension",
    "model": "meiosis",
    "learn": "DNA replicates once before meiosis. In prophase I homologues pair and crossing over may occur. Metaphase I aligns homologous pairs; anaphase I separates homologues. Meiosis II separates sister chromatids without another round of DNA replication. Telophase I and cytokinesis form two haploid cells with replicated chromosomes. Prophase II prepares new spindles; metaphase II aligns individual chromosomes. Anaphase II separates sisters; telophase II and cytokinesis complete four haploid products.",
    "question": "What separates in anaphase I?",
    "options": [
      "The two DNA strands of every helix",
      "Homologous chromosomes",
      "Sister chromatids in every chromosome"
    ],
    "correct": 1,
    "feedback": "Homologues separate in meiosis I; sister chromatids separate in meiosis II.",
    "task": "Compare meiosis I and meiosis II, including replication and crossing over.",
    "rubric": [
      "One DNA replication precedes the two divisions.",
      "Homologues pair/cross over and separate in meiosis I.",
      "Sister chromatids separate in meiosis II."
    ],
    "source": "2025 EXT Q6; 2026 Genetics p1"
  },
  {
    "id": "G16",
    "title": "Identify meiosis from a diagram",
    "topic": "genetics",
    "level": "extension",
    "model": "meiosis",
    "learn": "Paired homologues aligned at the equator identify metaphase I. Homologues moving apart with chromatids still joined indicate anaphase I. Chromatids separating in haploid cells indicate anaphase II.",
    "question": "Homologous pairs line up together at the equator. This is:",
    "options": [
      "Metaphase I",
      "Metaphase II",
      "Cytokinesis"
    ],
    "correct": 0,
    "feedback": "Homologous pairs align together in metaphase I; individual chromosomes align in metaphase II.",
    "task": "Use the sequence to identify metaphase I and anaphase II. Explain the visual evidence.",
    "rubric": [
      "Identify pairs aligned in metaphase I.",
      "Identify sister chromatids separating in anaphase II.",
      "Distinguish homologues from sister chromatids."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G17",
    "title": "Draw labelled meiosis diagrams",
    "topic": "genetics",
    "level": "extension",
    "model": "meiosis",
    "learn": "Use a small chromosome number and keep parental origins distinct. Show paired replicated homologues, two haploid cells after the first division, then four haploid products after chromatids separate. Crossing over exchanges corresponding segments of non-sister chromatids.",
    "question": "Which event creates new combinations of existing alleles?",
    "options": [
      "Every chromosome disappearing",
      "DNA replication after meiosis I",
      "Crossing over between non-sister chromatids"
    ],
    "correct": 2,
    "feedback": "Crossing over recombines existing alleles; mutation is the source of new alleles.",
    "task": "Draw labelled meiosis for 2n = 4, including one crossover and four n = 2 products.",
    "rubric": [
      "Show paired homologues and exchange between non-sister chromatids.",
      "Show homologue separation before chromatid separation.",
      "Show four haploid products and label chromosome numbers."
    ],
    "source": "2025 EXT Q6"
  },
  {
    "id": "G18",
    "title": "Gene mutations and karyotypes",
    "topic": "genetics",
    "level": "core",
    "model": "karyotype",
    "learn": "Gene-level changes affect the DNA sequence at a gene. Chromosomal changes affect chromosome number or structure. A karyotype arranges chromosomes by size and features, usually into homologous pairs. Trisomy means three copies of a chromosome. A karyotype cannot reveal every gene-level mutation.",
    "question": "A karyotype shows three copies of chromosome 21. This is:",
    "options": [
      "Proof of a particular single-base mutation",
      "Trisomy",
      "A normal homologous pair"
    ],
    "correct": 1,
    "feedback": "Trisomy is a numerical chromosome change. Small gene changes may be invisible in a karyotype.",
    "task": "Compare gene-level and chromosome-level mutations. Explain what a karyotype can and cannot show.",
    "rubric": [
      "Distinguish sequence-level changes from chromosome number/structure changes.",
      "Identify trisomy from three copies.",
      "State that a normal-looking karyotype does not rule out gene-level mutations."
    ],
    "source": "2025 CORE short answer Q3"
  },
  {
    "id": "G19",
    "title": "Sex chromosomes and birth sex",
    "topic": "genetics",
    "level": "core",
    "model": "fertilisation",
    "learn": "In the simplified typical XX/XY model, eggs carry X and sperm carry X or Y. Fertilisation can produce XX or XY. Karyotypes show chromosome complements; they do not establish gender identity or capture all variations in sex development.",
    "question": "In this typical model, which gamete determines whether the zygote is XX or XY?",
    "options": [
      "The sperm, carrying X or Y",
      "The egg, always carrying Y",
      "Neither gamete contributes chromosomes"
    ],
    "correct": 0,
    "feedback": "An X-bearing egg can combine with an X-bearing or Y-bearing sperm. The model has biological exceptions.",
    "task": "Draw an XX × XY cross and explain what a karyotype reveals.",
    "rubric": [
      "Show X-bearing eggs and X- or Y-bearing sperm.",
      "Show expected XX and XY outcomes in a 1:1 ratio.",
      "Distinguish chromosome complement from gender identity and acknowledge variation."
    ],
    "source": "2025 CORE sex-chromosome MC; Q3"
  },
  {
    "id": "G20",
    "title": "Inherited and acquired traits",
    "topic": "genetics",
    "level": "core",
    "model": "traits",
    "learn": "Inherited variation involves genetic differences passed through reproduction. Acquired characteristics develop during life, such as a scar or learned skill. Phenotype reflects genes and environment; a complex human trait should not automatically be treated as a one-gene dominant/recessive trait.",
    "question": "Which example is clearly acquired?",
    "options": [
      "An inherited allele",
      "A chromosome received at fertilisation",
      "A scar from an injury"
    ],
    "correct": 2,
    "feedback": "An injury scar develops during life. It is not a DNA allele transmitted to offspring.",
    "task": "Compare inherited and acquired variation with one example of each.",
    "rubric": [
      "Define inherited genetic variation.",
      "Define acquired variation with a suitable example.",
      "Explain that phenotype can involve both genes and environment."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "G21",
    "title": "Monohybrid crosses and probabilities",
    "topic": "genetics",
    "level": "core",
    "model": "cross",
    "learn": "For a fictional trait with complete dominance, Aa × Aa gives AA, Aa, Aa and aa. Genotypes occur in a 1:2:1 ratio; dominant:recessive phenotypes occur in a 3:1 ratio. The recessive probability is 1/4 = 25%. These are expectations for each offspring, not guaranteed family totals.",
    "question": "For Aa × aa, what fraction of offspring is expected to be aa?",
    "options": [
      "All",
      "1/2",
      "1/4"
    ],
    "correct": 1,
    "feedback": "The Aa parent supplies A or a; the aa parent supplies a. Aa and aa are equally likely.",
    "task": "Draw Aa × aa. Give genotype and phenotype ratios, fractions and percentages.",
    "rubric": [
      "Use A/a and a/a gametes correctly.",
      "Give Aa:aa = 1:1 and the corresponding phenotype ratio.",
      "Convert to 1/2 and 50% for each outcome."
    ],
    "source": "2025 CORE short answer Q4–5; use a fictional single-gene trait",
    "extra": [
      {
        "question": "In an Aa × Aa grid, the box where two a gametes meet is incorrectly labelled Aa. What should it be?",
        "options": [
          "AA",
          "Aa",
          "aa"
        ],
        "correct": 2,
        "feedback": "One allele comes from each gamete. a + a gives aa. The full cross is 1 AA : 2 Aa : 1 aa.",
        "source": "Stile Genetics Q10"
      }
    ]
  },
  {
    "id": "G22",
    "title": "X-linked recessive crosses",
    "topic": "genetics",
    "level": "extension",
    "model": "sexlinked",
    "learn": "For an X-linked recessive allele, a typical XY individual with XᵃY is affected because there is no second copy of that X-linked gene on Y. An XᴬXᵃ individual is an unaffected carrier in this model. State whether a probability is among sons, among daughters, or among all offspring.",
    "question": "XᵃXᵃ × XᴬY: what proportion of sons is affected?",
    "options": [
      "All sons",
      "Half of sons",
      "No sons"
    ],
    "correct": 0,
    "feedback": "Every son receives Y from the father and Xᵃ from the mother. Daughters receive Xᴬ from the father and are carriers.",
    "task": "Draw XᵃXᵃ × XᴬY. State the outcomes separately for sons and daughters.",
    "rubric": [
      "Label maternal Xᵃ gametes and paternal Xᴬ/Y gametes.",
      "All sons are XᵃY and affected.",
      "All daughters are XᴬXᵃ carriers and unaffected in this model."
    ],
    "source": "2025 EXT Q7; new presentation and worked model",
    "extra": [
      {
        "question": "A carrier mother XAXa and affected father XaY have a child. What is the probability that this child is an affected son?",
        "options": [
          "1/2",
          "1/4",
          "3/4"
        ],
        "correct": 1,
        "feedback": "Two of the four outcomes are sons, and one of those two is affected: 1/4 of all offspring, or 1/2 among sons.",
        "source": "Stile Genetics Q12"
      }
    ]
  },
  {
    "id": "G23",
    "title": "Codominant inheritance",
    "topic": "genetics",
    "level": "extension",
    "model": "codominance",
    "learn": "Codominance means both alleles are expressed in a heterozygote. For a fictional feather pattern, BB is black, WW is white and BW shows both black and white feathers. It is not blending into grey.",
    "question": "BW × WW produces what percentage of BW offspring?",
    "options": [
      "25%",
      "100%",
      "50%"
    ],
    "correct": 2,
    "feedback": "The BW parent supplies B or W; the WW parent supplies W. Half are BW and half WW.",
    "task": "Draw BW × WW and explain the genotype and phenotype outcomes.",
    "rubric": [
      "Show correct gametes.",
      "Give BW:WW = 1:1, each 50%.",
      "Explain that BW expresses both colours rather than blending them."
    ],
    "source": "2025 EXT Q2"
  },
  {
    "id": "G24",
    "title": "Autosomal dominant and recessive pedigrees",
    "topic": "genetics",
    "level": "core",
    "model": "pedigree",
    "learn": "Pedigrees show family relationships and phenotype. Under a fully penetrant single-gene model, two unaffected parents with an affected child support recessive inheritance: both parents must be carriers. A dominant affected parent with an unaffected child must be heterozygous. Small pedigrees may fit more than one model.",
    "question": "Two unaffected parents have an affected child for a known autosomal recessive trait. The parents must be:",
    "options": [
      "aa and aa",
      "Aa and Aa",
      "AA and AA"
    ],
    "correct": 1,
    "feedback": "An affected aa child received a from each unaffected parent. Both must therefore be Aa.",
    "task": "Use the recessive pedigree: infer the parents’ genotypes and the possible genotype(s) of an unaffected sibling.",
    "rubric": [
      "Both parents are Aa; the affected child is aa.",
      "An unaffected sibling may be AA or Aa; appearance alone cannot distinguish them.",
      "Explain the inference using allele transmission, not only skipped generations."
    ],
    "source": "2025 CORE short answer Q7–8"
  },
  {
    "id": "G25",
    "title": "X-linked recessive pedigrees",
    "topic": "genetics",
    "level": "extension",
    "model": "pedigreeX",
    "learn": "In the typical XX/XY model, fathers pass Y to sons and X to daughters. Therefore an X-linked allele is not transmitted directly from father to son. An unaffected mother with an affected son must carry the allele under the stated model, assuming no new mutation.",
    "question": "An affected father XᵃY and non-carrier mother XᴬXᴬ have daughters who are:",
    "options": [
      "All carriers",
      "All affected",
      "All non-carriers"
    ],
    "correct": 0,
    "feedback": "Each daughter receives Xᵃ from her father and Xᴬ from her mother. Sons receive their father’s Y.",
    "task": "Explain how two unaffected parents can have an affected son with an X-linked recessive condition.",
    "rubric": [
      "Mother can be XᴬXᵃ and father XᴬY.",
      "A son receives Y from the father and may receive Xᵃ from the mother.",
      "The son is XᵃY; there is no father-to-son transmission of the X-linked allele."
    ],
    "source": "2025 EXT Q7(b–c)",
    "extra": [
      {
        "question": "For a fully penetrant X-linked recessive trait, an affected daughter has an unaffected mother. What follows, assuming no new mutation?",
        "options": [
          "Father is unaffected and mother is not a carrier",
          "Father is affected and mother is a carrier",
          "Only the father contributed her X chromosomes"
        ],
        "correct": 1,
        "feedback": "The daughter needs Xa from each parent. Her unaffected mother must be XAXa; her father must be XaY.",
        "source": "Stile Genetics Q13"
      }
    ]
  },
  {
    "id": "G26",
    "title": "Rough ER and ribosomes",
    "topic": "genetics",
    "level": "extension",
    "model": "cells",
    "learn": "Ribosomes assemble proteins from amino acids. Ribosomes attached to rough endoplasmic reticulum help make proteins destined for secretion or membranes; the ER supports processing and transport. A protein-secreting cell often has abundant rough ER.",
    "question": "A cell secretes large amounts of protein. Which structures are especially prominent?",
    "options": [
      "Only centrioles",
      "Only the cell membrane",
      "Ribosomes and rough ER"
    ],
    "correct": 2,
    "feedback": "Protein synthesis occurs at ribosomes; rough ER supports the pathway for many exported proteins.",
    "task": "Explain why a protein-secreting cell has abundant ribosomes and rough ER.",
    "rubric": [
      "Link ribosomes to amino-acid assembly.",
      "Link rough ER to processing/transport of many secreted proteins.",
      "Relate organelle abundance to the cell’s function."
    ],
    "source": "2025 EXT Q3; bold organelles in 2026 Genetics p1",
    "extra": [
      {
        "question": "A cell exports large amounts of a protein. Which structures are directly involved in making and processing it?",
        "options": [
          "Ribosomes and rough ER",
          "Only the cell membrane",
          "Only centrioles"
        ],
        "correct": 0,
        "feedback": "Extension link: ribosomes assemble proteins; rough ER supports processing and transport of many exported proteins.",
        "source": "Stile Cells pp33–35; Genetics pp32–33"
      }
    ]
  },
  {
    "id": "E01",
    "title": "Define a species",
    "topic": "evolution",
    "level": "core",
    "model": "speciation",
    "learn": "Under the biological species concept, members of a species can interbreed and produce fertile offspring. Appearance alone is not decisive. This definition has limits for fossils, asexual organisms and some hybridising groups.",
    "question": "Which evidence best supports membership of the same species under this definition?",
    "options": [
      "Living on the same island",
      "Interbreeding produces fertile offspring",
      "Identical body size"
    ],
    "correct": 1,
    "feedback": "Fertile offspring are central to this species definition; shared appearance or location is insufficient.",
    "task": "Define species and explain why looking similar is not enough.",
    "rubric": [
      "State interbreeding.",
      "State production of fertile offspring.",
      "Explain that appearance alone does not demonstrate reproductive compatibility."
    ],
    "source": "2025 CORE short answer Q10(b)"
  },
  {
    "id": "E02",
    "title": "Define evolution",
    "topic": "evolution",
    "level": "core",
    "model": "selection",
    "learn": "Evolution is change in inherited characteristics of populations across generations, often described as changes in allele frequencies. Individuals can grow or acclimatise, but that alone is not population evolution.",
    "question": "Which is an example of evolution?",
    "options": [
      "An inherited resistance allele becomes more common over generations",
      "One animal grows larger",
      "One student learns a skill"
    ],
    "correct": 0,
    "feedback": "Evolution concerns heritable population change across generations.",
    "task": "Define evolution and contrast it with a change in one individual.",
    "rubric": [
      "Refer to a population.",
      "Refer to inherited characteristics or allele frequencies.",
      "Refer to generations, not simply individual growth or learning."
    ],
    "source": "2026 learning objectives",
    "extra": [
      {
        "question": "A population becomes taller after nutrition improves, without an inherited genetic change. Does this alone show evolution?",
        "options": [
          "Yes, any change in size is evolution",
          "No, inherited change across generations has not been demonstrated",
          "Yes, all acquired changes are inherited"
        ],
        "correct": 1,
        "feedback": "Environmental effects on phenotype do not by themselves establish genetic evolution.",
        "source": "Stile Evolution 2024 p24; 2026 p30"
      }
    ]
  },
  {
    "id": "E03",
    "title": "Phenotypic variation in populations",
    "topic": "evolution",
    "level": "core",
    "model": "traits",
    "learn": "Individuals in a population differ in phenotype. Some variation is inherited, some is acquired, and many traits involve both genetic and environmental influences. Natural selection requires heritable differences that affect reproductive success.",
    "question": "Which difference can be directly passed on as an allele?",
    "options": [
      "A scar",
      "A learned trick",
      "A genetic variant influencing coat colour"
    ],
    "correct": 2,
    "feedback": "An allele can be inherited; acquired scars and learned behaviour are not themselves alleles.",
    "task": "Identify inherited and acquired differences in a population and explain which selection can change genetically.",
    "rubric": [
      "Give one inherited example.",
      "Give one acquired example.",
      "Link genetic evolution to heritable variation."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "E04",
    "title": "Alleles and inherited differences",
    "topic": "evolution",
    "level": "core",
    "model": "dna",
    "learn": "Alleles are different versions of a gene. Differences in DNA sequence can contribute to differences in proteins, regulation and phenotype. Individuals may carry different combinations of alleles. Not every allele difference produces an obvious visible difference.",
    "question": "Different versions of the same gene are called:",
    "options": [
      "Species",
      "Alleles",
      "Organelles"
    ],
    "correct": 1,
    "feedback": "Alleles are alternative gene versions, not separate organs or species.",
    "task": "Relate inherited phenotype differences to DNA and alleles.",
    "rubric": [
      "Define alleles as versions of a gene.",
      "Link DNA information to proteins or regulation.",
      "Explain how inherited allele combinations can affect phenotype."
    ],
    "source": "2026 learning objectives"
  },
  {
    "id": "E05",
    "title": "Explain natural selection",
    "topic": "evolution",
    "level": "core",
    "model": "selection",
    "learn": "Start with existing heritable variation. A selection pressure changes relative survival and reproduction. Better-suited individuals leave more offspring carrying their alleles. Over generations, those alleles and associated phenotypes may become more common. Mutations supply new alleles; selection acts on variation and is not need-directed.",
    "question": "After an antibiotic kills susceptible bacteria, resistant bacteria reproduce. Why does resistance become more common?",
    "options": [
      "Resistant variants leave more descendants",
      "Every bacterium chooses to become resistant",
      "The drug guarantees useful mutations"
    ],
    "correct": 0,
    "feedback": "Differential survival and reproduction increase the frequency of existing resistance variants.",
    "task": "Explain a rise in an inherited resistance trait using all stages of natural selection.",
    "rubric": [
      "Describe existing inherited variation.",
      "Identify selection pressure and differential survival/reproduction.",
      "Explain allele transmission and frequency change across generations."
    ],
    "source": "2025 CORE short answer Q9",
    "extra": [
      {
        "question": "Why can a bacterial population become resistant after repeated antibiotic use?",
        "options": [
          "Every bacterium chooses to become resistant",
          "The antibiotic creates exactly the mutation needed",
          "Heritable resistant variants survive and leave more descendants"
        ],
        "correct": 2,
        "feedback": "Resistance can arise through genetic variation. Antibiotic exposure selects for variants that survive; individuals do not mutate because they need to.",
        "source": "Stile Evolution 2024 pp24–25; 2026 p30"
      }
    ]
  },
  {
    "id": "E06",
    "title": "Genetic drift: bottlenecks and founders",
    "topic": "evolution",
    "level": "extension",
    "model": "drift",
    "learn": "Genetic drift is random change in allele frequencies due to sampling, strongest in small populations. A bottleneck drastically reduces a population; a founder effect occurs when a small group establishes a new population. Neither requires the surviving allele to be advantageous.",
    "question": "A chance storm leaves mainly one colour of beetle alive, independent of fitness. This is:",
    "options": [
      "Necessarily natural selection",
      "A directed mutation",
      "Genetic drift"
    ],
    "correct": 2,
    "feedback": "A random survival sample can change allele frequency without a selective advantage.",
    "task": "Explain bottleneck and founder effects and contrast drift with selection.",
    "rubric": [
      "Define random sampling and allele-frequency change.",
      "Distinguish population reduction from a small founding group.",
      "Explain that chance, rather than differential fitness, drives this example."
    ],
    "source": "2025 EXT Q4–5 and Q8"
  },
  {
    "id": "E07",
    "title": "Gene flow",
    "topic": "evolution",
    "level": "extension",
    "model": "flow",
    "learn": "Gene flow is movement of alleles between populations through reproduction. Migration followed by interbreeding can introduce or alter allele frequencies. Movement alone is insufficient if migrants do not reproduce. Gene flow often makes populations more genetically similar.",
    "question": "Which event produces gene flow?",
    "options": [
      "A rock blocks a river",
      "Migrants breed and contribute alleles to the population",
      "An animal visits but never breeds"
    ],
    "correct": 1,
    "feedback": "Alleles must enter the reproductive gene pool, not merely be carried by a visitor.",
    "task": "Explain how migration and interbreeding can change a population’s alleles.",
    "rubric": [
      "Describe movement between populations.",
      "Require reproduction/interbreeding.",
      "Link introduced alleles to frequency change."
    ],
    "source": "2025 EXT Q5; 2026 Term 4 objectives"
  },
  {
    "id": "E08",
    "title": "Allopatric speciation",
    "topic": "evolution",
    "level": "core",
    "model": "speciation",
    "learn": "A geographic barrier reduces gene flow. Isolated populations can diverge through mutation, selection and drift over many generations. If reproductive isolation develops, they may become different species. Geography alone does not instantly create species, and speciation is not inevitable.",
    "question": "Immediately after a river divides a population, which statement is justified?",
    "options": [
      "Gene flow may decrease; speciation may develop later",
      "Two species must already exist",
      "All individuals acquire identical useful mutations"
    ],
    "correct": 0,
    "feedback": "Isolation starts a possible pathway; later reproductive isolation is the key outcome.",
    "task": "Explain how one population can give rise to two species after geographic separation.",
    "rubric": [
      "Describe a barrier and reduced gene flow.",
      "Explain divergence over many generations.",
      "Require reproductive isolation; do not equate a barrier alone with speciation."
    ],
    "source": "2025 CORE MC20–21 and short answer Q11",
    "extra": [
      {
        "question": "A river separates a beetle population. Which evidence best supports completed speciation later?",
        "options": [
          "The two groups live on opposite banks",
          "They differ slightly in colour",
          "They no longer produce viable, fertile offspring together"
        ],
        "correct": 2,
        "feedback": "A barrier reduces gene flow; reproductive isolation distinguishes completed speciation in this biological-species model.",
        "source": "Stile Evolution 2024 p28"
      }
    ]
  },
  {
    "id": "E09",
    "title": "Read a phylogenetic tree",
    "topic": "evolution",
    "level": "core",
    "model": "phylogeny",
    "learn": "A branching node represents a common ancestor. The closest relatives share the most recent common ancestor, regardless of tip position. Rotating branches around a node does not change relationships. Branch length is not time or DNA difference unless a scale is provided.",
    "question": "In the model above, which pair shares the most recent common ancestor?",
    "options": [
      "A and B",
      "B and C",
      "All three pairs are equally close"
    ],
    "correct": 1,
    "feedback": "B and C meet at the more recent branching node. Rotating their tips does not change this relationship.",
    "task": "Explain which species is closest to A and identify its more distant shared ancestors.",
    "rubric": [
      "Use the most recent common ancestor to identify B.",
      "Explain that A/B share an older ancestor with C and an older one with D.",
      "Avoid inferring exact time or DNA difference from unscaled branch lengths."
    ],
    "source": "2025 CORE MC22–23 and short answer Q10–11",
    "extra": [
      {
        "question": "On an unscaled tree, B and C share a more recent node than either shares with A. Which conclusion is justified?",
        "options": [
          "B and C are closer relatives",
          "B evolved from the modern species C",
          "B and C have exactly 99% identical DNA"
        ],
        "correct": 0,
        "feedback": "Common-ancestor relationships follow branching nodes. An unscaled tree does not provide exact DNA similarity or dates.",
        "source": "Stile Evolution 2024 pp26–27"
      }
    ]
  },
  {
    "id": "H01",
    "title": "Conduction, convection and radiation",
    "topic": "heat",
    "level": "core",
    "model": "heat",
    "learn": "Conduction transfers thermal energy through interactions in matter, without bulk movement. Convection transfers energy through bulk fluid movement. Radiation transfers energy through electromagnetic waves and can cross a vacuum. Net transfer is from warmer to cooler objects.",
    "question": "Warm water rising and cooler water sinking is:",
    "options": [
      "Radiation alone",
      "Convection",
      "Conduction alone"
    ],
    "correct": 1,
    "feedback": "Convection involves movement of the fluid. Conduction and radiation may also occur in the wider system.",
    "task": "Compare all three mechanisms and explain energy flow from a warm metal tray to ice.",
    "rubric": [
      "Define conduction and convection distinctly.",
      "Explain radiation and its ability to cross a vacuum.",
      "Identify conduction from warmer tray to colder ice."
    ],
    "source": "2025 CORE Q14; EXT Q12–13",
    "extra": [
      {
        "question": "A warm drink cools in a freezer. Which explanation is correct?",
        "options": [
          "Cold flows into the drink",
          "Energy transfers from the warmer drink to cooler surroundings",
          "Heat always flows upwards"
        ],
        "correct": 1,
        "feedback": "Net thermal energy transfer is from higher to lower temperature. “Cold” is not a substance that flows.",
        "source": "Stile Heat p12"
      }
    ]
  },
  {
    "id": "H02",
    "title": "Plan the assessed physics investigation",
    "topic": "heat",
    "level": "core",
    "model": "investigation",
    "learn": "Prepare a fair heat-transfer investigation: identify the independent variable, measure a dependent variable with units, control other relevant variables, repeat trials, graph results, discuss uncertainty and justify a conclusion. This preparation does not replace your teacher-approved practical or its assessment.",
    "question": "To test surface colour under a lamp, which comparison is fairest?",
    "options": [
      "Same containers, volumes, starting temperature and lamp distance; vary only colour",
      "Change colour and container size together",
      "Use one trial with different water volumes"
    ],
    "correct": 0,
    "feedback": "Control alternative explanations so changes in heating can reasonably be linked to the chosen variable.",
    "task": "Plan your teacher-approved heat investigation and prepare a results table. Complete the practical and assessment in class.",
    "rubric": [
      "State a testable question, independent variable and measured dependent variable with units.",
      "Specify controls, repeated trials and safe teacher-approved procedure.",
      "Plan a graph, uncertainty discussion and evidence-based conclusion."
    ],
    "source": "2026 Term 4 assessed Physics investigation; practice planning only",
    "extra": [
      {
        "question": "To compare radiant absorption by matte black and shiny surfaces, which design is best?",
        "options": [
          "Use different lamp distances for each surface",
          "Keep distance, exposure time and starting temperature the same; repeat trials",
          "Change both surface colour and amount of water"
        ],
        "correct": 1,
        "feedback": "Control competing variables, measure a temperature change and repeat trials. Surface properties can affect absorption, but the test must be fair.",
        "source": "Stile Heat pp14–15"
      }
    ]
  },
  {
    "id": "R01",
    "title": "Kinetic and collision theories",
    "topic": "rates",
    "level": "core",
    "model": "rates",
    "learn": "Particles are in continual motion; heating increases average kinetic energy. For a reaction, particles must collide with sufficient energy and suitable orientation. Increasing temperature increases the fraction able to overcome the activation barrier; it does not lower that barrier.",
    "question": "A successful reaction collision needs:",
    "options": [
      "Only any contact",
      "Particles with zero kinetic energy",
      "Sufficient energy and suitable orientation"
    ],
    "correct": 2,
    "feedback": "Both the energy requirement and suitable orientation matter.",
    "task": "State kinetic theory and explain the two conditions for a successful collision.",
    "rubric": [
      "Describe continual particle motion and temperature/average kinetic energy.",
      "State sufficient collision energy.",
      "State suitable orientation."
    ],
    "source": "2025 CORE MC26 and short answer Q13",
    "extra": [
      {
        "question": "Why do some collisions fail to produce a reaction?",
        "options": [
          "Particles can lack sufficient energy or suitable orientation",
          "All collisions always react",
          "Only stationary particles react"
        ],
        "correct": 0,
        "feedback": "Successful collisions need sufficient energy and suitable orientation. More collisions do not mean every collision succeeds.",
        "source": "Stile Reaction Types Q5"
      }
    ]
  },
  {
    "id": "R02",
    "title": "Rate factors and graph reasoning",
    "topic": "rates",
    "level": "core",
    "model": "rates",
    "learn": "More concentration usually means more collisions per volume per second. More exposed surface gives more contact sites. Higher temperature increases average kinetic energy and the fraction of successful collisions. Mixing improves contact. A steeper product–time graph indicates a faster rate; product amount and rate are different.",
    "question": "For equal masses of a solid, powder usually reacts faster because it has:",
    "options": [
      "No activation barrier",
      "More exposed surface area",
      "More total mass"
    ],
    "correct": 1,
    "feedback": "Powder exposes more surface at the same mass, allowing more contact with the other reactant.",
    "task": "Explain temperature, concentration, surface area and mixing using collision theory. Describe how a faster rate changes a product–time curve.",
    "rubric": [
      "Explain each of the four factors without confusing mass, volume and concentration.",
      "Link them to collision opportunities or collision energy.",
      "Identify a steeper initial gradient; do not assume a greater final product amount."
    ],
    "source": "2025 CORE MC24–26, Q12–13; EXT Q10 graph reasoning only",
    "extra": [
      {
        "question": "Equal masses of a solid react with identical excess acid. Why does powder react faster than one large piece?",
        "options": [
          "Powder has greater total mass",
          "Powder exposes more surface for collisions",
          "Powder guarantees more final gas"
        ],
        "correct": 1,
        "feedback": "Smaller pieces expose more surface. With the same limiting-reactant amount, faster reaction need not mean more final product.",
        "source": "Stile Reaction Types Q8–10"
      }
    ]
  },
  {
    "id": "R03",
    "title": "Enzymes and activation energy",
    "topic": "rates",
    "level": "extension",
    "model": "enzyme",
    "learn": "Enzymes are biological catalysts. They provide an alternative pathway with lower activation energy and are regenerated overall. They are specific to suitable substrates. Temperature and pH can affect enzyme shape/activity; high temperature can denature an enzyme rather than continually increase its rate.",
    "question": "An enzyme speeds a reaction mainly by:",
    "options": [
      "Lowering the activation-energy barrier",
      "Increasing the particles’ temperature automatically",
      "Being permanently consumed as the main reactant"
    ],
    "correct": 0,
    "feedback": "An enzyme changes the pathway and lowers its barrier; it does not supply heat or disappear overall.",
    "task": "Explain enzyme catalysis and why very high temperature can reduce enzyme activity.",
    "rubric": [
      "Explain the lower activation-energy pathway.",
      "State regeneration and substrate specificity.",
      "Explain that denaturation can alter active-site shape and reduce activity."
    ],
    "source": "2025 EXT Q9; 2026 Term 4 extension enzymes",
    "extra": [
      {
        "question": "Why can enzyme activity fall at very high temperature?",
        "options": [
          "The enzyme can lose the active-site shape needed for binding",
          "Particles stop moving",
          "Every substrate becomes an enzyme"
        ],
        "correct": 0,
        "feedback": "High temperature can denature an enzyme. This differs from the usual increase in collision energy with warming.",
        "source": "Stile Reaction Types Q6–7; objectives extension enzymes"
      }
    ]
  }
];if(typeof module!=="undefined")module.exports=data;else root.ObjectiveCourse=data;})(globalThis);
