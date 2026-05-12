
// Full Odia translated Class 8 Odia file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8OdiaOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ବ୍ୟାକରଣ - ସନ୍ଧି ଏବଂ ସମାସ
    const odiaQuiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ - ସନ୍ଧି ଏବଂ ସମାସ",
      subject: "Odia",
      category: "ବ୍ୟାକରଣ",
      chapter: "ସନ୍ଧି ଏବଂ ସମାସ",
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
      { quiz: odiaQuiz1._id, questionText: "ସନ୍ଧି କାହାକୁ କୁହାଯାଏ?", options: ["ଶବ୍ଦକୁ ଅଲଗା କରିବା", "ଦୁଇ ଧ୍ୱନି ମିଶିବା", "ବହୁବଚନ କରିବା", "କାଳ ବଦଳାଇବା"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇ ଧ୍ୱନି କିମ୍ବା ଅକ୍ଷର ମିଶିଲେ ସନ୍ଧି ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆରେ କେତେ ପ୍ରକାର ସନ୍ଧି ଅଛି?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "ସ୍ୱର, ବ୍ୟଞ୍ଜନ ଏବଂ ବିସର୍ଗ — 3 ପ୍ରକାର ସନ୍ଧି।" },
      { quiz: odiaQuiz1._id, questionText: "ସ୍ୱର ସନ୍ଧି କଣ?", options: ["ବ୍ୟଞ୍ଜନ ମିଶିବା", "ସ୍ୱର ମିଶିବା", "ବିସର୍ଗ ମିଶିବା", "କୌଣସି ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇ ସ୍ୱର ମିଶିଲେ ସ୍ୱର ସନ୍ଧି ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "ସମାସ କାହାକୁ କୁହାଯାଏ?", options: ["ଶବ୍ଦ ଭାଙ୍ଗିବା", "ଦୁଇ କିମ୍ବା ଅଧିକ ଶବ୍ଦ ମିଶାଇବା", "ଅର୍ଥ ବଦଳାଇବା", "ପ୍ରତ୍ୟୟ ଯୋଗ"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇ କିମ୍ବା ଅଧିକ ଶବ୍ଦ ମିଶି ଏକ ନୂତନ ଶବ୍ଦ ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "ଉପପଦ କାହାକୁ କୁହାଯାଏ?", options: ["ଉପସର୍ଗ", "ସମାସ ଗଠନର ସାହାଯ୍ୟକାରୀ ଶବ୍ଦ", "ପ୍ରତ୍ୟୟ", "ସମୁଚ୍ଚୟ"], correctAnswer: 1, marks: 1, explanation: "ସମାସ ଗଠନରେ ସାହାଯ୍ୟ କରୁଥିବା ଶବ୍ଦକୁ ଉପପଦ କୁହାଯାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "ପ୍ରତ୍ୟୟ କଣ?", options: ["ଉପସର୍ଗ", "ଶବ୍ଦ ଶେଷରେ ଯୋଗ ହେଉଥିବା ଅଂଶ", "ମୂଳ ଶବ୍ଦ", "ସମୁଚ୍ଚୟ"], correctAnswer: 1, marks: 1, explanation: "ଶବ୍ଦ ଶେଷରେ ଯୋଗ ହୋଇ ନୂତନ ଶବ୍ଦ ତିଆରି କରେ।" },
      { quiz: odiaQuiz1._id, questionText: "ଉପସର୍ଗ କଣ?", options: ["ପ୍ରତ୍ୟୟ", "ଶବ୍ଦ ଆରମ୍ଭରେ ଯୋଗ ହେଉଥିବା ଅଂଶ", "ମୂଳ ଶବ୍ଦ", "କ୍ରିୟା"], correctAnswer: 1, marks: 1, explanation: "ଶବ୍ଦ ଆରମ୍ଭରେ ଯୋଗ ହୋଇ ଅର୍ଥ ବଦଳାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ବିଦ୍ୟାଳୟ' ରେ କେଉଁ ସନ୍ଧି ଅଛି?", options: ["ସ୍ୱର ସନ୍ଧି", "ବ୍ୟଞ୍ଜନ ସନ୍ଧି", "ବିସର୍ଗ ସନ୍ଧି", "ସନ୍ଧି ନାହିଁ"], correctAnswer: 0, marks: 1, explanation: "'ବିଦ୍ୟା + ଆଳୟ' = ସ୍ୱର ସନ୍ଧି।" },
      { quiz: odiaQuiz1._id, questionText: "ବ୍ୟଞ୍ଜନ ସନ୍ଧି କଣ?", options: ["ସ୍ୱର ମିଶିବା", "ବ୍ୟଞ୍ଜନ ମିଶିବା", "ବିସର୍ଗ ମିଶିବା", "ଶବ୍ଦ ଭାଙ୍ଗିବା"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇ ବ୍ୟଞ୍ଜନ ମିଶିଲେ ବ୍ୟଞ୍ଜନ ସନ୍ଧି ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "ସମାସପଦ କଣ?", options: ["ମୂଳ ଶବ୍ଦ", "ସମାସ ପରେ ତିଆରି ହୋଇଥିବା ନୂତନ ଶବ୍ଦ", "ଭାଙ୍ଗିଥିବା ଶବ୍ଦ", "ପ୍ରତ୍ୟୟ"], correctAnswer: 1, marks: 1, explanation: "ସମାସ ପରେ ଯେଉଁ ନୂତନ ଶବ୍ଦ ତିଆରି ହୁଏ ତାହା ସମାସପଦ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ଆଧୁନିକ ଓଡ଼ିଆ ସାହିତ୍ୟ
    const odiaQuiz2 = await Quiz.create({
      title: "ଆଧୁନିକ ଓଡ଼ିଆ ସାହିତ୍ୟ",
      subject: "Odia",
      category: "ସାହିତ୍ୟ",
      chapter: "ଆଧୁନିକ ସାହିତ୍ୟ",
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
      { quiz: odiaQuiz2._id, questionText: "ଓଡ଼ିଆର 'କଥା ସମ୍ରାଟ' କିଏ?", options: ["ଫକୀରମୋହନ ସେନାପତି", "ଗୋପୀନାଥ ମହାନ୍ତି", "କାଳିନ୍ଦୀଚରଣ", "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି"], correctAnswer: 0, marks: 1, explanation: "ଫକୀରମୋହନଙ୍କୁ କଥା ସମ୍ରାଟ କୁହାଯାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "'ମାଟିର ମଣିଷ' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "କାଳିନ୍ଦୀଚରଣ", "ଫକୀରମୋହନ", "ମନୋଜ ଦାସ"], correctAnswer: 0, marks: 1, explanation: "ଗୋପୀନାଥ ମହାନ୍ତି 'ମାଟିର ମଣିଷ' ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "ଜ୍ଞାନପୀଠ ପୁରସ୍କାର କିଏ ପାଇଥିଲେ?", options: ["ଫକୀରମୋହନ", "ଗୋପୀନାଥ", "ସୀତାକାନ୍ତ ମହାପାତ୍ର", "B ଏବଂ C"], correctAnswer: 3, marks: 1, explanation: "ଗୋପୀନାଥ ଏବଂ ସୀତାକାନ୍ତ ଦୁହେଁ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ସବୁଜ ଯୁଗ' କଣ?", options: ["ପୁରାତନ ଯୁଗ", "ରୋମାଣ୍ଟିକ ଯୁଗ", "ଆଧୁନିକ ଯୁଗ", "ମଧ୍ୟଯୁଗ"], correctAnswer: 1, marks: 1, explanation: "ସବୁଜ ଯୁଗ ହେଉଛି ରୋମାଣ୍ଟିକ ଯୁଗ।" },
      { quiz: odiaQuiz2._id, questionText: "'ସବୁଜ' ଆନ୍ଦୋଳନର ସ୍ଥାପକ କିଏ?", options: ["ଗୋପବନ୍ଧୁ", "କାଳିନ୍ଦୀଚରଣ", "ଅନ୍ନଦାଶଙ୍କର", "ରାଧାନାଥ"], correctAnswer: 1, marks: 1, explanation: "କାଳିନ୍ଦୀଚରଣ ପାଣିଗ୍ରାହୀ ସ୍ଥାପକ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଛ ମଣ ଆଠ ଗୁଣ୍ଠ' କଣ ଭାବେ ପରିଚିତ?", options: ["ପ୍ରଥମ କବିତା", "ପ୍ରଥମ ଉପନ୍ୟାସ", "ପ୍ରଥମ ନାଟକ", "ପ୍ରଥମ ପ୍ରବନ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଓଡ଼ିଆର ପ୍ରଥମ ପ୍ରମୁଖ ଉପନ୍ୟାସ।" },
      { quiz: odiaQuiz2._id, questionText: "'ପରଜା' କିଏ ଲେଖିଥିଲେ?", options: ["ଫକୀରମୋହନ", "ଗୋପୀନାଥ", "ମନୋଜ ଦାସ", "ପ୍ରତିଭା ରାୟ"], correctAnswer: 1, marks: 1, explanation: "ଗୋପୀନାଥ ମହାନ୍ତି 'ପରଜା' ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "ଆଧୁନିକ ଓଡ଼ିଆ କ୍ଷୁଦ୍ର ଗଳ୍ପ ପାଇଁ କିଏ ପ୍ରସିଦ୍ଧ?", options: ["ମନୋଜ ଦାସ", "ଗୋପବନ୍ଧୁ", "ସାରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ"], correctAnswer: 0, marks: 1, explanation: "ମନୋଜ ଦାସ କ୍ଷୁଦ୍ର ଗଳ୍ପ ପାଇଁ ପ୍ରସିଦ୍ଧ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଯଜ୍ଞସେନୀ' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ", "ପ୍ରତିଭା ରାୟ", "ମନୋଜ ଦାସ", "ସୀତାକାନ୍ତ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତିଭା ରାୟ 'ଯଜ୍ଞସେନୀ' ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଆମ ଦାଣ୍ଡି ବାଟ' କେଉଁ ପ୍ରକାରର ରଚନା?", options: ["ଉପନ୍ୟାସ", "କବିତା", "ଆତ୍ମଜୀବନୀମୂଳକ ପ୍ରବନ୍ଧ", "ନାଟକ"], correctAnswer: 2, marks: 1, explanation: "'ଆମ ଦାଣ୍ଡି ବାଟ' ଆତ୍ମଜୀବନୀମୂଳକ ପ୍ରବନ୍ଧ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ଔପଚାରିକ ଲେଖନ
    const odiaQuiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ଲେଖନ - ଔପଚାରିକ ଯୋଗାଯୋଗ",
      subject: "Odia",
      category: "ଲେଖନ",
      chapter: "ଔପଚାରିକ ଲେଖନ",
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
      { quiz: odiaQuiz3._id, questionText: "ପ୍ରତିବେଦନ କଣ?", options: ["ଚିଠି", "ରିପୋର୍ଟ", "ନିବନ୍ଧ", "କାହାଣୀ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତିବେଦନ ଅର୍ଥ ରିପୋର୍ଟ ଲେଖନ।" },
      { quiz: odiaQuiz3._id, questionText: "ଔପଚାରିକ ପ୍ରତିବେଦନରେ କଣ ଥିବା ଉଚିତ?", options: ["କେବଳ ମତାମତ", "ତଥ୍ୟ, ତାରିଖ, ସ୍ଥାନ", "କେବଳ କାହାଣୀ", "କେବଳ ନାମ"], correctAnswer: 1, marks: 1, explanation: "ତଥ୍ୟ ଏବଂ ସଠିକ ବିବରଣୀ ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ଭାଷଣ କଣ?", options: ["ଚିଠି", "Speech", "ନିବନ୍ଧ", "କବିତା"], correctAnswer: 1, marks: 1, explanation: "ଭାଷଣ ଅର୍ଥ ସଭାରେ କହାଯାଇଥିବା ଉଦ୍ବୋଧନ।" },
      { quiz: odiaQuiz3._id, questionText: "ଔପଚାରିକ ଭାଷଣ କେମିତି ଆରମ୍ଭ ହୁଏ?", options: ["ମଜାକ", "ଅଭିବାଦନ ଏବଂ ପରିଚୟ", "ନିଷ୍କର୍ଷ", "ପ୍ରଶ୍ନ"], correctAnswer: 1, marks: 1, explanation: "ଠିକ୍ ଅଭିବାଦନ ସହ ଆରମ୍ଭ ହୁଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ସମ୍ପାଦକୀୟ କଣ?", options: ["ମିତ୍ରଙ୍କୁ ଚିଠି", "ସମ୍ପାଦକଙ୍କୁ ଚିଠି", "ଡାଏରୀ", "କାହାଣୀ"], correctAnswer: 1, marks: 1, explanation: "ସମ୍ପାଦକଙ୍କୁ ଲେଖାଯାଇଥିବା ଚିଠି।" },
      { quiz: odiaQuiz3._id, questionText: "ସୂଚନା ଲେଖନରେ କଣ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?", options: ["ଲମ୍ବା ପ୍ରସଙ୍ଗ", "ସଂକ୍ଷିପ୍ତ ଏବଂ ସ୍ପଷ୍ଟ", "ବ୍ୟକ୍ତିଗତ ମତ", "କାହାଣୀ"], correctAnswer: 1, marks: 1, explanation: "ସଂକ୍ଷିପ୍ତ ଏବଂ ସ୍ପଷ୍ଟ ହେବା ଦରକାର।" },
      { quiz: odiaQuiz3._id, questionText: "ଅନୁଚ୍ଛେଦ ଲେଖନ କଣ?", options: ["କାହାଣୀ", "Paragraph writing", "ଚିଠି", "କବିତା"], correctAnswer: 1, marks: 1, explanation: "ଦିଆଯାଇଥିବା ବିଷୟରେ paragraph ଲେଖିବା।" },
      { quiz: odiaQuiz3._id, questionText: "ଭଲ ଔପଚାରିକ ଚିଠିରେ କଣ ଦରକାର?", options: ["ସ୍ଲାଙ୍ଗ", "ସ୍ପଷ୍ଟ ଉଦ୍ଦେଶ୍ୟ ଏବଂ ଭଦ୍ର ଭାଷା", "ଲମ୍ବା ବାକ୍ୟ", "Greeting ନଥିବା"], correctAnswer: 1, marks: 1, explanation: "ସ୍ପଷ୍ଟ ଉଦ୍ଦେଶ୍ୟ ଏବଂ ଭଦ୍ର ଭାଷା ଦରକାର।" },
      { quiz: odiaQuiz3._id, questionText: "ବିଜ୍ଞାପନ ଲେଖନ କଣ?", options: ["କାହାଣୀ", "Advertisement writing", "ନିବନ୍ଧ", "ରିପୋର୍ଟ"], correctAnswer: 1, marks: 1, explanation: "ବିଜ୍ଞାପନ ତିଆରି କରିବାକୁ ବିଜ୍ଞାପନ ଲେଖନ କୁହାଯାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ଔପଚାରିକ ଭାଷଣର ଶେଷ କିପରି ହେବା ଉଚିତ?", options: ["ହଠାତ୍ ଶେଷ", "ଧନ୍ୟବାଦ ଏବଂ ସାରାଂଶ", "ନୂତନ ବିଷୟ", "ପ୍ରଶ୍ନ"], correctAnswer: 1, marks: 1, explanation: "ଶ୍ରୋତାଙ୍କୁ ଧନ୍ୟବାଦ ଜଣାଇ ଶେଷ କରାଯାଏ।" },
    ]);

    console.log("✓ Class 8 - Odia: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8OdiaOdia;
