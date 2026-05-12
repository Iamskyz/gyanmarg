import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass10English = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Clauses and Sentence Transformation
    const englishQuiz1 = await Quiz.create({
      title: "Clauses and Sentence Transformation",
      subject: "English",
      category: "Grammar",
      chapter: "Clauses",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz1._id, questionText: "A clause that can stand alone as a sentence is called:", options: ["Dependent clause", "Independent clause", "Relative clause", "Noun clause"], correctAnswer: 1, marks: 1, explanation: "An independent clause has a subject and verb and expresses a complete thought." },
      { quiz: englishQuiz1._id, questionText: "Identify the subordinate clause: 'I will go when he comes.'", options: ["I will go", "when he comes", "I will", "he comes"], correctAnswer: 1, marks: 1, explanation: "'When he comes' is a subordinate (dependent) clause — it cannot stand alone." },
      { quiz: englishQuiz1._id, questionText: "Convert to compound: 'Being tired, he slept early.'", options: ["He was tired so he slept early.", "He slept early because tired.", "Tired he slept.", "He being tired slept."], correctAnswer: 0, marks: 1, explanation: "Simple → Compound: use coordinating conjunction 'so' to join two independent clauses." },
      { quiz: englishQuiz1._id, questionText: "'The book which I bought is interesting.' The underlined is:", options: ["Noun clause", "Adjective clause", "Adverb clause", "Main clause"], correctAnswer: 1, marks: 1, explanation: "'Which I bought' describes the noun 'book' — it's an adjective/relative clause." },
      { quiz: englishQuiz1._id, questionText: "Convert to simple: 'He is too weak to walk.'", options: ["He is so weak that he cannot walk.", "He is too weak to walk.", "Being weak, he cannot walk.", "He cannot walk due to weakness."], correctAnswer: 2, marks: 1, explanation: "Using participle 'Being weak' converts it to a simple sentence." },
      { quiz: englishQuiz1._id, questionText: "A complex sentence contains:", options: ["Two independent clauses", "One independent + one or more dependent clauses", "Only one clause", "No dependent clause"], correctAnswer: 1, marks: 1, explanation: "Complex sentence = one independent clause + at least one dependent clause." },
      { quiz: englishQuiz1._id, questionText: "'I know that he is honest.' The noun clause is:", options: ["I know", "that he is honest", "he is honest", "I know that"], correctAnswer: 1, marks: 1, explanation: "'That he is honest' acts as the object of 'know' — it's a noun clause." },
      { quiz: englishQuiz1._id, questionText: "Convert to negative: 'Everyone was present.'", options: ["No one was absent.", "Everyone was absent.", "Not everyone was present.", "None was present."], correctAnswer: 0, marks: 1, explanation: "'No one was absent' conveys the same meaning in negative form." },
      { quiz: englishQuiz1._id, questionText: "An adverb clause tells us:", options: ["Which one", "What kind", "When, where, why, how", "Who or what"], correctAnswer: 2, marks: 1, explanation: "Adverb clauses modify verbs and tell when, where, why, or how." },
      { quiz: englishQuiz1._id, questionText: "Convert to interrogative: 'She is very beautiful.'", options: ["Is she not very beautiful?", "She is beautiful?", "How she is beautiful?", "Beautiful is she?"], correctAnswer: 0, marks: 1, explanation: "Assertive → Interrogative (rhetorical): 'Is she not very beautiful?'" },
    ]);

    // Subcategory 2: Letter and Article Writing
    const englishQuiz2 = await Quiz.create({
      title: "Letter Writing and Article Writing",
      subject: "English",
      category: "Writing",
      chapter: "Formal Writing",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz2._id, questionText: "A formal letter to the editor should be about:", options: ["Personal matters", "Public issues and concerns", "Family news", "Birthday wishes"], correctAnswer: 1, marks: 1, explanation: "Letters to editor address public issues like pollution, traffic, civic problems." },
      { quiz: englishQuiz2._id, questionText: "The correct format of a formal letter includes:", options: ["Only body", "Sender's address, date, receiver's address, subject, body, closing", "Only greeting and body", "No format needed"], correctAnswer: 1, marks: 1, explanation: "Formal letters follow strict format with all components." },
      { quiz: englishQuiz2._id, questionText: "An article should have:", options: ["Only facts", "Heading, byline, introduction, body, conclusion", "Only opinions", "No structure"], correctAnswer: 1, marks: 1, explanation: "A well-structured article has heading, byline, intro, body, and conclusion." },
      { quiz: englishQuiz2._id, questionText: "In a complaint letter, the tone should be:", options: ["Angry and rude", "Polite but firm", "Casual", "Threatening"], correctAnswer: 1, marks: 1, explanation: "Complaint letters should be polite but firm, clearly stating the problem." },
      { quiz: englishQuiz2._id, questionText: "What is the purpose of 'subject line' in a formal letter?", options: ["Decoration", "To state the purpose briefly", "Not needed", "To greet"], correctAnswer: 1, marks: 1, explanation: "Subject line briefly states the purpose so reader knows the topic immediately." },
      { quiz: englishQuiz2._id, questionText: "An application for leave should include:", options: ["Only dates", "Reason, duration, and polite request", "Only the reason", "No details needed"], correctAnswer: 1, marks: 1, explanation: "Leave application needs reason, dates, and a polite request for approval." },
      { quiz: englishQuiz2._id, questionText: "The closing of a formal letter to unknown person is:", options: ["Yours lovingly", "Yours faithfully", "With love", "Best wishes"], correctAnswer: 1, marks: 1, explanation: "'Yours faithfully' is used when you don't know the recipient's name." },
      { quiz: englishQuiz2._id, questionText: "An article on 'Importance of Trees' should include:", options: ["Only statistics", "Introduction, benefits, current scenario, conclusion with appeal", "Only personal experience", "Only scientific names"], correctAnswer: 1, marks: 1, explanation: "A good article covers multiple aspects with a clear structure." },
      { quiz: englishQuiz2._id, questionText: "Word limit for a formal letter in board exams is usually:", options: ["50 words", "100-120 words", "500 words", "No limit"], correctAnswer: 1, marks: 1, explanation: "Board exam formal letters are typically 100-120 words." },
      { quiz: englishQuiz2._id, questionText: "A notice should be written in:", options: ["First person", "Third person", "Second person", "Any person"], correctAnswer: 2, marks: 1, explanation: "Notices are written in third person and passive voice for formality." },
    ]);

    // Subcategory 3: Literature and Prose Comprehension
    const englishQuiz3 = await Quiz.create({
      title: "Literature and Prose Comprehension",
      subject: "English",
      category: "Literature",
      chapter: "Prose and Poetry",
      grade: 10,
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: englishQuiz3._id, questionText: "What is 'characterization' in literature?", options: ["Setting description", "How an author develops characters", "Plot summary", "Theme statement"], correctAnswer: 1, marks: 1, explanation: "Characterization is how an author reveals character traits through actions, dialogue, thoughts." },
      { quiz: englishQuiz3._id, questionText: "What is 'foreshadowing'?", options: ["Looking back at past events", "Hints about future events in the story", "The ending of a story", "Character description"], correctAnswer: 1, marks: 1, explanation: "Foreshadowing gives hints or clues about what will happen later in the story." },
      { quiz: englishQuiz3._id, questionText: "What is a 'flashback'?", options: ["A future event", "A scene showing past events", "The climax", "The resolution"], correctAnswer: 1, marks: 1, explanation: "Flashback interrupts the narrative to show events that happened earlier." },
      { quiz: englishQuiz3._id, questionText: "What is 'point of view' in a story?", options: ["The moral", "The perspective from which story is told", "The setting", "The conflict"], correctAnswer: 1, marks: 1, explanation: "Point of view is the perspective (first person, third person) from which the story is narrated." },
      { quiz: englishQuiz3._id, questionText: "What is 'satire'?", options: ["A love story", "Using humor to criticize society", "A sad poem", "A biography"], correctAnswer: 1, marks: 1, explanation: "Satire uses humor, irony, or exaggeration to criticize and expose societal flaws." },
      { quiz: englishQuiz3._id, questionText: "What is the difference between 'prose' and 'poetry'?", options: ["No difference", "Prose is ordinary language; poetry has rhythm and often rhyme", "Poetry is longer", "Prose always rhymes"], correctAnswer: 1, marks: 1, explanation: "Prose is written in ordinary language; poetry uses rhythm, meter, and often rhyme." },
      { quiz: englishQuiz3._id, questionText: "What is an 'allegory'?", options: ["A short poem", "A story with hidden moral/political meaning", "A type of novel", "A comedy"], correctAnswer: 1, marks: 1, explanation: "An allegory is a story where characters and events represent deeper meanings." },
      { quiz: englishQuiz3._id, questionText: "What is 'conflict' in a story?", options: ["The ending", "The struggle between opposing forces", "The setting", "The characters"], correctAnswer: 1, marks: 1, explanation: "Conflict is the struggle (man vs man, man vs nature, man vs self) that drives the plot." },
      { quiz: englishQuiz3._id, questionText: "What is 'denouement'?", options: ["The beginning", "The climax", "The resolution/final outcome", "The rising action"], correctAnswer: 2, marks: 1, explanation: "Denouement is the final resolution where all loose ends are tied up." },
      { quiz: englishQuiz3._id, questionText: "What is 'stream of consciousness' writing?", options: ["Writing about rivers", "Narrating character's continuous flow of thoughts", "Writing in bullet points", "Dialogue-only writing"], correctAnswer: 1, marks: 1, explanation: "Stream of consciousness presents a character's continuous, unfiltered thoughts." },
    ]);

    console.log("✓ Class 10 - English: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass10English;
