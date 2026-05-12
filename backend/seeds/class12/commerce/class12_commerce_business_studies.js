import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceBusinessStudies = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Management Principles and Functions",
      subject: "Business Studies",
      category: "Management",
      chapter: "Principles and Functions",
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
      { quiz: quiz1._id, questionText: "Planning is:", options: ["Looking backward", "Deciding in advance what to do, how to do, and who will do", "Only for large firms", "Optional function"], correctAnswer: 1, marks: 1, explanation: "Planning involves setting objectives and determining the course of action in advance." },
      { quiz: quiz1._id, questionText: "Fayol's principle of 'Unity of Command' means:", options: ["One plan for all", "One boss for each employee", "One department", "One product"], correctAnswer: 1, marks: 1, explanation: "Unity of Command: each employee should receive orders from only one superior." },
      { quiz: quiz1._id, questionText: "Controlling function of management involves:", options: ["Only planning", "Measuring performance and correcting deviations", "Only hiring", "Only motivating"], correctAnswer: 1, marks: 1, explanation: "Controlling compares actual performance with standards and takes corrective action." },
      { quiz: quiz1._id, questionText: "Delegation of authority means:", options: ["Giving up all power", "Granting authority to subordinates while retaining accountability", "Removing managers", "Centralizing decisions"], correctAnswer: 1, marks: 1, explanation: "Delegation transfers authority to subordinates but ultimate responsibility remains with delegator." },
      { quiz: quiz1._id, questionText: "Taylor's Scientific Management focuses on:", options: ["Human relations", "Efficiency through scientific study of work methods", "Financial management", "Marketing"], correctAnswer: 1, marks: 1, explanation: "Taylor emphasized scientific methods to improve worker efficiency and productivity." },
      { quiz: quiz1._id, questionText: "Span of management refers to:", options: ["Duration of work", "Number of subordinates a manager can effectively supervise", "Company size", "Product range"], correctAnswer: 1, marks: 1, explanation: "Span of management is the number of subordinates directly reporting to a manager." },
      { quiz: quiz1._id, questionText: "Decentralization means:", options: ["All decisions at top", "Systematic delegation of authority to lower levels", "Removing departments", "Reducing staff"], correctAnswer: 1, marks: 1, explanation: "Decentralization distributes decision-making authority throughout the organization." },
      { quiz: quiz1._id, questionText: "Maslow's hierarchy of needs starts with:", options: ["Self-actualization", "Physiological needs", "Safety needs", "Social needs"], correctAnswer: 1, marks: 1, explanation: "Maslow's pyramid starts with basic physiological needs (food, water, shelter)." },
      { quiz: quiz1._id, questionText: "Staffing function includes:", options: ["Only recruitment", "Recruitment, selection, training, and development", "Only salary payment", "Only termination"], correctAnswer: 1, marks: 1, explanation: "Staffing covers the entire process of manning the organization." },
      { quiz: quiz1._id, questionText: "Formal organization is:", options: ["Based on friendships", "Deliberately designed structure with defined roles", "Spontaneous", "Temporary"], correctAnswer: 1, marks: 1, explanation: "Formal organization is consciously designed with clear authority relationships." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Marketing Management",
      subject: "Business Studies",
      category: "Marketing",
      chapter: "Marketing Mix and Consumer Protection",
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
      { quiz: quiz2._id, questionText: "Marketing mix consists of:", options: ["3 Ps", "4 Ps: Product, Price, Place, Promotion", "5 Ps", "2 Ps"], correctAnswer: 1, marks: 1, explanation: "The 4 Ps framework covers Product, Price, Place (distribution), and Promotion." },
      { quiz: quiz2._id, questionText: "Branding helps in:", options: ["Increasing cost only", "Product identification and differentiation", "Reducing quality", "Eliminating competition"], correctAnswer: 1, marks: 1, explanation: "Branding creates identity, builds loyalty, and differentiates from competitors." },
      { quiz: quiz2._id, questionText: "Consumer Protection Act 2019 replaced which act?", options: ["Companies Act", "Consumer Protection Act 1986", "Sale of Goods Act", "Contract Act"], correctAnswer: 1, marks: 1, explanation: "The 2019 Act replaced the 1986 Act with stronger consumer rights and e-commerce provisions." },
      { quiz: quiz2._id, questionText: "Personal selling involves:", options: ["Mass communication", "Face-to-face interaction between seller and buyer", "Only advertising", "Only online sales"], correctAnswer: 1, marks: 1, explanation: "Personal selling is direct, personal communication to persuade potential buyers." },
      { quiz: quiz2._id, questionText: "Packaging serves the function of:", options: ["Only decoration", "Protection, information, and promotion", "Only storage", "Only transportation"], correctAnswer: 1, marks: 1, explanation: "Packaging protects the product, provides information, and acts as a silent salesman." },
      { quiz: quiz2._id, questionText: "Price skimming strategy means:", options: ["Low initial price", "High initial price, gradually reduced", "Fixed price always", "Free product"], correctAnswer: 1, marks: 1, explanation: "Skimming sets high price initially to maximize revenue from early adopters, then lowers it." },
      { quiz: quiz2._id, questionText: "Advertising is a form of:", options: ["Personal communication", "Non-personal, paid mass communication", "Free publicity", "Direct selling"], correctAnswer: 1, marks: 1, explanation: "Advertising is paid, non-personal communication through mass media." },
      { quiz: quiz2._id, questionText: "Distribution channel refers to:", options: ["Manufacturing process", "Path through which goods move from producer to consumer", "Advertising medium", "Pricing strategy"], correctAnswer: 1, marks: 1, explanation: "Distribution channels are intermediaries that help move products to end consumers." },
      { quiz: quiz2._id, questionText: "Product life cycle has how many stages?", options: ["2", "4: Introduction, Growth, Maturity, Decline", "6", "3"], correctAnswer: 1, marks: 1, explanation: "PLC has 4 stages: Introduction, Growth, Maturity, and Decline." },
      { quiz: quiz2._id, questionText: "Consumer rights include:", options: ["Right to exploit", "Right to safety, information, choice, and redressal", "Right to monopoly", "Right to unlimited returns"], correctAnswer: 1, marks: 1, explanation: "Key consumer rights: safety, information, choice, hearing, redressal, and education." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Financial Management and Markets",
      subject: "Business Studies",
      category: "Finance",
      chapter: "Financial Management",
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
      { quiz: quiz3._id, questionText: "Capital structure refers to:", options: ["Only equity", "Mix of debt and equity financing", "Only debt", "Only reserves"], correctAnswer: 1, marks: 1, explanation: "Capital structure is the proportion of debt and equity used to finance the firm." },
      { quiz: quiz3._id, questionText: "Working capital is:", options: ["Fixed assets - Long term debt", "Current assets - Current liabilities", "Total assets", "Share capital"], correctAnswer: 1, marks: 1, explanation: "Working capital = Current Assets - Current Liabilities (funds for daily operations)." },
      { quiz: quiz3._id, questionText: "SEBI stands for:", options: ["State Exchange Board of India", "Securities and Exchange Board of India", "Stock and Equity Board", "Share Exchange Bureau"], correctAnswer: 1, marks: 1, explanation: "SEBI regulates the securities market to protect investors and ensure fair practices." },
      { quiz: quiz3._id, questionText: "Primary market deals with:", options: ["Old securities", "New issue of securities (IPO)", "Second-hand goods", "Government bonds only"], correctAnswer: 1, marks: 1, explanation: "Primary market is where new securities are issued for the first time (IPOs)." },
      { quiz: quiz3._id, questionText: "Financial leverage is favorable when:", options: ["ROI < Interest rate", "ROI > Interest rate on debt", "No debt is used", "Only equity is used"], correctAnswer: 1, marks: 1, explanation: "Leverage is favorable when return on investment exceeds the cost of borrowed funds." },
      { quiz: quiz3._id, questionText: "Dividend decision is affected by:", options: ["Weather", "Earnings, cash flow, and shareholder expectations", "Only tax", "Only law"], correctAnswer: 1, marks: 1, explanation: "Dividend decisions depend on earnings, cash position, growth plans, and shareholder needs." },
      { quiz: quiz3._id, questionText: "Money market deals in:", options: ["Long-term securities", "Short-term funds (up to 1 year)", "Real estate", "Foreign exchange only"], correctAnswer: 1, marks: 1, explanation: "Money market handles short-term borrowing and lending (maturity up to 1 year)." },
      { quiz: quiz3._id, questionText: "Stock exchange is a:", options: ["Primary market", "Secondary market for trading existing securities", "Wholesale market", "Retail market"], correctAnswer: 1, marks: 1, explanation: "Stock exchange is a secondary market where previously issued securities are traded." },
      { quiz: quiz3._id, questionText: "Fixed capital requirement depends on:", options: ["Daily sales only", "Nature of business and scale of operations", "Number of employees only", "Location only"], correctAnswer: 1, marks: 1, explanation: "Manufacturing firms need more fixed capital than trading firms due to machinery needs." },
      { quiz: quiz3._id, questionText: "Treasury bills are issued by:", options: ["Commercial banks", "Reserve Bank of India (on behalf of government)", "Private companies", "Stock exchange"], correctAnswer: 1, marks: 1, explanation: "Treasury bills are short-term government securities issued by RBI." },
    ]);

    console.log("✓ Class 12 Commerce - Business Studies: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceBusinessStudies };
