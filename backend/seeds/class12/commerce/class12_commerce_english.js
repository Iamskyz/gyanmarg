import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceEnglish = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Flamingo and Vistas - Prose",
      subject: "English",
      category: "Literature",
      chapter: "Prose",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "'The Third Level' by Jack Finney is about:", options: ["A real train station", "Escape from modern stress through time travel fantasy", "Science experiment", "War story"], correctAnswer: 1, marks: 1, explanation: "Charley imagines a third level at Grand Central as escape from modern life's pressures." },
      { quiz: quiz1._id, questionText: "'The Tiger King' is a satire on:", options: ["Wildlife", "Arrogance of power and superstition", "Hunting skills", "Royal lifestyle"], correctAnswer: 1, marks: 1, explanation: "The story satirizes the Maharaja's obsession with killing tigers to defy a prophecy." },
      { quiz: quiz1._id, questionText: "'Journey to the End of the Earth' highlights:", options: ["Tourism", "Impact of climate change on Antarctica", "Space travel", "Mountain climbing"], correctAnswer: 1, marks: 1, explanation: "Tishani Doshi's account emphasizes environmental concerns about Antarctica." },
      { quiz: quiz1._id, questionText: "'The Enemy' by Pearl S. Buck explores:", options: ["War strategy", "Conflict between duty as doctor and patriotism", "Love story", "Adventure"], correctAnswer: 1, marks: 1, explanation: "Dr. Sadao faces moral dilemma: save an enemy soldier or be loyal to his country." },
      { quiz: quiz1._id, questionText: "In 'On the Face of It', Derry has:", options: ["A burnt face (acid burn)", "A broken leg", "Blindness", "Deafness"], correctAnswer: 0, marks: 1, explanation: "Derry has a face burnt by acid and struggles with self-image and isolation." },
      { quiz: quiz1._id, questionText: "'Memories of Childhood' includes accounts by:", options: ["Two male authors", "Zitkala-Sa and Bama", "British authors", "Scientists"], correctAnswer: 1, marks: 1, explanation: "Both Zitkala-Sa (Native American) and Bama (Dalit) share experiences of discrimination." },
      { quiz: quiz1._id, questionText: "'The Last Lesson' is set during:", options: ["World War I", "Franco-Prussian War", "World War II", "French Revolution"], correctAnswer: 1, marks: 1, explanation: "Set during Franco-Prussian War when Alsace was forced to learn German instead of French." },
      { quiz: quiz1._id, questionText: "'Evans Tries an O-Level' is about:", options: ["A student", "A prisoner who plans escape during an exam", "A teacher", "An officer"], correctAnswer: 1, marks: 1, explanation: "Evans, a clever prisoner, uses an O-Level German exam as cover for his escape." },
      { quiz: quiz1._id, questionText: "'Should Wizard Hit Mommy?' explores:", options: ["Magic tricks", "Parental authority vs child's perspective", "Wizard stories", "School life"], correctAnswer: 1, marks: 1, explanation: "Jack's daughter Jo questions the story's ending, challenging parental narrative authority." },
      { quiz: quiz1._id, questionText: "'The Cutting of My Long Hair' by Zitkala-Sa symbolizes:", options: ["Fashion", "Loss of cultural identity", "Hygiene", "Growth"], correctAnswer: 1, marks: 1, explanation: "Forced hair cutting represents stripping of Native American cultural identity." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Poetry and Literary Devices",
      subject: "English",
      category: "Literature",
      chapter: "Poetry",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "'A Thing of Beauty is a joy forever' — the poet is:", options: ["Shelley", "John Keats", "Wordsworth", "Byron"], correctAnswer: 1, marks: 1, explanation: "This famous line is from Keats' poem 'Endymion'." },
      { quiz: quiz2._id, questionText: "In 'Keeping Quiet', silence is NOT about:", options: ["Introspection", "Total inactivity or death", "Peace", "Self-reflection"], correctAnswer: 1, marks: 1, explanation: "Neruda clarifies his silence is not about death or total inactivity but reflection." },
      { quiz: quiz2._id, questionText: "Synecdoche is a figure of speech where:", options: ["Opposite is stated", "Part represents whole or whole represents part", "Exaggeration is used", "Sounds are repeated"], correctAnswer: 1, marks: 1, explanation: "Synecdoche: 'All hands on deck' — hands represent sailors (part for whole)." },
      { quiz: quiz2._id, questionText: "Irony in literature means:", options: ["Literal meaning", "Saying opposite of what is meant or unexpected outcome", "Repetition", "Comparison"], correctAnswer: 1, marks: 1, explanation: "Irony involves contrast between expectation and reality or saying vs meaning." },
      { quiz: quiz2._id, questionText: "An elegy is a poem that:", options: ["Celebrates victory", "Mourns the dead or expresses grief", "Tells a story", "Praises nature"], correctAnswer: 1, marks: 1, explanation: "An elegy is a mournful poem, typically lamenting the dead." },
      { quiz: quiz2._id, questionText: "Enjambment in poetry means:", options: ["End-stopped lines", "Continuation of sentence beyond line break", "Rhyming couplet", "Repetition"], correctAnswer: 1, marks: 1, explanation: "Enjambment: thought continues from one line to next without pause." },
      { quiz: quiz2._id, questionText: "A sonnet has:", options: ["10 lines", "14 lines", "20 lines", "8 lines"], correctAnswer: 1, marks: 1, explanation: "A sonnet is a 14-line poem with specific rhyme schemes." },
      { quiz: quiz2._id, questionText: "Imagery in poetry appeals to:", options: ["Only sight", "All five senses", "Only hearing", "Only touch"], correctAnswer: 1, marks: 1, explanation: "Imagery creates mental pictures using visual, auditory, tactile, olfactory, and gustatory details." },
      { quiz: quiz2._id, questionText: "A ballad is:", options: ["A love letter", "A narrative poem often set to music", "An essay", "A drama"], correctAnswer: 1, marks: 1, explanation: "Ballads are narrative poems that tell stories, traditionally sung." },
      { quiz: quiz2._id, questionText: "Anaphora is:", options: ["Ending repetition", "Repetition of words at the beginning of successive lines", "Sound imitation", "Exaggeration"], correctAnswer: 1, marks: 1, explanation: "Anaphora repeats the same word/phrase at the start of consecutive lines for emphasis." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Writing Skills and Grammar",
      subject: "English",
      category: "Grammar",
      chapter: "Writing and Grammar",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "A précis should be:", options: ["Longer than original", "About one-third of the original length", "Same length", "Only one sentence"], correctAnswer: 1, marks: 1, explanation: "A précis condenses the original to about one-third while retaining key ideas." },
      { quiz: quiz3._id, questionText: "In a debate, the speaker must:", options: ["Only agree", "Present arguments for or against the motion", "Tell stories", "Ask questions only"], correctAnswer: 1, marks: 1, explanation: "Debate requires structured arguments supporting or opposing the given motion." },
      { quiz: quiz3._id, questionText: "Which is a compound-complex sentence?", options: ["He ran fast.", "He ran fast, but he missed the bus because he was late.", "Although he ran, he missed it.", "He ran and won."], correctAnswer: 1, marks: 1, explanation: "Compound-complex has at least two independent clauses and one dependent clause." },
      { quiz: quiz3._id, questionText: "The gerund in 'Swimming is good exercise' is:", options: ["Good", "Swimming", "Exercise", "Is"], correctAnswer: 1, marks: 1, explanation: "Swimming is a gerund (verb form -ing used as noun) functioning as subject." },
      { quiz: quiz3._id, questionText: "Speech writing must include:", options: ["Only greeting", "Greeting, introduction, body, conclusion", "Only conclusion", "Only facts"], correctAnswer: 1, marks: 1, explanation: "A speech needs proper structure: address, introduction, main points, and conclusion." },
      { quiz: quiz3._id, questionText: "'The book which I bought is interesting.' The underlined clause is:", options: ["Noun clause", "Adjective/Relative clause", "Adverb clause", "Main clause"], correctAnswer: 1, marks: 1, explanation: "'Which I bought' is a relative clause modifying 'book' (adjective function)." },
      { quiz: quiz3._id, questionText: "Active: 'Someone has stolen my wallet.' Passive:", options: ["My wallet is stolen.", "My wallet has been stolen.", "My wallet was stolen.", "My wallet had been stolen."], correctAnswer: 1, marks: 1, explanation: "Present perfect active → present perfect passive: has/have been + past participle." },
      { quiz: quiz3._id, questionText: "A letter to the editor should:", options: ["Be very long", "Be concise, address a public issue, suggest solutions", "Be personal", "Have no subject line"], correctAnswer: 1, marks: 1, explanation: "Letters to editor are brief, address public concerns, and may suggest solutions." },
      { quiz: quiz3._id, questionText: "Identify the error: 'Each of the students have submitted their assignment.'", options: ["Each", "have (should be 'has')", "submitted", "assignment"], correctAnswer: 1, marks: 1, explanation: "'Each' is singular — requires 'has' not 'have'." },
      { quiz: quiz3._id, questionText: "A poster should have:", options: ["Long paragraphs", "Eye-catching visuals, brief text, and clear message", "No images", "Only text"], correctAnswer: 1, marks: 1, explanation: "Effective posters use visuals, minimal text, and convey message at a glance." },
    ]);

    console.log("✓ Class 12 Commerce - English: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceEnglish };
