import { useState, useEffect, useRef } from "react";

const dataByGrade = {
  6: [["Photosynthesis", "Food from sunlight"], ["Evaporation", "Liquid to gas"], ["Fraction", "Part of whole"], ["Habitat", "Where organisms live"], ["Magnet", "Attracts iron"], ["Noun", "Naming word"], ["Gravity", "Pulls things down"], ["Oxygen", "Gas we breathe"], ["Skeleton", "Bone framework"], ["Herbivore", "Eats only plants"], ["Carnivore", "Eats only meat"], ["Volcano", "Erupts lava"], ["Condensation", "Gas to liquid"], ["Adjective", "Describes noun"], ["Equator", "Imaginary middle line"], ["Rotation", "Spinning on axis"]],
  7: [["Acid", "Sour taste"], ["Cell", "Basic unit of life"], ["Integer", "+ve or -ve whole number"], ["Erosion", "Wearing away of soil"], ["Velocity", "Speed with direction"], ["Pronoun", "Replaces a noun"], ["Neutral", "pH equals 7"], ["Xylem", "Carries water up"], ["Phloem", "Carries food down"], ["Polygon", "Closed shape"], ["Density", "Mass per volume"], ["Conduction", "Heat through contact"], ["Convection", "Heat through fluid"], ["Radiation", "Heat through waves"], ["Perimeter", "Boundary length"], ["Symmetry", "Mirror balance"]],
  8: [["Friction", "Opposes motion"], ["Atom", "Smallest particle"], ["Polynomial", "Algebraic expression"], ["Combustion", "Burning reaction"], ["Pressure", "Force per area"], ["Metaphor", "Implied comparison"], ["Mitosis", "Cell division"], ["Catalyst", "Speeds reaction"], ["Frequency", "Vibrations per second"], ["Amplitude", "Wave height"], ["Alloy", "Metal mixture"], ["Refraction", "Light bending"], ["Osmosis", "Water through membrane"], ["Exothermic", "Releases heat"], ["Endothermic", "Absorbs heat"], ["Parallelogram", "Opposite sides parallel"]],
  9: [["Gravity", "Attracts masses"], ["Nucleus", "Cell center"], ["Quadratic", "Degree 2 equation"], ["Catalyst", "Speeds reaction"], ["Inertia", "Resists change"], ["Alliteration", "Repeated sounds"], ["Momentum", "Mass times velocity"], ["Displacement", "Shortest path"], ["Isotope", "Same element diff mass"], ["Valency", "Combining capacity"], ["Kinetic", "Energy of motion"], ["Potential", "Stored energy"], ["Archimedes", "Buoyancy principle"], ["Chromosome", "Carries genes"], ["Logarithm", "Inverse of exponent"], ["Ecosystem", "Living + non-living"]],
  10: [["Ohm's Law", "V = IR"], ["Mitosis", "Cell division"], ["Derivative", "Rate of change"], ["pH Scale", "Acid-base measure"], ["Refraction", "Bending of light"], ["Oxymoron", "Contradictory terms"], ["Heredity", "Trait passing"], ["Dispersion", "Light splitting"], ["Resistance", "Opposes current"], ["Homologous", "Same structure"], ["Saponification", "Soap making"], ["Electromagnet", "Current makes magnet"], ["Probability", "Chance of event"], ["Speciation", "New species forming"], ["Concave", "Curves inward"], ["Convex", "Curves outward"]],
  11: [["Entropy", "Disorder measure"], ["Mole", "6.022×10²³"], ["Matrix", "Array of numbers"], ["Capacitor", "Stores charge"], ["Resonance", "Electron delocalization"], ["Hybridization", "Orbital mixing"], ["Inductance", "Opposes current change"], ["Permutation", "Ordered arrangement"], ["Combination", "Unordered selection"], ["Isomer", "Same formula diff structure"], ["Torque", "Rotational force"], ["Amplitude", "Max displacement"], ["Wavelength", "One cycle length"], ["Molarity", "Moles per litre"], ["Vector", "Has magnitude + direction"], ["Scalar", "Only magnitude"]],
  12: [["Integral", "Area under curve"], ["Transistor", "Signal amplifier"], ["Enzyme", "Biological catalyst"], ["Vector", "Magnitude + direction"], ["Wavelength", "Wave cycle length"], ["Probability", "Chance of event"], ["Semiconductor", "Between conductor insulator"], ["Diode", "One way current"], ["Rectifier", "AC to DC"], ["Determinant", "Matrix scalar value"], ["Radioactivity", "Nuclear emission"], ["Half-life", "Decay time"], ["Electrolysis", "Current splits compound"], ["Polymer", "Repeating units"], ["Fermentation", "Anaerobic breakdown"], ["Interference", "Wave superposition"]],
};

export default function MemoryGame({ grade, onFinish }) {
  const allPairs = dataByGrade[grade] || dataByGrade[6];
  const [pairs] = useState(() => allPairs.sort(() => Math.random() - 0.5).slice(0, 6));
  const MAX_MOVES = pairs.length * 3; // 18 moves for 6 pairs
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const startTime = useRef(Date.now());
  const gameEnded = useRef(false);

  useEffect(() => {
    const deck = [];
    pairs.forEach(([term, def], i) => {
      deck.push({ id: i * 2, pairId: i, text: term, type: "term" });
      deck.push({ id: i * 2 + 1, pairId: i, text: def, type: "def" });
    });
    setCards(deck.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (gameEnded.current) return;
    if (matched.length === pairs.length && pairs.length > 0) {
      gameEnded.current = true;
      const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
      const score = Math.max(100 - (moves - pairs.length) * 5, 10);
      const history = pairs.map(([term, def]) => ({ q: term, correct: def, userAns: def, isCorrect: true }));
      setTimeout(() => onFinish(score, timeTaken, history), 600);
    }
  }, [matched]);

  useEffect(() => {
    if (flipped.length === 2) {
      const newMoves = moves + 1;
      setMoves(newMoves);
      const [a, b] = flipped;
      if (a.pairId === b.pairId) {
        setMatched((m) => [...m, a.pairId]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 900);
      }
      // Check if moves exhausted
      if (newMoves >= MAX_MOVES && !(a.pairId === b.pairId && matched.length + 1 === pairs.length)) {
        setTimeout(() => {
          if (gameEnded.current) return;
          gameEnded.current = true;
          const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
          const score = Math.round((matched.length / pairs.length) * 100);
          const history = pairs.map(([term, def], i) => ({
            q: term,
            correct: def,
            userAns: matched.includes(i) ? def : "Not matched",
            isCorrect: matched.includes(i),
          }));
          onFinish(Math.max(score, 5), timeTaken, history);
        }, 1000);
      }
    }
  }, [flipped]);

  const handleFlip = (card) => {
    if (gameEnded.current || flipped.length >= 2 || flipped.find((f) => f.id === card.id) || matched.includes(card.pairId)) return;
    setFlipped((f) => [...f, card]);
  };

  const isFlipped = (card) => flipped.find((f) => f.id === card.id) || matched.includes(card.pairId);

  return (
    <div className="flex flex-col gap-5">
      {/* Stats Bar */}
      <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base text-white/40">touch_app</span>
          <span className={`text-xs ${MAX_MOVES - moves <= 4 ? "text-red-400" : "text-white/60"}`}>
            Moves: <span className="font-bold">{moves}/{MAX_MOVES}</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: pairs.length }).map((_, i) => (
            <div key={i} className={`size-2.5 rounded-full transition-all ${matched.length > i ? "bg-green-400" : "bg-white/10"}`} />
          ))}
        </div>
        <span className="text-xs text-white/60">{matched.length}/{pairs.length}</span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2.5">
        {cards.map((card) => {
          const flippedState = isFlipped(card);
          const isMatched = matched.includes(card.pairId);
          return (
            <div
              key={card.id}
              onClick={() => handleFlip(card)}
              className={`relative h-[90px] md:h-[100px] rounded-xl flex items-center justify-center p-2.5 text-center cursor-pointer transition-all duration-300 select-none ${
                isMatched
                  ? "bg-green-500/15 border-2 border-green-500/40 scale-[0.97]"
                  : flippedState
                  ? "bg-white/10 border-2 border-white/30"
                  : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/15 active:scale-95"
              }`}
            >
              {flippedState ? (
                <div className="flex flex-col items-center gap-1">
                  <span className={`text-[11px] font-bold leading-tight ${isMatched ? "text-green-300" : "text-white"}`}>
                    {card.text}
                  </span>
                  <span className={`text-[9px] ${card.type === "term" ? "text-blue-400/60" : "text-purple-400/60"}`}>
                    {card.type === "term" ? "Term" : "Definition"}
                  </span>
                </div>
              ) : (
                <span className="material-symbols-outlined text-2xl text-white/15">question_mark</span>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-center text-[10px] text-white/25">Match each term with its definition</p>
    </div>
  );
}
