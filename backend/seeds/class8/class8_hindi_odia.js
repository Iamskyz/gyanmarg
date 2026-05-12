
// Full Odia translated Class 8 Hindi file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8HindiOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ସମାସ ଏବଂ ଉପସର୍ଗ-ପ୍ରତ୍ୟୟ
    const hindiQuiz1 = await Quiz.create({
      title: "ହିନ୍ଦୀ ବ୍ୟାକରଣ - ସମାସ ଏବଂ ଉପସର୍ଗ-ପ୍ରତ୍ୟୟ",
      subject: "Hindi",
      category: "ବ୍ୟାକରଣ",
      chapter: "ସମାସ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz1._id, questionText: "ସମାସ କାହାକୁ କୁହାଯାଏ?", options: ["ଶବ୍ଦକୁ ଅଲଗା କରିବା", "ଦୁଇ କିମ୍ବା ଅଧିକ ଶବ୍ଦକୁ ମିଶାଇ ନୂତନ ଶବ୍ଦ ତିଆରି କରିବା", "ଅର୍ଥ ପରିବର୍ତ୍ତନ", "ବାକ୍ୟ ତିଆରି"], correctAnswer: 1, marks: 1, explanation: "ସମାସରେ ଦୁଇ କିମ୍ବା ଅଧିକ ଶବ୍ଦ ମିଶି ନୂତନ ଶବ୍ଦ ତିଆରି ହୁଏ।" },
      { quiz: hindiQuiz1._id, questionText: "'राजपुत्र' ରେ କେଉଁ ସମାସ ଅଛି?", options: ["ତତ୍ପୁରୁଷ", "ଦ୍ୱନ୍ଦ୍ୱ", "ବହୁବ୍ରୀହି", "ଅବ୍ୟୟୀଭାବ"], correctAnswer: 0, marks: 1, explanation: "'राजपुत्र' = ରାଜାଙ୍କ ପୁଅ — ତତ୍ପୁରୁଷ ସମାସ।" },
      { quiz: hindiQuiz1._id, questionText: "'माता-पिता' ରେ କେଉଁ ସମାସ ଅଛି?", options: ["ତତ୍ପୁରୁଷ", "ଦ୍ୱନ୍ଦ୍ୱ", "ବହୁବ୍ରୀହି", "କର୍ମଧାରୟ"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇଟି ପଦ ମୁଖ୍ୟ ଥିବାରୁ ଦ୍ୱନ୍ଦ୍ୱ ସମାସ।" },
      { quiz: hindiQuiz1._id, questionText: "ଉପସର୍ଗ କାହାକୁ କୁହାଯାଏ?", options: ["ଶବ୍ଦ ଶେଷରେ ଯୋଗ ହୁଏ", "ଶବ୍ଦ ଆରମ୍ଭରେ ଯୋଗ ହୁଏ", "ଶବ୍ଦ ମଧ୍ୟରେ", "ସ୍ୱତନ୍ତ୍ର ଶବ୍ଦ"], correctAnswer: 1, marks: 1, explanation: "ଉପସର୍ଗ ଶବ୍ଦର ଆରମ୍ଭରେ ଯୋଗ ହୋଇ ଅର୍ଥ ବଦଳାଏ।" },
      { quiz: hindiQuiz1._id, questionText: "'निर्दोष' ରେ ଉପସର୍ଗ କଣ?", options: ["नि", "निर्", "दोष", "र्दो"], correctAnswer: 1, marks: 1, explanation: "'निर्' ଉପସର୍ଗ ଅଟେ।" },
      { quiz: hindiQuiz1._id, questionText: "ପ୍ରତ୍ୟୟ କାହାକୁ କୁହାଯାଏ?", options: ["ଆରମ୍ଭରେ ଯୋଗ ହୁଏ", "ଶେଷରେ ଯୋଗ ହୁଏ", "ସ୍ୱତନ୍ତ୍ର ଶବ୍ଦ", "ବାକ୍ୟ ଅଂଶ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟୟ ଶବ୍ଦର ଶେଷରେ ଯୋଗ ହୋଇ ନୂତନ ଶବ୍ଦ ତିଆରି କରେ।" },
      { quiz: hindiQuiz1._id, questionText: "'चतुर्भुज' ରେ କେଉଁ ସମାସ ଅଛି?", options: ["ତତ୍ପୁରୁଷ", "ଦ୍ୱିଗୁ", "ବହୁବ୍ରୀହି", "ଅବ୍ୟୟୀଭାବ"], correctAnswer: 1, marks: 1, explanation: "ସଂଖ୍ୟାବାଚକ ଥିବାରୁ ଦ୍ୱିଗୁ ସମାସ।" },
      { quiz: hindiQuiz1._id, questionText: "'दशमुख' ରେ କେଉଁ ସମାସ ଅଛି?", options: ["ତତ୍ପୁରୁଷ", "ଦ୍ୱନ୍ଦ୍ୱ", "ବହୁବ୍ରୀହି", "ଦ୍ୱିଗୁ"], correctAnswer: 2, marks: 1, explanation: "'दशमुख' ବହୁବ୍ରୀହି ସମାସ।" },
      { quiz: hindiQuiz1._id, questionText: "'यथाशक्ति' ରେ କେଉଁ ସମାସ ଅଛି?", options: ["ତତ୍ପୁରୁଷ", "ଦ୍ୱନ୍ଦ୍ୱ", "ବହୁବ୍ରୀହି", "ଅବ୍ୟୟୀଭାବ"], correctAnswer: 3, marks: 1, explanation: "ପ୍ରଥମ ପଦ ଅବ୍ୟୟ ଥିବାରୁ ଅବ୍ୟୟୀଭାବ ସମାସ।" },
      { quiz: hindiQuiz1._id, questionText: "'लिखावट' ରେ ପ୍ରତ୍ୟୟ କଣ?", options: ["ଲିଖ", "आवट", "ଟ", "वट"], correctAnswer: 1, marks: 1, explanation: "'आवट' ପ୍ରତ୍ୟୟ ଅଟେ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ସାହିତ୍ୟ ଏବଂ କବିତା
    const hindiQuiz2 = await Quiz.create({
      title: "ହିନ୍ଦୀ ସାହିତ୍ୟ - କବିତା ଏବଂ କବି",
      subject: "Hindi",
      category: "ସାହିତ୍ୟ",
      chapter: "କାବ୍ୟ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz2._id, questionText: "'रामचरितमानस' ର ରଚୟିତା କିଏ?", options: ["ସୂରଦାସ", "ତୁଳସୀଦାସ", "କବୀର", "ରହିମ"], correctAnswer: 1, marks: 1, explanation: "ତୁଳସୀଦାସ 'रामचरितमानस' ଲେଖିଥିଲେ।" },
      { quiz: hindiQuiz2._id, questionText: "ସୂରଦାସ କେଉଁ ଭାଷାରେ ଲେଖୁଥିଲେ?", options: ["ଅବଧୀ", "ବ୍ରଜ", "ଖଡ଼ି ବୋଲି", "ମୈଥିଳୀ"], correctAnswer: 1, marks: 1, explanation: "ସୂରଦାସ ବ୍ରଜ ଭାଷାରେ ଲେଖୁଥିଲେ।" },
      { quiz: hindiQuiz2._id, questionText: "'साखी' କାହାର ରଚନା?", options: ["ତୁଳସୀଦାସ", "ସୂରଦାସ", "କବୀର", "ମୀରାବାଇ"], correctAnswer: 2, marks: 1, explanation: "'साखी' କବୀରଙ୍କ ରଚନା।" },
      { quiz: hindiQuiz2._id, questionText: "ଛାୟାବାଦର ପ୍ରମୁଖ କବି କିଏ?", options: ["କବୀର", "ଜୟଶଙ୍କର ପ୍ରସାଦ", "ତୁଳସୀଦାସ", "ଭାରତେନ୍ଦୁ"], correctAnswer: 1, marks: 1, explanation: "ଜୟଶଙ୍କର ପ୍ରସାଦ ଛାୟାବାଦର ପ୍ରମୁଖ କବି।" },
      { quiz: hindiQuiz2._id, questionText: "'मधुशाला' କାହାର ରଚନା?", options: ["ମହାଦେବୀ ବର୍ମା", "ହରିବଂଶ ରାୟ ବଚ୍ଚନ", "ନିରାଳା", "ଦିନକର"], correctAnswer: 1, marks: 1, explanation: "'मधुशाला' ହରିବଂଶ ରାୟ ବଚ୍ଚନଙ୍କ ରଚନା।" },
      { quiz: hindiQuiz2._id, questionText: "ରସର କେତେଟି ଅଂଶ ଥାଏ?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "ରସର 4ଟି ଅଂଶ ଥାଏ।" },
      { quiz: hindiQuiz2._id, questionText: "'उर्मिला' କେଉଁ କାବ୍ୟର ପାତ୍ର?", options: ["रामचरितमानस", "साकेत", "कामायनी", "सूरसागर"], correctAnswer: 1, marks: 1, explanation: "'साकेत' ର ପାତ୍ର।" },
      { quiz: hindiQuiz2._id, questionText: "'राष्ट्रकवि' କାହାକୁ କୁହାଯାଏ?", options: ["ନିରାଳା", "ଦିନକର", "ମୈଥିଳୀଶରଣ ଗୁପ୍ତ", "ପ୍ରସାଦ"], correctAnswer: 2, marks: 1, explanation: "ମୈଥିଳୀଶରଣ ଗୁପ୍ତଙ୍କୁ ରାଷ୍ଟ୍ରକବି କୁହାଯାଏ।" },
      { quiz: hindiQuiz2._id, questionText: "କରୁଣ ରସର ସ୍ଥାୟୀ ଭାବ କଣ?", options: ["କ୍ରୋଧ", "ଶୋକ", "ହାସ", "ଭୟ"], correctAnswer: 1, marks: 1, explanation: "କରୁଣ ରସର ସ୍ଥାୟୀ ଭାବ ହେଉଛି ଶୋକ।" },
      { quiz: hindiQuiz2._id, questionText: "'कामायनी' ର ରଚୟିତା କିଏ?", options: ["ନିରାଳା", "ପ୍ରସାଦ", "ପନ୍ତ", "ମହାଦେବୀ"], correctAnswer: 1, marks: 1, explanation: "ଜୟଶଙ୍କର ପ୍ରସାଦ 'कामायनी' ଲେଖିଥିଲେ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ଲେଖନ କୌଶଳ
    const hindiQuiz3 = await Quiz.create({
      title: "ହିନ୍ଦୀ ଲେଖନ - ପତ୍ର, ନିବନ୍ଧ ଏବଂ ଗଦ୍ୟାଂଶ",
      subject: "Hindi",
      category: "ଲେଖନ",
      chapter: "ସୃଜନଶୀଳ ଲେଖନ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz3._id, questionText: "ଅପଠିତ ଗଦ୍ୟାଂଶରେ କଣ କରିବାକୁ ପଡ଼େ?", options: ["କଣ୍ଠସ୍ଥ", "ପଢ଼ି ପ୍ରଶ୍ନର ଉତ୍ତର", "କାହାଣୀ ଲେଖିବା", "କବିତା ଲେଖିବା"], correctAnswer: 1, marks: 1, explanation: "ଗଦ୍ୟାଂଶ ପଢ଼ି ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବାକୁ ପଡ଼େ।" },
      { quiz: hindiQuiz3._id, questionText: "'सेवा में' କାହା ପାଇଁ ଲେଖାଯାଏ?", options: ["ମିତ୍ର", "ଅଧିକାରୀ", "ମାତାପିତା", "ଭାଇ"], correctAnswer: 1, marks: 1, explanation: "ଅଧିକାରୀ କିମ୍ବା ପ୍ରଧାନାଚାର୍ଯ୍ୟଙ୍କୁ ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ନିବନ୍ଧର ଭୂମିକାରେ କଣ ଥାଏ?", options: ["ନିଷ୍କର୍ଷ", "ବିଷୟ ପରିଚୟ", "ଉଦାହରଣ", "ସାରାଂଶ"], correctAnswer: 1, marks: 1, explanation: "ଭୂମିକାରେ ବିଷୟର ପରିଚୟ ଥାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ସଂବାଦ ଲେଖନରେ ସବୁଠୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କଣ?", options: ["ଲମ୍ବା ବାକ୍ୟ", "ସ୍ୱାଭାବିକତା", "କଠିନ ଶବ୍ଦ", "କେବଳ ପ୍ରଶ୍ନ"], correctAnswer: 1, marks: 1, explanation: "ସଂବାଦରେ ସ୍ୱାଭାବିକତା ଦରକାର।" },
      { quiz: hindiQuiz3._id, questionText: "ବିଜ୍ଞାପନ ଲେଖନରେ କଣ ଆବଶ୍ୟକ ନୁହେଁ?", options: ["ଆକର୍ଷକ ଶିରୋନାମ", "ସଂକ୍ଷିପ୍ତ ଭାଷା", "ଲମ୍ବା ବର୍ଣ୍ଣନା", "ସ୍ଲୋଗାନ"], correctAnswer: 2, marks: 1, explanation: "ବିଜ୍ଞାପନ ସଂକ୍ଷିପ୍ତ ହେବା ଦରକାର।" },
      { quiz: hindiQuiz3._id, questionText: "ପତ୍ରରେ ତାରିଖ କେଉଁଠି ଲେଖାଯାଏ?", options: ["ଶେଷରେ", "ମଧ୍ୟରେ", "ଉପରେ ଡାହାଣ ପଟେ", "ଉପରେ ବାମ ପଟେ"], correctAnswer: 2, marks: 1, explanation: "ତାରିଖ ଉପରେ ଡାହାଣ ପଟେ ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ଅନୁଛେଦ ଲେଖନରେ ସାଧାରଣତଃ କେତେ ଶବ୍ଦ ଥାଏ?", options: ["50-60", "80-100", "200-300", "500+"], correctAnswer: 1, marks: 1, explanation: "ସାଧାରଣତଃ 80-100 ଶବ୍ଦ ଥାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ଅଭିଯୋଗ ପତ୍ର କାହାକୁ ଲେଖାଯାଏ?", options: ["ମିତ୍ର", "ସମ୍ବନ୍ଧିତ ଅଧିକାରୀ", "ମାତାପିତା", "ଭାଇ"], correctAnswer: 1, marks: 1, explanation: "ସମ୍ବନ୍ଧିତ ଅଧିକାରୀଙ୍କୁ ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ନିବନ୍ଧର ଉପସଂହାରରେ କଣ ଥାଏ?", options: ["ନୂତନ ବିଷୟ", "ମୁଖ୍ୟ ବିଷୟର ସାର", "ପ୍ରଶ୍ନ", "କାହାଣୀ"], correctAnswer: 1, marks: 1, explanation: "ମୁଖ୍ୟ ବିଷୟର ସାର ଥାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ଲଘୁକଥାରେ ସବୁଠୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କଣ?", options: ["ଲମ୍ବାଇ", "ସଂକ୍ଷିପ୍ତତା ଏବଂ ପ୍ରଭାବଶାଳୀ ଶେଷ", "କଠିନ ଭାଷା", "ଅଧିକ ପାତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ସଂକ୍ଷିପ୍ତତା ଏବଂ ପ୍ରଭାବଶାଳୀ ଶେଷ ଦରକାର।" },
    ]);

    console.log("✓ Class 8 - Hindi: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8HindiOdia;
