import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsPoliticalScience = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Indian Constitution and Politics",
      subject: "Political Science",
      category: "Indian Politics",
      chapter: "Constitutional Framework",
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
      { quiz: quiz1._id, questionText: "The 42nd Amendment is known as?", options: ["Mini Constitution", "Restoration Amendment", "Rights Amendment", "Federal Amendment"], correctAnswer: 0, marks: 1, explanation: "It made extensive changes to the Constitution in 1976." },
      { quiz: quiz1._id, questionText: "Which amendment restored judicial review powers?", options: ["42nd", "43rd", "44th", "45th"], correctAnswer: 2, marks: 1, explanation: "The 44th Amendment (1978) reversed many 42nd Amendment changes." },
      { quiz: quiz1._id, questionText: "The Emergency of 1975 was declared under which Article?", options: ["Article 352", "Article 356", "Article 360", "Article 370"], correctAnswer: 0, marks: 1, explanation: "National Emergency was proclaimed under Article 352." },
      { quiz: quiz1._id, questionText: "Who appoints the Chief Election Commissioner?", options: ["Parliament", "President", "Prime Minister", "Chief Justice"], correctAnswer: 1, marks: 1, explanation: "The President appoints the CEC on advice of the government." },
      { quiz: quiz1._id, questionText: "Anti-defection law was added by which amendment?", options: ["50th", "52nd", "54th", "56th"], correctAnswer: 1, marks: 1, explanation: "52nd Amendment (1985) added the Tenth Schedule." },
      { quiz: quiz1._id, questionText: "Panchayati Raj was constitutionalized by which amendment?", options: ["71st", "73rd", "74th", "75th"], correctAnswer: 1, marks: 1, explanation: "73rd Amendment (1992) gave constitutional status to Panchayats." },
      { quiz: quiz1._id, questionText: "Right to Education was added by which amendment?", options: ["84th", "86th", "88th", "90th"], correctAnswer: 1, marks: 1, explanation: "86th Amendment (2002) made education a fundamental right (Article 21A)." },
      { quiz: quiz1._id, questionText: "How many members are in the Rajya Sabha?", options: ["240", "245", "250", "260"], correctAnswer: 1, marks: 1, explanation: "Maximum 250 members, of which 12 are nominated by the President." },
      { quiz: quiz1._id, questionText: "Who is the final interpreter of the Indian Constitution?", options: ["President", "Parliament", "Supreme Court", "Prime Minister"], correctAnswer: 2, marks: 1, explanation: "Supreme Court has the power of judicial review." },
      { quiz: quiz1._id, questionText: "GST was introduced by which amendment?", options: ["99th", "100th", "101st", "102nd"], correctAnswer: 2, marks: 1, explanation: "101st Amendment (2016) introduced the GST regime." },
    ]);

    const quiz2 = await Quiz.create({
      title: "International Relations",
      subject: "Political Science",
      category: "International Politics",
      chapter: "Cold War and Beyond",
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
      { quiz: quiz2._id, questionText: "NAM stands for?", options: ["National Alliance Movement", "Non-Aligned Movement", "New Asian Movement", "North Atlantic Movement"], correctAnswer: 1, marks: 1, explanation: "Countries not aligned with either USA or USSR bloc." },
      { quiz: quiz2._id, questionText: "The Cuban Missile Crisis occurred in which year?", options: ["1960", "1962", "1964", "1966"], correctAnswer: 1, marks: 1, explanation: "A 13-day confrontation between USA and USSR in October 1962." },
      { quiz: quiz2._id, questionText: "ASEAN was established in which year?", options: ["1965", "1967", "1969", "1971"], correctAnswer: 1, marks: 1, explanation: "Founded in Bangkok by 5 Southeast Asian nations." },
      { quiz: quiz2._id, questionText: "The Soviet Union dissolved in which year?", options: ["1989", "1990", "1991", "1992"], correctAnswer: 2, marks: 1, explanation: "USSR officially dissolved on December 26, 1991." },
      { quiz: quiz2._id, questionText: "India's 'Look East Policy' was initiated by?", options: ["Rajiv Gandhi", "P.V. Narasimha Rao", "Vajpayee", "Manmohan Singh"], correctAnswer: 1, marks: 1, explanation: "Initiated in 1991 to strengthen ties with Southeast Asia." },
      { quiz: quiz2._id, questionText: "The UN Security Council has how many permanent members?", options: ["3", "5", "7", "10"], correctAnswer: 1, marks: 1, explanation: "USA, UK, France, Russia, and China are the P5." },
      { quiz: quiz2._id, questionText: "NATO was formed in which year?", options: ["1947", "1949", "1951", "1953"], correctAnswer: 1, marks: 1, explanation: "North Atlantic Treaty Organization was formed for collective defense." },
      { quiz: quiz2._id, questionText: "Globalization primarily accelerated after?", options: ["1970s", "1980s", "1991", "2000s"], correctAnswer: 2, marks: 1, explanation: "End of Cold War and economic liberalization accelerated globalization." },
      { quiz: quiz2._id, questionText: "SAARC was founded in which year?", options: ["1983", "1985", "1987", "1989"], correctAnswer: 1, marks: 1, explanation: "South Asian Association for Regional Cooperation was founded in Dhaka." },
      { quiz: quiz2._id, questionText: "The Bandung Conference (1955) led to?", options: ["NATO", "Non-Aligned Movement", "ASEAN", "EU"], correctAnswer: 1, marks: 1, explanation: "It laid the foundation for NAM and Afro-Asian solidarity." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Indian Politics Since Independence",
      subject: "Political Science",
      category: "Indian Politics",
      chapter: "Politics of Planned Development",
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
      { quiz: quiz3._id, questionText: "India adopted the planning model from which country?", options: ["USA", "USSR", "UK", "France"], correctAnswer: 1, marks: 1, explanation: "India adopted Five Year Plans inspired by Soviet planning." },
      { quiz: quiz3._id, questionText: "The first general elections in India were held in?", options: ["1950", "1951-52", "1953", "1955"], correctAnswer: 1, marks: 1, explanation: "India's first general elections were held in 1951-52." },
      { quiz: quiz3._id, questionText: "The era of coalition politics in India began prominently in?", options: ["1977", "1989", "1996", "1999"], correctAnswer: 1, marks: 1, explanation: "1989 elections led to the first major coalition government." },
      { quiz: quiz3._id, questionText: "LPG reforms were introduced in which year?", options: ["1989", "1991", "1993", "1995"], correctAnswer: 1, marks: 1, explanation: "Liberalization, Privatization, Globalization reforms under Narasimha Rao." },
      { quiz: quiz3._id, questionText: "The Mandal Commission report was implemented in?", options: ["1980", "1985", "1990", "1995"], correctAnswer: 2, marks: 1, explanation: "V.P. Singh implemented OBC reservations in 1990." },
      { quiz: quiz3._id, questionText: "India's nuclear tests at Pokhran-II were conducted in?", options: ["1996", "1998", "2000", "2002"], correctAnswer: 1, marks: 1, explanation: "Operation Shakti was conducted in May 1998." },
      { quiz: quiz3._id, questionText: "The Congress system dominance ended with which election?", options: ["1967", "1971", "1977", "1980"], correctAnswer: 0, marks: 1, explanation: "1967 elections saw Congress losing in many states for the first time." },
      { quiz: quiz3._id, questionText: "RTI Act was passed in which year?", options: ["2003", "2005", "2007", "2009"], correctAnswer: 1, marks: 1, explanation: "Right to Information Act empowered citizens to seek government information." },
      { quiz: quiz3._id, questionText: "The Shah Commission investigated which event?", options: ["1971 War", "Emergency of 1975", "1984 Riots", "Bofors Scam"], correctAnswer: 1, marks: 1, explanation: "It investigated excesses during Indira Gandhi's Emergency." },
      { quiz: quiz3._id, questionText: "Which party first formed government at Centre other than Congress?", options: ["BJP", "Janata Party", "Communist Party", "DMK"], correctAnswer: 1, marks: 1, explanation: "Janata Party won in 1977 under Morarji Desai." },
    ]);

    console.log("✓ Class 12 Arts - Political Science: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsPoliticalScience };
