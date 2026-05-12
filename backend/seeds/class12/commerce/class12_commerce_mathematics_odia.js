import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceMathematicsOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Linear Programming ଏବଂ Matrix",
      subject: "Mathematics",
      category: "Applied Mathematics",
      chapter: "Linear Programming",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "Linear programming ର objective function କ’ଣ?", options: ["ସଦା quadratic", "Maximize କିମ୍ବା minimize କରିବାକୁ linear function", "ସଦା constant", "Non-linear"], correctAnswer: 1, marks: 1, explanation: "LP ରେ constraints ସହିତ linear objective function optimize କରାଯାଏ।" },
      { quiz: quiz1._id, questionText: "LP ର feasible region କ’ଣ?", options: ["ସଦା unbounded", "ସମସ୍ତ constraints ପୂରଣ କରୁଥିବା points ର ସମୁଚ୍ଚୟ", "ଏକମାତ୍ର point", "ସଦା ଖାଲି"], correctAnswer: 1, marks: 1, explanation: "Feasible region ସମସ୍ତ constraints satisfy କରେ।" },
      { quiz: quiz1._id, questionText: "LP ର optimal solution କେଉଁଠାରେ ମିଳେ?", options: ["Feasible region ର center", "Corner point (vertex)", "Random point", "Feasible region ବାହାରେ"], correctAnswer: 1, marks: 1, explanation: "Corner point theorem ଅନୁଯାୟୀ optimal solution vertex ରେ ଥାଏ।" },
      { quiz: quiz1._id, questionText: "A ଯଦି 2×3 matrix ଏବଂ B ଯଦି 3×2 matrix, ତେବେ AB କେତେ?", options: ["3×3", "2×2", "2×3", "ସମ୍ଭବ ନୁହେଁ"], correctAnswer: 1, marks: 1, explanation: "(2×3)(3×2)=2×2।" },
      { quiz: quiz1._id, questionText: "Square matrix A କେବେ invertible?", options: ["det(A)=0", "det(A) ≠ 0", "A symmetric", "A ସବୁ zero"], correctAnswer: 1, marks: 1, explanation: "Non-singular matrix ର determinant ଶୂନ୍ୟ ନୁହେଁ।" },
      { quiz: quiz1._id, questionText: "LP ର constraints କ’ଣ?", options: ["ସଦା equality", "Linear inequalities କିମ୍ବା equalities", "Quadratic", "Exponential"], correctAnswer: 1, marks: 1, explanation: "Constraints linear ରୂପରେ ଥାଏ।" },
      { quiz: quiz1._id, questionText: "LP ର feasible region ନଥିଲେ problem କ’ଣ?", options: ["Optimal", "Infeasible", "Unbounded", "Degenerate"], correctAnswer: 1, marks: 1, explanation: "Contradictory constraints ରେ feasible region ନଥାଏ।" },
      { quiz: quiz1._id, questionText: "Matrix ର transpose କିପରି ମିଳେ?", options: ["-1 ରେ multiply", "Rows ଏବଂ columns interchange", "Identity ଯୋଗ", "Elements square"], correctAnswer: 1, marks: 1, explanation: "Rows columns ହୋଇଯାଏ।" },
      { quiz: quiz1._id, questionText: "AX = B ହେଲେ X = ?", options: ["AB", "A⁻¹B", "BA⁻¹", "A+B"], correctAnswer: 1, marks: 1, explanation: "A⁻¹ ଦ୍ୱାରା pre-multiply କଲେ X = A⁻¹B।" },
      { quiz: quiz1._id, questionText: "LP ର non-negativity constraints ର ଅର୍ଥ କ’ଣ?", options: ["Variables negative ହୋଇପାରେ", "Variables ≥ 0", "Variables = 0", "No constraints"], correctAnswer: 1, marks: 1, explanation: "Decision variables zero କିମ୍ବା positive ହେବା ଆବଶ୍ୟକ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "Commerce ରେ Calculus ର ପ୍ରୟୋଗ",
      subject: "Mathematics",
      category: "Calculus",
      chapter: "Application of Derivatives",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "Marginal cost କ’ଣ?", options: ["Total cost", "Total cost ର derivative", "Fixed cost", "Average cost"], correctAnswer: 1, marks: 1, explanation: "MC = dC/dq।" },
      { quiz: quiz2._id, questionText: "Revenue କେବେ maximum ହୁଏ?", options: ["MR = MC", "Marginal Revenue = 0", "Price = 0", "Cost = 0"], correctAnswer: 1, marks: 1, explanation: "Revenue maximum ହେବାବେଳେ MR = 0।" },
      { quiz: quiz2._id, questionText: "Demand function p = 100 - 2q ହେଲେ total revenue କ’ଣ?", options: ["100q", "100q - 2q²", "100 - 2q", "50q"], correctAnswer: 1, marks: 1, explanation: "TR = pq = (100-2q)q।" },
      { quiz: quiz2._id, questionText: "Break-even point କେବେ ହୁଏ?", options: ["Profit maximum", "Total Revenue = Total Cost", "MR = 0", "MC = 0"], correctAnswer: 1, marks: 1, explanation: "No profit no loss point କୁ break-even କୁହାଯାଏ।" },
      { quiz: quiz2._id, questionText: "Elasticity of demand ର ସୂତ୍ର କ’ଣ?", options: ["dq/dp", "-(p/q) × (dq/dp)", "dp/dq", "p×q"], correctAnswer: 1, marks: 1, explanation: "Point elasticity ର formula।" },
      { quiz: quiz2._id, questionText: "Profit maximum କେବେ ହୁଏ?", options: ["MR = 0", "MR = MC ଏବଂ second derivative negative", "TR maximum", "TC minimum"], correctAnswer: 1, marks: 1, explanation: "Second derivative negative ହେଲେ maximum profit।" },
      { quiz: quiz2._id, questionText: "Average cost minimum କେବେ ହୁଏ?", options: ["AC = MC", "MC = 0", "AC = 0", "TC = 0"], correctAnswer: 0, marks: 1, explanation: "MC curve AC କୁ minimum point ରେ କାଟେ।" },
      { quiz: quiz2._id, questionText: "∫(3x² + 2x)dx = ?", options: ["6x+2", "x³ + x² + C", "3x³+x²", "x²+x+C"], correctAnswer: 1, marks: 1, explanation: "Integration କଲେ x³+x²+C।" },
      { quiz: quiz2._id, questionText: "Consumer surplus କିପରି ହିସାବ କରାଯାଏ?", options: ["Differentiation only", "Integration", "Addition", "Division"], correctAnswer: 1, marks: 1, explanation: "Demand curve ତଳର area ଦ୍ୱାରା।" },
      { quiz: quiz2._id, questionText: "C(x)=5x²+10x+100 ହେଲେ fixed cost କେତେ?", options: ["5x²", "100", "10x", "5x²+10x"], correctAnswer: 1, marks: 1, explanation: "Constant term fixed cost।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "Commerce ପାଇଁ Probability ଏବଂ Statistics",
      subject: "Mathematics",
      category: "Statistics",
      chapter: "Probability Distributions",
      grade: 12,
      stream: "commerce",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Random variable ର expected value E(X) କ’ଣ?", options: ["Maximum value", "Weighted average", "Minimum value", "Mode"], correctAnswer: 1, marks: 1, explanation: "E(X)=ΣxᵢP(xᵢ)।" },
      { quiz: quiz3._id, questionText: "Variance କ’ଣ ମାପେ?", options: ["Central tendency", "Data ର spread", "Frequency", "Probability"], correctAnswer: 1, marks: 1, explanation: "Mean ଠାରୁ data କେତେ ଛିଟିଯାଇଛି ଦର୍ଶାଏ।" },
      { quiz: quiz3._id, questionText: "Binomial distribution ର P(X=r) = ?", options: ["nCr × p^r × q^(n-r)", "p+q", "np", "npq"], correctAnswer: 0, marks: 1, explanation: "Binomial probability formula।" },
      { quiz: quiz3._id, questionText: "Fair coin 3 ଥର toss କଲେ exactly 2 heads ର probability କେତେ?", options: ["1/8", "3/8", "1/2", "1/4"], correctAnswer: 1, marks: 1, explanation: "³C₂ × (1/2)³ = 3/8।" },
      { quiz: quiz3._id, questionText: "Conditional probability P(A|B) = ?", options: ["P(A)×P(B)", "P(A∩B)/P(B)", "P(A)+P(B)", "P(A)/P(B)"], correctAnswer: 1, marks: 1, explanation: "Given B ହେଲେ A ର probability।" },
      { quiz: quiz3._id, questionText: "ଦୁଇଟି event independent କେବେ?", options: ["P(A∩B)=0", "P(A∩B)=P(A)×P(B)", "P(A∪B)=1", "P(A)=P(B)"], correctAnswer: 1, marks: 1, explanation: "ଏକ event ଅନ୍ୟଟିକୁ ପ୍ରଭାବିତ କରେନାହିଁ।" },
      { quiz: quiz3._id, questionText: "Standard deviation କ’ଣ?", options: ["Variance ର square", "Variance ର square root", "Mean", "Range"], correctAnswer: 1, marks: 1, explanation: "SD = √Variance।" },
      { quiz: quiz3._id, questionText: "P(A)=0.3, P(B)=0.4 ଏବଂ independent ହେଲେ P(A∩B)=?", options: ["0.7", "0.12", "0.1", "0.3"], correctAnswer: 1, marks: 1, explanation: "0.3 × 0.4 = 0.12।" },
      { quiz: quiz3._id, questionText: "Coefficient of variation = ?", options: ["Mean/SD ×100", "(SD/Mean) ×100", "SD×Mean", "Variance/Mean"], correctAnswer: 1, marks: 1, explanation: "Relative dispersion ର measure।" },
      { quiz: quiz3._id, questionText: "Normal distribution କିପରି?", options: ["Right skewed", "Symmetric ଏବଂ bell-shaped", "Uniform", "Left skewed"], correctAnswer: 1, marks: 1, explanation: "Mean = median = mode ଥାଏ।" },
    ]);

    console.log("✓ Class 12 Commerce - Mathematics Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceMathematicsOdia };
