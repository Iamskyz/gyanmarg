import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11ArtsEconomics = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Indian Economy - Development and Planning",
      subject: "Economics",
      category: "Indian Economy",
      chapter: "Development and Planning",
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
      { quiz: quiz1._id, questionText: "India adopted which type of economic planning?", options: ["Capitalist", "Mixed economy with Five Year Plans", "Pure socialist", "Laissez-faire"], correctAnswer: 1, marks: 1, explanation: "India adopted mixed economy planning with Five Year Plans starting in 1951." },
      { quiz: quiz1._id, questionText: "NITI Aayog replaced which body?", options: ["RBI", "Planning Commission", "Finance Commission", "Election Commission"], correctAnswer: 1, marks: 1, explanation: "NITI Aayog replaced the Planning Commission in 2015." },
      { quiz: quiz1._id, questionText: "GDP stands for:", options: ["Gross Domestic Price", "Gross Domestic Product", "General Domestic Product", "Gross Development Product"], correctAnswer: 1, marks: 1, explanation: "GDP is the total value of goods and services produced within a country in a year." },
      { quiz: quiz1._id, questionText: "The Green Revolution in India primarily increased production of:", options: ["Pulses", "Wheat and Rice", "Cotton", "Sugarcane"], correctAnswer: 1, marks: 1, explanation: "The Green Revolution (1960s-70s) dramatically increased wheat and rice production." },
      { quiz: quiz1._id, questionText: "LPG reforms in India were introduced in:", options: ["1985", "1991", "1995", "2000"], correctAnswer: 1, marks: 1, explanation: "Liberalization, Privatization, Globalization reforms were introduced in 1991." },
      { quiz: quiz1._id, questionText: "Human Development Index was developed by:", options: ["World Bank", "Mahbub ul Haq", "Amartya Sen", "Adam Smith"], correctAnswer: 1, marks: 1, explanation: "Pakistani economist Mahbub ul Haq created HDI, with contributions from Amartya Sen." },
      { quiz: quiz1._id, questionText: "Which sector contributes most to India's GDP currently?", options: ["Agriculture", "Service sector", "Manufacturing", "Mining"], correctAnswer: 1, marks: 1, explanation: "The service sector contributes over 50% to India's GDP." },
      { quiz: quiz1._id, questionText: "Poverty line in India is based on:", options: ["Income only", "Calorie consumption and expenditure", "Education level", "Housing quality"], correctAnswer: 1, marks: 1, explanation: "India's poverty line is based on minimum calorie intake and monthly per capita expenditure." },
      { quiz: quiz1._id, questionText: "MGNREGA guarantees how many days of employment?", options: ["50 days", "100 days", "150 days", "200 days"], correctAnswer: 1, marks: 1, explanation: "MGNREGA guarantees 100 days of wage employment per year to rural households." },
      { quiz: quiz1._id, questionText: "Inflation means:", options: ["Decrease in prices", "Sustained increase in general price level", "Stable prices", "Increase in production"], correctAnswer: 1, marks: 1, explanation: "Inflation is a sustained rise in the general level of prices over time." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Statistics for Economics",
      subject: "Economics",
      category: "Statistics",
      chapter: "Statistical Tools",
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
      { quiz: quiz2._id, questionText: "The arithmetic mean of 2, 4, 6, 8, 10 is:", options: ["5", "6", "7", "8"], correctAnswer: 1, marks: 1, explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6." },
      { quiz: quiz2._id, questionText: "Median is:", options: ["Most frequent value", "Middle value when data is arranged in order", "Average of all values", "Difference between highest and lowest"], correctAnswer: 1, marks: 1, explanation: "Median is the middle value in an ordered dataset." },
      { quiz: quiz2._id, questionText: "Mode is:", options: ["Average value", "Most frequently occurring value", "Middle value", "Range of data"], correctAnswer: 1, marks: 1, explanation: "Mode is the value that appears most frequently in a dataset." },
      { quiz: quiz2._id, questionText: "Standard deviation measures:", options: ["Central tendency", "Dispersion of data from the mean", "Frequency", "Correlation"], correctAnswer: 1, marks: 1, explanation: "Standard deviation measures how spread out data values are from the mean." },
      { quiz: quiz2._id, questionText: "A bar diagram represents data using:", options: ["Circles", "Rectangular bars of equal width", "Lines", "Dots"], correctAnswer: 1, marks: 1, explanation: "Bar diagrams use rectangular bars of equal width with heights proportional to values." },
      { quiz: quiz2._id, questionText: "Primary data is:", options: ["Data from published sources", "Data collected firsthand by the investigator", "Government data", "Internet data"], correctAnswer: 1, marks: 1, explanation: "Primary data is original data collected directly by the researcher for a specific purpose." },
      { quiz: quiz2._id, questionText: "Census method means:", options: ["Studying a sample", "Studying every unit of the population", "Random selection", "Cluster sampling"], correctAnswer: 1, marks: 1, explanation: "Census method involves collecting data from every unit in the population." },
      { quiz: quiz2._id, questionText: "Correlation coefficient ranges from:", options: ["0 to 1", "-1 to +1", "-∞ to +∞", "0 to 100"], correctAnswer: 1, marks: 1, explanation: "Correlation coefficient (r) ranges from -1 (perfect negative) to +1 (perfect positive)." },
      { quiz: quiz2._id, questionText: "A pie chart represents data in:", options: ["Bars", "Sectors of a circle", "Lines", "Histograms"], correctAnswer: 1, marks: 1, explanation: "Pie charts show data as proportional sectors of a circle totaling 360°." },
      { quiz: quiz2._id, questionText: "Index numbers are used to measure:", options: ["Absolute values", "Relative changes over time", "Frequency", "Probability"], correctAnswer: 1, marks: 1, explanation: "Index numbers measure relative changes in variables over time compared to a base period." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Microeconomics - Demand and Supply",
      subject: "Economics",
      category: "Microeconomics",
      chapter: "Demand and Supply",
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
      { quiz: quiz3._id, questionText: "Law of Demand states that:", options: ["Price and demand move together", "As price increases, demand decreases (ceteris paribus)", "Supply creates demand", "Demand is always constant"], correctAnswer: 1, marks: 1, explanation: "Law of Demand: price and quantity demanded are inversely related, other things being equal." },
      { quiz: quiz3._id, questionText: "Elasticity of demand measures:", options: ["Total demand", "Responsiveness of demand to price change", "Supply change", "Income level"], correctAnswer: 1, marks: 1, explanation: "Price elasticity of demand measures how much quantity demanded changes with price." },
      { quiz: quiz3._id, questionText: "A Giffen good has:", options: ["Normal demand curve", "Upward sloping demand curve", "Perfectly elastic demand", "Zero elasticity"], correctAnswer: 1, marks: 1, explanation: "Giffen goods have upward-sloping demand curves — demand increases as price rises." },
      { quiz: quiz3._id, questionText: "Equilibrium price is where:", options: ["Demand is maximum", "Supply equals demand", "Supply is maximum", "Price is lowest"], correctAnswer: 1, marks: 1, explanation: "Equilibrium occurs where quantity demanded equals quantity supplied." },
      { quiz: quiz3._id, questionText: "Consumer surplus is:", options: ["Extra supply", "Difference between willingness to pay and actual price paid", "Profit of seller", "Government tax"], correctAnswer: 1, marks: 1, explanation: "Consumer surplus = Maximum price willing to pay minus actual market price." },
      { quiz: quiz3._id, questionText: "Substitute goods have:", options: ["Negative cross elasticity", "Positive cross elasticity", "Zero elasticity", "Infinite elasticity"], correctAnswer: 1, marks: 1, explanation: "Substitutes have positive cross elasticity — price rise in one increases demand for other." },
      { quiz: quiz3._id, questionText: "The law of diminishing marginal utility states:", options: ["Utility always increases", "Additional utility decreases with each extra unit consumed", "Total utility is constant", "Price determines utility"], correctAnswer: 1, marks: 1, explanation: "As consumption increases, the additional satisfaction from each extra unit decreases." },
      { quiz: quiz3._id, questionText: "A perfectly competitive market has:", options: ["One seller", "Few sellers", "Many buyers and sellers with homogeneous products", "Product differentiation"], correctAnswer: 2, marks: 1, explanation: "Perfect competition has many buyers/sellers, homogeneous products, and free entry/exit." },
      { quiz: quiz3._id, questionText: "Opportunity cost means:", options: ["Actual money spent", "Value of the next best alternative foregone", "Total cost of production", "Fixed cost"], correctAnswer: 1, marks: 1, explanation: "Opportunity cost is the value of the best alternative that must be given up." },
      { quiz: quiz3._id, questionText: "The production possibility curve shows:", options: ["Only maximum output", "Combinations of two goods that can be produced with given resources", "Demand curve", "Supply curve"], correctAnswer: 1, marks: 1, explanation: "PPC shows all possible combinations of two goods producible with available resources." },
    ]);

    console.log("✓ Class 11 Arts - Economics: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass11ArtsEconomics };
