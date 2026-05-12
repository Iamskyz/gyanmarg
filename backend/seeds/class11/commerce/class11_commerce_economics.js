import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass11CommerceEconomics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    // Subcategory 1: Micro Economics - Demand and Supply
    const ecoQuiz1 = await Quiz.create({
      title: "Micro Economics - Demand and Supply",
      subject: "Economics",
      category: "Micro Economics",
      chapter: "Demand and Supply",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: ecoQuiz1._id, questionText: "What does the Law of Demand state?", options: ["Price up, demand up", "Price up, demand down (other things constant)", "Price down, demand down", "No relation between price and demand"], correctAnswer: 1, marks: 1, explanation: "Law of Demand: Price and quantity demanded are inversely related, ceteris paribus." },
      { quiz: ecoQuiz1._id, questionText: "What is 'elasticity of demand'?", options: ["Change in supply", "Degree of responsiveness of demand to change in price", "Total revenue", "Fixed demand"], correctAnswer: 1, marks: 1, explanation: "Elasticity measures how much quantity demanded changes when price changes." },
      { quiz: ecoQuiz1._id, questionText: "If demand doesn't change with price, it is called:", options: ["Elastic demand", "Perfectly inelastic demand", "Unitary elastic", "Highly elastic"], correctAnswer: 1, marks: 1, explanation: "Perfectly inelastic demand (Ed = 0) means quantity doesn't respond to price changes." },
      { quiz: ecoQuiz1._id, questionText: "What causes a shift in the demand curve?", options: ["Change in price of the good", "Change in income, tastes, or related goods' prices", "Movement along the curve", "Change in quantity supplied"], correctAnswer: 1, marks: 1, explanation: "Non-price factors like income, preferences shift the entire demand curve." },
      { quiz: ecoQuiz1._id, questionText: "Law of Supply states:", options: ["Price up, supply down", "Price up, supply up (other things constant)", "No relation", "Supply is always fixed"], correctAnswer: 1, marks: 1, explanation: "Law of Supply: Price and quantity supplied are directly related, ceteris paribus." },
      { quiz: ecoQuiz1._id, questionText: "Market equilibrium occurs when:", options: ["Demand exceeds supply", "Supply exceeds demand", "Quantity demanded equals quantity supplied", "Price is zero"], correctAnswer: 2, marks: 1, explanation: "Equilibrium is where demand and supply curves intersect." },
      { quiz: ecoQuiz1._id, questionText: "What are 'substitute goods'?", options: ["Goods used together", "Goods that can replace each other", "Inferior goods", "Luxury goods"], correctAnswer: 1, marks: 1, explanation: "Substitutes can replace each other (tea and coffee)." },
      { quiz: ecoQuiz1._id, questionText: "What are 'complementary goods'?", options: ["Goods that replace each other", "Goods used together", "Luxury goods", "Free goods"], correctAnswer: 1, marks: 1, explanation: "Complementary goods are used together (car and petrol)." },
      { quiz: ecoQuiz1._id, questionText: "Consumer surplus is:", options: ["Total spending", "Difference between willingness to pay and actual price paid", "Producer's profit", "Government revenue"], correctAnswer: 1, marks: 1, explanation: "Consumer surplus = Maximum price willing to pay - Actual price paid." },
      { quiz: ecoQuiz1._id, questionText: "What is 'excess demand'?", options: ["Supply > Demand", "Demand > Supply at a given price", "Demand = Supply", "No demand"], correctAnswer: 1, marks: 1, explanation: "Excess demand occurs when quantity demanded exceeds quantity supplied at a price below equilibrium." },
    ]);

    // Subcategory 2: Indian Economy
    const ecoQuiz2 = await Quiz.create({
      title: "Indian Economy - Development and Planning",
      subject: "Economics",
      category: "Indian Economy",
      chapter: "Indian Economic Development",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: ecoQuiz2._id, questionText: "When was economic planning started in India?", options: ["1947", "1950", "1951", "1956"], correctAnswer: 2, marks: 1, explanation: "First Five Year Plan started in 1951." },
      { quiz: ecoQuiz2._id, questionText: "What is 'mixed economy'?", options: ["Only private sector", "Only public sector", "Coexistence of public and private sectors", "No government role"], correctAnswer: 2, marks: 1, explanation: "India follows mixed economy with both public and private sector participation." },
      { quiz: ecoQuiz2._id, questionText: "LPG reforms in India started in:", options: ["1985", "1991", "1995", "2000"], correctAnswer: 1, marks: 1, explanation: "Liberalisation, Privatisation, Globalisation reforms started in 1991." },
      { quiz: ecoQuiz2._id, questionText: "What is GDP?", options: ["Government Domestic Product", "Total value of goods and services produced within a country in a year", "Gross Demand Price", "General Development Plan"], correctAnswer: 1, marks: 1, explanation: "GDP is the total market value of all final goods and services produced domestically." },
      { quiz: ecoQuiz2._id, questionText: "Which sector contributes most to India's GDP currently?", options: ["Agriculture", "Industry", "Service sector", "Mining"], correctAnswer: 2, marks: 1, explanation: "Service sector contributes over 50% to India's GDP." },
      { quiz: ecoQuiz2._id, questionText: "What is 'poverty line'?", options: ["Line on a graph", "Minimum level of income to meet basic needs", "Tax limit", "Export limit"], correctAnswer: 1, marks: 1, explanation: "Poverty line defines the minimum income needed for basic necessities." },
      { quiz: ecoQuiz2._id, questionText: "NITI Aayog replaced which body?", options: ["RBI", "Planning Commission", "Finance Commission", "SEBI"], correctAnswer: 1, marks: 1, explanation: "NITI Aayog replaced Planning Commission in 2015." },
      { quiz: ecoQuiz2._id, questionText: "What is 'inflation'?", options: ["Decrease in prices", "Sustained increase in general price level", "Stable prices", "Increase in production"], correctAnswer: 1, marks: 1, explanation: "Inflation is a sustained rise in the general level of prices over time." },
      { quiz: ecoQuiz2._id, questionText: "Green Revolution is related to:", options: ["Industrial growth", "Increase in agricultural production", "Forest conservation", "IT sector"], correctAnswer: 1, marks: 1, explanation: "Green Revolution increased food grain production through HYV seeds and technology." },
      { quiz: ecoQuiz2._id, questionText: "What is 'Human Development Index' (HDI)?", options: ["Only income measure", "Composite index of health, education, and income", "Population count", "Industrial output"], correctAnswer: 1, marks: 1, explanation: "HDI measures development through life expectancy, education, and per capita income." },
    ]);

    // Subcategory 3: Statistics for Economics
    const ecoQuiz3 = await Quiz.create({
      title: "Statistics for Economics",
      subject: "Economics",
      category: "Statistics",
      chapter: "Statistics for Economics",
      grade: 11,
      stream: "commerce",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: ecoQuiz3._id, questionText: "What is 'statistics' in economics?", options: ["Only numbers", "Collection, organisation, analysis, and interpretation of data", "Guessing", "Only graphs"], correctAnswer: 1, marks: 1, explanation: "Statistics involves systematic handling of quantitative data for decision making." },
      { quiz: ecoQuiz3._id, questionText: "What is 'arithmetic mean'?", options: ["Middle value", "Most frequent value", "Sum of values divided by number of values", "Range"], correctAnswer: 2, marks: 1, explanation: "Mean = Sum of all observations / Number of observations." },
      { quiz: ecoQuiz3._id, questionText: "What is 'median'?", options: ["Average value", "Middle value when data is arranged in order", "Most common value", "Highest value"], correctAnswer: 1, marks: 1, explanation: "Median is the middle value in an ordered dataset." },
      { quiz: ecoQuiz3._id, questionText: "What is 'mode'?", options: ["Average", "Middle value", "Most frequently occurring value", "Least value"], correctAnswer: 2, marks: 1, explanation: "Mode is the value that appears most often in a dataset." },
      { quiz: ecoQuiz3._id, questionText: "Primary data is:", options: ["Data from books", "Data collected firsthand by investigator", "Published data", "Old data"], correctAnswer: 1, marks: 1, explanation: "Primary data is original data collected directly by the researcher." },
      { quiz: ecoQuiz3._id, questionText: "Secondary data is:", options: ["Collected firsthand", "Data already collected by someone else", "Always unreliable", "Only numerical"], correctAnswer: 1, marks: 1, explanation: "Secondary data is data that has been previously collected by others." },
      { quiz: ecoQuiz3._id, questionText: "A bar diagram represents data using:", options: ["Circles", "Rectangular bars of equal width", "Lines only", "Dots"], correctAnswer: 1, marks: 1, explanation: "Bar diagrams use rectangular bars with lengths proportional to values." },
      { quiz: ecoQuiz3._id, questionText: "What is 'standard deviation'?", options: ["Average of data", "Measure of dispersion from the mean", "Highest value", "Lowest value"], correctAnswer: 1, marks: 1, explanation: "Standard deviation measures how spread out data is from the mean." },
      { quiz: ecoQuiz3._id, questionText: "A pie chart represents data using:", options: ["Bars", "Lines", "Sectors of a circle", "Points"], correctAnswer: 2, marks: 1, explanation: "Pie chart divides a circle into sectors proportional to data values." },
      { quiz: ecoQuiz3._id, questionText: "What is 'frequency distribution'?", options: ["Random data", "Organised table showing values and their frequencies", "Single value", "Graph only"], correctAnswer: 1, marks: 1, explanation: "Frequency distribution organises data into classes with their frequencies." },
    ]);

    console.log("✓ Class 11 Commerce - Economics: 3 quizzes, 30 questions created");

  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export default seedClass11CommerceEconomics;
