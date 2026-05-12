import { useState, useEffect, useRef } from "react";

const questionsByGrade = {
  6: [
    { q: "The Sun revolves around the Earth.", a: false },{ q: "Water is made of hydrogen and oxygen.", a: true },{ q: "Plants breathe in carbon dioxide.", a: true },{ q: "The Moon produces its own light.", a: false },{ q: "Fish breathe through gills.", a: true },{ q: "Sound can travel through vacuum.", a: false },{ q: "A triangle has four sides.", a: false },{ q: "The Earth has one natural satellite.", a: true },{ q: "Herbivores eat only plants.", a: true },{ q: "Ice is heavier than water.", a: false },{ q: "The heart pumps blood.", a: true },{ q: "Spiders are insects.", a: false },
    { q: "The Earth is flat.", a: false },{ q: "Humans have 206 bones.", a: true },{ q: "Bats are birds.", a: false },{ q: "The largest organ is the skin.", a: true },{ q: "Whales are fish.", a: false },{ q: "Light travels in straight lines.", a: true },{ q: "Venus is the closest planet to the Sun.", a: false },{ q: "Rainbows have seven colors.", a: true },{ q: "Tomato is a vegetable.", a: false },{ q: "Diamonds are made of carbon.", a: true },{ q: "Penguins can fly.", a: false },{ q: "The Amazon is the longest river.", a: false },{ q: "Honey never spoils.", a: true },
  ],
  7: [
    { q: "Acids have a pH less than 7.", a: true },{ q: "Fungi can make their own food.", a: false },{ q: "Speed and velocity are the same thing.", a: false },{ q: "The nucleus controls cell activities.", a: true },{ q: "Metals are good conductors of heat.", a: true },{ q: "Parallel lines meet at infinity.", a: false },{ q: "Soil erosion is caused by wind and water.", a: true },{ q: "All rectangles are squares.", a: false },{ q: "Chlorophyll is green in color.", a: true },{ q: "Earthquakes are measured on the Richter scale.", a: true },{ q: "Negative numbers are greater than zero.", a: false },{ q: "Distillation separates mixtures.", a: true },
    { q: "Bases turn red litmus blue.", a: true },{ q: "Amoeba is a multicellular organism.", a: false },{ q: "Iron rusts in the presence of moisture.", a: true },{ q: "All triangles have equal sides.", a: false },{ q: "Convex mirrors form enlarged images.", a: false },{ q: "Photosynthesis occurs in chloroplasts.", a: true },{ q: "Mercury is the hottest planet.", a: false },{ q: "Density equals mass divided by volume.", a: true },{ q: "Arteries carry deoxygenated blood.", a: false },{ q: "Copper is a magnetic material.", a: false },{ q: "Evaporation causes cooling.", a: true },{ q: "The SI unit of force is Joule.", a: false },{ q: "Algae can perform photosynthesis.", a: true },
  ],
  8: [
    { q: "Friction always opposes motion.", a: true },{ q: "An atom is divisible.", a: true },{ q: "Pressure increases with depth in a liquid.", a: true },{ q: "All metals are solid at room temperature.", a: false },{ q: "The sum of angles in a triangle is 360°.", a: false },{ q: "Coal is a renewable resource.", a: false },{ q: "Red blood cells carry oxygen.", a: true },{ q: "Sound travels fastest in solids.", a: true },{ q: "Combustion requires oxygen.", a: true },{ q: "A cube has 8 edges.", a: false },{ q: "Plastics are biodegradable.", a: false },{ q: "Force equals mass times acceleration.", a: true },
    { q: "Liquids have a fixed shape.", a: false },{ q: "Chromosomes are found in the nucleus.", a: true },{ q: "Copper is a poor conductor.", a: false },{ q: "The Earth's core is solid iron.", a: true },{ q: "Reflection changes the speed of light.", a: false },{ q: "Bacteria reproduce by binary fission.", a: true },{ q: "A cube has 6 faces.", a: true },{ q: "Nitrogen is the most abundant gas in air.", a: true },{ q: "Loudness depends on frequency.", a: false },{ q: "CNG is a cleaner fuel than petrol.", a: true },{ q: "Deforestation increases rainfall.", a: false },{ q: "Electroplating prevents rusting.", a: true },{ q: "Pitch depends on amplitude.", a: false },
  ],
  9: [
    { q: "Acceleration due to gravity is 9.8 m/s².", a: true },{ q: "Isotopes have different number of protons.", a: false },{ q: "Work done is zero when force is perpendicular to displacement.", a: true },{ q: "Mitochondria is the powerhouse of the cell.", a: true },{ q: "The atomic number of Carbon is 12.", a: false },{ q: "Kinetic energy depends on velocity.", a: true },{ q: "All living things are made of cells.", a: true },{ q: "Displacement can be negative.", a: true },{ q: "Noble gases are highly reactive.", a: false },{ q: "A quadratic equation has at most 2 roots.", a: true },{ q: "Ozone layer is in the troposphere.", a: false },{ q: "Momentum is a vector quantity.", a: true },
    { q: "Sound travels faster in water than air.", a: true },{ q: "Protons have negative charge.", a: false },{ q: "Gravitational force depends on distance.", a: true },{ q: "Atomic mass equals protons plus electrons.", a: false },{ q: "Velocity is a scalar quantity.", a: false },{ q: "Archimedes principle relates to buoyancy.", a: true },{ q: "Power is measured in Joules.", a: false },{ q: "Covalent bonds share electrons.", a: true },{ q: "Mass changes with location.", a: false },{ q: "Frequency and wavelength are inversely related.", a: true },{ q: "Acids react with metals to give hydrogen.", a: true },{ q: "The SI unit of energy is Watt.", a: false },{ q: "Genes are located on chromosomes.", a: true },
  ],
  10: [
    { q: "Resistance is measured in Ohms.", a: true },{ q: "Convex lens always forms virtual images.", a: false },{ q: "DNA is a double helix structure.", a: true },{ q: "Ethanol is an organic compound.", a: true },{ q: "Electric current flows from negative to positive.", a: false },{ q: "The focal length of a plane mirror is infinity.", a: true },{ q: "Mendel is the father of genetics.", a: true },{ q: "Soap is acidic in nature.", a: false },{ q: "Power is the rate of doing work.", a: true },{ q: "Arteries carry blood away from the heart.", a: true },{ q: "The SI unit of frequency is Hertz.", a: true },{ q: "Decomposition reactions are exothermic.", a: false },
    { q: "Concave lens is used to correct myopia.", a: true },{ q: "Magnetic field lines form closed loops.", a: true },{ q: "Acetic acid is present in vinegar.", a: true },{ q: "Fuse wire has high melting point.", a: false },{ q: "Photosynthesis releases carbon dioxide.", a: false },{ q: "Series circuits have same current throughout.", a: true },{ q: "Baking soda is acidic.", a: false },{ q: "Ozone is triatomic oxygen.", a: true },{ q: "Copper sulphate solution is green.", a: false },{ q: "Electromagnets use direct current.", a: true },{ q: "Insulin controls blood sugar.", a: true },{ q: "Transpiration occurs through stomata.", a: true },{ q: "Galvanization uses zinc coating.", a: true },
  ],
  11: [
    { q: "Entropy of the universe always increases.", a: true },{ q: "The derivative of sin(x) is -cos(x).", a: false },{ q: "Alkanes are saturated hydrocarbons.", a: true },{ q: "Electric field inside a conductor is zero.", a: true },{ q: "Permutation considers order of arrangement.", a: true },{ q: "All electromagnetic waves need a medium.", a: false },{ q: "The integral of 1/x is ln|x| + C.", a: true },{ q: "Benzene has alternating single and double bonds.", a: false },{ q: "Moment of inertia depends on axis of rotation.", a: true },{ q: "pH of pure water is 7.", a: true },{ q: "Vectors can be added algebraically.", a: false },{ q: "Photoelectric effect proves particle nature of light.", a: true },
    { q: "Escape velocity depends on mass of object.", a: false },{ q: "SHM has constant acceleration.", a: false },{ q: "Capacitors block DC current.", a: true },{ q: "Ethene has a double bond.", a: true },{ q: "Angular momentum is always conserved.", a: false },{ q: "The derivative of e^x is e^x.", a: true },{ q: "Isothermal process has constant temperature.", a: true },{ q: "Halogens have 7 valence electrons.", a: true },{ q: "Work function depends on frequency.", a: false },{ q: "Combination is nCr formula.", a: true },{ q: "Magnetic flux has SI unit Weber.", a: true },{ q: "Ideal gas has intermolecular forces.", a: false },{ q: "Lenz's law conserves energy.", a: true },
  ],
  12: [
    { q: "Semiconductors have 4 valence electrons.", a: true },{ q: "The integral of e^x is e^x + C.", a: true },{ q: "Alpha particles have negative charge.", a: false },{ q: "Enzymes are biological catalysts.", a: true },{ q: "A full-wave rectifier uses 4 diodes.", a: true },{ q: "The determinant of a singular matrix is zero.", a: true },{ q: "Radioactive decay follows first-order kinetics.", a: true },{ q: "NAND gate is a universal gate.", a: true },{ q: "Proteins are polymers of nucleotides.", a: false },{ q: "Magnetic flux is a scalar quantity.", a: true },{ q: "Differentiation and integration are inverse operations.", a: true },{ q: "LED works on the principle of electromagnetic induction.", a: false },
    { q: "Zener diode works in reverse bias.", a: true },{ q: "RNA is double stranded.", a: false },{ q: "Transistor has three terminals.", a: true },{ q: "Inverse of a matrix always exists.", a: false },{ q: "Glucose has molecular formula C6H12O6.", a: true },{ q: "Photodiode works in forward bias.", a: false },{ q: "The rank of a zero matrix is zero.", a: true },{ q: "Starch gives blue color with iodine.", a: true },{ q: "De Broglie wavelength increases with velocity.", a: false },{ q: "Nucleons include protons and neutrons.", a: true },{ q: "Amplitude modulation changes frequency.", a: false },{ q: "DNA replication is semi-conservative.", a: true },{ q: "Faraday's law relates to electromagnetic induction.", a: true },
  ],
};

const TIME_LIMIT = 45;

export default function TrueFalseGame({ grade, onFinish }) {
  const allQ = questionsByGrade[grade] || questionsByGrade[6];
  const [questions] = useState(() => allQ.sort(() => Math.random() - 0.5).slice(0, 10));
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [feedback, setFeedback] = useState(null);
  const [history, setHistory] = useState([]);
  const correctRef = useRef(0);
  const historyRef = useRef([]);
  const startTime = useRef(Date.now());
  const gameEnded = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(timer); finish(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const finish = () => {
    if (gameEnded.current) return;
    gameEnded.current = true;
    const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
    onFinish(Math.round((correctRef.current / questions.length) * 100), timeTaken, historyRef.current);
  };

  const handleAnswer = (ans) => {
    if (feedback) return;
    const isCorrect = ans === questions[current].a;
    if (isCorrect) { setCorrect((c) => c + 1); correctRef.current += 1; }
    const entry = { q: questions[current].q, correct: questions[current].a, userAns: ans, isCorrect };
    setHistory((h) => [...h, entry]);
    historyRef.current.push(entry);
    setFeedback(isCorrect ? "correct" : "wrong");
    setTimeout(() => {
      setFeedback(null);
      if (current + 1 >= questions.length) finish();
      else setCurrent((c) => c + 1);
    }, isCorrect ? 800 : 1500);
  };

  if (timeLeft <= 0) return null;

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Q {current + 1}/{questions.length}</span>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${timeLeft <= 10 ? "bg-red-500/15 border border-red-500/20" : "bg-white/[0.05] border border-white/10"}`}>
            <span className={`text-sm font-bold font-mono ${timeLeft <= 10 ? "text-red-400" : "text-white"}`}>{timeLeft}s</span>
          </div>
          <span className="text-xs text-green-400 font-bold">✓ {correct}</span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white/50 to-white/80 rounded-full transition-all" style={{ width: `${(timeLeft / TIME_LIMIT) * 100}%` }} />
        </div>
      </div>
      <div className={`w-full max-w-lg rounded-2xl border-2 p-8 transition-all duration-200 ${
        feedback === "correct" ? "border-green-500/50 bg-green-500/5" : feedback === "wrong" ? "border-red-500/50 bg-red-500/5" : "border-white/[0.08] bg-white/[0.03]"
      }`}>
        {feedback && (
          <p className={`text-center text-xs font-bold mb-4 ${feedback === "correct" ? "text-green-400" : "text-red-400"}`}>
            {feedback === "correct" ? "✓ Correct!" : `✗ The answer was ${questions[current].a ? "TRUE" : "FALSE"}`}
          </p>
        )}
        <p className="text-lg font-bold text-white text-center leading-relaxed mb-8">{questions[current].q}</p>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => handleAnswer(true)} disabled={!!feedback} className="py-4 rounded-xl bg-green-500/10 border-2 border-green-500/20 text-green-300 font-bold text-lg hover:bg-green-500/20 hover:border-green-500/40 active:scale-95 transition-all disabled:opacity-50">
            <span className="material-symbols-outlined text-2xl block mb-1">check_circle</span>TRUE
          </button>
          <button onClick={() => handleAnswer(false)} disabled={!!feedback} className="py-4 rounded-xl bg-red-500/10 border-2 border-red-500/20 text-red-300 font-bold text-lg hover:bg-red-500/20 hover:border-red-500/40 active:scale-95 transition-all disabled:opacity-50">
            <span className="material-symbols-outlined text-2xl block mb-1">cancel</span>FALSE
          </button>
        </div>
      </div>
    </div>
  );
}
