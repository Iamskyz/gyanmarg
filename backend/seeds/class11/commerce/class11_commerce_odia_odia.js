import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceOdiaOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୁକ୍ତ");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Grammar - Alankar and Chhanda
    const odiaQuiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ - ଅଳଙ୍କାର ଏବଂ ଛନ୍ଦ",
      subject: "Odia",
      category: "Grammar",
      chapter: "ଅଳଙ୍କାର ଏବଂ ଛନ୍ଦ",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ 'ଅଳଙ୍କାର' କଣ?", options: ["କବିତାର ଏକ ପ୍ରକାର", "ଭାଷାକୁ ସୁନ୍ଦର କରୁଥିବା ଶବ୍ଦ ଶୈଳୀ", "ବ୍ୟାକରଣ ନିୟମ", "ଗଳ୍ପର ଏକ ପ୍ରକାର"], correctAnswer: 1, marks: 1, explanation: "ଅଳଙ୍କାର ଭାଷାକୁ ସୁନ୍ଦର ଏବଂ ପ୍ରଭାବଶାଳୀ କରେ।" },
      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆରେ ଅଳଙ୍କାରର କେତେ ପ୍ରକାର ଅଛି?", options: ["2", "3", "4", "5"], correctAnswer: 0, marks: 1, explanation: "ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାର - ଶବ୍ଦାଳଙ୍କାର ଏବଂ ଅର୍ଥାଳଙ୍କାର।" },
      { quiz: odiaQuiz1._id, questionText: "'ଉପମା' ଅଳଙ୍କାର କଣ?", options: ["ସରଳ ତୁଳନା", "'ପରି/ଭଳି' ଦ୍ୱାରା ତୁଳନା", "ଅତିଶୟୋକ୍ତି", "ପୁନରାବୃତ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ଉପମାରେ 'ପରି', 'ଭଳି' ଭଳି ଶବ୍ଦ ଦ୍ୱାରା ତୁଳନା କରାଯାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ରୂପକ' ଅଳଙ୍କାର କଣ?", options: ["ପରି/ଭଳି ସହ ତୁଳନା", "ତୁଳନା ଶବ୍ଦ ଛଡ଼ା ସିଧାସଳଖ ପରିଚୟ", "ଧ୍ୱନି ପୁନରାବୃତ୍ତି", "ଅତିଶୟୋକ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ରୂପକରେ ତୁଳନା ଶବ୍ଦ ବ୍ୟବହାର ହୁଏ ନାହିଁ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଅନୁପ୍ରାସ' ଅଳଙ୍କାର କଣ?", options: ["ଅର୍ଥ ପୁନରାବୃତ୍ତି", "ବ୍ୟଞ୍ଜନ ଧ୍ୱନିର ପୁନରାବୃତ୍ତି", "ତୁଳନା", "ବିରୋଧାଭାସ"], correctAnswer: 1, marks: 1, explanation: "ଅନୁପ୍ରାସରେ ସମାନ ବ୍ୟଞ୍ଜନ ଧ୍ୱନି ପୁନରାବୃତ୍ତି ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଛନ୍ଦ' କଣ?", options: ["ମୁକ୍ତ କବିତା", "କବିତାର ଲୟ ଏବଂ ମାପ", "ଗଦ୍ୟ ଶୈଳୀ", "ସଂଭାଷଣ"], correctAnswer: 1, marks: 1, explanation: "ଛନ୍ଦ କବିତାର ଲୟାତ୍ମକ ଗଠନ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଅତିଶୟୋକ୍ତି' ଅଳଙ୍କାର କଣ?", options: ["ଅଳ୍ପ କହିବା", "ଅତିରଞ୍ଜନ", "ତୁଳନା", "ପୁନରାବୃତ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ଅତିଶୟୋକ୍ତିରେ ବଢ଼ାଇ କହାଯାଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ଯମକ' ଅଳଙ୍କାର କଣ?", options: ["ଏକେ ଶବ୍ଦର ଭିନ୍ନ ଅର୍ଥରେ ପୁନରାବୃତ୍ତି", "ଧ୍ୱନି ପୁନରାବୃତ୍ତି", "ତୁଳନା", "ବିରୋଧାଭାସ"], correctAnswer: 0, marks: 1, explanation: "ଯମକରେ ଏକେ ଶବ୍ଦ ଭିନ୍ନ ଅର୍ଥରେ ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ମାତ୍ରା' କଣ?", options: ["ଅକ୍ଷର", "ଅକ୍ଷର ମାପିବା ଏକକ", "ଶବ୍ଦ", "ବାକ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ମାତ୍ରା ଛନ୍ଦରେ ଅକ୍ଷର ଗଣନା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: odiaQuiz1._id, questionText: "'ବ୍ୟତିରେକ' ଅଳଙ୍କାର କଣ?", options: ["ସମାନତା ଦର୍ଶାଇବା", "ତୁଳନାରେ ବିଷୟକୁ ଶ୍ରେଷ୍ଠ ଦେଖାଇବା", "ପୁନରାବୃତ୍ତି", "ବିରୋଧାଭାସ"], correctAnswer: 1, marks: 1, explanation: "ବ୍ୟତିରେକରେ ବିଷୟକୁ ଅଧିକ ଶ୍ରେଷ୍ଠ ଭାବେ ଦର୍ଶାଯାଏ।" },
    ]);

    // Subcategory 2: Literature - Modern Odia Prose
    const odiaQuiz2 = await Quiz.create({
      title: "ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟ ଏବଂ ଉପନ୍ୟାସ",
      subject: "Odia",
      category: "Literature",
      chapter: "ଆଧୁନିକ ଗଦ୍ୟ",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz2._id, questionText: "ପ୍ରଥମ ଆଧୁନିକ ଓଡ଼ିଆ ଉପନ୍ୟାସିକ କିଏ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ଫକୀର ମୋହନ ସେନାପତି", "କାଳିନ୍ଦୀ ଚରଣ", "ମନୋଜ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଫକୀର ମୋହନ ସେନାପତି ଆଧୁନିକ ଓଡ଼ିଆ ଉପନ୍ୟାସର ପ୍ରବର୍ତ୍ତକ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଅମୃତର ସନ୍ତାନ' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି", "ମନୋଜ ଦାସ", "ପ୍ରତିଭା ରାୟ"], correctAnswer: 3, marks: 1, explanation: "ପ୍ରତିଭା ରାୟ 'ଅମୃତର ସନ୍ତାନ' ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଛ ମଣ ଆଠ ଗୁଣ୍ଠ' ର ଗୁରୁତ୍ୱ କଣ?", options: ["ପ୍ରଥମ ଓଡ଼ିଆ କବିତା", "ଜମି ଶୋଷଣ ଉପରେ ପ୍ରଥମ ବାସ୍ତବ ଉପନ୍ୟାସ", "ପ୍ରଥମ ନାଟକ", "ପ୍ରଥମ ନିବନ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଗରିବ ଚାଷୀଙ୍କ ଶୋଷଣକୁ ଦର୍ଶାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଡାଡି ବୁଢ଼ା' କିଏ ଲେଖିଥିଲେ?", options: ["ଫକୀର ମୋହନ", "ଗୋପୀନାଥ ମହାନ୍ତି", "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି", "ଚନ୍ଦ୍ରଶେଖର ରଥ"], correctAnswer: 0, marks: 1, explanation: "ଫକୀର ମୋହନ ସେନାପତି ଏହା ଲେଖିଥିଲେ।" },
      { quiz: odiaQuiz2._id, questionText: "ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟର ବିଶେଷତା କଣ?", options: ["କେବଳ ଧାର୍ମିକ ବିଷୟ", "ବାସ୍ତବତା, ସାମାଜିକ ସମସ୍ୟା", "ପ୍ରକୃତି କବିତା", "ଇତିହାସ"], correctAnswer: 1, marks: 1, explanation: "ଆଧୁନିକ ଗଦ୍ୟରେ ସାମାଜିକ ଏବଂ ମାନସିକ ଗଭୀରତା ଥାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "ଓଡ଼ିଆ ଦଳିତ ସାହିତ୍ୟ ପାଇଁ କିଏ ପ୍ରସିଦ୍ଧ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ଭୀମ ଭୋଇ", "ଫକୀର ମୋହନ", "ରାଧାନାଥ ରାୟ"], correctAnswer: 1, marks: 1, explanation: "ଭୀମ ଭୋଇ ଦଳିତ ସଚେତନତାର ପ୍ରବର୍ତ୍ତକ।" },
      { quiz: odiaQuiz2._id, questionText: "'କଥା ସାହିତ୍ୟ' କଣ?", options: ["କବିତା", "ଛୋଟ ଗଳ୍ପ ସାହିତ୍ୟ", "ନାଟକ", "ନିବନ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "କଥା ସାହିତ୍ୟ ଅର୍ଥ short story literature।" },
      { quiz: odiaQuiz2._id, questionText: "'ସାରଳା ପୁରସ୍କାର' କାହାକୁ ଦିଆଯାଏ?", options: ["କେବଳ ଜଣେ ବ୍ୟକ୍ତି", "ଅନେକ ପ୍ରସିଦ୍ଧ ଓଡ଼ିଆ ଲେଖକ", "କାହାକୁ ନୁହେଁ", "କେବଳ କବି"], correctAnswer: 1, marks: 1, explanation: "ଏହା ପ୍ରସିଦ୍ଧ ଓଡ଼ିଆ ସାହିତ୍ୟିକଙ୍କୁ ଦିଆଯାଏ।" },
      { quiz: odiaQuiz2._id, questionText: "'ନାଟକ' କଣ?", options: ["ଉପନ୍ୟାସ", "କବିତା", "Drama/Play", "ନିବନ୍ଧ"], correctAnswer: 2, marks: 1, explanation: "ନାଟକ ମଞ୍ଚରେ ଅଭିନୟ ହୁଏ।" },
      { quiz: odiaQuiz2._id, questionText: "'ଗଦ୍ୟ ସମ୍ରାଟ' କାହାକୁ କୁହାଯାଏ?", options: ["ଫକୀର ମୋହନ ସେନାପତି", "ଗୋପବନ୍ଧୁ ଦାସ", "ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର"], correctAnswer: 0, marks: 1, explanation: "ଫକୀର ମୋହନ ସେନାପତିଙ୍କୁ 'ଗଦ୍ୟ ସମ୍ରାଟ' କୁହାଯାଏ।" },
    ]);

    // Subcategory 3: Writing - Advanced Composition
    const odiaQuiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ଲେଖନ - ଉନ୍ନତ ରଚନା",
      subject: "Odia",
      category: "Writing",
      chapter: "ଉନ୍ନତ ରଚନା",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz3._id, questionText: "'ଭାବ ସମ୍ପ୍ରସାରଣ' କଣ?", options: ["ସାରାଂଶ", "ଏକ ଭାବକୁ ବିସ୍ତାର କରିବା", "ଅନୁବାଦ", "ନକଲ"], correctAnswer: 1, marks: 1, explanation: "ଭାବ ସମ୍ପ୍ରସାରଣରେ ଏକ ଭାବକୁ ବିସ୍ତାରିତ କରାଯାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ଭାବ ସଂକୋଚନ' କଣ?", options: ["ବିସ୍ତାର", "ସାରାଂଶ କରିବା", "ଅନୁବାଦ", "ପୁନଃଲେଖନ"], correctAnswer: 1, marks: 1, explanation: "ଭାବ ସଂକୋଚନରେ ଅର୍ଥ ରଖି କମ୍ ଶବ୍ଦରେ ଲେଖାଯାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "Class 11 ଓଡ଼ିଆ essay ର word limit କେତେ?", options: ["50-80", "100-150", "200-300", "500+"], correctAnswer: 2, marks: 1, explanation: "Essay ସାଧାରଣତଃ 200-300 ଶବ୍ଦର ହୁଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ପତ୍ର ଲେଖନ' ଅଧିକାରିକ ଉଦ୍ଦେଶ୍ୟରେ କେମିତି ହୁଏ?", options: ["ବ୍ୟକ୍ତିଗତ ଚିଠି", "ଔପଚାରିକ ଚିଠି", "ପ୍ରେମ ପତ୍ର", "ନିମନ୍ତ୍ରଣ"], correctAnswer: 1, marks: 1, explanation: "ଔପଚାରିକ ପତ୍ରରେ proper format ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ରଚନା' ର conclusion ରେ କଣ ଥାଏ?", options: ["ନୂତନ ଧାରଣା", "ମୁଖ୍ୟ ବିନ୍ଦୁର ସାରାଂଶ", "ପ୍ରଶ୍ନ", "ନୂତନ topic"], correctAnswer: 1, marks: 1, explanation: "Conclusion ରେ ମୁଖ୍ୟ ବିନ୍ଦୁର ସାରାଂଶ ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ଅନୁଛେଦ ଲେଖନ' କଣ?", options: ["ଗଳ୍ପ ଲେଖନ", "ଦିଆଯାଇଥିବା ବିଷୟରେ paragraph ଲେଖିବା", "ପତ୍ର ଲେଖନ", "କବିତା"], correctAnswer: 1, marks: 1, explanation: "ଅନୁଛେଦ ଲେଖନ ମାନେ ଏକ paragraph ଲେଖିବା।" },
      { quiz: odiaQuiz3._id, questionText: "'ସଂବାଦ ରଚନା' ରେ କଣ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?", options: ["ଦୀର୍ଘ sentence", "ସ୍ୱାଭାବିକ ଏବଂ ସଂକ୍ଷିପ୍ତ ଭାଷା", "କେବଳ ପ୍ରଶ୍ନ", "କେବଳ ଔପଚାରିକ ଭାଷା"], correctAnswer: 1, marks: 1, explanation: "Dialogue ସ୍ୱାଭାବିକ ଏବଂ relevant ହେବା ଉଚିତ।" },
      { quiz: odiaQuiz3._id, questionText: "'ଗଳ୍ପ ରଚନା' କଣ?", options: ["Essay writing", "Plot ଏବଂ characters ସହ creative story writing", "Report writing", "Letter writing"], correctAnswer: 1, marks: 1, explanation: "ଗଳ୍ପ ରଚନା creative story writing ଅଟେ।" },
      { quiz: odiaQuiz3._id, questionText: "'ପ୍ରତିବେଦନ' ଲେଖନ କଣ?", options: ["Fiction", "ଘଟଣାର factual report", "କବିତା", "Diary"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତିବେଦନରେ 5W+1H ଥାଏ।" },
      { quiz: odiaQuiz3._id, questionText: "'ବିଚାର ଲେଖନ' କଣ?", options: ["ଗଳ୍ପ", "ବର୍ତ୍ତମାନ ସମସ୍ୟା ଉପରେ ବିଶ୍ଳେଷଣାତ୍ମକ ଲେଖନ", "କବିତା", "ଚିଠି"], correctAnswer: 1, marks: 1, explanation: "ବିଚାର ଲେଖନରେ current issues ଉପରେ analysis ଥାଏ।" },
    ]);

    console.log("✓ Class 11 Commerce - Odia: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceOdiaOdia;
