import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsOdiaOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ଓଡ଼ିଆ ଗଦ୍ୟ - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Literature",
      chapter: "ଗଦ୍ୟ",
      grade: 12,
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
      { quiz: quiz1._id, questionText: "ଆଧୁନିକ ଓଡ଼ିଆ ସାହିତ୍ୟର ଜନକ କିଏ?", options: ["ସାରଳା ଦାସ", "ଫକୀର ମୋହନ ସେନାପତି", "ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର"], correctAnswer: 1, marks: 1, explanation: "ଫକୀର ମୋହନ ଆଧୁନିକ ଓଡ଼ିଆ ଗଦ୍ୟ ଏବଂ ଉପନ୍ୟାସର ପ୍ରବର୍ତ୍ତକ।" },
      { quiz: quiz1._id, questionText: "'ଛ ମଣ ଆଠ ଗୁଣ୍ଠ' କିଏ ଲେଖିଥିଲେ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ଫକୀର ମୋହନ ସେନାପତି", "ମନୋଜ ଦାସ", "ପ୍ରତିଭା ରାୟ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଜମିଦାରମାନଙ୍କ ଦ୍ୱାରା ଗରିବ ଚାଷୀଙ୍କ ଶୋଷଣକୁ ଦର୍ଶାଏ।" },
      { quiz: quiz1._id, questionText: "ଗୋପୀନାଥ ମହାନ୍ତି କେଉଁ କୃତି ପାଇଁ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ?", options: ["ପରଜା", "ମାଟି ମଟାଲା", "ଅମୃତର ସନ୍ତାନ", "ଦାଦି ବୁଢ଼ା"], correctAnswer: 1, marks: 1, explanation: "1973 ମସିହାରେ ସେ 'ମାଟି ମଟାଲା' ପାଇଁ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'ଯଜ୍ଞସେନୀ' କାହାର ଉପନ୍ୟାସ?", options: ["ଗୋପୀନାଥ ମହାନ୍ତି", "ପ୍ରତିଭା ରାୟ", "ମନୋଜ ଦାସ", "ସୁରେନ୍ଦ୍ର ମହାନ୍ତି"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତିଭା ରାୟ ଦ୍ରୌପଦୀଙ୍କ ଦୃଷ୍ଟିକୋଣରୁ ମହାଭାରତକୁ ପୁନଃକଥନ କରିଛନ୍ତି।" },
      { quiz: quiz1._id, questionText: "ପ୍ରଥମ ଓଡ଼ିଆ ସମ୍ବାଦପତ୍ର କ’ଣ ଥିଲା?", options: ["ସମାଜ", "ଉତ୍କଳ ଦୀପିକା", "ପ୍ରଜାତନ୍ତ୍ର", "ଧରିତ୍ରୀ"], correctAnswer: 1, marks: 1, explanation: "'ଉତ୍କଳ ଦୀପିକା' 1866 ରେ ପ୍ରକାଶିତ ହୋଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ମନୋଜ ଦାସ କେଉଁ କେଉଁ ଭାଷାରେ ଲେଖନ୍ତି?", options: ["କେବଳ ଓଡ଼ିଆ", "ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ", "କେବଳ ଇଂରାଜୀ", "ହିନ୍ଦୀ ଏବଂ ଓଡ଼ିଆ"], correctAnswer: 1, marks: 1, explanation: "ସେ ଦୁଇଟି ଭାଷାରେ ଖ୍ୟାତନାମା ଲେଖକ।" },
      { quiz: quiz1._id, questionText: "ପଞ୍ଚସଖା ଯୁଗ କେଉଁ ଶତାବ୍ଦୀର?", options: ["13ମ", "15ମ-16ମ", "18ମ", "20ମ"], correctAnswer: 1, marks: 1, explanation: "ପଞ୍ଚସଖା କବିମାନେ 15ମ-16ମ ଶତାବ୍ଦୀରେ ଓଡ଼ିଆ ସାହିତ୍ୟକୁ ସମୃଦ୍ଧ କରିଥିଲେ।" },
      { quiz: quiz1._id, questionText: "'ପରଜା' କିଏ ଲେଖିଥିଲେ?", options: ["ଫକୀର ମୋହନ", "ଗୋପୀନାଥ ମହାନ୍ତି", "ପ୍ରତିଭା ରାୟ", "ମନୋଜ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଆଦିବାସୀ ଶୋଷଣ ଉପରେ ଆଧାରିତ ଉପନ୍ୟାସ।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ଭାଷା କେବେ Classical Language ମାନ୍ୟତା ପାଇଲା?", options: ["2010", "2014", "2016", "2018"], correctAnswer: 1, marks: 1, explanation: "2014 ରେ ଓଡ଼ିଆକୁ ଭାରତର 6ଟିଏ Classical Language ଭାବେ ଘୋଷଣା କରାଯାଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ 'କବି ସମ୍ରାଟ' କିଏ?", options: ["ରାଧାନାଥ ରାୟ", "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ", "ଗଙ୍ଗାଧର ମେହେର", "ଗୋପବନ୍ଧୁ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ ତାଙ୍କ ଅଳଙ୍କାରମୟ କବିତା ପାଇଁ ପ୍ରସିଦ୍ଧ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଓଡ଼ିଆ କବିତା - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Literature",
      chapter: "କବିତା",
      grade: 12,
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
      { quiz: quiz2._id, questionText: "ସଚ୍ଚିଦାନନ୍ଦ ରାଉତରାୟ କେବେ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ?", options: ["1980", "1986", "1990", "2000"], correctAnswer: 1, marks: 1, explanation: "ସେ 1986 ରେ କବିତା ପାଇଁ ଜ୍ଞାନପୀଠ ପାଇଥିଲେ।" },
      { quiz: quiz2._id, questionText: "'ଚିଲିକା' କବିତା କିଏ ଲେଖିଥିଲେ?", options: ["ଗଙ୍ଗାଧର ମେହେର", "ରାଧାନାଥ ରାୟ", "ଗୋପବନ୍ଧୁ ଦାସ", "ସଚ୍ଚିଦାନନ୍ଦ ରାଉତରାୟ"], correctAnswer: 1, marks: 1, explanation: "ରାଧାନାଥ ରାୟ ଏହି ପ୍ରସିଦ୍ଧ ପ୍ରକୃତି କବିତା ଲେଖିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ଗୋପବନ୍ଧୁ ଦାସ କ’ଣ ନାମରେ ପରିଚିତ?", options: ["କବି ସମ୍ରାଟ", "ଉତ୍କଳମଣି", "ବ୍ୟାସକବି", "ସ୍ୱଭାବ କବି"], correctAnswer: 1, marks: 1, explanation: "ଓଡ଼ିଶା ପାଇଁ ସେବା ପାଇଁ ସେ 'ଉତ୍କଳମଣି' ଭାବେ ପରିଚିତ।" },
      { quiz: quiz2._id, questionText: "ସବୁଜ ଆନ୍ଦୋଳନ କାହାରୁ ପ୍ରଭାବିତ?", options: ["Marxism", "English Romantic poetry", "French Revolution", "Russian literature"], correctAnswer: 1, marks: 1, explanation: "ଏହା English Romantic poets ଠାରୁ ପ୍ରେରଣା ନେଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "ଭୀମ ଭୋଇ କେଉଁ ଆନ୍ଦୋଳନ ସହ ସମ୍ପର୍କିତ?", options: ["ସବୁଜ ଆନ୍ଦୋଳନ", "ମହିମା ଧର୍ମ", "ପ୍ରଗତିବାଦୀ ଆନ୍ଦୋଳନ", "ରୋମାଣ୍ଟିକ ଆନ୍ଦୋଳନ"], correctAnswer: 1, marks: 1, explanation: "ସେ ମହିମା ଧର୍ମର ସନ୍ତ କବି ଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ଗଙ୍ଗାଧର ମେହେର କ’ଣ ନାମରେ ପରିଚିତ?", options: ["ଉତ୍କଳମଣି", "ସ୍ୱଭାବ କବି", "କବି ସମ୍ରାଟ", "ବ୍ୟାସକବି"], correctAnswer: 1, marks: 1, explanation: "ତାଙ୍କ ସ୍ୱାଭାବିକ କବିତା ପ୍ରତିଭା ପାଇଁ ଏହି ଉପାଧି ମିଳିଥିଲା।" },
      { quiz: quiz2._id, questionText: "ଜୟନ୍ତ ମହାପାତ୍ର କେଉଁ ଭାଷାରେ କବିତା ଲେଖନ୍ତି?", options: ["ଓଡ଼ିଆ", "ଇଂରାଜୀ", "ହିନ୍ଦୀ", "ବଙ୍ଗଳା"], correctAnswer: 1, marks: 1, explanation: "ସେ ଓଡ଼ିଶାର ପ୍ରସିଦ୍ଧ Indian English poet।" },
      { quiz: quiz2._id, questionText: "'କେଦାର ଗୌରୀ' କିଏ ଲେଖିଥିଲେ?", options: ["ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର", "ଉପେନ୍ଦ୍ର ଭଞ୍ଜ", "ସଚ୍ଚିଦାନନ୍ଦ ରାଉତରାୟ"], correctAnswer: 1, marks: 1, explanation: "ଗଙ୍ଗାଧର ମେହେରଙ୍କ ପ୍ରସିଦ୍ଧ narrative poem।" },
      { quiz: quiz2._id, questionText: "ଓଡ଼ିଆ ଭାଗବତ କିଏ ଲେଖିଥିଲେ?", options: ["ସାରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ବଳରାମ ଦାସ", "ଅଚ୍ୟୁତାନନ୍ଦ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଜଗନ୍ନାଥ ଦାସ Bhagavata Purana କୁ ଓଡ଼ିଆରେ ଅନୁବାଦ କରିଥିଲେ।" },
      { quiz: quiz2._id, questionText: "ସୀତାକାନ୍ତ ମହାପାତ୍ରଙ୍କ କବିତା କ’ଣ ପାଇଁ ପ୍ରସିଦ୍ଧ?", options: ["କେବଳ ହାସ୍ୟ", "ଆଦିବାସୀ ଜୀବନ ଏବଂ ଅସ୍ତିତ୍ୱବାଦ", "କେବଳ ପ୍ରେମ", "ରାଜନୈତିକ ବ୍ୟଙ୍ଗ"], correctAnswer: 1, marks: 1, explanation: "ସେ ଆଦିବାସୀ ସଂସ୍କୃତି ଏବଂ ଦାର୍ଶନିକତା ଉପରେ ଲେଖିଥିଲେ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ ଏବଂ ରଚନା - ଶ୍ରେଣୀ 12",
      subject: "Odia",
      category: "Grammar",
      chapter: "ଉନ୍ନତ ବ୍ୟାକରଣ",
      grade: 12,
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
      { quiz: quiz3._id, questionText: "'ସନ୍ଧି' ର ଅର୍ଥ କ’ଣ?", options: ["ବିଚ୍ଛେଦ", "ଦୁଇ ଧ୍ୱନିର ମିଳନ", "ବହୁବଚନ", "କ୍ରିୟାର ରୂପ"], correctAnswer: 1, marks: 1, explanation: "ସନ୍ଧି ହେଉଛି ଦୁଇ ଧ୍ୱନି କିମ୍ବା ଶବ୍ଦର ଧ୍ୱନିଗତ ମିଳନ।" },
      { quiz: quiz3._id, questionText: "'ସମାସ' କ’ଣକୁ ସୂଚାଏ?", options: ["କ୍ରିୟାର ରୂପ", "ଯୁକ୍ତ ଶବ୍ଦ ଗଠନ", "ବାକ୍ୟ ପ୍ରକାର", "ବିରାମ ଚିହ୍ନ"], correctAnswer: 1, marks: 1, explanation: "ସମାସ ଦୁଇ କିମ୍ବା ଅଧିକ ଶବ୍ଦକୁ ଏକତ୍ର କରେ।" },
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆରେ କେତେଟି ବ୍ୟଞ୍ଜନ ଅଛି?", options: ["25", "33", "36", "40"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆରେ 36ଟି ବ୍ୟଞ୍ଜନ ଅଛି।" },
      { quiz: quiz3._id, questionText: "'ଉପମା' ଅଳଙ୍କାର କାହା ସମାନ?", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "ଉପମାରେ like କିମ୍ବା as ଦ୍ୱାରା ତୁଳନା କରାଯାଏ।" },
      { quiz: quiz3._id, questionText: "'ରୂପକ' ଅଳଙ୍କାର କାହା ସମାନ?", options: ["Simile", "Metaphor", "Alliteration", "Irony"], correctAnswer: 1, marks: 1, explanation: "ରୂପକରେ ସିଧାସଳଖ ତୁଳନା କରାଯାଏ।" },
      { quiz: quiz3._id, questionText: "ଓଡ଼ିଆ ଲିପି କେଉଁଠାରୁ ବିକଶିତ ହୋଇଛି?", options: ["Devanagari", "Brahmi", "Kharosthi", "Tamil"], correctAnswer: 1, marks: 1, explanation: "ଓଡ଼ିଆ ଲିପି ପ୍ରାଚୀନ Brahmi script ଠାରୁ ବିକଶିତ।" },
      { quiz: quiz3._id, questionText: "'କାରକ' କ’ଣ ସୂଚାଏ?", options: ["Tense", "ନାମ ଏବଂ କ୍ରିୟାର ସମ୍ପର୍କ", "Gender", "Number"], correctAnswer: 1, marks: 1, explanation: "କାରକ noun/pronoun ର verb ସହ ସମ୍ପର୍କକୁ ଦର୍ଶାଏ।" },
      { quiz: quiz3._id, questionText: "'ପ୍ରବନ୍ଧ' ର ଅର୍ଥ କ’ଣ?", options: ["କବିତା", "ନିବନ୍ଧ", "ଉପନ୍ୟାସ", "ନାଟକ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରବନ୍ଧ ଏକ ବିଷୟ ଉପରେ ଗଦ୍ୟ ରଚନା।" },
      { quiz: quiz3._id, questionText: "'ଅତିଶୟୋକ୍ତି' ଅଳଙ୍କାର କ’ଣ?", options: ["Simile", "Hyperbole", "Metaphor", "Irony"], correctAnswer: 1, marks: 1, explanation: "ଅତିଶୟୋକ୍ତି ମାନେ ସାହିତ୍ୟିକ ପ୍ରଭାବ ପାଇଁ ଅତିରଞ୍ଜନ।" },
    ]);

    console.log("✓ Class 12 Arts - Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsOdiaOdia };
