import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11PhysicsOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Units and Measurements
    const physicsQuiz1 = await Quiz.create({
      title: "ଏକକ ଏବଂ ମାପନ",
      subject: "Physics",
      category: "Mechanics",
      chapter: "Units and Measurements",
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
      { quiz: physicsQuiz1._id, questionText: "ବଳର SI ଏକକ କଣ?", options: ["ଡାଇନ", "ନ୍ୟୁଟନ", "ପାଉଣ୍ଡ", "କିଲୋଗ୍ରାମ"], correctAnswer: 1, marks: 1, explanation: "ନ୍ୟୁଟନ (N) ବଳର SI ଏକକ ଅଟେ।" },
      { quiz: physicsQuiz1._id, questionText: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ମୂଳ ରାଶି?", options: ["ବେଗ", "ବଳ", "ଲମ୍ବ", "ଚାପ"], correctAnswer: 2, marks: 1, explanation: "ଲମ୍ବ ଏକ ମୂଳ ରାଶି ଅଟେ।" },
      { quiz: physicsQuiz1._id, questionText: "0.00340 ରେ କେତେଟି significant figures ଅଛି?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "Leading zeros ଗଣନା ହୁଏନି।" },
      { quiz: physicsQuiz1._id, questionText: "କାର୍ଯ୍ୟର ମାପ ତତ୍ତ୍ୱ କଣ?", options: ["[MLT⁻¹]", "[ML²T⁻²]", "[MLT⁻²]", "[ML²T⁻¹]"], correctAnswer: 1, marks: 1, explanation: "କାର୍ଯ୍ୟ = ବଳ × ଦୂରତା।" },
      { quiz: physicsQuiz1._id, questionText: "1 light year କେଉଁ ରାଶିର ଏକକ?", options: ["ସମୟ", "ଦୂରତା", "ବେଗ", "ତୀବ୍ରତା"], correctAnswer: 1, marks: 1, explanation: "Light year ହେଉଛି ଦୂରତାର ଏକକ।" },
      { quiz: physicsQuiz1._id, questionText: "SI ରେ କେତେଟି base units ଅଛି?", options: ["5", "6", "7", "8"], correctAnswer: 2, marks: 1, explanation: "SI ରେ 7ଟି base units ଅଛି।" },
      { quiz: physicsQuiz1._id, questionText: "ଚାପର ମାପ ତତ୍ତ୍ୱ କଣ?", options: ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[ML²T⁻²]", "[ML⁻¹T⁻¹]"], correctAnswer: 0, marks: 1, explanation: "ଚାପ = ବଳ / କ୍ଷେତ୍ରଫଳ।" },
      { quiz: physicsQuiz1._id, questionText: "ଅତ୍ୟନ୍ତ ଛୋଟ ଲମ୍ବ ମାପିବା ପାଇଁ କେଉଁ ଯନ୍ତ୍ର ବ୍ୟବହାର କରାଯାଏ?", options: ["ମିଟର ସ୍କେଲ", "ଭର୍ନିଅର କ୍ୟାଲିପର", "ଥର୍ମୋମିଟର", "ଏମିଟର"], correctAnswer: 1, marks: 1, explanation: "ଭର୍ନିଅର କ୍ୟାଲିପର ଅତି ସୂକ୍ଷ୍ମ ଲମ୍ବ ମାପେ।" },
      { quiz: physicsQuiz1._id, questionText: "ମାପନର ତ୍ରୁଟିକୁ କ’ଣ କୁହାଯାଏ?", options: ["Precision", "Accuracy", "Uncertainty", "Resolution"], correctAnswer: 2, marks: 1, explanation: "ମାପନର ସନ୍ଦେହକୁ uncertainty କୁହାଯାଏ।" },
      { quiz: physicsQuiz1._id, questionText: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି dimensionless?", options: ["ବଳ", "Strain", "ଚାପ", "ବେଗ"], correctAnswer: 1, marks: 1, explanation: "Strain ର କୌଣସି ମାପ ନଥାଏ।" },
    ]);

    // Subcategory 2: Motion in a Straight Line
    const physicsQuiz2 = await Quiz.create({
      title: "ସରଳ ରେଖାରେ ଗତି",
      subject: "Physics",
      category: "Mechanics",
      chapter: "Kinematics",
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
      { quiz: physicsQuiz2._id, questionText: "ଏକ ନିଷ୍କ୍ରିୟ ବସ୍ତୁର କଣ ଥାଏ?", options: ["ନ ବେଗ, ନ ତ୍ୱରଣ", "ବେଗ ଅଛି କିନ୍ତୁ ତ୍ୱରଣ ନାହିଁ", "ବେଗ ଏବଂ ତ୍ୱରଣ ଉଭୟ", "ତ୍ୱରଣ ଅଛି କିନ୍ତୁ ବେଗ ନାହିଁ"], correctAnswer: 0, marks: 1, explanation: "ନିଷ୍କ୍ରିୟ ବସ୍ତୁର ବେଗ ଏବଂ ତ୍ୱରଣ ଶୂନ୍ୟ ଥାଏ।" },
      { quiz: physicsQuiz2._id, questionText: "ବିସ୍ଥାପନ-ସମୟ ଗ୍ରାଫର ଢାଳ କ’ଣ ଦେଖାଏ?", options: ["ତ୍ୱରଣ", "ବେଗ", "ବଳ", "ଭରବେଗ"], correctAnswer: 1, marks: 1, explanation: "s-t ଗ୍ରାଫର ଢାଳ = ବେଗ।" },
      { quiz: physicsQuiz2._id, questionText: "u=0, a=10 m/s², s=5m ହେଲେ v କେତେ?", options: ["5 m/s", "10 m/s", "50 m/s", "100 m/s"], correctAnswer: 1, marks: 1, explanation: "v² = 2as = 100, ତେଣୁ v = 10 m/s।" },
      { quiz: physicsQuiz2._id, questionText: "ମୁକ୍ତ ପତନର ତ୍ୱରଣ (g) ପ୍ରାୟ କେତେ?", options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.2 m/s²"], correctAnswer: 1, marks: 1, explanation: "g ≈ 9.8 m/s²।" },
      { quiz: physicsQuiz2._id, questionText: "ବେଗ-ସମୟ ଗ୍ରାଫ ତଳର କ୍ଷେତ୍ରଫଳ କ’ଣ ଦେଖାଏ?", options: ["ବେଗ", "ତ୍ୱରଣ", "ବିସ୍ଥାପନ", "ବଳ"], correctAnswer: 2, marks: 1, explanation: "v-t ଗ୍ରାଫ ତଳର କ୍ଷେତ୍ରଫଳ = ବିସ୍ଥାପନ।" },
      { quiz: physicsQuiz2._id, questionText: "ଉପରକୁ ଫିଙ୍ଗା ଗୋଲକର ସର୍ବୋଚ୍ଚ ବିନ୍ଦୁରେ କ’ଣ ହୁଏ?", options: ["v=0, a=0", "v=0, a=g ତଳକୁ", "v=max, a=0", "v=max, a=g"], correctAnswer: 1, marks: 1, explanation: "ସର୍ବୋଚ୍ଚ ବିନ୍ଦୁରେ ବେଗ ଶୂନ୍ୟ କିନ୍ତୁ g ତଳକୁ କାର୍ଯ୍ୟ କରେ।" },
      { quiz: physicsQuiz2._id, questionText: "ସରାସରି ବେଗର ସଂଜ୍ଞା କଣ?", options: ["ମୋଟ ଦୂରତା / ସମୟ", "ମୋଟ ବିସ୍ଥାପନ / ସମୟ", "ବେଗ × ସମୟ", "ତ୍ୱରଣ × ସମୟ"], correctAnswer: 1, marks: 1, explanation: "ସରାସରି ବେଗ = ମୋଟ ବିସ୍ଥାପନ / ସମୟ।" },
      { quiz: physicsQuiz2._id, questionText: "ଏକ କାର 20 m/s ରୁ 0 କୁ 4s ରେ ଆସିଲେ deceleration କେତେ?", options: ["4 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"], correctAnswer: 1, marks: 1, explanation: "a = (0-20)/4 = -5 m/s²।" },
      { quiz: physicsQuiz2._id, questionText: "Instantaneous velocity କ’ଣ?", options: ["ସରାସରି ବେଗ", "ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ଷଣର ବେଗ", "ଚୁଡାନ୍ତ ବେଗ", "ଆରମ୍ଭିକ ବେଗ"], correctAnswer: 1, marks: 1, explanation: "ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ଷଣର ବେଗକୁ instantaneous velocity କୁହାଯାଏ।" },
      { quiz: physicsQuiz2._id, questionText: "ଏକ ବସ୍ତୁ h ଉଚ୍ଚତାରୁ t ସମୟରେ ପଡ଼ିଲେ 2h ରୁ ସମୟ କେତେ?", options: ["2t", "√2 t", "4t", "t/2"], correctAnswer: 1, marks: 1, explanation: "ସମୟ √h ସହ ସମାନୁପାତିକ।" },
    ]);

    // Subcategory 3: Laws of Motion
    const physicsQuiz3 = await Quiz.create({
      title: "ଗତିର ସୂତ୍ର",
      subject: "Physics",
      category: "Mechanics",
      chapter: "Newton's Laws",
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
      { quiz: physicsQuiz3._id, questionText: "ନ୍ୟୁଟନଙ୍କ ପ୍ରଥମ ସୂତ୍ରକୁ ଆଉ କ’ଣ କୁହାଯାଏ?", options: ["ତ୍ୱରଣର ସୂତ୍ର", "ଜଡତାର ସୂତ୍ର", "କ୍ରିୟା-ପ୍ରତିକ୍ରିୟା ସୂତ୍ର", "ଗୁରୁତ୍ୱାକର୍ଷଣ ସୂତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରଥମ ସୂତ୍ରକୁ ଜଡତାର ସୂତ୍ର କୁହାଯାଏ।" },
      { quiz: physicsQuiz3._id, questionText: "F = ma କେଉଁ ସୂତ୍ର?", options: ["ପ୍ରଥମ", "ଦ୍ୱିତୀୟ", "ତୃତୀୟ", "କିଛି ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ନ୍ୟୁଟନଙ୍କ ଦ୍ୱିତୀୟ ସୂତ୍ର।" },
      { quiz: physicsQuiz3._id, questionText: "କ୍ରିୟା ଏବଂ ପ୍ରତିକ୍ରିୟା ବଳ କେଉଁଠି କାର୍ଯ୍ୟ କରେ?", options: ["ସେହି ବସ୍ତୁରେ", "ଭିନ୍ନ ବସ୍ତୁରେ", "ସେହି ବିନ୍ଦୁରେ", "ସେହି ଦିଗରେ"], correctAnswer: 1, marks: 1, explanation: "କ୍ରିୟା ଏବଂ ପ୍ରତିକ୍ରିୟା ଭିନ୍ନ ବସ୍ତୁରେ କାର୍ଯ୍ୟ କରେ।" },
      { quiz: physicsQuiz3._id, questionText: "ଭରବେଗର ଏକକ କଣ?", options: ["kg⋅m/s²", "kg⋅m/s", "kg⋅m²/s", "N⋅s²"], correctAnswer: 1, marks: 1, explanation: "ଭରବେଗ = ଭର × ବେଗ।" },
      { quiz: physicsQuiz3._id, questionText: "5 kg ବସ୍ତୁରେ 20 N ବଳ ଲାଗିଲେ ତ୍ୱରଣ କେତେ?", options: ["2 m/s²", "4 m/s²", "10 m/s²", "100 m/s²"], correctAnswer: 1, marks: 1, explanation: "a = F/m = 20/5 = 4 m/s²।" },
      { quiz: physicsQuiz3._id, questionText: "ଘର୍ଷଣ ବଳ ସଦା କେଉଁ ଦିଗରେ କାର୍ଯ୍ୟ କରେ?", options: ["ଗତି ଦିଗରେ", "ଗତିର ବିପରୀତ", "ଲମ୍ବ ଦିଗରେ", "ଉପରକୁ"], correctAnswer: 1, marks: 1, explanation: "ଘର୍ଷଣ ଗତିର ବିପରୀତ ଦିଗରେ କାର୍ଯ୍ୟ କରେ।" },
      { quiz: physicsQuiz3._id, questionText: "Impulse ସମାନ କଣ?", options: ["ବଳ × ଦୂରତା", "ବଳ × ସମୟ", "ଭର × ବେଗ", "B ଏବଂ C ଉଭୟ"], correctAnswer: 3, marks: 1, explanation: "Impulse = ବଳ × ସମୟ = ଭରବେଗର ପରିବର୍ତ୍ତନ।" },
      { quiz: physicsQuiz3._id, questionText: "ରକେଟର propulsion କେଉଁ ସୂତ୍ରର ଉପରେ ଆଧାରିତ?", options: ["ପ୍ରଥମ", "ଦ୍ୱିତୀୟ", "ତୃତୀୟ", "ଗୁରୁତ୍ୱାକର୍ଷଣ"], correctAnswer: 2, marks: 1, explanation: "ରକେଟ propulsion ତୃତୀୟ ସୂତ୍ର ଉପରେ ଆଧାରିତ।" },
      { quiz: physicsQuiz3._id, questionText: "ଘର୍ଷଣ ଗୁଣାଙ୍କ କ’ଣ?", options: ["ସଦା > 1", "ସଦା < 1", "dimensionless", "B ଏବଂ C ଉଭୟ"], correctAnswer: 3, marks: 1, explanation: "ଘର୍ଷଣ ଗୁଣାଙ୍କ dimensionless ଅଟେ।" },
      { quiz: physicsQuiz3._id, questionText: "ଯଦି ଏକ ବସ୍ତୁ ଉପରେ net force ଶୂନ୍ୟ, ତେବେ ସେ କେଉଁ ଅବସ୍ଥାରେ ଅଛି?", options: ["ତ୍ୱରଣ", "ସନ୍ତୁଳନ", "ମୁକ୍ତ ପତନ", "ବୃତ୍ତୀୟ ଗତି"], correctAnswer: 1, marks: 1, explanation: "Net force ଶୂନ୍ୟ ହେଲେ ବସ୍ତୁ ସନ୍ତୁଳନରେ ଥାଏ।" },
    ]);

    console.log("✓ Class 11 Science - Physics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11PhysicsOdia;
