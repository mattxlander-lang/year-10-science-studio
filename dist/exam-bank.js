/* Practice aligned to the supplied 2026 Genetics and Term 4 objectives. */
(function(root){const bank={
  "version": 1,
  "topics": [
    {
      "id": "evolution",
      "title": "Evolution",
      "link": "moreLabs",
      "source": "Adapted from 2020 natural-selection quiz; 2024 CORE Q8–11; 2025 CORE Q9–11 and evolution draft; 2025 EXT bottleneck question. Original tree and scenarios. A-level classification material used only for general evidence skills.",
      "questions": [
        {
          "id": "ev1",
          "type": "mc",
          "level": "core",
          "prompt": "After an environment changes, an inherited trait becomes more common over generations. Which explanation is consistent with natural selection?",
          "options": [
            "Individuals deliberately change their genes to cope.",
            "All individuals develop the trait because they need it.",
            "The environment creates only helpful mutations.",
            "Individuals already carrying an advantageous trait leave more surviving offspring."
          ],
          "correct": 3,
          "explain": "Selection acts on existing heritable variation through differences in reproductive success. New mutations are not directed by an organism’s needs.",
          "marks": 1
        },
        {
          "id": "ev2",
          "type": "mc",
          "level": "core",
          "prompt": "In the tree shown, which living species is most closely related to A?",
          "options": [
            "B",
            "C",
            "D",
            "All are equally closely related."
          ],
          "correct": 0,
          "explain": "A and B share the most recent common ancestor. Relatedness follows branching history, not how near labels happen to be on a page.",
          "stimulus": "tree",
          "marks": 1
        },
        {
          "id": "ev3",
          "type": "mc",
          "level": "core",
          "prompt": "A chance storm kills most beetles on an island irrespective of colour. Survivors happen to be mostly green. Which process best explains the immediate allele-frequency change?",
          "options": [
            "Artificial selection",
            "A genetic bottleneck involving drift",
            "A new mutation in every survivor",
            "Natural selection favouring green camouflage"
          ],
          "correct": 1,
          "explain": "The stated survival is by chance, not colour advantage. A small surviving sample can have different allele frequencies: a bottleneck causes genetic drift.",
          "marks": 1
        },
        {
          "id": "ev4",
          "type": "mc",
          "level": "extension",
          "prompt": "Which observation provides the strongest evidence that two geographically separated, sexually reproducing populations have become different species under the biological species concept?",
          "options": [
            "They occupy different islands.",
            "Their average sizes differ slightly.",
            "They can no longer interbreed to produce viable, fertile offspring.",
            "They have different population sizes."
          ],
          "correct": 2,
          "explain": "Geographical separation can reduce gene flow, but reproductive isolation is the key criterion here. This species concept has limits, such as for fossils and asexual organisms.",
          "marks": 1
        },
        {
          "id": "ev5",
          "type": "written",
          "level": "core",
          "prompt": "A bacterial population includes a few cells with inherited antibiotic resistance before treatment. After repeated treatment, resistance is common. Explain the change using natural selection.",
          "rubric": [
            "Heritable variation existed before treatment: some bacteria were resistant.",
            "The antibiotic inhibited or killed susceptible bacteria more than resistant bacteria.",
            "Resistant survivors reproduced and passed on resistance, increasing its frequency over generations."
          ],
          "model": "Some bacteria were already resistant. Treatment acted as a selection pressure, leaving resistant bacteria with greater survival and reproductive success. Their descendants inherited resistance, so the proportion of resistant bacteria increased. The antibiotic did not give bacteria the mutations they needed.",
          "marks": 3
        },
        {
          "id": "ev6",
          "type": "written",
          "level": "extension",
          "prompt": "A river divides a population of small mammals. Food differs on each side. Explain how this could eventually result in allopatric speciation; do not assume separation alone immediately makes new species.",
          "rubric": [
            "The barrier reduces or prevents gene flow between the populations.",
            "Inherited variation exists; mutation can supply new alleles, and drift may also alter frequencies.",
            "Different selection pressures lead to different reproductive success and diverging allele frequencies over generations.",
            "Reproductive isolation eventually develops so members cannot interbreed to produce viable, fertile offspring even if they meet."
          ],
          "model": "Isolation limits gene flow. The populations contain heritable variation, with mutation adding new alleles. Different foods favour different traits, and selection and drift can lead to divergence over many generations. If reproductive isolation develops, they become separate species under the biological species concept.",
          "marks": 4
        }
      ]
    },
    {
      "id": "genetics",
      "title": "Genetics & cell division",
      "link": "studio",
      "source": "Adapted from Genetics exam DRAFT 2025; 2025 CORE genetics; 2025 EXT Q6–7; 2024 CORE/EXT genetics. New scenarios and numbers; complements the original genetics checks.",
      "questions": [
        {
          "id": "ge1",
          "type": "mc",
          "level": "core",
          "prompt": "A diploid cell has 12 chromosomes. Immediately after DNA replication, before mitosis, how many chromosomes does it have?",
          "options": [
            "6",
            "12",
            "24",
            "48"
          ],
          "correct": 1,
          "explain": "DNA replication makes sister chromatids, but chromosome number counted by centromeres remains 12 until chromatids separate.",
          "marks": 1
        },
        {
          "id": "ge2",
          "type": "number",
          "level": "core",
          "prompt": "For a monohybrid cross Aa × Aa, what percentage of offspring is expected to have genotype aa?",
          "answer": 25,
          "unit": "%",
          "tolerance": 0.01,
          "explain": "The four equally likely combinations are AA, Aa, Aa and aa, giving 1/4 = 25%. This is a probability for each offspring, not a required family ratio.",
          "marks": 1
        },
        {
          "id": "ge3",
          "type": "mc",
          "level": "core",
          "prompt": "Which is the usual outcome of meiosis from a diploid starting cell?",
          "options": [
            "Two genetically identical diploid products",
            "Four diploid products",
            "Four haploid products with genetic variation",
            "One cell with twice as many chromosomes"
          ],
          "correct": 2,
          "explain": "Meiosis involves two divisions after one DNA replication and produces haploid products. Crossing over and independent assortment contribute to variation.",
          "marks": 1
        },
        {
          "id": "ge4",
          "type": "mc",
          "level": "extension",
          "prompt": "In a simple X-linked recessive model, a carrier mother XᴬXᵃ and unaffected father XᴬY have a son. What is the probability that this son is affected?",
          "options": [
            "50%",
            "25%",
            "0%",
            "100%"
          ],
          "correct": 0,
          "explain": "Conditional on the child being a son, he receives Y from his father and has a 1/2 chance of receiving Xᵃ from his mother. The probability among all children is a different question.",
          "marks": 1
        },
        {
          "id": "ge5",
          "type": "written",
          "level": "core",
          "prompt": "Compare mitosis and meiosis in division number, chromosome number of products and biological purpose.",
          "rubric": [
            "Mitosis has one division; meiosis has two after one DNA replication.",
            "Mitosis preserves chromosome number; meiosis halves it to form haploid products.",
            "Mitosis supports growth/repair (and asexual reproduction); meiosis supports sexual reproduction by producing haploid cells."
          ],
          "model": "Mitosis divides once and preserves chromosome number, usually yielding two genetically similar cells for growth and repair. Meiosis divides twice and halves chromosome number, producing haploid cells used in sexual reproduction.",
          "marks": 3
        },
        {
          "id": "ge6",
          "type": "written",
          "level": "extension",
          "prompt": "A homologous pair carries AB on one homologue and ab on the other. Explain how one crossover between the two gene locations can produce Ab and aB chromatids. Distinguish new allele combinations from new alleles.",
          "rubric": [
            "Homologous chromosomes pair in prophase I of meiosis.",
            "Corresponding DNA segments are exchanged between two non-sister chromatids.",
            "The selected chromatids become Ab and aB; uninvolved chromatids can retain AB and ab.",
            "This recombines existing alleles; it does not itself require a new allele to be created by mutation."
          ],
          "model": "During prophase I, homologues pair and two non-sister chromatids exchange corresponding segments. A crossover between the loci can create Ab and aB while the other chromatids retain AB and ab. The allele combinations are new, but the alleles themselves already existed.",
          "marks": 4
        }
      ]
    },
    {
      "id": "rates",
      "title": "Reaction rates",
      "link": "visualLabs",
      "source": "Adapted from 2024 CORE chemistry graph; 2025 CORE Q12–13; 2025 EXT chemistry; NEAP glow-stick investigation. Original dataset.",
      "questions": [
        {
          "id": "ra1",
          "type": "mc",
          "level": "core",
          "prompt": "Equal masses of calcium carbonate react with excess acid at the same temperature. Why does powder usually react faster than one large lump?",
          "options": [
            "Powder has more exposed surface area for collisions.",
            "Powder contains more calcium carbonate by mass.",
            "Powder changes the acid into a catalyst.",
            "The lump has no particles."
          ],
          "correct": 0,
          "explain": "Smaller pieces expose more surface per unit mass, increasing contact and collision opportunities. Equal mass does not mean equal surface area.",
          "marks": 1
        },
        {
          "id": "ra2",
          "type": "number",
          "level": "core",
          "prompt": "Using the gas-volume data, calculate the mean production rate from 0 to 10 s.",
          "answer": 2,
          "unit": "cm³/s",
          "tolerance": 0.01,
          "explain": "Mean rate = change in volume/change in time = (20 − 0)/(10 − 0) = 2 cm³/s.",
          "stimulus": "rateTable",
          "marks": 1
        },
        {
          "id": "ra3",
          "type": "mc",
          "level": "core",
          "prompt": "Why does increasing temperature usually speed up a reaction?",
          "options": [
            "It creates extra reactant atoms.",
            "It always increases the final product amount.",
            "Every collision becomes successful.",
            "A greater fraction of collisions has enough energy to overcome the activation barrier."
          ],
          "correct": 3,
          "explain": "Higher temperature raises average kinetic energy. More collisions meet the energy requirement (and collisions may be more frequent), but not every collision succeeds.",
          "marks": 1
        },
        {
          "id": "ra4",
          "type": "mc",
          "level": "extension",
          "prompt": "A catalyst speeds up a reaction primarily by:",
          "options": [
            "Increasing the activation energy.",
            "Providing an alternative pathway with lower activation energy.",
            "Being permanently used up as the main reactant.",
            "Guaranteeing a greater final equilibrium yield."
          ],
          "correct": 1,
          "explain": "A catalyst lowers the activation barrier for an alternative pathway and is regenerated overall. It changes rate, not the equilibrium composition at fixed conditions.",
          "marks": 1
        },
        {
          "id": "ra5",
          "type": "written",
          "level": "core",
          "prompt": "The gas volume increases quickly at first, then more slowly, and finally stops increasing. Explain each stage using reacting particles.",
          "rubric": [
            "Initially reactants are readily available, so successful collisions are relatively frequent.",
            "As reactants are consumed, fewer suitable collisions occur per second and the rate slows.",
            "A plateau can occur when a limiting reactant is used up, so no further gas is produced under these conditions."
          ],
          "model": "The initial high reactant availability gives a high collision rate. As reactants are consumed, successful collisions become less frequent and the curve becomes less steep. When the limiting reactant is exhausted, the product volume plateaus.",
          "stimulus": "rateTable",
          "marks": 3
        },
        {
          "id": "ra6",
          "type": "written",
          "level": "extension",
          "prompt": "Design a fair comparison of the effect of temperature on magnesium reacting with hydrochloric acid. State what to vary, what to measure, two controls and how to improve reliability.",
          "rubric": [
            "Vary temperature systematically while keeping other chosen conditions constant.",
            "Measure a suitable rate indicator, such as hydrogen volume at fixed intervals or time to a specified gas volume.",
            "Control two relevant variables, such as acid volume/concentration and magnesium mass/surface area.",
            "Repeat each temperature, compare means and identify inconsistent results; use consistent apparatus and a safe teacher-approved method."
          ],
          "model": "Use several controlled temperatures and record hydrogen volume at regular intervals. Keep acid volume and concentration and magnesium mass/surface condition fixed. Repeat each temperature and compare mean rates, using the same apparatus and a teacher-approved procedure. A single faster trial is weaker evidence than repeatable results.",
          "marks": 4
        }
      ]
    },
    {
      "id": "heat",
      "title": "Heat transfer",
      "link": "visualLabs",
      "source": "Adapted skills from 2025 CORE Q14; 2025 EXT physics; 2024 CORE hot-air-balloon context; earlier Stile conduction/convection/radiation lessons.",
      "questions": [
        {
          "id": "he1",
          "type": "mc",
          "level": "core",
          "prompt": "The handle of a metal spoon warms while its other end sits in hot water. The main transfer along the spoon is:",
          "options": [
            "Convection",
            "Evaporation",
            "Conduction",
            "Nuclear radiation"
          ],
          "correct": 2,
          "explain": "Energy transfers within the solid by interactions among particles and, in metals, mobile electrons. The solid does not circulate as a fluid.",
          "marks": 1
        },
        {
          "id": "he2",
          "type": "mc",
          "level": "core",
          "prompt": "Which mechanism transfers energy from the Sun through the vacuum of space?",
          "options": [
            "Conduction",
            "Radiation",
            "Convection",
            "Bulk movement of hot air"
          ],
          "correct": 1,
          "explain": "Electromagnetic radiation can travel through a vacuum. Conduction and convection require matter.",
          "marks": 1
        },
        {
          "id": "he3",
          "type": "mc",
          "level": "core",
          "prompt": "Why can warmer air rise above a heater?",
          "options": [
            "It expands and is usually less dense than surrounding cooler air.",
            "Its particles become lighter elements.",
            "Heat is a substance that always moves upward.",
            "All gases rise regardless of density."
          ],
          "correct": 0,
          "explain": "At approximately constant pressure, warmer air expands and becomes less dense. Buoyancy drives upward flow while cooler air can move down.",
          "marks": 1
        },
        {
          "id": "he4",
          "type": "mc",
          "level": "extension",
          "prompt": "An ice cube is placed on a metal tray initially at room temperature. Which statement describes net energy transfer?",
          "options": [
            "Cold flows from ice into metal.",
            "No energy moves because both are solids.",
            "Energy moves only from the lower-mass object.",
            "Energy transfers from the warmer tray to the colder ice."
          ],
          "correct": 3,
          "explain": "Net thermal energy transfer is from higher to lower temperature. The ice can melt as it gains energy; cold is not a substance flowing out.",
          "marks": 1
        },
        {
          "id": "he5",
          "type": "written",
          "level": "core",
          "prompt": "Explain conduction from a warm metal tray into an ice cube touching it. Describe transfer direction and what happens to the ice.",
          "rubric": [
            "Net energy transfers from the warmer metal toward the colder ice.",
            "Interactions at contact transfer energy; mobile electrons also help conduct energy through the metal.",
            "The ice gains energy that can melt it; cold is not transferred as a substance."
          ],
          "model": "Thermal energy is conducted through the metal and across its contact with the ice, from the warmer tray toward the colder ice. This energy can melt the ice. It is not a flow of a substance called cold.",
          "marks": 3
        },
        {
          "id": "he7",
          "type": "written",
          "level": "extension",
          "prompt": "Explain how a convection current forms when water is heated from below. Compare this with energy transfer by conduction and radiation.",
          "rubric": [
            "Water near the heater gains energy and usually expands, becoming less dense.",
            "Warmer water rises while cooler, denser water sinks, creating circulation.",
            "Convection transfers energy through bulk fluid movement; conduction transfers energy through interactions without bulk movement.",
            "Radiation transfers energy by electromagnetic waves and does not require matter."
          ],
          "model": "Water heated from below expands and becomes less dense. It rises as cooler, denser water sinks, setting up a convection current. This bulk movement carries thermal energy. Conduction transfers energy through particle interactions without bulk flow, while radiation uses electromagnetic waves and can travel through a vacuum.",
          "marks": 4
        }
      ]
    }
  ]
};if(typeof module!=='undefined')module.exports=bank;else root.ExamBank=bank;})(globalThis);
