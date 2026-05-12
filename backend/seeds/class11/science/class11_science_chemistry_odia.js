import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ChemistryOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Structure of Atom
    const chemQuiz1 = await Quiz.create({
      title: "ପରମାଣୁର ଗଠନ",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "Atomic Structure",
      grade: 11,
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
      { quiz: chemQuiz1._id, questionText: "ଇଲେକ୍ଟ୍ରନ୍ କିଏ ଆବିଷ୍କାର କଲେ?", options: ["ରଦରଫୋର୍ଡ", "J.J. ଥମସନ", "ବୋର", "ଚ୍ୟାଡୱିକ୍"], correctAnswer: 1, marks: 1, explanation: "J.J. ଥମସନ 1897 ମସିହାରେ ଇଲେକ୍ଟ୍ରନ୍ ଆବିଷ୍କାର କରିଥିଲେ।" },
      { quiz: chemQuiz1._id, questionText: "ପରମାଣୁର କେନ୍ଦ୍ରକରେ କ’ଣ ଥାଏ?", options: ["ଇଲେକ୍ଟ୍ରନ୍ ଏବଂ ପ୍ରୋଟନ୍", "ପ୍ରୋଟନ୍ ଏବଂ ନ୍ୟୁଟ୍ରନ୍", "ଇଲେକ୍ଟ୍ରନ୍ ଏବଂ ନ୍ୟୁଟ୍ରନ୍", "କେବଳ ପ୍ରୋଟନ୍"], correctAnswer: 1, marks: 1, explanation: "କେନ୍ଦ୍ରକରେ ପ୍ରୋଟନ୍ ଏବଂ ନ୍ୟୁଟ୍ରନ୍ ଥାଏ।" },
      { quiz: chemQuiz1._id, questionText: "ଏକ ମୌଳିକ ପଦାର୍ଥର atomic number ସମାନ:", options: ["ନ୍ୟୁଟ୍ରନ୍ ସଂଖ୍ୟା", "ପ୍ରୋଟନ୍ ସଂଖ୍ୟା", "ଭର ସଂଖ୍ୟା", "ଆୟନରେ ଇଲେକ୍ଟ୍ରନ୍ ସଂଖ୍ୟା"], correctAnswer: 1, marks: 1, explanation: "Atomic number = ପ୍ରୋଟନ୍ ସଂଖ୍ୟା।" },
      { quiz: chemQuiz1._id, questionText: "Isotopes ରେ କ’ଣ ସମାନ ଥାଏ?", options: ["ଭର ସଂଖ୍ୟା", "ନ୍ୟୁଟ୍ରନ୍ ସଂଖ୍ୟା", "Atomic number", "ଭୌତିକ ଗୁଣ"], correctAnswer: 2, marks: 1, explanation: "Isotopes ର atomic number ସମାନ ଥାଏ।" },
      { quiz: chemQuiz1._id, questionText: "3rd shell ରେ ସର୍ବାଧିକ କେତେ ଇଲେକ୍ଟ୍ରନ୍ ଥାଇପାରେ?", options: ["2", "8", "18", "32"], correctAnswer: 2, marks: 1, explanation: "2n² ସୂତ୍ର ଅନୁସାରେ n=3 ପାଇଁ 18।" },
      { quiz: chemQuiz1._id, questionText: "Heisenberg's Uncertainty Principle କ’ଣ କୁହେ?", options: ["ଇଲେକ୍ଟ୍ରନ୍ ନିଶ୍ଚିତ କକ୍ଷରେ ଘୁଞ୍ଚେ", "ସ୍ଥାନ ଏବଂ ଭରବେଗକୁ ସଠିକ ଭାବେ ଏକାସାଥି ଜଣାଯାଏନି", "ଶକ୍ତି quantized", "ଆଲୋକ ତରଙ୍ଗ"], correctAnswer: 1, marks: 1, explanation: "ଇଲେକ୍ଟ୍ରନ୍ ର ସ୍ଥାନ ଏବଂ ଭରବେଗକୁ ଏକାସାଥି ସଠିକ ଭାବେ ଜଣାଯାଏନି।" },
      { quiz: chemQuiz1._id, questionText: "s-orbital ର ଆକାର କ’ଣ?", options: ["ଡମ୍ବେଲ୍", "ଗୋଲାକାର", "କ୍ଲୋଭର ଲିଫ୍", "ରେଖୀୟ"], correctAnswer: 1, marks: 1, explanation: "s-orbital ଗୋଲାକାର ହୁଏ।" },
      { quiz: chemQuiz1._id, questionText: "Quantum numbers କ’ଣ ବର୍ଣ୍ଣନା କରେ?", options: ["କେନ୍ଦ୍ରକ ଗଠନ", "orbital ଏବଂ ଇଲେକ୍ଟ୍ରନ୍ ଗୁଣ", "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା", "ଅଣୁର ଆକୃତି"], correctAnswer: 1, marks: 1, explanation: "Quantum numbers ଇଲେକ୍ଟ୍ରନ୍ ର ଅବସ୍ଥା ବର୍ଣ୍ଣନା କରେ।" },
      { quiz: chemQuiz1._id, questionText: "Aufbau principle କ’ଣ କୁହେ?", options: ["ଦୁଇ ଇଲେକ୍ଟ୍ରନ୍ ର quantum numbers ସମାନ ନୁହେଁ", "ଇଲେକ୍ଟ୍ରନ୍ ପ୍ରଥମେ ନିମ୍ନ ଶକ୍ତି orbital ପୂରଣ କରେ", "ସମସ୍ତ orbital ଅର୍ଦ୍ଧପୂରଣ ପରେ pair ହୁଏ", "ଇଲେକ୍ଟ୍ରନ୍ ସମ ଦିଗରେ spin କରେ"], correctAnswer: 1, marks: 1, explanation: "ଇଲେକ୍ଟ୍ରନ୍ ଶକ୍ତି କ୍ରମ ଅନୁଯାୟୀ orbital ପୂରଣ କରେ।" },
      { quiz: chemQuiz1._id, questionText: "Carbon (Z=6) ର electronic configuration କ’ଣ?", options: ["1s² 2s² 2p²", "1s² 2s⁴", "1s² 2p⁴", "2s² 2p⁴"], correctAnswer: 0, marks: 1, explanation: "Carbon ର configuration ହେଉଛି 1s² 2s² 2p²।" },
    ]);

    // Subcategory 2: Chemical Bonding
    const chemQuiz2 = await Quiz.create({
      title: "ରାସାୟନିକ ବନ୍ଧନ ଏବଂ ଅଣୁ ଗଠନ",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "Chemical Bonding",
      grade: 11,
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
      { quiz: chemQuiz2._id, questionText: "Ionic bond କିପରି ଗଠିତ ହୁଏ?", options: ["ଇଲେକ୍ଟ୍ରନ୍ ଅଂଶୀଦାରୀ", "ଇଲେକ୍ଟ୍ରନ୍ ସ୍ଥାନାନ୍ତର", "ପାରସ୍ପରିକ ଆକର୍ଷଣ", "ନ୍ୟୁକ୍ଲିୟର fusion"], correctAnswer: 1, marks: 1, explanation: "Ionic bond ଇଲେକ୍ଟ୍ରନ୍ ସ୍ଥାନାନ୍ତର ଦ୍ୱାରା ଗଠିତ ହୁଏ।" },
      { quiz: chemQuiz2._id, questionText: "Covalent bond କିପରି ଗଠିତ ହୁଏ?", options: ["ଇଲେକ୍ଟ୍ରନ୍ ସ୍ଥାନାନ୍ତର", "ଇଲେକ୍ଟ୍ରନ୍ ଅଂଶୀଦାରୀ", "ଧାତୁ ବନ୍ଧନ", "ବିଦ୍ୟୁତ୍ସ୍ଥାତିକ ଆକର୍ଷଣ"], correctAnswer: 1, marks: 1, explanation: "Covalent bond ଇଲେକ୍ଟ୍ରନ୍ ଅଂଶୀଦାରୀ ଦ୍ୱାରା ଗଠିତ ହୁଏ।" },
      { quiz: chemQuiz2._id, questionText: "Octet rule କ’ଣ କୁହେ?", options: ["ସମସ୍ତ ଇଲେକ୍ଟ୍ରନ୍ ହରାଇବା", "valence shell ରେ 8 ଇଲେକ୍ଟ୍ରନ୍ ପାଇବା", "ମୋଟ 2 ଇଲେକ୍ଟ୍ରନ୍ ଥିବା", "ସମସ୍ତ ଇଲେକ୍ଟ୍ରନ୍ ଅଂଶୀଦାରୀ"], correctAnswer: 1, marks: 1, explanation: "ସ୍ଥିରତା ପାଇଁ ପରମାଣୁ 8 ଇଲେକ୍ଟ୍ରନ୍ ପାଇବାକୁ ଚେଷ୍ଟା କରେ।" },
      { quiz: chemQuiz2._id, questionText: "Methane (CH₄) ର ଆକାର କ’ଣ?", options: ["ରେଖୀୟ", "Trigonal planar", "Tetrahedral", "Octahedral"], correctAnswer: 2, marks: 1, explanation: "CH₄ ର ଆକାର tetrahedral ଅଟେ।" },
      { quiz: chemQuiz2._id, questionText: "କେଉଁ ଅଣୁ ରେଖୀୟ ଆକାରର?", options: ["H₂O", "CO₂", "NH₃", "CH₄"], correctAnswer: 1, marks: 1, explanation: "CO₂ ରେଖୀୟ ଆକାରର।" },
      { quiz: chemQuiz2._id, questionText: "Hydrogen bonding ସବୁଠାରୁ ଶକ୍ତିଶାଳୀ କେଉଁଠି?", options: ["HCl", "HF", "HBr", "HI"], correctAnswer: 1, marks: 1, explanation: "HF ରେ ସବୁଠାରୁ ଶକ୍ତିଶାଳୀ hydrogen bonding ଥାଏ।" },
      { quiz: chemQuiz2._id, questionText: "O₂ ଅଣୁର bond order କେତେ?", options: ["1", "2", "3", "1.5"], correctAnswer: 1, marks: 1, explanation: "O₂ ରେ double bond ଥାଏ, bond order = 2।" },
      { quiz: chemQuiz2._id, questionText: "VSEPR theory କ’ଣ ପୂର୍ବାନୁମାନ କରେ?", options: ["Bond energy", "ଅଣୁର ଆକାର", "Reaction rate", "Atomic mass"], correctAnswer: 1, marks: 1, explanation: "VSEPR theory ଅଣୁର ଆକାର ପୂର୍ବାନୁମାନ କରେ।" },
      { quiz: chemQuiz2._id, questionText: "ଜଳ ଅଣୁର ଆକାର କ’ଣ?", options: ["ରେଖୀୟ", "Bent/V-shaped", "Trigonal", "Tetrahedral"], correctAnswer: 1, marks: 1, explanation: "H₂O ର ଆକାର bent ଅଟେ।" },
      { quiz: chemQuiz2._id, questionText: "Sigma (σ) bond କିପରି ଗଠିତ ହୁଏ?", options: ["Lateral overlap", "Head-on overlap", "No overlap", "π overlap"], correctAnswer: 1, marks: 1, explanation: "Sigma bond head-on overlap ଦ୍ୱାରା ଗଠିତ ହୁଏ।" },
    ]);

    // Subcategory 3: States of Matter
    const chemQuiz3 = await Quiz.create({
      title: "ଦ୍ରବ୍ୟର ଅବସ୍ଥା - ଗ୍ୟାସ",
      subject: "Chemistry",
      category: "Physical Chemistry",
      chapter: "States of Matter",
      grade: 11,
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
      { quiz: chemQuiz3._id, questionText: "Boyle's Law କ’ଣ କୁହେ?", options: ["P ∝ V", "P ∝ 1/V", "P ∝ T", "V ∝ T"], correctAnswer: 1, marks: 1, explanation: "Boyle's Law ଅନୁସାରେ P ∝ 1/V।" },
      { quiz: chemQuiz3._id, questionText: "Charles's Law କ’ଣ କୁହେ?", options: ["V ∝ 1/T", "V ∝ T", "P ∝ T", "P ∝ 1/V"], correctAnswer: 1, marks: 1, explanation: "Charles's Law ଅନୁସାରେ V ∝ T।" },
      { quiz: chemQuiz3._id, questionText: "Ideal gas equation କ’ଣ?", options: ["PV = nRT", "PV = mRT", "P = nRT/V²", "PV² = nRT"], correctAnswer: 0, marks: 1, explanation: "Ideal gas equation ହେଉଛି PV = nRT।" },
      { quiz: chemQuiz3._id, questionText: "STP ରେ 1 mole ideal gas କେତେ ଆୟତନ ଦଖଳ କରେ?", options: ["11.2 L", "22.4 L", "44.8 L", "1 L"], correctAnswer: 1, marks: 1, explanation: "STP ରେ 1 mole gas = 22.4 L।" },
      { quiz: chemQuiz3._id, questionText: "Dalton's Law କ’ଣ କୁହେ?", options: ["ମୋଟ ଚାପ = partial pressure ଗୁଡିକର ଯୋଗ", "ମୋଟ ଆୟତନ = partial volume ଯୋଗ", "P₁V₁ = P₂V₂", "PV = constant"], correctAnswer: 0, marks: 1, explanation: "ମୋଟ ଚାପ = ସମସ୍ତ partial pressure ର ଯୋଗ।" },
      { quiz: chemQuiz3._id, questionText: "SI units ରେ gas constant R ର ମୂଲ୍ୟ କେତେ?", options: ["0.0821 L⋅atm/mol⋅K", "8.314 J/mol⋅K", "1.987 cal/mol⋅K", "ସବୁଠିକ"], correctAnswer: 3, marks: 1, explanation: "R ର ଭିନ୍ନ ଏକକରେ ଭିନ୍ନ ମୂଲ୍ୟ ଅଛି।" },
      { quiz: chemQuiz3._id, questionText: "Real gases କେବେ ideal behavior ରୁ ବିଚଳିତ ହୁଏ?", options: ["ଉଚ୍ଚ T, କମ P", "କମ T, ଉଚ୍ଚ P", "ସମସ୍ତ ଅବସ୍ଥାରେ", "କେବଳ STP"], correctAnswer: 1, marks: 1, explanation: "କମ ତାପମାତ୍ରା ଏବଂ ଉଚ୍ଚ ଚାପରେ deviation ଅଧିକ।" },
      { quiz: chemQuiz3._id, questionText: "Graham's Law କ’ଣ ସହ ସମ୍ପର୍କିତ?", options: ["ଗ୍ୟାସ ଚାପ", "ବିସ୍ତାର ହାର", "ଗ୍ୟାସ ଆୟତନ", "ଗ୍ୟାସ ତାପମାତ୍ରା"], correctAnswer: 1, marks: 1, explanation: "Graham's Law ବିସ୍ତାର ହାର ସହ ସମ୍ପର୍କିତ।" },
      { quiz: chemQuiz3._id, questionText: "ଗ୍ୟାସ ଅଣୁମାନଙ୍କ kinetic energy କ’ଣ ସହ ସମାନୁପାତିକ?", options: ["ଚାପ", "ଆୟତନ", "Absolute temperature", "Molar mass"], correctAnswer: 2, marks: 1, explanation: "Kinetic energy absolute temperature ସହ ସମାନୁପାତିକ।" },
      { quiz: chemQuiz3._id, questionText: "Van der Waals equation କ’ଣକୁ ଧ୍ୟାନରେ ରଖେ?", options: ["Ideal gas behavior", "Intermolecular forces ଏବଂ molecular volume", "Nuclear forces", "Gravitational forces"], correctAnswer: 1, marks: 1, explanation: "Van der Waals equation intermolecular attraction ଏବଂ molecular volume ପାଇଁ correction କରେ।" },
    ]);

    console.log("✓ Class 11 Science - Chemistry: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11ChemistryOdia;
