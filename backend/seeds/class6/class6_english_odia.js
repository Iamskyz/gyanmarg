import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass6EnglishOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // English - Subcategory 1: Grammar Basics (Odia)
    const englishQuiz1Od = await Quiz.create({
      title: "ଇଂରାଜୀ ବ୍ୟାକରଣ - ନାମ ଓ ସର୍ବନାମ",
      subject: "English",
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
        quiz: englishQuiz1Od._id,
        questionText: "Noun କଣ?",
        options: ["କାର୍ଯ୍ୟ ଶବ୍ଦ", "ବର୍ଣ୍ଣନାକାରୀ ଶବ୍ଦ", "ନାମକରଣ ଶବ୍ଦ", "ଯୋଗକାରୀ ଶବ୍ଦ"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Noun ହେଉଛି ନାମକରଣ ଶବ୍ଦ ଯାହା କୌଣସି ବ୍ୟକ୍ତି, ସ୍ଥାନ, ପ୍ରାଣୀ ବା ବସ୍ତୁର ନାମ ଦିଏ।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି Proper Noun?",
        options: ["boy", "city", "Delhi", "book"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Delhi ହେଉଛି Proper Noun କାରଣ ଏହା କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ସ୍ଥାନର ନାମ ଏବଂ ବଡ଼ ଅକ୍ଷରରେ ଆରମ୍ଭ ହୁଏ।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "'child' ର ବହୁବଚନ କଣ?",
        options: ["childs", "childes", "children", "child"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'child' ର ବହୁବଚନ ହେଉଛି 'children'। ଏହା ଏକ ଅନିୟମିତ ବହୁବଚନ ରୂପ।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "କେଉଁ ଶବ୍ଦଟି Pronoun?",
        options: ["run", "beautiful", "she", "quickly"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'She' ହେଉଛି Pronoun କାରଣ ଏହା କୌଣସି ମହିଳା ବା ଝିଅର ନାମ ବଦଳରେ ବ୍ୟବହୃତ ହୁଏ।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "'happiness' କେଉଁ ପ୍ରକାର Noun?",
        options: ["Common noun", "Proper noun", "Abstract noun", "Collective noun"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'Happiness' ହେଉଛି Abstract noun କାରଣ ଏହା ଏକ ଭାବନାର ନାମ ଯାହାକୁ ଛୁଇଁ ବା ଦେଖାଯାଇପାରିବ ନାହିଁ।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "'mouse' ର ସଠିକ ବହୁବଚନ କେଉଁଟି?",
        options: ["mouses", "mice", "mouse", "mousies"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'mouse' ର ବହୁବଚନ ହେଉଛି 'mice'। ଏହା ଏକ ଅନିୟମିତ ବହୁବଚନ ରୂପ।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "Pronoun କଣ କାମ କରେ?",
        options: ["Noun କୁ ବର୍ଣ୍ଣନା କରେ", "Noun ର ସ୍ଥାନ ନିଏ", "କାର୍ଯ୍ୟ ଦେଖାଏ", "ବାକ୍ୟ ଯୋଡ଼େ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Pronoun ହେଉଛି Noun ର ସ୍ଥାନ ନେଇ ପୁନରାବୃତ୍ତି ଏଡ଼ାଇବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "ଏଗୁଡ଼ିକ ମଧ୍ୟରୁ କେଉଁଟି Collective Noun?",
        options: ["team", "player", "game", "ball"],
        correctAnswer: 0,
        marks: 1,
        explanation: "'Team' ହେଉଛି Collective Noun କାରଣ ଏହା ଖେଳାଳିମାନଙ୍କର ଗୋଷ୍ଠୀକୁ ସୂଚାଏ।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "'boy' ର Possessive ରୂପ କଣ?",
        options: ["boys", "boy's", "boys'", "boyes"],
        correctAnswer: 1,
        marks: 1,
        explanation: "'boy' ର Possessive ରୂପ ହେଉଛି 'boy's' (apostrophe ଓ s ସହିତ)।",
      },
      {
        quiz: englishQuiz1Od._id,
        questionText: "ବସ୍ତୁମାନଙ୍କ ପାଇଁ କେଉଁ Pronoun ବ୍ୟବହାର ହୁଏ?",
        options: ["he", "she", "it", "they"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'It' ବସ୍ତୁ, ପ୍ରାଣୀ ଏବଂ ବେଳେବେଳେ ଶିଶୁମାନଙ୍କ ପାଇଁ Pronoun ଭାବରେ ବ୍ୟବହୃତ ହୁଏ।",
      },
    ]);

    // English - Subcategory 2: Reading Comprehension (Odia)
    const englishQuiz2Od = await Quiz.create({
      title: "ପଢ଼ିବା ଓ ବୁଝିବା",
      subject: "English",
      category: "ବୋଧଗମ୍ୟତା",
      chapter: "ପଠନ କୌଶଳ",
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
        quiz: englishQuiz2Od._id,
        questionText: "ଗୋଟିଏ ଅନୁଚ୍ଛେଦର ମୁଖ୍ୟ ଭାବକୁ କଣ କୁହାଯାଏ?",
        options: ["ବିଷୟ ବାକ୍ୟ", "ସହାୟକ ବାକ୍ୟ", "ସମାପନୀ ବାକ୍ୟ", "ଶୀର୍ଷକ"],
        correctAnswer: 0,
        marks: 1,
        explanation: "ବିଷୟ ବାକ୍ୟରେ ଅନୁଚ୍ଛେଦର ମୁଖ୍ୟ ଭାବ ରହିଥାଏ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "ଯେତେବେଳେ ଆମେ ଗୋଟିଏ କାହାଣୀ ପଢ଼ୁ, ସେଥିରେ ଥିବା ଲୋକମାନଙ୍କୁ କଣ କୁହାଯାଏ?",
        options: ["ଲେଖକ", "ଚରିତ୍ର", "ପାଠକ", "ଲେଖିକା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "କାହାଣୀରେ ଥିବା ଲୋକମାନଙ୍କୁ ଚରିତ୍ର କୁହାଯାଏ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "କାହାଣୀରେ 'setting' ର ଅର୍ଥ କଣ?",
        options: ["ମୁଖ୍ୟ ଚରିତ୍ର", "କାହାଣୀ କେଉଁଠାରେ ଓ କେବେ ଘଟେ", "କାହାଣୀର ସମସ୍ୟା", "ସମାପନୀ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Setting ର ଅର୍ଥ ହେଉଛି କାହାଣୀ କେଉଁ ସ୍ଥାନରେ ଓ କେଉଁ ସମୟରେ ଘଟେ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "Synonym କଣ?",
        options: ["ବିପରୀତ ଅର୍ଥର ଶବ୍ଦ", "ସମାନ ଅର୍ଥର ଶବ୍ଦ", "ତୁକ ମିଳୁଥିବା ଶବ୍ଦ", "ସମାନ ଶବ୍ଦ ଶୁଣାଯାଉଥିବା ଶବ୍ଦ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Synonyms ହେଉଛି ସମାନ ବା ମିଳିତ ଅର୍ଥ ଥିବା ଶବ୍ଦ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "'happy' ର Antonym କଣ?",
        options: ["joyful", "glad", "sad", "cheerful"],
        correctAnswer: 2,
        marks: 1,
        explanation: "'Sad' ହେଉଛି 'happy' ର antonym କାରଣ ସେମାନଙ୍କର ବିପରୀତ ଅର୍ଥ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "କାହାଣୀରେ ଘଟଣାଗୁଡ଼ିକର କ୍ରମକୁ କଣ କୁହାଯାଏ?",
        options: ["Setting", "Characters", "Plot", "Theme"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Plot ହେଉଛି କାହାଣୀରେ ଘଟୁଥିବା ଘଟଣାଗୁଡ଼ିକର କ୍ରମ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "Dictionary ପଢ଼ିବାର ଉଦ୍ଦେଶ୍ୟ କଣ?",
        options: ["କାହାଣୀ ଖୋଜିବା", "ଶବ୍ଦର ଅର୍ଥ ଜାଣିବା", "ଚିତ୍ର ଦେଖିବା", "ଖେଳ ଖୋଜିବା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଆମେ Dictionary ବ୍ୟବହାର କରି ଶବ୍ଦର ଅର୍ଥ ଜାଣିବା ପାଇଁ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "Fact କଣ?",
        options: ["ଯାହା ସତ୍ୟ", "କାହାର ମତାମତ", "ଗଢ଼ା କାହାଣୀ", "ପ୍ରଶ୍ନ"],
        correctAnswer: 0,
        marks: 1,
        explanation: "Fact ହେଉଛି ଯାହା ସତ୍ୟ ଏବଂ ପ୍ରମାଣ କରାଯାଇପାରିବ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "Opinion କଣ?",
        options: ["ଯାହା ସର୍ବଦା ସତ୍ୟ", "କେହି କଣ ଭାବେ ବା ବିଶ୍ୱାସ କରେ", "ପ୍ରମାଣିତ ତଥ୍ୟ", "Dictionary ଅର୍ଥ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Opinion ହେଉଛି କେହି କଣ ଭାବେ ବା ବିଶ୍ୱାସ କରେ, ଯାହା ବ୍ୟକ୍ତି ଭେଦରେ ଭିନ୍ନ ହୋଇପାରେ।",
      },
      {
        quiz: englishQuiz2Od._id,
        questionText: "ପଢ଼ିବା ସମୟରେ କୌଣସି ଶବ୍ଦ ବୁଝି ନ ପାରିଲେ କଣ କରିବା ଉଚିତ?",
        options: ["ଏହାକୁ ଛାଡ଼ି ଦେବା", "ଅର୍ଥ ଅନୁମାନ କରିବା", "Dictionary ରେ ଦେଖିବା", "ପଢ଼ିବା ବନ୍ଦ କରିବା"],
        correctAnswer: 2,
        marks: 1,
        explanation: "ଯେତେବେଳେ କୌଣସି ଶବ୍ଦ ବୁଝି ନ ପାରିବ, Dictionary ରେ ଦେଖି ଏହାର ଅର୍ଥ ଜାଣିବା ଉଚିତ।",
      },
    ]);

    // English - Subcategory 3: Creative Writing (Odia)
    const englishQuiz3Od = await Quiz.create({
      title: "ଲେଖା କୌଶଳ ଓ ସୃଜନଶୀଳତା",
      subject: "English",
      category: "ଲେଖା",
      chapter: "ସୃଜନଶୀଳ ଅଭିବ୍ୟକ୍ତି",
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
        quiz: englishQuiz3Od._id,
        questionText: "ପ୍ରତ୍ୟେକ ବାକ୍ୟ କଣ ସହିତ ଆରମ୍ଭ ହେବା ଉଚିତ?",
        options: ["ଛୋଟ ଅକ୍ଷର", "ବଡ଼ ଅକ୍ଷର", "ସଂଖ୍ୟା", "ଚିହ୍ନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ପ୍ରତ୍ୟେକ ବାକ୍ୟ ବଡ଼ ଅକ୍ଷର (Capital letter) ସହିତ ଆରମ୍ଭ ହେବା ଉଚିତ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "କୌଣସି ବିବୃତିର ଶେଷରେ କେଉଁ ଚିହ୍ନ ବସେ?",
        options: ["Question mark (?)", "Exclamation mark (!)", "Period (.)", "Comma (,)"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Period (.) ବିବୃତି ବା ସାଧାରଣ ବାକ୍ୟର ଶେଷରେ ବ୍ୟବହୃତ ହୁଏ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "କେଉଁ ପ୍ରକାର ବାକ୍ୟ କିଛି ପଚାରେ?",
        options: ["Statement", "Question", "Exclamation", "Command"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Question ବାକ୍ୟ କିଛି ପଚାରେ ଏବଂ question mark ସହିତ ଶେଷ ହୁଏ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "ପ୍ରଶ୍ନରେ କେଉଁ ଚିହ୍ନ ବ୍ୟବହାର ହୁଏ?",
        options: ["Period (.)", "Question mark (?)", "Exclamation mark (!)", "Comma (,)"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Question mark (?) ପ୍ରଶ୍ନର ଶେଷରେ ବ୍ୟବହୃତ ହୁଏ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "ଲେଖାକୁ ରୋଚକ କରିବା ପାଇଁ କଣ ବ୍ୟବହାର କରିବା ଉଚିତ?",
        options: ["ସମାନ ଶବ୍ଦ ବ୍ୟବହାର କରିବା", "ବର୍ଣ୍ଣନାକାରୀ ଶବ୍ଦ ବ୍ୟବହାର କରିବା", "ବହୁତ ଛୋଟ ବାକ୍ୟ ଲେଖିବା", "ଚିହ୍ନ ବ୍ୟବହାର ନ କରିବା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ବର୍ଣ୍ଣନାକାରୀ ଶବ୍ଦ (Adjectives) ବ୍ୟବହାର କଲେ ଲେଖା ଅଧିକ ରୋଚକ ଓ ସ୍ପଷ୍ଟ ହୁଏ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "କାହାଣୀ ଲେଖିବାର ପ୍ରଥମ ପଦକ୍ଷେପ କଣ?",
        options: ["ଶେଷ ଲେଖିବା", "ଯୋଜନା କରିବା ବା ଭାବନା ଚିନ୍ତା କରିବା", "ମଧ୍ୟଭାଗ ଲେଖିବା", "ବନାନ ଯାଞ୍ଚ କରିବା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "କାହାଣୀ ଲେଖିବା ପୂର୍ବରୁ ଯୋଜନା କରିବା ବା ଭାବନା ଚିନ୍ତା କରିବା ପ୍ରଥମ ପଦକ୍ଷେପ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "ଲେଖିବା ପରେ କଣ କରିବା ଉଚିତ?",
        options: ["ଏହାକୁ ଫିଙ୍ଗି ଦେବା", "ପଢ଼ି ଭୁଲ ଯାଞ୍ଚ କରିବା", "ଆଉ କେବେ ନ ପଢ଼ିବା", "ତୁରନ୍ତ କାହାକୁ ଦେବା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଲେଖିବା ପରେ ପଢ଼ି ଭୁଲ ଯାଞ୍ଚ କରି ଲେଖାକୁ ଉନ୍ନତ କରିବା ଉଚିତ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "Paragraph କଣ?",
        options: ["ଗୋଟିଏ ବାକ୍ୟ", "ଗୋଟିଏ ମୁଖ୍ୟ ଭାବ ନେଇ ଲେଖା ବାକ୍ୟଗୁଡ଼ିକର ସମୂହ", "ଗୋଟିଏ ଶବ୍ଦ", "ଗୋଟିଏ ପ୍ରଶ୍ନ"],
        correctAnswer: 1,
        marks: 1,
        explanation: "Paragraph ହେଉଛି ଗୋଟିଏ ମୁଖ୍ୟ ଭାବ ନେଇ ଲେଖା ବାକ୍ୟଗୁଡ଼ିକର ସମୂହ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "ତାଲିକାରେ ଜିନିଷଗୁଡ଼ିକୁ ଅଲଗା କରିବା ପାଇଁ କଣ ବ୍ୟବହାର କରିବା ଉଚିତ?",
        options: ["Periods", "Question marks", "Commas", "Exclamation marks"],
        correctAnswer: 2,
        marks: 1,
        explanation: "Commas ତାଲିକାରେ ଜିନିଷଗୁଡ଼ିକୁ ଅଲଗା କରିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।",
      },
      {
        quiz: englishQuiz3Od._id,
        questionText: "ଭଲ କାହାଣୀର ଆରମ୍ଭ କେମିତି ହେବା ଉଚିତ?",
        options: ["'The End' ସହିତ ଆରମ୍ଭ କରିବା", "ରୋଚକ କିଛି ଯାହା ଧ୍ୟାନ ଆକର୍ଷଣ କରେ", "ବହୁତ ଲମ୍ବା ବାକ୍ୟ", "ସମସ୍ତ ଚରିତ୍ରର ତାଲିକା"],
        correctAnswer: 1,
        marks: 1,
        explanation: "ଭଲ କାହାଣୀର ଆରମ୍ଭ ରୋଚକ ହେବା ଉଚିତ ଯାହା ପାଠକର ଧ୍ୟାନ ଆକର୍ଷଣ କରେ।",
      },
    ]);

    console.log("✓ Class 6 - English (Odia): 3 quizzes, 30 questions created");
    
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass6EnglishOdia;
