
// Full Odia translated Class 8 Social Studies file with 30 questions

import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8SocialStudiesOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB ସହିତ ସଂଯୋଗ ହୋଇଛି");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // ଉପଶ୍ରେଣୀ 1: ଭାରତୀୟ ସଂବିଧାନ
    const socialQuiz1 = await Quiz.create({
      title: "ଭାରତୀୟ ସଂବିଧାନ",
      subject: "Social Studies",
      category: "ନାଗରିକ ଶାସ୍ତ୍ର",
      chapter: "ଭାରତୀୟ ସଂବିଧାନ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    // 10 ପ୍ରଶ୍ନ
    await Question.insertMany([
      { quiz: socialQuiz1._id, questionText: "ଭାରତୀୟ ସଂବିଧାନ କେବେ କାର୍ଯ୍ୟକାରୀ ହେଲା?", options: ["15 ଅଗଷ୍ଟ 1947", "26 ଜାନୁଆରୀ 1950", "26 ନଭେମ୍ବର 1949", "2 ଅକ୍ଟୋବର 1950"], correctAnswer: 1, marks: 1, explanation: "26 ଜାନୁଆରୀ 1950 ରେ ସଂବିଧାନ କାର୍ଯ୍ୟକାରୀ ହେଲା।" },
      { quiz: socialQuiz1._id, questionText: "ସଂବିଧାନର ପ୍ରସ୍ତାବନା କେଉଁ ଶବ୍ଦରେ ଆରମ୍ଭ ହୁଏ?", options: ["ଆମେ ନାଗରିକ", "ଆମେ ଭାରତର ଲୋକ", "ଆମେ ସରକାର", "ଆମେ ସଂସଦ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରସ୍ତାବନା 'ଆମେ ଭାରତର ଲୋକ' ଦ୍ୱାରା ଆରମ୍ଭ ହୁଏ।" },
      { quiz: socialQuiz1._id, questionText: "ଡ୍ରାଫ୍ଟିଂ କମିଟିର ଅଧ୍ୟକ୍ଷ କିଏ ଥିଲେ?", options: ["ନେହେରୁ", "ରାଜେନ୍ଦ୍ର ପ୍ରସାଦ", "ଆମ୍ବେଦକର", "ପଟେଲ"], correctAnswer: 2, marks: 1, explanation: "ଡ଼ା. ବି.ଆର୍. ଆମ୍ବେଦକର ଅଧ୍ୟକ୍ଷ ଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "ଭାରତକୁ କେମିତି ବର୍ଣ୍ଣନା କରାଯାଇଛି?", options: ["ରାଜ୍ୟଗୁଡ଼ିକର ସଂଘ", "ଫେଡେରେସନ୍", "କନଫେଡେରେସନ୍", "ଏକତାମୂଳକ ରାଜ୍ୟ"], correctAnswer: 0, marks: 1, explanation: "ଭାରତକୁ ରାଜ୍ୟଗୁଡ଼ିକର ସଂଘ ବୋଲି କୁହାଯାଇଛି।" },
      { quiz: socialQuiz1._id, questionText: "ଶିକ୍ଷାର ଅଧିକାର କଣ?", options: ["ମୌଳିକ ଅଧିକାର", "ନିର୍ଦ୍ଦେଶକ ସିଦ୍ଧାନ୍ତ", "ମୌଳିକ କର୍ତ୍ତବ୍ୟ", "ଆଇନଗତ ଅଧିକାର"], correctAnswer: 0, marks: 1, explanation: "ଶିକ୍ଷାର ଅଧିକାର ଏକ ମୌଳିକ ଅଧିକାର।" },
      { quiz: socialQuiz1._id, questionText: "ସଂବିଧାନ କେବେ ଗ୍ରହଣ କରାଯାଇଥିଲା?", options: ["1950", "1947", "1949", "1948"], correctAnswer: 2, marks: 1, explanation: "1949 ରେ ସଂବିଧାନ ଗ୍ରହଣ କରାଯାଇଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "8ମ ସୂଚୀରେ କଣ ଅଛି?", options: ["ରାଜ୍ୟ", "ଭାଷା", "ନଦୀ", "କର"], correctAnswer: 1, marks: 1, explanation: "8ମ ସୂଚୀରେ ଭାଷା ଥାଏ।" },
      { quiz: socialQuiz1._id, questionText: "ସଂବିଧାନରେ କେତେଟି ସୂଚୀ ଅଛି?", options: ["10", "11", "12", "13"], correctAnswer: 2, marks: 1, explanation: "ସଂବିଧାନରେ 12ଟି ସୂଚୀ ଅଛି।" },
      { quiz: socialQuiz1._id, questionText: "ମୌଳିକ କର୍ତ୍ତବ୍ୟ କେତେଟି?", options: ["9", "10", "11", "12"], correctAnswer: 2, marks: 1, explanation: "11ଟି ମୌଳିକ କର୍ତ୍ତବ୍ୟ ଅଛି।" },
      { quiz: socialQuiz1._id, questionText: "ନିର୍ଦ୍ଦେଶକ ସିଦ୍ଧାନ୍ତ କେଉଁ ଅଂଶରେ ଅଛି?", options: ["III", "IV", "V", "VI"], correctAnswer: 1, marks: 1, explanation: "ଅଂଶ IV ରେ ଅଛି।" },
    ]);

    // ଉପଶ୍ରେଣୀ 2: ସମ୍ପଦ ଏବଂ ବିକାଶ
    const socialQuiz2 = await Quiz.create({
      title: "ସମ୍ପଦ ଏବଂ ବିକାଶ",
      subject: "Social Studies",
      category: "ଭୂଗୋଳ",
      chapter: "ସମ୍ପଦ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz2._id, questionText: "କେଉଁଟି ଅନବୀକରଣୀୟ ସମ୍ପଦ?", options: ["ସୂର୍ଯ୍ୟ ଶକ୍ତି", "ପବନ ଶକ୍ତି", "କୋଉଲ", "ଜଳ"], correctAnswer: 2, marks: 1, explanation: "କୋଉଲ ଅନବୀକରଣୀୟ ସମ୍ପଦ।" },
      { quiz: socialQuiz2._id, questionText: "ସସ୍ଥାୟୀ ବିକାଶ କଣ?", options: ["ତୀବ୍ର ବିକାଶ", "ଭବିଷ୍ୟତ୍ ବିନା ଚିନ୍ତା", "ଭବିଷ୍ୟତ୍‌କୁ କ୍ଷତି ନକରି ବିକାଶ", "କେବଳ ଶିଳ୍ପ ବିକାଶ"], correctAnswer: 2, marks: 1, explanation: "ଭବିଷ୍ୟତ୍ ପିଢିକୁ କ୍ଷତି ନକରି ବିକାଶ କରିବା।" },
      { quiz: socialQuiz2._id, questionText: "ବାୟୁ କେଉଁ ପ୍ରକାର ସମ୍ପଦ?", options: ["ଜୀବଜ", "ଅଜୀବ", "ମାନବ ସୃଷ୍ଟ", "ସମ୍ଭାବ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ବାୟୁ ଅଜୀବ ସମ୍ପଦ।" },
      { quiz: socialQuiz2._id, questionText: "ଜମି ଅବକ୍ଷୟର ମୁଖ୍ୟ କାରଣ କଣ?", options: ["ବନସୃଷ୍ଟି", "ବନ କାଟ", "ସିଚାଇ", "ସହରୀକରଣ"], correctAnswer: 1, marks: 1, explanation: "ବନ କାଟ ଜମି ଅବକ୍ଷୟ କରେ।" },
      { quiz: socialQuiz2._id, questionText: "'କଳା ସୁନା' କାହାକୁ କୁହାଯାଏ?", options: ["କୋଉଲ", "ଲୋହା", "ପେଟ୍ରୋଲିୟମ୍", "ହୀରା"], correctAnswer: 2, marks: 1, explanation: "ପେଟ୍ରୋଲିୟମ୍‌କୁ କଳା ସୁନା କୁହାଯାଏ।" },
      { quiz: socialQuiz2._id, questionText: "ଜ୍ୱାର ଶକ୍ତି କେଉଁ ପ୍ରକାର ସମ୍ପଦ?", options: ["ଅନବୀକରଣୀୟ", "ବୀକରଣୀୟ", "ମାନବ ସୃଷ୍ଟ", "ସମ୍ଭାବ୍ୟ"], correctAnswer: 1, marks: 1, explanation: "ଜ୍ୱାର ଶକ୍ତି ବୀକରଣୀୟ ସମ୍ପଦ।" },
      { quiz: socialQuiz2._id, questionText: "ପୃଥିବୀର କେତେ ଅଂଶ ଭୂମି?", options: ["29%", "50%", "71%", "40%"], correctAnswer: 0, marks: 1, explanation: "ପୃଥିବୀର 29% ଭୂମି।" },
      { quiz: socialQuiz2._id, questionText: "ଭାରତରେ ବିଦ୍ୟୁତ୍ ଉତ୍ପାଦନରେ ସର୍ବାଧିକ ବ୍ୟବହୃତ ସମ୍ପଦ କଣ?", options: ["ସୂର୍ଯ୍ୟ", "ପବନ", "କୋଉଲ", "ପରମାଣୁ"], correctAnswer: 2, marks: 1, explanation: "କୋଉଲ ସର୍ବାଧିକ ବ୍ୟବହୃତ।" },
      { quiz: socialQuiz2._id, questionText: "ସମ୍ପଦ ସଂରକ୍ଷଣ କଣ?", options: ["ଅବିବେକୀ ବ୍ୟବହାର", "ବୁଦ୍ଧିମତାର ସହିତ ବ୍ୟବହାର", "ବ୍ୟବହାର ନକରିବା", "ରପ୍ତାନି"], correctAnswer: 1, marks: 1, explanation: "ବୁଦ୍ଧିମତାର ସହିତ ବ୍ୟବହାର କରିବା।" },
      { quiz: socialQuiz2._id, questionText: "ମାନବ ସୃଷ୍ଟ ସମ୍ପଦ କେଉଁଗୁଡ଼ିକ?", options: ["ନଦୀ", "ବନ", "ରାସ୍ତା ଏବଂ ଭବନ", "ଖଣିଜ"], correctAnswer: 2, marks: 1, explanation: "ରାସ୍ତା ଏବଂ ଭବନ ମାନବ ସୃଷ୍ଟ।" },
    ]);

    // ଉପଶ୍ରେଣୀ 3: ଭାରତରେ ବ୍ରିଟିଶ୍ ଶାସନ
    const socialQuiz3 = await Quiz.create({
      title: "ବ୍ରିଟିଶ୍ ଶାସନ ଏବଂ ସ୍ୱାଧୀନତା ଆନ୍ଦୋଳନ",
      subject: "Social Studies",
      category: "ଇତିହାସ",
      chapter: "ବ୍ରିଟିଶ୍ ଶାସନ",
      grade: 8,
      difficulty: "medium",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz3._id, questionText: "ପ୍ଲାସିର ଯୁଦ୍ଧ କେବେ ହୋଇଥିଲା?", options: ["1757", "1764", "1857", "1947"], correctAnswer: 0, marks: 1, explanation: "1757 ରେ ପ୍ଲାସିର ଯୁଦ୍ଧ ହୋଇଥିଲା।" },
      { quiz: socialQuiz3._id, questionText: "ଶେଷ ମୁଘଲ ସମ୍ରାଟ କିଏ?", options: ["ଔରଙ୍ଗଜେବ", "ଶାହ ଆଲମ", "ବାହାଦୁର ଶାହ ଜଫର", "ଆକବର II"], correctAnswer: 2, marks: 1, explanation: "ବାହାଦୁର ଶାହ ଜଫର ଶେଷ ସମ୍ରାଟ ଥିଲେ।" },
      { quiz: socialQuiz3._id, questionText: "1857ର ବିଦ୍ରୋହ କେମିତି ଜଣାଶୁଣା?", options: ["ଫ୍ରେଞ୍ଚ ବିପ୍ଳବ", "ପ୍ରଥମ ସ୍ୱାଧୀନତା ଯୁଦ୍ଧ", "ଗୃହଯୁଦ୍ଧ", "ବିଶ୍ୱଯୁଦ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "ଏହାକୁ ପ୍ରଥମ ସ୍ୱାଧୀନତା ଯୁଦ୍ଧ କୁହାଯାଏ।" },
      { quiz: socialQuiz3._id, questionText: "ସ୍ଥାୟୀ ବ୍ୟବସ୍ଥା କିଏ ଆଣିଥିଲେ?", options: ["କର୍ନୱାଲିସ୍", "ଡାଲହୌସି", "କର୍ଜନ", "ୱେଲେସ୍ଲି"], correctAnswer: 0, marks: 1, explanation: "କର୍ନୱାଲିସ୍ ସ୍ଥାୟୀ ବ୍ୟବସ୍ଥା ଆଣିଥିଲେ।" },
      { quiz: socialQuiz3._id, questionText: "ଭାରତୀୟ ଜାତୀୟ କଂଗ୍ରେସ କେବେ ସ୍ଥାପିତ ହେଲା?", options: ["1857", "1885", "1905", "1920"], correctAnswer: 1, marks: 1, explanation: "1885 ରେ କଂଗ୍ରେସ ସ୍ଥାପିତ ହେଲା।" },
      { quiz: socialQuiz3._id, questionText: "'କର କିମ୍ବା ମର' ସ୍ଲୋଗାନ୍ କିଏ ଦେଇଥିଲେ?", options: ["ସୁଭାଷ ବୋଷ", "ଭଗତ ସିଂହ", "ମହାତ୍ମା ଗାନ୍ଧୀ", "ତିଳକ"], correctAnswer: 2, marks: 1, explanation: "ମହାତ୍ମା ଗାନ୍ଧୀ ଏହି ସ୍ଲୋଗାନ୍ ଦେଇଥିଲେ।" },
      { quiz: socialQuiz3._id, questionText: "ଡକ୍ଟ୍ରିନ୍ ଅଫ୍ ଲାପ୍ସ କିଏ ଆଣିଥିଲେ?", options: ["ଡାଲହୌସି", "କର୍ନୱାଲିସ୍", "କର୍ଜନ", "ମାଉଣ୍ଟବ୍ୟାଟେନ୍"], correctAnswer: 0, marks: 1, explanation: "ଡାଲହୌସି ଏହା ଆଣିଥିଲେ।" },
      { quiz: socialQuiz3._id, questionText: "ଭାରତ କେବେ ସ୍ୱାଧୀନ ହେଲା?", options: ["1950", "1947", "1948", "1946"], correctAnswer: 1, marks: 1, explanation: "15 ଅଗଷ୍ଟ 1947 ରେ ସ୍ୱାଧୀନତା ମିଳିଲା।" },
      { quiz: socialQuiz3._id, questionText: "ସ୍ୱାଧୀନତା ସମୟରେ ଭାରତର ଭାଇସରୟ କିଏ ଥିଲେ?", options: ["କର୍ଜନ", "ଇରୱିନ୍", "ମାଉଣ୍ଟବ୍ୟାଟେନ୍", "ୱାଭେଲ୍"], correctAnswer: 2, marks: 1, explanation: "ମାଉଣ୍ଟବ୍ୟାଟେନ୍ ଶେଷ ଭାଇସରୟ ଥିଲେ।" },
      { quiz: socialQuiz3._id, questionText: "ଦାଣ୍ଡି ଯାତ୍ରା କେବେ ହୋଇଥିଲା?", options: ["1920", "1930", "1942", "1947"], correctAnswer: 1, marks: 1, explanation: "1930 ରେ ଦାଣ୍ଡି ଯାତ୍ରା ହୋଇଥିଲା।" },
    ]);

    console.log("✓ ଶ୍ରେଣୀ 8 ସାମାଜିକ ବିଜ୍ଞାନ: 3ଟି କୁଇଜ୍ ଏବଂ 30ଟି ପ୍ରଶ୍ନ ସୃଷ୍ଟି ହୋଇଛି");

  } catch (error) {
    console.error("ବିଫଳ:", error.message);
  }
};

export default seedClass8SocialStudiesOdia;
