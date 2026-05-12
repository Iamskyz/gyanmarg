import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsHistory = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Indian National Movement",
      subject: "History",
      category: "Modern India",
      chapter: "Freedom Struggle",
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
      { quiz: quiz1._id, questionText: "Who led the Salt March in 1930?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"], correctAnswer: 1, marks: 1, explanation: "Gandhi led the Dandi March to protest the British salt tax." },
      { quiz: quiz1._id, questionText: "The Quit India Movement was launched in which year?", options: ["1940", "1942", "1944", "1946"], correctAnswer: 1, marks: 1, explanation: "Gandhi launched the Quit India Movement on August 8, 1942." },
      { quiz: quiz1._id, questionText: "Who gave the slogan 'Do or Die'?", options: ["Tilak", "Gandhi", "Bose", "Bhagat Singh"], correctAnswer: 1, marks: 1, explanation: "Gandhi gave this slogan during the Quit India Movement." },
      { quiz: quiz1._id, questionText: "The Indian National Congress was founded in which year?", options: ["1880", "1885", "1890", "1895"], correctAnswer: 1, marks: 1, explanation: "INC was founded in 1885 by A.O. Hume." },
      { quiz: quiz1._id, questionText: "Who was the first President of INC?", options: ["A.O. Hume", "W.C. Bonnerjee", "Dadabhai Naoroji", "Surendranath Banerjee"], correctAnswer: 1, marks: 1, explanation: "W.C. Bonnerjee presided over the first session in Bombay." },
      { quiz: quiz1._id, questionText: "The Rowlatt Act was passed in which year?", options: ["1917", "1919", "1921", "1923"], correctAnswer: 1, marks: 1, explanation: "It allowed detention without trial, leading to widespread protests." },
      { quiz: quiz1._id, questionText: "Jallianwala Bagh massacre occurred in which city?", options: ["Delhi", "Amritsar", "Lahore", "Lucknow"], correctAnswer: 1, marks: 1, explanation: "General Dyer ordered firing on a peaceful gathering in Amritsar." },
      { quiz: quiz1._id, questionText: "The Non-Cooperation Movement was launched in which year?", options: ["1919", "1920", "1922", "1924"], correctAnswer: 1, marks: 1, explanation: "Gandhi launched it in 1920 against British rule." },
      { quiz: quiz1._id, questionText: "Who founded the All India Muslim League?", options: ["Jinnah", "Aga Khan III", "Liaquat Ali Khan", "Syed Ahmad Khan"], correctAnswer: 1, marks: 1, explanation: "Founded in 1906 at Dhaka under Aga Khan III's leadership." },
      { quiz: quiz1._id, questionText: "The Cabinet Mission came to India in which year?", options: ["1944", "1946", "1947", "1948"], correctAnswer: 1, marks: 1, explanation: "It proposed a united India with a three-tier federal structure." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Colonial India - Economy and Society",
      subject: "History",
      category: "Modern India",
      chapter: "Colonial Economy",
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
      { quiz: quiz2._id, questionText: "The Permanent Settlement was introduced by whom?", options: ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie"], correctAnswer: 1, marks: 1, explanation: "Cornwallis introduced it in 1793 in Bengal." },
      { quiz: quiz2._id, questionText: "The Ryotwari system was mainly in which region?", options: ["Bengal", "Madras and Bombay", "Punjab", "Central Provinces"], correctAnswer: 1, marks: 1, explanation: "Direct settlement between government and individual cultivators." },
      { quiz: quiz2._id, questionText: "Who wrote 'Poverty and Un-British Rule in India'?", options: ["R.C. Dutt", "Dadabhai Naoroji", "M.G. Ranade", "Gokhale"], correctAnswer: 1, marks: 1, explanation: "Naoroji's drain theory exposed British economic exploitation." },
      { quiz: quiz2._id, questionText: "The first railway line in India was between?", options: ["Delhi-Agra", "Bombay-Thane", "Calcutta-Delhi", "Madras-Bangalore"], correctAnswer: 1, marks: 1, explanation: "Opened in 1853, it was 34 km long." },
      { quiz: quiz2._id, questionText: "Indigo revolt (Nil Darpan) took place in which year?", options: ["1857", "1859", "1862", "1870"], correctAnswer: 1, marks: 1, explanation: "Bengali peasants revolted against forced indigo cultivation." },
      { quiz: quiz2._id, questionText: "The Doctrine of Lapse was introduced by?", options: ["Cornwallis", "Dalhousie", "Canning", "Hastings"], correctAnswer: 1, marks: 1, explanation: "Dalhousie used it to annex Indian states without natural heirs." },
      { quiz: quiz2._id, questionText: "De-industrialization in colonial India mainly affected?", options: ["Agriculture", "Textile and handicraft industries", "Mining", "Banking"], correctAnswer: 1, marks: 1, explanation: "British policies destroyed Indian textile industry." },
      { quiz: quiz2._id, questionText: "The Drain of Wealth theory was propounded by?", options: ["Marx", "Dadabhai Naoroji", "Adam Smith", "Keynes"], correctAnswer: 1, marks: 1, explanation: "Naoroji showed how wealth was drained from India to Britain." },
      { quiz: quiz2._id, questionText: "Which commission recommended decentralization in 1882?", options: ["Simon Commission", "Ripon's Resolution", "Hunter Commission", "Sadler Commission"], correctAnswer: 1, marks: 1, explanation: "Lord Ripon promoted local self-government." },
      { quiz: quiz2._id, questionText: "The Swadeshi Movement was a response to?", options: ["Rowlatt Act", "Partition of Bengal 1905", "Salt Tax", "Simon Commission"], correctAnswer: 1, marks: 1, explanation: "Curzon's partition of Bengal triggered the Swadeshi Movement." },
    ]);

    const quiz3 = await Quiz.create({
      title: "World Wars and Decolonization",
      subject: "History",
      category: "World History",
      chapter: "20th Century World",
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
      { quiz: quiz3._id, questionText: "World War I started in which year?", options: ["1912", "1914", "1916", "1918"], correctAnswer: 1, marks: 1, explanation: "Assassination of Archduke Franz Ferdinand triggered WWI in 1914." },
      { quiz: quiz3._id, questionText: "The Treaty of Versailles was signed in which year?", options: ["1918", "1919", "1920", "1921"], correctAnswer: 1, marks: 1, explanation: "It formally ended WWI and imposed harsh terms on Germany." },
      { quiz: quiz3._id, questionText: "The League of Nations was established after which war?", options: ["Napoleonic Wars", "World War I", "World War II", "Cold War"], correctAnswer: 1, marks: 1, explanation: "Created in 1920 to maintain world peace." },
      { quiz: quiz3._id, questionText: "The United Nations was founded in which year?", options: ["1944", "1945", "1946", "1947"], correctAnswer: 1, marks: 1, explanation: "UN was established on October 24, 1945." },
      { quiz: quiz3._id, questionText: "The Cold War was primarily between?", options: ["UK and France", "USA and USSR", "China and Japan", "Germany and Russia"], correctAnswer: 1, marks: 1, explanation: "Ideological conflict between capitalist USA and communist USSR." },
      { quiz: quiz3._id, questionText: "Decolonization in Africa accelerated in which decade?", options: ["1940s", "1960s", "1970s", "1980s"], correctAnswer: 1, marks: 1, explanation: "1960 is called the 'Year of Africa' with 17 nations gaining independence." },
      { quiz: quiz3._id, questionText: "The Berlin Wall fell in which year?", options: ["1987", "1989", "1991", "1993"], correctAnswer: 1, marks: 1, explanation: "Its fall symbolized the end of the Cold War." },
      { quiz: quiz3._id, questionText: "Who led the Chinese Revolution of 1949?", options: ["Sun Yat-sen", "Mao Zedong", "Chiang Kai-shek", "Deng Xiaoping"], correctAnswer: 1, marks: 1, explanation: "Mao established the People's Republic of China." },
      { quiz: quiz3._id, questionText: "The Non-Aligned Movement was founded in which year?", options: ["1955", "1961", "1965", "1970"], correctAnswer: 1, marks: 1, explanation: "NAM was formally established at the Belgrade Conference in 1961." },
      { quiz: quiz3._id, questionText: "Apartheid in South Africa ended with elections in?", options: ["1990", "1992", "1994", "1996"], correctAnswer: 2, marks: 1, explanation: "Nelson Mandela became president after 1994 elections." },
    ]);

    console.log("✓ Class 12 Arts - History: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsHistory };
