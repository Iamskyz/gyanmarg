import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../models/Quiz.js";
import Question from "../../models/Question.js";
import User from "../../models/User.js";

dotenv.config();

const seedClass8SocialStudies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: The Indian Constitution
    const socialQuiz1 = await Quiz.create({
      title: "The Indian Constitution",
      subject: "Social Studies",
      category: "Civics",
      chapter: "Indian Constitution",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz1._id, questionText: "When did the Indian Constitution come into effect?", options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"], correctAnswer: 1, marks: 1, explanation: "The Indian Constitution came into effect on 26 January 1950, celebrated as Republic Day." },
      { quiz: socialQuiz1._id, questionText: "How many Fundamental Duties are there in the Indian Constitution?", options: ["9", "10", "11", "12"], correctAnswer: 2, marks: 1, explanation: "There are 11 Fundamental Duties listed in Article 51A of the Constitution." },
      { quiz: socialQuiz1._id, questionText: "The Preamble of the Constitution begins with:", options: ["We the citizens", "We the people of India", "We the government", "We the Parliament"], correctAnswer: 1, marks: 1, explanation: "The Preamble begins with 'We the people of India'." },
      { quiz: socialQuiz1._id, questionText: "Which part of the Constitution deals with Directive Principles?", options: ["Part III", "Part IV", "Part V", "Part VI"], correctAnswer: 1, marks: 1, explanation: "Part IV (Articles 36-51) deals with Directive Principles of State Policy." },
      { quiz: socialQuiz1._id, questionText: "Who was the Chairman of the Drafting Committee?", options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Sardar Patel"], correctAnswer: 2, marks: 1, explanation: "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee of the Constitution." },
      { quiz: socialQuiz1._id, questionText: "India is described as a:", options: ["Union of States", "Federation of States", "Confederation", "Unitary State"], correctAnswer: 0, marks: 1, explanation: "Article 1 describes India as a 'Union of States'." },
      { quiz: socialQuiz1._id, questionText: "Right to Education is a:", options: ["Fundamental Right", "Directive Principle", "Fundamental Duty", "Legal Right only"], correctAnswer: 0, marks: 1, explanation: "Right to Education (Article 21A) is a Fundamental Right for children aged 6-14." },
      { quiz: socialQuiz1._id, questionText: "The Constitution of India was adopted on:", options: ["26 January 1950", "15 August 1947", "26 November 1949", "30 January 1948"], correctAnswer: 2, marks: 1, explanation: "The Constitution was adopted on 26 November 1949 and came into effect on 26 January 1950." },
      { quiz: socialQuiz1._id, questionText: "Which schedule of the Constitution lists languages?", options: ["6th Schedule", "7th Schedule", "8th Schedule", "9th Schedule"], correctAnswer: 2, marks: 1, explanation: "The 8th Schedule lists the official languages recognized by the Constitution." },
      { quiz: socialQuiz1._id, questionText: "How many schedules are there in the Indian Constitution?", options: ["10", "11", "12", "13"], correctAnswer: 2, marks: 1, explanation: "There are 12 schedules in the Indian Constitution." },
    ]);

    // Subcategory 2: Resources and Development
    const socialQuiz2 = await Quiz.create({
      title: "Resources and Development",
      subject: "Social Studies",
      category: "Geography",
      chapter: "Resources",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz2._id, questionText: "Which of these is a non-renewable resource?", options: ["Solar energy", "Wind energy", "Coal", "Water"], correctAnswer: 2, marks: 1, explanation: "Coal is non-renewable as it takes millions of years to form and cannot be replenished quickly." },
      { quiz: socialQuiz2._id, questionText: "What is sustainable development?", options: ["Fast development", "Development without thinking about future", "Development that meets present needs without compromising future", "Only industrial development"], correctAnswer: 2, marks: 1, explanation: "Sustainable development meets present needs without compromising the ability of future generations." },
      { quiz: socialQuiz2._id, questionText: "Which type of resource is air?", options: ["Biotic", "Abiotic", "Man-made", "Potential"], correctAnswer: 1, marks: 1, explanation: "Air is an abiotic (non-living) natural resource." },
      { quiz: socialQuiz2._id, questionText: "What is the main cause of land degradation?", options: ["Afforestation", "Deforestation and overgrazing", "Irrigation", "Urbanization only"], correctAnswer: 1, marks: 1, explanation: "Deforestation and overgrazing are major causes of land degradation." },
      { quiz: socialQuiz2._id, questionText: "Which resource is called 'black gold'?", options: ["Coal", "Iron", "Petroleum", "Diamond"], correctAnswer: 2, marks: 1, explanation: "Petroleum is called 'black gold' due to its high economic value and dark color." },
      { quiz: socialQuiz2._id, questionText: "Tidal energy is which type of resource?", options: ["Non-renewable", "Renewable", "Man-made", "Potential"], correctAnswer: 1, marks: 1, explanation: "Tidal energy is renewable as it comes from the gravitational pull of moon and sun." },
      { quiz: socialQuiz2._id, questionText: "What percentage of Earth's surface is land?", options: ["About 29%", "About 50%", "About 71%", "About 40%"], correctAnswer: 0, marks: 1, explanation: "About 29% of Earth's surface is land, while 71% is water." },
      { quiz: socialQuiz2._id, questionText: "Which is the most widely used resource for generating electricity in India?", options: ["Solar", "Wind", "Coal", "Nuclear"], correctAnswer: 2, marks: 1, explanation: "Coal is the most widely used resource for generating electricity in India." },
      { quiz: socialQuiz2._id, questionText: "What is conservation of resources?", options: ["Using resources carelessly", "Using resources wisely and carefully", "Not using resources at all", "Exporting resources"], correctAnswer: 1, marks: 1, explanation: "Conservation means using resources wisely so they last for future generations." },
      { quiz: socialQuiz2._id, questionText: "Human-made resources include:", options: ["Rivers", "Forests", "Buildings and roads", "Minerals"], correctAnswer: 2, marks: 1, explanation: "Buildings, roads, machinery are human-made resources created using natural resources." },
    ]);

    // Subcategory 3: British Rule in India
    const socialQuiz3 = await Quiz.create({
      title: "British Rule and Indian Freedom Struggle",
      subject: "Social Studies",
      category: "History",
      chapter: "British Rule",
      grade: 8,
      difficulty: "medium",
      duration: 15,
      totalMarks: 10,
      xpReward: 25,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: socialQuiz3._id, questionText: "When was the Battle of Plassey fought?", options: ["1757", "1764", "1857", "1947"], correctAnswer: 0, marks: 1, explanation: "The Battle of Plassey was fought in 1757 between British and Siraj-ud-Daulah." },
      { quiz: socialQuiz3._id, questionText: "Who was the last Mughal emperor?", options: ["Aurangzeb", "Shah Alam", "Bahadur Shah Zafar", "Akbar II"], correctAnswer: 2, marks: 1, explanation: "Bahadur Shah Zafar was the last Mughal emperor, exiled after 1857 revolt." },
      { quiz: socialQuiz3._id, questionText: "The Revolt of 1857 is also known as:", options: ["French Revolution", "First War of Independence", "Civil War", "World War"], correctAnswer: 1, marks: 1, explanation: "The Revolt of 1857 is called the First War of Indian Independence." },
      { quiz: socialQuiz3._id, questionText: "Who introduced the Permanent Settlement in Bengal?", options: ["Lord Cornwallis", "Lord Dalhousie", "Lord Curzon", "Lord Wellesley"], correctAnswer: 0, marks: 1, explanation: "Lord Cornwallis introduced the Permanent Settlement in 1793." },
      { quiz: socialQuiz3._id, questionText: "The Indian National Congress was founded in:", options: ["1857", "1885", "1905", "1920"], correctAnswer: 1, marks: 1, explanation: "The Indian National Congress was founded in 1885 by A.O. Hume." },
      { quiz: socialQuiz3._id, questionText: "Who gave the slogan 'Do or Die'?", options: ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Tilak"], correctAnswer: 2, marks: 1, explanation: "Mahatma Gandhi gave the slogan 'Do or Die' during the Quit India Movement (1942)." },
      { quiz: socialQuiz3._id, questionText: "The Doctrine of Lapse was introduced by:", options: ["Lord Dalhousie", "Lord Cornwallis", "Lord Curzon", "Lord Mountbatten"], correctAnswer: 0, marks: 1, explanation: "Lord Dalhousie introduced the Doctrine of Lapse to annex Indian states." },
      { quiz: socialQuiz3._id, questionText: "When did India gain independence?", options: ["26 January 1950", "15 August 1947", "2 October 1947", "14 August 1947"], correctAnswer: 1, marks: 1, explanation: "India gained independence on 15 August 1947." },
      { quiz: socialQuiz3._id, questionText: "Who was the Viceroy of India at the time of independence?", options: ["Lord Curzon", "Lord Irwin", "Lord Mountbatten", "Lord Wavell"], correctAnswer: 2, marks: 1, explanation: "Lord Mountbatten was the last Viceroy of India." },
      { quiz: socialQuiz3._id, questionText: "The Salt March (Dandi March) took place in:", options: ["1920", "1930", "1942", "1947"], correctAnswer: 1, marks: 1, explanation: "The Dandi March took place in 1930 as part of the Civil Disobedience Movement." },
    ]);

    console.log("✓ Class 8 - Social Studies: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass8SocialStudies;
