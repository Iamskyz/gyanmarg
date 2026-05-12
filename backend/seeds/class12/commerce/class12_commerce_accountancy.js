import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceAccountancy = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Partnership Accounts",
      subject: "Accountancy",
      category: "Partnership",
      chapter: "Partnership Fundamentals",
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
      { quiz: quiz1._id, questionText: "In absence of partnership deed, profit is shared:", options: ["In capital ratio", "Equally", "In ratio of work done", "As per seniority"], correctAnswer: 1, marks: 1, explanation: "Without a deed, Indian Partnership Act 1932 states profits are shared equally." },
      { quiz: quiz1._id, questionText: "Interest on capital is allowed only when:", options: ["Always", "Partnership deed provides for it", "Partners demand it", "Firm earns profit"], correctAnswer: 1, marks: 1, explanation: "Interest on capital is allowed only if the partnership deed specifically provides for it." },
      { quiz: quiz1._id, questionText: "Goodwill in partnership is:", options: ["A tangible asset", "An intangible asset representing firm's reputation", "A liability", "An expense"], correctAnswer: 1, marks: 1, explanation: "Goodwill is an intangible asset representing the firm's earning capacity and reputation." },
      { quiz: quiz1._id, questionText: "When a new partner is admitted, the old partners sacrifice their share in:", options: ["Capital", "Goodwill/profit sharing ratio", "Drawings", "Loans"], correctAnswer: 1, marks: 1, explanation: "Old partners sacrifice a portion of their profit share in favor of the new partner." },
      { quiz: quiz1._id, questionText: "Revaluation account is prepared at the time of:", options: ["Daily transactions", "Admission, retirement, or death of a partner", "Every year end", "Audit"], correctAnswer: 1, marks: 1, explanation: "Revaluation account adjusts asset/liability values when partnership composition changes." },
      { quiz: quiz1._id, questionText: "Sacrificing ratio is calculated as:", options: ["New ratio - Old ratio", "Old ratio - New ratio", "Capital ratio", "Equal ratio"], correctAnswer: 1, marks: 1, explanation: "Sacrificing ratio = Old ratio - New ratio (positive difference shows sacrifice)." },
      { quiz: quiz1._id, questionText: "Gaining ratio is used at the time of:", options: ["Admission", "Retirement or death of a partner", "Dissolution", "Every year"], correctAnswer: 1, marks: 1, explanation: "Gaining ratio is calculated when a partner retires/dies and remaining partners gain." },
      { quiz: quiz1._id, questionText: "Partner's capital account under fixed capital method has:", options: ["All transactions in one account", "Separate capital and current accounts", "Only drawings", "Only interest"], correctAnswer: 1, marks: 1, explanation: "Fixed capital method maintains separate capital (fixed) and current (fluctuating) accounts." },
      { quiz: quiz1._id, questionText: "Guarantee of minimum profit means:", options: ["Firm guarantees profit to all", "One partner's share won't fall below a minimum", "Government guarantee", "Bank guarantee"], correctAnswer: 1, marks: 1, explanation: "A partner is guaranteed minimum profit; deficiency is borne by guaranteeing partner(s)." },
      { quiz: quiz1._id, questionText: "Interest on drawings is charged:", options: ["To encourage savings", "To discourage excessive withdrawals", "As income to partner", "As expense to firm"], correctAnswer: 1, marks: 1, explanation: "Interest on drawings discourages partners from withdrawing excessive amounts." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Company Accounts - Issue of Shares",
      subject: "Accountancy",
      category: "Company Accounts",
      chapter: "Issue of Shares and Debentures",
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
      { quiz: quiz2._id, questionText: "Share capital that is mentioned in Memorandum of Association is:", options: ["Issued capital", "Authorized/Nominal capital", "Paid-up capital", "Reserve capital"], correctAnswer: 1, marks: 1, explanation: "Authorized capital is the maximum capital a company can raise as per its MOA." },
      { quiz: quiz2._id, questionText: "Shares issued at a price higher than face value are issued at:", options: ["Discount", "Premium", "Par", "Loss"], correctAnswer: 1, marks: 1, explanation: "Premium = Issue price - Face value (excess over face value)." },
      { quiz: quiz2._id, questionText: "Securities Premium can be used for:", options: ["Paying dividends", "Writing off preliminary expenses or issuing bonus shares", "Partner's salary", "Daily expenses"], correctAnswer: 1, marks: 1, explanation: "Securities Premium has restricted uses under Companies Act (Section 52)." },
      { quiz: quiz2._id, questionText: "Forfeiture of shares means:", options: ["Issuing new shares", "Cancellation of shares for non-payment of calls", "Buying back shares", "Splitting shares"], correctAnswer: 1, marks: 1, explanation: "Forfeiture cancels allotment when shareholder fails to pay calls due." },
      { quiz: quiz2._id, questionText: "Forfeited shares can be reissued at:", options: ["Only at par", "Any price not below the amount forfeited", "Only at premium", "Any price without limit"], correctAnswer: 1, marks: 1, explanation: "Reissue price + forfeited amount must be at least equal to face value." },
      { quiz: quiz2._id, questionText: "Debentures represent:", options: ["Ownership in company", "Long-term loan/debt of the company", "Share capital", "Reserves"], correctAnswer: 1, marks: 1, explanation: "Debentures are debt instruments — the company borrows money from debenture holders." },
      { quiz: quiz2._id, questionText: "Interest on debentures is:", options: ["Paid from profits only", "A charge on profits (paid regardless of profit)", "Optional", "Paid only to preference holders"], correctAnswer: 1, marks: 1, explanation: "Debenture interest is a fixed obligation, payable whether company earns profit or not." },
      { quiz: quiz2._id, questionText: "Calls in arrears means:", options: ["Extra money received", "Amount not yet paid by shareholders on calls", "Advance from shareholders", "Dividend unpaid"], correctAnswer: 1, marks: 1, explanation: "Calls in arrears is the amount shareholders have failed to pay on due calls." },
      { quiz: quiz2._id, questionText: "Oversubscription of shares means:", options: ["No applications received", "Applications exceed shares offered", "Shares issued at discount", "Shares forfeited"], correctAnswer: 1, marks: 1, explanation: "Oversubscription occurs when demand (applications) exceeds the number of shares offered." },
      { quiz: quiz2._id, questionText: "Discount on issue of debentures is:", options: ["An income", "A capital loss (written off over debenture life)", "A revenue gain", "An asset"], correctAnswer: 1, marks: 1, explanation: "Discount on issue is a loss written off over the life of debentures." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Financial Statement Analysis",
      subject: "Accountancy",
      category: "Financial Analysis",
      chapter: "Ratio Analysis and Cash Flow",
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
      { quiz: quiz3._id, questionText: "Current ratio is:", options: ["Fixed Assets / Current Liabilities", "Current Assets / Current Liabilities", "Net Profit / Sales", "Debt / Equity"], correctAnswer: 1, marks: 1, explanation: "Current Ratio = Current Assets ÷ Current Liabilities (measures short-term solvency)." },
      { quiz: quiz3._id, questionText: "Ideal current ratio is generally considered as:", options: ["1:1", "2:1", "3:1", "0.5:1"], correctAnswer: 1, marks: 1, explanation: "2:1 is considered ideal — sufficient current assets to cover current liabilities." },
      { quiz: quiz3._id, questionText: "Debt-Equity ratio measures:", options: ["Profitability", "Long-term solvency/financial leverage", "Liquidity", "Efficiency"], correctAnswer: 1, marks: 1, explanation: "Debt-Equity ratio shows proportion of debt vs equity in financing (leverage)." },
      { quiz: quiz3._id, questionText: "Cash flow statement classifies activities into:", options: ["Two categories", "Three: Operating, Investing, Financing", "Four categories", "Five categories"], correctAnswer: 1, marks: 1, explanation: "Cash flow statement has three sections: Operating, Investing, and Financing activities." },
      { quiz: quiz3._id, questionText: "Operating activities in cash flow include:", options: ["Purchase of machinery", "Day-to-day business transactions", "Issue of shares", "Repayment of loan"], correctAnswer: 1, marks: 1, explanation: "Operating activities relate to principal revenue-generating activities of the business." },
      { quiz: quiz3._id, questionText: "Gross Profit ratio is:", options: ["Net Profit / Sales × 100", "Gross Profit / Net Sales × 100", "Sales / Capital × 100", "Profit / Assets × 100"], correctAnswer: 1, marks: 1, explanation: "GP Ratio = (Gross Profit / Net Sales) × 100." },
      { quiz: quiz3._id, questionText: "Quick ratio excludes which current asset?", options: ["Cash", "Stock/Inventory", "Debtors", "Bank balance"], correctAnswer: 1, marks: 1, explanation: "Quick ratio = (Current Assets - Stock) / Current Liabilities (stock is least liquid)." },
      { quiz: quiz3._id, questionText: "Return on Investment (ROI) measures:", options: ["Liquidity", "Efficiency of capital employed in generating profit", "Solvency", "Turnover"], correctAnswer: 1, marks: 1, explanation: "ROI = (Net Profit / Capital Employed) × 100." },
      { quiz: quiz3._id, questionText: "Comparative financial statements show:", options: ["Only current year data", "Two or more years' data side by side for comparison", "Only projected data", "Only cash data"], correctAnswer: 1, marks: 1, explanation: "Comparative statements present multiple periods for trend analysis." },
      { quiz: quiz3._id, questionText: "Investing activities in cash flow include:", options: ["Sales revenue", "Purchase/sale of fixed assets", "Payment of dividends", "Salary payments"], correctAnswer: 1, marks: 1, explanation: "Investing activities involve acquisition and disposal of long-term assets." },
    ]);

    console.log("✓ Class 12 Commerce - Accountancy: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceAccountancy };
