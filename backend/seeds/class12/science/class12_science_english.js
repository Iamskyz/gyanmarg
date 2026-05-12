import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceEnglish = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Flamingo - Prose",
      subject: "English",
      category: "Literature",
      chapter: "Flamingo Prose",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Who wrote 'The Last Lesson'?", options: ["Louis Fischer", "Alphonse Daudet", "Anees Jung", "Tishani Doshi"], correctAnswer: 1, marks: 1, explanation: "Alphonse Daudet wrote 'The Last Lesson' about the Franco-Prussian War's impact on language." },
      { quiz: quiz1._id, questionText: "'Lost Spring' by Anees Jung is about:", options: ["Seasons", "Childhood lost to poverty and child labor", "Spring festival", "Nature"], correctAnswer: 1, marks: 1, explanation: "The chapter highlights children trapped in poverty — ragpickers and bangle makers." },
      { quiz: quiz1._id, questionText: "In 'Deep Water', William Douglas overcame his fear of:", options: ["Heights", "Water/swimming", "Darkness", "Public speaking"], correctAnswer: 1, marks: 1, explanation: "Douglas describes overcoming his deep fear of water through determination." },
      { quiz: quiz1._id, questionText: "'The Rattrap' is written by:", options: ["Anees Jung", "Selma Lagerlöf", "Alphonse Daudet", "Louis Fischer"], correctAnswer: 1, marks: 1, explanation: "Swedish author Selma Lagerlöf wrote 'The Rattrap' about human kindness." },
      { quiz: quiz1._id, questionText: "In 'Indigo', who led the Champaran movement?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Bose", "Sardar Patel"], correctAnswer: 1, marks: 1, explanation: "Gandhi led the Champaran movement (1917) for indigo farmers' rights." },
      { quiz: quiz1._id, questionText: "'Poets and Pancakes' is about:", options: ["Cooking", "Gemini Studios in Madras", "Poetry writing", "Painting"], correctAnswer: 1, marks: 1, explanation: "Asokamitran's account of working at Gemini Studios, a film production house." },
      { quiz: quiz1._id, questionText: "The theme of 'The Interview' revolves around:", options: ["Job interviews", "The art and ethics of interviewing", "School exams", "Court proceedings"], correctAnswer: 1, marks: 1, explanation: "The chapter discusses the interview as a journalistic tool and its impact." },
      { quiz: quiz1._id, questionText: "'Going Places' by A.R. Barton deals with:", options: ["Travel", "Adolescent fantasies and reality", "Sports", "Science fiction"], correctAnswer: 1, marks: 1, explanation: "Sophie's fantasies about meeting a footballer contrast with her working-class reality." },
      { quiz: quiz1._id, questionText: "In 'The Last Lesson', M. Hamel teaches:", options: ["English", "French (the last French lesson)", "German", "Mathematics"], correctAnswer: 1, marks: 1, explanation: "M. Hamel teaches the last French lesson before German is imposed in Alsace." },
      { quiz: quiz1._id, questionText: "'The Rattrap' uses the metaphor of the world as:", options: ["A prison", "A rattrap", "A garden", "A stage"], correctAnswer: 1, marks: 1, explanation: "The peddler sees the world as a rattrap with baits of riches and pleasures." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Flamingo - Poetry",
      subject: "English",
      category: "Literature",
      chapter: "Flamingo Poetry",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "'My Mother at Sixty-six' is written by:", options: ["Pablo Neruda", "Kamala Das", "Stephen Spender", "John Keats"], correctAnswer: 1, marks: 1, explanation: "Kamala Das wrote about her aging mother and the fear of losing her." },
      { quiz: quiz2._id, questionText: "'Keeping Quiet' by Pablo Neruda advocates:", options: ["Permanent silence", "A moment of introspection and stillness", "Political protest", "Religious meditation"], correctAnswer: 1, marks: 1, explanation: "Neruda asks for a moment of silence for self-reflection, not inactivity." },
      { quiz: quiz2._id, questionText: "'A Thing of Beauty' is taken from:", options: ["Paradise Lost", "Endymion by John Keats", "The Waste Land", "Ode to a Nightingale"], correctAnswer: 1, marks: 1, explanation: "The poem is from Keats' 'Endymion' — 'A thing of beauty is a joy forever.'" },
      { quiz: quiz2._id, questionText: "In 'Aunt Jennifer's Tigers', the tigers represent:", options: ["Fear", "Freedom and strength she lacks", "Danger", "Nature"], correctAnswer: 1, marks: 1, explanation: "The tigers symbolize the freedom and fearlessness Aunt Jennifer desires but lacks." },
      { quiz: quiz2._id, questionText: "'An Elementary School Classroom in a Slum' is by:", options: ["Kamala Das", "Stephen Spender", "Pablo Neruda", "Adrienne Rich"], correctAnswer: 1, marks: 1, explanation: "Stephen Spender wrote about the bleak lives of slum children and inequality in education." },
      { quiz: quiz2._id, questionText: "In 'Keeping Quiet', Neruda counts up to:", options: ["Ten", "Twelve", "Hundred", "Five"], correctAnswer: 1, marks: 1, explanation: "Neruda asks everyone to count to twelve and keep still." },
      { quiz: quiz2._id, questionText: "'My Mother at Sixty-six' compares the mother's face to:", options: ["A flower", "A corpse/moon (pale and lifeless)", "A painting", "A star"], correctAnswer: 1, marks: 1, explanation: "The mother's pale face is compared to a corpse and later to the late winter's moon." },
      { quiz: quiz2._id, questionText: "Aunt Jennifer's tigers are:", options: ["Real tigers", "Embroidered tigers on a panel", "Toy tigers", "Painted tigers"], correctAnswer: 1, marks: 1, explanation: "Aunt Jennifer embroiders tigers on a panel — they represent her suppressed desires." },
      { quiz: quiz2._id, questionText: "The poem 'A Roadside Stand' by Robert Frost is about:", options: ["Urban life", "Rural people's desire for city money and neglect by city folk", "Road construction", "Travel"], correctAnswer: 1, marks: 1, explanation: "Frost highlights rural people's hope to earn from passing city traffic and their disappointment." },
      { quiz: quiz2._id, questionText: "'A Thing of Beauty' says beauty provides:", options: ["Wealth", "Eternal joy and removes gloom", "Fame", "Power"], correctAnswer: 1, marks: 1, explanation: "Keats says a thing of beauty is a joy forever, giving us hope and removing sadness." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Grammar and Writing Skills",
      subject: "English",
      category: "Grammar",
      chapter: "Advanced Grammar",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Change to indirect: 'She said, \"I will come tomorrow.\"'", options: ["She said that she will come tomorrow.", "She said that she would come the next day.", "She said that she would come tomorrow.", "She told she will come the next day."], correctAnswer: 1, marks: 1, explanation: "'Will' becomes 'would' and 'tomorrow' becomes 'the next day' in indirect speech." },
      { quiz: quiz3._id, questionText: "The passive of 'They are building a bridge' is:", options: ["A bridge is built by them.", "A bridge is being built by them.", "A bridge was being built by them.", "A bridge has been built by them."], correctAnswer: 1, marks: 1, explanation: "Present continuous passive: is/are + being + past participle." },
      { quiz: quiz3._id, questionText: "A formal letter begins with:", options: ["Dear Friend", "The sender's address and date", "Hi there", "Greetings"], correctAnswer: 1, marks: 1, explanation: "Formal letters start with sender's address, date, receiver's address, then salutation." },
      { quiz: quiz3._id, questionText: "Which is correct? 'Neither of the students ___ present.'", options: ["were", "was", "are", "have been"], correctAnswer: 1, marks: 1, explanation: "'Neither of' takes a singular verb — 'was'." },
      { quiz: quiz3._id, questionText: "A notice should include:", options: ["Personal opinions", "Date, heading, body, and issuing authority", "Informal language", "Lengthy paragraphs"], correctAnswer: 1, marks: 1, explanation: "Notice writing requires date, heading, concise body, and name/designation of issuer." },
      { quiz: quiz3._id, questionText: "The correct form: 'If I ___ you, I would apologize.'", options: ["am", "were", "was", "be"], correctAnswer: 1, marks: 1, explanation: "Subjunctive mood uses 'were' for hypothetical conditions regardless of subject." },
      { quiz: quiz3._id, questionText: "An article writing should have:", options: ["Only facts", "Heading, byline, introduction, body, conclusion", "No paragraphs", "Only opinions"], correctAnswer: 1, marks: 1, explanation: "Article format: catchy heading, byline, intro, body paragraphs, and conclusion." },
      { quiz: quiz3._id, questionText: "'Had I known earlier, I would have helped.' This is:", options: ["First conditional", "Third conditional (past unreal)", "Second conditional", "Zero conditional"], correctAnswer: 1, marks: 1, explanation: "Third conditional: Had + past participle... would have + past participle (past unreal)." },
      { quiz: quiz3._id, questionText: "Report writing differs from article writing in:", options: ["Length only", "Objective tone and factual presentation", "Use of headings", "Nothing"], correctAnswer: 1, marks: 1, explanation: "Reports are objective and factual; articles can include personal views and creative style." },
      { quiz: quiz3._id, questionText: "Choose the correct sentence:", options: ["Each of the boys have their books.", "Each of the boys has his book.", "Each of the boys have his book.", "Each of the boys has their books."], correctAnswer: 1, marks: 1, explanation: "'Each' is singular, takes singular verb 'has' and singular pronoun 'his'." },
    ]);

    console.log("✓ Class 12 Science - English: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceEnglish };
