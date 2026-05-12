import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass9Odia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Grammar - Karak and Sandhi
    const odiaQuiz1 = await Quiz.create({
      title: "Odia Grammar - Karak and Advanced Sandhi",
      subject: "Odia",
      category: "Grammar",
      chapter: "Karak and Sandhi",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz1._id, questionText: "How many 'Karak' (cases) are there in Odia grammar?", options: ["5", "6", "7", "8"], correctAnswer: 2, marks: 1, explanation: "There are 7 Karak (cases) in Odia grammar." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Karta Karak' (କର୍ତ୍ତା କାରକ)?", options: ["Object case", "Subject case (doer)", "Instrument case", "Location case"], correctAnswer: 1, marks: 1, explanation: "Karta Karak is the subject case — the doer of the action." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Karma Karak' (କର୍ମ କାରକ)?", options: ["Subject case", "Object case", "Instrument case", "Dative case"], correctAnswer: 1, marks: 1, explanation: "Karma Karak is the object case — the thing on which action is performed." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Karan Karak' (କରଣ କାରକ)?", options: ["Subject", "Object", "Instrument/means", "Location"], correctAnswer: 2, marks: 1, explanation: "Karan Karak is the instrument case — the means by which action is done." },
      { quiz: odiaQuiz1._id, questionText: "'ବିଦ୍ୟା + ଆଳୟ = ବିଦ୍ୟାଳୟ' is which type of Sandhi?", options: ["Swar Sandhi", "Byanjan Sandhi", "Bisarga Sandhi", "No Sandhi"], correctAnswer: 0, marks: 1, explanation: "Two vowels combining (ଆ + ଆ) makes it Swar Sandhi." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Sampradaan Karak' (ସମ୍ପ୍ରଦାନ କାରକ)?", options: ["From case", "For/to case (dative)", "In case", "By case"], correctAnswer: 1, marks: 1, explanation: "Sampradaan Karak is the dative case — for whom the action is done." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Apadan Karak' (ଅପାଦାନ କାରକ)?", options: ["To case", "From/separation case", "In case", "By case"], correctAnswer: 1, marks: 1, explanation: "Apadan Karak shows separation — from where something comes or separates." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Adhikaran Karak' (ଅଧିକରଣ କାରକ)?", options: ["Subject", "Object", "Location/time case", "Instrument"], correctAnswer: 2, marks: 1, explanation: "Adhikaran Karak shows location or time of the action." },
      { quiz: odiaQuiz1._id, questionText: "In 'ଜଗନ୍ନାଥ', what type of Sandhi is present?", options: ["Swar Sandhi", "Byanjan Sandhi", "Bisarga Sandhi", "No Sandhi"], correctAnswer: 1, marks: 1, explanation: "'ଜଗତ୍ + ନାଥ = ଜଗନ୍ନାଥ' — consonant combining is Byanjan Sandhi." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Sambandha Karak' (ସମ୍ବନ୍ଧ କାରକ)?", options: ["Location case", "Possessive/relation case", "Object case", "Subject case"], correctAnswer: 1, marks: 1, explanation: "Sambandha Karak shows possession or relationship between nouns." },
    ]);

    // Subcategory 2: Literature - Modern Odia Poetry
    const odiaQuiz2 = await Quiz.create({
      title: "Modern Odia Poetry and Prose",
      subject: "Odia",
      category: "Literature",
      chapter: "Modern Poetry",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz2._id, questionText: "Who is known as 'Sabyasachi' in Odia literature?", options: ["Sachi Routray", "Gopinath Mohanty", "Manoj Das", "Sitakant Mahapatra"], correctAnswer: 0, marks: 1, explanation: "Sachi Routray is known as 'Sabyasachi' for his versatility in poetry." },
      { quiz: odiaQuiz2._id, questionText: "Who wrote 'Mathura Mangala'?", options: ["Sarala Das", "Balaram Das", "Jagannath Das", "Achyutananda Das"], correctAnswer: 1, marks: 1, explanation: "Balaram Das wrote 'Mathura Mangala'." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Pragativad' in Odia literature?", options: ["Romanticism", "Progressive movement", "Classicism", "Modernism"], correctAnswer: 1, marks: 1, explanation: "Pragativad is the progressive literary movement focusing on social issues." },
      { quiz: odiaQuiz2._id, questionText: "Who received the first Jnanpith Award from Odisha?", options: ["Sitakant Mahapatra", "Gopinath Mohanty", "Manoj Das", "Pratibha Ray"], correctAnswer: 1, marks: 1, explanation: "Gopinath Mohanty received the first Jnanpith Award from Odisha in 1973." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Adhunika Kabita' (modern poetry) characterized by?", options: ["Only rhyming", "Free verse, imagery, symbolism", "Only devotional themes", "Only nature poetry"], correctAnswer: 1, marks: 1, explanation: "Modern Odia poetry uses free verse, imagery, and symbolism." },
      { quiz: odiaQuiz2._id, questionText: "Who is the author of 'Harijan'?", options: ["Gopabandhu Das", "Fakir Mohan", "Gopinath Mohanty", "Kalindi Charan"], correctAnswer: 0, marks: 1, explanation: "Gopabandhu Das wrote about social reform including untouchability." },
      { quiz: odiaQuiz2._id, questionText: "'Nija Basundhara' is written by:", options: ["Radhanath Ray", "Gangadhar Meher", "Sachi Routray", "Guruprasad Mohanty"], correctAnswer: 2, marks: 1, explanation: "Sachi Routray wrote 'Nija Basundhara'." },
      { quiz: odiaQuiz2._id, questionText: "What literary period does 'Sabuja Yuga' belong to?", options: ["Ancient", "Medieval", "Pre-modern romantic", "Post-independence"], correctAnswer: 2, marks: 1, explanation: "Sabuja Yuga (1920s-30s) is the pre-modern romantic period in Odia literature." },
      { quiz: odiaQuiz2._id, questionText: "Who is known for 'Adivasi' (tribal) literature in Odia?", options: ["Gopinath Mohanty", "Manoj Das", "Fakir Mohan", "Sarala Das"], correctAnswer: 0, marks: 1, explanation: "Gopinath Mohanty is famous for depicting tribal life in novels like 'Paraja'." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Mukta Chhanda' in Odia poetry?", options: ["Strict meter poetry", "Free verse", "Rhyming couplets", "Devotional songs"], correctAnswer: 1, marks: 1, explanation: "'Mukta Chhanda' means free verse — poetry without strict meter or rhyme." },
    ]);

    // Subcategory 3: Writing - Advanced Formal Writing
    const odiaQuiz3 = await Quiz.create({
      title: "Odia Writing - Advanced Formal Writing",
      subject: "Odia",
      category: "Writing",
      chapter: "Advanced Writing",
      grade: 9,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 30,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz3._id, questionText: "What is 'Prabandha Lekhan' (ପ୍ରବନ୍ଧ ଲେଖନ)?", options: ["Letter writing", "Essay writing", "Story writing", "Poem writing"], correctAnswer: 1, marks: 1, explanation: "'Prabandha Lekhan' means essay writing with introduction, body, and conclusion." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Baktrutwa' (ବକ୍ତୃତ୍ୱ) in Odia?", options: ["Writing", "Oratory/Speech giving", "Reading", "Listening"], correctAnswer: 1, marks: 1, explanation: "'Baktrutwa' means the art of giving speeches or oratory." },
      { quiz: odiaQuiz3._id, questionText: "What should a debate (ବାଦ-ବିବାଦ) include?", options: ["Only one side", "Arguments for and against with evidence", "Only personal opinions", "Only stories"], correctAnswer: 1, marks: 1, explanation: "A debate should present arguments for and against a topic with evidence." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Saransha Lekhan' (ସାରାଂଶ ଲେଖନ)?", options: ["Expanding text", "Summarizing/précis writing", "Translating", "Copying"], correctAnswer: 1, marks: 1, explanation: "'Saransha Lekhan' means writing a summary or précis of a passage." },
      { quiz: odiaQuiz3._id, questionText: "In formal Odia writing, what register should be used?", options: ["Colloquial/informal", "Formal and respectful", "Slang", "Mixed"], correctAnswer: 1, marks: 1, explanation: "Formal Odia writing requires formal and respectful language register." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Chithi Lekhan' (ଚିଠି ଲେଖନ) for official purposes?", options: ["Personal letter", "Official/formal letter", "Love letter", "Invitation"], correctAnswer: 1, marks: 1, explanation: "Official 'Chithi Lekhan' follows formal structure with proper salutation and closing." },
      { quiz: odiaQuiz3._id, questionText: "What is important in 'Pratibedan Lekhan' (report writing)?", options: ["Fiction", "Factual accuracy, date, place, details", "Personal feelings", "Poetry"], correctAnswer: 1, marks: 1, explanation: "Report writing requires factual accuracy with proper date, place, and details." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Anubad' (ଅନୁବାଦ)?", options: ["Original writing", "Translation", "Summary", "Expansion"], correctAnswer: 1, marks: 1, explanation: "'Anubad' means translation from one language to another." },
      { quiz: odiaQuiz3._id, questionText: "What makes a good 'Bichara Lekhan' (editorial)?", options: ["Only facts", "Analysis, opinion, and solution on current issues", "Only stories", "Only criticism"], correctAnswer: 1, marks: 1, explanation: "A good editorial provides analysis, balanced opinion, and solutions on current issues." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Padya Anubad' (ପଦ୍ୟ ଅନୁବାଦ)?", options: ["Prose translation", "Poetry translation", "Story translation", "Drama translation"], correctAnswer: 1, marks: 1, explanation: "'Padya Anubad' means translating poetry while maintaining its essence and rhythm." },
    ]);

    console.log("✓ Class 9 - Odia (English): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass9Odia;
