
// Full Odia translated Class 9 Science file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9ScienceOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ଆମ ପରିବେଶରେ ପଦାର୍ଥ
    const scienceQuiz1 = await Quiz.create({
      title: "ଆମ ପରିବେଶରେ ପଦାର୍ଥ",
      subject: "Science",
      category: "ରସାୟନ ବିଜ୍ଞାନ",
      chapter: "Matter",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz1._id, questionText: "ପଦାର୍ଥ କାହାରୁ ତିଆରି?", options: ["କେବଳ ପରମାଣୁ", "କଣିକା", "କେବଳ ଅଣୁ", "କେବଳ ଇଲେକ୍ଟ୍ରନ୍"], correctAnswer: 1, marks: 1, explanation: "ପଦାର୍ଥ ଛୋଟ କଣିକାରୁ ତିଆରି।" },
      { quiz: scienceQuiz1._id, questionText: "କେଉଁ ଅବସ୍ଥାର ପଦାର୍ଥର ନିର୍ଦ୍ଧାରିତ ଆକାର ଏବଂ ଆୟତନ ଥାଏ?", options: ["ଘନ", "ତରଳ", "ବାୟୁ", "ପ୍ଲାଜ୍ମା"], correctAnswer: 0, marks: 1, explanation: "ଘନର ନିର୍ଦ୍ଧାରିତ ଆକାର ଏବଂ ଆୟତନ ଥାଏ।" },
      { quiz: scienceQuiz1._id, questionText: "ତରଳରୁ ବାୟୁକୁ ପରିବର୍ତ୍ତନକୁ କଣ କୁହାଯାଏ?", options: ["ସଂଘନନ", "ବାଷ୍ପୀଭବନ", "ଉର୍ଦ୍ଧ୍ୱପାତନ", "ଜମା"], correctAnswer: 1, marks: 1, explanation: "ବାଷ୍ପୀଭବନରେ ତରଳ ବାୟୁରେ ପରିଣତ ହୁଏ।" },
      { quiz: scienceQuiz1._id, questionText: "ଡ୍ରାଇ ଆଇସ୍ ସିଧାସଳଖ ବାୟୁକୁ ପରିଣତ ହୁଏ। ଏହାକୁ କଣ କୁହାଯାଏ?", options: ["ବାଷ୍ପୀଭବନ", "ସଂଘନନ", "ଉର୍ଦ୍ଧ୍ୱପାତନ", "ଗଳନ"], correctAnswer: 2, marks: 1, explanation: "ଘନରୁ ସିଧା ବାୟୁକୁ ଯିବାକୁ ଉର୍ଦ୍ଧ୍ୱପାତନ କୁହାଯାଏ।" },
      { quiz: scienceQuiz1._id, questionText: "କେଉଁ କାରକ ବାଷ୍ପୀଭବନ ହାର ବଢ଼ାଏ?", options: ["ତାପମାତ୍ରା କମିବା", "ଆର୍ଦ୍ରତା ବଢ଼ିବା", "ପୃଷ୍ଠ ଫଳ ବଢ଼ିବା", "ବାୟୁ ବେଗ କମିବା"], correctAnswer: 2, marks: 1, explanation: "ଅଧିକ ପୃଷ୍ଠ ଫଳରେ ବାଷ୍ପୀଭବନ ହାର ବଢ଼େ।" },
      { quiz: scienceQuiz1._id, questionText: "ଘନ ଯେଉଁ ତାପମାତ୍ରାରେ ଗଳେ ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["ସ୍ଫୁଟନାଙ୍କ", "ଗଳନାଙ୍କ", "ଜମାଙ୍କ", "ତୁଷାରାଙ୍କ"], correctAnswer: 1, marks: 1, explanation: "ଘନରୁ ତରଳ ହେବାର ତାପମାତ୍ରା ହେଉଛି ଗଳନାଙ୍କ।" },
      { quiz: scienceQuiz1._id, questionText: "ବାୟୁକୁ ସହଜରେ ସଂକୋଚନ କରାଯାଇପାରେ କାରଣ:", options: ["କଣିକା ଖୁବ ନିକଟ", "କଣିକା ମଧ୍ୟରେ ବଡ଼ ଖାଲି ସ୍ଥାନ", "କଣିକା ଚଳନ କରେନାହିଁ", "କଣିକା ଭାରୀ"], correctAnswer: 1, marks: 1, explanation: "ବାୟୁର କଣିକା ମଧ୍ୟରେ ଅଧିକ ଖାଲି ସ୍ଥାନ ଥାଏ।" },
      { quiz: scienceQuiz1._id, questionText: "ଜଳର ସ୍ଫୁଟନାଙ୍କ Kelvin ରେ କେତେ?", options: ["100 K", "273 K", "373 K", "473 K"], correctAnswer: 2, marks: 1, explanation: "100°C + 273 = 373 K।" },
      { quiz: scienceQuiz1._id, questionText: "Latent heat of fusion କାହା ପାଇଁ ଦରକାର?", options: ["ତରଳକୁ ସ୍ଫୁଟାଇବା", "ତାପମାତ୍ରା ବଦଳାଇବା ଛଡ଼ା ଘନକୁ ଗଳାଇବା", "ବାୟୁକୁ ଥଣ୍ଡା କରିବା", "ତରଳକୁ ଜମାଇବା"], correctAnswer: 1, marks: 1, explanation: "ଘନକୁ ତରଳ କରିବା ପାଇଁ latent heat of fusion ଦରକାର।" },
      { quiz: scienceQuiz1._id, questionText: "କେଉଁ ଅବସ୍ଥାର କଣିକାର kinetic energy ସର୍ବାଧିକ?", options: ["ଘନ", "ତରଳ", "ବାୟୁ", "ସମସ୍ତ ସମାନ"], correctAnswer: 2, marks: 1, explanation: "ବାୟୁର କଣିକା ସବୁଠୁ ଦ୍ରୁତ ଚଳନ କରେ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ଗତି
    const scienceQuiz2 = await Quiz.create({
      title: "ଗତି ଏବଂ ବେଗ",
      subject: "Science",
      category: "ଭୌତିକ ବିଜ୍ଞାନ",
      chapter: "Motion",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz2._id, questionText: "ବେଗର SI unit କଣ?", options: ["km/h", "m/s", "cm/s", "m/min"], correctAnswer: 1, marks: 1, explanation: "ବେଗର SI unit ହେଉଛି m/s।" },
      { quiz: scienceQuiz2._id, questionText: "ଏକ କାର 2 ଘଣ୍ଟାରେ 100 km ଯାଏ। ତାହାର ଔସତ ବେଗ କେତେ?", options: ["200 km/h", "50 km/h", "100 km/h", "25 km/h"], correctAnswer: 1, marks: 1, explanation: "ବେଗ = ଦୂରତା/ସମୟ = 100/2 = 50 km/h।" },
      { quiz: scienceQuiz2._id, questionText: "Acceleration କୁ କେମିତି ପରିଭାଷିତ କରାଯାଏ?", options: ["ବେଗର ପରିବର୍ତ୍ତନ", "ବେଗ ପରିବର୍ତ୍ତନର ହାର", "ଦୂରତା", "ବେଗ × ସମୟ"], correctAnswer: 1, marks: 1, explanation: "Acceleration = velocity ର ପରିବର୍ତ୍ତନ / ସମୟ।" },
      { quiz: scienceQuiz2._id, questionText: "ଏକ ବସ୍ତୁ ନିର୍ଦ୍ଧାରିତ ବେଗରେ ବୃତ୍ତରେ ଚଳନ କଲେ:", options: ["Acceleration ନାହିଁ", "ସ୍ଥିର acceleration", "ପରିବର୍ତ୍ତନଶୀଳ acceleration", "Velocity ଶୂନ୍ୟ"], correctAnswer: 2, marks: 1, explanation: "ଦିଗ ସଦା ବଦଳୁଥିବାରୁ acceleration ବଦଳେ।" },
      { quiz: scienceQuiz2._id, questionText: "Distance-time graph ର slope କଣ ଦେଖାଏ?", options: ["Acceleration", "ବେଗ", "Distance", "Time"], correctAnswer: 1, marks: 1, explanation: "Slope = distance/time = speed।" },
      { quiz: scienceQuiz2._id, questionText: "Velocity 20 m/s ରୁ 30 m/s କୁ 5 ସେକେଣ୍ଡରେ ବଦଳିଲେ acceleration କେତେ?", options: ["2 m/s²", "10 m/s²", "50 m/s²", "5 m/s²"], correctAnswer: 0, marks: 1, explanation: "a=(30-20)/5=2 m/s²।" },
      { quiz: scienceQuiz2._id, questionText: "Distance ଏକ ___ quantity।", options: ["Vector", "Scalar", "Both", "Neither"], correctAnswer: 1, marks: 1, explanation: "Distance ରେ କେବଳ magnitude ଥାଏ।" },
      { quiz: scienceQuiz2._id, questionText: "Displacement କେମିତି ହୋଇପାରେ?", options: ["କେବଳ positive", "କେବଳ negative", "ଶୂନ୍ୟ, positive କିମ୍ବା negative", "କେବଳ zero"], correctAnswer: 2, marks: 1, explanation: "ଦିଗ ଅନୁସାରେ displacement positive, negative କିମ୍ବା zero ହୋଇପାରେ।" },
      { quiz: scienceQuiz2._id, questionText: "v=u+at ଅନୁସାରେ u=0, a=5 m/s², t=4s ହେଲେ v କେତେ?", options: ["9 m/s", "20 m/s", "1.25 m/s", "40 m/s"], correctAnswer: 1, marks: 1, explanation: "v=0+5×4=20 m/s।" },
      { quiz: scienceQuiz2._id, questionText: "Velocity-time graph ର area କଣ ଦେଖାଏ?", options: ["ବେଗ", "Acceleration", "Displacement", "Time"], correctAnswer: 2, marks: 1, explanation: "Area under v-t graph = displacement।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ପରମାଣୁ ଏବଂ ଅଣୁ
    const scienceQuiz3 = await Quiz.create({
      title: "ପରମାଣୁ ଏବଂ ଅଣୁ",
      subject: "Science",
      category: "ରସାୟନ ବିଜ୍ଞାନ",
      chapter: "Atoms and Molecules",
      grade: 9,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: scienceQuiz3._id, questionText: "Atomic theory କିଏ ପ୍ରସ୍ତାବ କରିଥିଲେ?", options: ["Newton", "Dalton", "Rutherford", "Bohr"], correctAnswer: 1, marks: 1, explanation: "John Dalton atomic theory ପ୍ରସ୍ତାବ କରିଥିଲେ।" },
      { quiz: scienceQuiz3._id, questionText: "ଜଳର chemical formula କଣ?", options: ["H₂O", "HO₂", "H₃O", "OH"], correctAnswer: 0, marks: 1, explanation: "ଜଳରେ 2 Hydrogen ଏବଂ 1 Oxygen ଥାଏ।" },
      { quiz: scienceQuiz3._id, questionText: "Atomic mass unit କାହା ଉପରେ ଆଧାରିତ?", options: ["Hydrogen", "Oxygen", "Carbon-12", "Nitrogen"], correctAnswer: 2, marks: 1, explanation: "1 amu = Carbon-12 ର 1/12 mass।" },
      { quiz: scienceQuiz3._id, questionText: "Avogadro number କେତେ?", options: ["6.022 × 10²³", "6.022 × 10²²", "6.022 × 10²⁴", "3.14 × 10²³"], correctAnswer: 0, marks: 1, explanation: "Avogadro number = 6.022 × 10²³।" },
      { quiz: scienceQuiz3._id, questionText: "Carbon dioxide ର formula କଣ?", options: ["CO", "CO₂", "C₂O", "C₂O₂"], correctAnswer: 1, marks: 1, explanation: "CO₂ ରେ 1 Carbon ଏବଂ 2 Oxygen ଥାଏ।" },
      { quiz: scienceQuiz3._id, questionText: "Oxygen ର valency କେତେ?", options: ["1", "2", "3", "4"], correctAnswer: 1, marks: 1, explanation: "Oxygen ର valency 2।" },
      { quiz: scienceQuiz3._id, questionText: "Law of conservation of mass କଣ କୁହେ?", options: ["Mass ସୃଷ୍ଟି ହୋଇପାରେ", "Mass ନଷ୍ଟ ହୋଇପାରେ", "Mass ନ ସୃଷ୍ଟି ହୁଏ ନ ନଷ୍ଟ ହୁଏ", "Mass ସଦା ବଢ଼େ"], correctAnswer: 2, marks: 1, explanation: "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ mass ସ୍ଥିର ରହେ।" },
      { quiz: scienceQuiz3._id, questionText: "Molecule କଣ?", options: ["ଏକ ପରମାଣୁ", "ଦୁଇ କିମ୍ବା ଅଧିକ ପରମାଣୁର ଗୋଷ୍ଠୀ", "ଏକ ଇଲେକ୍ଟ୍ରନ୍", "ଏକ ପ୍ରୋଟନ୍"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇ କିମ୍ବା ଅଧିକ ପରମାଣୁ ମିଶି molecule ତିଆରି କରେ।" },
      { quiz: scienceQuiz3._id, questionText: "Common salt ର formula କଣ?", options: ["NaCl", "KCl", "CaCl₂", "NaOH"], correctAnswer: 0, marks: 1, explanation: "Common salt = Sodium chloride (NaCl)।" },
      { quiz: scienceQuiz3._id, questionText: "1 mole ରେ କେତେ କଣିକା ଥାଏ?", options: ["6.022 × 10²²", "6.022 × 10²³", "6.022 × 10²⁴", "3.011 × 10²³"], correctAnswer: 1, marks: 1, explanation: "1 mole = 6.022 × 10²³ କଣିକା।" },
    ]);

    console.log("✓ Class 9 - Science: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9ScienceOdia;
