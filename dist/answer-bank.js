(function(root){const data={
  "G24": {
    "prompt": "Two unaffected parents have an affected child for a known autosomal recessive trait. Explain their genotypes.",
    "clauses": [
      "The affected child has genotype aa.",
      "The child received one a allele from each parent.",
      "Both unaffected parents must therefore be Aa carriers."
    ],
    "notes": [
      "Identifies the recessive affected genotype.",
      "Uses inheritance to explain where both alleles came from.",
      "Rules out aa using the unaffected phenotype and concludes both are heterozygous."
    ],
    "weak": "The parents passed on the disease.",
    "why": "This does not identify genotypes or explain why each parent is a carrier."
  },
  "E08": {
    "prompt": "Explain how a geographic barrier could eventually lead to two species.",
    "clauses": [
      "A barrier reduces gene flow between the populations.",
      "Over generations, inherited variation and different selection pressures can make the populations diverge.",
      "If they can no longer interbreed to produce viable, fertile offspring, reproductive isolation has developed."
    ],
    "notes": [
      "States the effect of the barrier on allele exchange.",
      "Explains divergence over generations, not an individual changing because it needs to.",
      "Gives the reproductive-isolation criterion; separation alone is insufficient."
    ],
    "weak": "They live in different places, so they are different species.",
    "why": "A different location alone does not establish reproductive isolation."
  },
  "R02": {
    "prompt": "Explain why equal masses of powdered and lump solid can react at different rates but produce the same final amount of gas in excess acid.",
    "clauses": [
      "The powder exposes a larger total surface area.",
      "More reactant particles can collide with the exposed solid per second, increasing rate.",
      "With the same limiting-reactant amount, both can produce the same final gas volume when reaction is complete."
    ],
    "notes": [
      "Identifies the changed physical factor at constant mass.",
      "Links the factor to collision opportunities and rate.",
      "Distinguishes speed from final yield and states the limiting-reactant condition."
    ],
    "weak": "Powder makes more gas because it is faster.",
    "why": "Faster production does not necessarily mean a greater final amount."
  },
  "H01": {
    "prompt": "Compare conduction, convection and radiation, with one example of each.",
    "clauses": [
      "A spoon warming along its length shows conduction: energy transfers through interactions without bulk movement.",
      "Circulating heated water shows convection: bulk fluid movement carries thermal energy.",
      "A warm object emits radiation: electromagnetic waves transfer energy and can travel through a vacuum."
    ],
    "notes": [
      "Names conduction and its mechanism, using an appropriate example.",
      "Explains fluid movement rather than merely saying heat rises.",
      "Identifies electromagnetic transfer and the absence of a matter requirement."
    ],
    "weak": "Conduction touches, convection rises, radiation is hot.",
    "why": "These fragments do not explain how energy is transferred; “heat rises” is not a general rule."
  },
  "G07": {
    "prompt": "Describe the chromosome changes from metaphase through telophase of mitosis.",
    "clauses": [
      "At metaphase, replicated chromosomes align individually at the equator.",
      "At anaphase, sister chromatids separate and move to opposite poles.",
      "At telophase, nuclei reform around the chromosome sets; cytokinesis then divides the cytoplasm."
    ],
    "notes": [
      "Identifies alignment of individual replicated chromosomes.",
      "Names the structures that separate, not homologous pairs.",
      "Distinguishes nuclear re-formation from cytoplasmic division."
    ],
    "weak": "Chromosomes line up, then the cell splits.",
    "why": "This omits chromatid separation and the formation of two nuclei."
  },
  "E02": {
    "prompt": "Explain evolution and distinguish it from an acquired change in one individual.",
    "clauses": [
      "Evolution is a change in inherited characteristics of a population across generations.",
      "For example, an inherited resistance allele can become more common in the gene pool.",
      "An individual developing a scar is an acquired change and does not by itself demonstrate genetic evolution."
    ],
    "notes": [
      "Defines the population and generation scales.",
      "Uses a concrete heritable example.",
      "Explains why an individual acquired change is different."
    ],
    "weak": "Evolution is when an animal changes to survive.",
    "why": "This makes evolution sound deliberate and individual, and omits inheritance and generations."
  },
  "H02": {
    "prompt": "Plan a fair investigation comparing insulation materials around containers of warm water.",
    "clauses": [
      "Vary the insulation material and measure temperature change in °C over a fixed time.",
      "Keep water mass, starting temperature, container and surroundings the same.",
      "Repeat independent trials, compare mean changes and variation, and follow the teacher-approved safety method."
    ],
    "notes": [
      "Identifies independent/dependent variables and a measurable quantity.",
      "Controls plausible competing influences.",
      "Improves reliability and acknowledges safe practical procedure."
    ],
    "weak": "Wrap cups and see which is best.",
    "why": "The answer needs a defined measurement, controls and repeats."
  },
  "G22": {
    "prompt": "For XᵃXᵃ × XᴬY, explain the expected outcomes separately for sons and daughters.",
    "clauses": [
      "The mother contributes Xᵃ to every gamete; the father contributes Xᴬ or Y.",
      "Every son is XᵃY and is affected in this recessive model.",
      "Every daughter is XᴬXᵃ and is an unaffected carrier in this model."
    ],
    "notes": [
      "Identifies both parental gamete types.",
      "Uses the paternal Y and maternal X to explain sons.",
      "Uses the paternal X and maternal X to explain daughters; keeps the two denominators separate."
    ],
    "weak": "Half the children have it.",
    "why": "Even if the all-offspring probability is 50%, this does not answer the separate questions about sons and daughters."
  },
  "E06": {
    "prompt": "Compare a population bottleneck and a founder effect as examples of genetic drift.",
    "clauses": [
      "A bottleneck leaves a small surviving sample after a major population reduction.",
      "A founder effect occurs when a small group establishes a new population.",
      "In both, chance sampling can change allele frequencies; the sampled allele need not improve fitness."
    ],
    "notes": [
      "Explains reduction of an existing population.",
      "Distinguishes establishment of a new population.",
      "Identifies chance rather than natural selection as the cause in this model."
    ],
    "weak": "The strongest survive in both cases.",
    "why": "That describes selection, not random sampling independent of the allele’s advantage."
  },
  "R03": {
    "prompt": "Explain enzyme catalysis and why very high temperature can reduce its rate.",
    "clauses": [
      "An enzyme provides an alternative pathway with lower activation energy.",
      "It is specific to suitable substrates and is regenerated overall.",
      "Very high temperature can denature it, changing the active site and reducing catalysis."
    ],
    "notes": [
      "Explains the lower barrier, not added heat.",
      "States specificity and regeneration.",
      "Links structural change to the loss of enzyme activity."
    ],
    "weak": "Heat always makes enzymes work faster.",
    "why": "That ignores denaturation at high temperature."
  },
  "G25": {
    "prompt": "An affected father XᵃY and non-carrier mother XᴬXᴬ have children. Explain X-linked recessive transmission.",
    "clauses": [
      "Daughters receive Xᵃ from their father and Xᴬ from their mother, so all are carriers in this model.",
      "Sons receive Y from their father and Xᴬ from their mother, so are unaffected.",
      "The father cannot pass his X-linked allele directly to a son because he supplies that son’s Y."
    ],
    "notes": [
      "Tracks the paternal X into daughters.",
      "Tracks the paternal Y into sons.",
      "Explains the absence of father-to-son X transmission."
    ],
    "weak": "All children inherit the affected father’s X.",
    "why": "Sons receive his Y, so the statement applies incorrectly to them."
  },
  "E09": {
    "prompt": "Explain how to identify the closest relatives on an unscaled phylogenetic tree.",
    "clauses": [
      "Find the branching node representing the most recent common ancestor.",
      "The pair sharing the most recent node are the closest relatives; rotating branches does not change this.",
      "Without a stated scale, branch length does not give an exact age or DNA difference."
    ],
    "notes": [
      "Identifies nodes as common ancestors.",
      "Uses shared ancestry rather than tip proximity.",
      "States what cannot be inferred from an unscaled tree."
    ],
    "weak": "The closest labels are the closest relatives.",
    "why": "Tip position can change when branches rotate without changing ancestry."
  }
};if(typeof module!=="undefined")module.exports=data;else root.AnnotatedAnswers=data;})(globalThis);
