import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6ScienceOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Science - Subcategory 1: Plants and Animals (Odia)
    const scienceQuiz1Od = await Quiz.create({
      title: "ଉଦ୍ଭିଦ ଓ ପ୍ରାଣୀ ଆମ ଚାରିପାଖରେ",
      subject: "Science",
      category: "ଜୀବବିଜ୍ଞାନ",
      chapter: "ଜୀବଜନ୍ତୁ",
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
        quiz: scienceQuiz1Od._id,
        questionText: "ଉଦ୍ଭିଦର କେଉଁ ଅଂଶ ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରେ?",
        options: ["ମୂଳ", "କାଣ୍ଡ", "ପତ୍ର", "ଫୁଲ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପତ୍ର ସୂର୍ଯ୍ୟ ଆଲୋକ ବ୍ୟବହାର କରି ଫଟୋସିନ୍ଥେସିସ୍ ଦ୍ୱାରା ଉଦ୍ଭିଦ ପାଇଁ ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରେ।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "ଉଦ୍ଭିଦ ନିଜର ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରିବା ପାଇଁ କଣ ଦରକାର?",
        options: ["କେବଳ ସୂର୍ଯ୍ୟ ଆଲୋକ ଓ ପାଣି", "ସୂର୍ଯ୍ୟ ଆଲୋକ, ପାଣି ଓ କାର୍ବନ ଡାଇଅକ୍ସାଇଡ", "କେବଳ ପାଣି", "କେବଳ ସୂର୍ଯ୍ୟ ଆଲୋକ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଉଦ୍ଭିଦ ଫଟୋସିନ୍ଥେସିସ୍ ଦ୍ୱାରା ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରିବା ପାଇଁ ସୂର୍ଯ୍ୟ ଆଲୋକ, ପାଣି ଓ କାର୍ବନ ଡାଇଅକ୍ସାଇଡ ଦରକାର।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "କେଉଁ ପ୍ରାଣୀମାନଙ୍କୁ ଶାକାହାରୀ କୁହାଯାଏ?",
        options: ["ମାଂସ ଖାଉଥିବା ପ୍ରାଣୀ", "ଉଦ୍ଭିଦ ଖାଉଥିବା ପ୍ରାଣୀ", "ଦୁଇଟି ଖାଉଥିବା ପ୍ରାଣୀ", "କିଛି ନ ଖାଉଥିବା ପ୍ରାଣୀ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଶାକାହାରୀ ପ୍ରାଣୀମାନେ କେବଳ ଉଦ୍ଭିଦ ଖାଆନ୍ତି, ଯେମିତି ଗାଈ, ଛେଳି ଓ ଖରଗୋଶ।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "ମୂଳର ମୁଖ୍ୟ କାମ କଣ?",
        options: ["ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରିବା", "ପାଣି ଓ ଖଣିଜ ପଦାର୍ଥ ଶୋଷଣ କରିବା", "ଫୁଲ ଉତ୍ପାଦନ କରିବା", "କେବଳ ସହାରା ଦେବା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ମୂଳ ମାଟିରୁ ପାଣି ଓ ଖଣିଜ ପଦାର୍ଥ ଶୋଷଣ କରେ ଏବଂ ଉଦ୍ଭିଦକୁ ସହାରା ମଧ୍ୟ ଦିଏ।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ମାଂସାହାରୀ?",
        options: ["ଗାଈ", "ଛେଳି", "ସିଂହ", "ହରିଣ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସିଂହ ଏକ ମାଂସାହାରୀ ପ୍ରାଣୀ କାରଣ ଏହା କେବଳ ମାଂସ (ଅନ୍ୟ ପ୍ରାଣୀ) ଖାଏ।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "ଯେଉଁ ପ୍ରାଣୀମାନେ ଉଦ୍ଭିଦ ଓ ମାଂସ ଦୁଇଟି ଖାଆନ୍ତି ସେମାନଙ୍କୁ କଣ କୁହାଯାଏ?",
        options: ["ଶାକାହାରୀ", "ମାଂସାହାରୀ", "ସର୍ବଭକ୍ଷୀ", "କୀଟଭକ୍ଷୀ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସର୍ବଭକ୍ଷୀ ପ୍ରାଣୀମାନେ ଉଦ୍ଭିଦ ଓ ମାଂସ ଦୁଇଟି ଖାଆନ୍ତି। ମଣିଷ ସର୍ବଭକ୍ଷୀ।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "ଉଦ୍ଭିଦର କେଉଁ ଅଂଶ କୀଟପତଙ୍ଗଙ୍କୁ ଆକର୍ଷିତ କରେ?",
        options: ["ମୂଳ", "କାଣ୍ଡ", "ପତ୍ର", "ଫୁଲ"],
        correctAnswer: 3,
        marks: 1,
        explanation: "ଫୁଲ ନିଜର ଉଜ୍ଜ୍ୱଳ ରଙ୍ଗ ଓ ମିଠା ମକରନ୍ଦ ଦ୍ୱାରା କୀଟପତଙ୍ଗଙ୍କୁ ଆକର୍ଷିତ କରେ।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "ପତ୍ରରେ ଥିବା ସବୁଜ ପଦାର୍ଥକୁ କଣ କୁହାଯାଏ?",
        options: ["କ୍ଲୋରିନ", "କ୍ଲୋରୋଫିଲ", "କାର୍ବନ", "ଅକ୍ସିଜେନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "କ୍ଲୋରୋଫିଲ ହେଉଛି ପତ୍ରରେ ଥିବା ସବୁଜ ପଦାର୍ଥ ଯାହା ଖାଦ୍ୟ ପ୍ରସ୍ତୁତିରେ ସାହାଯ୍ୟ କରେ।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "କେଉଁ ପ୍ରାଣୀମାନେ ସ୍ଥଳ ଓ ଜଳ ଦୁଇଠାରେ ବାସ କରନ୍ତି?",
        options: ["ମାଛ", "ପକ୍ଷୀ", "ଉଭଚର", "ସ୍ତନ୍ୟପାୟୀ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଉଭଚର ପ୍ରାଣୀମାନେ ଯେମିତି ବେଙ୍ଗ ସ୍ଥଳ ଓ ଜଳ ଦୁଇଠାରେ ବାସ କରିପାରନ୍ତି।",
      },
      {
        quiz: scienceQuiz1Od._id,
        questionText: "ଫଟୋସିନ୍ଥେସିସ୍ ସମୟରେ ଉଦ୍ଭିଦ କଣ ଛାଡ଼େ?",
        options: ["କାର୍ବନ ଡାଇଅକ୍ସାଇଡ", "ଅକ୍ସିଜେନ", "ନାଇଟ୍ରୋଜେନ", "ହାଇଡ୍ରୋଜେନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଫଟୋସିନ୍ଥେସିସ୍ ସମୟରେ ଉଦ୍ଭିଦ ଅକ୍ସିଜେନ ଛାଡ଼େ, ଯାହା ଆମେ ନିଶ୍ୱାସ ନେଉ।",
      },
    ]);

    // Science - Subcategory 2: Light and Shadow (Odia)
    const scienceQuiz2Od = await Quiz.create({
      title: "ଆଲୋକ, ଛାୟା ଓ ପ୍ରତିବିମ୍ବ",
      subject: "Science",
      category: "ପଦାର୍ଥ ବିଜ୍ଞାନ",
      chapter: "ଆଲୋକ ଓ ଛାୟା",
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
        quiz: scienceQuiz2Od._id,
        questionText: "ବସ୍ତୁ ଦେଖିବା ପାଇଁ କଣ ଦରକାର?",
        options: ["ବାୟୁ", "ଆଲୋକ", "ପାଣି", "ଶବ୍ଦ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ବସ୍ତୁ ଦେଖିବା ପାଇଁ ଆଲୋକ ଦରକାର। ଆଲୋକ ବିନା ଆମେ କିଛି ଦେଖିପାରୁ ନାହୁଁ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ପ୍ରାକୃତିକ ଆଲୋକ ଉତ୍ସ?",
        options: ["ବଲ୍ବ", "ମହମବତୀ", "ସୂର୍ଯ୍ୟ", "ଟର୍ଚ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସୂର୍ଯ୍ୟ ହେଉଛି ପ୍ରାକୃତିକ ଆଲୋକ ଉତ୍ସ। ବଲ୍ବ, ମହମବତୀ ଓ ଟର୍ଚ କୃତ୍ରିମ ଉତ୍ସ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "ଆଲୋକ କୌଣସି ବସ୍ତୁ ଦ୍ୱାରା ଅବରୋଧ ହେଲେ କଣ ସୃଷ୍ଟି ହୁଏ?",
        options: ["ପ୍ରତିବିମ୍ବ", "ଛାୟା", "ଇନ୍ଦ୍ରଧନୁ", "ପ୍ରତିଫଳନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଆଲୋକ କୌଣସି ବସ୍ତୁ ଦ୍ୱାରା ଅବରୋଧ ହେଲେ ଅପର ପାର୍ଶ୍ୱରେ ଛାୟା ସୃଷ୍ଟି ହୁଏ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "ଯେଉଁ ପଦାର୍ଥ ଆଲୋକକୁ ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ଯିବାକୁ ଦିଏ ସେମାନଙ୍କୁ କଣ କୁହାଯାଏ?",
        options: ["ଅସ୍ବଚ୍ଛ", "ସ୍ବଚ୍ଛ", "ଅର୍ଦ୍ଧସ୍ବଚ୍ଛ", "ପ୍ରତିଫଳକ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ସ୍ବଚ୍ଛ ପଦାର୍ଥ ଯେମିତି ସାଫ କାଚ ଆଲୋକକୁ ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ଯିବାକୁ ଦିଏ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "କେଉଁ ପଦାର୍ଥ ଅସ୍ବଚ୍ଛ?",
        options: ["କାଚ", "ପାଣି", "କାଠ", "ବାୟୁ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "କାଠ ଅସ୍ବଚ୍ଛ କାରଣ ଏହା ଆଲୋକକୁ ଯିବାକୁ ଦିଏ ନାହିଁ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "ଆଲୋକ ଦର୍ପଣ ଉପରେ ପଡ଼ିଲେ କଣ ହୁଏ?",
        options: ["ଏହା ଶୋଷିତ ହୁଏ", "ଏହା ଯାଇଥାଏ", "ଏହା ପ୍ରତିଫଳିତ ହୁଏ", "ଏହା ଅଦୃଶ୍ୟ ହୁଏ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଆଲୋକ ଦର୍ପଣ ଉପରେ ପଡ଼ିଲେ ଏହା ପ୍ରତିଫଳିତ ହୋଇ ଫେରି ଆସେ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "ସମତଳ ଦର୍ପଣରେ ସୃଷ୍ଟି ହେଉଥିବା ପ୍ରତିବିମ୍ବ:",
        options: ["ବସ୍ତୁଠାରୁ ଛୋଟ", "ବସ୍ତୁଠାରୁ ବଡ଼", "ବସ୍ତୁ ସହିତ ସମାନ ଆକାର", "ଓଲଟା"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ସମତଳ ଦର୍ପଣ ବସ୍ତୁ ସହିତ ସମାନ ଆକାରର ପ୍ରତିବିମ୍ବ ସୃଷ୍ଟି କରେ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "ତୁମର ଛାୟା କେବେ ସବୁଠାରୁ ଲମ୍ବା ହୁଏ?",
        options: ["ମଧ୍ୟାହ୍ନରେ", "ସକାଳରେ", "ସନ୍ଧ୍ୟାରେ", "B ଓ C ଦୁଇଟି"],
        correctAnswer: 3,
        marks: 1,
        explanation: "ସକାଳ ଓ ସନ୍ଧ୍ୟାରେ ଛାୟା ସବୁଠାରୁ ଲମ୍ବା ହୁଏ କାରଣ ସୂର୍ଯ୍ୟ ଆକାଶରେ ନିମ୍ନରେ ଥାଏ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ଅର୍ଦ୍ଧସ୍ବଚ୍ଛ?",
        options: ["ସାଫ କାଚ", "ଘୋଡ଼ାଇ କାଚ", "କାଠ", "ଧାତୁ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଘୋଡ଼ାଇ କାଚ ଅର୍ଦ୍ଧସ୍ବଚ୍ଛ - ଏହା କିଛି ଆଲୋକକୁ ଯିବାକୁ ଦିଏ କିନ୍ତୁ ସ୍ପଷ୍ଟ ନୁହେଁ।",
      },
      {
        quiz: scienceQuiz2Od._id,
        questionText: "ଆଲୋକ କେଉଁ ପଥରେ ଗମନ କରେ?",
        options: ["ବକ୍ର ରେଖାରେ", "ସରଳ ରେଖାରେ", "ଜିଗଜାଗ ରେଖାରେ", "ବୃତ୍ତାକାର ପଥରେ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଆଲୋକ ସର୍ବଦା ସରଳ ରେଖାରେ ଗମନ କରେ।",
      },
    ]);

    // Science - Subcategory 3: Water and Air (Odia)
    const scienceQuiz3Od = await Quiz.create({
      title: "ପାଣି ଓ ବାୟୁ ଆମ ଚାରିପାଖରେ",
      subject: "Science",
      category: "ପରିବେଶ ବିଜ୍ଞାନ",
      chapter: "ପ୍ରାକୃତିକ ସମ୍ପଦ",
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
        quiz: scienceQuiz3Od._id,
        questionText: "ପୃଥିବୀର ପୃଷ୍ଠର କେତେ ପ୍ରତିଶତ ପାଣି ଦ୍ୱାରା ଆବୃତ?",
        options: ["50%", "60%", "70%", "80%"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ପୃଥିବୀର ପୃଷ୍ଠର ପ୍ରାୟ 70% ପାଣି ଦ୍ୱାରା ଆବୃତ।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ଆମେ ବାୟୁରୁ କେଉଁ ଗ୍ୟାସ ନିଶ୍ୱାସରେ ନେଉ?",
        options: ["କାର୍ବନ ଡାଇଅକ୍ସାଇଡ", "ଅକ୍ସିଜେନ", "ନାଇଟ୍ରୋଜେନ", "ହାଇଡ୍ରୋଜେନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଆମେ ବାୟୁରୁ ଅକ୍ସିଜେନ ନିଶ୍ୱାସରେ ନେଉ, ଯାହା ଆମର ବଞ୍ଚିବା ପାଇଁ ଅତ୍ୟାବଶ୍ୟକ।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ପାଣି ବାଷ୍ପରେ ପରିଣତ ହେବା ପ୍ରକ୍ରିୟାକୁ କଣ କୁହାଯାଏ?",
        options: ["ଘନୀଭବନ", "ବାଷ୍ପୀଭବନ", "ବୃଷ୍ଟିପାତ", "ସଂଗ୍ରହ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ବାଷ୍ପୀଭବନ ହେଉଛି ସେହି ପ୍ରକ୍ରିୟା ଯେଉଁଥିରେ ପାଣି ଉତ୍ତାପ ଯୋଗୁଁ ବାଷ୍ପରେ ପରିଣତ ହୁଏ।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ଆମେ କେଉଁ ଗ୍ୟାସ ନିଶ୍ୱାସରେ ଛାଡ଼ୁ?",
        options: ["ଅକ୍ସିଜେନ", "ନାଇଟ୍ରୋଜେନ", "କାର୍ବନ ଡାଇଅକ୍ସାଇଡ", "ହାଇଡ୍ରୋଜେନ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଆମେ କାର୍ବନ ଡାଇଅକ୍ସାଇଡ ନିଶ୍ୱାସରେ ଛାଡ଼ୁ, ଯାହା ଆମ ଶରୀରର ବର୍ଜ୍ୟ ପଦାର୍ଥ।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ବାୟୁରେ ଜଳୀୟ ବାଷ୍ପର ମୁଖ୍ୟ ଉତ୍ସ କଣ?",
        options: ["ନଦୀ", "ସମୁଦ୍ର", "ହ୍ରଦ", "ପୋଖରୀ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ସମୁଦ୍ର ହେଉଛି ବାୟୁରେ ଜଳୀୟ ବାଷ୍ପର ମୁଖ୍ୟ ଉତ୍ସ ବାଷ୍ପୀଭବନ ଯୋଗୁଁ।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ବାୟୁ କେଉଁ ଅବସ୍ଥାରେ ଅଛି?",
        options: ["କଠିନ", "ତରଳ", "ଗ୍ୟାସୀୟ", "ପ୍ଲାଜମା"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ବାୟୁ ହେଉଛି ଗ୍ୟାସମାନଙ୍କର ମିଶ୍ରଣ, ତେଣୁ ଏହା ଗ୍ୟାସୀୟ ଅବସ୍ଥାରେ ଅଛି।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ପାଣିକୁ ଗରମ କଲେ କଣ ହୁଏ?",
        options: ["ଏହା ଜମିଯାଏ", "ଏହା ବାଷ୍ପୀଭୂତ ହୁଏ", "ଏହା ଠୋସ ହୋଇଯାଏ", "କିଛି ହୁଏ ନାହିଁ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପାଣିକୁ ଗରମ କଲେ ଏହା ବାଷ୍ପୀଭୂତ ହୋଇ ଜଳୀୟ ବାଷ୍ପରେ ପରିଣତ ହୁଏ।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି ସବୁଠାରୁ ଅଧିକ ପାଣି ବ୍ୟବହାର କରେ?",
        options: ["ପିଇବା", "ରାନ୍ଧିବା", "ସ୍ନାନ କରିବା", "କୃଷି"],
        correctAnswer: 3,
        marks: 1,
        explanation: "କୃଷି ସବୁଠାରୁ ଅଧିକ ପାଣି ବ୍ୟବହାର କରେ ଫସଲ ଜଳସେଚନ ପାଇଁ।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ଜଳୀୟ ବାଷ୍ପ ପୁନର୍ବାର ପାଣିରେ ପରିଣତ ହେବା ପ୍ରକ୍ରିୟାକୁ କଣ କୁହାଯାଏ?",
        options: ["ବାଷ୍ପୀଭବନ", "ଘନୀଭବନ", "ବୃଷ୍ଟିପାତ", "ଉର୍ଦ୍ଧ୍ୱପାତନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଘନୀଭବନ ହେଉଛି ଯେତେବେଳେ ଜଳୀୟ ବାଷ୍ପ ଥଣ୍ଡା ହୋଇ ପୁନର୍ବାର ତରଳ ପାଣିରେ ପରିଣତ ହୁଏ।",
      },
      {
        quiz: scienceQuiz3Od._id,
        questionText: "ବାୟୁରେ କେଉଁ ଗ୍ୟାସ ସବୁଠାରୁ ଅଧିକ ଅଛି?",
        options: ["ଅକ୍ସିଜେନ", "କାର୍ବନ ଡାଇଅକ୍ସାଇଡ", "ନାଇଟ୍ରୋଜେନ", "ହାଇଡ୍ରୋଜେନ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ନାଇଟ୍ରୋଜେନ ବାୟୁର ପ୍ରାୟ 78% ଗଠନ କରେ, ଏହା ସବୁଠାରୁ ଅଧିକ ଗ୍ୟାସ।",
      },
    ]);

    console.log("✓ Class 6 - Science (Odia): 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6ScienceOdia;
