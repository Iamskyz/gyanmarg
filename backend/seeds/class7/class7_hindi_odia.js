import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass7HindiOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Grammar - Verbs and Tenses (Odia)
    const hindiQuiz1Od = await Quiz.create({
      title: "ହିନ୍ଦୀ ବ୍ୟାକରଣ - କ୍ରିୟା ଓ କାଳ",
      subject: "Hindi",
      category: "ବ୍ୟାକରଣ",
      chapter: "କ୍ରିୟା ଓ କାଳ",
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
      { quiz: hindiQuiz1Od._id, questionText: "କ୍ରିୟା (क्रिया) କାହାକୁ କୁହାଯାଏ?", options: ["ନାମ ବତାଉଥିବା ଶବ୍ଦ", "କାମ ବତାଉଥିବା ଶବ୍ଦ", "ଗୁଣ ବତାଉଥିବା ଶବ୍ଦ", "ଯୋଡ଼ୁଥିବା ଶବ୍ଦ"], correctAnswer: 1, marks: 1, explanation: "କ୍ରିୟା ସେହି ଶବ୍ଦ ଯାହା କୌଣସି କାମ ହେବା ବା କରିବା ବତାଏ।" },
      { quiz: hindiQuiz1Od._id, questionText: "'राम खाना खा रहा है' - ଏଥିରେ କ୍ରିୟା କେଉଁଟି?", options: ["राम", "खाना", "खा रहा है", "है"], correctAnswer: 2, marks: 1, explanation: "'खा रहा है' କ୍ରିୟା କାରଣ ଏହା କାମ ବତାଉଛି।" },
      { quiz: hindiQuiz1Od._id, questionText: "ଭୂତକାଳ (भूतकाल) ର ଉଦାହରଣ କେଉଁଟି?", options: ["वह जाता है", "वह गया", "वह जाएगा", "वह जा रहा है"], correctAnswer: 1, marks: 1, explanation: "'वह गया' ଭୂତକାଳ କାରଣ କାମ ପୂର୍ବରୁ ହୋଇସାରିଛି।" },
      { quiz: hindiQuiz1Od._id, questionText: "ବର୍ତ୍ତମାନ କାଳ (वर्तमान काल) ର ପରିଚୟ କଣ?", options: ["କାମ ହୋଇସାରିଛି", "କାମ ହେଉଛି", "କାମ ହେବ", "କାମ ହୋଇନାହିଁ"], correctAnswer: 1, marks: 1, explanation: "ବର୍ତ୍ତମାନ କାଳରେ କାମ ଏବେ ହେଉଥାଏ।" },
      { quiz: hindiQuiz1Od._id, questionText: "'सीता कल स्कूल जाएगी' - ଏହା କେଉଁ କାଳ?", options: ["ଭୂତକାଳ", "ବର୍ତ୍ତମାନ କାଳ", "ଭବିଷ୍ୟତ କାଳ", "ସନ୍ଦିଗ୍ଧ କାଳ"], correctAnswer: 2, marks: 1, explanation: "'जाएगी' ଭବିଷ୍ୟତ କାଳ କାରଣ କାମ ଆଗକୁ ହେବ।" },
      { quiz: hindiQuiz1Od._id, questionText: "ସକର୍ମକ କ୍ରିୟା (सकर्मक क्रिया) କାହାକୁ କୁହାଯାଏ?", options: ["ଯେଉଁଥିରେ କର୍ମ ଥାଏ", "ଯେଉଁଥିରେ କର୍ମ ନଥାଏ", "ଯେଉଁଥିରେ କର୍ତ୍ତା ନଥାଏ", "ଯେଉଁଥିରେ କାଳ ନଥାଏ"], correctAnswer: 0, marks: 1, explanation: "ସକର୍ମକ କ୍ରିୟାରେ କର୍ମ (object) ଥାଏ। ଯେମିତି: 'राम फल खाता है'।" },
      { quiz: hindiQuiz1Od._id, questionText: "'हँसना' କେଉଁ ପ୍ରକାର କ୍ରିୟା?", options: ["ସକର୍ମକ", "ଅକର୍ମକ", "ପ୍ରେରଣାର୍ଥକ", "ସଂଯୁକ୍ତ"], correctAnswer: 1, marks: 1, explanation: "'हँसना' ଅକର୍ମକ କ୍ରିୟା କାରଣ ଏଥିରେ କର୍ମ ଆବଶ୍ୟକ ନାହିଁ।" },
      { quiz: hindiQuiz1Od._id, questionText: "କାଳ (काल) କେତେ ପ୍ରକାର?", options: ["ଦୁଇ", "ତିନି", "ଚାରି", "ପାଞ୍ଚ"], correctAnswer: 1, marks: 1, explanation: "କାଳ ତିନି ପ୍ରକାର - ଭୂତକାଳ, ବର୍ତ୍ତମାନ କାଳ, ଭବିଷ୍ୟତ କାଳ।" },
      { quiz: hindiQuiz1Od._id, questionText: "'पढ़ाना' କେଉଁ ପ୍ରକାର କ୍ରିୟା?", options: ["ସକର୍ମକ", "ଅକର୍ମକ", "ପ୍ରେରଣାର୍ଥକ", "ସାଧାରଣ"], correctAnswer: 2, marks: 1, explanation: "'पढ़ाना' ପ୍ରେରଣାର୍ଥକ କ୍ରିୟା (पढ़ना ରୁ पढ़ाना - ଅନ୍ୟକୁ କାମ କରାଇବା)।" },
      { quiz: hindiQuiz1Od._id, questionText: "'वह रोज सुबह दौड़ता है' - ଏହା କେଉଁ କାଳ?", options: ["ସାଧାରଣ ବର୍ତ୍ତମାନ", "ଅପୂର୍ଣ୍ଣ ଭୂତ", "ସାଧାରଣ ଭବିଷ୍ୟତ", "ପୂର୍ଣ୍ଣ ବର୍ତ୍ତମାନ"], correctAnswer: 0, marks: 1, explanation: "ଏହା ସାଧାରଣ ବର୍ତ୍ତମାନ କାଳ କାରଣ ଏହା ନିୟମିତ କ୍ରିୟା ବତାଉଛି।" },
    ]);

    // Subcategory 2: Literature (Odia)
    const hindiQuiz2Od = await Quiz.create({
      title: "ହିନ୍ଦୀ ସାହିତ୍ୟ - କବିତା ଓ ଗଦ୍ୟ",
      subject: "Hindi",
      category: "ସାହିତ୍ୟ",
      chapter: "କାବ୍ୟ ଓ ଗଦ୍ୟ",
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
      { quiz: hindiQuiz2Od._id, questionText: "ଅଳଙ୍କାର (अलंकार) ର ଅର୍ଥ କଣ?", options: ["କବିତାର ନାମ", "ଭାଷାର ସୌନ୍ଦର୍ଯ୍ୟ ବଢ଼ାଉଥିବା ତତ୍ତ୍ୱ", "କାହାଣୀର ପ୍ରକାର", "ବ୍ୟାକରଣ ନିୟମ"], correctAnswer: 1, marks: 1, explanation: "ଅଳଙ୍କାର ଭାଷାର ଶୋଭା ବଢ଼ାଉଥିବା ତତ୍ତ୍ୱ।" },
      { quiz: hindiQuiz2Od._id, questionText: "'ଉପମା' (उपमा) ଅଳଙ୍କାରରେ କଣ ହୁଏ?", options: ["ଅତିଶୟୋକ୍ତି", "ଦୁଇ ଜିନିଷର ତୁଳନା", "ଶବ୍ଦ ପୁନରାବୃତ୍ତି", "ବିରୋଧାଭାସ"], correctAnswer: 1, marks: 1, explanation: "ଉପମା ଅଳଙ୍କାରରେ 'ସା', 'ସୀ', 'ଯେମିତି' ଆଦି ଦ୍ୱାରା ଦୁଇ ଜିନିଷ ତୁଳନା ହୁଏ।" },
      { quiz: hindiQuiz2Od._id, questionText: "'चरण कमल बंदौ हरि राई' ରେ କେଉଁ ଅଳଙ୍କାର?", options: ["ଉପମା", "ରୂପକ", "ଅନୁପ୍ରାସ", "ଯମକ"], correctAnswer: 1, marks: 1, explanation: "ଏଠାରେ ଚରଣକୁ କମଳ କୁହାଯାଇଛି ('ଯେମିତି' ବିନା), ତେଣୁ ରୂପକ ଅଳଙ୍କାର।" },
      { quiz: hindiQuiz2Od._id, questionText: "ରସ (रस) କେତେ ପ୍ରକାର?", options: ["7", "8", "9", "10"], correctAnswer: 2, marks: 1, explanation: "ହିନ୍ଦୀ ସାହିତ୍ୟରେ 9ଟି ରସ ମାନ୍ୟ - ଶୃଙ୍ଗାର, ହାସ୍ୟ, କରୁଣ, ରୌଦ୍ର, ବୀର, ଭୟାନକ, ବୀଭତ୍ସ, ଅଦ୍ଭୁତ, ଶାନ୍ତ।" },
      { quiz: hindiQuiz2Od._id, questionText: "ହାସ୍ୟ ରସର ସ୍ଥାୟୀ ଭାବ କଣ?", options: ["କ୍ରୋଧ", "ହାସ", "ଶୋକ", "ଭୟ"], correctAnswer: 1, marks: 1, explanation: "ହାସ୍ୟ ରସର ସ୍ଥାୟୀ ଭାବ 'ହାସ' (ହସ)।" },
      { quiz: hindiQuiz2Od._id, questionText: "'କାହାଣୀ' ଓ 'ଉପନ୍ୟାସ' ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ କଣ?", options: ["କୌଣସି ପାର୍ଥକ୍ୟ ନାହିଁ", "କାହାଣୀ ଛୋଟ, ଉପନ୍ୟାସ ବଡ଼", "ଉପନ୍ୟାସ ଛୋଟ", "ଦୁଇଟି କବିତା"], correctAnswer: 1, marks: 1, explanation: "କାହାଣୀ ଛୋଟ ଓ ଗୋଟିଏ ଘଟଣା ଉପରେ, ଉପନ୍ୟାସ ଲମ୍ବା ଓ ବିସ୍ତୃତ।" },
      { quiz: hindiQuiz2Od._id, questionText: "'ଅନୁପ୍ରାସ' (अनुप्रास) ଅଳଙ୍କାରର ପରିଚୟ କଣ?", options: ["ଅର୍ଥ ପୁନରାବୃତ୍ତି", "ବର୍ଣ୍ଣ ପୁନରାବୃତ୍ତି", "ତୁଳନା", "ବିରୋଧ"], correctAnswer: 1, marks: 1, explanation: "ଅନୁପ୍ରାସ ଅଳଙ୍କାରରେ ଗୋଟିଏ ବର୍ଣ୍ଣ ବାରମ୍ବାର ଆସେ। ଯେମିତି: 'चारु चंद्र की चंचल किरणें'।" },
      { quiz: hindiQuiz2Od._id, questionText: "କବୀର କେଉଁ କାଳର କବି ଥିଲେ?", options: ["ଆଦିକାଳ", "ଭକ୍ତିକାଳ", "ରୀତିକାଳ", "ଆଧୁନିକ କାଳ"], correctAnswer: 1, marks: 1, explanation: "କବୀର ଭକ୍ତିକାଳର ପ୍ରସିଦ୍ଧ ସନ୍ତ କବି ଥିଲେ।" },
      { quiz: hindiQuiz2Od._id, questionText: "'ଦୋହା' (दोहा) ଛନ୍ଦରେ କେତୋଟି ଚରଣ ଥାଏ?", options: ["ଦୁଇ", "ଚାରି", "ଛଅ", "ଆଠ"], correctAnswer: 1, marks: 1, explanation: "ଦୋହା ଛନ୍ଦରେ ଚାରୋଟି ଚରଣ ଥାଏ - ଦୁଇ ଧାଡ଼ିରେ।" },
      { quiz: hindiQuiz2Od._id, questionText: "ବୀର ରସର ସ୍ଥାୟୀ ଭାବ କଣ?", options: ["ହାସ", "ଉତ୍ସାହ", "ଭୟ", "ଶୋକ"], correctAnswer: 1, marks: 1, explanation: "ବୀର ରସର ସ୍ଥାୟୀ ଭାବ 'ଉତ୍ସାହ'।" },
    ]);

    // Subcategory 3: Writing (Odia)
    const hindiQuiz3Od = await Quiz.create({
      title: "ହିନ୍ଦୀ ଲେଖନ - ପ୍ରବନ୍ଧ ଓ ପତ୍ର",
      subject: "Hindi",
      category: "ଲେଖନ",
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
      { quiz: hindiQuiz3Od._id, questionText: "ପ୍ରବନ୍ଧ (निबंध) ର କେତୋଟି ଭାଗ ଥାଏ?", options: ["ଦୁଇ", "ତିନି", "ଚାରି", "ପାଞ୍ଚ"], correctAnswer: 1, marks: 1, explanation: "ପ୍ରବନ୍ଧର ତିନୋଟି ଭାଗ - ଭୂମିକା, ବିଷୟ-ବିସ୍ତାର, ଉପସଂହାର।" },
      { quiz: hindiQuiz3Od._id, questionText: "ଅନୌପଚାରିକ ପତ୍ର କାହାକୁ ଲେଖାଯାଏ?", options: ["ଅଧିକାରୀଙ୍କୁ", "ମିତ୍ର ବା ପରିବାରକୁ", "ପ୍ରଧାନଶିକ୍ଷକଙ୍କୁ", "ସମ୍ପାଦକଙ୍କୁ"], correctAnswer: 1, marks: 1, explanation: "ଅନୌପଚାରିକ ପତ୍ର ମିତ୍ର, ପରିବାର ବା ନିକଟ ଲୋକଙ୍କୁ ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3Od._id, questionText: "ଔପଚାରିକ ପତ୍ରରେ 'ବିଷୟ' କାହିଁକି ଲେଖାଯାଏ?", options: ["ସୌନ୍ଦର୍ଯ୍ୟ ପାଇଁ", "ପତ୍ରର ଉଦ୍ଦେଶ୍ୟ ସ୍ପଷ୍ଟ କରିବା ପାଇଁ", "ନିୟମ ନାହିଁ", "ଶବ୍ଦ ବଢ଼ାଇବା ପାଇଁ"], correctAnswer: 1, marks: 1, explanation: "ବିଷୟ ଲେଖିଲେ ପତ୍ରର ଉଦ୍ଦେଶ୍ୟ ତୁରନ୍ତ ସ୍ପଷ୍ଟ ହୋଇଯାଏ।" },
      { quiz: hindiQuiz3Od._id, questionText: "ସଂବାଦ ଲେଖନ (संवाद लेखन) ରେ କଣ ଆବଶ୍ୟକ?", options: ["କେବଳ ଜଣଙ୍କ କଥା", "ଦୁଇ ବା ଅଧିକ ବ୍ୟକ୍ତିଙ୍କ କଥୋପକଥନ", "କେବଳ ପ୍ରଶ୍ନ", "କେବଳ ଉତ୍ତର"], correctAnswer: 1, marks: 1, explanation: "ସଂବାଦ ଲେଖନରେ ଦୁଇ ବା ଅଧିକ ବ୍ୟକ୍ତିଙ୍କ ମଧ୍ୟରେ କଥୋପକଥନ ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3Od._id, questionText: "ସାରାଂଶ ଲେଖନ (सारांश लेखन) ରେ କଣ କରିବା ଉଚିତ?", options: ["ବିସ୍ତାରରେ ଲେଖିବା", "ମୁଖ୍ୟ କଥା ସଂକ୍ଷେପରେ ଲେଖିବା", "ନୂତନ କଥା ଯୋଡ଼ିବା", "ନିଜ ମତ ଦେବା"], correctAnswer: 1, marks: 1, explanation: "ସାରାଂଶରେ ମୂଳ ପାଠ୍ୟର ମୁଖ୍ୟ କଥା ସଂକ୍ଷେପରେ ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3Od._id, questionText: "ବିଜ୍ଞାପନ ଲେଖନ (विज्ञापन लेखन) ରେ ସବୁଠାରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କଣ?", options: ["ଲମ୍ବା ହେବା", "ଆକର୍ଷଣୀୟ ଓ ସଂକ୍ଷିପ୍ତ ହେବା", "କଠିନ ଭାଷା", "କେବଳ ଚିତ୍ର"], correctAnswer: 1, marks: 1, explanation: "ବିଜ୍ଞାପନ ଆକର୍ଷଣୀୟ ଓ ସଂକ୍ଷିପ୍ତ ହେବା ଉଚିତ ଯାହା ଲୋକଙ୍କ ଧ୍ୟାନ ଆକର୍ଷଣ କରେ।" },
      { quiz: hindiQuiz3Od._id, questionText: "ପତ୍ରର ଶେଷରେ କଣ ଲେଖାଯାଏ?", options: ["ତାରିଖ", "ବିଷୟ", "ଆପଣଙ୍କ ଆଜ୍ଞାକାରୀ/ଶୁଭଚିନ୍ତକ", "ପ୍ରିୟ ମିତ୍ର"], correctAnswer: 2, marks: 1, explanation: "ପତ୍ର ଶେଷରେ 'ଆପଣଙ୍କ ଆଜ୍ଞାକାରୀ' (ଔପଚାରିକ) ବା 'ତୁମର ମିତ୍ର' (ଅନୌପଚାରିକ) ଲେଖାଯାଏ।" },
      { quiz: hindiQuiz3Od._id, questionText: "ଅନୁଚ୍ଛେଦ ଲେଖନ (अनुच्छेद लेखन) ରେ କେତୋଟି ଅନୁଚ୍ଛେଦ ଥିବା ଉଚିତ?", options: ["ଗୋଟିଏ", "ଦୁଇ", "ତିନି", "କୌଣସି ସୀମା ନାହିଁ"], correctAnswer: 0, marks: 1, explanation: "ଅନୁଚ୍ଛେଦ ଲେଖନରେ କେବଳ ଗୋଟିଏ ଅନୁଚ୍ଛେଦରେ ସମ୍ପୂର୍ଣ୍ଣ କଥା ଲେଖିବାକୁ ହୁଏ।" },
      { quiz: hindiQuiz3Od._id, questionText: "କାହାଣୀ ଲେଖନରେ ସବୁ ପ୍ରଥମେ କଣ ଠିକ୍ କରିବା ଉଚିତ?", options: ["ଶେଷ", "ଶୀର୍ଷକ ଓ କଥାନକ", "ପାତ୍ରମାନଙ୍କ ନାମ", "ଶବ୍ଦ ସଂଖ୍ୟା"], correctAnswer: 1, marks: 1, explanation: "କାହାଣୀ ଲେଖିବା ପୂର୍ବରୁ ଶୀର୍ଷକ ଓ କଥାନକ (plot) ଠିକ୍ କରିବା ଉଚିତ।" },
      { quiz: hindiQuiz3Od._id, questionText: "ସୂଚନା ଲେଖନ (सूचना लेखन) ରେ କଣ ଥିବା ଉଚିତ?", options: ["କେବଳ ନାମ", "କଣ, କେବେ, କେଉଁଠି, କିଏ ର ସୂଚନା", "କେବଳ ତାରିଖ", "କେବଳ ସ୍ଥାନ"], correctAnswer: 1, marks: 1, explanation: "ସୂଚନାରେ କଣ, କେବେ, କେଉଁଠି, କିଏ - ଏସବୁ ସୂଚନା ସ୍ପଷ୍ଟ ଥିବା ଉଚିତ।" },
    ]);

    console.log("✓ Class 7 - Hindi (Odia): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass7HindiOdia;
