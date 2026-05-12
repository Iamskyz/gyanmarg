import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ScienceEnglish = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Advanced Grammar
    const engQuiz1 = await Quiz.create({
      title: "Advanced Grammar - Clauses and Conditionals",
      subject: "English",
      category: "Grammar",
      chapter: "Clauses and Conditionals",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: engQuiz1._id, questionText: "Which is a conditional sentence (Type 2)?", options: ["If it rains, I will stay.", "If I were rich, I would travel.", "If you heat water, it boils.", "If he comes, tell him."], correctAnswer: 1, marks: 1, explanation: "Type 2 conditional: If + past tense, would + base verb (unreal present)." },
      { quiz: engQuiz1._id, questionText: "'Unless' means:", options: ["If", "If not", "Although", "Because"], correctAnswer: 1, marks: 1, explanation: "'Unless' = 'if not'. Example: Unless you study, you will fail = If you don't study, you will fail." },
      { quiz: engQuiz1._id, questionText: "Identify the noun clause: 'What he said surprised me.'", options: ["What he said", "surprised me", "he said", "me"], correctAnswer: 0, marks: 1, explanation: "'What he said' acts as the subject (noun) of the sentence." },
      { quiz: engQuiz1._id, questionText: "'Had I known, I would have helped.' This is:", options: ["Type 1 conditional", "Type 2 conditional", "Type 3 conditional (inverted)", "Zero conditional"], correctAnswer: 2, marks: 1, explanation: "Type 3 conditional with inversion: Had + subject + past participle = If I had known." },
      { quiz: engQuiz1._id, questionText: "A relative clause begins with:", options: ["Because, since", "Who, which, that, whom", "And, but, or", "If, unless"], correctAnswer: 1, marks: 1, explanation: "Relative clauses use relative pronouns: who, which, that, whom, whose." },
      { quiz: engQuiz1._id, questionText: "'The man whose car was stolen reported to police.' The relative pronoun is:", options: ["The", "whose", "was", "stolen"], correctAnswer: 1, marks: 1, explanation: "'Whose' is the relative pronoun showing possession." },
      { quiz: engQuiz1._id, questionText: "Zero conditional is used for:", options: ["Unlikely situations", "General truths and facts", "Past regrets", "Future plans"], correctAnswer: 1, marks: 1, explanation: "Zero conditional: If + present, present. Used for facts: If you heat ice, it melts." },
      { quiz: engQuiz1._id, questionText: "'I wish I were taller.' This expresses:", options: ["A fact", "An unreal wish about present", "A past event", "A future plan"], correctAnswer: 1, marks: 1, explanation: "'I wish + past tense' expresses an unreal wish about the present." },
      { quiz: engQuiz1._id, questionText: "Non-defining relative clause:", options: ["Is essential for meaning", "Adds extra information, uses commas", "Uses 'that'", "Has no pronoun"], correctAnswer: 1, marks: 1, explanation: "Non-defining clauses add extra info and are set off by commas. Cannot use 'that'." },
      { quiz: engQuiz1._id, questionText: "'Provided that' is similar to:", options: ["Although", "If/on condition that", "Because", "While"], correctAnswer: 1, marks: 1, explanation: "'Provided that' = 'if' or 'on the condition that'." },
    ]);

    // Subcategory 2: Writing Skills
    const engQuiz2 = await Quiz.create({
      title: "Advanced Writing - Essays and Reports",
      subject: "English",
      category: "Writing",
      chapter: "Advanced Writing",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: engQuiz2._id, questionText: "An argumentative essay must have:", options: ["Only one viewpoint", "Thesis, arguments, counter-arguments, conclusion", "Only personal stories", "No conclusion"], correctAnswer: 1, marks: 1, explanation: "Argumentative essays present thesis, supporting arguments, counter-arguments, and conclusion." },
      { quiz: engQuiz2._id, questionText: "A 'thesis statement' is:", options: ["The title", "The main argument/claim of the essay", "A question", "The bibliography"], correctAnswer: 1, marks: 1, explanation: "Thesis statement is the central claim that the essay argues for." },
      { quiz: engQuiz2._id, questionText: "In report writing, the tone should be:", options: ["Emotional", "Objective and factual", "Poetic", "Casual"], correctAnswer: 1, marks: 1, explanation: "Reports should be objective, factual, and impersonal." },
      { quiz: engQuiz2._id, questionText: "A good essay conclusion should:", options: ["Introduce new ideas", "Restate thesis and summarize key points", "Ask questions", "Be longer than introduction"], correctAnswer: 1, marks: 1, explanation: "Conclusion restates the thesis and summarizes main arguments." },
      { quiz: engQuiz2._id, questionText: "What is a 'topic sentence'?", options: ["The title", "First sentence stating paragraph's main idea", "Last sentence", "A question"], correctAnswer: 1, marks: 1, explanation: "Topic sentence introduces the main idea of a paragraph." },
      { quiz: engQuiz2._id, questionText: "Coherence in writing means:", options: ["Using big words", "Logical flow and connection between ideas", "Writing long sentences", "Using many paragraphs"], correctAnswer: 1, marks: 1, explanation: "Coherence means ideas flow logically and are connected smoothly." },
      { quiz: engQuiz2._id, questionText: "A descriptive essay primarily uses:", options: ["Statistics", "Sensory details and vivid language", "Only facts", "Dialogue only"], correctAnswer: 1, marks: 1, explanation: "Descriptive essays use sensory details (sight, sound, smell, touch, taste)." },
      { quiz: engQuiz2._id, questionText: "What is 'plagiarism'?", options: ["Good writing", "Copying others' work without credit", "Using quotes", "Paraphrasing"], correctAnswer: 1, marks: 1, explanation: "Plagiarism is presenting someone else's work as your own without attribution." },
      { quiz: engQuiz2._id, questionText: "A formal report includes:", options: ["Slang", "Title, introduction, findings, conclusion, recommendations", "Only opinions", "No structure"], correctAnswer: 1, marks: 1, explanation: "Formal reports follow structured format with clear sections." },
      { quiz: engQuiz2._id, questionText: "Transition words help in:", options: ["Making text longer", "Connecting ideas between sentences/paragraphs", "Confusing readers", "Ending essays"], correctAnswer: 1, marks: 1, explanation: "Transitions (however, moreover, therefore) connect ideas smoothly." },
    ]);

    // Subcategory 3: Literature
    const engQuiz3 = await Quiz.create({
      title: "Literature - Poetry and Drama",
      subject: "English",
      category: "Literature",
      chapter: "Poetry and Drama",
      grade: 11,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: engQuiz3._id, questionText: "A 'soliloquy' in drama is:", options: ["Dialogue between two", "Character speaking thoughts aloud alone", "A song", "Stage direction"], correctAnswer: 1, marks: 1, explanation: "Soliloquy is when a character speaks their thoughts aloud while alone on stage." },
      { quiz: engQuiz3._id, questionText: "What is 'blank verse'?", options: ["Poetry with no meaning", "Unrhymed iambic pentameter", "Free verse", "Rhyming couplets"], correctAnswer: 1, marks: 1, explanation: "Blank verse is unrhymed poetry in iambic pentameter (Shakespeare used it)." },
      { quiz: engQuiz3._id, questionText: "An 'elegy' is:", options: ["A happy poem", "A poem mourning the dead", "A love poem", "A comic poem"], correctAnswer: 1, marks: 1, explanation: "An elegy is a poem of mourning, usually for a deceased person." },
      { quiz: engQuiz3._id, questionText: "What is 'tragic flaw' (hamartia)?", options: ["A plot hole", "Hero's weakness leading to downfall", "A happy ending", "A minor character"], correctAnswer: 1, marks: 1, explanation: "Hamartia is the tragic hero's flaw that leads to their downfall." },
      { quiz: engQuiz3._id, questionText: "'Catharsis' in tragedy means:", options: ["Comedy", "Emotional purification of audience", "Plot twist", "Happy ending"], correctAnswer: 1, marks: 1, explanation: "Catharsis is the emotional release/purification the audience feels through pity and fear." },
      { quiz: engQuiz3._id, questionText: "What is an 'ode'?", options: ["A short story", "A lyric poem addressing a subject with praise", "A novel", "A play"], correctAnswer: 1, marks: 1, explanation: "An ode is a formal lyric poem that addresses and praises a subject." },
      { quiz: engQuiz3._id, questionText: "What is 'dramatic irony'?", options: ["Funny dialogue", "Audience knows what characters don't", "A sad scene", "A monologue"], correctAnswer: 1, marks: 1, explanation: "Dramatic irony: audience has knowledge that characters lack." },
      { quiz: engQuiz3._id, questionText: "A 'monologue' is:", options: ["Two people talking", "One person's long speech", "A song", "A dance"], correctAnswer: 1, marks: 1, explanation: "A monologue is a long speech by one character, often to other characters." },
      { quiz: engQuiz3._id, questionText: "What is 'iambic pentameter'?", options: ["5 stressed syllables per line", "10 syllables with alternating unstressed/stressed pattern", "Free verse", "Rhyming pattern"], correctAnswer: 1, marks: 1, explanation: "Iambic pentameter: 10 syllables per line in unstressed-stressed pattern (da-DUM × 5)." },
      { quiz: engQuiz3._id, questionText: "A 'ballad' is:", options: ["A long novel", "A narrative poem/song telling a story", "An essay", "A drama"], correctAnswer: 1, marks: 1, explanation: "A ballad is a narrative poem or song that tells a story, often with repetition." },
    ]);

    console.log("✓ Class 11 Science - English: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11ScienceEnglish;
