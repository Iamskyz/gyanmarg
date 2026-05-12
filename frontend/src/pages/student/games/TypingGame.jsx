import { useState, useEffect, useRef } from "react";

const sentencesByGrade = {
  6: ["The sun is the nearest star to Earth.", "Water boils at one hundred degrees Celsius.", "Plants make food through photosynthesis.", "The Earth revolves around the Sun.", "Gravity pulls objects toward the ground.", "The moon does not have its own light.", "Animals need oxygen to survive.", "Rocks are made up of minerals.", "The heart pumps blood through the body.", "Insects have six legs and three body parts.", "Clouds are made of tiny water droplets.", "Sound travels through air as waves.", "The desert is a very dry place.", "Fish use gills to breathe underwater.", "Seeds need water and sunlight to grow."],
  7: ["Acids turn blue litmus paper red.", "The cell is the basic unit of life.", "Light travels faster than sound.", "Integers include positive and negative numbers.", "Forests help maintain the water cycle.", "Metals are good conductors of electricity.", "The nucleus controls all cell activities.", "Soil erosion is caused by wind and water.", "Temperature is measured in degrees Celsius.", "Chlorophyll gives plants their green color.", "Parallel lines never meet each other.", "The stomach digests food using acid.", "Earthquakes happen due to plate movements.", "Speed equals distance divided by time.", "Fungi break down dead organic matter."],
  8: ["Friction opposes the motion of objects.", "Chemical reactions involve breaking and forming bonds.", "The human heart has four chambers.", "Parallel lines never intersect each other.", "Sound needs a medium to travel through.", "Pressure increases with depth in liquids.", "Coal and petroleum are fossil fuels.", "Red blood cells carry oxygen to tissues.", "Force equals mass multiplied by acceleration.", "Metals expand when they are heated.", "The periodic table organizes all elements.", "Microorganisms can only be seen with microscopes.", "Electric current flows through conductors.", "Combustion requires fuel oxygen and heat.", "Adolescence is the period of rapid growth."],
  9: ["Newton discovered the laws of motion.", "Atoms are made of protons neutrons and electrons.", "The quadratic formula solves second degree equations.", "Displacement is the shortest distance between two points.", "Carbon forms four covalent bonds with other atoms.", "Work is done when force moves an object.", "Kinetic energy depends on mass and velocity.", "The mole is a unit for counting atoms.", "Gravity accelerates objects at nine point eight.", "Noble gases are stable and unreactive.", "Momentum is conserved in all collisions.", "Chromosomes carry genetic information in cells.", "Acids react with bases to form salt and water.", "The ozone layer protects us from ultraviolet rays.", "Displacement can be zero even if distance is not."],
  10: ["Ohm's law states voltage equals current times resistance.", "Heredity is the passing of traits from parents to offspring.", "The periodic table arranges elements by atomic number.", "Lenses refract light to form images.", "Probability measures the likelihood of an event occurring.", "Electric power is measured in watts.", "Concave mirrors converge parallel light rays.", "DNA carries the genetic code of living organisms.", "Chemical equations must be balanced on both sides.", "The focal length determines the power of a lens.", "Arteries carry oxygenated blood from the heart.", "Ethanol is produced by fermentation of sugars.", "Magnetic field lines go from north to south.", "Evolution explains how species change over time.", "Resistors limit the flow of electric current."],
  11: ["Entropy is a measure of disorder in a system.", "Integration finds the area under a curve.", "Electromagnetic waves do not need a medium.", "Organic chemistry studies carbon compounds.", "Vectors have both magnitude and direction.", "The derivative gives the slope of a curve.", "Capacitors store energy in electric fields.", "Alkanes are saturated hydrocarbons with single bonds.", "Angular momentum is conserved in rotation.", "The photoelectric effect proves light is a particle.", "Permutations consider the order of arrangement.", "Escape velocity is independent of object mass.", "Benzene is an aromatic compound with six carbons.", "Electric field lines never cross each other.", "The binomial theorem expands powers of sums."],
  12: ["Semiconductors have conductivity between metals and insulators.", "Differentiation gives the rate of change of a function.", "DNA carries genetic information in living organisms.", "Capacitors store electrical energy in an electric field.", "Matrix multiplication is not commutative in general.", "Transistors amplify and switch electronic signals.", "Radioactive decay follows first order kinetics.", "The determinant of a singular matrix is zero.", "Enzymes lower the activation energy of reactions.", "Logic gates are building blocks of digital circuits.", "Electromagnetic induction produces electric current.", "Proteins are polymers made of amino acids.", "The half life is constant for each isotope.", "Interference occurs when two waves overlap.", "Colligative properties depend on solute particle count."],
};

export default function TypingGame({ grade, onFinish }) {
  const allSentences = sentencesByGrade[grade] || sentencesByGrade[6];
  const [sentences] = useState(() => allSentences.sort(() => Math.random() - 0.5).slice(0, 5));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [errors, setErrors] = useState(0);
  const startTime = useRef(null);
  const inputRef = useRef(null);
  const target = sentences[currentIdx];

  useEffect(() => { inputRef.current?.focus(); }, [currentIdx]);

  const handleChange = (e) => {
    const val = e.target.value;
    if (!started) { setStarted(true); startTime.current = Date.now(); }
    setInput(val);

    if (val === target) {
      setCompleted((c) => c + 1);
      setInput("");
      if (currentIdx + 1 >= sentences.length) {
        const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
        const totalChars = sentences.join("").length;
        const wpm = Math.round((totalChars / 5) / (timeTaken / 60));
        const accuracy = Math.max(0, 100 - errors * 2);
        const score = Math.round((wpm * accuracy) / 100);
        const typingStats = { wpm, accuracy, errors, totalChars, sentences: sentences.length };
        onFinish(Math.min(score, 100), timeTaken, [{ type: "typing", ...typingStats }]);
      } else {
        setCurrentIdx((i) => i + 1);
      }
    } else if (val.length > 0 && val[val.length - 1] !== target[val.length - 1]) {
      setErrors((e) => e + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      {/* Progress */}
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Sentence {currentIdx + 1}/{sentences.length}</span>
          <span className="text-xs text-red-400/70">Errors: {errors}</span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white/50 to-white/80 rounded-full transition-all" style={{ width: `${(completed / sentences.length) * 100}%` }} />
        </div>
      </div>

      {/* Typing Card */}
      <div className="w-full max-w-lg rounded-2xl border-2 border-white/[0.08] bg-white/[0.03] p-6">
        {/* Target Text */}
        <div className="mb-5 p-4 bg-white/[0.03] rounded-xl border border-white/[0.05]">
          <p className="text-base font-mono leading-relaxed">
            {target.split("").map((char, i) => (
              <span key={i} className={
                i < input.length
                  ? input[i] === char ? "text-green-400" : "text-red-400 bg-red-500/10 rounded"
                  : i === input.length ? "text-white bg-white/20 rounded px-px" : "text-white/30"
              }>{char}</span>
            ))}
          </p>
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleChange}
          placeholder={started ? "" : "Start typing here..."}
          className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white font-mono outline-none focus:border-white/25 transition-colors"
          autoComplete="off"
          spellCheck="false"
        />

        {/* Stats */}
        {started && (
          <div className="flex items-center justify-between mt-3 text-[10px] text-white/30">
            <span>{input.length}/{target.length} characters</span>
            <span>{Math.round((input.length / target.length) * 100)}% done</span>
          </div>
        )}
      </div>

      {!started && <p className="text-white/30 text-xs">Start typing to begin the timer</p>}
    </div>
  );
}
