import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ArtsEconomics = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Indian Economy - Development and Planning",
      subject: "Economics",
      category: "Indian Economy",
      chapter: "Development Experience",
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
      { quiz: quiz1._id, questionText: "NITI Aayog replaced which body?", options: ["RBI", "Planning Commission", "Finance Commission", "SEBI"], correctAnswer: 1, marks: 1, explanation: "NITI Aayog replaced Planning Commission in 2015." },
      { quiz: quiz1._id, questionText: "India's LPG reforms were introduced in which year?", options: ["1985", "1991", "1995", "2000"], correctAnswer: 1, marks: 1, explanation: "Liberalization, Privatization, Globalization under P.V. Narasimha Rao." },
      { quiz: quiz1._id, questionText: "Green Revolution primarily benefited which crops?", options: ["Pulses and oilseeds", "Wheat and rice", "Cotton and jute", "Sugarcane and tea"], correctAnswer: 1, marks: 1, explanation: "HYV seeds boosted wheat and rice production." },
      { quiz: quiz1._id, questionText: "What is the poverty line based on in India?", options: ["Income only", "Calorie consumption", "Assets", "Education"], correctAnswer: 1, marks: 1, explanation: "2400 cal (rural) and 2100 cal (urban) per person per day." },
      { quiz: quiz1._id, questionText: "MGNREGA guarantees how many days of employment?", options: ["50", "100", "150", "200"], correctAnswer: 1, marks: 1, explanation: "100 days of guaranteed wage employment per household per year." },
      { quiz: quiz1._id, questionText: "India's largest employment sector is?", options: ["Industry", "Services", "Agriculture", "Mining"], correctAnswer: 2, marks: 1, explanation: "Agriculture employs about 42% of India's workforce." },
      { quiz: quiz1._id, questionText: "What is disguised unemployment?", options: ["Open unemployment", "More workers than needed with zero marginal productivity", "Seasonal unemployment", "Voluntary unemployment"], correctAnswer: 1, marks: 1, explanation: "Common in agriculture where removing workers won't reduce output." },
      { quiz: quiz1._id, questionText: "HDI was developed by?", options: ["World Bank", "Mahbub ul Haq and Amartya Sen", "IMF", "WTO"], correctAnswer: 1, marks: 1, explanation: "UNDP publishes HDI based on their framework." },
      { quiz: quiz1._id, questionText: "Which sector contributes most to India's GDP?", options: ["Agriculture", "Industry", "Services", "Mining"], correctAnswer: 2, marks: 1, explanation: "Services sector contributes over 50% of India's GDP." },
      { quiz: quiz1._id, questionText: "Infant Mortality Rate measures?", options: ["Deaths per 1000 adults", "Deaths of infants under 1 year per 1000 live births", "Birth rate", "Fertility rate"], correctAnswer: 1, marks: 1, explanation: "IMR is a key indicator of healthcare quality." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Macroeconomics - National Income and Money",
      subject: "Economics",
      category: "Macroeconomics",
      chapter: "National Income Accounting",
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
      { quiz: quiz2._id, questionText: "GDP measures?", options: ["Only exports", "Total value of goods and services produced within a country", "Only government spending", "Only consumption"], correctAnswer: 1, marks: 1, explanation: "GDP includes all final goods and services produced domestically." },
      { quiz: quiz2._id, questionText: "Fiscal policy is controlled by?", options: ["RBI", "Government", "Banks", "Stock Exchange"], correctAnswer: 1, marks: 1, explanation: "Government uses taxation and spending as fiscal tools." },
      { quiz: quiz2._id, questionText: "Monetary policy in India is controlled by?", options: ["Finance Ministry", "RBI", "SEBI", "NITI Aayog"], correctAnswer: 1, marks: 1, explanation: "RBI controls money supply through various instruments." },
      { quiz: quiz2._id, questionText: "Multiplier effect means?", options: ["Decrease in income", "Initial investment leads to larger increase in national income", "No change", "Only price increase"], correctAnswer: 1, marks: 1, explanation: "Keynesian multiplier = 1/(1-MPC)." },
      { quiz: quiz2._id, questionText: "Inflation means?", options: ["Fall in prices", "Sustained rise in general price level", "Stable prices", "Rise in one product price"], correctAnswer: 1, marks: 1, explanation: "Persistent increase in overall price level reduces purchasing power." },
      { quiz: quiz2._id, questionText: "Demand-pull inflation is caused by?", options: ["Supply shortage", "Excess demand over supply", "Cost increase", "Government policy"], correctAnswer: 1, marks: 1, explanation: "Too much money chasing too few goods." },
      { quiz: quiz2._id, questionText: "What is stagflation?", options: ["High growth + low inflation", "High inflation + high unemployment + stagnant growth", "Low inflation + low unemployment", "Deflation"], correctAnswer: 1, marks: 1, explanation: "Combination of stagnation and inflation." },
      { quiz: quiz2._id, questionText: "Government budget deficit is financed by?", options: ["Printing money only", "Borrowing and printing money", "Tax only", "Exports only"], correctAnswer: 1, marks: 1, explanation: "Government borrows from public and RBI to finance deficit." },
      { quiz: quiz2._id, questionText: "Progressive tax means?", options: ["Same rate for all", "Higher income pays higher rate", "Lower income pays more", "No tax"], correctAnswer: 1, marks: 1, explanation: "Tax rate increases with income level." },
      { quiz: quiz2._id, questionText: "Current account of BOP includes?", options: ["Capital transfers", "Trade in goods, services, and transfers", "FDI", "Portfolio investment"], correctAnswer: 1, marks: 1, explanation: "Visible trade, invisible trade, and unilateral transfers." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Comparative Development - India, China, Pakistan",
      subject: "Economics",
      category: "Comparative Economics",
      chapter: "Development Strategies",
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
      { quiz: quiz3._id, questionText: "China's economic reforms began in which year?", options: ["1975", "1978", "1985", "1991"], correctAnswer: 1, marks: 1, explanation: "Deng Xiaoping initiated reforms in 1978." },
      { quiz: quiz3._id, questionText: "Special Economic Zones (SEZ) were first created in?", options: ["India", "China", "Pakistan", "Japan"], correctAnswer: 1, marks: 1, explanation: "China created SEZs in 1980 to attract foreign investment." },
      { quiz: quiz3._id, questionText: "Pakistan's economy is heavily dependent on?", options: ["IT sector", "Agriculture and remittances", "Manufacturing", "Tourism"], correctAnswer: 1, marks: 1, explanation: "Agriculture and overseas remittances are major contributors." },
      { quiz: quiz3._id, questionText: "Which country has the highest HDI among India, China, Pakistan?", options: ["India", "China", "Pakistan", "All equal"], correctAnswer: 1, marks: 1, explanation: "China has higher life expectancy, literacy, and per capita income." },
      { quiz: quiz3._id, questionText: "India's demographic dividend refers to?", options: ["Aging population", "Large working-age population proportion", "Low birth rate", "High death rate"], correctAnswer: 1, marks: 1, explanation: "India has a young population that can drive economic growth." },
      { quiz: quiz3._id, questionText: "Great Leap Forward was a policy of?", options: ["India", "China", "Pakistan", "Japan"], correctAnswer: 1, marks: 1, explanation: "Mao's 1958 campaign for rapid industrialization and collectivization." },
      { quiz: quiz3._id, questionText: "One Child Policy was implemented by?", options: ["India", "China", "Pakistan", "Bangladesh"], correctAnswer: 1, marks: 1, explanation: "China enforced it from 1979 to 2015 to control population." },
      { quiz: quiz3._id, questionText: "India's mixed economy means?", options: ["Only private sector", "Coexistence of public and private sectors", "Only public sector", "No planning"], correctAnswer: 1, marks: 1, explanation: "Both government and private enterprise play important roles." },
      { quiz: quiz3._id, questionText: "Which country liberalized its economy first?", options: ["India (1991)", "China (1978)", "Pakistan (1988)", "All same time"], correctAnswer: 1, marks: 1, explanation: "China began reforms in 1978, India in 1991, Pakistan in 1988." },
      { quiz: quiz3._id, questionText: "Common challenge faced by all three countries?", options: ["Overpopulation only", "Poverty, inequality, and environmental degradation", "No natural resources", "No workforce"], correctAnswer: 1, marks: 1, explanation: "All three face poverty, inequality, and sustainability challenges." },
    ]);

    console.log("✓ Class 12 Arts - Economics: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ArtsEconomics };
