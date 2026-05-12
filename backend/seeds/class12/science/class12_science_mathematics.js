import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceMathematics = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Calculus - Differentiation and Integration",
      subject: "Mathematics",
      category: "Calculus",
      chapter: "Differentiation and Integration",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "The derivative of sin(x) is:", options: ["-cos(x)", "cos(x)", "tan(x)", "-sin(x)"], correctAnswer: 1, marks: 1, explanation: "d/dx[sin(x)] = cos(x)." },
      { quiz: quiz1._id, questionText: "The derivative of eˣ is:", options: ["xeˣ⁻¹", "eˣ", "eˣ/x", "ln(x)"], correctAnswer: 1, marks: 1, explanation: "The exponential function eˣ is its own derivative." },
      { quiz: quiz1._id, questionText: "∫(1/x)dx equals:", options: ["x²/2", "ln|x| + C", "1/x² + C", "eˣ + C"], correctAnswer: 1, marks: 1, explanation: "The integral of 1/x is the natural logarithm ln|x| + C." },
      { quiz: quiz1._id, questionText: "The chain rule states d/dx[f(g(x))] =:", options: ["f'(x)·g'(x)", "f'(g(x))·g'(x)", "f(g'(x))", "f'(x)+g'(x)"], correctAnswer: 1, marks: 1, explanation: "Chain rule: derivative of composite function = outer derivative × inner derivative." },
      { quiz: quiz1._id, questionText: "If f'(x) = 0 and f''(x) > 0, the point is:", options: ["Maximum", "Minimum", "Inflection point", "Saddle point"], correctAnswer: 1, marks: 1, explanation: "f'(x)=0 with f''(x)>0 indicates a local minimum (second derivative test)." },
      { quiz: quiz1._id, questionText: "∫₀^π sin(x)dx equals:", options: ["0", "2", "1", "π"], correctAnswer: 1, marks: 1, explanation: "∫₀^π sin(x)dx = [-cos(x)]₀^π = -cos(π)+cos(0) = 1+1 = 2." },
      { quiz: quiz1._id, questionText: "The derivative of ln(x) is:", options: ["x", "1/x", "eˣ", "1/ln(x)"], correctAnswer: 1, marks: 1, explanation: "d/dx[ln(x)] = 1/x." },
      { quiz: quiz1._id, questionText: "Integration by parts formula is:", options: ["∫udv = uv + ∫vdu", "∫udv = uv - ∫vdu", "∫udv = u/v", "∫udv = du·dv"], correctAnswer: 1, marks: 1, explanation: "Integration by parts: ∫udv = uv - ∫vdu." },
      { quiz: quiz1._id, questionText: "The area under curve y=f(x) from a to b is:", options: ["f(b)-f(a)", "∫ₐᵇ f(x)dx", "f'(b)-f'(a)", "f(a)+f(b)"], correctAnswer: 1, marks: 1, explanation: "Definite integral ∫ₐᵇ f(x)dx gives the area under the curve." },
      { quiz: quiz1._id, questionText: "L'Hôpital's rule applies when limit gives:", options: ["A finite value", "0/0 or ∞/∞ indeterminate form", "1/0", "Any value"], correctAnswer: 1, marks: 1, explanation: "L'Hôpital's rule resolves 0/0 or ∞/∞ indeterminate forms." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Matrices and Determinants",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Matrices and Determinants",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "A square matrix A is singular if:", options: ["det(A) = 1", "det(A) = 0", "det(A) > 0", "A is symmetric"], correctAnswer: 1, marks: 1, explanation: "A singular matrix has determinant = 0 and no inverse exists." },
      { quiz: quiz2._id, questionText: "If A is a 3×3 matrix with det(A) = 5, then det(2A) =:", options: ["10", "40", "20", "80"], correctAnswer: 1, marks: 1, explanation: "det(kA) = k^n × det(A) for n×n matrix. det(2A) = 2³ × 5 = 40." },
      { quiz: quiz2._id, questionText: "(AB)⁻¹ equals:", options: ["A⁻¹B⁻¹", "B⁻¹A⁻¹", "AB", "(AB)ᵀ"], correctAnswer: 1, marks: 1, explanation: "Inverse of product reverses order: (AB)⁻¹ = B⁻¹A⁻¹." },
      { quiz: quiz2._id, questionText: "A matrix A is orthogonal if:", options: ["A = Aᵀ", "AAᵀ = I", "A = A⁻¹", "det(A) = 0"], correctAnswer: 1, marks: 1, explanation: "Orthogonal matrix satisfies AAᵀ = AᵀA = I (inverse equals transpose)." },
      { quiz: quiz2._id, questionText: "The rank of a 3×3 identity matrix is:", options: ["1", "3", "0", "9"], correctAnswer: 1, marks: 1, explanation: "Identity matrix has all linearly independent rows, so rank = 3." },
      { quiz: quiz2._id, questionText: "Cramer's rule is used to solve:", options: ["Differential equations", "System of linear equations using determinants", "Quadratic equations", "Inequalities"], correctAnswer: 1, marks: 1, explanation: "Cramer's rule solves linear systems using ratios of determinants." },
      { quiz: quiz2._id, questionText: "The transpose of a product (AB)ᵀ equals:", options: ["AᵀBᵀ", "BᵀAᵀ", "AB", "BA"], correctAnswer: 1, marks: 1, explanation: "Transpose of product reverses order: (AB)ᵀ = BᵀAᵀ." },
      { quiz: quiz2._id, questionText: "A skew-symmetric matrix satisfies:", options: ["A = Aᵀ", "A = -Aᵀ", "A = A⁻¹", "A² = I"], correctAnswer: 1, marks: 1, explanation: "Skew-symmetric: Aᵀ = -A, diagonal elements are zero." },
      { quiz: quiz2._id, questionText: "The adjoint of a 2×2 matrix [[a,b],[c,d]] is:", options: ["[[d,b],[c,a]]", "[[d,-b],[-c,a]]", "[[a,c],[b,d]]", "[[-d,b],[c,-a]]"], correctAnswer: 1, marks: 1, explanation: "For 2×2 matrix, adj(A) = [[d,-b],[-c,a]] (swap diagonal, negate off-diagonal)." },
      { quiz: quiz2._id, questionText: "If det(A) = 0, the system AX = B has:", options: ["Unique solution always", "No solution or infinitely many solutions", "Exactly two solutions", "Always infinite solutions"], correctAnswer: 1, marks: 1, explanation: "When det(A)=0, system is either inconsistent (no solution) or has infinitely many solutions." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Probability and Vectors",
      subject: "Mathematics",
      category: "Probability",
      chapter: "Probability and Vectors",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Bayes' theorem is used to find:", options: ["Marginal probability", "Posterior probability given prior information", "Joint probability only", "Complementary probability"], correctAnswer: 1, marks: 1, explanation: "Bayes' theorem calculates posterior probability using prior probability and likelihood." },
      { quiz: quiz3._id, questionText: "For a binomial distribution, variance equals:", options: ["np", "npq", "np²", "n²pq"], correctAnswer: 1, marks: 1, explanation: "Binomial variance = npq where q = 1-p." },
      { quiz: quiz3._id, questionText: "Two vectors are perpendicular if their dot product is:", options: ["1", "0", "-1", "Undefined"], correctAnswer: 1, marks: 1, explanation: "a·b = |a||b|cosθ = 0 when θ = 90° (perpendicular)." },
      { quiz: quiz3._id, questionText: "The cross product of two parallel vectors is:", options: ["Maximum", "Zero vector", "Unit vector", "Undefined"], correctAnswer: 1, marks: 1, explanation: "a×b = |a||b|sinθ = 0 when θ = 0° or 180° (parallel)." },
      { quiz: quiz3._id, questionText: "P(A∪B) = P(A) + P(B) - P(A∩B) is called:", options: ["Bayes' theorem", "Addition theorem of probability", "Multiplication rule", "Conditional probability"], correctAnswer: 1, marks: 1, explanation: "This is the addition theorem (inclusion-exclusion principle) of probability." },
      { quiz: quiz3._id, questionText: "The direction cosines of a vector satisfy:", options: ["l+m+n = 1", "l²+m²+n² = 1", "l×m×n = 1", "l-m-n = 0"], correctAnswer: 1, marks: 1, explanation: "Direction cosines satisfy l²+m²+n² = 1 (unit vector property)." },
      { quiz: quiz3._id, questionText: "The equation of a plane in vector form is:", options: ["r·n = d", "r×n = d", "r+n = d", "r/n = d"], correctAnswer: 0, marks: 1, explanation: "Vector equation of plane: r·n̂ = d where n̂ is normal to the plane." },
      { quiz: quiz3._id, questionText: "If P(A|B) = P(A), then events A and B are:", options: ["Mutually exclusive", "Independent", "Dependent", "Complementary"], correctAnswer: 1, marks: 1, explanation: "If conditional probability equals unconditional, events are independent." },
      { quiz: quiz3._id, questionText: "The scalar triple product [a b c] gives:", options: ["Area of triangle", "Volume of parallelepiped", "Perimeter", "Diagonal length"], correctAnswer: 1, marks: 1, explanation: "Scalar triple product a·(b×c) gives volume of parallelepiped formed by three vectors." },
      { quiz: quiz3._id, questionText: "Mean of a Poisson distribution with parameter λ is:", options: ["λ²", "λ", "1/λ", "√λ"], correctAnswer: 1, marks: 1, explanation: "For Poisson distribution, mean = variance = λ." },
    ]);

    console.log("✓ Class 12 Science - Mathematics: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceMathematics };
