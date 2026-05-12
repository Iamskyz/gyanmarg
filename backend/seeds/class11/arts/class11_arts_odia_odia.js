import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsOdiaOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ସାହିତ୍ୟ - ଗଦ୍ୟ",
      subject: "Odia",
      category: "Literature",
      chapter: "ଗଦ୍ୟ",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ 'ବ୍ୟାସ କବି' କାହାକୁ କୁହାଯାଏ?", options: ["ସାରଳା ଦାସ", "ଫକୀର ମୋହନ ସେନାପତି", "ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର"], correctAnswer: 0, marks: 1, explanation: "ସାରଳା ଦାସ ଓଡ଼ିଆ ମହାଭାରତ ଲେଖିଥିବାରୁ 'ବ୍ୟାସ କବି' ଭାବେ ପରିଚିତ।" },
      { quiz: quiz1._id, questionText: "'ଛ ମଣ ଆଠ ଗୁଣ୍ଠ' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ଫକୀର ମୋହନ ସେନାପତି", "କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ", "ମନୋଜ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଫକୀର ମୋହନ ସେନାପତି ଜମି ଶୋଷଣ ଉପରେ ଏହି ଉପନ୍ୟାସ ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ଫକୀର ମୋହନ ସେନାପତିଙ୍କୁ କଣ କୁହାଯାଏ?", options: ["କବି ସମ୍ରାଟ", "ଆଧୁନିକ ଓଡ଼ିଆ ସାହିତ୍ୟର ଜନକ", "ବ୍ୟାସ କବି", "ରସ କବି"], correctAnswer: 1, marks: 1, explanation: "ଫକୀର ମୋହନ ସେନାପତିଙ୍କୁ ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟର ଜନକ କୁହାଯାଏ।" },
      { quiz: quiz1._id, questionText: "ପ୍ରଥମ ଓଡ଼ିଆ ଉପନ୍ୟାସ କେଉଁଟି?", options: ["ଛ ମଣ ଆଠ ଗୁଣ୍ଠ", "ଲଛମା", "ସୌଦାମିନୀ", "ମାମୁ"], correctAnswer: 2, marks: 1, explanation: "ରାମଶଙ୍କର ରାୟଙ୍କ 'ସୌଦାମିନୀ' ପ୍ରଥମ ଓଡ଼ିଆ ଉପନ୍ୟାସ ଭାବେ ପରିଚିତ।" },
      { quiz: quiz1._id, questionText: "'ପରଜା' କିଏ ଲେଖିଥିଲେ?", options: ["ଫକୀର ମୋହନ ସେନାପତି", "ଗୋପୀନାଥ ମହାନ୍ତି", "ମନୋଜ ଦାସ", "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ଗୋପୀନାଥ ମହାନ୍ତି ଓଡ଼ିଶାର ଆଦିବାସୀ ଜୀବନ ଉପରେ 'ପରଜା' ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'ଉତ୍କଳ ଦୀପିକା' ଓଡ଼ିଆର ପ୍ରଥମ କଣ ଥିଲା?", options: ["ଉପନ୍ୟାସ", "ସମ୍ବାଦପତ୍ର", "କବିତା ସଂଗ୍ରହ", "ନାଟକ"], correctAnswer: 1, marks: 1, explanation: "'ଉତ୍କଳ ଦୀପିକା' ପ୍ରଥମ ଓଡ଼ିଆ ସମ୍ବାଦପତ୍ର ଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ଭାଷା କେବେ classical language ମର୍ଯ୍ୟାଦା ପାଇଲା?", options: ["2010", "2014", "2016", "2018"], correctAnswer: 1, marks: 1, explanation: "2014ରେ ଓଡ଼ିଆକୁ classical language ଘୋଷଣା କରାଯାଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ 'କବି ସମ୍ରାଟ' କିଏ?", options: ["ରାଧାନାଥ ରାୟ", "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ", "ଗଙ୍ଗାଧର ମେହେର", "ମଧୁସୂଦନ ରାଓ"], correctAnswer: 1, marks: 1, explanation: "ଉପେନ୍ଦ୍ର ଭଞ୍ଜଙ୍କୁ 'କବି ସମ୍ରାଟ' କୁହାଯାଏ।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ଛୋଟ ଗଳ୍ପର ପ୍ରବର୍ତ୍ତକ କିଏ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ଫକୀର ମୋହନ ସେନାପତି", "ଗୋଦାବରୀଶ ମିଶ୍ର", "କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ"], correctAnswer: 1, marks: 1, explanation: "ଫକୀର ମୋହନ ସେନାପତି ଓଡ଼ିଆ ଛୋଟ ଗଳ୍ପର ପ୍ରବର୍ତ୍ତକ।" },
      { quiz: quiz1._id, questionText: "'ମାଟିର ମଣିଷ' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ", "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି", "ମନୋଜ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "'ମାଟିର ମଣିଷ' ଗ୍ରାମୀଣ ଓଡ଼ିଶା ଜୀବନ ଉପରେ ଆଧାରିତ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଓଡ଼ିଆ ସାହିତ୍ୟ - କବିତା",
      subject: "Odia",
      category: "Literature",
      chapter: "କବିତା",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "'କେଦାର ଗୌରୀ' କିଏ ଲେଖିଥିଲେ?", options: ["ରାଧାନାଥ ରାୟ", "ମଧୁସୂଦନ ରାଓ", "ଗଙ୍ଗାଧର ମେହେର", "ନନ୍ଦକିଶୋର ବଳ"], correctAnswer: 2, marks: 1, explanation: "ଗଙ୍ଗାଧର ମେହେର 'କେଦାର ଗୌରୀ' ଲେଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ରାଧାନାଥ ରାୟ କେଉଁ ପ୍ରକାର କବିତା ପାଇଁ ପ୍ରସିଦ୍ଧ?", options: ["ଭକ୍ତିମୟ", "ପ୍ରକୃତି ଏବଂ ବର୍ଣ୍ଣନାତ୍ମକ କବିତା", "ରାଜନୈତିକ", "ବ୍ୟଙ୍ଗାତ୍ମକ"], correctAnswer: 1, marks: 1, explanation: "ରାଧାନାଥ ରାୟ ପ୍ରକୃତି କବିତା ପାଇଁ ପ୍ରସିଦ୍ଧ।" },
      { quiz: quiz2._id, questionText: "'ଚିଲିକା' କବିତା କିଏ ଲେଖିଥିଲେ?", options: ["ଗଙ୍ଗାଧର ମେହେର", "ରାଧାନାଥ ରାୟ", "ମଧୁସୂଦନ ରାଓ", "ଗୋପବନ୍ଧୁ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ରାଧାନାଥ ରାୟ ଚିଲିକା ହ୍ରଦ ଉପରେ ଏହି କବିତା ଲେଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'ସ୍ୱଭାବ କବି' କାହାକୁ କୁହାଯାଏ?", options: ["ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର", "ଗୋପବନ୍ଧୁ ଦାସ", "ମଧୁସୂଦନ ରାଓ"], correctAnswer: 1, marks: 1, explanation: "ଗଙ୍ଗାଧର ମେହେରଙ୍କୁ 'ସ୍ୱଭାବ କବି' କୁହାଯାଏ।" },
      { quiz: quiz2._id, questionText: "'ପଞ୍ଚସଖା' କବିମାନେ କେଉଁ ଶତାବ୍ଦୀର?", options: ["13-14", "15-16", "17-18", "19-20"], correctAnswer: 1, marks: 1, explanation: "ପଞ୍ଚସଖା କବିମାନେ 15-16 ଶତାବ୍ଦୀରେ ଥିଲେ।" },
      { quiz: quiz2._id, questionText: "କେଉଁଜଣ ପଞ୍ଚସଖା କବି ନୁହେଁ?", options: ["ଅଚ୍ୟୁତାନନ୍ଦ ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ସାରଳା ଦାସ", "ବଳରାମ ଦାସ"], correctAnswer: 2, marks: 1, explanation: "ସାରଳା ଦାସ ପଞ୍ଚସଖା ଯୁଗ ପୂର୍ବରୁ ଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'ଭାଗବତ' କିଏ ଲେଖିଥିଲେ?", options: ["ସାରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ଅଚ୍ୟୁତାନନ୍ଦ ଦାସ", "ବଳରାମ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଜଗନ୍ନାଥ ଦାସ ଓଡ଼ିଆ ଭାଗବତ ଲେଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ଗୋପବନ୍ଧୁ ଦାସଙ୍କୁ କଣ କୁହାଯାଏ?", options: ["କବି ସମ୍ରାଟ", "ଉତ୍କଳମଣି", "ବ୍ୟାସ କବି", "ରସ କବି"], correctAnswer: 1, marks: 1, explanation: "ଗୋପବନ୍ଧୁ ଦାସଙ୍କୁ 'ଉତ୍କଳମଣି' କୁହାଯାଏ।" },
      { quiz: quiz2._id, questionText: "'ବନଫୁଲ' କବିତା କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପବନ୍ଧୁ ଦାସ", "ସଚ୍ଚି ରାଉତରାୟ", "ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର"], correctAnswer: 0, marks: 1, explanation: "'ବନଫୁଲ' ଗୋପବନ୍ଧୁ ଦାସଙ୍କ ଲେଖା।" },
      { quiz: quiz2._id, questionText: "ସଚ୍ଚି ରାଉତରାୟ କେଉଁ କ୍ଷେତ୍ରରେ ଜ୍ଞାନପୀଠ ପୁରସ୍କାର ପାଇଥିଲେ?", options: ["ଉପନ୍ୟାସ", "କବିତା", "ନାଟକ", "ଛୋଟ ଗଳ୍ପ"], correctAnswer: 1, marks: 1, explanation: "ସଚ୍ଚି ରାଉତରାୟ କବିତା ପାଇଁ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ ଏବଂ ରଚନା",
      subject: "Odia",
      category: "Grammar",
      chapter: "ବ୍ୟାକରଣ ଏବଂ ରଚନା",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆ ଲିପିରେ କେତେଟି ସ୍ୱର ଅଛି?", options: ["10", "12", "14", "16"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆ ଲିପିରେ 14ଟି ସ୍ୱର ଅଛି।" },
      { quiz: quiz3._id, questionText: "'ସନ୍ଧି' ର ଅର୍ଥ କଣ?", options: ["ଶବ୍ଦ ବିଚ୍ଛେଦ", "ଦୁଇ ଧ୍ୱନି କିମ୍ବା ଶବ୍ଦର ମିଳନ", "ବହୁବଚନ", "କ୍ରିୟାର ରୂପ"], correctAnswer: 1, marks: 1, explanation: "ସନ୍ଧି ମାନେ ଦୁଇ ଧ୍ୱନି କିମ୍ବା ଶବ୍ଦର ମିଳନ।" },
      { quiz: quiz3._id, questionText: "'ସମାସ' କାହାକୁ କୁହାଯାଏ?", options: ["କ୍ରିୟାର ରୂପ", "ଯୁକ୍ତ ଶବ୍ଦ", "ବାକ୍ୟ ପ୍ରକାର", "ବିରାମଚିହ୍ନ"], correctAnswer: 1, marks: 1, explanation: "ସମାସ ମାନେ ଦୁଇ କିମ୍ବା ଅଧିକ ଶବ୍ଦକୁ ଯୋଡ଼ି ନୂତନ ଶବ୍ଦ ତିଆରି।" },
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆରେ କେତେଟି ବ୍ୟଞ୍ଜନ ଅଛି?", options: ["25", "33", "36", "40"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆରେ 36ଟି ବ୍ୟଞ୍ଜନ ଅଛି।" },
      { quiz: quiz3._id, questionText: "'ଅଳଙ୍କାର' ର ଅର୍ଥ କଣ?", options: ["ସଜାଣ", "ସାହିତ୍ୟର ଶୈଳୀଗତ ଅଳଙ୍କାର", "ବ୍ୟାକରଣ ନିୟମ", "ବିରାମଚିହ୍ନ"], correctAnswer: 1, marks: 1, explanation: "ଅଳଙ୍କାର ସାହିତ୍ୟକୁ ସୁନ୍ଦର କରେ।" },
      { quiz: quiz3._id, questionText: "'ଉପମା' ଅଳଙ୍କାର କେଉଁଟି ସହ ସମାନ?", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "ଉପମା ମାନେ Simile।" },
      { quiz: quiz3._id, questionText: "'ରୂପକ' ଅଳଙ୍କାର କେଉଁଟି ସହ ସମାନ?", options: ["Simile", "Metaphor", "Alliteration", "Irony"], correctAnswer: 1, marks: 1, explanation: "ରୂପକ ମାନେ Metaphor।" },
      { quiz: quiz3._id, questionText: "'ପ୍ରବନ୍ଧ' କାହାକୁ କୁହାଯାଏ?", options: ["କବିତା", "ନିବନ୍ଧ", "ଉପନ୍ୟାସ", "ନାଟକ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରବନ୍ଧ ମାନେ ନିବନ୍ଧ।" },
      { quiz: quiz3._id, questionText: "'କାରକ' ର ଅର୍ଥ କଣ?", options: ["କାଳ", "ନାମପଦର କ୍ରିୟା ସହ ସମ୍ପର୍କ", "ଲିଙ୍ଗ", "ବଚନ"], correctAnswer: 1, marks: 1, explanation: "କାରକ ନାମପଦ ଏବଂ କ୍ରିୟାର ସମ୍ପର୍କ ଦର୍ଶାଏ।" },
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆ ଲିପି କେଉଁ ପ୍ରାଚୀନ ଲିପିରୁ ବିକଶିତ?", options: ["ଦେବନାଗରୀ", "ବ୍ରାହ୍ମୀ", "ଖରୋଷ୍ଠୀ", "ତାମିଳ"], correctAnswer: 1, marks: 1, explanation: "ଓଡ଼ିଆ ଲିପି ବ୍ରାହ୍ମୀ ଲିପିରୁ ବିକଶିତ।" },
    ]);

    console.log("✓ Class 11 Arts - Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsOdiaOdia };
