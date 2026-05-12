import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceOdiaOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ଗଦ୍ୟ - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Literature",
      chapter: "ଗଦ୍ୟ",
      grade: 12,
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
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ 'ବ୍ୟାସକବି' କିଏ?", options: ["ସାରଳା ଦାସ", "ଫକୀର ମୋହନ ସେନାପତି", "ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର"], correctAnswer: 0, marks: 1, explanation: "ସାରଳା ଦାସ 15ମ ଶତାବ୍ଦୀରେ ଓଡ଼ିଆ ମହାଭାରତ ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ଗୋପୀନାଥ ମହାନ୍ତିଙ୍କ ଜ୍ଞାନପୀଠ ପୁରସ୍କୃତ କୃତି କ’ଣ?", options: ["ପରଜା", "ମାଟି ମଟାଲା", "ଛ ମଣ ଆଠ ଗୁଣ୍ଠ", "ଅମୃତର ସନ୍ତାନ"], correctAnswer: 1, marks: 1, explanation: "ସେ 1973 ମସିହାରେ 'ମାଟି ମଟାଲା' ପାଇଁ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'ଯଜ୍ଞସେନୀ' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ପ୍ରତିଭା ରାୟ", "ମନୋଜ ଦାସ", "ଫକୀର ମୋହନ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତିଭା ରାୟ ଦ୍ରୌପଦୀଙ୍କ ଦୃଷ୍ଟିକୋଣରୁ 'ଯଜ୍ଞସେନୀ' ଲେଖିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ପ୍ରଥମ ଓଡ଼ିଆ ସମ୍ବାଦପତ୍ର କ’ଣ ଥିଲା?", options: ["ସମାଜ", "ଉତ୍କଳ ଦୀପିକା", "ପ୍ରଜାତନ୍ତ୍ର", "ଧରିତ୍ରୀ"], correctAnswer: 1, marks: 1, explanation: "'ଉତ୍କଳ ଦୀପିକା' (1866) ପ୍ରଥମ ଓଡ଼ିଆ ସମ୍ବାଦପତ୍ର ଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଫକୀର ମୋହନ ସେନାପତିଙ୍କୁ କ’ଣ କୁହାଯାଏ?", options: ["କବି ସମ୍ରାଟ", "ଆଧୁନିକ ଓଡ଼ିଆ ସାହିତ୍ୟର ଜନକ", "ଉତ୍କଳମଣି", "ସ୍ୱଭାବ କବି"], correctAnswer: 1, marks: 1, explanation: "ସେ ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟ ଏବଂ ଉପନ୍ୟାସର ପ୍ରବର୍ତ୍ତକ।" },
      { quiz: quiz1._id, questionText: "'ଛ ମଣ ଆଠ ଗୁଣ୍ଠ' କ’ଣ ଉପରେ ଆଧାରିତ?", options: ["ପ୍ରେମ କାହାଣୀ", "ଗରିବ ଚାଷୀଙ୍କ ଜମି ଶୋଷଣ", "ଯୁଦ୍ଧ", "ଭ୍ରମଣ"], correctAnswer: 1, marks: 1, explanation: "ଏହି ଉପନ୍ୟାସରେ ଜମିଦାରମାନଙ୍କ ଶୋଷଣ ଦର୍ଶାଯାଇଛି।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ଭାଷା କେବେ Classical Language ମାନ୍ୟତା ପାଇଲା?", options: ["2010", "2014", "2016", "2018"], correctAnswer: 1, marks: 1, explanation: "2014 ମସିହାରେ ଓଡ଼ିଆକୁ Classical Language ଘୋଷଣା କରାଯାଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟର 'କବି ସମ୍ରାଟ' କିଏ?", options: ["ରାଧାନାଥ ରାୟ", "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ", "ଗଙ୍ଗାଧର ମେହେର", "ଗୋପବନ୍ଧୁ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଉପେନ୍ଦ୍ର ଭଞ୍ଜଙ୍କୁ 'କବି ସମ୍ରାଟ' କୁହାଯାଏ।" },
      { quiz: quiz1._id, questionText: "ମନୋଜ ଦାସ କେଉଁ ଭାଷାରେ ଲେଖନ୍ତି?", options: ["କେବଳ ଓଡ଼ିଆ", "ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ", "କେବଳ ଇଂରାଜୀ", "ହିନ୍ଦୀ"], correctAnswer: 1, marks: 1, explanation: "ମନୋଜ ଦାସ ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ ଉଭୟରେ ଲେଖନ୍ତି।" },
      { quiz: quiz1._id, questionText: "ପଞ୍ଚସଖା ଯୁଗ କେଉଁ ସମୟର?", options: ["13ମ ଶତାବ୍ଦୀ", "15ମ-16ମ ଶତାବ୍ଦୀ", "18ମ ଶତାବ୍ଦୀ", "20ମ ଶତାବ୍ଦୀ"], correctAnswer: 1, marks: 1, explanation: "ପଞ୍ଚସଖା କବିମାନେ 15ମ-16ମ ଶତାବ୍ଦୀରେ ଥିଲେ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଓଡ଼ିଆ କବିତା - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Literature",
      chapter: "କବିତା",
      grade: 12,
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
      { quiz: quiz2._id, questionText: "ସଚ୍ଚି ରାଉତରାୟ କେବେ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ?", options: ["1980", "1986", "1990", "2000"], correctAnswer: 1, marks: 1, explanation: "ସଚ୍ଚି ରାଉତରାୟ 1986 ରେ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ସୀତାକାନ୍ତ ମହାପାତ୍ରଙ୍କ କବିତା କାହା ପାଇଁ ପ୍ରସିଦ୍ଧ?", options: ["କେବଳ ହାସ୍ୟ", "ଆଦିବାସୀ ଜୀବନ ଏବଂ ଦାର୍ଶନିକତା", "କେବଳ ପ୍ରେମ", "ରାଜନୈତିକ ବ୍ୟଙ୍ଗ"], correctAnswer: 1, marks: 1, explanation: "ସେ ଆଦିବାସୀ ସଂସ୍କୃତି ଏବଂ ଅସ୍ତିତ୍ୱବାଦ ଉପରେ ଲେଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'ଚିଲିକା' କବିତା କିଏ ଲେଖିଥିଲେ?", options: ["ଗଙ୍ଗାଧର ମେହେର", "ରାଧାନାଥ ରାୟ", "ଗୋପବନ୍ଧୁ ଦାସ", "ସଚ୍ଚି ରାଉତରାୟ"], correctAnswer: 1, marks: 1, explanation: "ରାଧାନାଥ ରାୟ 'ଚିଲିକା' କବିତା ଲେଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ଗୋପବନ୍ଧୁ ଦାସଙ୍କୁ କ’ଣ କୁହାଯାଏ?", options: ["କବି ସମ୍ରାଟ", "ଉତ୍କଳମଣି", "ବ୍ୟାସକବି", "ସ୍ୱଭାବ କବି"], correctAnswer: 1, marks: 1, explanation: "ଗୋପବନ୍ଧୁ ଦାସଙ୍କୁ 'ଉତ୍କଳମଣି' କୁହାଯାଏ।" },
      { quiz: quiz2._id, questionText: "ସବୁଜ ଆନ୍ଦୋଳନ କାହାରୁ ପ୍ରଭାବିତ?", options: ["Marxism", "English Romantic poetry", "French Revolution", "Russian literature"], correctAnswer: 1, marks: 1, explanation: "ସବୁଜ ଆନ୍ଦୋଳନ English Romantic poets ରୁ ପ୍ରେରଣା ନେଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "ଭୀମ ଭୋଇ କେଉଁ ଆନ୍ଦୋଳନ ସହ ଜଡିତ?", options: ["ସବୁଜ ଆନ୍ଦୋଳନ", "ମହିମା ଧର୍ମ", "ପ୍ରଗତିବାଦୀ", "ରୋମାଣ୍ଟିକ"], correctAnswer: 1, marks: 1, explanation: "ଭୀମ ଭୋଇ ମହିମା ଧର୍ମର ସନ୍ତ କବି।" },
      { quiz: quiz2._id, questionText: "ଗଙ୍ଗାଧର ମେହେରଙ୍କୁ କ’ଣ କୁହାଯାଏ?", options: ["ଉତ୍କଳମଣି", "ସ୍ୱଭାବ କବି", "କବି ସମ୍ରାଟ", "ବ୍ୟାସକବି"], correctAnswer: 1, marks: 1, explanation: "ଗଙ୍ଗାଧର ମେହେରଙ୍କୁ 'ସ୍ୱଭାବ କବି' କୁହାଯାଏ।" },
      { quiz: quiz2._id, questionText: "ଜୟନ୍ତ ମହାପାତ୍ର କେଉଁ ଭାଷାରେ କବିତା ଲେଖନ୍ତି?", options: ["ଓଡ଼ିଆ", "ଇଂରାଜୀ", "ହିନ୍ଦୀ", "ବଙ୍ଗଳା"], correctAnswer: 1, marks: 1, explanation: "ଜୟନ୍ତ ମହାପାତ୍ର ଏକ ପ୍ରସିଦ୍ଧ Indian English poet।" },
      { quiz: quiz2._id, questionText: "'କେଦାର ଗୌରୀ' କାବ୍ୟ କିଏ ଲେଖିଥିଲେ?", options: ["ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର", "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ", "ସଚ୍ଚି ରାଉତରାୟ"], correctAnswer: 1, marks: 1, explanation: "ଗଙ୍ଗାଧର ମେହେର 'କେଦାର ଗୌରୀ' କାବ୍ୟ ଲେଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ଓଡ଼ିଆ ଭାଗବତ କିଏ ଲେଖିଥିଲେ?", options: ["ସାରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ବଳରାମ ଦାସ", "ଅଚ୍ୟୁତାନନ୍ଦ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଜଗନ୍ନାଥ ଦାସ ଓଡ଼ିଆ ଭାଗବତ ଲେଖିଥିଲେ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Grammar",
      chapter: "ଉନ୍ନତ ବ୍ୟାକରଣ",
      grade: 12,
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
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆ ଲିପିରେ କେତେଟି ସ୍ୱର ଅଛି?", options: ["10", "12", "14", "16"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆ ଲିପିରେ 14ଟି ସ୍ୱର ଅଛି।" },
      { quiz: quiz3._id, questionText: "'ସନ୍ଧି' ର ଅର୍ଥ କ’ଣ?", options: ["ବିଚ୍ଛେଦ", "ଦୁଇ ଶବ୍ଦ/ଧ୍ୱନିର ମିଳନ", "ବହୁବଚନ", "କ୍ରିୟାର ରୂପ"], correctAnswer: 1, marks: 1, explanation: "ସନ୍ଧି ହେଉଛି ଦୁଇ ଧ୍ୱନିର ଧ୍ୱନିଗତ ମିଳନ।" },
      { quiz: quiz3._id, questionText: "'ସମାସ' କ’ଣ?", options: ["କ୍ରିୟାର ରୂପ", "ଯୁକ୍ତ ଶବ୍ଦ ଗଠନ", "ବାକ୍ୟ ପ୍ରକାର", "ବିରାମ ଚିହ୍ନ"], correctAnswer: 1, marks: 1, explanation: "ସମାସ ଦୁଇ କିମ୍ବା ଅଧିକ ଶବ୍ଦକୁ ଯୋଡ଼େ।" },
      { quiz: quiz3._id, questionText: "'ଉପମା' ଅଳଙ୍କାର କ’ଣ?", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "ଉପମାରେ like/as ଦ୍ୱାରା ତୁଳନା କରାଯାଏ।" },
      { quiz: quiz3._id, questionText: "'ରୂପକ' ଅଳଙ୍କାର କ’ଣ?", options: ["Simile", "Metaphor", "Alliteration", "Irony"], correctAnswer: 1, marks: 1, explanation: "ରୂପକରେ ସିଧାସଳଖ ତୁଳନା କରାଯାଏ।" },
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆରେ କେତେଟି ବ୍ୟଞ୍ଜନ ଅଛି?", options: ["25", "33", "36", "40"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆରେ 36ଟି ବ୍ୟଞ୍ଜନ ଅଛି।" },
      { quiz: quiz3._id, questionText: "'ପ୍ରବନ୍ଧ' ର ଅର୍ଥ କ’ଣ?", options: ["କବିତା", "ନିବନ୍ଧ", "ଉପନ୍ୟାସ", "ନାଟକ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରବନ୍ଧ ହେଉଛି ଏକ ବିଷୟ ଉପରେ ଗଦ୍ୟ ରଚନା।" },
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆ ଲିପି କେଉଁଠାରୁ ବିକଶିତ ହୋଇଛି?", options: ["ଦେବନାଗରୀ", "ବ୍ରାହ୍ମୀ", "ଖରୋଷ୍ଠୀ", "ତାମିଲ"], correctAnswer: 1, marks: 1, explanation: "ଓଡ଼ିଆ ଲିପି ପ୍ରାଚୀନ ବ୍ରାହ୍ମୀ ଲିପିରୁ ବିକଶିତ।" },
      { quiz: quiz3._id, questionText: "'କାରକ' କ’ଣ ସୂଚାଏ?", options: ["Tense", "ନାମ ଏବଂ କ୍ରିୟାର ସମ୍ପର୍କ", "Gender", "Number"], correctAnswer: 1, marks: 1, explanation: "କାରକ noun/pronoun ଏବଂ verb ର ସମ୍ପର୍କ ଦର୍ଶାଏ।" },
      { quiz: quiz3._id, questionText: "'ଅତିଶୟୋକ୍ତି' ଅଳଙ୍କାର କ’ଣ?", options: ["Simile", "Hyperbole", "Metaphor", "Irony"], correctAnswer: 1, marks: 1, explanation: "ଅତିଶୟୋକ୍ତି ମାନେ ଅତିରଞ୍ଜନ।" },
    ]);

    console.log("✓ Class 12 Commerce - Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceOdiaOdia };
