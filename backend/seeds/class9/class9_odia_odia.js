
// Full Odia translated Class 9 Odia file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9OdiaOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: କାରକ ଏବଂ ସନ୍ଧି
    const odiaQuiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ - କାରକ ଏବଂ ଉନ୍ନତ ସନ୍ଧି",
      subject: "Odia",
      category: "ବ୍ୟାକରଣ",
      chapter: "କାରକ ଏବଂ ସନ୍ଧି",
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
      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆ ବ୍ୟାକରଣରେ କେତେ ପ୍ରକାର କାରକ ଅଛି?", options: ["5", "6", "7", "8"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆ ବ୍ୟାକରଣରେ 7 ପ୍ରକାର କାରକ ଅଛି।" },
      { quiz: odiaQuiz1._id, questionText: "କର୍ତ୍ତା କାରକ କଣ?", options: ["କର୍ମ କାରକ", "କାର୍ଯ୍ୟକର୍ତ୍ତା/କର୍ତ୍ତା", "କରଣ କାରକ", "ଅଧିକରଣ କାରକ"], correctAnswer: 1, marks: 1, explanation: "କର୍ତ୍ତା କାରକ କାର୍ଯ୍ୟ କରୁଥିବା ବ୍ୟକ୍ତିକୁ ଦର୍ଶାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "କର୍ମ କାରକ କଣ?", options: ["କର୍ତ୍ତା", "ଯାହା ଉପରେ କାର୍ଯ୍ୟ ହୁଏ", "କରଣ", "ସମ୍ପ୍ରଦାନ"], correctAnswer: 1, marks: 1, explanation: "କର୍ମ କାରକ ହେଉଛି ଯାହା ଉପରେ କାର୍ଯ୍ୟ କରାଯାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "କରଣ କାରକ କାହାକୁ ଦର୍ଶାଏ?", options: ["କର୍ତ୍ତା", "କର୍ମ", "ଯନ୍ତ୍ର କିମ୍ବା ଉପାୟ", "ସ୍ଥାନ"], correctAnswer: 2, marks: 1, explanation: "କରଣ କାରକ କାର୍ଯ୍ୟ କରିବାର ଉପାୟ କିମ୍ବା ଯନ୍ତ୍ରକୁ ଦର୍ଶାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ବିଦ୍ୟା + ଆଳୟ = ବିଦ୍ୟାଳୟ' କେଉଁ ସନ୍ଧି?", options: ["ସ୍ୱର ସନ୍ଧି", "ବ୍ୟଞ୍ଜନ ସନ୍ଧି", "ବିସର୍ଗ ସନ୍ଧି", "କୌଣସି ନୁହେଁ"], correctAnswer: 0, marks: 1, explanation: "ଦୁଇ ସ୍ୱର ମିଶିଥିବାରୁ ଏହା ସ୍ୱର ସନ୍ଧି।" },
      { quiz: odiaQuiz1._id, questionText: "ସମ୍ପ୍ରଦାନ କାରକ କଣ?", options: ["ଯାହାରୁ", "ଯାହା ପାଇଁ କାର୍ଯ୍ୟ ହୁଏ", "ଯେଉଁଠି", "ଯାହା ଦ୍ୱାରା"], correctAnswer: 1, marks: 1, explanation: "ସମ୍ପ୍ରଦାନ କାରକ ଯାହା ପାଇଁ କାର୍ଯ୍ୟ କରାଯାଏ ତାହାକୁ ଦର୍ଶାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "ଅପାଦାନ କାରକ କଣ ଦର୍ଶାଏ?", options: ["ଯାହାକୁ", "ଯାହାରୁ ବିଚ୍ଛେଦ", "ସ୍ଥାନ", "କରଣ"], correctAnswer: 1, marks: 1, explanation: "ଅପାଦାନ କାରକ ବିଚ୍ଛେଦ କିମ୍ବା ଉତ୍ସକୁ ଦର୍ଶାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "ଅଧିକରଣ କାରକ କଣ ଦର୍ଶାଏ?", options: ["କର୍ତ୍ତା", "କର୍ମ", "ସ୍ଥାନ କିମ୍ବା ସମୟ", "ଯନ୍ତ୍ର"], correctAnswer: 2, marks: 1, explanation: "ଅଧିକରଣ କାରକ କାର୍ଯ୍ୟର ସ୍ଥାନ କିମ୍ବା ସମୟକୁ ଦର୍ଶାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଜଗନ୍ନାଥ' ରେ କେଉଁ ସନ୍ଧି ଅଛି?", options: ["ସ୍ୱର ସନ୍ଧି", "ବ୍ୟଞ୍ଜନ ସନ୍ଧି", "ବିସର୍ଗ ସନ୍ଧି", "କୌଣସି ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "'ଜଗତ୍ + ନାଥ = ଜଗନ୍ନାଥ' ହେଉଛି ବ୍ୟଞ୍ଜନ ସନ୍ଧି।" },
      { quiz: odiaQuiz1._id, questionText: "ସମ୍ବନ୍ଧ କାରକ କଣ ଦର୍ଶାଏ?", options: ["ସ୍ଥାନ", "ସମ୍ପର୍କ କିମ୍ବା ଅଧିକାର", "କର୍ମ", "କର୍ତ୍ତା"], correctAnswer: 1, marks: 1, explanation: "ସମ୍ବନ୍ଧ କାରକ ସମ୍ପର୍କ କିମ୍ବା ଅଧିକାରକୁ ଦର୍ଶାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ଆଧୁନିକ ଓଡ଼ିଆ ସାହିତ୍ୟ
    const odiaQuiz2 = await Quiz.create({
      title: "ଆଧୁନିକ ଓଡ଼ିଆ କବିତା ଏବଂ ଗଦ୍ୟ",
      subject: "Odia",
      category: "ସାହିତ୍ୟ",
      chapter: "ଆଧୁନିକ କବିତା",
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
      { quiz: odiaQuiz2._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ 'ସବ୍ୟସାଚୀ' କାହାକୁ କୁହାଯାଏ?", options: ["ସଚ୍ଚି ରାଉତରାୟ", "ଗୋପୀନାଥ ମହାନ୍ତି", "ମନୋଜ ଦାସ", "ସୀତାକାନ୍ତ ମହାପାତ୍ର"], correctAnswer: 0, marks: 1, explanation: "ସଚ୍ଚି ରାଉତରାୟଙ୍କୁ 'ସବ୍ୟସାଚୀ' କୁହାଯାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "'ମଥୁରା ମଙ୍ଗଳ' କିଏ ଲେଖିଥିଲେ?", options: ["ସାରଳା ଦାସ", "ବଳରାମ ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ଅଚ୍ୟୁତାନନ୍ଦ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ବଳରାମ ଦାସ 'ମଥୁରା ମଙ୍ଗଳ' ରଚନା କରିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ପ୍ରଗତିବାଦ' କଣ?", options: ["ରୋମାଣ୍ଟିସିଜ୍ମ", "ପ୍ରଗତିଶୀଳ ସାହିତ୍ୟ ଆନ୍ଦୋଳନ", "ପ୍ରାଚୀନତାବାଦ", "ଆଧୁନିକତା"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରଗତିବାଦ ସାମାଜିକ ସମସ୍ୟାକୁ କେନ୍ଦ୍ର କରିଥିବା ଆନ୍ଦୋଳନ।" },
      { quiz: odiaQuiz2._id, questionText: "ଓଡ଼ିଶାର ପ୍ରଥମ ଜ୍ଞାନପୀଠ ପୁରସ୍କାର କିଏ ପାଇଥିଲେ?", options: ["ସୀତାକାନ୍ତ ମହାପାତ୍ର", "ଗୋପୀନାଥ ମହାନ୍ତି", "ମନୋଜ ଦାସ", "ପ୍ରତିଭା ରାୟ"], correctAnswer: 1, marks: 1, explanation: "1973 ରେ ଗୋପୀନାଥ ମହାନ୍ତି ପ୍ରଥମ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଆଧୁନିକ କବିତା' ର ବିଶେଷତା କଣ?", options: ["କେବଳ ଛନ୍ଦ", "ମୁକ୍ତଛନ୍ଦ, ଚିତ୍ରକଳ୍ପ, ପ୍ରତୀକ", "କେବଳ ଭକ୍ତି", "କେବଳ ପ୍ରକୃତି"], correctAnswer: 1, marks: 1, explanation: "ଆଧୁନିକ କବିତାରେ ମୁକ୍ତଛନ୍ଦ ଏବଂ ପ୍ରତୀକ ବ୍ୟବହାର ହୁଏ।" },
      { quiz: odiaQuiz2._id, questionText: "'ହରିଜନ' ର ଲେଖକ କିଏ?", options: ["ଗୋପବନ୍ଧୁ ଦାସ", "ଫକୀରମୋହନ", "ଗୋପୀନାଥ ମହାନ୍ତି", "କାଳିନ୍ଦୀ ଚରଣ"], correctAnswer: 0, marks: 1, explanation: "ଗୋପବନ୍ଧୁ ଦାସ ସାମାଜିକ ସୁଧାର ବିଷୟରେ ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ନିଜ ବସୁନ୍ଧରା' କିଏ ଲେଖିଥିଲେ?", options: ["ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର", "ସଚ୍ଚି ରାଉତରାୟ", "ଗୁରୁପ୍ରସାଦ ମହାନ୍ତି"], correctAnswer: 2, marks: 1, explanation: "ସଚ୍ଚି ରାଉତରାୟ 'ନିଜ ବସୁନ୍ଧରା' ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ସବୁଜ ଯୁଗ' କେଉଁ ସାହିତ୍ୟ ଯୁଗ?", options: ["ପ୍ରାଚୀନ", "ମଧ୍ୟଯୁଗୀୟ", "ପ୍ରାକ୍-ଆଧୁନିକ ରୋମାଣ୍ଟିକ", "ସ୍ୱାଧୀନତା ପରବର୍ତ୍ତୀ"], correctAnswer: 2, marks: 1, explanation: "ସବୁଜ ଯୁଗ ପ୍ରାକ୍-ଆଧୁନିକ ରୋମାଣ୍ଟିକ ଯୁଗ।" },
      { quiz: odiaQuiz2._id, questionText: "ଆଦିବାସୀ ସାହିତ୍ୟ ପାଇଁ କିଏ ପ୍ରସିଦ୍ଧ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ମନୋଜ ଦାସ", "ଫକୀରମୋହନ", "ସାରଳା ଦାସ"], correctAnswer: 0, marks: 1, explanation: "ଗୋପୀନାଥ ମହାନ୍ତି ଆଦିବାସୀ ଜୀବନକୁ ଉପସ୍ଥାପନ କରିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ମୁକ୍ତଛନ୍ଦ' କଣ?", options: ["କଠୋର ଛନ୍ଦ", "ମୁକ୍ତ ଛନ୍ଦ", "ତୁକାନ୍ତ କବିତା", "ଭକ୍ତିଗୀତ"], correctAnswer: 1, marks: 1, explanation: "ମୁକ୍ତଛନ୍ଦରେ ନିର୍ଦ୍ଧିଷ୍ଟ ଛନ୍ଦ ନଥାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ଉନ୍ନତ ଔପଚାରିକ ଲେଖନ
    const odiaQuiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ଲେଖନ - ଉନ୍ନତ ଔପଚାରିକ ଲେଖନ",
      subject: "Odia",
      category: "ଲେଖନ",
      chapter: "ଉନ୍ନତ ଲେଖନ",
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
      { quiz: odiaQuiz3._id, questionText: "ପ୍ରବନ୍ଧ ଲେଖନ କଣ?", options: ["ଚିଠି ଲେଖନ", "ନିବନ୍ଧ ଲେଖନ", "କାହାଣୀ ଲେଖନ", "କବିତା ଲେଖନ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରବନ୍ଧ ଲେଖନ ହେଉଛି ନିବନ୍ଧ ଲେଖନ।" },
      { quiz: odiaQuiz3._id, questionText: "ବକ୍ତୃତ୍ୱ କାହାକୁ କୁହାଯାଏ?", options: ["ଲେଖନ", "ଭାଷଣ ଦେବା କଳା", "ପଢ଼ିବା", "ଶୁଣିବା"], correctAnswer: 1, marks: 1, explanation: "ବକ୍ତୃତ୍ୱ ହେଉଛି ଭାଷଣ ଦେବାର କଳା।" },
      { quiz: odiaQuiz3._id, questionText: "ବାଦ-ବିବାଦରେ କଣ ଥିବା ଉଚିତ?", options: ["କେବଳ ଏକ ପକ୍ଷ", "ପକ୍ଷ ଏବଂ ବିପକ୍ଷ ଯୁକ୍ତି", "କେବଳ ବ୍ୟକ୍ତିଗତ ମତ", "କେବଳ କାହାଣୀ"], correctAnswer: 1, marks: 1, explanation: "ବାଦ-ବିବାଦରେ ଦୁଇ ପକ୍ଷର ଯୁକ୍ତି ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ସାରାଂଶ ଲେଖନ କଣ?", options: ["ବିସ୍ତାର", "ସଂକ୍ଷେପ ଲେଖନ", "ଅନୁବାଦ", "ନକଲ"], correctAnswer: 1, marks: 1, explanation: "ସାରାଂଶ ଲେଖନ ହେଉଛି ସଂକ୍ଷେପ ଲେଖନ।" },
      { quiz: odiaQuiz3._id, questionText: "ଔପଚାରିକ ଓଡ଼ିଆ ଲେଖନରେ କେଉଁ ଭାଷା ବ୍ୟବହୃତ ହେବା ଉଚିତ?", options: ["ଅନୌପଚାରିକ", "ଔପଚାରିକ ଏବଂ ସମ୍ମାନଜନକ", "ସ୍ଲାଙ୍ଗ", "ମିଶ୍ରିତ"], correctAnswer: 1, marks: 1, explanation: "ଔପଚାରିକ ଲେଖନରେ ସମ୍ମାନଜନକ ଭାଷା ବ୍ୟବହାର କରାଯାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ଅଧିକାରିକ ଚିଠି ଲେଖନ କଣ?", options: ["ବ୍ୟକ୍ତିଗତ ଚିଠି", "ଔପଚାରିକ ଚିଠି", "ପ୍ରେମପତ୍ର", "ଆମନ୍ତ୍ରଣ"], correctAnswer: 1, marks: 1, explanation: "ଅଧିକାରିକ ଚିଠି ଔପଚାରିକ ଧାରାରେ ଲେଖାଯାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ପ୍ରତିବେଦନ ଲେଖନରେ କଣ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?", options: ["କଳ୍ପନା", "ତଥ୍ୟ, ତାରିଖ, ସ୍ଥାନ", "ବ୍ୟକ୍ତିଗତ ଭାବନା", "କବିତା"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତିବେଦନରେ ସଠିକ ତଥ୍ୟ ଦରକାର।" },
      { quiz: odiaQuiz3._id, questionText: "ଅନୁବାଦ କଣ?", options: ["ମୂଳ ଲେଖନ", "ଏକ ଭାଷାରୁ ଅନ୍ୟ ଭାଷାକୁ ରୂପାନ୍ତର", "ସାରାଂଶ", "ବିସ୍ତାର"], correctAnswer: 1, marks: 1, explanation: "ଅନୁବାଦ ହେଉଛି ଭାଷା ପରିବର୍ତ୍ତନ।" },
      { quiz: odiaQuiz3._id, questionText: "ଏକ ଭଲ ସମ୍ପାଦକୀୟର ବିଶେଷତା କଣ?", options: ["କେବଳ ତଥ୍ୟ", "ବିଶ୍ଳେଷଣ, ମତ ଏବଂ ସମାଧାନ", "କେବଳ କାହାଣୀ", "କେବଳ ଆଲୋଚନା"], correctAnswer: 1, marks: 1, explanation: "ସମ୍ପାଦକୀୟରେ ବିଶ୍ଳେଷଣ ଏବଂ ସମାଧାନ ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ପଦ୍ୟ ଅନୁବାଦ କଣ?", options: ["ଗଦ୍ୟ ଅନୁବାଦ", "କବିତା ଅନୁବାଦ", "କାହାଣୀ ଅନୁବାଦ", "ନାଟକ ଅନୁବାଦ"], correctAnswer: 1, marks: 1, explanation: "ପଦ୍ୟ ଅନୁବାଦ ହେଉଛି କବିତାର ଅନୁବାଦ।" },
    ]);

    console.log("✓ Class 9 - Odia: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9OdiaOdia;
