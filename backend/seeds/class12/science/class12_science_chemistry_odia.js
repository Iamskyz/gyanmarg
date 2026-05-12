import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceChemistryOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଘନ ଅବସ୍ଥା ଏବଂ ଦ୍ରାବଣ",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "ଘନ ଅବସ୍ଥା ଏବଂ ଦ୍ରାବଣ",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Face-centered cubic (FCC) unit cell ରେ କେତେଟି atom ଥାଏ?", options: ["2", "4", "6", "8"], correctAnswer: 1, marks: 1, explanation: "FCC ରେ ମୋଟ 4ଟି atom ଥାଏ।" },
      { quiz: quiz1._id, questionText: "Schottky defect କେଉଁ ପ୍ରକାର crystal ରେ ଦେଖାଯାଏ?", options: ["ଉଚ୍ଚ coordination number ଏବଂ ସମାନ ion size", "ନିମ୍ନ coordination number", "କେବଳ covalent bond", "କେବଳ metallic bond"], correctAnswer: 0, marks: 1, explanation: "NaCl ପରି ionic crystal ରେ Schottky defect ହୁଏ।" },
      { quiz: quiz1._id, questionText: "Raoult law ଅନୁଯାୟୀ partial vapor pressure କାହା ସହ ସମାନୁପାତିକ?", options: ["Mole fraction ସହ ସମ୍ପର୍କ ନାହିଁ", "Mole fraction", "Mole fraction ର inverse", "Total pressure"], correctAnswer: 1, marks: 1, explanation: "P = P° × x।" },
      { quiz: quiz1._id, questionText: "Colligative properties କାହାଉପରେ ନିର୍ଭର କରେ?", options: ["Solute ର nature", "Solute particle ର ସଂଖ୍ୟା", "Solvent ର nature", "Temperature"], correctAnswer: 1, marks: 1, explanation: "Colligative properties କେବଳ particle ର ସଂଖ୍ୟା ଉପରେ ନିର୍ଭର କରେ।" },
      { quiz: quiz1._id, questionText: "Dilute solution ରେ NaCl ପାଇଁ van't Hoff factor କେତେ?", options: ["1", "2", "3", "0.5"], correctAnswer: 1, marks: 1, explanation: "NaCl → Na⁺ + Cl⁻, ତେଣୁ i ≈ 2।" },
      { quiz: quiz1._id, questionText: "Osmotic pressure ର ସମୀକରଣ କଣ?", options: ["π=nRT", "π=CRT", "π=PV", "π=RT/C"], correctAnswer: 1, marks: 1, explanation: "π = CRT।" },
      { quiz: quiz1._id, questionText: "ସର୍ବାଧିକ melting point କେଉଁ crystal ରେ ଥାଏ?", options: ["Molecular", "Ionic", "Covalent network", "Metallic"], correctAnswer: 2, marks: 1, explanation: "Diamond ପରି covalent network crystal ର melting point ସର୍ବାଧିକ।" },
      { quiz: quiz1._id, questionText: "BCC structure ର packing efficiency କେତେ?", options: ["52%", "68%", "74%", "90%"], correctAnswer: 1, marks: 1, explanation: "BCC packing efficiency = 68%।" },
      { quiz: quiz1._id, questionText: "Boiling point elevation ର ସମୀକରଣ କଣ?", options: ["ΔTb = Kb × m", "ΔTb = Kf × m", "ΔTb = RT²/ΔH", "ΔTb = PV"], correctAnswer: 0, marks: 1, explanation: "ΔTb = Kb × m।" },
      { quiz: quiz1._id, questionText: "Ideal solution କେଉଁ ନିୟମ ଅନୁସରଣ କରେ?", options: ["Henry law", "Raoult law", "Dalton law", "Boyle law"], correctAnswer: 1, marks: 1, explanation: "Ideal solution ସମସ୍ତ concentration ରେ Raoult law ଅନୁସରଣ କରେ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ତଡିତ୍ ରସାୟନ ଏବଂ ରାସାୟନିକ ଗତିବିଜ୍ଞାନ",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "Electrochemistry and Kinetics",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "Nernst equation କାହା ସହ EMF କୁ ସମ୍ପର୍କିତ କରେ?", options: ["Temperature", "Reactant ଏବଂ product ର concentration", "Pressure", "Volume"], correctAnswer: 1, marks: 1, explanation: "Nernst equation concentration ଉପରେ ନିର୍ଭର କରେ।" },
      { quiz: quiz2._id, questionText: "Electrolysis ରେ cathode ଉପରେ କଣ ଜମାହୁଏ?", options: ["Anion", "Cation", "Neutral atom", "Gas"], correctAnswer: 1, marks: 1, explanation: "Cathode ରେ reduction ହୁଏ।" },
      { quiz: quiz2._id, questionText: "Specific conductance ର unit କଣ?", options: ["Ω·m", "S/m", "Ω/m", "S·m"], correctAnswer: 1, marks: 1, explanation: "Conductivity ର unit S/m।" },
      { quiz: quiz2._id, questionText: "First order reaction ର half-life କେମିତି?", options: ["Initial concentration ଉପରେ ନିର୍ଭର", "Initial concentration ଠାରୁ ସ୍ୱାଧୀନ", "Concentration ସହ ସମାନୁପାତିକ", "Zero"], correctAnswer: 1, marks: 1, explanation: "t½ = 0.693/k।" },
      { quiz: quiz2._id, questionText: "Arrhenius equation କାହା ସହ rate constant କୁ ସମ୍ପର୍କିତ କରେ?", options: ["Pressure", "Temperature ଏବଂ activation energy", "Volume", "Concentration"], correctAnswer: 1, marks: 1, explanation: "k = Ae^(-Ea/RT)।" },
      { quiz: quiz2._id, questionText: "Catalyst reaction rate କିପରି ବଢ଼ାଏ?", options: ["Temperature ବଢ଼ାଇ", "Activation energy କମାଇ", "Concentration ବଢ଼ାଇ", "Equilibrium ବଦଳାଇ"], correctAnswer: 1, marks: 1, explanation: "Catalyst activation energy କମାଇଦେଏ।" },
      { quiz: quiz2._id, questionText: "Reaction order କିପରି ନିର୍ଣ୍ଣୟ କରାଯାଏ?", options: ["Stoichiometry", "Experiment", "Molecularity", "Temperature"], correctAnswer: 1, marks: 1, explanation: "Reaction order experimentally ନିର୍ଣ୍ଣୟ କରାଯାଏ।" },
      { quiz: quiz2._id, questionText: "Faraday first law ଅନୁଯାୟୀ deposited mass କାହା ସହ ସମାନୁପାତିକ?", options: ["Voltage", "Electricity quantity", "Resistance", "Temperature"], correctAnswer: 1, marks: 1, explanation: "m ∝ It।" },
      { quiz: quiz2._id, questionText: "Kohlrausch law କାହା ସହ ସମ୍ପର୍କିତ?", options: ["Infinite dilution ର molar conductivity", "Resistance", "EMF", "Reaction rate"], correctAnswer: 0, marks: 1, explanation: "Limiting molar conductivity ହେଉଛି ionic conductivity ର ଯୋଗଫ।" },
      { quiz: quiz2._id, questionText: "Zero order reaction ର rate କେମିତି?", options: ["Concentration ସହ ସମାନୁପାତିକ", "Concentration ଠାରୁ ସ୍ୱାଧୀନ", "Concentration² ସହ ସମାନୁପାତିକ", "Inverse"], correctAnswer: 1, marks: 1, explanation: "Zero order reaction ରେ rate constant ରହେ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଜୀବରସାୟନ - ପ୍ରତିକ୍ରିୟା ଏବଂ ପ୍ରକ୍ରିୟା",
      subject: "Chemistry",
      category: "Organic Chemistry",
      chapter: "Haloalkanes and Alcohols",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "SN1 reaction କିପରି ଘଟେ?", options: ["One step", "Carbocation intermediate ମାଧ୍ୟମରେ", "Concerted mechanism", "Free radical"], correctAnswer: 1, marks: 1, explanation: "SN1 ରେ carbocation ମଧ୍ୟସ୍ଥ ଗଠିତ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "SN2 reaction ର rate କାହାଉପରେ ନିର୍ଭର କରେ?", options: ["Substrate", "Substrate ଏବଂ nucleophile concentration", "Nucleophile", "Temperature"], correctAnswer: 1, marks: 1, explanation: "SN2 bimolecular reaction।" },
      { quiz: quiz3._id, questionText: "Grignard reagent formaldehyde ସହ ପ୍ରତିକ୍ରିୟା କଲେ କଣ ମିଳେ?", options: ["Secondary alcohol", "Primary alcohol", "Tertiary alcohol", "Aldehyde"], correctAnswer: 1, marks: 1, explanation: "Primary alcohol ଗଠିତ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Alcohol ର dehydration ରେ କଣ ମିଳେ?", options: ["Alkane", "Alkene", "Alkyne", "Ether"], correctAnswer: 1, marks: 1, explanation: "Dehydration ରେ alkene ମିଳେ।" },
      { quiz: quiz3._id, questionText: "Lucas test କାହାକୁ ପୃଥକ କରେ?", options: ["Aldehyde ଏବଂ ketone", "1°,2°,3° alcohol", "Acid ଏବଂ base", "Alkane ଏବଂ alkene"], correctAnswer: 1, marks: 1, explanation: "Lucas test alcohol differentiation ପାଇଁ ବ୍ୟବହୃତ।" },
      { quiz: quiz3._id, questionText: "Williamson synthesis ଦ୍ୱାରା କଣ ପ୍ରସ୍ତୁତ ହୁଏ?", options: ["Alcohol", "Ether", "Ester", "Amine"], correctAnswer: 1, marks: 1, explanation: "Williamson synthesis ରେ ether ତିଆରି ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Phenol ethanol ଠାରୁ ଅଧିକ acidic କାହିଁକି?", options: ["ଅଧିକ carbon atom", "Phenoxide ion resonance stabilized", "Aromatic nature", "Molecular weight"], correctAnswer: 1, marks: 1, explanation: "Phenoxide ion resonance ଦ୍ୱାରା ସ୍ଥିର।" },
      { quiz: quiz3._id, questionText: "Kolbe reaction ରେ କଣ ହୁଏ?", options: ["Phenol + CO₂ + NaOH → salicylic acid", "Alcohol + acid → ester", "Alkene + H₂ → alkane", "Aldehyde + HCN"], correctAnswer: 0, marks: 1, explanation: "Kolbe reaction ରେ sodium salicylate ଗଠିତ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Markovnikov rule କେଉଁ reaction ରେ ପ୍ରୟୋଗ ହୁଏ?", options: ["Elimination", "HX addition to unsymmetrical alkene", "Substitution", "Oxidation"], correctAnswer: 1, marks: 1, explanation: "HX addition ରେ Markovnikov rule ଲାଗୁ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Aldol condensation କାହା ମଧ୍ୟରେ ହୁଏ?", options: ["Two acids", "Aldehyde/ketone with α-hydrogen", "Two alcohols", "Acid and base"], correctAnswer: 1, marks: 1, explanation: "α-hydrogen ଥିବା aldehyde କିମ୍ବା ketone ରେ aldol condensation ହୁଏ।" },
    ]);

    console.log("✓ Class 12 Science - Chemistry Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceChemistryOdia };
