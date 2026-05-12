import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8Odia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Grammar - Sandhi and Samas
    const odiaQuiz1 = await Quiz.create({
      title: "Odia Grammar - Sandhi and Compound Words",
      subject: "Odia",
      category: "Grammar",
      chapter: "Sandhi and Samas",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz1._id, questionText: "What is 'Sandhi' (ସନ୍ଧି) in Odia grammar?", options: ["Separating words", "Joining of two sounds when words combine", "Making plural", "Changing tense"], correctAnswer: 1, marks: 1, explanation: "Sandhi is the joining of two sounds/letters when words come together." },
      { quiz: odiaQuiz1._id, questionText: "How many types of Sandhi are there in Odia?", options: ["2", "3", "4", "5"], correctAnswer: 1, marks: 1, explanation: "There are 3 types: Swar Sandhi (vowel), Byanjan Sandhi (consonant), Bisarga Sandhi." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Swar Sandhi' (ସ୍ୱର ସନ୍ଧି)?", options: ["Joining of consonants", "Joining of vowels", "Joining of Bisarga", "None of these"], correctAnswer: 1, marks: 1, explanation: "Swar Sandhi occurs when two vowel sounds combine." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Samas' (ସମାସ) in Odia?", options: ["Breaking words", "Combining two or more words into one", "Changing meaning", "Adding suffix"], correctAnswer: 1, marks: 1, explanation: "Samas is combining two or more words to form a single compound word." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Upapad' (ଉପପଦ) in Odia grammar?", options: ["Prefix", "A word that helps form compound words", "Suffix", "Conjunction"], correctAnswer: 1, marks: 1, explanation: "Upapad is a word element that helps in forming compound words in Odia." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Pratyay' (ପ୍ରତ୍ୟୟ) in Odia?", options: ["Prefix", "Suffix", "Root word", "Conjunction"], correctAnswer: 1, marks: 1, explanation: "Pratyay (suffix) is added at the end of a word to form a new word." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Upasarga' (ଉପସର୍ଗ) in Odia?", options: ["Suffix", "Prefix", "Root word", "Verb"], correctAnswer: 1, marks: 1, explanation: "Upasarga (prefix) is added at the beginning of a word to change its meaning." },
      { quiz: odiaQuiz1._id, questionText: "In 'ବିଦ୍ୟାଳୟ', what type of Sandhi is present?", options: ["Swar Sandhi", "Byanjan Sandhi", "Bisarga Sandhi", "No Sandhi"], correctAnswer: 0, marks: 1, explanation: "'ବିଦ୍ୟା + ଆଳୟ' = ବିଦ୍ୟାଳୟ — two vowels combine (Swar Sandhi)." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Byanjan Sandhi' (ବ୍ୟଞ୍ଜନ ସନ୍ଧି)?", options: ["Joining of vowels", "Joining of consonants", "Joining of Bisarga", "Breaking words"], correctAnswer: 1, marks: 1, explanation: "Byanjan Sandhi occurs when consonant sounds combine." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Samaspad' (ସମାସପଦ)?", options: ["Original words", "The new compound word formed", "Broken words", "Suffix"], correctAnswer: 1, marks: 1, explanation: "Samaspad is the new compound word formed after combining two or more words." },
    ]);

    // Subcategory 2: Literature - Modern Odia
    const odiaQuiz2 = await Quiz.create({
      title: "Modern Odia Literature",
      subject: "Odia",
      category: "Literature",
      chapter: "Modern Literature",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz2._id, questionText: "Who is called 'Katha Samrat' (King of Stories) in Odia?", options: ["Fakir Mohan Senapati", "Gopinath Mohanty", "Kalindi Charan Panigrahi", "Surendra Mohanty"], correctAnswer: 0, marks: 1, explanation: "Fakir Mohan Senapati is called 'Katha Samrat' for his pioneering stories." },
      { quiz: odiaQuiz2._id, questionText: "Who wrote 'Matira Manisha'?", options: ["Gopinath Mohanty", "Kalindi Charan", "Fakir Mohan", "Manoj Das"], correctAnswer: 0, marks: 1, explanation: "Gopinath Mohanty wrote 'Matira Manisha' (Man of the Soil)." },
      { quiz: odiaQuiz2._id, questionText: "Who received the Jnanpith Award from Odisha?", options: ["Fakir Mohan", "Gopinath Mohanty", "Sitakant Mahapatra", "Both B and C"], correctAnswer: 3, marks: 1, explanation: "Both Gopinath Mohanty and Sitakant Mahapatra received the Jnanpith Award." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Sabuja Yuga' in Odia literature?", options: ["Ancient period", "Green/Romantic era of Odia literature", "Modern period", "Medieval period"], correctAnswer: 1, marks: 1, explanation: "'Sabuja Yuga' (Green Era) was the romantic period in modern Odia literature." },
      { quiz: odiaQuiz2._id, questionText: "Who is the founder of 'Sabuja' movement?", options: ["Gopabandhu Das", "Kalindi Charan Panigrahi", "Annada Shankar Ray", "Radhanath Ray"], correctAnswer: 1, marks: 1, explanation: "Kalindi Charan Panigrahi is considered the founder of the Sabuja movement." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Chha Mana Atha Guntha' considered as?", options: ["First Odia poem", "First Odia novel", "First Odia drama", "First Odia essay"], correctAnswer: 1, marks: 1, explanation: "'Chha Mana Atha Guntha' is considered the first major Odia novel." },
      { quiz: odiaQuiz2._id, questionText: "Who wrote 'Paraja'?", options: ["Fakir Mohan", "Gopinath Mohanty", "Manoj Das", "Pratibha Ray"], correctAnswer: 1, marks: 1, explanation: "Gopinath Mohanty wrote 'Paraja', depicting tribal life." },
      { quiz: odiaQuiz2._id, questionText: "Who is known for short stories in modern Odia?", options: ["Manoj Das", "Gopabandhu Das", "Sarala Das", "Jagannath Das"], correctAnswer: 0, marks: 1, explanation: "Manoj Das is famous for his short stories in both Odia and English." },
      { quiz: odiaQuiz2._id, questionText: "'Yajnaseni' was written by:", options: ["Gopinath Mohanty", "Pratibha Ray", "Manoj Das", "Sitakant Mahapatra"], correctAnswer: 1, marks: 1, explanation: "Pratibha Ray wrote 'Yajnaseni' (Draupadi's story), which won the Moortidevi Award." },
      { quiz: odiaQuiz2._id, questionText: "What genre is 'Amada Bata' by Gopabandhu Das?", options: ["Novel", "Poetry", "Essay/Autobiography", "Drama"], correctAnswer: 2, marks: 1, explanation: "'Amada Bata' is an autobiographical essay by Gopabandhu Das." },
    ]);

    // Subcategory 3: Writing - Formal Communication
    const odiaQuiz3 = await Quiz.create({
      title: "Odia Writing - Formal Communication",
      subject: "Odia",
      category: "Writing",
      chapter: "Formal Writing",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz3._id, questionText: "What is 'Pratibedan' (ପ୍ରତିବେଦନ) in Odia?", options: ["Letter", "Report", "Essay", "Story"], correctAnswer: 1, marks: 1, explanation: "'Pratibedan' means report writing in Odia." },
      { quiz: odiaQuiz3._id, questionText: "What should a formal Odia report contain?", options: ["Only opinions", "Facts, date, place, and details", "Only stories", "Only names"], correctAnswer: 1, marks: 1, explanation: "A formal report must contain facts, date, place, and relevant details." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Bhashana' (ଭାଷଣ) in Odia?", options: ["Letter", "Speech", "Essay", "Poem"], correctAnswer: 1, marks: 1, explanation: "'Bhashana' means speech or address in Odia." },
      { quiz: odiaQuiz3._id, questionText: "How should a formal speech begin?", options: ["With a joke", "With proper greeting and introduction of topic", "With the conclusion", "With questions"], correctAnswer: 1, marks: 1, explanation: "A formal speech should begin with proper greeting and introduction of the topic." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Sampadakiya' (ସମ୍ପାଦକୀୟ)?", options: ["Letter to friend", "Editorial/Letter to editor", "Personal diary", "Story"], correctAnswer: 1, marks: 1, explanation: "'Sampadakiya' means editorial or letter to the editor." },
      { quiz: odiaQuiz3._id, questionText: "What is important in 'Suchana Lekhan' (notice writing)?", options: ["Long paragraphs", "Brief, clear with What/When/Where/Who", "Personal opinions", "Stories"], correctAnswer: 1, marks: 1, explanation: "Notice writing must be brief and clearly state What, When, Where, and Who." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Anuchhed Lekhan' (ଅନୁଚ୍ଛେଦ ଲେଖନ)?", options: ["Story writing", "Paragraph writing", "Letter writing", "Poem writing"], correctAnswer: 1, marks: 1, explanation: "'Anuchhed Lekhan' means paragraph writing on a given topic." },
      { quiz: odiaQuiz3._id, questionText: "What makes a good Odia formal letter effective?", options: ["Using slang", "Clear purpose, polite language, proper format", "Very long sentences", "No greeting"], correctAnswer: 1, marks: 1, explanation: "A good formal letter has clear purpose, polite language, and proper format." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Bigyanpan Lekhan' (ବିଜ୍ଞାପନ ଲେଖନ)?", options: ["Story writing", "Advertisement writing", "Essay writing", "Report writing"], correctAnswer: 1, marks: 1, explanation: "'Bigyanpan Lekhan' means advertisement writing." },
      { quiz: odiaQuiz3._id, questionText: "What should be the ending of a formal Odia speech?", options: ["Abrupt stop", "Thank the audience and summarize", "Start new topic", "Ask questions"], correctAnswer: 1, marks: 1, explanation: "A formal speech should end by thanking the audience and summarizing key points." },
    ]);

    console.log("✓ Class 8 - Odia (English): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8Odia;
