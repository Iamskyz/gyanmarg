
// Full Odia translated Class 10 Social Studies file with all 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10SocialStudiesOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ଭାରତରେ ଜାତୀୟତାବାଦ
    const socialQuiz1 = await Quiz.create({
      title: "ଭାରତରେ ଜାତୀୟତାବାଦ",
      subject: "Social Studies",
      category: "ଇତିହାସ",
      chapter: "Nationalism in India",
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
      { quiz: socialQuiz1._id, questionText: "Civil Disobedience Movement କିଏ ଆରମ୍ଭ କରିଥିଲେ?", options: ["Nehru", "Subhas Bose", "Mahatma Gandhi", "Bhagat Singh"], correctAnswer: 2, marks: 1, explanation: "1930 ରେ Dandi March ସହ ଗାନ୍ଧୀଜୀ Civil Disobedience Movement ଆରମ୍ଭ କରିଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "Jallianwala Bagh massacre କେବେ ଘଟିଥିଲା?", options: ["1917", "1919", "1920", "1921"], correctAnswer: 1, marks: 1, explanation: "13 April 1919 ରେ Amritsar ରେ ଏହା ଘଟିଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "Non-Cooperation Movement କେବେ ଆରମ୍ଭ ହେଲା?", options: ["1919", "1920", "1930", "1942"], correctAnswer: 1, marks: 1, explanation: "1920 ରେ ଏହା ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "Champaran ରେ କୃଷକମାନଙ୍କୁ କିଏ ନେତୃତ୍ୱ ଦେଇଥିଲେ?", options: ["Nehru", "Gandhi", "Patel", "Tilak"], correctAnswer: 1, marks: 1, explanation: "1917 ର Champaran Satyagraha ରେ ଗାନ୍ଧୀଜୀ ନେତୃତ୍ୱ ଦେଇଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "Rowlatt Act କେବେ ପାସ୍ ହେଲା?", options: ["1917", "1918", "1919", "1920"], correctAnswer: 2, marks: 1, explanation: "1919 ରେ ଏହା ପାସ୍ ହୋଇଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "Quit India Movement କେବେ ଆରମ୍ଭ ହେଲା?", options: ["1940", "1941", "1942", "1943"], correctAnswer: 2, marks: 1, explanation: "8 August 1942 ରେ Quit India Movement ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "'Swaraj is my birthright' slogan କିଏ ଦେଇଥିଲେ?", options: ["Gandhi", "Tilak", "Nehru", "Bose"], correctAnswer: 1, marks: 1, explanation: "Bal Gangadhar Tilak ଏହି slogan ଦେଇଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "Salt March କେତେ ଦୂରତା ଆବରଣ କରିଥିଲା?", options: ["240 miles", "340 miles", "385 km", "200 km"], correctAnswer: 2, marks: 1, explanation: "Sabarmati ରୁ Dandi ପର୍ଯ୍ୟନ୍ତ ପ୍ରାୟ 385 km।" },
      { quiz: socialQuiz1._id, questionText: "Swaraj Party କିଏ ଗଠନ କରିଥିଲେ?", options: ["Gandhi and Nehru", "C.R. Das and Motilal Nehru", "Tilak and Gokhale", "Bose and Patel"], correctAnswer: 1, marks: 1, explanation: "1923 ରେ C.R. Das ଏବଂ Motilal Nehru Swaraj Party ଗଠନ କରିଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "Simon Commission ଭାରତକୁ କେବେ ଆସିଥିଲା?", options: ["1925", "1927", "1928", "1930"], correctAnswer: 2, marks: 1, explanation: "1928 ରେ Simon Commission ଭାରତକୁ ଆସିଥିଲା।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ବିଶ୍ୱୀକରଣ ଏବଂ ଭାରତୀୟ ଅର୍ଥନୀତି
    const socialQuiz2 = await Quiz.create({
      title: "ବିଶ୍ୱୀକରଣ ଏବଂ ଭାରତୀୟ ଅର୍ଥନୀତି",
      subject: "Social Studies",
      category: "ଅର୍ଥନୀତି",
      chapter: "Globalisation",
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
      { quiz: socialQuiz2._id, questionText: "Globalisation ର ଅର୍ଥ କଣ?", options: ["ଅର୍ଥନୀତିର ପୃଥକତା", "ବିଶ୍ୱ ଅର୍ଥନୀତିର ଏକତ୍ରୀକରଣ", "କେବଳ ଦୁଇ ଦେଶର ବ୍ୟବସାୟ", "କେବଳ ସଂସ୍କୃତି ବିନିମୟ"], correctAnswer: 1, marks: 1, explanation: "Globalisation ହେଉଛି ବ୍ୟବସାୟ, ପ୍ରଯୁକ୍ତି ଏବଂ ନିବେଶ ଦ୍ୱାରା ଅର୍ଥନୀତିର ସଂଯୋଗ।" },
      { quiz: socialQuiz2._id, questionText: "MNC ର full form କଣ?", options: ["Multi National Company", "Multinational Corporation", "Many National Companies", "Major National Corporation"], correctAnswer: 1, marks: 1, explanation: "MNC = Multinational Corporation।" },
      { quiz: socialQuiz2._id, questionText: "WTO ର full form କଣ?", options: ["World Trade Organisation", "World Tax Organisation", "World Transport Organisation", "World Technology Organisation"], correctAnswer: 0, marks: 1, explanation: "WTO ବିଶ୍ୱ ବ୍ୟବସାୟ ନିୟମ ନିର୍ଦ୍ଧାରଣ କରେ।" },
      { quiz: socialQuiz2._id, questionText: "Liberalisation ର ଅର୍ଥ କଣ?", options: ["ଅଧିକ ସରକାରୀ ନିୟନ୍ତ୍ରଣ", "ବ୍ୟବସାୟ ନିୟମ ହଟାଇବା", "ସୀମା ବନ୍ଦ କରିବା", "କର ବଢ଼ାଇବା"], correctAnswer: 1, marks: 1, explanation: "Liberalisation ରେ ସରକାରୀ ନିୟନ୍ତ୍ରଣ କମାଯାଏ।" },
      { quiz: socialQuiz2._id, questionText: "ଭାରତ କେବେ liberalisation ଆରମ୍ଭ କଲା?", options: ["1985", "1991", "1995", "2000"], correctAnswer: 1, marks: 1, explanation: "1991 ରେ New Economic Policy ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: socialQuiz2._id, questionText: "SEZ ର full form କଣ?", options: ["Special Economic Zone", "State Economic Zone", "Special Export Zone", "Standard Economic Zone"], correctAnswer: 0, marks: 1, explanation: "SEZ = Special Economic Zone।" },
      { quiz: socialQuiz2._id, questionText: "ଭାରତର କେଉଁ sector globalisation ରୁ ସର୍ବାଧିକ ଲାଭ ପାଇଛି?", options: ["Agriculture", "IT and Services", "Mining", "Handicrafts"], correctAnswer: 1, marks: 1, explanation: "IT ଏବଂ service sector ସର୍ବାଧିକ ଲାଭ ପାଇଛି।" },
      { quiz: socialQuiz2._id, questionText: "Fair trade practices କଣ ସୁନିଶ୍ଚିତ କରେ?", options: ["କେବଳ MNC ର ଲାଭ", "ଉନ୍ନୟନଶୀଳ ଦେଶର ଉତ୍ପାଦକଙ୍କୁ ନ୍ୟାୟସଂଗତ ମୂଲ୍ୟ", "କୌଣସି ବ୍ୟବସାୟ ନୁହେଁ", "କେବଳ export"], correctAnswer: 1, marks: 1, explanation: "Fair trade ଉତ୍ପାଦକଙ୍କୁ ନ୍ୟାୟସଂଗତ ମୂଲ୍ୟ ଦେଇଥାଏ।" },
      { quiz: socialQuiz2._id, questionText: "Trade barrier କଣ?", options: ["Free trade", "Import ଉପରେ କର", "Export subsidy", "କୌଣସି କର ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "Tariff ଭଳି କର foreign goods କୁ ସୀମିତ କରେ।" },
      { quiz: socialQuiz2._id, questionText: "FDI ର full form କଣ?", options: ["Foreign Direct Investment", "Federal Direct Income", "Foreign Domestic Investment", "Fixed Deposit Interest"], correctAnswer: 0, marks: 1, explanation: "FDI = Foreign Direct Investment।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: Power Sharing
    const socialQuiz3 = await Quiz.create({
      title: "ଶକ୍ତି ବଣ୍ଟନ ଏବଂ ସଂଘୀୟତା",
      subject: "Social Studies",
      category: "ନାଗରିକ ଶାସ୍ତ୍ର",
      chapter: "Power Sharing",
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
      { quiz: socialQuiz3._id, questionText: "Power sharing କାହିଁକି ଆବଶ୍ୟକ?", options: ["ସଂଘର୍ଷ ବଢ଼ାଏ", "ସଂଘର୍ଷ କମାଏ ଏବଂ ସ୍ଥିରତା ଆଣେ", "ସରକାରକୁ ଦୁର୍ବଳ କରେ", "ଗୁରୁତ୍ୱ ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "Power sharing ସାମାଜିକ ସଂଘର୍ଷ କମାଏ।" },
      { quiz: socialQuiz3._id, questionText: "ଭାରତରେ ଶକ୍ତି କାହା ମଧ୍ୟରେ ବଣ୍ଟନ ହୋଇଛି?", options: ["କେବଳ କେନ୍ଦ୍ର", "କେନ୍ଦ୍ର ଏବଂ ରାଜ୍ୟ", "କେବଳ ରାଜ୍ୟ", "କେବଳ local bodies"], correctAnswer: 1, marks: 1, explanation: "ଭାରତ ଏକ federal system।" },
      { quiz: socialQuiz3._id, questionText: "କେଉଁ list ରେ କେବଳ କେନ୍ଦ୍ର ସରକାର ଆଇନ କରିପାରେ?", options: ["State List", "Union List", "Concurrent List", "Residuary List"], correctAnswer: 1, marks: 1, explanation: "Union List ରେ defence ଭଳି ବିଷୟ ରହିଛି।" },
      { quiz: socialQuiz3._id, questionText: "Concurrent List ର ଅର୍ଥ କଣ?", options: ["କେବଳ କେନ୍ଦ୍ର ଆଇନ କରେ", "କେବଳ ରାଜ୍ୟ ଆଇନ କରେ", "କେନ୍ଦ୍ର ଏବଂ ରାଜ୍ୟ ଦୁହେଁ ଆଇନ କରନ୍ତି", "କେହି ନୁହେଁ"], correctAnswer: 2, marks: 1, explanation: "Concurrent List ରେ ଦୁହେଁ ଆଇନ କରିପାରନ୍ତି।" },
      { quiz: socialQuiz3._id, questionText: "Panchayati Raj କେଉଁ power sharing ର ଉଦାହରଣ?", options: ["Horizontal", "Vertical", "କୌଣସି ନୁହେଁ", "Military rule"], correctAnswer: 1, marks: 1, explanation: "କେନ୍ଦ୍ର → ରାଜ୍ୟ → ସ୍ଥାନୀୟ ସରକାର vertical power sharing।" },
      { quiz: socialQuiz3._id, questionText: "Belgium କିପରି ethnic problem ସମାଧାନ କଲା?", options: ["ଯୁଦ୍ଧ", "Power sharing", "Dictatorship", "Separation"], correctAnswer: 1, marks: 1, explanation: "Belgium Dutch ଏବଂ French ମଧ୍ୟରେ power sharing କଲା।" },
      { quiz: socialQuiz3._id, questionText: "Sri Lanka ର majoritarian policy ର ପରିଣାମ କଣ ହେଲା?", options: ["ଶାନ୍ତି", "Civil war", "Economic growth", "Unity"], correctAnswer: 1, marks: 1, explanation: "Sinhala-only policy ଦ୍ୱାରା civil war ହୋଇଥିଲା।" },
      { quiz: socialQuiz3._id, questionText: "Horizontal power sharing କଣ?", options: ["ସରକାରର ଭିନ୍ନ ସ୍ତର ମଧ୍ୟରେ", "Legislature, executive, judiciary ମଧ୍ୟରେ", "ସମୁଦାୟ ମଧ୍ୟରେ", "Political party ମଧ୍ୟରେ"], correctAnswer: 1, marks: 1, explanation: "ସମ ସ୍ତରର ସଂସ୍ଥାଗୁଡ଼ିକ ମଧ୍ୟରେ ଶକ୍ତି ବଣ୍ଟନ।" },
      { quiz: socialQuiz3._id, questionText: "Union List ରେ କେତେ subject ଥିଲା?", options: ["66", "97", "47", "52"], correctAnswer: 1, marks: 1, explanation: "ମୂଳତଃ Union List ରେ 97 subject ଥିଲା।" },
      { quiz: socialQuiz3._id, questionText: "Belgium ର community government କାହା ଦ୍ୱାରା ଚୟନ ହୁଏ?", options: ["ସମସ୍ତ ନାଗରିକ", "ଏକ ଭାଷା ସମୁଦାୟର ଲୋକମାନେ", "କେବଳ Dutch speaker", "କେବଳ French speaker"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରତ୍ୟେକ language community ନିଜ government ଚୟନ କରେ।" },
    ]);

    console.log("✓ Class 10 - Social Studies: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10SocialStudiesOdia;
