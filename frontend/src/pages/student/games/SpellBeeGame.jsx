import { useState, useEffect, useRef } from "react";

const wordsByGrade = {
  6: [{ word: "PHOTOSYNTHESIS", hint: "Process by which plants make food using sunlight" },{ word: "EVAPORATION", hint: "Liquid turning into gas" },{ word: "CONSTELLATION", hint: "Group of stars forming a pattern" },{ word: "HERBIVORE", hint: "Animal that eats only plants" },{ word: "ATMOSPHERE", hint: "Layer of gases around Earth" },{ word: "SKELETON", hint: "Framework of bones in the body" },{ word: "POLLUTION", hint: "Contamination of the environment" },{ word: "NUTRITION", hint: "Process of taking in food" },{ word: "CARNIVORE", hint: "Animal that eats only meat" },{ word: "CONDENSATION", hint: "Gas turning into liquid" },{ word: "MIGRATION", hint: "Seasonal movement of animals" },{ word: "HIBERNATION", hint: "Winter sleep of animals" },{ word: "VERTEBRATE", hint: "Animal with a backbone" },{ word: "MICROSCOPE", hint: "Instrument to see tiny things" },{ word: "THERMOMETER", hint: "Device to measure temperature" },{ word: "ECOSYSTEM", hint: "Community of living and non-living things" }],
  7: [{ word: "NEUTRALIZATION", hint: "Reaction between acid and base" },{ word: "CRYSTALLIZATION", hint: "Formation of solid crystals from solution" },{ word: "RESPIRATION", hint: "Process of breaking down glucose for energy" },{ word: "SYMMETRY", hint: "Balanced arrangement on both sides" },{ word: "CONDUCTION", hint: "Transfer of heat through direct contact" },{ word: "ECOSYSTEM", hint: "Community of living things and their environment" },{ word: "PERIMETER", hint: "Total length of boundary of a shape" },{ word: "DIGESTION", hint: "Breaking down food into simpler substances" },{ word: "CONVECTION", hint: "Heat transfer through fluid movement" },{ word: "RADIATION", hint: "Heat transfer without medium" },{ word: "CHLOROPHYLL", hint: "Green pigment in leaves" },{ word: "DISTILLATION", hint: "Separating liquids by boiling points" },{ word: "FILTRATION", hint: "Separating solid from liquid" },{ word: "CORROSION", hint: "Gradual destruction of metal" },{ word: "PRECIPITATION", hint: "Rain, snow, or hail falling" },{ word: "DECOMPOSITION", hint: "Breaking down into simpler parts" }],
  8: [{ word: "COMBUSTION", hint: "Chemical reaction with oxygen producing heat" },{ word: "ELECTROPLATING", hint: "Coating metal using electricity" },{ word: "PARALLELOGRAM", hint: "Quadrilateral with opposite sides parallel" },{ word: "MICROORGANISM", hint: "Tiny living thing visible only under microscope" },{ word: "DISPLACEMENT", hint: "Shortest distance between initial and final position" },{ word: "ADOLESCENCE", hint: "Period of growth between childhood and adulthood" },{ word: "FERTILIZATION", hint: "Fusion of male and female gametes" },{ word: "CONSERVATION", hint: "Protection of natural resources" },{ word: "DEFORESTATION", hint: "Cutting down forests" },{ word: "ELECTROMAGNET", hint: "Magnet made using electric current" },{ word: "REPRODUCTION", hint: "Process of producing offspring" },{ word: "GALVANIZATION", hint: "Coating iron with zinc" },{ word: "PASTEURIZATION", hint: "Heating to kill bacteria" },{ word: "POLYMERIZATION", hint: "Joining small molecules into large ones" },{ word: "BIODEGRADABLE", hint: "Can be broken down by nature" },{ word: "CONSTELLATION", hint: "Pattern of stars in the sky" }],
  9: [{ word: "ACCELERATION", hint: "Rate of change of velocity" },{ word: "CHROMOSOME", hint: "Thread-like structure carrying genes" },{ word: "POLYNOMIAL", hint: "Expression with variables and coefficients" },{ word: "GRAVITATION", hint: "Force of attraction between masses" },{ word: "SUBLIMATION", hint: "Solid directly converting to gas" },{ word: "PYTHAGOREAN", hint: "Theorem about right triangle sides" },{ word: "ENDOPLASMIC", hint: "Network of membranes in a cell" },{ word: "STOICHIOMETRY", hint: "Calculation of reactants and products" },{ word: "ELECTROLYSIS", hint: "Breaking compounds using electricity" },{ word: "CENTRIPETAL", hint: "Force directed toward center" },{ word: "EQUILIBRIUM", hint: "State of balance" },{ word: "CRYSTALLINE", hint: "Having regular atomic arrangement" },{ word: "PROPAGATION", hint: "Spreading or transmission of waves" },{ word: "NEUTRALIZATION", hint: "Acid plus base gives salt and water" },{ word: "DISPLACEMENT", hint: "Shortest path between two points" },{ word: "EVAPORATION", hint: "Surface phenomenon of liquid to gas" }],
  10: [{ word: "ELECTROMAGNETIC", hint: "Waves that don't need a medium" },{ word: "BIODEGRADABLE", hint: "Can be broken down by microorganisms" },{ word: "TRIGONOMETRY", hint: "Study of triangles and their angles" },{ word: "REFRACTION", hint: "Bending of light when changing medium" },{ word: "HOMOLOGOUS", hint: "Series of compounds with same functional group" },{ word: "PROBABILITY", hint: "Mathematical measure of likelihood" },{ word: "SPECIATION", hint: "Formation of new species" },{ word: "RESISTIVITY", hint: "Property of material opposing current flow" },{ word: "SAPONIFICATION", hint: "Process of making soap" },{ word: "NEUTRALIZATION", hint: "Reaction producing salt and water" },{ word: "FERMENTATION", hint: "Anaerobic breakdown of sugar" },{ word: "DECOMPOSITION", hint: "Breaking compound into elements" },{ word: "DISPLACEMENT", hint: "One element replaces another" },{ word: "COMBINATION", hint: "Two substances form one product" },{ word: "PRECIPITATION", hint: "Insoluble product formed in reaction" },{ word: "DISTILLATION", hint: "Separation by boiling points" }],
  11: [{ word: "THERMODYNAMICS", hint: "Study of heat and energy transfer" },{ word: "DIFFERENTIATION", hint: "Finding the derivative of a function" },{ word: "HYBRIDIZATION", hint: "Mixing of atomic orbitals" },{ word: "SEMICONDUCTOR", hint: "Material with conductivity between metal and insulator" },{ word: "PERMUTATION", hint: "Arrangement of objects in specific order" },{ word: "EQUILIBRIUM", hint: "State where forward and reverse rates are equal" },{ word: "OSCILLATION", hint: "Repetitive back and forth motion" },{ word: "CAPACITANCE", hint: "Ability to store electric charge" },{ word: "POLARIZATION", hint: "Restricting wave vibration to one plane" },{ word: "INTERFERENCE", hint: "Superposition of two waves" },{ word: "DIFFRACTION", hint: "Bending of waves around obstacles" },{ word: "ELECTROLYSIS", hint: "Decomposition using electric current" },{ word: "ISOMERISM", hint: "Same formula different structure" },{ word: "RESONANCE", hint: "Delocalization of electrons" },{ word: "PROJECTILE", hint: "Object thrown at an angle" },{ word: "COMBINATION", hint: "Selection without order" }],
  12: [{ word: "RADIOACTIVITY", hint: "Spontaneous emission of radiation from nucleus" },{ word: "BIOTECHNOLOGY", hint: "Using living organisms in technology" },{ word: "COORDINATION", hint: "Compound with central metal atom and ligands" },{ word: "FERMENTATION", hint: "Anaerobic breakdown of glucose" },{ word: "POLARIZATION", hint: "Restriction of light vibration to one plane" },{ word: "DETERMINANT", hint: "Scalar value from a square matrix" },{ word: "ELECTROLYSIS", hint: "Decomposition using electric current" },{ word: "INTERFERENCE", hint: "Superposition of two waves" },{ word: "SEMICONDUCTOR", hint: "Conductivity between metal and insulator" },{ word: "TRANSISTOR", hint: "Device that amplifies signals" },{ word: "RECTIFICATION", hint: "Converting AC to DC" },{ word: "MODULATION", hint: "Varying carrier wave with signal" },{ word: "CRYSTALLOGRAPHY", hint: "Study of crystal structures" },{ word: "CHROMATOGRAPHY", hint: "Separating mixtures by movement" },{ word: "POLYMERIZATION", hint: "Forming long chain molecules" },{ word: "VULCANIZATION", hint: "Hardening rubber with sulfur" }],
};

export default function SpellBeeGame({ grade, onFinish }) {
  const allWords = wordsByGrade[grade] || wordsByGrade[6];
  const [words] = useState(() => allWords.sort(() => Math.random() - 0.5).slice(0, 6));
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [history, setHistory] = useState([]);
  const startTime = useRef(Date.now());
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); setShowHint(false); }, [current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const isCorrect = input.trim().toUpperCase() === words[current].word;
    if (isCorrect) setCorrect((c) => c + 1);
    setHistory((h) => [...h, { q: words[current].hint, correct: words[current].word, userAns: input.trim().toUpperCase(), isCorrect }]);
    setFeedback(isCorrect ? "correct" : words[current].word);
    setTimeout(() => {
      setFeedback(null);
      setInput("");
      if (current + 1 >= words.length) {
        const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
        onFinish(Math.round(((correct + (isCorrect ? 1 : 0)) / words.length) * 100), timeTaken, history);
      } else {
        setCurrent((c) => c + 1);
      }
    }, isCorrect ? 800 : 2000);
  };

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      {/* Progress */}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Word {current + 1}/{words.length}</span>
          <span className="text-xs text-green-400 font-bold">✓ {correct}</span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white/50 to-white/80 rounded-full transition-all" style={{ width: `${(current / words.length) * 100}%` }} />
        </div>
      </div>

      {/* Spell Card */}
      <div className={`w-full max-w-md rounded-2xl border-2 p-7 text-center transition-all duration-200 ${
        feedback === "correct" ? "border-green-500/50 bg-green-500/5" :
        feedback && feedback !== "correct" ? "border-red-500/50 bg-red-500/5" :
        "border-white/[0.08] bg-white/[0.03]"
      }`}>
        {/* Definition */}
        <div className="mb-5">
          <div className="size-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-xl text-white/40">abc</span>
          </div>
          <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Spell the word</p>
          <p className="text-white text-base font-medium leading-relaxed">{words[current].hint}</p>
        </div>

        {/* Hints */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="text-[10px] text-white/30 bg-white/[0.05] px-2.5 py-1 rounded-lg">{words[current].word.length} letters</span>
          {showHint && (
            <span className="text-[10px] text-blue-400/70 bg-blue-500/10 px-2.5 py-1 rounded-lg">
              Starts with "{words[current].word[0]}"
            </span>
          )}
        </div>

        {/* Feedback */}
        {feedback === "correct" && <p className="text-green-400 text-sm font-bold mb-4">✓ Correct!</p>}
        {feedback && feedback !== "correct" && (
          <p className="text-red-400 text-sm mb-4">Answer: <span className="font-bold font-mono tracking-wider">{feedback}</span></p>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your spelling..."
            className="flex-1 px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white text-center uppercase tracking-wider font-bold outline-none focus:border-white/25"
            disabled={!!feedback}
          />
          <button type="submit" disabled={!input.trim() || !!feedback} className="px-5 py-3.5 bg-white text-black rounded-xl font-bold disabled:opacity-30 active:scale-95 transition-transform">
            ✓
          </button>
        </form>

        {!showHint && !feedback && (
          <button onClick={() => setShowHint(true)} className="mt-3 text-white/25 text-xs hover:text-white/50 transition-colors">
            Need a hint?
          </button>
        )}
      </div>
    </div>
  );
}
