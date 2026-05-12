
// Full Odia translated Class 9 Hindi file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9HindiOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ବାକ୍ୟ ଭେଦ ଏବଂ ବାଚ୍ୟ
    const hindiQuiz1 = await Quiz.create({
      title: "ହିନ୍ଦୀ ବ୍ୟାକରଣ - ବାକ୍ୟ ଭେଦ ଏବଂ ବାଚ୍ୟ",
      subject: "Hindi",
      category: "ବ୍ୟାକରଣ",
      chapter: "ବାକ୍ୟ ଭେଦ",
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
      { quiz: hindiQuiz1._id, questionText: "ରଚନା ଆଧାରରେ ବାକ୍ୟ କେତେ ପ୍ରକାର?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "ସରଳ, ସଂଯୁକ୍ତ ଏବଂ ମିଶ୍ର — 3 ପ୍ରକାର।" },
      { quiz: hindiQuiz1._id, questionText: "'राम खाना खाता है और सोता है' କେଉଁ ପ୍ରକାରର ବାକ୍ୟ?", options: ["ସରଳ", "ସଂଯୁକ୍ତ", "ମିଶ୍ର", "ବିଧାନବାଚକ"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇ ସ୍ୱାଧୀନ ଉପବାକ୍ୟ ଯୋଡ଼ାଯାଇଥିବାରୁ ସଂଯୁକ୍ତ ବାକ୍ୟ।" },
      { quiz: hindiQuiz1._id, questionText: "କର୍ତୃବାଚ୍ୟରେ କ୍ରିୟା କାହା ଅନୁସାରେ ହୁଏ?", options: ["କର୍ମ", "କର୍ତ୍ତା", "ଭାବ", "କାଳ"], correctAnswer: 1, marks: 1, explanation: "କର୍ତୃବାଚ୍ୟରେ କ୍ରିୟା କର୍ତ୍ତା ଅନୁସାରେ ହୁଏ।" },
      { quiz: hindiQuiz1._id, questionText: "'जब वह आया, तब मैं गया' କେଉଁ ବାକ୍ୟ?", options: ["ସରଳ", "ସଂଯୁକ୍ତ", "ମିଶ୍ର", "ଆଜ୍ଞାବାଚକ"], correctAnswer: 2, marks: 1, explanation: "ଏକ ପ୍ରଧାନ ଏବଂ ଏକ ଆଶ୍ରିତ ଉପବାକ୍ୟ ଥିବାରୁ ମିଶ୍ର ବାକ୍ୟ।" },
      { quiz: hindiQuiz1._id, questionText: "କର୍ମବାଚ୍ୟରେ କ୍ରିୟା କାହା ଅନୁସାରେ ହୁଏ?", options: ["କର୍ତ୍ତା", "କର୍ମ", "ଭାବ", "ବିଶେଷଣ"], correctAnswer: 1, marks: 1, explanation: "କର୍ମବାଚ୍ୟରେ କ୍ରିୟା କର୍ମ ଅନୁସାରେ ହୁଏ।" },
      { quiz: hindiQuiz1._id, questionText: "'राम द्वारा पत्र लिखा गया' କେଉଁ ବାଚ୍ୟ?", options: ["କର୍ତୃବାଚ୍ୟ", "କର୍ମବାଚ୍ୟ", "ଭାବବାଚ୍ୟ", "ସରଳ ବାକ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "'द्वारा' ଏବଂ 'गया' ଦ୍ୱାରା କର୍ମବାଚ୍ୟ ଚିହ୍ନଟ ହୁଏ।" },
      { quiz: hindiQuiz1._id, questionText: "ଭାବବାଚ୍ୟରେ କାହାର ପ୍ରଧାନତା ଥାଏ?", options: ["କର୍ତ୍ତା", "କର୍ମ", "ଭାବ/କ୍ରିୟା", "ବିଶେଷଣ"], correctAnswer: 2, marks: 1, explanation: "ଭାବବାଚ୍ୟରେ ଭାବ କିମ୍ବା କ୍ରିୟା ପ୍ରଧାନ।" },
      { quiz: hindiQuiz1._id, questionText: "'मुझसे चला नहीं जाता' କେଉଁ ବାଚ୍ୟ?", options: ["କର୍ତୃବାଚ୍ୟ", "କର୍ମବାଚ୍ୟ", "ଭାବବାଚ୍ୟ", "ସଂଯୁକ୍ତ"], correctAnswer: 2, marks: 1, explanation: "ଏହା ଭାବବାଚ୍ୟର ଉଦାହରଣ।" },
      { quiz: hindiQuiz1._id, questionText: "ଅର୍ଥ ଆଧାରରେ ବାକ୍ୟ କେତେ ପ୍ରକାର?", options: ["4", "6", "8", "10"], correctAnswer: 2, marks: 1, explanation: "ଅର୍ଥ ଆଧାରରେ 8 ପ୍ରକାରର ବାକ୍ୟ ଅଛି।" },
      { quiz: hindiQuiz1._id, questionText: "'काश! मैं पक्षी होता' କେଉଁ ବାକ୍ୟ?", options: ["ଆଜ୍ଞାବାଚକ", "ଇଚ୍ଛାବାଚକ", "ବିସ୍ମୟବାଚକ", "ପ୍ରଶ୍ନବାଚକ"], correctAnswer: 1, marks: 1, explanation: "ଇଚ୍ଛା କିମ୍ବା କାମନା ବ୍ୟକ୍ତ କରୁଥିବାରୁ ଇଚ୍ଛାବାଚକ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ରସ ଏବଂ ଅଳଙ୍କାର
    const hindiQuiz2 = await Quiz.create({
      title: "ହିନ୍ଦୀ ସାହିତ୍ୟ - ରସ ଏବଂ ଅଳଙ୍କାର",
      subject: "Hindi",
      category: "ସାହିତ୍ୟ",
      chapter: "ରସ ଏବଂ ଅଳଙ୍କାର",
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
      { quiz: hindiQuiz2._id, questionText: "ରସର କେତେ ଅଂଶ ଅଛି?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "ସ୍ଥାୟୀ ଭାବ, ବିଭାବ, ଅନୁଭାବ, ସଞ୍ଚାରୀ ଭାବ — 4 ଅଂଶ।" },
      { quiz: hindiQuiz2._id, questionText: "ଶୃଙ୍ଗାର ରସର ସ୍ଥାୟୀ ଭାବ କଣ?", options: ["ରତି", "ହାସ", "ଶୋକ", "କ୍ରୋଧ"], correctAnswer: 0, marks: 1, explanation: "ଶୃଙ୍ଗାର ରସର ସ୍ଥାୟୀ ଭାବ ହେଉଛି ରତି।" },
      { quiz: hindiQuiz2._id, questionText: "ରୌଦ୍ର ରସର ସ୍ଥାୟୀ ଭାବ କଣ?", options: ["ଭୟ", "କ୍ରୋଧ", "ଉତ୍ସାହ", "ଶୋକ"], correctAnswer: 1, marks: 1, explanation: "ରୌଦ୍ର ରସର ସ୍ଥାୟୀ ଭାବ କ୍ରୋଧ।" },
      { quiz: hindiQuiz2._id, questionText: "'उत्प्रेक्षा' ଅଳଙ୍କାରର ପରିଚୟ କଣ?", options: ["जैसा, सा", "मानो, जनु, जानो", "ବର୍ଣ୍ଣ ପୁନରାବୃତ୍ତି", "ବିରୋଧ"], correctAnswer: 1, marks: 1, explanation: "'मानो' ପ୍ରଭୃତି ଶବ୍ଦ ଉତ୍ପ୍ରେକ୍ଷା ଅଳଙ୍କାରରେ ଥାଏ।" },
      { quiz: hindiQuiz2._id, questionText: "'यमक' ଅଳଙ୍କାରରେ କଣ ହୁଏ?", options: ["ଅର୍ଥର ପୁନରାବୃତ୍ତି", "ଏକ ଶବ୍ଦ ପୁନଃ ପୁନଃ ଆସେ କିନ୍ତୁ ଅର୍ଥ ଭିନ୍ନ", "ବର୍ଣ୍ଣ ପୁନରାବୃତ୍ତି", "ତୁଳନା"], correctAnswer: 1, marks: 1, explanation: "ଏକ ଶବ୍ଦ ବାରମ୍ବାର ଆସି ଭିନ୍ନ ଅର୍ଥ ଦେଏ।" },
      { quiz: hindiQuiz2._id, questionText: "'श्लेष' ଅଳଙ୍କାରରେ କଣ ହୁଏ?", options: ["ଏକ ଶବ୍ଦର ଅନେକ ଅର୍ଥ", "ଶବ୍ଦ ବାରମ୍ବାର ଆସେ", "ତୁଳନା", "ବିରୋଧ"], correctAnswer: 0, marks: 1, explanation: "ଏକ ଶବ୍ଦ ଏକଥର ଆସି ଅନେକ ଅର୍ଥ ଦେଏ।" },
      { quiz: hindiQuiz2._id, questionText: "ଅଦ୍ଭୁତ ରସର ସ୍ଥାୟୀ ଭାବ କଣ?", options: ["ଭୟ", "ବିସ୍ମୟ", "ଶୋକ", "ହାସ"], correctAnswer: 1, marks: 1, explanation: "ଅଦ୍ଭୁତ ରସର ସ୍ଥାୟୀ ଭାବ ବିସ୍ମୟ।" },
      { quiz: hindiQuiz2._id, questionText: "'मानवीकरण' ଅଳଙ୍କାରରେ କଣ ହୁଏ?", options: ["ମଣିଷକୁ ପଶୁ କରାଯାଏ", "ନିର୍ଜୀବକୁ ସଜୀବ ଗୁଣ ଦିଆଯାଏ", "ତୁଳନା", "ଅତିଶୟୋକ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ନିର୍ଜୀବ ବସ୍ତୁକୁ ମାନବୀୟ ଗୁଣ ଦିଆଯାଏ।" },
      { quiz: hindiQuiz2._id, questionText: "ଭୟାନକ ରସର ସ୍ଥାୟୀ ଭାବ କଣ?", options: ["କ୍ରୋଧ", "ଭୟ", "ଶୋକ", "ଘୃଣା"], correctAnswer: 1, marks: 1, explanation: "ଭୟାନକ ରସର ସ୍ଥାୟୀ ଭାବ ଭୟ।" },
      { quiz: hindiQuiz2._id, questionText: "'विभाव' କାହାକୁ କୁହାଯାଏ?", options: ["ରସ ଉତ୍ପନ୍ନ କରୁଥିବା କାରଣ", "ଶାରୀରିକ ଚେଷ୍ଟା", "ଅସ୍ଥାୟୀ ଭାବ", "ସ୍ଥାୟୀ ଭାବ"], correctAnswer: 0, marks: 1, explanation: "ଯେଉଁ କାରଣରୁ ରସ ଉତ୍ପନ୍ନ ହୁଏ ତାହା ବିଭାବ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ଅପଠିତ ଗଦ୍ୟାଂଶ ଏବଂ ଲେଖନ
    const hindiQuiz3 = await Quiz.create({
      title: "ହିନ୍ଦୀ ଲେଖନ - ଅପଠିତ ଗଦ୍ୟାଂଶ ଏବଂ ସୃଜନଶୀଳ ଲେଖନ",
      subject: "Hindi",
      category: "ଲେଖନ",
      chapter: "ଅପଠିତ ଏବଂ ସୃଜନଶୀଳ",
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
      { quiz: hindiQuiz3._id, questionText: "ଅପଠିତ ଗଦ୍ୟାଂଶରେ ପ୍ରଥମେ କଣ କରିବା ଉଚିତ?", options: ["ଉତ୍ତର ଲେଖିବା", "ଗଦ୍ୟାଂଶ ଭଲଭାବେ ପଢ଼ିବା", "ଶିରୋନାମ ଲେଖିବା", "ପ୍ରଶ୍ନ ପଢ଼ିବା"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରଥମେ ଗଦ୍ୟାଂଶକୁ ଧ୍ୟାନ ସହ ପଢ଼ିବା ଦରକାର।" },
      { quiz: hindiQuiz3._id, questionText: "ସମ୍ପାଦକଙ୍କୁ ପତ୍ର କେଉଁ ବିଷୟରେ ଲେଖାଯାଏ?", options: ["ବ୍ୟକ୍ତିଗତ ସମସ୍ୟା", "ସାର୍ବଜନୀନ ସମସ୍ୟା", "ପରିବାରୀକ କଥା", "ମିତ୍ରଙ୍କୁ ଅଭିନନ୍ଦନ"], correctAnswer: 1, marks: 1, explanation: "ସାର୍ବଜନୀନ ସମସ୍ୟା ବିଷୟରେ ସମ୍ପାଦକଙ୍କୁ ପତ୍ର ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ବିଜ୍ଞାପନ ଲେଖନରେ ସବୁଠୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କଣ?", options: ["ଲମ୍ବା ବର୍ଣ୍ଣନା", "ଆକର୍ଷକ ଶିରୋନାମ ଏବଂ slogan", "କଠିନ ଭାଷା", "କେବଳ ଚିତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ଆକର୍ଷକ ଶିରୋନାମ ଏବଂ slogan ଦରକାର।" },
      { quiz: hindiQuiz3._id, questionText: "ଲଘୁକଥା ଏବଂ କାହାଣୀର ମୁଖ୍ୟ ତଫାତ କଣ?", options: ["କୌଣସି ତଫାତ ନାହିଁ", "ଲଘୁକଥା ଛୋଟ ଏବଂ ଏକ ବିଷୟରେ କେନ୍ଦ୍ରିତ", "କାହାଣୀ ଛୋଟ", "ଲଘୁକଥା ଲମ୍ବା"], correctAnswer: 1, marks: 1, explanation: "ଲଘୁକଥା ଏକ ମୁଖ୍ୟ ବିଷୟ ଉପରେ କେନ୍ଦ୍ରିତ ଥାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ଅନୁଚ୍ଛେଦ ଲେଖନରେ କେତେ ଅନୁଚ୍ଛେଦ ଥାଏ?", options: ["ଏକ", "ଦୁଇ", "ତିନି", "ଚାରି"], correctAnswer: 0, marks: 1, explanation: "ଅନୁଚ୍ଛେଦ ଲେଖନ ଏକମାତ୍ର ଅନୁଚ୍ଛେଦରେ ହୁଏ।" },
      { quiz: hindiQuiz3._id, questionText: "E-mail ରେ Subject କାହିଁକି ଦରକାର?", options: ["ସୁନ୍ଦରତା ପାଇଁ", "ପତ୍ରର ଉଦ୍ଦେଶ୍ୟ ସ୍ପଷ୍ଟ କରିବାକୁ", "ନିୟମ ନୁହେଁ", "ଶବ୍ଦ ବଢ଼ାଇବାକୁ"], correctAnswer: 1, marks: 1, explanation: "Subject ଦ୍ୱାରା ପତ୍ରର ଉଦ୍ଦେଶ୍ୟ ସ୍ପଷ୍ଟ ହୁଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ସଂବାଦ ଲେଖନରେ କଣ ଧ୍ୟାନ ଦେବା ଉଚିତ?", options: ["ଲମ୍ବା ବାକ୍ୟ", "ସ୍ୱାଭାବିକତା ଏବଂ ସଂକ୍ଷିପ୍ତତା", "କେବଳ ପ୍ରଶ୍ନ", "କେବଳ ଔପଚାରିକ ଭାଷା"], correctAnswer: 1, marks: 1, explanation: "ସଂବାଦ ସ୍ୱାଭାବିକ ଏବଂ ସଂକ୍ଷିପ୍ତ ହେବା ଦରକାର।" },
      { quiz: hindiQuiz3._id, questionText: "ସୂଚନା ଲେଖନରେ କଣ ଆବଶ୍ୟକ?", options: ["କାହାଣୀ", "ଶିରୋନାମ, ତାରିଖ, ସମୟ, ସ୍ଥାନ", "କେବଳ ନାମ", "କେବଳ ସହି"], correctAnswer: 1, marks: 1, explanation: "ସୂଚନାରେ title, date, time, place ଆବଶ୍ୟକ।" },
      { quiz: hindiQuiz3._id, questionText: "ନିବନ୍ଧରେ 'ବିଷୟ-ବିସ୍ତାର' ର କାମ କଣ?", options: ["ବିଷୟ ଶେଷ କରିବା", "ବିଷୟକୁ ବିସ୍ତାରରେ ବୁଝେଇବା", "ନୂତନ ବିଷୟ ଆରମ୍ଭ", "ନିଷ୍କର୍ଷ ଦେବା"], correctAnswer: 1, marks: 1, explanation: "ବିଷୟକୁ ଉଦାହରଣ ସହ ବିସ୍ତାରରେ ବୁଝାଯାଏ।" },
      { quiz: hindiQuiz3._id, questionText: "ଅପଠିତ କାବ୍ୟାଂଶରେ କଣ ଧ୍ୟାନ ଦେବା ଉଚିତ?", options: ["କେବଳ ଶବ୍ଦାର୍ଥ", "ଭାବ, ଅଳଙ୍କାର, ରସ ଏବଂ ସନ୍ଦେଶ", "କେବଳ ତୁକ", "କେବଳ ଛନ୍ଦ"], correctAnswer: 1, marks: 1, explanation: "ଭାବ, ଅଳଙ୍କାର ଏବଂ ସନ୍ଦେଶ ବୁଝିବା ଦରକାର।" },
    ]);

    console.log("✓ Class 9 - Hindi: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9HindiOdia;
