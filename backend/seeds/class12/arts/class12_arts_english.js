import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsEnglish = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Flamingo and Vistas - Prose",
      subject: "English",
      category: "Literature",
      chapter: "Prose Comprehension",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "In 'The Last Lesson', what subject was M. Hamel teaching?", options: ["English", "French", "German", "History"], correctAnswer: 1, marks: 1, explanation: "It was the last French lesson before German was imposed in Alsace." },
      { quiz: quiz1._id, questionText: "'Lost Spring' by Anees Jung deals with?", options: ["Seasons", "Poverty and child labor", "Nature", "Love"], correctAnswer: 1, marks: 1, explanation: "It highlights the plight of ragpickers and bangle makers." },
      { quiz: quiz1._id, questionText: "In 'Deep Water', what did Douglas overcome?", options: ["Poverty", "Fear of water", "Illness", "Loneliness"], correctAnswer: 1, marks: 1, explanation: "William Douglas conquered his deep fear of water through determination." },
      { quiz: quiz1._id, questionText: "'The Rattrap' uses what as a metaphor for the world?", options: ["A cage", "A rattrap", "A maze", "A prison"], correctAnswer: 1, marks: 1, explanation: "The world offers riches like bait, trapping people." },
      { quiz: quiz1._id, questionText: "In 'Indigo', who championed the cause of sharecroppers?", options: ["Nehru", "Gandhi", "Ambedkar", "Patel"], correctAnswer: 1, marks: 1, explanation: "Gandhi's Champaran movement helped indigo sharecroppers." },
      { quiz: quiz1._id, questionText: "'Poets and Pancakes' is about?", options: ["Cooking", "Gemini Studios in Madras", "Poetry writing", "Painting"], correctAnswer: 1, marks: 1, explanation: "Asokamitran describes life at Gemini Studios." },
      { quiz: quiz1._id, questionText: "In 'The Interview', what does Umberto Eco say about his writing?", options: ["He writes only novels", "He uses empty spaces in his schedule", "He never plans", "He writes only at night"], correctAnswer: 1, marks: 1, explanation: "Eco utilized interstices (gaps) in his schedule for writing." },
      { quiz: quiz1._id, questionText: "'Going Places' explores the theme of?", options: ["Travel", "Adolescent fantasies and reality", "Sports", "Education"], correctAnswer: 1, marks: 1, explanation: "Sophie's unrealistic dreams contrast with her working-class reality." },
      { quiz: quiz1._id, questionText: "In 'Memories of Childhood', Bama experienced?", options: ["Racial discrimination", "Caste discrimination", "Gender discrimination", "Religious discrimination"], correctAnswer: 1, marks: 1, explanation: "Bama witnessed untouchability in her Tamil Nadu village." },
      { quiz: quiz1._id, questionText: "'The Tiger King' satirizes?", options: ["Wildlife conservation", "Royal arrogance and superstition", "Hunting skills", "British rule"], correctAnswer: 1, marks: 1, explanation: "The Maharaja's obsession with killing tigers is mocked." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Poetry Analysis - Class 12",
      subject: "English",
      category: "Literature",
      chapter: "Poetry",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "'My Mother at Sixty-Six' expresses?", options: ["Joy", "Fear of losing her aging mother", "Anger", "Celebration"], correctAnswer: 1, marks: 1, explanation: "Kamala Das expresses pain seeing her mother's aging face." },
      { quiz: quiz2._id, questionText: "In 'Keeping Quiet', Neruda asks for?", options: ["Revolution", "A moment of silence and introspection", "War", "Celebration"], correctAnswer: 1, marks: 1, explanation: "He wants humanity to pause and reflect on destructive actions." },
      { quiz: quiz2._id, questionText: "'A Thing of Beauty' is from which poem by Keats?", options: ["Ode to Autumn", "Endymion", "Hyperion", "Lamia"], correctAnswer: 1, marks: 1, explanation: "The opening line of Endymion: 'A thing of beauty is a joy forever.'" },
      { quiz: quiz2._id, questionText: "In 'Aunt Jennifer's Tigers', the tigers represent?", options: ["Fear", "Freedom and confidence she lacks", "Danger", "Nature"], correctAnswer: 1, marks: 1, explanation: "Tigers symbolize the bold life Aunt Jennifer cannot live." },
      { quiz: quiz2._id, questionText: "'A Roadside Stand' by Robert Frost highlights?", options: ["Urban beauty", "Rural people's desire for city money and neglect by passersby", "Road construction", "Travel"], correctAnswer: 1, marks: 1, explanation: "Poor rural folk hope passing city cars will buy their goods." },
      { quiz: quiz2._id, questionText: "The poem 'An Elementary School Classroom in a Slum' is by?", options: ["Keats", "Stephen Spender", "Neruda", "Frost"], correctAnswer: 1, marks: 1, explanation: "Spender contrasts the bleak slum classroom with the wider world." },
      { quiz: quiz2._id, questionText: "What literary device is 'the sea of faith' an example of?", options: ["Simile", "Metaphor", "Personification", "Alliteration"], correctAnswer: 1, marks: 1, explanation: "Faith is compared directly to a sea (metaphor)." },
      { quiz: quiz2._id, questionText: "Alliteration is?", options: ["Repetition of vowel sounds", "Repetition of consonant sounds at the start", "Exaggeration", "Contrast"], correctAnswer: 1, marks: 1, explanation: "Same consonant sound at the beginning of nearby words." },
      { quiz: quiz2._id, questionText: "Oxymoron is?", options: ["Exaggeration", "Combination of contradictory terms", "Comparison using like", "Sound imitation"], correctAnswer: 1, marks: 1, explanation: "Example: 'living death', 'bitter sweet'." },
      { quiz: quiz2._id, questionText: "Free verse poetry lacks?", options: ["Meaning", "Regular meter and rhyme scheme", "Imagery", "Theme"], correctAnswer: 1, marks: 1, explanation: "Free verse has no fixed pattern of rhythm or rhyme." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Writing Skills and Advanced Grammar",
      subject: "English",
      category: "Grammar",
      chapter: "Writing and Grammar",
      grade: 12,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "A formal letter should include?", options: ["Slang", "Sender's address, date, subject, body, closing", "Emojis", "Only greeting"], correctAnswer: 1, marks: 1, explanation: "Formal letters follow a structured format." },
      { quiz: quiz3._id, questionText: "Report writing requires?", options: ["Personal opinions only", "Factual information in organized format", "Poetry", "Dialogue"], correctAnswer: 1, marks: 1, explanation: "Reports present facts objectively with heading, byline, and body." },
      { quiz: quiz3._id, questionText: "'Had I known, I would have helped.' This is?", options: ["First conditional", "Second conditional", "Third conditional", "Zero conditional"], correctAnswer: 2, marks: 1, explanation: "Third conditional expresses unreal past situations." },
      { quiz: quiz3._id, questionText: "Which is a complex sentence?", options: ["He ran fast.", "He ran fast and won.", "Although he ran fast, he lost.", "Run fast."], correctAnswer: 2, marks: 1, explanation: "Contains an independent and dependent clause." },
      { quiz: quiz3._id, questionText: "Passive voice of 'They are building a bridge' is?", options: ["A bridge was built.", "A bridge is being built.", "A bridge has been built.", "A bridge will be built."], correctAnswer: 1, marks: 1, explanation: "Present continuous passive: is/are + being + past participle." },
      { quiz: quiz3._id, questionText: "An article for a newspaper should begin with?", options: ["Dear Sir", "An attention-grabbing opening", "Once upon a time", "To whom it may concern"], correctAnswer: 1, marks: 1, explanation: "Articles need engaging openings to hook readers." },
      { quiz: quiz3._id, questionText: "'Neither the students nor the teacher ___ present.' Fill in:", options: ["were", "was", "are", "have been"], correctAnswer: 1, marks: 1, explanation: "Verb agrees with the nearest subject (teacher - singular)." },
      { quiz: quiz3._id, questionText: "A speech should end with?", options: ["Abruptly", "A strong conclusion or call to action", "A question only", "Thank you only"], correctAnswer: 1, marks: 1, explanation: "Effective speeches end with memorable conclusions." },
      { quiz: quiz3._id, questionText: "Identify the figure of speech: 'The wind howled in the night.'", options: ["Simile", "Personification", "Metaphor", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Wind is given human quality of howling." },
      { quiz: quiz3._id, questionText: "Notice writing must include?", options: ["Personal details", "Title, date, body, issuing authority", "Long paragraphs", "Informal language"], correctAnswer: 1, marks: 1, explanation: "Notices are brief, formal, and informative." },
    ]);

    console.log("✓ Class 12 Arts - English: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsEnglish };
