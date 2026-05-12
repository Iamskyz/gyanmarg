
// Full Odia translated Class 10 Hindi file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10HindiOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1
    const hindiQuiz1 = await Quiz.create({
      title: "ହିନ୍ଦୀ ବ୍ୟାକରଣ - ପଦ ପରିଚୟ ଏବଂ ବାକ୍ୟ ପରିଚୟ",
      subject: "Hindi",
      category: "ବ୍ୟାକରଣ",
      chapter: "ପଦ ଏବଂ ବାକ୍ୟ ପରିଚୟ",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz1._id, questionText: "ପଦ ପରିଚୟରେ କଣ କୁହାଯାଏ?", options: ["କେବଳ ଅର୍ଥ", "ଶବ୍ଦଭେଦ, ଲିଙ୍ଗ, ବଚନ, କାରକ", "କେବଳ ଉଚ୍ଚାରଣ", "କେବଳ ଲେଖନ"], correctAnswer: 1, marks: 1, explanation: "ପଦ ପରିଚୟରେ ଶବ୍ଦର ଭେଦ, ଲିଙ୍ଗ, ବଚନ ଇତ୍ୟାଦି କୁହାଯାଏ।" },
      { quiz: hindiQuiz1._id, questionText: "'राम ने सेब खाया' ରେ 'राम' କଣ?", options: ["କ୍ରିୟା", "ସଂଜ୍ଞା, ପୁଲ୍ଲିଙ୍ଗ, ଏକବଚନ", "ବିଶେଷଣ", "ସର୍ବନାମ"], correctAnswer: 1, marks: 1, explanation: "'राम' ବ୍ୟକ୍ତିବାଚକ ସଂଜ୍ଞା।" },
      { quiz: hindiQuiz1._id, questionText: "ବାକ୍ୟ ପରିଚୟରେ କଣ କୁହାଯାଏ?", options: ["କେବଳ ଅର୍ଥ", "ବାକ୍ୟର ପ୍ରକାର ଏବଂ ବିଧେୟ", "କେବଳ ଶବ୍ଦ ସଂଖ୍ୟା", "କେବଳ ବିରାମଚିହ୍ନ"], correctAnswer: 1, marks: 1, explanation: "ବାକ୍ୟର ପ୍ରକାର ଏବଂ କର୍ତ୍ତା-କ୍ରିୟା ସମ୍ପର୍କ କୁହାଯାଏ।" },
      { quiz: hindiQuiz1._id, questionText: "'बहुत सुंदर' ରେ 'बहुत' କଣ?", options: ["ବିଶେଷଣ", "କ୍ରିୟା ବିଶେଷଣ", "ସଂଜ୍ଞା", "ସର୍ବନାମ"], correctAnswer: 1, marks: 1, explanation: "'बहुत' ବିଶେଷଣକୁ ବର୍ଣ୍ଣନା କରୁଛି।" },
      { quiz: hindiQuiz1._id, questionText: "ରଚନା ଆଧାରରେ ବାକ୍ୟ କେତେ ପ୍ରକାର?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "ସରଳ, ସଂଯୁକ୍ତ, ମିଶ୍ର — 3 ପ୍ରକାର।" },
      { quiz: hindiQuiz1._id, questionText: "'और', 'परंतु' କେଉଁ ଅବ୍ୟୟ?", options: ["କ୍ରିୟା ବିଶେଷଣ", "ସମୁଚ୍ଚୟବୋଧକ", "ସମ୍ବନ୍ଧବୋଧକ", "ବିସ୍ମୟାଦିବୋଧକ"], correctAnswer: 1, marks: 1, explanation: "ଏହା sentence କୁ ଯୋଡ଼େ।" },
      { quiz: hindiQuiz1._id, questionText: "'मेज पर किताब है' ରେ 'पर' କଣ?", options: ["କ୍ରିୟା", "ସମ୍ବନ୍ଧବୋଧକ", "ବିଶେଷଣ", "ସର୍ବନାମ"], correctAnswer: 1, marks: 1, explanation: "'पर' ସମ୍ପର୍କ ବୁଝାଏ।" },
      { quiz: hindiQuiz1._id, questionText: "ଉଦ୍ଦେଶ୍ୟ କାହାକୁ କୁହାଯାଏ?", options: ["କ୍ରିୟା", "ଯାହା ବିଷୟରେ କୁହାଯାଏ", "ବିଶେଷଣ", "ଅବ୍ୟୟ"], correctAnswer: 1, marks: 1, explanation: "ଯାହା ବିଷୟରେ କୁହାଯାଏ ସେହି କର୍ତ୍ତା।" },
      { quiz: hindiQuiz1._id, questionText: "ବିଧେୟ କଣ?", options: ["କର୍ତ୍ତା", "କର୍ତ୍ତା ବିଷୟରେ କୁହାଯାଇଥିବା କଥା", "ବିଶେଷଣ", "ସଂଜ୍ଞା"], correctAnswer: 1, marks: 1, explanation: "କର୍ତ୍ତା ବିଷୟରେ କୁହାଯାଇଥିବା ଅଂଶକୁ ବିଧେୟ କୁହାଯାଏ।" },
      { quiz: hindiQuiz1._id, questionText: "'अरे!' କେଉଁ ଅବ୍ୟୟ?", options: ["ସଂଜ୍ଞା", "ସର୍ବନାମ", "ବିସ୍ମୟାଦିବୋଧକ", "କ୍ରିୟା"], correctAnswer: 2, marks: 1, explanation: "'अरे' ଆଶ୍ଚର୍ଯ୍ୟ ବ୍ୟକ୍ତ କରେ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2
    const hindiQuiz2 = await Quiz.create({
      title: "ହିନ୍ଦୀ ସାହିତ୍ୟ - କବି ଏବଂ କାବ୍ୟ",
      subject: "Hindi",
      category: "ସାହିତ୍ୟ",
      chapter: "କାବ୍ୟ ଖଣ୍ଡ",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz2._id, questionText: "'रामधारी सिंह दिनकर' କେଉଁ ରସର କବି?", options: ["ଶୃଙ୍ଗାର", "ବୀର", "କରୁଣ", "ହାସ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ଦିନକର ବୀର ରସର କବି।" },
      { quiz: hindiQuiz2._id, questionText: "'सूरसागर' ର ରଚୟିତା କିଏ?", options: ["ତୁଳସୀଦାସ", "ସୂରଦାସ", "କବୀର", "ମୀରା"], correctAnswer: 1, marks: 1, explanation: "ସୂରଦାସ 'सूरसागर' ଲେଖିଥିଲେ।" },
      { quiz: hindiQuiz2._id, questionText: "'प्रेमचंद' କୁ କଣ କୁହାଯାଏ?", options: ["କବିସମ୍ରାଟ", "ଉପନ୍ୟାସ ସମ୍ରାଟ", "ନାଟକକାର", "ନିବନ୍ଧକାର"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରେମଚନ୍ଦଙ୍କୁ ଉପନ୍ୟାସ ସମ୍ରାଟ କୁହାଯାଏ।" },
      { quiz: hindiQuiz2._id, questionText: "ଛାୟାବାଦର ଚାରି ସ୍ତମ୍ଭ କିଏମାନେ?", options: ["କବୀର, ସୂର", "ପ୍ରସାଦ, ନିରାଳା, ପନ୍ତ, ମହାଦେବୀ", "ଦିନକର, ବଚ୍ଚନ", "ଭାରତେନ୍ଦୁ, ପ୍ରେମଚନ୍ଦ"], correctAnswer: 1, marks: 1, explanation: "ଏମାନେ ଛାୟାବାଦର ପ୍ରମୁଖ କବି।" },
      { quiz: hindiQuiz2._id, questionText: "'गोदान' କିଏ ଲେଖିଥିଲେ?", options: ["ପ୍ରସାଦ", "ପ୍ରେମଚନ୍ଦ", "ଯଶପାଳ", "ଅଜ୍ଞେୟ"], correctAnswer: 1, marks: 1, explanation: "'गोदान' ପ୍ରେମଚନ୍ଦଙ୍କ ଉପନ୍ୟାସ।" },
      { quiz: hindiQuiz2._id, questionText: "'बिहारी' କେଉଁ କାଳର କବି?", options: ["ଭକ୍ତିକାଳ", "ରୀତିକାଳ", "ଆଧୁନିକ", "ଆଦିକାଳ"], correctAnswer: 1, marks: 1, explanation: "ବିହାରୀ ରୀତିକାଳର କବି।" },
      { quiz: hindiQuiz2._id, questionText: "'सरोज स्मृति' କାହାର କବିତା?", options: ["ବଚ୍ଚନ", "ନିରାଳା", "ପନ୍ତ", "ପ୍ରସାଦ"], correctAnswer: 1, marks: 1, explanation: "'सरोज स्मृति' ନିରାଳାଙ୍କ କବିତା।" },
      { quiz: hindiQuiz2._id, questionText: "ହିନ୍ଦୀର ପ୍ରଥମ ମହାକାବ୍ୟ କଣ?", options: ["रामचरितमानस", "पृथ्वीराज रासो", "कामायनी", "साकेत"], correctAnswer: 1, marks: 1, explanation: "'पृथ्वीराज रासो' ପ୍ରଥମ ମହାକାବ୍ୟ।" },
      { quiz: hindiQuiz2._id, questionText: "ପ୍ରଗତିବାଦର ମୁଖ୍ୟ ବିଷୟ କଣ?", options: ["ପ୍ରେମ", "ସାମାଜିକ ସମାନତା", "ପ୍ରକୃତି", "ଭକ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରଗତିବାଦ ସମାଜିକ ଅସମାନତା ବିରୋଧରେ।" },
      { quiz: hindiQuiz2._id, questionText: "'अज्ञेय' କେଉଁ କାବ୍ୟଧାରାର କବି?", options: ["ଛାୟାବାଦ", "ପ୍ରଗତିବାଦ", "ପ୍ରୟୋଗବାଦ", "ରୀତିବାଦ"], correctAnswer: 2, marks: 1, explanation: "ଅଜ୍ଞେୟ ପ୍ରୟୋଗବାଦର ପ୍ରବର୍ତ୍ତକ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3
    const hindiQuiz3 = await Quiz.create({
      title: "ହିନ୍ଦୀ ଲେଖନ - ଔପଚାରିକ ପତ୍ର ଏବଂ ନିବନ୍ଧ",
      subject: "Hindi",
      category: "ଲେଖନ",
      chapter: "ଔପଚାରିକ ଲେଖନ",
      grade: 10,
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: hindiQuiz3._id, questionText: "Formal letter ରେ 'ବିଷୟ' କାହିଁକି ଦରକାର?", options: ["ମହତ୍ତ୍ୱ ନାହିଁ", "ଉଦ୍ଦେଶ୍ୟ ସ୍ପଷ୍ଟ କରେ", "ସୁନ୍ଦରତା", "ଶବ୍ଦ ବଢ଼ାଏ"], correctAnswer: 1, marks: 1, explanation: "ବିଷୟ ଦ୍ୱାରା ପତ୍ରର ଉଦ୍ଦେଶ୍ୟ ଜଣାଯାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ସମ୍ପାଦକଙ୍କୁ ପତ୍ରର ଶେଷରେ କଣ ଲେଖାଯାଏ?", options: ["ଆପଣଙ୍କ ମିତ୍ର", "ଆପଣଙ୍କ ଆଜ୍ଞାକାରୀ", "ଭବଦୀୟ", "ପ୍ରିୟ ଦୋସ୍ତ"], correctAnswer: 2, marks: 1, explanation: "'ଭବଦୀୟ' ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ନିବନ୍ଧର ବିଷୟ-ବିସ୍ତାରରେ କଣ ଥାଏ?", options: ["ପରିଭାଷା", "ତର୍କ ଏବଂ ଉଦାହରଣ", "କେବଳ କାହାଣୀ", "କବିତା"], correctAnswer: 1, marks: 1, explanation: "ବିଭିନ୍ନ ତର୍କ ଏବଂ ଉଦାହରଣ ଦିଆଯାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ବିଜ୍ଞାପନରେ punchline କଣ କାମ କରେ?", options: ["ବିବରଣୀ", "ଆକର୍ଷକ ବାକ୍ୟ", "ଠିକଣା", "ଦାମ"], correctAnswer: 1, marks: 1, explanation: "Punchline ବିଜ୍ଞାପନକୁ ମନେ ରଖାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ଅନୁଚ୍ଛେଦ ଏବଂ ନିବନ୍ଧର ତଫାତ କଣ?", options: ["ତଫାତ ନାହିଁ", "ଅନୁଚ୍ଛେଦ ଛୋଟ, ନିବନ୍ଧ ବିସ୍ତୃତ", "ନିବନ୍ଧ ଛୋଟ", "ଅନୁଚ୍ଛେଦ ଲମ୍ବା"], correctAnswer: 1, marks: 1, explanation: "ଅନୁଚ୍ଛେଦ ସଂକ୍ଷିପ୍ତ ଥାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ଶିକାୟତ ପତ୍ରରେ କଣ ଆବଶ୍ୟକ?", options: ["କେବଳ ନାମ", "ସମସ୍ୟା ଏବଂ ସମାଧାନ ଦାବି", "ସହି", "ଠିକଣା"], correctAnswer: 1, marks: 1, explanation: "ସମସ୍ୟା ସ୍ପଷ୍ଟ କରିବା ଦରକାର।" },
      { quiz: hindiQuiz3._id, questionText: "ସୂଚନାରେ 'କିସକେ ଦ୍ୱାରା' କାହିଁକି ଲେଖାଯାଏ?", options: ["ସୁନ୍ଦରତା", "ଜାରିକର୍ତ୍ତାର ପରିଚୟ", "ଶବ୍ଦ ବଢ଼ାଇବା", "ନିୟମ ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "ଜାରିକର୍ତ୍ତାର ପରିଚୟ ଆବଶ୍ୟକ।" },
      { quiz: hindiQuiz3._id, questionText: "E-mail ଏବଂ ପତ୍ରର ତଫାତ କଣ?", options: ["ତଫାତ ନାହିଁ", "E-mail digital ଏବଂ ତ୍ୱରିତ", "ପତ୍ର ତ୍ୱରିତ", "Format ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "E-mail ତୁରନ୍ତ ପହଞ୍ଚେ।" },
      { quiz: hindiQuiz3._id, questionText: "Board exam ରେ ନିବନ୍ଧର word limit କେତେ?", options: ["50-80", "100-120", "200-250", "500+"], correctAnswer: 2, marks: 1, explanation: "ସାଧାରଣତଃ 200-250 ଶବ୍ଦ।" },
      { quiz: hindiQuiz3._id, questionText: "ସଂବାଦ ଲେଖନରେ ସ୍ୱାଭାବିକତାର ଅର୍ଥ କଣ?", options: ["କଠିନ ଭାଷା", "ବାସ୍ତବ କଥାବାର୍ତ୍ତା ଭଳି", "କେବଳ ପ୍ରଶ୍ନ", "କେବଳ ଉତ୍ତର"], correctAnswer: 1, marks: 1, explanation: "ସଂବାଦ ବାସ୍ତବ ଲାଗିବା ଉଚିତ।" },
    ]);

    console.log("✓ Class 10 - Hindi: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10HindiOdia;
