import { useState, useEffect, useRef } from "react";

const questionsByGrade = {
  6: [{ q: "The process by which plants make food is called ___.", a: "photosynthesis", opts: ["photosynthesis", "respiration", "digestion", "evaporation"] },{ q: "The Earth rotates on its ___.", a: "axis", opts: ["axis", "orbit", "equator", "pole"] },{ q: "Animals that eat both plants and animals are called ___.", a: "omnivores", opts: ["herbivores", "carnivores", "omnivores", "decomposers"] },{ q: "The boiling point of water is ___ degrees Celsius.", a: "100", opts: ["50", "100", "200", "0"] },{ q: "A ___ is used to measure temperature.", a: "thermometer", opts: ["barometer", "thermometer", "speedometer", "ammeter"] },{ q: "The largest planet in our solar system is ___.", a: "Jupiter", opts: ["Mars", "Saturn", "Jupiter", "Venus"] },{ q: "Bones and cartilage form the ___ system.", a: "skeletal", opts: ["nervous", "skeletal", "digestive", "respiratory"] },{ q: "The gas we breathe in is ___.", a: "oxygen", opts: ["nitrogen", "carbon dioxide", "oxygen", "hydrogen"] },{ q: "The nearest star to Earth is the ___.", a: "Sun", opts: ["Moon", "Sun", "Mars", "Polaris"] },{ q: "Animals without backbone are called ___.", a: "invertebrates", opts: ["vertebrates", "invertebrates", "mammals", "reptiles"] },{ q: "Water freezes at ___ degrees Celsius.", a: "0", opts: ["0", "10", "100", "-10"] },{ q: "The ___ is the largest organ of the body.", a: "skin", opts: ["liver", "brain", "skin", "heart"] },{ q: "Plants release ___ during photosynthesis.", a: "oxygen", opts: ["carbon dioxide", "nitrogen", "oxygen", "hydrogen"] },{ q: "The number of legs an insect has is ___.", a: "six", opts: ["four", "six", "eight", "ten"] },{ q: "The Earth takes ___ days to orbit the Sun.", a: "365", opts: ["30", "365", "24", "7"] },{ q: "The ___ system helps us breathe.", a: "respiratory", opts: ["digestive", "nervous", "respiratory", "skeletal"] }],
  7: [{ q: "The SI unit of temperature is ___.", a: "Kelvin", opts: ["Celsius", "Kelvin", "Fahrenheit", "Joule"] },{ q: "Acids turn blue litmus paper ___.", a: "red", opts: ["red", "green", "yellow", "blue"] },{ q: "The basic unit of life is the ___.", a: "cell", opts: ["atom", "cell", "tissue", "organ"] },{ q: "Distance covered per unit time is called ___.", a: "speed", opts: ["velocity", "speed", "acceleration", "force"] },{ q: "A triangle with all sides equal is called ___.", a: "equilateral", opts: ["isosceles", "scalene", "equilateral", "right"] },{ q: "The process of water cycle starts with ___.", a: "evaporation", opts: ["condensation", "precipitation", "evaporation", "collection"] },{ q: "Fungi obtain food from ___ matter.", a: "dead", opts: ["living", "dead", "mineral", "gaseous"] },{ q: "The product of mass and velocity is ___.", a: "momentum", opts: ["force", "energy", "momentum", "power"] },{ q: "The green pigment in leaves is ___.", a: "chlorophyll", opts: ["melanin", "chlorophyll", "hemoglobin", "carotene"] },{ q: "Bases have a pH ___ than 7.", a: "greater", opts: ["less", "greater", "equal", "zero"] },{ q: "The SI unit of speed is ___.", a: "m/s", opts: ["km/h", "m/s", "cm/s", "mph"] },{ q: "___ carries water from roots to leaves.", a: "Xylem", opts: ["Phloem", "Xylem", "Cortex", "Pith"] },{ q: "The angle sum of a quadrilateral is ___°.", a: "360", opts: ["180", "270", "360", "90"] },{ q: "Rusting of iron is a ___ change.", a: "chemical", opts: ["physical", "chemical", "temporary", "reversible"] },{ q: "The unit of frequency is ___.", a: "Hertz", opts: ["Watt", "Hertz", "Newton", "Pascal"] },{ q: "Convex mirrors form ___ images.", a: "virtual", opts: ["real", "virtual", "inverted", "enlarged"] }],
  8: [{ q: "Force per unit area is called ___.", a: "pressure", opts: ["pressure", "stress", "density", "thrust"] },{ q: "The smallest particle of an element is an ___.", a: "atom", opts: ["molecule", "atom", "ion", "electron"] },{ q: "Metals are good ___ of electricity.", a: "conductors", opts: ["insulators", "conductors", "semiconductors", "resistors"] },{ q: "The process of cell division is called ___.", a: "mitosis", opts: ["meiosis", "mitosis", "osmosis", "diffusion"] },{ q: "Sound travels fastest in ___.", a: "solids", opts: ["gases", "liquids", "solids", "vacuum"] },{ q: "A substance that speeds up a reaction is a ___.", a: "catalyst", opts: ["reactant", "product", "catalyst", "inhibitor"] },{ q: "The sum of all angles in a quadrilateral is ___°.", a: "360", opts: ["180", "270", "360", "90"] },{ q: "Coal and petroleum are ___ fuels.", a: "fossil", opts: ["renewable", "fossil", "nuclear", "solar"] },{ q: "The SI unit of current is ___.", a: "Ampere", opts: ["Volt", "Ampere", "Ohm", "Watt"] },{ q: "Loudness of sound depends on ___.", a: "amplitude", opts: ["frequency", "amplitude", "speed", "wavelength"] },{ q: "The chemical formula of rust is ___.", a: "Fe2O3", opts: ["FeO", "Fe2O3", "FeCl2", "FeS"] },{ q: "Friction produces ___.", a: "heat", opts: ["light", "heat", "sound", "electricity"] },{ q: "The human body has ___ pairs of chromosomes.", a: "23", opts: ["22", "23", "46", "44"] },{ q: "Pitch of sound depends on ___.", a: "frequency", opts: ["amplitude", "frequency", "speed", "medium"] },{ q: "LPG is mainly made of ___ and butane.", a: "propane", opts: ["methane", "propane", "ethane", "octane"] },{ q: "The process of coating iron with zinc is ___.", a: "galvanization", opts: ["electroplating", "galvanization", "smelting", "anodizing"] }],
  9: [{ q: "The SI unit of force is ___.", a: "Newton", opts: ["Joule", "Newton", "Pascal", "Watt"] },{ q: "The number of protons in an atom is its ___ number.", a: "atomic", opts: ["mass", "atomic", "neutron", "electron"] },{ q: "The powerhouse of the cell is ___.", a: "mitochondria", opts: ["nucleus", "ribosome", "mitochondria", "chloroplast"] },{ q: "Work done per unit time is called ___.", a: "power", opts: ["energy", "force", "power", "momentum"] },{ q: "The formula for kinetic energy is ½m___².", a: "v", opts: ["a", "v", "f", "g"] },{ q: "Elements in the same group have similar ___.", a: "properties", opts: ["mass", "size", "properties", "color"] },{ q: "The sum of angles in a triangle is ___°.", a: "180", opts: ["90", "180", "270", "360"] },{ q: "Displacement is a ___ quantity.", a: "vector", opts: ["scalar", "vector", "unit", "base"] },{ q: "The SI unit of work is ___.", a: "Joule", opts: ["Newton", "Joule", "Watt", "Pascal"] },{ q: "Atomic mass is sum of protons and ___.", a: "neutrons", opts: ["electrons", "neutrons", "photons", "positrons"] },{ q: "The universal law of gravitation was given by ___.", a: "Newton", opts: ["Einstein", "Newton", "Galileo", "Kepler"] },{ q: "Sound cannot travel through ___.", a: "vacuum", opts: ["air", "water", "vacuum", "steel"] },{ q: "The chemical formula of methane is ___.", a: "CH4", opts: ["CO2", "CH4", "C2H6", "NH3"] },{ q: "Momentum is measured in ___.", a: "kg m/s", opts: ["kg m/s", "N/m", "J/s", "m/s²"] },{ q: "The number of electrons in the outermost shell of noble gases is ___.", a: "8", opts: ["2", "4", "6", "8"] },{ q: "The tissue that connects muscle to bone is ___.", a: "tendon", opts: ["ligament", "tendon", "cartilage", "nerve"] }],
  10: [{ q: "The SI unit of resistance is ___.", a: "Ohm", opts: ["Volt", "Ampere", "Ohm", "Watt"] },{ q: "The image formed by a plane mirror is ___.", a: "virtual", opts: ["real", "virtual", "inverted", "magnified"] },{ q: "The functional group of alcohols is ___.", a: "hydroxyl", opts: ["carboxyl", "hydroxyl", "aldehyde", "ketone"] },{ q: "Mendel used ___ plants for his experiments.", a: "pea", opts: ["rose", "pea", "mango", "wheat"] },{ q: "The power of a lens is measured in ___.", a: "dioptre", opts: ["metre", "dioptre", "watt", "hertz"] },{ q: "pH of a neutral solution is ___.", a: "7", opts: ["0", "7", "14", "1"] },{ q: "The chemical formula of common salt is ___.", a: "NaCl", opts: ["NaOH", "NaCl", "HCl", "KCl"] },{ q: "Ozone is made up of ___ oxygen atoms.", a: "three", opts: ["two", "three", "four", "one"] },{ q: "The SI unit of electric charge is ___.", a: "Coulomb", opts: ["Ampere", "Coulomb", "Volt", "Ohm"] },{ q: "The mirror used by dentists is ___.", a: "concave", opts: ["convex", "concave", "plane", "cylindrical"] },{ q: "The gas evolved when acid reacts with metal is ___.", a: "hydrogen", opts: ["oxygen", "hydrogen", "nitrogen", "chlorine"] },{ q: "The smallest unit of heredity is ___.", a: "gene", opts: ["cell", "gene", "chromosome", "DNA"] },{ q: "Electric fuse is made of ___ with low melting point.", a: "alloy", opts: ["copper", "alloy", "iron", "silver"] },{ q: "The process of depositing zinc on iron is ___.", a: "galvanization", opts: ["electroplating", "galvanization", "anodizing", "smelting"] },{ q: "The number of images formed by two parallel mirrors is ___.", a: "infinite", opts: ["one", "two", "infinite", "zero"] },{ q: "Biogas mainly contains ___.", a: "methane", opts: ["ethane", "methane", "propane", "butane"] }],
  11: [{ q: "The derivative of sin(x) is ___.", a: "cos(x)", opts: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"] },{ q: "The SI unit of capacitance is ___.", a: "Farad", opts: ["Henry", "Farad", "Coulomb", "Ohm"] },{ q: "Benzene has ___ carbon atoms.", a: "six", opts: ["four", "five", "six", "eight"] },{ q: "The value of nC0 is always ___.", a: "1", opts: ["0", "1", "n", "n!"] },{ q: "Escape velocity is independent of ___ of the object.", a: "mass", opts: ["mass", "radius", "gravity", "height"] },{ q: "Alkenes contain a ___ bond.", a: "double", opts: ["single", "double", "triple", "ionic"] },{ q: "The integral of cos(x) is ___.", a: "sin(x)", opts: ["sin(x)", "-sin(x)", "cos(x)", "tan(x)"] },{ q: "Electric field lines start from ___ charge.", a: "positive", opts: ["positive", "negative", "neutral", "ground"] },{ q: "The SI unit of inductance is ___.", a: "Henry", opts: ["Farad", "Henry", "Weber", "Tesla"] },{ q: "The bond angle in methane is ___.", a: "109.5°", opts: ["90°", "109.5°", "120°", "180°"] },{ q: "The derivative of ln(x) is ___.", a: "1/x", opts: ["x", "1/x", "ln(x)", "e^x"] },{ q: "Alkynes contain a ___ bond.", a: "triple", opts: ["single", "double", "triple", "ionic"] },{ q: "The time period of a simple pendulum depends on ___.", a: "length", opts: ["mass", "length", "amplitude", "material"] },{ q: "The number of radians in 180° is ___.", a: "π", opts: ["π", "2π", "π/2", "π/4"] },{ q: "Halogens belong to group ___.", a: "17", opts: ["1", "2", "16", "17"] },{ q: "The dimension of velocity is ___.", a: "LT⁻¹", opts: ["LT⁻¹", "LT⁻²", "MLT⁻¹", "L²T⁻¹"] }],
  12: [{ q: "The SI unit of magnetic flux is ___.", a: "Weber", opts: ["Tesla", "Weber", "Henry", "Gauss"] },{ q: "The half-life of a radioactive element is ___.", a: "constant", opts: ["variable", "constant", "zero", "infinite"] },{ q: "In a p-n junction, the depletion region has ___ charge carriers.", a: "no", opts: ["positive", "negative", "no", "excess"] },{ q: "The rank of a 3×3 identity matrix is ___.", a: "3", opts: ["0", "1", "2", "3"] },{ q: "Proteins are made up of ___.", a: "amino acids", opts: ["fatty acids", "amino acids", "nucleotides", "glucose"] },{ q: "The process of converting AC to DC is ___.", a: "rectification", opts: ["amplification", "rectification", "modulation", "oscillation"] },{ q: "Colligative properties depend on ___ of solute particles.", a: "number", opts: ["nature", "size", "number", "charge"] },{ q: "The truth table of AND gate gives 1 only when ___ inputs are 1.", a: "all", opts: ["one", "no", "all", "any"] },{ q: "The energy gap of germanium is ___ eV.", a: "0.7", opts: ["0.7", "1.1", "3.0", "0.3"] },{ q: "DNA replication is ___.", a: "semi-conservative", opts: ["conservative", "semi-conservative", "dispersive", "random"] },{ q: "The SI unit of magnetic field is ___.", a: "Tesla", opts: ["Weber", "Tesla", "Gauss", "Henry"] },{ q: "Starch is a ___ of glucose.", a: "polymer", opts: ["monomer", "polymer", "isomer", "isotope"] },{ q: "The output of XOR gate is 1 when inputs are ___.", a: "different", opts: ["same", "different", "both 1", "both 0"] },{ q: "The vitamin that prevents scurvy is ___.", a: "C", opts: ["A", "B", "C", "D"] },{ q: "The number of p-n junctions in a transistor is ___.", a: "2", opts: ["1", "2", "3", "4"] },{ q: "Inverse of a 2×2 matrix exists when determinant is ___.", a: "non-zero", opts: ["zero", "non-zero", "positive", "negative"] }],
};

export default function FillBlankGame({ grade, onFinish }) {
  const allQ = questionsByGrade[grade] || questionsByGrade[6];
  const [questions] = useState(() => allQ.sort(() => Math.random() - 0.5).slice(0, 8));
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [shuffledOpts, setShuffledOpts] = useState([]);
  const [history, setHistory] = useState([]);
  const startTime = useRef(Date.now());

  useEffect(() => {
    setShuffledOpts(questions[current].opts.sort(() => Math.random() - 0.5));
  }, [current]);

  const handleAnswer = (opt) => {
    if (feedback) return;
    const isCorrect = opt === questions[current].a;
    if (isCorrect) setCorrect((c) => c + 1);
    setHistory((h) => [...h, { q: questions[current].q, correct: questions[current].a, userAns: opt, isCorrect }]);
    setFeedback({ selected: opt, isCorrect });
    setTimeout(() => {
      setFeedback(null);
      if (current + 1 >= questions.length) {
        const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
        onFinish(Math.round(((correct + (isCorrect ? 1 : 0)) / questions.length) * 100), timeTaken, history);
      } else {
        setCurrent((c) => c + 1);
      }
    }, isCorrect ? 800 : 1500);
  };

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      {/* Progress */}
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Q {current + 1}/{questions.length}</span>
          <span className="text-xs text-green-400 font-bold">✓ {correct}</span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white/50 to-white/80 rounded-full transition-all" style={{ width: `${(current / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question Card */}
      <div className={`w-full max-w-lg rounded-2xl border-2 p-7 transition-all duration-200 ${
        feedback?.isCorrect ? "border-green-500/50 bg-green-500/5" :
        feedback && !feedback.isCorrect ? "border-red-500/50 bg-red-500/5" :
        "border-white/[0.08] bg-white/[0.03]"
      }`}>
        {feedback && (
          <p className={`text-xs font-bold mb-4 text-center ${feedback.isCorrect ? "text-green-400" : "text-red-400"}`}>
            {feedback.isCorrect ? "✓ Correct!" : `✗ Answer: ${questions[current].a}`}
          </p>
        )}
        <p className="text-white text-base font-medium text-center leading-relaxed mb-6">{questions[current].q}</p>
        <div className="grid grid-cols-2 gap-2.5">
          {shuffledOpts.map((opt, i) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              disabled={!!feedback}
              className={`px-4 py-3.5 rounded-xl border text-sm font-medium transition-all active:scale-95 ${
                feedback
                  ? opt === questions[current].a
                    ? "border-green-500/50 bg-green-500/15 text-green-300"
                    : feedback.selected === opt
                    ? "border-red-500/50 bg-red-500/15 text-red-300"
                    : "border-white/[0.06] bg-white/[0.02] text-white/30"
                  : "border-white/[0.08] bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08] disabled:opacity-50"
              }`}
            >
              <span className="text-white/30 text-[10px] font-bold mr-1.5">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
