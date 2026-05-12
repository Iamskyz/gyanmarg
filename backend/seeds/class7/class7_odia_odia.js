import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7OdiaOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Grammar
    const odiaQuiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ - କ୍ରିୟା ଓ ବାକ୍ୟ",
      subject: "Odia",
      category: "Grammar",
      chapter: "କ୍ରିୟା ଓ ବାକ୍ୟ",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆରେ କ୍ରିୟା ପଦ କାହାକୁ କୁହାଯାଏ?", options: ["ବିଶେଷ୍ୟ", "କ୍ରିୟା", "ବିଶେଷଣ", "କ୍ରିୟାବିଶେଷଣ"], correctAnswer: 1, marks: 1, explanation: "କ୍ରିୟା ପଦ କାର୍ଯ୍ୟକୁ ବୁଝାଏ।" },

      { quiz: odiaQuiz1._id, questionText: "ବାକ୍ୟ କାହାକୁ କୁହାଯାଏ?", options: ["ଶବ୍ଦ", "ଅକ୍ଷର", "ବାକ୍ୟ", "ଅନୁଛେଦ"], correctAnswer: 2, marks: 1, explanation: "ବାକ୍ୟ ହେଉଛି ସମ୍ପୂର୍ଣ୍ଣ ଅର୍ଥ ଦେଇଥିବା ଶବ୍ଦ ସମୂହ।" },

      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆରେ କେତେ ପ୍ରକାରର ବାକ୍ୟ ଅଛି?", options: ["2", "3", "4", "5"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆରେ 4 ପ୍ରକାରର ବାକ୍ୟ ଅଛି।" },

      { quiz: odiaQuiz1._id, questionText: "ବିଶେଷଣ କାହାକୁ କୁହାଯାଏ?", options: ["ବିଶେଷ୍ୟ", "କ୍ରିୟା", "ବିଶେଷଣ", "ସର୍ବନାମ"], correctAnswer: 2, marks: 1, explanation: "ବିଶେଷଣ ବିଶେଷ୍ୟକୁ ବର୍ଣ୍ଣନା କରେ।" },

      { quiz: odiaQuiz1._id, questionText: "ସନ୍ଧି କାହାକୁ କୁହାଯାଏ?", options: ["ଶବ୍ଦ ବିଭାଜନ", "ଦୁଇ ଧ୍ୱନିର ଯୋଗ", "ବହୁବଚନ", "କାଳ ପରିବର୍ତ୍ତନ"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇ ଧ୍ୱନିର ଯୋଗକୁ ସନ୍ଧି କୁହାଯାଏ।" },

      { quiz: odiaQuiz1._id, questionText: "କର୍ତ୍ତା କାହାକୁ କୁହାଯାଏ?", options: ["କର୍ମ", "କର୍ତ୍ତା", "କ୍ରିୟା", "ବିଶେଷଣ"], correctAnswer: 1, marks: 1, explanation: "ଯିଏ କାମ କରେ ସେ କର୍ତ୍ତା।" },

      { quiz: odiaQuiz1._id, questionText: "କର୍ମ କାହାକୁ କୁହାଯାଏ?", options: ["କର୍ତ୍ତା", "କର୍ମ", "କ୍ରିୟା", "କ୍ରିୟାବିଶେଷଣ"], correctAnswer: 1, marks: 1, explanation: "ଯାହା ଉପରେ କାର୍ଯ୍ୟ ହୁଏ ସେ କର୍ମ।" },

      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆର ସଠିକ ବାକ୍ୟ କ୍ରମ କଣ?", options: ["କର୍ତ୍ତା-କ୍ରିୟା-କର୍ମ", "କର୍ତ୍ତା-କର୍ମ-କ୍ରିୟା", "କ୍ରିୟା-କର୍ତ୍ତା-କର୍ମ", "କର୍ମ-କର୍ତ୍ତା-କ୍ରିୟା"], correctAnswer: 1, marks: 1, explanation: "ଓଡ଼ିଆରେ SOV କ୍ରମ ବ୍ୟବହୃତ ହୁଏ।" },

      { quiz: odiaQuiz1._id, questionText: "ବିଭକ୍ତି କାହାକୁ କୁହାଯାଏ?", options: ["ଉପସର୍ଗ", "ବିଭକ୍ତି", "ପ୍ରତ୍ୟୟ", "ସଂଯୋଜକ"], correctAnswer: 1, marks: 1, explanation: "ବିଭକ୍ତି ଶବ୍ଦର ସମ୍ପର୍କ ଦର୍ଶାଏ।" },

      { quiz: odiaQuiz1._id, questionText: "ଓଡ଼ିଆରେ କେତୋଟି ବିଭକ୍ତି ଅଛି?", options: ["5", "6", "7", "8"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆରେ 7ଟି ବିଭକ୍ତି ଅଛି।" },
    ]);

    // Subcategory 2: Literature
    const odiaQuiz2 = await Quiz.create({
      title: "ଓଡ଼ିଆ ସାହିତ୍ୟ - କବି ଓ କୃତି",
      subject: "Odia",
      category: "Literature",
      chapter: "କବି ଓ କୃତି",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz2._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ ବ୍ୟାସ କବି କିଏ?", options: ["ଫକୀର ମୋହନ", "ସାରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ"], correctAnswer: 1, marks: 1, explanation: "ସାରଳା ଦାସଙ୍କୁ ବ୍ୟାସ କବି କୁହାଯାଏ।" },

{ quiz: odiaQuiz2._id, questionText: "ବନ୍ଦୀର ଆତ୍ମକଥା କିଏ ଲେଖିଥିଲେ?", options: ["ଫକୀର ମୋହନ", "ଗୋପବନ୍ଧୁ ଦାସ", "ରାଧାନାଥ ରାୟ", "ମଧୁସୂଦନ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଗୋପବନ୍ଧୁ ଦାସ ଏହା ଲେଖିଥିଲେ।" },

{ quiz: odiaQuiz2._id, questionText: "ଉତ୍କଳମଣି କିଏ?", options: ["ଫକୀର ମୋହନ", "ଗୋପବନ୍ଧୁ ଦାସ", "ମଧୁସୂଦନ ରାଓ", "ରାଧାନାଥ ରାୟ"], correctAnswer: 1, marks: 1, explanation: "ଗୋପବନ୍ଧୁ ଦାସଙ୍କୁ ଉତ୍କଳମଣି କୁହାଯାଏ।" },

{ quiz: odiaQuiz2._id, questionText: "ଲଛମା ଉପନ୍ୟାସ କିଏ ଲେଖିଥିଲେ?", options: ["ଫକୀର ମୋହନ", "କାଳିନ୍ଦୀ ଚରଣ", "ଗୋପୀନାଥ ମହାନ୍ତି", "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି"], correctAnswer: 0, marks: 1, explanation: "ଫକୀର ମୋହନ ଏହା ଲେଖିଥିଲେ।" },

{ quiz: odiaQuiz2._id, questionText: "ଚମ୍ପୁ କାହାକୁ କୁହାଯାଏ?", options: ["କେବଳ କବିତା", "କେବଳ ଗଦ୍ୟ", "ଗଦ୍ୟ ଓ ପଦ୍ୟର ମିଶ୍ରଣ", "ନାଟକ"], correctAnswer: 2, marks: 1, explanation: "ଚମ୍ପୁ ଗଦ୍ୟ ଓ ପଦ୍ୟର ମିଶ୍ର ରୂପ।" },

{ quiz: odiaQuiz2._id, questionText: "କବି ସମ୍ରାଟ କିଏ?", options: ["ରାଧାନାଥ ରାୟ", "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ", "ଗଙ୍ଗାଧର ମେହେର", "ଗୋପବନ୍ଧୁ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଉପେନ୍ଦ୍ର ଭଞ୍ଜଙ୍କୁ କବି ସମ୍ରାଟ କୁହାଯାଏ।" },

{ quiz: odiaQuiz2._id, questionText: "ପଞ୍ଚସଖା କାହାକୁ କୁହାଯାଏ?", options: ["ପାଞ୍ଚ ନଦୀ", "ଭକ୍ତି ଯୁଗର ପାଞ୍ଚ କବି", "ପାଞ୍ଚ ପୁସ୍ତକ", "ପାଞ୍ଚ ଭାଷା"], correctAnswer: 1, marks: 1, explanation: "ପଞ୍ଚସଖା ଭକ୍ତି ଯୁଗର କବିମାନେ।" },

{ quiz: odiaQuiz2._id, questionText: "କିଏ ପଞ୍ଚସଖା କବି ନୁହେଁ?", options: ["ବଳରାମ ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ଅଚ୍ୟୁତାନନ୍ଦ ଦାସ", "ଫକୀର ମୋହନ"], correctAnswer: 3, marks: 1, explanation: "ଫକୀର ମୋହନ ପଞ୍ଚସଖା କବି ନୁହେଁ।" },

{ quiz: odiaQuiz2._id, questionText: "ଉତ୍କଳ ଦିବସ କାହିଁକି ପାଳନ କରାଯାଏ?", options: ["ସ୍ୱାଧୀନତା", "ଓଡ଼ିଶା ଗଠନ", "ନବବର୍ଷ", "ଫସଲ ପର୍ବ"], correctAnswer: 1, marks: 1, explanation: "ଓଡ଼ିଶା ଗଠନ ପାଇଁ ପାଳନ କରାଯାଏ।" },

{ quiz: odiaQuiz2._id, questionText: "ପଦ୍ମ ପୁରାଣ କିଏ ଲେଖିଥିଲେ?", options: ["ସାରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ବଳରାମ ଦାସ", "ଅଚ୍ୟୁତାନନ୍ଦ"], correctAnswer: 2, marks: 1, explanation: "ବଳରାମ ଦାସ ଏହା ଲେଖିଥିଲେ।" },
    ]);

     // Subcategory 3: Writing
    const odiaQuiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ଲେଖନ - ରଚନା ଓ ପତ୍ର",
      subject: "Odia",
      category: "Writing",
      chapter: "ସୃଜନଶୀଳ ଲେଖନ",
      grade: 7,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 20,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([

        { quiz: odiaQuiz3._id, questionText: "ରଚନା କାହାକୁ କୁହାଯାଏ?", options: ["ପତ୍ର", "ନିବନ୍ଧ", "ଗଳ୍ପ", "କବିତା"], correctAnswer: 1, marks: 1, explanation: "ରଚନା ଅର୍ଥ ନିବନ୍ଧ କିମ୍ବା composition।" },

{ quiz: odiaQuiz3._id, questionText: "ଓଡ଼ିଆ ରଚନାର କେତୋଟି ଅଂଶ ଥାଏ?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "ରଚନାର 3ଟି ଅଂଶ ଥାଏ।" },

{ quiz: odiaQuiz3._id, questionText: "ଆବେଦନ ପତ୍ର କାହାକୁ କୁହାଯାଏ?", options: ["ଅନୌପଚାରିକ ପତ୍ର", "ଆବେଦନ ପତ୍ର", "ପ୍ରେମ ପତ୍ର", "ନିମନ୍ତ୍ରଣ"], correctAnswer: 1, marks: 1, explanation: "ଆବେଦନ ପତ୍ର ଏକ ଔପଚାରିକ ପତ୍ର।" },

{ quiz: odiaQuiz3._id, questionText: "ଔପଚାରିକ ପତ୍ରରେ ପ୍ରଥମେ କଣ ଲେଖାଯାଏ?", options: ["ମୂଳ ବିଷୟ", "ବିଷୟ", "ତାରିଖ ଓ ଠିକଣା", "ସହି"], correctAnswer: 2, marks: 1, explanation: "ପ୍ରଥମେ ତାରିଖ ଓ ଠିକଣା ଲେଖାଯାଏ।" },

{ quiz: odiaQuiz3._id, questionText: "ସମ୍ପାଦକଙ୍କୁ ପତ୍ର କାହାକୁ କୁହାଯାଏ?", options: ["ମିତ୍ରଙ୍କୁ ପତ୍ର", "ସମ୍ପାଦକଙ୍କୁ ପତ୍ର", "ଶିକ୍ଷକଙ୍କୁ ପତ୍ର", "ବାପାଙ୍କୁ ପତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ଏହା ସମ୍ବାଦପତ୍ର ସମ୍ପାଦକଙ୍କୁ ଲେଖାଯାଏ।" },

{ quiz: odiaQuiz3._id, questionText: "ସୂଚନା ଲେଖନରେ କଣ ଦରକାର?", options: ["କେବଳ ତାରିଖ", "କଣ, କେବେ, କେଉଁଠି, କିଏ", "କେବଳ ନାମ", "କେବଳ ସ୍ଥାନ"], correctAnswer: 1, marks: 1, explanation: "ସୂଚନାରେ ସମସ୍ତ ତଥ୍ୟ ସ୍ପଷ୍ଟ ହେବା ଦରକାର।" },

{ quiz: odiaQuiz3._id, questionText: "ଗଳ୍ପ ଲେଖନ କାହାକୁ କୁହାଯାଏ?", options: ["ନିବନ୍ଧ ଲେଖନ", "ଗଳ୍ପ ଲେଖନ", "ପତ୍ର ଲେଖନ", "କବିତା ଲେଖନ"], correctAnswer: 1, marks: 1, explanation: "ଗଳ୍ପ ଲେଖନ ଅର୍ଥ କାହାଣୀ ଲେଖିବା।" },

{ quiz: odiaQuiz3._id, questionText: "ଏକ ଭଲ ଅନୁଛେଦର ଗୁଣ କଣ?", options: ["ବହୁ ବିଷୟ", "ଗୋଟିଏ ମୁଖ୍ୟ ଧାରଣା", "ଗୋଟିଏ ବାକ୍ୟ", "ଚିହ୍ନ ବିନା"], correctAnswer: 1, marks: 1, explanation: "ଭଲ ଅନୁଛେଦରେ ଗୋଟିଏ ମୁଖ୍ୟ ଧାରଣା ଥାଏ।" },

{ quiz: odiaQuiz3._id, questionText: "ସଂବାଦ ଲେଖନ କାହାକୁ କୁହାଯାଏ?", options: ["ସମ୍ବାଦ ଲେଖନ", "ସଂଳାପ ଲେଖନ", "ରଚନା ଲେଖନ", "ଗଳ୍ପ ଲେଖନ"], correctAnswer: 1, marks: 1, explanation: "ଦୁଇ କିମ୍ବା ଅଧିକ ଲୋକଙ୍କ ଆଲୋଚନାକୁ ସଂବାଦ କୁହାଯାଏ।" },

{ quiz: odiaQuiz3._id, questionText: "ଔପଚାରିକ ପତ୍ରର ଶେଷରେ କଣ ଲେଖାଯାଏ?", options: ["ତୁମର ମିତ୍ର", "ଇତି ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ", "ବାଇ", "ହେଲୋ"], correctAnswer: 1, marks: 1, explanation: "'ଇତି ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ' ଔପଚାରିକ ପତ୍ରରେ ବ୍ୟବହୃତ ହୁଏ।" },

    ]);

    console.log("✓ Class 7 - Odia (Odia): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7OdiaOdia;
