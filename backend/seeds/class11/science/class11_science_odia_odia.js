import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ScienceOdiaOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ବ୍ୟାକରଣ - ଅଳଙ୍କାର ଏବଂ ଛନ୍ଦ
    const odiaQuiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ - ଅଳଙ୍କାର ଏବଂ ଛନ୍ଦ",
      subject: "Odia",
      category: "ବ୍ୟାକରଣ",
      chapter: "ଅଳଙ୍କାର ଏବଂ ଛନ୍ଦ",
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
      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ 'ଅଳଙ୍କାର' କଣ?", options: ["କବିତା ପ୍ରକାର", "ଭାଷାକୁ ସୁନ୍ଦର କରୁଥିବା ଅଭିବ୍ୟକ୍ତି", "ବ୍ୟାକରଣ ନିୟମ", "କାହାଣୀ"], correctAnswer: 1, marks: 1, explanation: "ଅଳଙ୍କାର ଭାଷାକୁ ସୁନ୍ଦର ଏବଂ ପ୍ରଭାବଶାଳୀ କରେ।" },
      { quiz: odiaQuiz1._id, questionText: "ଅଳଙ୍କାର କେତେ ପ୍ରକାର?", options: ["2", "3", "4", "5"], correctAnswer: 0, marks: 1, explanation: "ଶବ୍ଦାଳଙ୍କାର ଏବଂ ଅର୍ଥାଳଙ୍କାର — ଦୁଇ ପ୍ରକାର।" },
      { quiz: odiaQuiz1._id, questionText: "'ଉପମା' ଅଳଙ୍କାର କଣ?", options: ["ସରଳ ତୁଳନା", "'ପରି/ଭଳି' ଦ୍ୱାରା ତୁଳନା", "ଅତିଶୟୋକ୍ତି", "ପୁନରାବୃତ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ଉପମାରେ 'ପରି', 'ଭଳି' ଇତ୍ୟାଦି ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ରୂପକ' ଅଳଙ୍କାର କଣ?", options: ["ପରି/ଭଳି ତୁଳନା", "ସିଧାସଳଖ ପରିଚୟ", "ଧ୍ୱନି ପୁନରାବୃତ୍ତି", "ଅତିଶୟୋକ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ରୂପକରେ ତୁଳନା ଶବ୍ଦ ଛଡ଼ା ସିଧାସଳଖ ଚିହ୍ନଟ କରାଯାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଅନୁପ୍ରାସ' ଅଳଙ୍କାର କଣ?", options: ["ଅର୍ଥ ପୁନରାବୃତ୍ତି", "ଧ୍ୱନି ପୁନରାବୃତ୍ତି", "ତୁଳନା", "ବିରୋଧ"], correctAnswer: 1, marks: 1, explanation: "ଅନୁପ୍ରାସରେ ବ୍ୟଞ୍ଜନ ଧ୍ୱନି ପୁନରାବୃତ୍ତି ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଛନ୍ଦ' କଣ?", options: ["ମୁକ୍ତଛନ୍ଦ", "ଲୟ/ମାପ", "ଗଦ୍ୟ", "ସଂଲାପ"], correctAnswer: 1, marks: 1, explanation: "ଛନ୍ଦ କବିତାର ଲୟ ଏବଂ ମାତ୍ରା ଭିତ୍ତିକ ଗଠନ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଅତିଶୟୋକ୍ତି' ଅଳଙ୍କାର କଣ?", options: ["ଅଳ୍ପ କହିବା", "ଅତ୍ୟଧିକ ବଢ଼ାଇ କହିବା", "ତୁଳନା", "ପୁନରାବୃତ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ଅତିଶୟୋକ୍ତିରେ ଅତ୍ୟଧିକ ବଢ଼ାଇ କୁହାଯାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଯମକ' ଅଳଙ୍କାର କଣ?", options: ["ଏକେଇ ଶବ୍ଦର ଭିନ୍ନ ଅର୍ଥରେ ପୁନରାବୃତ୍ତି", "ଧ୍ୱନି ପୁନରାବୃତ୍ତି", "ତୁଳନା", "ବିରୋଧ"], correctAnswer: 0, marks: 1, explanation: "ଯମକରେ ଏକେଇ ଶବ୍ଦ ଭିନ୍ନ ଅର୍ଥରେ ଆସେ।" },
      { quiz: odiaQuiz1._id, questionText: "'ମାତ୍ରା' କଣ?", options: ["ଅକ୍ଷର", "ଅକ୍ଷର ମାପ ଏକକ", "ଶବ୍ଦ", "ବାକ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ଛନ୍ଦରେ ଅକ୍ଷର ମାପିବା ଏକକକୁ ମାତ୍ରା କୁହାଯାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ବ୍ୟତିରେକ' ଅଳଙ୍କାର କଣ?", options: ["ସାମ୍ୟ", "ବିଷୟକୁ ଶ୍ରେଷ୍ଠ ଦେଖାଇବା", "ପୁନରାବୃତ୍ତି", "ବିରୋଧ"], correctAnswer: 1, marks: 1, explanation: "ବ୍ୟତିରେକରେ ବିଷୟକୁ ଅଧିକ ଶ୍ରେଷ୍ଠ କୁହାଯାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ସାହିତ୍ୟ - ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟ
    const odiaQuiz2 = await Quiz.create({
      title: "ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟ ଏବଂ ଉପନ୍ୟାସ",
      subject: "Odia",
      category: "ସାହିତ୍ୟ",
      chapter: "ଆଧୁନିକ ଗଦ୍ୟ",
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
      { quiz: odiaQuiz2._id, questionText: "ପ୍ରଥମ ଆଧୁନିକ ଓଡ଼ିଆ ଉପନ୍ୟାସିକ କିଏ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ଫକୀରମୋହନ ସେନାପତି", "କାଳିନ୍ଦୀ ଚରଣ", "ମନୋଜ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଫକୀରମୋହନ ଆଧୁନିକ ଓଡ଼ିଆ ଉପନ୍ୟାସର ପ୍ରବର୍ତ୍ତକ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଅମୃତର ସନ୍ତାନ' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି", "ମନୋଜ ଦାସ", "ପ୍ରତିଭା ରାୟ"], correctAnswer: 3, marks: 1, explanation: "ପ୍ରତିଭା ରାୟ 'ଅମୃତର ସନ୍ତାନ' ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଛ ମଣ ଆଠ ଗୁଣ୍ଠ' ର ମହତ୍ତ୍ୱ କଣ?", options: ["ପ୍ରଥମ କବିତା", "ଜମିଦାରୀ ଶୋଷଣ ଉପରେ ଆଧାରିତ ପ୍ରଥମ ବାସ୍ତବ ଉପନ୍ୟାସ", "ପ୍ରଥମ ନାଟକ", "ପ୍ରଥମ ନିବନ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "ଏହା କୃଷକ ଶୋଷଣ ଉପରେ ଆଧାରିତ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଡାଡି ବୁଢା' କିଏ ଲେଖିଥିଲେ?", options: ["ଫକୀରମୋହନ", "ଗୋପୀନାଥ", "ସୁରେନ୍ଦ୍ର", "ଚନ୍ଦ୍ରଶେଖର"], correctAnswer: 0, marks: 1, explanation: "ଫକୀରମୋହନ 'ଡାଡି ବୁଢା' ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟର ବିଶେଷତା କଣ?", options: ["ଧାର୍ମିକ ବିଷୟ", "ବାସ୍ତବତା ଏବଂ ସାମାଜିକ ସମସ୍ୟା", "ପ୍ରକୃତି କବିତା", "ଇତିହାସ"], correctAnswer: 1, marks: 1, explanation: "ଆଧୁନିକ ଗଦ୍ୟରେ ସାମାଜିକ ଓ ମନୋବୈଜ୍ଞାନିକ ଗଭୀରତା ଥାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "ଦଳିତ ସାହିତ୍ୟ ପାଇଁ କିଏ ପ୍ରସିଦ୍ଧ?", options: ["ଗୋପୀନାଥ", "ଭୀମ ଭୋଇ", "ଫକୀରମୋହନ", "ରାଧାନାଥ ରାୟ"], correctAnswer: 1, marks: 1, explanation: "ଭୀମ ଭୋଇ ଦଳିତ ସଚେତନତାର ପ୍ରବର୍ତ୍ତକ।" },
      { quiz: odiaQuiz2._id, questionText: "'କଥା ସାହିତ୍ୟ' କଣ?", options: ["କବିତା", "ଛୋଟଗଳ୍ପ ସାହିତ୍ୟ", "ନାଟକ", "ନିବନ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "କଥା ସାହିତ୍ୟ ଛୋଟଗଳ୍ପକୁ କୁହାଯାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "ସାରଳା ପୁରସ୍କାର କାହାକୁ ଦିଆଯାଏ?", options: ["କେବଳ ଗୋଟିଏ ଲୋକ", "ପ୍ରମୁଖ ଓଡ଼ିଆ ସାହିତ୍ୟିକ", "କାହାକୁ ନୁହେଁ", "କେବଳ କବି"], correctAnswer: 1, marks: 1, explanation: "ଏହା ପ୍ରମୁଖ ଓଡ଼ିଆ ସାହିତ୍ୟିକଙ୍କୁ ଦିଆଯାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "'ନାଟକ' କଣ?", options: ["ଉପନ୍ୟାସ", "କବିତା", "ମଞ୍ଚସ୍ଥ ନାଟ୍ୟ", "ନିବନ୍ଧ"], correctAnswer: 2, marks: 1, explanation: "ନାଟକ ମଞ୍ଚରେ ଅଭିନୟ କରାଯାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଗଦ୍ୟ ସମ୍ରାଟ' କିଏ?", options: ["ଫକୀରମୋହନ", "ଗୋପବନ୍ଧୁ", "ରାଧାନାଥ", "ଗଙ୍ଗାଧର"], correctAnswer: 0, marks: 1, explanation: "ଫକୀରମୋହନଙ୍କୁ ଗଦ୍ୟ ସମ୍ରାଟ କୁହାଯାଏ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ଲେଖନ - ଉନ୍ନତ ରଚନା
    const odiaQuiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ଲେଖନ - ଉନ୍ନତ ରଚନା",
      subject: "Odia",
      category: "ଲେଖନ",
      chapter: "ଉନ୍ନତ ରଚନା",
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
      { quiz: odiaQuiz3._id, questionText: "'ଭାବ ସମ୍ପ୍ରସାରଣ' କଣ?", options: ["ସଂକ୍ଷେପ", "ଭାବ ବିସ୍ତାର", "ଅନୁବାଦ", "ନକଲ"], correctAnswer: 1, marks: 1, explanation: "ଭାବ ସମ୍ପ୍ରସାରଣରେ ଏକ ଭାବକୁ ବିସ୍ତାର କରାଯାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ଭାବ ସଂକୋଚନ' କଣ?", options: ["ବିସ୍ତାର", "ସଂକ୍ଷେପ", "ଅନୁବାଦ", "ପୁନର୍ଲେଖନ"], correctAnswer: 1, marks: 1, explanation: "ଭାବ ସଂକୋଚନରେ ସଂକ୍ଷିପ୍ତ କରାଯାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ଓଡ଼ିଆ ନିବନ୍ଧର word limit କେତେ?", options: ["50-80", "100-150", "200-300", "500+"], correctAnswer: 2, marks: 1, explanation: "ସାଧାରଣତଃ 200-300 ଶବ୍ଦ।" },
      { quiz: odiaQuiz3._id, questionText: "ଔପଚାରିକ ପତ୍ର ଲେଖନର ବିଶେଷତା କଣ?", options: ["ବ୍ୟକ୍ତିଗତ", "ଔପଚାରିକ ଗଠନ", "ପ୍ରେମପତ୍ର", "ଆମନ୍ତ୍ରଣ"], correctAnswer: 1, marks: 1, explanation: "ଔପଚାରିକ ପତ୍ରର ନିର୍ଦ୍ଧିଷ୍ଟ ଗଠନ ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "ରଚନାର conclusion ରେ କଣ ଥାଏ?", options: ["ନୂତନ ଭାବ", "ମୁଖ୍ୟ ବିନ୍ଦୁର ସାରାଂଶ", "ପ୍ରଶ୍ନ", "ନୂତନ ବିଷୟ"], correctAnswer: 1, marks: 1, explanation: "Conclusion ରେ ସାରାଂଶ ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ଅନୁଚ୍ଛେଦ ଲେଖନ' କଣ?", options: ["କାହାଣୀ", "ଏକ ବିଷୟରେ ଅନୁଚ୍ଛେଦ", "ପତ୍ର", "କବିତା"], correctAnswer: 1, marks: 1, explanation: "ଏକ ବିଷୟ ଉପରେ ଛୋଟ ଅନୁଚ୍ଛେଦ ଲେଖାଯାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ସଂବାଦ ରଚନା' ରେ କଣ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?", options: ["ଲମ୍ବା ବାକ୍ୟ", "ସ୍ୱାଭାବିକ ଭାଷା", "କେବଳ ପ୍ରଶ୍ନ", "କେବଳ ଔପଚାରିକ ଭାଷା"], correctAnswer: 1, marks: 1, explanation: "ସଂବାଦ ସ୍ୱାଭାବିକ ହେବା ଉଚିତ।" },
      { quiz: odiaQuiz3._id, questionText: "'ଗଳ୍ପ ରଚନା' କଣ?", options: ["ନିବନ୍ଧ", "ସୃଜନଶୀଳ କାହାଣୀ", "ରିପୋର୍ଟ", "ପତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ଗଳ୍ପ ରଚନାରେ କାହାଣୀ ଗଠନ ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ପ୍ରତିବେଦନ' ଲେଖନ କଣ?", options: ["କଳ୍ପନା", "ଘଟଣାର ତଥ୍ୟାଧାରିତ ବର୍ଣ୍ଣନା", "କବିତା", "ଡାୟାରୀ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତିବେଦନରେ ତଥ୍ୟ ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ବିଚାର ଲେଖନ' କଣ?", options: ["କାହାଣୀ", "ସାମାଜିକ/ରାଜନୈତିକ ବିଷୟର ବିଶ୍ଳେଷଣ", "କବିତା", "ପତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ବିଚାର ଲେଖନରେ ବିଶ୍ଳେଷଣ ଏବଂ ମତ ଥାଏ।" },
    ]);

    console.log("✓ Class 11 Science - Odia (ଓଡ଼ିଆ): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11ScienceOdiaOdia;
