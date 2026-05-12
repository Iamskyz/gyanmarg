import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceChemistry = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Solid State and Solutions",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "Solid State and Solutions",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "The number of atoms in a face-centered cubic (FCC) unit cell is:", options: ["2", "4", "6", "8"], correctAnswer: 1, marks: 1, explanation: "FCC has 8 corners (1/8 each) + 6 faces (1/2 each) = 1 + 3 = 4 atoms." },
      { quiz: quiz1._id, questionText: "Schottky defect is observed in crystals with:", options: ["High coordination number and similar cation/anion sizes", "Low coordination number", "Only covalent bonds", "Only metallic bonds"], correctAnswer: 0, marks: 1, explanation: "Schottky defects occur in ionic crystals with high coordination and similar ion sizes (e.g., NaCl)." },
      { quiz: quiz1._id, questionText: "Raoult's law states that the partial vapor pressure of a component is:", options: ["Independent of mole fraction", "Proportional to its mole fraction", "Inversely proportional to mole fraction", "Equal to total pressure"], correctAnswer: 1, marks: 1, explanation: "Raoult's law: P = P° × x (partial pressure proportional to mole fraction)." },
      { quiz: quiz1._id, questionText: "Colligative properties depend on:", options: ["Nature of solute", "Number of solute particles", "Nature of solvent only", "Temperature only"], correctAnswer: 1, marks: 1, explanation: "Colligative properties depend only on the number (concentration) of solute particles." },
      { quiz: quiz1._id, questionText: "The van't Hoff factor (i) for NaCl in dilute solution is approximately:", options: ["1", "2", "3", "0.5"], correctAnswer: 1, marks: 1, explanation: "NaCl dissociates into Na⁺ and Cl⁻, so i ≈ 2." },
      { quiz: quiz1._id, questionText: "Osmotic pressure is given by:", options: ["π = nRT", "π = CRT", "π = PV", "π = RT/C"], correctAnswer: 1, marks: 1, explanation: "π = CRT where C is molar concentration, R is gas constant, T is temperature." },
      { quiz: quiz1._id, questionText: "Which type of crystal has highest melting point?", options: ["Molecular", "Ionic", "Covalent network", "Metallic"], correctAnswer: 2, marks: 1, explanation: "Covalent network crystals (like diamond) have very strong bonds and highest melting points." },
      { quiz: quiz1._id, questionText: "Packing efficiency of BCC structure is:", options: ["52%", "68%", "74%", "90%"], correctAnswer: 1, marks: 1, explanation: "BCC packing efficiency = 68%, FCC/HCP = 74%." },
      { quiz: quiz1._id, questionText: "Elevation in boiling point is given by:", options: ["ΔTb = Kb × m", "ΔTb = Kf × m", "ΔTb = RT²/ΔH", "ΔTb = P × V"], correctAnswer: 0, marks: 1, explanation: "ΔTb = Kb × m where Kb is ebullioscopic constant and m is molality." },
      { quiz: quiz1._id, questionText: "An ideal solution obeys:", options: ["Henry's law only", "Raoult's law over entire range of concentration", "Dalton's law only", "Boyle's law"], correctAnswer: 1, marks: 1, explanation: "Ideal solutions obey Raoult's law for all compositions." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Electrochemistry and Chemical Kinetics",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "Electrochemistry and Kinetics",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "The Nernst equation relates EMF to:", options: ["Temperature only", "Concentration of reactants and products", "Pressure only", "Volume"], correctAnswer: 1, marks: 1, explanation: "Nernst equation: E = E° - (RT/nF)lnQ, relates EMF to concentrations." },
      { quiz: quiz2._id, questionText: "In electrolysis, the substance deposited at cathode is:", options: ["Anion", "Cation (reduced)", "Neutral atom only", "Gas only"], correctAnswer: 1, marks: 1, explanation: "Cations migrate to cathode and get reduced (gain electrons)." },
      { quiz: quiz2._id, questionText: "Specific conductance has units of:", options: ["Ω·m", "S/m (Siemens per meter)", "Ω/m", "S·m"], correctAnswer: 1, marks: 1, explanation: "Specific conductance (conductivity) κ has units of S/m or S/cm." },
      { quiz: quiz2._id, questionText: "For a first-order reaction, the half-life is:", options: ["Dependent on initial concentration", "Independent of initial concentration (t½ = 0.693/k)", "Proportional to concentration", "Zero"], correctAnswer: 1, marks: 1, explanation: "First-order half-life t½ = 0.693/k, independent of initial concentration." },
      { quiz: quiz2._id, questionText: "The Arrhenius equation relates rate constant to:", options: ["Pressure", "Temperature and activation energy", "Volume", "Concentration"], correctAnswer: 1, marks: 1, explanation: "k = Ae^(-Ea/RT), relates rate constant to temperature and activation energy." },
      { quiz: quiz2._id, questionText: "A catalyst increases reaction rate by:", options: ["Increasing temperature", "Lowering activation energy", "Increasing concentration", "Changing equilibrium"], correctAnswer: 1, marks: 1, explanation: "Catalysts provide an alternative pathway with lower activation energy." },
      { quiz: quiz2._id, questionText: "The order of a reaction is determined by:", options: ["Stoichiometry", "Experiment", "Molecularity", "Temperature"], correctAnswer: 1, marks: 1, explanation: "Order of reaction is determined experimentally, not from balanced equation." },
      { quiz: quiz2._id, questionText: "Faraday's first law of electrolysis states mass deposited is proportional to:", options: ["Voltage", "Quantity of electricity passed", "Resistance", "Temperature"], correctAnswer: 1, marks: 1, explanation: "m = ZIt, mass deposited is proportional to charge (quantity of electricity)." },
      { quiz: quiz2._id, questionText: "Kohlrausch's law is about:", options: ["Molar conductivity at infinite dilution", "Resistance", "EMF", "Reaction rate"], correctAnswer: 0, marks: 1, explanation: "Kohlrausch's law: Λ°m = λ°₊ + λ°₋ (limiting molar conductivity is sum of ionic conductivities)." },
      { quiz: quiz2._id, questionText: "Zero-order reaction rate is:", options: ["Proportional to concentration", "Independent of concentration", "Proportional to concentration²", "Inversely proportional"], correctAnswer: 1, marks: 1, explanation: "In zero-order reactions, rate = k (constant, independent of concentration)." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Organic Chemistry - Reactions and Mechanisms",
      subject: "Chemistry",
      category: "Organic Chemistry",
      chapter: "Haloalkanes and Alcohols",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "SN1 reaction proceeds through:", options: ["One step", "Formation of carbocation intermediate", "Concerted mechanism", "Free radical"], correctAnswer: 1, marks: 1, explanation: "SN1 is a two-step mechanism involving carbocation intermediate formation." },
      { quiz: quiz3._id, questionText: "SN2 reaction rate depends on:", options: ["Only substrate", "Both substrate and nucleophile concentration", "Only nucleophile", "Temperature only"], correctAnswer: 1, marks: 1, explanation: "SN2 is bimolecular: rate = k[substrate][nucleophile]." },
      { quiz: quiz3._id, questionText: "Grignard reagent (RMgX) reacts with formaldehyde to give:", options: ["Secondary alcohol", "Primary alcohol", "Tertiary alcohol", "Aldehyde"], correctAnswer: 1, marks: 1, explanation: "RMgX + HCHO → RCH₂OH (primary alcohol) after hydrolysis." },
      { quiz: quiz3._id, questionText: "Dehydration of alcohol gives:", options: ["Alkane", "Alkene", "Alkyne", "Ether only"], correctAnswer: 1, marks: 1, explanation: "Dehydration (removal of H₂O) from alcohol produces alkene." },
      { quiz: quiz3._id, questionText: "Lucas test distinguishes between:", options: ["Aldehydes and ketones", "Primary, secondary, and tertiary alcohols", "Acids and bases", "Alkanes and alkenes"], correctAnswer: 1, marks: 1, explanation: "Lucas test (ZnCl₂/HCl) differentiates 1°, 2°, and 3° alcohols by reaction rate." },
      { quiz: quiz3._id, questionText: "Williamson synthesis is used to prepare:", options: ["Alcohols", "Ethers", "Esters", "Amines"], correctAnswer: 1, marks: 1, explanation: "Williamson synthesis: R-O⁻ + R'-X → R-O-R' (ether)." },
      { quiz: quiz3._id, questionText: "Phenol is more acidic than ethanol because:", options: ["It has more carbon atoms", "Phenoxide ion is stabilized by resonance", "It is aromatic", "It has higher molecular weight"], correctAnswer: 1, marks: 1, explanation: "Phenoxide ion is resonance-stabilized, making phenol more acidic." },
      { quiz: quiz3._id, questionText: "Kolbe's reaction involves:", options: ["Phenol + CO₂ + NaOH → salicylic acid", "Alcohol + acid → ester", "Alkene + H₂ → alkane", "Aldehyde + HCN → cyanohydrin"], correctAnswer: 0, marks: 1, explanation: "Kolbe's reaction: sodium phenoxide + CO₂ under pressure → sodium salicylate." },
      { quiz: quiz3._id, questionText: "Markovnikov's rule applies to:", options: ["Elimination reactions", "Addition of HX to unsymmetrical alkenes", "Substitution reactions", "Oxidation reactions"], correctAnswer: 1, marks: 1, explanation: "Markovnikov's rule: H adds to carbon with more H atoms in HX addition to alkenes." },
      { quiz: quiz3._id, questionText: "Aldol condensation occurs between:", options: ["Two acids", "Two aldehydes/ketones with α-hydrogen", "Two alcohols", "Acid and base"], correctAnswer: 1, marks: 1, explanation: "Aldol condensation involves aldehydes/ketones having α-hydrogen atoms." },
    ]);

    console.log("✓ Class 12 Science - Chemistry: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceChemistry };
