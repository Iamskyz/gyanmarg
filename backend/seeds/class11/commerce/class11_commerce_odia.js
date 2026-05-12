import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceOdia = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Grammar - Alankar and Chhanda
    const odiaQuiz1 = await Quiz.create({
      title: "Odia Grammar - Alankar and Chhanda",
      subject: "Odia",
      category: "Grammar",
      chapter: "Alankar and Chhanda",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz1._id, questionText: "What is 'Alankar' (ଅଳଙ୍କାର) in Odia literature?", options: ["A type of poem", "Figures of speech that beautify language", "A grammar rule", "A type of story"], correctAnswer: 1, marks: 1, explanation: "Alankar are figures of speech that add beauty and effectiveness to language." },
      { quiz: odiaQuiz1._id, questionText: "How many types of Alankar are there in Odia?", options: ["2", "3", "4", "5"], correctAnswer: 0, marks: 1, explanation: "Two main types: Shabdalankar (sound-based) and Arthalankar (meaning-based)." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Upama' (ଉପମା) Alankar?", options: ["Direct comparison", "Comparison using 'like/as' (ପରି/ଭଳି)", "Exaggeration", "Repetition"], correctAnswer: 1, marks: 1, explanation: "Upama compares two things using words like 'ପରି', 'ଭଳି', 'ସଦୃଶ'." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Rupak' (ରୂପକ) Alankar?", options: ["Comparison with like/as", "Direct identification without comparison words", "Sound repetition", "Exaggeration"], correctAnswer: 1, marks: 1, explanation: "Rupak directly identifies one thing as another without using comparison words." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Anuprasa' (ଅନୁପ୍ରାସ) Alankar?", options: ["Meaning repetition", "Repetition of consonant sounds", "Comparison", "Contradiction"], correctAnswer: 1, marks: 1, explanation: "Anuprasa is the repetition of consonant sounds (alliteration)." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Chhanda' (ଛନ୍ଦ) in Odia poetry?", options: ["Free verse", "Meter/rhythmic pattern", "Prose style", "Dialogue"], correctAnswer: 1, marks: 1, explanation: "Chhanda is the rhythmic pattern or meter in poetry based on syllables." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Atishayokti' (ଅତିଶୟୋକ୍ତି) Alankar?", options: ["Understatement", "Hyperbole/exaggeration", "Comparison", "Repetition"], correctAnswer: 1, marks: 1, explanation: "Atishayokti is deliberate exaggeration for poetic effect." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Yamak' (ଯମକ) Alankar?", options: ["Same word repeated with different meanings", "Sound repetition", "Comparison", "Contradiction"], correctAnswer: 0, marks: 1, explanation: "Yamak uses the same word repeatedly but with different meanings each time." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Matra' (ମାତ୍ରା) in Odia Chhanda?", options: ["A letter", "Unit of syllable measurement", "A word", "A sentence"], correctAnswer: 1, marks: 1, explanation: "Matra is the unit used to measure syllables in Odia meter." },
      { quiz: odiaQuiz1._id, questionText: "What is 'Byatirek' (ବ୍ୟତିରେକ) Alankar?", options: ["Showing similarity", "Showing the subject as superior to comparison", "Repetition", "Contradiction"], correctAnswer: 1, marks: 1, explanation: "Byatirek shows that the subject is superior to what it's compared with." },
    ]);

    // Subcategory 2: Literature - Modern Odia Prose
    const odiaQuiz2 = await Quiz.create({
      title: "Modern Odia Prose and Novel",
      subject: "Odia",
      category: "Literature",
      chapter: "Modern Prose",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz2._id, questionText: "Who is considered the first modern Odia novelist?", options: ["Gopinath Mohanty", "Fakir Mohan Senapati", "Kalindi Charan", "Manoj Das"], correctAnswer: 1, marks: 1, explanation: "Fakir Mohan Senapati is the pioneer of modern Odia novel with 'Chha Mana Atha Guntha'." },
      { quiz: odiaQuiz2._id, questionText: "Who wrote 'Amrutara Santana'?", options: ["Gopinath Mohanty", "Surendra Mohanty", "Manoj Das", "Pratibha Ray"], correctAnswer: 3, marks: 1, explanation: "Pratibha Ray wrote 'Amrutara Santana'." },
      { quiz: odiaQuiz2._id, questionText: "What is the significance of 'Chha Mana Atha Guntha'?", options: ["First Odia poem", "First realistic Odia novel about land exploitation", "First Odia drama", "First Odia essay"], correctAnswer: 1, marks: 1, explanation: "It's the first realistic novel depicting exploitation of poor farmers by landlords." },
      { quiz: odiaQuiz2._id, questionText: "Who wrote 'Dadi Budha'?", options: ["Fakir Mohan", "Gopinath Mohanty", "Surendra Mohanty", "Chandrasekhar Rath"], correctAnswer: 0, marks: 1, explanation: "Fakir Mohan Senapati wrote 'Dadi Budha' (The Grandfather)." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Adhunika Odia Gadya' (modern Odia prose) characterized by?", options: ["Only religious themes", "Realism, social issues, psychological depth", "Only nature poetry", "Only historical events"], correctAnswer: 1, marks: 1, explanation: "Modern Odia prose deals with realism, social issues, and psychological depth." },
      { quiz: odiaQuiz2._id, questionText: "Who is known for 'Dalit literature' in Odia?", options: ["Gopinath Mohanty", "Bhima Bhoi", "Fakir Mohan", "Radhanath Ray"], correctAnswer: 1, marks: 1, explanation: "Bhima Bhoi is a pioneer of Dalit consciousness in Odia literature." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Katha Sahitya' in Odia?", options: ["Poetry", "Short story literature", "Drama", "Essay"], correctAnswer: 1, marks: 1, explanation: "'Katha Sahitya' refers to short story literature in Odia." },
      { quiz: odiaQuiz2._id, questionText: "Who received the Sarala Award for Odia literature?", options: ["Only one person", "Many eminent Odia writers", "No one", "Only poets"], correctAnswer: 1, marks: 1, explanation: "The Sarala Award is given to eminent Odia writers for lifetime contribution." },
      { quiz: odiaQuiz2._id, questionText: "What is 'Nataka' (ନାଟକ) in Odia literature?", options: ["Novel", "Poetry", "Drama/Play", "Essay"], correctAnswer: 2, marks: 1, explanation: "'Nataka' means drama or play performed on stage." },
      { quiz: odiaQuiz2._id, questionText: "Who is known as 'Gadya Samrat' in Odia?", options: ["Fakir Mohan Senapati", "Gopabandhu Das", "Radhanath Ray", "Gangadhar Meher"], correctAnswer: 0, marks: 1, explanation: "Fakir Mohan Senapati is called 'Gadya Samrat' (Emperor of Prose)." },
    ]);

    // Subcategory 3: Writing - Advanced Composition
    const odiaQuiz3 = await Quiz.create({
      title: "Odia Writing - Advanced Composition",
      subject: "Odia",
      category: "Writing",
      chapter: "Advanced Composition",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: odiaQuiz3._id, questionText: "What is 'Bhava Samprasharan' (ଭାବ ସମ୍ପ୍ରସାରଣ)?", options: ["Summarizing", "Expanding an idea/proverb into a paragraph", "Translating", "Copying"], correctAnswer: 1, marks: 1, explanation: "Bhava Samprasharan means expanding a proverb or idea into a detailed paragraph." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Bhava Sankochan' (ଭାବ ସଂକୋଚନ)?", options: ["Expanding", "Condensing/summarizing a passage", "Translating", "Rewriting"], correctAnswer: 1, marks: 1, explanation: "Bhava Sankochan means condensing a passage into fewer words while keeping the meaning." },
      { quiz: odiaQuiz3._id, questionText: "What is the word limit for Odia essay in Class 11?", options: ["50-80", "100-150", "200-300", "500+"], correctAnswer: 2, marks: 1, explanation: "Odia essays are typically 200-300 words." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Patra Lekhan' for official purposes?", options: ["Personal letter", "Formal/official letter with proper format", "Love letter", "Invitation"], correctAnswer: 1, marks: 1, explanation: "Official Patra Lekhan follows formal structure with sender/receiver details." },
      { quiz: odiaQuiz3._id, questionText: "What should 'Rachana' (essay) conclusion contain?", options: ["New ideas", "Summary of main points and final thought", "Questions", "New topic"], correctAnswer: 1, marks: 1, explanation: "Conclusion should summarize key points and provide a final thought or appeal." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Anuched Lekhan'?", options: ["Story writing", "Paragraph writing on given topic (80-100 words)", "Letter writing", "Poetry"], correctAnswer: 1, marks: 1, explanation: "Anuched Lekhan is writing a single paragraph on a given topic." },
      { quiz: odiaQuiz3._id, questionText: "What is important in 'Sambad Rachana' (dialogue writing)?", options: ["Only long sentences", "Natural flow, brevity, and relevance", "Only questions", "Only formal language"], correctAnswer: 1, marks: 1, explanation: "Dialogue should feel natural, be brief, and stay relevant to the topic." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Galpa Rachana' (story composition)?", options: ["Essay writing", "Creative story writing with plot, characters, climax", "Report writing", "Letter writing"], correctAnswer: 1, marks: 1, explanation: "Galpa Rachana is creative story writing with proper plot structure." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Pratibedan' (report) writing?", options: ["Fiction", "Factual account of an event with 5W+1H", "Poetry", "Personal diary"], correctAnswer: 1, marks: 1, explanation: "News report covers Who, What, When, Where, Why, and How of an event." },
      { quiz: odiaQuiz3._id, questionText: "What is 'Bichara Lekhan' (editorial writing)?", options: ["Story", "Analytical writing on current issues with opinion", "Poetry", "Letter"], correctAnswer: 1, marks: 1, explanation: "Bichara Lekhan provides analysis and opinion on current social/political issues." },
    ]);

    console.log("✓ Class 11 Commerce - Odia (English): 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceOdia;
