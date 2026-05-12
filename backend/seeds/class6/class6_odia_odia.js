import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6OdiaOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Basic Grammar (Odia)
    const odiaQuiz1Od = await Quiz.create({
      title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ - ଅକ୍ଷର ଓ ଶବ୍ଦ",
      subject: "Odia",
      category: "ବ୍ୟାକରଣ",
      chapter: "ମୌଳିକ ବ୍ୟାକରଣ",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz1Od._id, questionText: "ଓଡ଼ିଆ ବର୍ଣ୍ଣମାଳାରେ କେତୋଟି ଅକ୍ଷର ଅଛି?", options: ["୪୫", "୪୭", "୪୯", "୫୧"], correctAnswer: 1, marks: 1, explanation: "ଓଡ଼ିଆ ବର୍ଣ୍ଣମାଳାରେ ସ୍ୱର ଓ ବ୍ୟଞ୍ଜନ ମିଶାଇ ୪୭ଟି ଅକ୍ଷର ଅଛି।" },
      { quiz: odiaQuiz1Od._id, questionText: "ଓଡ଼ିଆରେ ନାମ ପଦକୁ କଣ କୁହାଯାଏ?", options: ["କ୍ରିୟା", "ବିଶେଷଣ", "ନାମ ପଦ", "ଅବ୍ୟୟ"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆ ବ୍ୟାକରଣରେ ନାମ ପଦକୁ 'ନାମ ପଦ' କୁହାଯାଏ।" },
      { quiz: odiaQuiz1Od._id, questionText: "ଓଡ଼ିଆର ପ୍ରଥମ ସ୍ୱର କେଉଁଟି?", options: ["ଆ", "ଅ", "ଇ", "ଈ"], correctAnswer: 1, marks: 1, explanation: "'ଅ' ହେଉଛି ଓଡ଼ିଆ ବର୍ଣ୍ଣମାଳାର ପ୍ରଥମ ସ୍ୱର।" },
      { quiz: odiaQuiz1Od._id, questionText: "'ପୁସ୍ତକ'ର ଅର୍ଥ କଣ?", options: ["କଲମ", "ବହି", "କାଗଜ", "ପାଠ"], correctAnswer: 1, marks: 1, explanation: "'ପୁସ୍ତକ'ର ଅର୍ଥ ହେଉଛି ବହି।" },
      { quiz: odiaQuiz1Od._id, questionText: "'ପାଣି'ର ଅର୍ଥ କଣ?", options: ["ଅଗ୍ନି", "ଜଳ", "ବାୟୁ", "ମାଟି"], correctAnswer: 1, marks: 1, explanation: "'ପାଣି'ର ଅର୍ଥ ହେଉଛି ଜଳ।" },
      { quiz: odiaQuiz1Od._id, questionText: "'ଛୁଆ'ର ବହୁବଚନ କଣ?", options: ["ଛୁଆମାନେ", "ଛୁଆ", "ଝିଅ", "ଝିଅମାନେ"], correctAnswer: 0, marks: 1, explanation: "'ଛୁଆ'ର ବହୁବଚନ ହେଉଛି 'ଛୁଆମାନେ'।" },
      { quiz: odiaQuiz1Od._id, questionText: "'କ୍ଷ' କେଉଁ ଦୁଇଟି ଅକ୍ଷରର ମିଶ୍ରଣ?", options: ["କ + ଷ", "କ + ଶ", "ଖ + ଷ", "କ + ସ"], correctAnswer: 0, marks: 1, explanation: "'କ୍ଷ' ହେଉଛି 'କ' ଓ 'ଷ'ର ମିଶ୍ରଣ।" },
      { quiz: odiaQuiz1Od._id, questionText: "'ମା'ର ଅର୍ଥ କଣ?", options: ["ବାପା", "ମାତା", "ଭଉଣୀ", "ଭାଇ"], correctAnswer: 1, marks: 1, explanation: "'ମା'ର ଅର୍ଥ ହେଉଛି ମାତା।" },
      { quiz: odiaQuiz1Od._id, questionText: "ଓଡ଼ିଆରେ କେତୋଟି ସ୍ୱର ଅଛି?", options: ["୧୦", "୧୧", "୧୨", "୧୩"], correctAnswer: 2, marks: 1, explanation: "ଓଡ଼ିଆ ବର୍ଣ୍ଣମାଳାରେ ୧୨ଟି ସ୍ୱର ଅଛି।" },
      { quiz: odiaQuiz1Od._id, questionText: "'ପାଠଶାଳା'ର ଅର୍ଥ କଣ?", options: ["ଘର", "ବିଦ୍ୟାଳୟ", "ବଜାର", "ମନ୍ଦିର"], correctAnswer: 1, marks: 1, explanation: "'ପାଠଶାଳା'ର ଅର୍ଥ ହେଉଛି ବିଦ୍ୟାଳୟ।" },
    ]);

    // Subcategory 2: Literature (Odia)
    const odiaQuiz2Od = await Quiz.create({
      title: "ଓଡ଼ିଆ ସାହିତ୍ୟ - ଗଳ୍ପ ଓ କବିତା",
      subject: "Odia",
      category: "ସାହିତ୍ୟ",
      chapter: "ଗଦ୍ୟ ଓ ପଦ୍ୟ",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz2Od._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟର ଜନକ କାହାକୁ କୁହାଯାଏ?", options: ["ସରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ଫକୀର ମୋହନ ସେନାପତି", "ରାଧାନାଥ ରାୟ"], correctAnswer: 2, marks: 1, explanation: "ଫକୀର ମୋହନ ସେନାପତିଙ୍କୁ ଆଧୁନିକ ଓଡ଼ିଆ ସାହିତ୍ୟର ଜନକ କୁହାଯାଏ।" },
      { quiz: odiaQuiz2Od._id, questionText: "'ଛଅ ମାଣ ଆଠ ଗୁଣ୍ଠ' କଣ ବିଷୟରେ?", options: ["ପ୍ରେମ କାହାଣୀ", "ଗ୍ରାମୀଣ ଜୀବନ ଓ ଜମି ସମସ୍ୟା", "ଐତିହାସିକ ଘଟଣା", "ଧାର୍ମିକ ବିଷୟ"], correctAnswer: 1, marks: 1, explanation: "ଫକୀର ମୋହନ ସେନାପତିଙ୍କ 'ଛଅ ମାଣ ଆଠ ଗୁଣ୍ଠ' ଗ୍ରାମୀଣ ଜୀବନ ଓ ଜମି ସମସ୍ୟା ନେଇ ଲେଖାଯାଇଛି।" },
      { quiz: odiaQuiz2Od._id, questionText: "ଓଡ଼ିଆ ରାମାୟଣ କିଏ ଲେଖିଛନ୍ତି?", options: ["ସରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ବଳରାମ ଦାସ", "ଅଚ୍ୟୁତାନନ୍ଦ ଦାସ"], correctAnswer: 1, marks: 1, explanation: "ଜଗନ୍ନାଥ ଦାସ ପ୍ରସିଦ୍ଧ ଓଡ଼ିଆ ରାମାୟଣ ଲେଖିଛନ୍ତି।" },
      { quiz: odiaQuiz2Od._id, questionText: "ଓଡ଼ିଆ କବିତାରେ 'ଜନନା' କଣ?", options: ["ଏକ ପ୍ରକାର ଗୀତ", "ଲୋକକଥା", "ଭକ୍ତିମୂଳକ କବିତା", "ନୃତ୍ୟ ଶୈଳୀ"], correctAnswer: 2, marks: 1, explanation: "ଜନନା ହେଉଛି ଓଡ଼ିଆ ସାହିତ୍ୟରେ ଏକ ପ୍ରକାର ଭକ୍ତିମୂଳକ କବିତା।" },
      { quiz: odiaQuiz2Od._id, questionText: "କେଉଁ ପର୍ବରେ ଓଡ଼ିଆ ଲୋକଗୀତ ଗାଯାଏ?", options: ["ଦୀପାବଳୀ", "ହୋଳି", "ରଜ", "ଦଶହରା"], correctAnswer: 2, marks: 1, explanation: "ରଜ ପର୍ବରେ ବିଶେଷ ଓଡ଼ିଆ ଲୋକଗୀତ ଓ ନୃତ୍ୟ ହୋଇଥାଏ।" },
      { quiz: odiaQuiz2Od._id, questionText: "ଓଡ଼ିଆ ସଂସ୍କୃତିରେ 'ପାଳା' କଣ?", options: ["ସଙ୍ଗୀତ ପ୍ରଦର୍ଶନ", "ଏକ ପ୍ରକାର ଖାଦ୍ୟ", "ପର୍ବ", "ନୃତ୍ୟ"], correctAnswer: 0, marks: 1, explanation: "ପାଳା ହେଉଛି ଓଡ଼ିଆ ସଂସ୍କୃତିର ଏକ ପାରମ୍ପରିକ ସଙ୍ଗୀତ ପ୍ରଦର୍ଶନ।" },
      { quiz: odiaQuiz2Od._id, questionText: "ଓଡ଼ିଆ 'ମହାଭାରତ'ର ଲେଖକ କିଏ?", options: ["ସରଳା ଦାସ", "ଜଗନ୍ନାଥ ଦାସ", "ବଳରାମ ଦାସ", "ଯଶୋଧରା ଦାସ"], correctAnswer: 0, marks: 1, explanation: "ସରଳା ଦାସ ଓଡ଼ିଆ ମହାଭାରତ ଲେଖିଛନ୍ତି।" },
      { quiz: odiaQuiz2Od._id, questionText: "ଓଡ଼ିଆ ସାହିତ୍ୟରେ 'ଭଜନ'ର ଅର୍ଥ କଣ?", options: ["କାହାଣୀ", "ଭକ୍ତିମୂଳକ ଗୀତ", "ନାଟକ", "ପ୍ରବନ୍ଧ"], correctAnswer: 1, marks: 1, explanation: "ଭଜନର ଅର୍ଥ ହେଉଛି ଭକ୍ତିମୂଳକ ଗୀତ।" },
      { quiz: odiaQuiz2Od._id, questionText: "ଓଡ଼ିଆରେ ଶିଶୁ ସାହିତ୍ୟ ପାଇଁ କେଉଁ କବି ପ୍ରସିଦ୍ଧ?", options: ["କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ", "ଗୋପବନ୍ଧୁ ଦାସ", "ରାଧାନାଥ ରାୟ", "ଗଙ୍ଗାଧର ମେହେର"], correctAnswer: 0, marks: 1, explanation: "କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ ଶିଶୁ ସାହିତ୍ୟ ପାଇଁ ପ୍ରସିଦ୍ଧ।" },
      { quiz: odiaQuiz2Od._id, questionText: "ଓଡ଼ିଆ କବିତାରେ 'ଛନ୍ଦ' କଣ?", options: ["ମୁକ୍ତ ଛନ୍ଦ", "ତୁକ ବିନ୍ୟାସ", "କାହାଣୀ କହିବା", "ଚରିତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ଛନ୍ଦ ହେଉଛି ଓଡ଼ିଆ କବିତାର ତୁକ ବିନ୍ୟାସ ବା ମାତ୍ରା।" },
    ]);

    // Subcategory 3: Writing (Odia)
    const odiaQuiz3Od = await Quiz.create({
      title: "ଓଡ଼ିଆ ଲେଖନ - ପତ୍ର ଓ ପ୍ରବନ୍ଧ",
      subject: "Odia",
      category: "ଲେଖନ",
      chapter: "ସୃଜନଶୀଳ ଲେଖନ",
      grade: 6,
      difficulty: "easy",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 15,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz3Od._id, questionText: "ଓଡ଼ିଆରେ 'ପତ୍ର' କଣ?", options: ["କାହାଣୀ", "ଚିଠି", "କବିତା", "ଗୀତ"], correctAnswer: 1, marks: 1, explanation: "'ପତ୍ର' ର ଅର୍ଥ ହେଉଛି ଚିଠି।" },
      { quiz: odiaQuiz3Od._id, questionText: "ଓଡ଼ିଆରେ 'ପ୍ରବନ୍ଧ' କଣ?", options: ["ଚିଠି", "ରଚନା", "କାହାଣୀ", "ନାଟକ"], correctAnswer: 1, marks: 1, explanation: "'ପ୍ରବନ୍ଧ' ର ଅର୍ଥ ହେଉଛି ରଚନା (Essay)।" },
      { quiz: odiaQuiz3Od._id, questionText: "ଔପଚାରିକ ଓଡ଼ିଆ ପତ୍ରରେ ପ୍ରଥମେ କଣ ଲେଖିବା ଉଚିତ?", options: ["ମୁଖ୍ୟ ଅଂଶ", "ଅଭିବାଦନ", "ତାରିଖ ଓ ଠିକଣା", "ହସ୍ତାକ୍ଷର"], correctAnswer: 2, marks: 1, explanation: "ଔପଚାରିକ ଓଡ଼ିଆ ପତ୍ରରେ ପ୍ରଥମେ ତାରିଖ ଓ ଠିକଣା ଲେଖିବା ଉଚିତ।" },
      { quiz: odiaQuiz3Od._id, questionText: "ଓଡ଼ିଆରେ 'ପୂର୍ଣ୍ଣ ବିରାମ' କଣ?", options: ["କମା", "ପ୍ରଶ୍ନ ଚିହ୍ନ", "ବାକ୍ୟ ଶେଷ ଚିହ୍ନ", "ବିସ୍ମୟସୂଚକ ଚିହ୍ନ"], correctAnswer: 2, marks: 1, explanation: "'ପୂର୍ଣ୍ଣ ବିରାମ' ହେଉଛି ବାକ୍ୟ ଶେଷ ଚିହ୍ନ (।)।" },
      { quiz: odiaQuiz3Od._id, questionText: "ଓଡ଼ିଆ ପୂର୍ଣ୍ଣ ବିରାମ ଚିହ୍ନ କେଉଁଟି?", options: [".", "।", "?", "!"], correctAnswer: 1, marks: 1, explanation: "ଓଡ଼ିଆ ପୂର୍ଣ୍ଣ ବିରାମ ଚିହ୍ନ ହେଉଛି '।'।" },
      { quiz: odiaQuiz3Od._id, questionText: "ଓଡ଼ିଆ ଲେଖନରେ 'ଅନୁଚ୍ଛେଦ' କଣ?", options: ["ଗୋଟିଏ ଶବ୍ଦ", "ଗୋଟିଏ ବାକ୍ୟ", "ଗୋଟିଏ ଅନୁଚ୍ଛେଦ (Paragraph)", "ଗୋଟିଏ ଅଧ୍ୟାୟ"], correctAnswer: 2, marks: 1, explanation: "'ଅନୁଚ୍ଛେଦ' ହେଉଛି ଗୋଟିଏ ବିଷୟ ନେଇ ଲେଖା ବାକ୍ୟଗୁଡ଼ିକର ସମୂହ।" },
      { quiz: odiaQuiz3Od._id, questionText: "ଭଲ ଓଡ଼ିଆ ପ୍ରବନ୍ଧ କିପରି ଶେଷ ହେବା ଉଚିତ?", options: ["ହଠାତ୍ ବନ୍ଦ କରିବା", "ଉଚିତ ନିଷ୍କର୍ଷ ସହିତ", "ପ୍ରଶ୍ନ ସହିତ", "ନୂତନ ବିଷୟ ସହିତ"], correctAnswer: 1, marks: 1, explanation: "ଭଲ ପ୍ରବନ୍ଧ ଉଚିତ ନିଷ୍କର୍ଷ ସହିତ ଶେଷ ହେବା ଉଚିତ ଯାହା ମୁଖ୍ୟ କଥାକୁ ସାରାଂଶିତ କରେ।" },
      { quiz: odiaQuiz3Od._id, questionText: "ଓଡ଼ିଆରେ 'ବାକ୍ୟ' କଣ?", options: ["ଶବ୍ଦ", "ଅକ୍ଷର", "ପୂର୍ଣ୍ଣ ଅର୍ଥ ଥିବା ଶବ୍ଦ ସମୂହ", "ଅନୁଚ୍ଛେଦ"], correctAnswer: 2, marks: 1, explanation: "'ବାକ୍ୟ' ହେଉଛି ପୂର୍ଣ୍ଣ ଅର୍ଥ ଥିବା ଶବ୍ଦ ସମୂହ।" },
      { quiz: odiaQuiz3Od._id, questionText: "ଓଡ଼ିଆ ଲେଖାକୁ ସ୍ପଷ୍ଟ ଓ ପ୍ରଭାବଶାଳୀ କରିବା ପାଇଁ କଣ ଦରକାର?", options: ["ବହୁତ ଲମ୍ବା ବାକ୍ୟ ବ୍ୟବହାର", "ସରଳ ଓ ସ୍ପଷ୍ଟ ଭାଷା", "କଠିନ ଶବ୍ଦ ବ୍ୟବହାର", "ଚିହ୍ନ ବ୍ୟବହାର ନ କରିବା"], correctAnswer: 1, marks: 1, explanation: "ସରଳ ଓ ସ୍ପଷ୍ଟ ଭାଷା ଓଡ଼ିଆ ଲେଖାକୁ ପ୍ରଭାବଶାଳୀ ଓ ସହଜ ବୁଝିବା ଯୋଗ୍ୟ କରେ।" },
      { quiz: odiaQuiz3Od._id, questionText: "ପତ୍ରରେ 'ସମ୍ବୋଧନ' କଣ?", options: ["ସମାପନ", "ମୁଖ୍ୟ ଅଂଶ", "ଅଭିବାଦନ", "ହସ୍ତାକ୍ଷର"], correctAnswer: 2, marks: 1, explanation: "'ସମ୍ବୋଧନ' ହେଉଛି ପତ୍ରରେ ଅଭିବାଦନ ବା ସମ୍ବୋଧନ।" },
    ]);

    console.log("✓ Class 6 - Odia (Odia): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6OdiaOdia;
