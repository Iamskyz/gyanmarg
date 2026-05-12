import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6HindiOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Hindi - Subcategory 1: Grammar (Odia)
    const hindiQuiz1Od = await Quiz.create({
      title: "ହିନ୍ଦୀ ବ୍ୟାକରଣ - ସଂଜ୍ଞା ଓ ସର୍ବନାମ",
      subject: "Hindi",
      category: "ବ୍ୟାକରଣ",
      chapter: "ଶବ୍ଦ ଭେଦ",
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
      {
        quiz: hindiQuiz1Od._id,
        questionText: "ସଂଜ୍ଞା (संज्ञा) କାହାକୁ କୁହାଯାଏ?",
        options: ["କାମର ନାମକୁ", "ବ୍ୟକ୍ତି, ବସ୍ତୁ, ସ୍ଥାନର ନାମକୁ", "ଗୁଣର ନାମକୁ", "କ୍ରିୟାର ନାମକୁ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ସଂଜ୍ଞା କୌଣସି ବ୍ୟକ୍ତି, ବସ୍ତୁ, ସ୍ଥାନ ବା ଭାବର ନାମକୁ କୁହାଯାଏ।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ବ୍ୟକ୍ତିବାଚକ ସଂଜ୍ଞା (व्यक्तिवाचक संज्ञा)?",
        options: ["लड़का (ଛୁଆ)", "शहर (ସହର)", "दिल्ली (ଦିଲ୍ଲୀ)", "किताब (ବହି)"],
        correctAnswer: 2,
        marks: 1,
        explanation: "दिल्ली (ଦିଲ୍ଲୀ) ଏକ ବ୍ୟକ୍ତିବାଚକ ସଂଜ୍ଞା କାରଣ ଏହା କୌଣସି ବିଶେଷ ସ୍ଥାନର ନାମ।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "'बच्चा' (ଶିଶୁ) ର ବହୁବଚନ କଣ?",
        options: ["बच्चे (ଶିଶୁମାନେ)", "बच्चों (ଶିଶୁମାନଙ୍କୁ)", "बच्चा (ଶିଶୁ)", "बच्चियाँ (ଝିଅମାନେ)"],
        correctAnswer: 0,
        marks: 1,
        explanation: "'बच्चा' ର ବହୁବଚନ ହେଉଛି 'बच्चे'।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "ସର୍ବନାମ (सर्वनाम) ର କାମ କଣ?",
        options: ["ସଂଜ୍ଞାର ସ୍ଥାନରେ ଆସିବା", "କ୍ରିୟା ବତାଇବା", "ଗୁଣ ବତାଇବା", "ସମୟ ବତାଇବା"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ସର୍ବନାମ ସଂଜ୍ଞାର ସ୍ଥାନରେ ଆସେ ଏବଂ ସଂଜ୍ଞାର ପୁନରାବୃତ୍ତିରୁ ବଞ୍ଚାଏ।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ସର୍ବନାମ?",
        options: ["राम (ରାମ)", "अच्छा (ଭଲ)", "वह (ସେ)", "दौड़ना (ଦୌଡ଼ିବା)"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'वह' (ସେ) ଏକ ସର୍ବନାମ ଯାହା କୌଣସି ବ୍ୟକ୍ତି ବା ବସ୍ତୁ ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "'खुशी' (ଖୁସି) କେଉଁ ପ୍ରକାରର ସଂଜ୍ଞା?",
        options: ["जातिवाचक (ଜାତିବାଚକ)", "व्यक्तिवाचक (ବ୍ୟକ୍ତିବାଚକ)", "भाववाचक (ଭାବବାଚକ)", "समूहवाचक (ସମୂହବାଚକ)"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'खुशी' ଏକ ଭାବବାଚକ ସଂଜ୍ଞା କାରଣ ଏହା ଏକ ଭାବନାର ନାମ।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "'लड़की' (ଝିଅ) ର ବହୁବଚନ କଣ?",
        options: ["लड़कियाँ (ଝିଅମାନେ)", "लड़कियों (ଝିଅମାନଙ୍କୁ)", "लड़की (ଝିଅ)", "लड़के (ଛୁଆମାନେ)"],
        correctAnswer: 0,
        marks: 1,
        explanation: "'लड़की' ର ବହୁବଚନ ହେଉଛି 'लड़कियाँ'।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ସମୂହବାଚକ ସଂଜ୍ଞା?",
        options: ["फूल (ଫୁଲ)", "माला (ମାଳା)", "पेड़ (ଗଛ)", "पत्ता (ପତ୍ର)"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'माला' ସମୂହବାଚକ ସଂଜ୍ଞା କାରଣ ଏହା ଫୁଲମାନଙ୍କର ସମୂହକୁ ଦର୍ଶାଏ।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "'मैं' (ମୁଁ) କେଉଁ ସର୍ବନାମ?",
        options: ["उत्तम पुरुष (ଉତ୍ତମ ପୁରୁଷ)", "मध्यम पुरुष (ମଧ୍ୟମ ପୁରୁଷ)", "अन्य पुरुष (ଅନ୍ୟ ପୁରୁଷ)", "निश्चयवाचक (ନିଶ୍ଚୟବାଚକ)"],
        correctAnswer: 0,
        marks: 1,
        explanation: "'मैं' ଉତ୍ତମ ପୁରୁଷ ସର୍ବନାମ ଯାହା କହୁଥିବା ବ୍ୟକ୍ତି ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।",
      },
      {
        quiz: hindiQuiz1Od._id,
        questionText: "'पानी' (ପାଣି) ର ବହୁବଚନ କଣ?",
        options: ["पानियाँ (ପାଣିମାନେ)", "पानी (ପାଣି)", "जल (ଜଳ)", "पानियों (ପାଣିମାନଙ୍କୁ)"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'पानी' ର ବହୁବଚନ ମଧ୍ୟ 'पानी' ହିଁ ହୋଇଥାଏ, ଏହା ଅପରିବର୍ତ୍ତନୀୟ।",
      },
    ]);

    // Hindi - Subcategory 2: Literature (Odia)
    const hindiQuiz2Od = await Quiz.create({
      title: "ହିନ୍ଦୀ ସାହିତ୍ୟ - କାହାଣୀ ଓ କବିତା",
      subject: "Hindi",
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
      {
        quiz: hindiQuiz2Od._id,
        questionText: "କାହାଣୀର ମୁଖ୍ୟ ତତ୍ତ୍ୱ କେଉଁଗୁଡ଼ିକ?",
        options: ["କେବଳ ପାତ୍ର", "ପାତ୍ର, କଥାନକ, ସଂବାଦ", "କେବଳ ସଂବାଦ", "କେବଳ କଥାନକ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "କାହାଣୀର ମୁଖ୍ୟ ତତ୍ତ୍ୱ ହେଉଛି - ପାତ୍ର, କଥାନକ, ସଂବାଦ, ଦେଶକାଳ ଓ ଭାଷା।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "କବିତାରେ ତୁକବନ୍ଦୀର ମହତ୍ତ୍ୱ କଣ?",
        options: ["କୌଣସି ମହତ୍ତ୍ୱ ନାହିଁ", "ସୌନ୍ଦର୍ଯ୍ୟ ଓ ଲୟ ବଢ଼ାଏ", "କେବଳ ଶବ୍ଦ ବଢ଼ାଏ", "ବୁଝିବା କଠିନ କରେ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ତୁକବନ୍ଦୀ କବିତାରେ ସୌନ୍ଦର୍ଯ୍ୟ ଓ ଲୟ ବଢ଼ାଏ, ଯାହା ଦ୍ୱାରା କବିତା ମଧୁର ଲାଗେ।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "ଗଦ୍ୟ (गद्य) କାହାକୁ କୁହାଯାଏ?",
        options: ["ତୁକବନ୍ଦୀ ଥିବା ଭାଷା", "ତୁକବନ୍ଦୀ ବିନା ସାଧାରଣ ଭାଷା", "କେବଳ କବିତା", "କେବଳ ନାଟକ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଗଦ୍ୟ ହେଉଛି ତୁକବନ୍ଦୀ ବିନା ସାଧାରଣ ଭାଷା ଯେଉଁଥିରେ କାହାଣୀ, ପ୍ରବନ୍ଧ ଆଦି ଲେଖାଯାଏ।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "କବିତାର ଧାଡ଼ିକୁ କଣ କୁହାଯାଏ?",
        options: ["ବାକ୍ୟ", "ଧାଡ଼ି", "ଚରଣ", "ଶବ୍ଦ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "କବିତାର ଧାଡ଼ିକୁ 'ଚରଣ' (चरण) କୁହାଯାଏ।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "କାହାଣୀର ମୁଖ୍ୟ ପାତ୍ରକୁ କଣ କୁହାଯାଏ?",
        options: ["ନାୟକ ବା ନାୟିକା", "ସହାୟକ ପାତ୍ର", "ଖଳନାୟକ", "ଦର୍ଶକ"],
        correctAnswer: 0,
        marks: 1,
        explanation: "କାହାଣୀର ମୁଖ୍ୟ ପାତ୍ରକୁ ନାୟକ ବା ନାୟିକା (नायक या नायिका) କୁହାଯାଏ।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "ଛନ୍ଦ (छंद) କାହାକୁ କୁହାଯାଏ?",
        options: ["ଗଦ୍ୟକୁ", "ନିୟମବଦ୍ଧ କବିତାକୁ", "କାହାଣୀକୁ", "ନାଟକକୁ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଛନ୍ଦ ନିୟମବଦ୍ଧ କବିତାକୁ କୁହାଯାଏ ଯେଉଁଥିରେ ମାତ୍ରା ଓ ତୁକର ନିୟମ ଥାଏ।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "କାହାଣୀରେ ଘଟଣାଗୁଡ଼ିକର କ୍ରಮକୁ କଣ କୁହାଯାଏ?",
        options: ["ପାତ୍ର", "କଥାନକ", "ସଂବାଦ", "ଶୀର୍ଷକ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "କାହାଣୀରେ ଘଟଣାଗୁଡ଼ିକର କ୍ରମକୁ କଥାନକ (कथानक) କୁହାଯାଏ।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "ଦୋହା (दोहा) ରେ କେତୋଟି ଧାଡ଼ି ଥାଏ?",
        options: ["ଗୋଟିଏ", "ଦୁଇଟି", "ତିନୋଟି", "ଚାରୋଟି"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଦୋହାରେ ଦୁଇଟି ଧାଡ଼ି ଥାଏ ଏବଂ ଏହା ଏକ ପ୍ରସିଦ୍ଧ ଛନ୍ଦ।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "କବିତାରେ ଭାବ ପ୍ରକାଶ ପାଇଁ କଣ ବ୍ୟବହୃତ ହୁଏ?",
        options: ["କେବଳ ଶବ୍ଦ", "ଅଳଙ୍କାର ଓ ବିମ୍ବ", "କେବଳ ତୁକ", "କେବଳ ଛନ୍ଦ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "କବିତାରେ ଭାବ ପ୍ରକାଶ ପାଇଁ ଅଳଙ୍କାର (अलंकार) ଓ ବିମ୍ବ (बिंब) ବ୍ୟବହୃତ ହୁଏ।",
      },
      {
        quiz: hindiQuiz2Od._id,
        questionText: "ମୁହାବରା (मुहावरा) ର ଅର୍ଥ କଣ?",
        options: ["ସାଧାରଣ ବାକ୍ୟ", "ବିଶେଷ ଅର୍ଥ ଥିବା ବାକ୍ୟାଂଶ", "କେବଳ ଶବ୍ଦ", "ପ୍ରଶ୍ନ ବାକ୍ୟ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ମୁହାବରା ହେଉଛି ବିଶେଷ ଅର୍ଥ ଥିବା ବାକ୍ୟାଂଶ ଯାହାର ଅର୍ଥ ଶବ୍ଦର ସାଧାରଣ ଅର୍ଥଠାରୁ ଭିନ୍ନ।",
      },
    ]);

    // Hindi - Subcategory 3: Writing Skills (Odia)
    const hindiQuiz3Od = await Quiz.create({
      title: "ହିନ୍ଦୀ ଲେଖନ - ପତ୍ର ଓ ପ୍ରବନ୍ଧ",
      subject: "Hindi",
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
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ପତ୍ରର ମୁଖ୍ୟ ଅଂଶ କେଉଁଗୁଡ଼ିକ?",
        options: ["କେବଳ ସମ୍ବୋଧନ", "ତାରିଖ, ସମ୍ବୋଧନ, ବିଷୟ, ମୁଖ୍ୟ ଅଂଶ, ସମାପନ", "କେବଳ ହସ୍ତାକ୍ଷର", "କେବଳ ଠିକଣା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପତ୍ରର ମୁଖ୍ୟ ଅଂଶ ହେଉଛି - ତାରିଖ, ସମ୍ବୋଧନ, ବିଷୟ, ମୁଖ୍ୟ ଅଂଶ ଓ ସମାପନ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ଔପଚାରିକ ପତ୍ରରେ କାହାର ପ୍ରୟୋଗ ହୁଏ?",
        options: ["ଆପ (आप)", "ତୁମ (तुम)", "ତୂ (तू)", "ଯେ କୌଣସି"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ଔପଚାରିକ ପତ୍ରରେ ସମ୍ମାନଜନକ 'ଆପ' (आप) ର ପ୍ରୟୋଗ ହୁଏ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ପ୍ରବନ୍ଧ (निबंध) ର ଆରମ୍ଭ କିପରି କରିବା ଉଚିତ?",
        options: ["ଶେଷରୁ", "ରୋଚକ ପ୍ରସ୍ତାବନାରୁ", "ନିଷ୍କର୍ଷରୁ", "ମଧ୍ୟରୁ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରବନ୍ଧର ଆରମ୍ଭ ରୋଚକ ପ୍ରସ୍ତାବନାରୁ କରିବା ଉଚିତ ଯାହା ପାଠକର ଧ୍ୟାନ ଆକର୍ଷଣ କରେ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ବାକ୍ୟରେ ସର୍ବନିମ୍ନ କଣ ଥିବା ଉଚିତ?",
        options: ["କେବଳ ସଂଜ୍ଞା", "ସଂଜ୍ଞା ଓ କ୍ରିୟା", "କେବଳ କ୍ରିୟା", "କେବଳ ବିଶେଷଣ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ବାକ୍ୟରେ ସର୍ବନିମ୍ନ ସଂଜ୍ଞା (କର୍ତ୍ତା) ଓ କ୍ରିୟା ଥିବା ଉଚିତ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ଅନୁଚ୍ଛେଦ (अनुच्छेद) ରେ କଣ ଥିବା ଉଚିତ?",
        options: ["ଗୋଟିଏ ବିଷୟର ବାକ୍ୟ", "ଅଲଗା ଅଲଗା ବିଷୟ", "କେବଳ ଗୋଟିଏ ବାକ୍ୟ", "କୌଣସି ନିୟମ ନାହିଁ"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ଅନୁଚ୍ଛେଦରେ ଗୋଟିଏ ବିଷୟ ସହିତ ସମ୍ବନ୍ଧିତ ବାକ୍ୟ ଥିବା ଉଚିତ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ବିରାମ ଚିହ୍ନ (विराम चिह्न) ର ପ୍ରୟୋଗ କାହିଁକି କରାଯାଏ?",
        options: ["ସୌନ୍ଦର୍ଯ୍ୟ ପାଇଁ", "ବାକ୍ୟକୁ ସ୍ପଷ୍ଟ କରିବା ପାଇଁ", "ଶବ୍ଦ ବଢ଼ାଇବା ପାଇଁ", "କୌଣସି କାରଣ ନାହିଁ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ବିରାମ ଚିହ୍ନର ପ୍ରୟୋଗ ବାକ୍ୟକୁ ସ୍ପଷ୍ଟ କରିବା ଓ ଅର୍ଥ ବୁଝାଇବା ପାଇଁ କରାଯାଏ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ପ୍ରଶ୍ନବାଚକ ବାକ୍ୟର ଶେଷରେ କେଉଁ ଚିହ୍ନ ବସେ?",
        options: ["ପୂର୍ଣ୍ଣ ବିରାମ (.)", "ପ୍ରଶ୍ନ ଚିହ୍ନ (?)", "ବିସ୍ମୟସୂଚକ (!)", "ଅଲ୍ପ ବିରାମ (,)"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରଶ୍ନବାଚକ ବାକ୍ୟର ଶେଷରେ ପ୍ରଶ୍ନ ଚିହ୍ନ (?) ବସେ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ଭଲ ଲେଖନ ପାଇଁ କଣ ଆବଶ୍ୟକ?",
        options: ["କେବଳ ବଡ଼ ଶବ୍ଦ", "ସ୍ପଷ୍ଟତା ଓ ସରଳତା", "କେବଳ କଠିନ ଭାଷା", "କେବଳ ଲମ୍ବା ବାକ୍ୟ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଭଲ ଲେଖନ ପାଇଁ ସ୍ପଷ୍ଟତା ଓ ସରଳତା ଆବଶ୍ୟକ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ପତ୍ରରେ ତାରିଖ କେଉଁଠାରେ ଲେଖାଯାଏ?",
        options: ["ଶେଷରେ", "ମଧ୍ୟରେ", "ଆରମ୍ଭରେ", "ଯେ କୌଣସି ସ୍ଥାନରେ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପତ୍ରରେ ତାରିଖ ଆରମ୍ଭରେ, ସବୁଠାରୁ ଉପରେ ଡାହାଣ ପାର୍ଶ୍ୱରେ ଲେଖାଯାଏ।",
      },
      {
        quiz: hindiQuiz3Od._id,
        questionText: "ପ୍ରବନ୍ଧର ସମାପନ କିପରି କରିବା ଉଚିତ?",
        options: ["ହଠାତ୍ ବନ୍ଦ କରିବା", "ଉଚିତ ନିଷ୍କର୍ଷ ସହିତ", "ନୂତନ ବିଷୟ ଆରମ୍ଭ କରିବା", "ପ୍ରଶ୍ନ ପଚାରିବା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରବନ୍ଧର ସମାପନ ଉଚିତ ନିଷ୍କର୍ଷ ସହିତ କରିବା ଉଚିତ ଯାହା ମୁଖ୍ୟ କଥାକୁ ସାରାଂଶିତ କରେ।",
      },
    ]);

    console.log("✓ Class 6 - Hindi (Odia): 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6HindiOdia;
