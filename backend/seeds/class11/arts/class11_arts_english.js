import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsEnglish = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "English Literature - Prose and Poetry",
      subject: "English",
      category: "Literature",
      chapter: "Prose and Poetry",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Who wrote 'The Portrait of a Lady' (Hornbill textbook)?", options: ["R.K. Narayan", "Khushwant Singh", "Ruskin Bond", "Mulk Raj Anand"], correctAnswer: 1, marks: 1, explanation: "Khushwant Singh wrote 'The Portrait of a Lady' about his grandmother." },
      { quiz: quiz1._id, questionText: "'A Photograph' by Shirley Toulson is about:", options: ["Nature", "Loss and memory of her mother", "Childhood games", "Travel"], correctAnswer: 1, marks: 1, explanation: "The poem reflects on the poet's mother through an old photograph and the pain of loss." },
      { quiz: quiz1._id, questionText: "In 'We're Not Afraid to Die', the family sailed on:", options: ["Atlantic Ocean", "Southern Indian Ocean", "Pacific Ocean", "Arctic Ocean"], correctAnswer: 1, marks: 1, explanation: "The family sailed through the southern Indian Ocean facing a terrible storm." },
      { quiz: quiz1._id, questionText: "Who is the author of 'Discovering Tut: The Saga Continues'?", options: ["A.R. Williams", "Khushwant Singh", "Nani Palkhivala", "Nick Middleton"], correctAnswer: 0, marks: 1, explanation: "A.R. Williams wrote about the CT scan of King Tutankhamun's mummy." },
      { quiz: quiz1._id, questionText: "'The Laburnum Top' is written by:", options: ["Shirley Toulson", "Ted Hughes", "Walt Whitman", "John Keats"], correctAnswer: 1, marks: 1, explanation: "Ted Hughes wrote 'The Laburnum Top' describing a goldfinch visiting the tree." },
      { quiz: quiz1._id, questionText: "In 'The Voice of the Rain' by Walt Whitman, rain calls itself:", options: ["Gift of God", "Poem of Earth", "Tears of sky", "River of heaven"], correctAnswer: 1, marks: 1, explanation: "Rain describes itself as the 'Poem of Earth' in Whitman's poem." },
      { quiz: quiz1._id, questionText: "'Silk Road' by Nick Middleton describes a journey through:", options: ["China", "Tibet", "India", "Mongolia"], correctAnswer: 1, marks: 1, explanation: "Nick Middleton describes his journey through Tibet along the ancient Silk Road." },
      { quiz: quiz1._id, questionText: "The central theme of 'The Summer of the Beautiful White Horse' is:", options: ["Poverty and theft", "Honesty and integrity despite poverty", "Horse racing", "Family conflict"], correctAnswer: 1, marks: 1, explanation: "The story shows how the Garoghlanian tribe maintained honesty despite extreme poverty." },
      { quiz: quiz1._id, questionText: "Who wrote 'The Summer of the Beautiful White Horse'?", options: ["Ruskin Bond", "William Saroyan", "R.K. Narayan", "Mark Twain"], correctAnswer: 1, marks: 1, explanation: "William Saroyan wrote this story about Armenian boys and a stolen horse." },
      { quiz: quiz1._id, questionText: "'The Address' by Marga Minco deals with:", options: ["War and displacement", "Post-war recovery of belongings", "School life", "Nature"], correctAnswer: 1, marks: 1, explanation: "The story deals with a Holocaust survivor trying to recover her mother's possessions." },
    ]);

    const quiz2 = await Quiz.create({
      title: "English Grammar and Writing",
      subject: "English",
      category: "Grammar",
      chapter: "Grammar and Composition",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "Identify the correct passive voice: 'She writes a letter.'", options: ["A letter is written by her.", "A letter was written by her.", "A letter has been written by her.", "A letter is being written by her."], correctAnswer: 0, marks: 1, explanation: "Simple present active becomes 'is/are + past participle + by agent' in passive." },
      { quiz: quiz2._id, questionText: "Which sentence uses the subjunctive mood correctly?", options: ["If I was rich, I would travel.", "If I were rich, I would travel.", "If I am rich, I would travel.", "If I be rich, I would travel."], correctAnswer: 1, marks: 1, explanation: "'Were' is used in subjunctive mood for hypothetical/unreal conditions." },
      { quiz: quiz2._id, questionText: "A clause that can stand alone as a sentence is called:", options: ["Dependent clause", "Independent clause", "Relative clause", "Noun clause"], correctAnswer: 1, marks: 1, explanation: "An independent clause has a subject and verb and expresses a complete thought." },
      { quiz: quiz2._id, questionText: "The figure of speech in 'The wind howled' is:", options: ["Simile", "Personification", "Metaphor", "Hyperbole"], correctAnswer: 1, marks: 1, explanation: "Personification gives human qualities (howling) to non-human things (wind)." },
      { quiz: quiz2._id, questionText: "Choose the correct sentence:", options: ["Neither the boys nor the girl were present.", "Neither the boys nor the girl was present.", "Neither the boys nor the girl are present.", "Neither the boys nor the girl have been present."], correctAnswer: 1, marks: 1, explanation: "With 'neither...nor', the verb agrees with the nearest subject ('girl' = singular)." },
      { quiz: quiz2._id, questionText: "An oxymoron is:", options: ["Exaggeration", "Combination of contradictory terms", "Comparison using 'like'", "Repetition of sounds"], correctAnswer: 1, marks: 1, explanation: "Oxymoron combines contradictory words like 'bitter sweet' or 'living dead'." },
      { quiz: quiz2._id, questionText: "Which is a complex sentence?", options: ["He ran fast.", "He ran fast and won the race.", "Although he ran fast, he lost the race.", "He ran fast; he won the race."], correctAnswer: 2, marks: 1, explanation: "A complex sentence has one independent clause and at least one dependent clause." },
      { quiz: quiz2._id, questionText: "The indirect speech of 'He said, \"I am happy\"' is:", options: ["He said that he is happy.", "He said that he was happy.", "He said that I am happy.", "He told that he was happy."], correctAnswer: 1, marks: 1, explanation: "In indirect speech, 'am' changes to 'was' and 'I' changes to 'he' (backshift)." },
      { quiz: quiz2._id, questionText: "A dangling modifier is:", options: ["A misplaced adjective", "A modifier without a clear subject to modify", "A split infinitive", "A double negative"], correctAnswer: 1, marks: 1, explanation: "A dangling modifier has no clear logical subject in the sentence." },
      { quiz: quiz2._id, questionText: "Alliteration is:", options: ["Repetition of vowel sounds", "Repetition of consonant sounds at the beginning of words", "Exaggeration", "Understatement"], correctAnswer: 1, marks: 1, explanation: "Alliteration is the repetition of initial consonant sounds in nearby words." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Reading Comprehension and Vocabulary",
      subject: "English",
      category: "Language Skills",
      chapter: "Comprehension and Vocabulary",
      grade: 11,
      stream: "arts",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "The word 'benevolent' means:", options: ["Cruel", "Kind and generous", "Angry", "Lazy"], correctAnswer: 1, marks: 1, explanation: "Benevolent means well-meaning, kind, and charitable." },
      { quiz: quiz3._id, questionText: "An antonym of 'verbose' is:", options: ["Wordy", "Concise", "Lengthy", "Elaborate"], correctAnswer: 1, marks: 1, explanation: "Verbose means using too many words; concise means brief and clear." },
      { quiz: quiz3._id, questionText: "The word 'ephemeral' means:", options: ["Permanent", "Short-lived", "Beautiful", "Dangerous"], correctAnswer: 1, marks: 1, explanation: "Ephemeral means lasting for a very short time." },
      { quiz: quiz3._id, questionText: "'To burn the midnight oil' means:", options: ["To waste resources", "To study or work late into the night", "To cook at night", "To travel at night"], correctAnswer: 1, marks: 1, explanation: "This idiom means to work or study late at night." },
      { quiz: quiz3._id, questionText: "A synonym of 'ubiquitous' is:", options: ["Rare", "Omnipresent", "Unique", "Hidden"], correctAnswer: 1, marks: 1, explanation: "Ubiquitous means present, appearing, or found everywhere." },
      { quiz: quiz3._id, questionText: "The prefix 'mis-' in 'misunderstand' indicates:", options: ["Again", "Wrongly", "Before", "After"], correctAnswer: 1, marks: 1, explanation: "The prefix 'mis-' means wrongly or badly." },
      { quiz: quiz3._id, questionText: "'Pragmatic' means:", options: ["Idealistic", "Dealing with things practically", "Theoretical", "Emotional"], correctAnswer: 1, marks: 1, explanation: "Pragmatic means dealing with things sensibly and realistically." },
      { quiz: quiz3._id, questionText: "A 'paradox' is:", options: ["A simple statement", "A seemingly contradictory statement that may be true", "A false statement", "A question"], correctAnswer: 1, marks: 1, explanation: "A paradox is a statement that seems contradictory but contains a truth." },
      { quiz: quiz3._id, questionText: "The word 'ameliorate' means:", options: ["Worsen", "Make better or improve", "Destroy", "Ignore"], correctAnswer: 1, marks: 1, explanation: "Ameliorate means to make something bad or unsatisfactory better." },
      { quiz: quiz3._id, questionText: "'To let the cat out of the bag' means:", options: ["To release an animal", "To reveal a secret", "To make a mistake", "To start a fight"], correctAnswer: 1, marks: 1, explanation: "This idiom means to accidentally reveal a secret." },
    ]);

    console.log("✓ Class 11 Arts - English: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsEnglish };
