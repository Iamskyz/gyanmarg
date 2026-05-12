import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7SocialStudiesOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // History
    const socialQuiz1 = await Quiz.create({
      title: "ମଧ୍ୟଯୁଗୀନ ଭାରତ - ଶାସକ ଓ ରାଜ୍ୟ",
      subject: "Social Studies",
      category: "History",
      chapter: "ମଧ୍ୟଯୁଗ",
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
      { quiz: socialQuiz1._id, questionText: "ଭାରତରେ ମୁଘଲ ସାମ୍ରାଜ୍ୟ କିଏ ସ୍ଥାପନ କଲେ?", options: ["ଆକବର","ବାବର","ହୁମାୟୁନ","ଶାହଜାହାନ"], correctAnswer: 1, marks: 1, explanation: "ବାବର ମୁଘଲ ସାମ୍ରାଜ୍ୟ ସ୍ଥାପନ କରିଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "ତାଜମହଲ କିଏ ନିର୍ମାଣ କଲେ?", options: ["ଆକବର","ଜହାଙ୍ଗୀର","ଶାହଜାହାନ","ଔରଙ୍ଗଜେବ"], correctAnswer: 2, marks: 1, explanation: "ଶାହଜାହାନ ତାଜମହଲ ନିର୍ମାଣ କରିଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "ଚୋଳ ବଂଶର ପ୍ରସିଦ୍ଧ ଶାସକ କିଏ?", options: ["ଅଶୋକ","ରାଜେନ୍ଦ୍ର ଚୋଳ","ଚନ୍ଦ୍ରଗୁପ୍ତ","ହର୍ଷ"], correctAnswer: 1, marks: 1, explanation: "ରାଜେନ୍ଦ୍ର ଚୋଳ ପ୍ରସିଦ୍ଧ ଶାସକ ଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "ବିଜୟନଗର ସାମ୍ରାଜ୍ୟର ରାଜଧାନୀ କଣ ଥିଲା?", options: ["ଦିଲ୍ଲୀ","ହମ୍ପି","ଆଗ୍ରା","ପାଟଲିପୁତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ହମ୍ପି ବିଜୟନଗର ସାମ୍ରାଜ୍ୟର ରାଜଧାନୀ ଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "'ଦିନ-ଇ-ଇଲାହି' କିଏ ଆରମ୍ଭ କଲେ?", options: ["ବାବର","ଆକବର","ଔରଙ୍ଗଜେବ","ହୁମାୟୁନ"], correctAnswer: 1, marks: 1, explanation: "ଆକବର ଦିନ-ଇ-ଇଲାହି ଆରମ୍ଭ କରିଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "1526ର ପାଣିପଥ ଯୁଦ୍ଧ କାହା ମଧ୍ୟରେ ହୋଇଥିଲା?", options: ["ବାବର ଓ ଇବ୍ରାହିମ ଲୋଦି","ଆକବର ଓ ହେମୁ","ହୁମାୟୁନ ଓ ଶେରଶାହ","ଔରଙ୍ଗଜେବ ଓ ଦାରା"], correctAnswer: 0, marks: 1, explanation: "ପାଣିପଥର ପ୍ରଥମ ଯୁଦ୍ଧ ବାବର ଓ ଇବ୍ରାହିମ ଲୋଦି ମଧ୍ୟରେ ହୋଇଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "ଆକବରଙ୍କ ଦରବାରୀ କବି କିଏ ଥିଲେ?", options: ["ତୁଳସୀଦାସ","କବୀର","ଅବୁଲ ଫଜଲ","ବୀରବଳ"], correctAnswer: 2, marks: 1, explanation: "ଅବୁଲ ଫଜଲ ଆକବରଙ୍କ ଦରବାରୀ ଇତିହାସକାର ଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "ଭୂମି କର ପାଇଁ ଆକବର କେଉଁ ପଦ୍ଧତି ଆରମ୍ଭ କଲେ?", options: ["ଜମିନ୍ଦାରୀ","ମନସବଦାରୀ","ତୋଦରମଲ ପଦ୍ଧତି","ଜାଗୀରଦାରୀ"], correctAnswer: 2, marks: 1, explanation: "ତୋଦରମଲଙ୍କ ପଦ୍ଧତି ଭୂମି କର ପାଇଁ ବ୍ୟବହୃତ ହେଉଥିଲା।" },
      { quiz: socialQuiz1._id, questionText: "ମରାଠା ସାମ୍ରାଜ୍ୟର ସ୍ଥାପକ କିଏ?", options: ["ଶିବାଜୀ","ବାଜୀରାଓ","ସମ୍ଭାଜୀ","ବାଳାଜୀ"], correctAnswer: 0, marks: 1, explanation: "ଶିବାଜୀ ମରାଠା ସାମ୍ରାଜ୍ୟର ସ୍ଥାପକ ଥିଲେ।" },
      { quiz: socialQuiz1._id, questionText: "ମୁଘଲ ଶାସନକାଳରେ କେଉଁ ଭାଷା ପ୍ରଶାସନିକ ଭାଷା ଥିଲା?", options: ["ହିନ୍ଦୀ","ସଂସ୍କୃତ","ପର୍ସିଆନ","ଉର୍ଦ୍ଦୁ"], correctAnswer: 2, marks: 1, explanation: "ପର୍ସିଆନ ଭାଷା ପ୍ରଶାସନିକ ଭାଷା ଥିଲା।" }
    ]);

    // Geography
    const socialQuiz2 = await Quiz.create({
      title: "ପରିବେଶ ଓ ପ୍ରାକୃତିକ ସମ୍ପଦ",
      subject: "Social Studies",
      category: "Geography",
      chapter: "ପ୍ରାକୃତିକ ସମ୍ପଦ",
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
      { quiz: socialQuiz2._id, questionText: "କେଉଁ ସ୍ତର UV କିରଣରୁ ସୁରକ୍ଷା କରେ?", options: ["ଟ୍ରୋପୋସ୍ଫିୟର","ଷ୍ଟ୍ରାଟୋସ୍ଫିୟର","ମେସୋସ୍ଫିୟର","ଓଜୋନ ସ୍ତର"], correctAnswer: 3, marks: 1, explanation: "ଓଜୋନ ସ୍ତର UV କିରଣରୁ ସୁରକ୍ଷା କରେ।" },
      { quiz: socialQuiz2._id, questionText: "ଗ୍ଲୋବାଲ ୱାର୍ମିଂର ମୁଖ୍ୟ କାରଣ କଣ?", options: ["ବନନାଶ","ଗ୍ରିନହାଉସ ଗ୍ୟାସ","ଆଗ୍ନେୟଗିରି","ସମୁଦ୍ର ସ୍ରୋତ"], correctAnswer: 1, marks: 1, explanation: "ଗ୍ରିନହାଉସ ଗ୍ୟାସ ଉତ୍ତାପକୁ ଧରି ରଖେ।" },
      { quiz: socialQuiz2._id, questionText: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ପୁନର୍ନବୀକରଣଯୋଗ୍ୟ ସମ୍ପଦ?", options: ["କୋଏଲା","ପେଟ୍ରୋଲିଅମ","ସୌର ଶକ୍ତି","ପ୍ରାକୃତିକ ଗ୍ୟାସ"], correctAnswer: 2, marks: 1, explanation: "ସୌର ଶକ୍ତି ପୁନର୍ନବୀକରଣଯୋଗ୍ୟ।" },
      { quiz: socialQuiz2._id, questionText: "ପୃଥିବୀର ଜଳର କେତେ ଶତଂଶ ମିଠା ପାଣି?", options: ["ପ୍ରାୟ 3%","25%","50%","70%"], correctAnswer: 0, marks: 1, explanation: "ପୃଥିବୀର କେବଳ 3% ମିଠା ପାଣି।" },
      { quiz: socialQuiz2._id, questionText: "କପାସ ଚାଷ ପାଇଁ କେଉଁ ମାଟି ଭଲ?", options: ["ଆଲୁଭିଆଲ","କଳା ମାଟି","ଲାଲ ମାଟି","ଲାଟେରାଇଟ"], correctAnswer: 1, marks: 1, explanation: "କଳା ମାଟି କପାସ ପାଇଁ ଭଲ।" },
      { quiz: socialQuiz2._id, questionText: "ବନନାଶ କାହାକୁ କୁହାଯାଏ?", options: ["ଗଛ ଲଗାଇବା","ଜଙ୍ଗଲ କାଟିବା","ଫସଲ ଚାଷ","ବନ୍ଧ ନିର୍ମାଣ"], correctAnswer: 1, marks: 1, explanation: "ଜଙ୍ଗଲକୁ ବ୍ୟାପକ ଭାବେ କାଟିବାକୁ ବନନାଶ କୁହାଯାଏ।" },
      { quiz: socialQuiz2._id, questionText: "ଗ୍ରିନହାଉସ ପ୍ରଭାବ ପାଇଁ ସର୍ବାଧିକ ଦାୟୀ ଗ୍ୟାସ କଣ?", options: ["ଅକ୍ସିଜେନ","ନାଇଟ୍ରୋଜେନ","କାର୍ବନ ଡାଇଅକ୍ସାଇଡ","ହାଇଡ୍ରୋଜେନ"], correctAnswer: 2, marks: 1, explanation: "କାର୍ବନ ଡାଇଅକ୍ସାଇଡ ମୁଖ୍ୟ ଗ୍ରିନହାଉସ ଗ୍ୟାସ।" },
      { quiz: socialQuiz2._id, questionText: "ଜଳ ଚକ୍ର କଣ?", options: ["ନଦୀରେ ପାଣି ବହିବା","ପୃଥିବୀ ଓ ବାୟୁମଣ୍ଡଳ ମଧ୍ୟରେ ଜଳର ଚଳଚଳନ","ବର୍ଷା ପଡ଼ିବା","ବନ୍ଧରେ ପାଣି ସଂରକ୍ଷଣ"], correctAnswer: 1, marks: 1, explanation: "ଜଳ ଚକ୍ର ହେଉଛି ଜଳର ନିରନ୍ତର ଚଳଚଳନ।" },
      { quiz: socialQuiz2._id, questionText: "ଟେକ୍ଟୋନିକ ପ୍ଲେଟ ସରିବାରୁ କେଉଁ ପ୍ରାକୃତିକ ବିପଦ ହୁଏ?", options: ["ବନ୍ୟା","ଘୂର୍ଣ୍ଣିବାତ୍ୟା","ଭୂମିକମ୍ପ","ଖରା"], correctAnswer: 2, marks: 1, explanation: "ଟେକ୍ଟୋନିକ ପ୍ଲେଟ ସରିଲେ ଭୂମିକମ୍ପ ହୁଏ।" },
      { quiz: socialQuiz2._id, questionText: "ଜୈବ ବିବିଧତା କାହାକୁ କୁହାଯାଏ?", options: ["କେବଳ ପଶୁ","ବିଭିନ୍ନ ପ୍ରକାର ଜୀବ","କେବଳ ଉଦ୍ଭିଦ","ସମୁଦ୍ର ଜୀବ"], correctAnswer: 1, marks: 1, explanation: "ଜୈବ ବିବିଧତା ଅର୍ଥ ବିଭିନ୍ନ ପ୍ରକାର ଜୀବ।" }
    ]);

    // Civics
    const socialQuiz3 = await Quiz.create({
      title: "ଗଣତନ୍ତ୍ର ଓ ସମାନତା",
      subject: "Social Studies",
      category: "Civics",
      chapter: "ଗଣତନ୍ତ୍ର",
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
      { quiz: socialQuiz3._id, questionText: "ଗଣତନ୍ତ୍ରରେ ସମାନତାର ଅର୍ଥ କଣ?", options: ["ସମାନ ଦରମା","ସମାନ ଅଧିକାର","ସମାନ କାମ","ସମାନ ଘର"], correctAnswer: 1, marks: 1, explanation: "ସମସ୍ତଙ୍କୁ ସମାନ ଅଧିକାର ମିଳେ।" },
      { quiz: socialQuiz3._id, questionText: "ଲୋକସଭା ସଦସ୍ୟ ହେବାର ନ୍ୟୁନତମ ବୟସ କେତେ?", options: ["18","21","25","30"], correctAnswer: 2, marks: 1, explanation: "ଲୋକସଭା ସଦସ୍ୟ ପାଇଁ 25 ବର୍ଷ ବୟସ ଆବଶ୍ୟକ।" },
      { quiz: socialQuiz3._id, questionText: "ସାର୍ବଜନୀନ ପ୍ରାପ୍ତବୟସ୍କ ମତାଧିକାର କାହାକୁ କୁହାଯାଏ?", options: ["ଧନୀମାନେ ଭୋଟ","ଶିକ୍ଷିତମାନେ ଭୋଟ","18 ବର୍ଷ ଉର୍ଦ୍ଧ୍ୱ ସମସ୍ତେ ଭୋଟ","କେବଳ ପୁରୁଷମାନେ"], correctAnswer: 2, marks: 1, explanation: "18 ବର୍ଷ ଉର୍ଦ୍ଧ୍ୱ ସମସ୍ତଙ୍କର ଭୋଟ ଅଧିକାର ଅଛି।" },
      { quiz: socialQuiz3._id, questionText: "ଅସ୍ପୃଶ୍ୟତା ନିଷେଧ କେଉଁ ଅନୁଚ୍ଛେଦରେ ଅଛି?", options: ["14","15","17","21"], correctAnswer: 2, marks: 1, explanation: "ଅନୁଚ୍ଛେଦ 17 ଅସ୍ପୃଶ୍ୟତାକୁ ନିଷେଧ କରେ।" },
      { quiz: socialQuiz3._id, questionText: "ଗଣତନ୍ତ୍ରରେ ନ୍ୟାୟପାଳିକାର କାମ କଣ?", options: ["ଆଇନ ତିଆରି","ଆଇନ ଲାଗୁ","ଆଇନ ବ୍ୟାଖ୍ୟା ଓ ନ୍ୟାୟ","କର ସଂଗ୍ରହ"], correctAnswer: 2, marks: 1, explanation: "ନ୍ୟାୟପାଳିକା ଆଇନ ବ୍ୟାଖ୍ୟା କରେ ଓ ନ୍ୟାୟ ଦେଇଥାଏ।" },
      { quiz: socialQuiz3._id, questionText: "ମୌଳିକ ଅଧିକାର କଣ?", options: ["ମାତାପିତାଙ୍କ ଅଧିକାର","ସମ୍ବିଧାନ ପ୍ରଦତ୍ତ ଅଧିକାର","ଧନ ଅର୍ଜନ","ଶିକ୍ଷକଙ୍କ ଅଧିକାର"], correctAnswer: 1, marks: 1, explanation: "ମୌଳିକ ଅଧିକାର ସମ୍ବିଧାନ ଦ୍ୱାରା ଦିଆଯାଇଛି।" },
      { quiz: socialQuiz3._id, questionText: "ଭାରତୀୟ ସମ୍ବିଧାନରେ କେତୋଟି ମୌଳିକ ଅଧିକାର ଅଛି?", options: ["4","5","6","7"], correctAnswer: 2, marks: 1, explanation: "ଭାରତୀୟ ସମ୍ବିଧାନରେ 6ଟି ମୌଳିକ ଅଧିକାର ଅଛି।" },
      { quiz: socialQuiz3._id, questionText: "'ଧର୍ମନିରପେକ୍ଷ' ର ଅର୍ଥ କଣ?", options: ["ଧର୍ମ ବିରୋଧୀ","ରାଜ୍ୟର କୌଣସି ଅଧିକୃତ ଧର୍ମ ନାହିଁ","ଗୋଟିଏ ଧର୍ମ","ପର୍ବ ନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "ରାଜ୍ୟ ସମସ୍ତ ଧର୍ମକୁ ସମାନ ଭାବେ ଦେଖେ।" },
      { quiz: socialQuiz3._id, questionText: "ଭାରତୀୟ ସମ୍ବିଧାନର ଜନକ କିଏ?", options: ["ମହାତ୍ମା ଗାନ୍ଧୀ","ଜବାହରଲାଲ ନେହେରୁ","ଡ଼. ବି.ଆର. ଆମ୍ବେଦକର","ସର୍ଦାର ପଟେଲ"], correctAnswer: 2, marks: 1, explanation: "ଡ଼. ବି.ଆର. ଆମ୍ବେଦକର ସମ୍ବିଧାନର ଜନକ।" },
      { quiz: socialQuiz3._id, questionText: "RTI ର ପୂର୍ଣ୍ଣ ରୂପ କଣ?", options: ["ସୂଚନାର ଅଧିକାର","ଆୟର ଅଧିକାର","ଇଣ୍ଟରନେଟ ଅଧିକାର","ସ୍ୱାଧୀନତା ଅଧିକାର"], correctAnswer: 0, marks: 1, explanation: "RTI ର ଅର୍ଥ ସୂଚନାର ଅଧିକାର।" }
    ]);

    console.log("✓ Class 7 - Social Studies (Odia): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7SocialStudiesOdia;
