import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsPoliticalScience = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Political Theory - Constitution and State",
      subject: "Political Science",
      category: "Political Theory",
      chapter: "Constitution and State",
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
      { quiz: quiz1._id, questionText: "What are the essential elements of a State?", options: ["Population, Territory, Government, Sovereignty", "Population, Army, Government, Law", "Territory, Religion, Government, Economy", "Population, Language, Culture, Army"], correctAnswer: 0, marks: 1, explanation: "A State must have population, territory, government, and sovereignty." },
      { quiz: quiz1._id, questionText: "Who wrote 'The Social Contract'?", options: ["John Locke", "Jean-Jacques Rousseau", "Thomas Hobbes", "Montesquieu"], correctAnswer: 1, marks: 1, explanation: "Rousseau wrote 'The Social Contract' (1762) proposing popular sovereignty." },
      { quiz: quiz1._id, questionText: "The Indian Constitution was adopted on:", options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1949"], correctAnswer: 1, marks: 1, explanation: "The Constitution was adopted on 26 November 1949 and came into effect on 26 January 1950." },
      { quiz: quiz1._id, questionText: "Who is called the 'Father of the Indian Constitution'?", options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"], correctAnswer: 1, marks: 1, explanation: "Dr. B.R. Ambedkar was the chairman of the Drafting Committee." },
      { quiz: quiz1._id, questionText: "Sovereignty means:", options: ["Military power", "Supreme and absolute authority of the State", "Economic strength", "Large population"], correctAnswer: 1, marks: 1, explanation: "Sovereignty is the supreme authority of a state to govern itself without external interference." },
      { quiz: quiz1._id, questionText: "Which type of government has power divided between central and state governments?", options: ["Unitary", "Federal", "Confederate", "Autocratic"], correctAnswer: 1, marks: 1, explanation: "Federal government divides power between central and regional/state governments." },
      { quiz: quiz1._id, questionText: "The Preamble of Indian Constitution begins with:", options: ["We the citizens", "We the people of India", "The Government of India", "The Republic of India"], correctAnswer: 1, marks: 1, explanation: "The Preamble begins with 'We the people of India' indicating popular sovereignty." },
      { quiz: quiz1._id, questionText: "Secularism in Indian context means:", options: ["Anti-religion", "Equal respect for all religions by the State", "State religion", "No religion allowed"], correctAnswer: 1, marks: 1, explanation: "Indian secularism means the State treats all religions equally without favoring any." },
      { quiz: quiz1._id, questionText: "The concept of 'Rule of Law' was given by:", options: ["Austin", "A.V. Dicey", "Bentham", "Marx"], correctAnswer: 1, marks: 1, explanation: "A.V. Dicey propounded the concept of Rule of Law in his work on constitutional law." },
      { quiz: quiz1._id, questionText: "How many Fundamental Rights are there in the Indian Constitution?", options: ["5", "6", "7", "8"], correctAnswer: 1, marks: 1, explanation: "There are 6 Fundamental Rights (Right to Property was removed by 44th Amendment)." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Indian Government and Politics",
      subject: "Political Science",
      category: "Indian Politics",
      chapter: "Government Structure",
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
      { quiz: quiz2._id, questionText: "The President of India is elected by:", options: ["Direct election by citizens", "Electoral college of elected MPs and MLAs", "Parliament only", "Rajya Sabha only"], correctAnswer: 1, marks: 1, explanation: "The President is elected by an electoral college of elected members of Parliament and State Legislatures." },
      { quiz: quiz2._id, questionText: "The Rajya Sabha can have a maximum of how many members?", options: ["200", "250", "300", "245"], correctAnswer: 1, marks: 1, explanation: "Rajya Sabha can have maximum 250 members (238 elected + 12 nominated)." },
      { quiz: quiz2._id, questionText: "Who appoints the Chief Minister of a State?", options: ["President", "Governor", "Prime Minister", "Chief Justice"], correctAnswer: 1, marks: 1, explanation: "The Governor appoints the Chief Minister, usually the leader of the majority party." },
      { quiz: quiz2._id, questionText: "Judicial Review means:", options: ["Judges reviewing each other", "Courts can examine constitutionality of laws", "Parliament reviewing judiciary", "Executive reviewing courts"], correctAnswer: 1, marks: 1, explanation: "Judicial Review is the power of courts to examine and invalidate unconstitutional laws." },
      { quiz: quiz2._id, questionText: "The 73rd Amendment is related to:", options: ["Fundamental Rights", "Panchayati Raj Institutions", "Emergency provisions", "Election Commission"], correctAnswer: 1, marks: 1, explanation: "The 73rd Amendment (1992) gave constitutional status to Panchayati Raj Institutions." },
      { quiz: quiz2._id, questionText: "Money Bill can be introduced only in:", options: ["Rajya Sabha", "Lok Sabha", "Either House", "Joint Session"], correctAnswer: 1, marks: 1, explanation: "Money Bills can only be introduced in Lok Sabha (Article 110)." },
      { quiz: quiz2._id, questionText: "The Election Commission of India is:", options: ["Part of judiciary", "An independent constitutional body", "Part of executive", "Part of legislature"], correctAnswer: 1, marks: 1, explanation: "The Election Commission is an autonomous constitutional body (Article 324)." },
      { quiz: quiz2._id, questionText: "Emergency under Article 352 is called:", options: ["Financial Emergency", "National Emergency", "State Emergency", "Constitutional Emergency"], correctAnswer: 1, marks: 1, explanation: "Article 352 deals with National Emergency due to war, external aggression, or armed rebellion." },
      { quiz: quiz2._id, questionText: "The CAG (Comptroller and Auditor General) audits:", options: ["Private companies", "Government accounts", "Banks only", "Foreign trade"], correctAnswer: 1, marks: 1, explanation: "CAG audits all government expenditure to ensure financial accountability." },
      { quiz: quiz2._id, questionText: "Which schedule of the Constitution deals with languages?", options: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"], correctAnswer: 1, marks: 1, explanation: "The 8th Schedule lists officially recognized languages (currently 22)." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Rights, Liberty and Equality",
      subject: "Political Science",
      category: "Political Theory",
      chapter: "Rights and Liberty",
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
      { quiz: quiz3._id, questionText: "Right to Equality is guaranteed under which Articles?", options: ["Articles 12-18", "Articles 14-18", "Articles 19-22", "Articles 25-28"], correctAnswer: 1, marks: 1, explanation: "Articles 14-18 guarantee Right to Equality including equality before law." },
      { quiz: quiz3._id, questionText: "Liberty in political sense means:", options: ["Doing anything without restriction", "Freedom to act within reasonable limits of law", "Freedom from government", "Anarchy"], correctAnswer: 1, marks: 1, explanation: "Political liberty means freedom to act within the framework of law and without harming others." },
      { quiz: quiz3._id, questionText: "Who said 'Man is born free but everywhere he is in chains'?", options: ["Locke", "Rousseau", "Hobbes", "Mill"], correctAnswer: 1, marks: 1, explanation: "Rousseau wrote this famous line in 'The Social Contract' (1762)." },
      { quiz: quiz3._id, questionText: "Positive liberty means:", options: ["Freedom from restrictions", "Freedom to develop one's potential", "No government interference", "Economic freedom only"], correctAnswer: 1, marks: 1, explanation: "Positive liberty is the freedom to achieve one's potential and self-realization." },
      { quiz: quiz3._id, questionText: "Right to Constitutional Remedies is under which Article?", options: ["Article 14", "Article 32", "Article 19", "Article 21"], correctAnswer: 1, marks: 1, explanation: "Article 32 provides Right to Constitutional Remedies — called the 'heart and soul' of the Constitution." },
      { quiz: quiz3._id, questionText: "Which is NOT a Fundamental Right?", options: ["Right to Equality", "Right to Property", "Right to Freedom", "Right against Exploitation"], correctAnswer: 1, marks: 1, explanation: "Right to Property was removed as a Fundamental Right by the 44th Amendment (1978)." },
      { quiz: quiz3._id, questionText: "Social equality means:", options: ["Equal wealth for all", "Absence of discrimination based on caste, religion, gender", "Same job for all", "Equal political power"], correctAnswer: 1, marks: 1, explanation: "Social equality means no discrimination based on birth, caste, religion, or gender." },
      { quiz: quiz3._id, questionText: "DPSP (Directive Principles) are:", options: ["Legally enforceable", "Non-justiciable guidelines for governance", "Fundamental Rights", "Emergency provisions"], correctAnswer: 1, marks: 1, explanation: "DPSPs are non-justiciable (not enforceable by courts) but fundamental in governance." },
      { quiz: quiz3._id, questionText: "John Stuart Mill is associated with:", options: ["Communism", "Liberalism and individual liberty", "Fascism", "Anarchism"], correctAnswer: 1, marks: 1, explanation: "J.S. Mill championed individual liberty and utilitarianism in his work 'On Liberty'." },
      { quiz: quiz3._id, questionText: "Which writ means 'to have the body'?", options: ["Mandamus", "Habeas Corpus", "Certiorari", "Quo Warranto"], correctAnswer: 1, marks: 1, explanation: "Habeas Corpus (Latin: 'have the body') protects against unlawful detention." },
    ]);

    console.log("✓ Class 11 Arts - Political Science: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsPoliticalScience };
