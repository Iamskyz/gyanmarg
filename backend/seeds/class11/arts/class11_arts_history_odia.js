import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsHistoryOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ପ୍ରାଚୀନ ସମାଜ ଏବଂ ସାମ୍ରାଜ୍ୟ",
      subject: "History",
      category: "World History",
      chapter: "ପ୍ରାଚୀନ ସମାଜ",
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
      { quiz: quiz1._id, questionText: "ବିଶ୍ୱର ସବୁଠାରୁ ପ୍ରାଚୀନ ସଭ୍ୟତା କେଉଁଟି?", options: ["ମିଶରୀୟ", "ମେସୋପୋଟାମିଆ", "ସିନ୍ଧୁ ଘାଟୀ", "ଚୀନ"], correctAnswer: 1, marks: 1, explanation: "ମେସୋପୋଟାମିଆ ସଭ୍ୟତାକୁ ସବୁଠାରୁ ପ୍ରାଚୀନ ସଭ୍ୟତା ଭାବେ ଗଣାଯାଏ।" },
      { quiz: quiz1._id, questionText: "ହାମ୍ମୁରାବି ସଂହିତା କେଉଁ ସଭ୍ୟତାର?", options: ["ମିଶରୀୟ", "ବାବିଲୋନିୟ", "ଗ୍ରୀକ", "ରୋମନ"], correctAnswer: 1, marks: 1, explanation: "ହାମ୍ମୁରାବି ବାବିଲୋନର ରାଜା ଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ରୋମ ସାମ୍ରାଜ୍ୟର ସ୍ଥାପକ କିଏ?", options: ["ଜୁଲିଅସ ସିଜର", "ଅଗଷ୍ଟସ ସିଜର", "ନିରୋ", "କନଷ୍ଟାଣ୍ଟାଇନ"], correctAnswer: 1, marks: 1, explanation: "ଅଗଷ୍ଟସ ସିଜର ପ୍ରଥମ ରୋମ ସମ୍ରାଟ ଥିଲେ।" },
      { quiz: quiz1._id, questionText: "ସିଲ୍କ ରୁଟ କେଉଁ ଅଞ୍ଚଳକୁ ସଂଯୋଗ କରୁଥିଲା?", options: ["ଆଫ୍ରିକା ଏବଂ ଇଉରୋପ", "ଚୀନ ଏବଂ ମେଡିଟେରେନିୟ", "ଭାରତ ଏବଂ ଅଷ୍ଟ୍ରେଲିଆ", "ଆମେରିକା ଏବଂ ଇଉରୋପ"], correctAnswer: 1, marks: 1, explanation: "ସିଲ୍କ ରୁଟ ଚୀନକୁ ମେଡିଟେରେନିୟ ଅଞ୍ଚଳ ସହିତ ଯୋଡ଼ିଥିଲା।" },
      { quiz: quiz1._id, questionText: "କେଉଁ ସାମ୍ରାଜ୍ୟ ସଡ଼କ ଏବଂ ଡାକ ବ୍ୟବସ୍ଥା ପାଇଁ ପ୍ରସିଦ୍ଧ ଥିଲା?", options: ["ଗ୍ରୀକ", "ପାର୍ସିକ", "ମିଶରୀୟ", "ବାବିଲୋନିୟ"], correctAnswer: 1, marks: 1, explanation: "ଦାରିଅସଙ୍କ ଶାସନରେ ପାର୍ସିକ ସାମ୍ରାଜ୍ୟ ଉନ୍ନତ ସଡ଼କ ବ୍ୟବସ୍ଥା ଗଢ଼ିଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଗଣତନ୍ତ୍ର କେଉଁ ପ୍ରାଚୀନ ସହରରେ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["ରୋମ", "ଏଥେନସ", "ସ୍ପାର୍ଟା", "ଥିବସ"], correctAnswer: 1, marks: 1, explanation: "ଏଥେନସକୁ ପ୍ରଥମ ଗଣତନ୍ତ୍ରର ଜନ୍ମସ୍ଥାନ ଭାବେ ଗଣାଯାଏ।" },
      { quiz: quiz1._id, questionText: "ଚୀନର ମହାପ୍ରାଚୀର କାହାରୁ ସୁରକ୍ଷା ପାଇଁ ତିଆରି ହୋଇଥିଲା?", options: ["ବନ୍ୟା", "ଉତ୍ତରର ଯାୟାବର ଆକ୍ରମଣ", "ଭୂମିକମ୍ପ", "ବାଣିଜ୍ୟ ବିବାଦ"], correctAnswer: 1, marks: 1, explanation: "ଏହା ଉତ୍ତର ଆକ୍ରମଣରୁ ସୁରକ୍ଷା ପାଇଁ ତିଆରି ହୋଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ମେସୋପୋଟାମିଆରେ କେଉଁ ଲିପି ବ୍ୟବହୃତ ହୁଏଥିଲା?", options: ["ହାଇରୋଗ୍ଲିଫିକ୍ସ", "କ୍ୟୁନିଫର୍ମ", "ଲାଟିନ", "ସଂସ୍କୃତ"], correctAnswer: 1, marks: 1, explanation: "କ୍ୟୁନିଫର୍ମ ମେସୋପୋଟାମିଆର ଲିପି ଥିଲା।" },
      { quiz: quiz1._id, questionText: "କୋଲୋସିଅମ କେଉଁ ସହରରେ ଅବସ୍ଥିତ?", options: ["ଏଥେନସ", "ରୋମ", "ଆଲେକ୍ସାଣ୍ଡ୍ରିଆ", "କନଷ୍ଟାଣ୍ଟିନୋପଲ"], correctAnswer: 1, marks: 1, explanation: "କୋଲୋସିଅମ ରୋମରେ ନିର୍ମିତ ହୋଇଥିଲା।" },
      { quiz: quiz1._id, questionText: "ଆଲେକ୍ସାଣ୍ଡର ଦ ଗ୍ରେଟ କେଉଁ ରାଜ୍ୟର ଥିଲେ?", options: ["ପାର୍ସିଆ", "ମାସେଡୋନିଆ", "ମିଶର", "ସ୍ପାର୍ଟା"], correctAnswer: 1, marks: 1, explanation: "ଆଲେକ୍ସାଣ୍ଡର ମାସେଡୋନିଆର ରାଜା ଥିଲେ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ମଧ୍ୟଯୁଗୀନ ବିଶ୍ୱ ଇତିହାସ",
      subject: "History",
      category: "World History",
      chapter: "ମଧ୍ୟଯୁଗ",
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
      { quiz: quiz2._id, questionText: "ସାମନ୍ତତନ୍ତ୍ର କାହା ଉପରେ ଆଧାରିତ ଥିଲା?", options: ["ବାଣିଜ୍ୟ", "ଜମି ମାଲିକାନା ଏବଂ ନିଷ୍ଠା", "ଧର୍ମ", "ଯୁଦ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "ସାମନ୍ତତନ୍ତ୍ର ଜମି ଏବଂ ନିଷ୍ଠା ଉପରେ ଆଧାରିତ ଥିଲା।" },
      { quiz: quiz2._id, questionText: "କ୍ରୁସେଡ୍ ଯୁଦ୍ଧ କାହାମାନଙ୍କ ମଧ୍ୟରେ ହୋଇଥିଲା?", options: ["ଗ୍ରୀକ ଏବଂ ରୋମନ", "ଖ୍ରୀଷ୍ଟାନ ଏବଂ ମୁସଲମାନ", "ହିନ୍ଦୁ ଏବଂ ବୌଦ୍ଧ", "ଚୀନ ଏବଂ ମଙ୍ଗୋଳ"], correctAnswer: 1, marks: 1, explanation: "କ୍ରୁସେଡ୍ ଧାର୍ମିକ ଯୁଦ୍ଧ ଥିଲା।" },
      { quiz: quiz2._id, questionText: "ବ୍ଲାକ୍ ଡେଥ କେଉଁ ଶତାବ୍ଦୀରେ ଘଟିଥିଲା?", options: ["12ମ", "14ମ", "16ମ", "18ମ"], correctAnswer: 1, marks: 1, explanation: "14ମ ଶତାବ୍ଦୀରେ ବ୍ଲାକ୍ ଡେଥ ଇଉରୋପକୁ ପ୍ରଭାବିତ କରିଥିଲା।" },
      { quiz: quiz2._id, questionText: "ମାଗ୍ନା କାର୍ଟା କେବେ ସ୍ୱାକ୍ଷରିତ ହୋଇଥିଲା?", options: ["1066", "1215", "1453", "1492"], correctAnswer: 1, marks: 1, explanation: "1215ରେ ମାଗ୍ନା କାର୍ଟା ସ୍ୱାକ୍ଷରିତ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "ମଙ୍ଗୋଳ ସାମ୍ରାଜ୍ୟର ସ୍ଥାପକ କିଏ?", options: ["କୁବଲାଇ ଖାନ", "ଚେଙ୍ଗିଜ ଖାନ", "ତୈମୁର", "ବାବର"], correctAnswer: 1, marks: 1, explanation: "ଚେଙ୍ଗିଜ ଖାନ ମଙ୍ଗୋଳ ସାମ୍ରାଜ୍ୟର ସ୍ଥାପକ।" },
      { quiz: quiz2._id, questionText: "ରେନେସାଂ କେଉଁ ଦେଶରୁ ଆରମ୍ଭ ହୋଇଥିଲା?", options: ["ଫ୍ରାନ୍ସ", "ଇଟାଲୀ", "ଇଂଲଣ୍ଡ", "ଜର୍ମାନୀ"], correctAnswer: 1, marks: 1, explanation: "ରେନେସାଂ ଇଟାଲୀରୁ ଆରମ୍ଭ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "କନଷ୍ଟାଣ୍ଟିନୋପଲ କେବେ ଓଟୋମାନ ତୁର୍କମାନଙ୍କ ହାତକୁ ଗଲା?", options: ["1215", "1453", "1492", "1517"], correctAnswer: 1, marks: 1, explanation: "1453ରେ କନଷ୍ଟାଣ୍ଟିନୋପଲ ପତନ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "ହଣ୍ଡ୍ରେଡ୍ ଇଯାର୍ସ ଓୟାର୍ କାହା ମଧ୍ୟରେ ହୋଇଥିଲା?", options: ["ସ୍ପେନ ଏବଂ ପର୍ତ୍ତୁଗାଲ", "ଇଂଲଣ୍ଡ ଏବଂ ଫ୍ରାନ୍ସ", "ଜର୍ମାନୀ ଏବଂ ଇଟାଲୀ", "ରୁଷ ଏବଂ ପୋଲାଣ୍ଡ"], correctAnswer: 1, marks: 1, explanation: "ଏହି ଯୁଦ୍ଧ ଇଂଲଣ୍ଡ ଏବଂ ଫ୍ରାନ୍ସ ମଧ୍ୟରେ ହୋଇଥିଲା।" },
      { quiz: quiz2._id, questionText: "କେଉଁ ଆବିଷ୍କାର ଜ୍ଞାନ ପ୍ରସାରକୁ ବିପ୍ଲବୀକୃତ କଲା?", options: ["କମ୍ପାସ", "ମୁଦ୍ରଣ ଯନ୍ତ୍ର", "ଗନପାଉଡର", "ଦୂରବୀନ"], correctAnswer: 1, marks: 1, explanation: "ଗୁଟେନବର୍ଗଙ୍କ printing press ଜ୍ଞାନ ପ୍ରସାରକୁ ବଦଳାଇଦେଲା।" },
      { quiz: quiz2._id, questionText: "ଭାଇକିଂ ଯୁଗ କେଉଁ ଅଞ୍ଚଳ ସହ ସମ୍ପର୍କିତ?", options: ["ମଧ୍ୟ ଏସିଆ", "ସ୍କାଣ୍ଡିନେଭିଆ", "ମେଡିଟେରେନିୟ", "ଦକ୍ଷିଣ ଆମେରିକା"], correctAnswer: 1, marks: 1, explanation: "ଭାଇକିଂମାନେ ସ୍କାଣ୍ଡିନେଭିଆର ଲୋକ ଥିଲେ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଭାରତୀୟ ଇତିହାସ - ପ୍ରାଚୀନ ଏବଂ ମଧ୍ୟଯୁଗୀନ",
      subject: "History",
      category: "Indian History",
      chapter: "ପ୍ରାଚୀନ ଏବଂ ମଧ୍ୟଯୁଗୀନ ଭାରତ",
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
      { quiz: quiz3._id, questionText: "ସିନ୍ଧୁ ଘାଟୀ ସଭ୍ୟତା କେବେ ଫଳିଥିଲା?", options: ["5000 BCE", "2500 BCE", "1000 BCE", "500 BCE"], correctAnswer: 1, marks: 1, explanation: "ସିନ୍ଧୁ ଘାଟୀ ସଭ୍ୟତା 2500 BCE ଆସପାସରେ ଫଳିଥିଲା।" },
      { quiz: quiz3._id, questionText: "ଅଶୋକ କେଉଁ ଯୁଦ୍ଧ ପରେ ବୌଦ୍ଧ ଧର୍ମ ଗ୍ରହଣ କଲେ?", options: ["ହାଇଡାସ୍ପିସ", "କଳିଙ୍ଗ", "ପାଣିପତ", "ତରାଇନ"], correctAnswer: 1, marks: 1, explanation: "କଳିଙ୍ଗ ଯୁଦ୍ଧ ପରେ ଅଶୋକ ବୌଦ୍ଧ ଧର୍ମ ଗ୍ରହଣ କଲେ।" },
      { quiz: quiz3._id, questionText: "ଗୁପ୍ତ ଯୁଗକୁ କଣ କୁହାଯାଏ?", options: ["ଲୋହ ଯୁଗ", "ଭାରତର ସୁବର୍ଣ୍ଣ ଯୁଗ", "ଅନ୍ଧକାର ଯୁଗ", "ରୂପା ଯୁଗ"], correctAnswer: 1, marks: 1, explanation: "ଗୁପ୍ତ ଯୁଗକୁ ସୁବର୍ଣ୍ଣ ଯୁଗ କୁହାଯାଏ।" },
      { quiz: quiz3._id, questionText: "ଦିଲ୍ଲୀ ସୁଲତାନତର ସ୍ଥାପକ କିଏ?", options: ["ମହମ୍ମଦ ଘୋରୀ", "କୁତୁବୁଦ୍ଦିନ ଐବକ", "ଆଲାଉଦ୍ଦିନ ଖିଲଜି", "ମହମ୍ମଦ ବିନ୍ ତୁଘଲକ"], correctAnswer: 1, marks: 1, explanation: "କୁତୁବୁଦ୍ଦିନ ଐବକ ଦିଲ୍ଲୀ ସୁଲତାନତ ସ୍ଥାପନ କଲେ।" },
      { quiz: quiz3._id, questionText: "ବିଜୟନଗର ସାମ୍ରାଜ୍ୟର ସ୍ଥାପକ କିଏ?", options: ["କୃଷ୍ଣଦେବ ରାୟ", "ହରିହର ଏବଂ ବୁକ୍କ", "ଶିବାଜୀ", "ରାଜାରାଜ ଚୋଳ"], correctAnswer: 1, marks: 1, explanation: "ହରିହର ଏବଂ ବୁକ୍କ ବିଜୟନଗର ସାମ୍ରାଜ୍ୟ ସ୍ଥାପନ କରିଥିଲେ।" },
      { quiz: quiz3._id, questionText: "ନାଳନ୍ଦା ବିଶ୍ୱବିଦ୍ୟାଳୟ କାହା ଦ୍ୱାରା ଧ୍ୱଂସ ହୋଇଥିଲା?", options: ["ମହମୁଦ ଗଜନୀ", "ବଖ୍ତିୟାର ଖିଲଜି", "ତୈମୁର", "ଔରଙ୍ଗଜେବ"], correctAnswer: 1, marks: 1, explanation: "ବଖ୍ତିୟାର ଖିଲଜି ନାଳନ୍ଦାକୁ ଧ୍ୱଂସ କରିଥିଲେ।" },
      { quiz: quiz3._id, questionText: "ଭକ୍ତି ଆନ୍ଦୋଳନ କଣ ଉପରେ ଜୋର ଦେଇଥିଲା?", options: ["ରୀତିନୀତି", "ଭଗବାନଙ୍କ ପ୍ରତି ବ୍ୟକ୍ତିଗତ ଭକ୍ତି", "ଜାତି ପ୍ରଥା", "ଯୁଦ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "ଭକ୍ତି ଆନ୍ଦୋଳନ ବ୍ୟକ୍ତିଗତ ଭକ୍ତିକୁ ଗୁରୁତ୍ୱ ଦେଇଥିଲା।" },
      { quiz: quiz3._id, questionText: "'ଅର୍ଥଶାସ୍ତ୍ର' କିଏ ଲେଖିଥିଲେ?", options: ["ବାଲ୍ମୀକି", "କୌଟିଲ୍ୟ", "କାଳିଦାସ", "ବାଣଭଟ୍ଟ"], correctAnswer: 1, marks: 1, explanation: "କୌଟିଲ୍ୟ ଅର୍ଥଶାସ୍ତ୍ର ଲେଖିଥିଲେ।" },
      { quiz: quiz3._id, questionText: "ମୁଘଲ ସାମ୍ରାଜ୍ୟର ସ୍ଥାପକ କିଏ?", options: ["ଆକବର", "ବାବର", "ହୁମାୟୁନ", "ଶାହଜାହାନ"], correctAnswer: 1, marks: 1, explanation: "1526ରେ ବାବର ମୁଘଲ ସାମ୍ରାଜ୍ୟ ସ୍ଥାପନ କଲେ।" },
      { quiz: quiz3._id, questionText: "ଚୋଳ ବଂଶ କାହା ପାଇଁ ପ୍ରସିଦ୍ଧ?", options: ["ସ୍ଥଳ ସେନା", "ନୌସେନା ଏବଂ ମନ୍ଦିର ସ୍ଥାପତ୍ୟ", "ଲୋହ ଅସ୍ତ୍ର", "କାଗଜ ତିଆରି"], correctAnswer: 1, marks: 1, explanation: "ଚୋଳମାନେ ନୌସେନା ଏବଂ ମନ୍ଦିର ପାଇଁ ପ୍ରସିଦ୍ଧ ଥିଲେ।" },
    ]);

    console.log("✓ Class 11 Arts - History Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsHistoryOdia };
