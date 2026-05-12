import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12CommerceMathematics = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Linear Programming and Matrices",
      subject: "Mathematics",
      category: "Applied Mathematics",
      chapter: "Linear Programming",
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
      { quiz: quiz1._id, questionText: "In linear programming, the objective function is:", options: ["Always quadratic", "A linear function to be maximized or minimized", "Always constant", "Non-linear"], correctAnswer: 1, marks: 1, explanation: "LP involves optimizing (max/min) a linear objective function subject to constraints." },
      { quiz: quiz1._id, questionText: "Feasible region in LP is:", options: ["Always unbounded", "Set of all points satisfying all constraints", "A single point", "Empty always"], correctAnswer: 1, marks: 1, explanation: "Feasible region contains all points that satisfy every constraint simultaneously." },
      { quiz: quiz1._id, questionText: "Optimal solution in LP occurs at:", options: ["Center of feasible region", "Corner point (vertex) of feasible region", "Any random point", "Outside feasible region"], correctAnswer: 1, marks: 1, explanation: "By corner point theorem, optimal solution lies at a vertex of the feasible region." },
      { quiz: quiz1._id, questionText: "If A is a 2×3 matrix and B is 3×2, then AB is:", options: ["3×3", "2×2", "2×3", "Not possible"], correctAnswer: 1, marks: 1, explanation: "AB dimensions: (2×3)(3×2) = 2×2." },
      { quiz: quiz1._id, questionText: "A square matrix A is invertible if:", options: ["det(A) = 0", "det(A) ≠ 0", "A is symmetric", "A has all zeros"], correctAnswer: 1, marks: 1, explanation: "A matrix is invertible (non-singular) only when its determinant is non-zero." },
      { quiz: quiz1._id, questionText: "The constraints in LP are:", options: ["Always equalities", "Linear inequalities or equalities", "Quadratic", "Exponential"], correctAnswer: 1, marks: 1, explanation: "LP constraints are linear inequalities (≤, ≥) or equalities." },
      { quiz: quiz1._id, questionText: "If LP has no feasible region, the problem is:", options: ["Optimal", "Infeasible", "Unbounded", "Degenerate"], correctAnswer: 1, marks: 1, explanation: "When constraints are contradictory, no feasible region exists — problem is infeasible." },
      { quiz: quiz1._id, questionText: "Transpose of a matrix is obtained by:", options: ["Multiplying by -1", "Interchanging rows and columns", "Adding identity", "Squaring elements"], correctAnswer: 1, marks: 1, explanation: "Transpose converts rows to columns and vice versa." },
      { quiz: quiz1._id, questionText: "For matrix equation AX = B, X =:", options: ["AB", "A⁻¹B", "BA⁻¹", "A+B"], correctAnswer: 1, marks: 1, explanation: "Pre-multiplying both sides by A⁻¹: X = A⁻¹B." },
      { quiz: quiz1._id, questionText: "Non-negativity constraints in LP mean:", options: ["Variables can be negative", "Variables must be ≥ 0", "Variables equal zero", "No constraints"], correctAnswer: 1, marks: 1, explanation: "Non-negativity ensures decision variables are zero or positive (practical requirement)." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Calculus Applications in Commerce",
      subject: "Mathematics",
      category: "Calculus",
      chapter: "Application of Derivatives",
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
      { quiz: quiz2._id, questionText: "Marginal cost is:", options: ["Total cost", "Derivative of total cost with respect to quantity", "Fixed cost", "Average cost"], correctAnswer: 1, marks: 1, explanation: "MC = dC/dq — rate of change of total cost with respect to output." },
      { quiz: quiz2._id, questionText: "Revenue is maximized when:", options: ["MR = MC", "Marginal Revenue = 0", "Price = 0", "Cost = 0"], correctAnswer: 1, marks: 1, explanation: "Revenue is maximum when MR = dR/dq = 0 (first derivative test)." },
      { quiz: quiz2._id, questionText: "If demand function is p = 100 - 2q, total revenue is:", options: ["100q", "100q - 2q²", "100 - 2q", "50q"], correctAnswer: 1, marks: 1, explanation: "TR = p × q = (100-2q)q = 100q - 2q²." },
      { quiz: quiz2._id, questionText: "Break-even point occurs when:", options: ["Profit is maximum", "Total Revenue = Total Cost", "MR = 0", "MC = 0"], correctAnswer: 1, marks: 1, explanation: "Break-even: TR = TC (no profit, no loss)." },
      { quiz: quiz2._id, questionText: "Elasticity of demand using calculus is:", options: ["dq/dp", "-(p/q) × (dq/dp)", "dp/dq", "p × q"], correctAnswer: 1, marks: 1, explanation: "Point elasticity Ed = -(p/q)(dq/dp)." },
      { quiz: quiz2._id, questionText: "Profit is maximized when:", options: ["MR = 0", "MR = MC and d²π/dq² < 0", "TR is maximum", "TC is minimum"], correctAnswer: 1, marks: 1, explanation: "Profit max: MR = MC with second derivative of profit being negative." },
      { quiz: quiz2._id, questionText: "Average cost is minimum when:", options: ["AC = MC", "MC = 0", "AC = 0", "TC = 0"], correctAnswer: 0, marks: 1, explanation: "AC is minimum at the point where AC = MC (MC curve intersects AC at its minimum)." },
      { quiz: quiz2._id, questionText: "∫(3x² + 2x)dx equals:", options: ["6x + 2", "x³ + x² + C", "3x³ + x²", "x² + x + C"], correctAnswer: 1, marks: 1, explanation: "∫3x²dx = x³, ∫2xdx = x², so answer is x³ + x² + C." },
      { quiz: quiz2._id, questionText: "Consumer surplus is calculated using:", options: ["Differentiation only", "Integration (area under demand curve above price)", "Addition", "Division"], correctAnswer: 1, marks: 1, explanation: "Consumer surplus = ∫₀^q₀ D(q)dq - p₀q₀." },
      { quiz: quiz2._id, questionText: "If C(x) = 5x² + 10x + 100, fixed cost is:", options: ["5x²", "100", "10x", "5x² + 10x"], correctAnswer: 1, marks: 1, explanation: "Fixed cost is the constant term (cost when output = 0): C(0) = 100." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Probability and Statistics for Commerce",
      subject: "Mathematics",
      category: "Statistics",
      chapter: "Probability Distributions",
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
      { quiz: quiz3._id, questionText: "Expected value E(X) of a random variable is:", options: ["Maximum value", "Weighted average of all possible values", "Minimum value", "Mode"], correctAnswer: 1, marks: 1, explanation: "E(X) = Σ xᵢP(xᵢ) — probability-weighted average of all outcomes." },
      { quiz: quiz3._id, questionText: "Variance measures:", options: ["Central tendency", "Spread/dispersion of data from mean", "Frequency", "Probability"], correctAnswer: 1, marks: 1, explanation: "Variance = E(X²) - [E(X)]² measures how spread out values are." },
      { quiz: quiz3._id, questionText: "In binomial distribution, P(X=r) =:", options: ["nCr × p^r × q^(n-r)", "p + q", "np", "npq"], correctAnswer: 0, marks: 1, explanation: "Binomial probability: P(X=r) = ⁿCᵣ × pʳ × q^(n-r)." },
      { quiz: quiz3._id, questionText: "For a fair coin tossed 3 times, P(exactly 2 heads) =:", options: ["1/8", "3/8", "1/2", "1/4"], correctAnswer: 1, marks: 1, explanation: "P = ³C₂ × (1/2)² × (1/2)¹ = 3 × 1/4 × 1/2 = 3/8." },
      { quiz: quiz3._id, questionText: "Conditional probability P(A|B) =:", options: ["P(A) × P(B)", "P(A∩B) / P(B)", "P(A) + P(B)", "P(A) / P(B)"], correctAnswer: 1, marks: 1, explanation: "P(A|B) = P(A∩B)/P(B) — probability of A given B has occurred." },
      { quiz: quiz3._id, questionText: "Two events are independent if:", options: ["P(A∩B) = 0", "P(A∩B) = P(A) × P(B)", "P(A∪B) = 1", "P(A) = P(B)"], correctAnswer: 1, marks: 1, explanation: "Independence: P(A∩B) = P(A)P(B) — occurrence of one doesn't affect the other." },
      { quiz: quiz3._id, questionText: "Standard deviation is:", options: ["Square of variance", "Square root of variance", "Mean of data", "Range of data"], correctAnswer: 1, marks: 1, explanation: "SD = √Variance — same unit as data, easier to interpret than variance." },
      { quiz: quiz3._id, questionText: "If P(A) = 0.3 and P(B) = 0.4, and A,B are independent, P(A∩B) =:", options: ["0.7", "0.12", "0.1", "0.3"], correctAnswer: 1, marks: 1, explanation: "For independent events: P(A∩B) = 0.3 × 0.4 = 0.12." },
      { quiz: quiz3._id, questionText: "Coefficient of variation =:", options: ["Mean/SD × 100", "(SD/Mean) × 100", "SD × Mean", "Variance/Mean"], correctAnswer: 1, marks: 1, explanation: "CV = (SD/Mean) × 100 — relative measure of dispersion." },
      { quiz: quiz3._id, questionText: "Normal distribution is:", options: ["Skewed right", "Symmetric and bell-shaped", "Uniform", "Skewed left"], correctAnswer: 1, marks: 1, explanation: "Normal distribution is symmetric, bell-shaped with mean = median = mode." },
    ]);

    console.log("✓ Class 12 Commerce - Mathematics: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12CommerceMathematics };
