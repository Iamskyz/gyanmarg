import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12ScienceMathematicsOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "କ୍ୟାଲକୁଲସ୍ - ଅବକଳନ ଏବଂ ସମାକଳନ",
      subject: "Mathematics",
      category: "Calculus",
      chapter: "Differentiation and Integration",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz1._id, questionText: "sin(x) ର derivative କଣ?", options: ["-cos(x)", "cos(x)", "tan(x)", "-sin(x)"], correctAnswer: 1, marks: 1, explanation: "d/dx[sin(x)] = cos(x)." },
      { quiz: quiz1._id, questionText: "eˣ ର derivative କଣ?", options: ["xeˣ⁻¹", "eˣ", "eˣ/x", "ln(x)"], correctAnswer: 1, marks: 1, explanation: "eˣ ନିଜେ ନିଜର derivative।" },
      { quiz: quiz1._id, questionText: "∫(1/x)dx ର ମୂଲ୍ୟ କଣ?", options: ["x²/2", "ln|x| + C", "1/x² + C", "eˣ + C"], correctAnswer: 1, marks: 1, explanation: "∫(1/x)dx = ln|x| + C।" },
      { quiz: quiz1._id, questionText: "Chain rule ଅନୁଯାୟୀ d/dx[f(g(x))] କେତେ?", options: ["f'(x)·g'(x)", "f'(g(x))·g'(x)", "f(g'(x))", "f'(x)+g'(x)"], correctAnswer: 1, marks: 1, explanation: "Composite function ର derivative ପାଇଁ chain rule ବ୍ୟବହୃତ ହୁଏ।" },
      { quiz: quiz1._id, questionText: "ଯଦି f'(x)=0 ଏବଂ f''(x)>0, ତେବେ ବିନ୍ଦୁଟି କଣ?", options: ["Maximum", "Minimum", "Inflection point", "Saddle point"], correctAnswer: 1, marks: 1, explanation: "Second derivative test ଅନୁଯାୟୀ ଏହା local minimum।" },
      { quiz: quiz1._id, questionText: "∫₀^π sin(x)dx ର ମୂଲ୍ୟ କେତେ?", options: ["0", "2", "1", "π"], correctAnswer: 1, marks: 1, explanation: "∫₀^π sin(x)dx = 2।" },
      { quiz: quiz1._id, questionText: "ln(x) ର derivative କଣ?", options: ["x", "1/x", "eˣ", "1/ln(x)"], correctAnswer: 1, marks: 1, explanation: "d/dx[ln(x)] = 1/x।" },
      { quiz: quiz1._id, questionText: "Integration by parts ର ସୂତ୍ର କଣ?", options: ["∫udv = uv + ∫vdu", "∫udv = uv - ∫vdu", "∫udv = u/v", "∫udv = du·dv"], correctAnswer: 1, marks: 1, explanation: "Integration by parts: ∫udv = uv - ∫vdu।" },
      { quiz: quiz1._id, questionText: "a ଠାରୁ b ପର୍ଯ୍ୟନ୍ତ y=f(x) ର ତଳ ଅଞ୍ଚଳ କେଉଁଥିରେ ମିଳେ?", options: ["f(b)-f(a)", "∫ₐᵇ f(x)dx", "f'(b)-f'(a)", "f(a)+f(b)"], correctAnswer: 1, marks: 1, explanation: "Definite integral ଦ୍ୱାରା ଅଞ୍ଚଳ ମିଳେ।" },
      { quiz: quiz1._id, questionText: "L'Hôpital rule କେଉଁ ରୂପର limit ପାଇଁ ଲାଗୁହୁଏ?", options: ["Finite value", "0/0 କିମ୍ବା ∞/∞", "1/0", "Any value"], correctAnswer: 1, marks: 1, explanation: "Indeterminate form 0/0 କିମ୍ବା ∞/∞ ପାଇଁ ଲାଗୁହୁଏ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ମ୍ୟାଟ୍ରିକ୍ସ ଏବଂ ନିର୍ଣ୍ଣାୟକ",
      subject: "Mathematics",
      category: "Algebra",
      chapter: "Matrices and Determinants",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz2._id, questionText: "କେବେ square matrix singular ହୁଏ?", options: ["det(A)=1", "det(A)=0", "det(A)>0", "A symmetric"], correctAnswer: 1, marks: 1, explanation: "Singular matrix ର determinant 0 ହୁଏ।" },
      { quiz: quiz2._id, questionText: "ଯଦି det(A)=5, ତେବେ det(2A) କେତେ?", options: ["10", "40", "20", "80"], correctAnswer: 1, marks: 1, explanation: "det(2A)=2³×5=40।" },
      { quiz: quiz2._id, questionText: "(AB)⁻¹ କେତେ?", options: ["A⁻¹B⁻¹", "B⁻¹A⁻¹", "AB", "(AB)ᵀ"], correctAnswer: 1, marks: 1, explanation: "(AB)⁻¹ = B⁻¹A⁻¹।" },
      { quiz: quiz2._id, questionText: "Orthogonal matrix ପାଇଁ କେଉଁ ସମୀକରଣ ସଠିକ?", options: ["A=Aᵀ", "AAᵀ=I", "A=A⁻¹", "det(A)=0"], correctAnswer: 1, marks: 1, explanation: "Orthogonal matrix ର inverse ଏବଂ transpose ସମାନ।" },
      { quiz: quiz2._id, questionText: "3×3 identity matrix ର rank କେତେ?", options: ["1", "3", "0", "9"], correctAnswer: 1, marks: 1, explanation: "Identity matrix ର ସମସ୍ତ row independent।" },
      { quiz: quiz2._id, questionText: "Cramer's rule କାହା ପାଇଁ ବ୍ୟବହୃତ?", options: ["Differential equation", "Linear equation system", "Quadratic equation", "Inequality"], correctAnswer: 1, marks: 1, explanation: "Linear equations determinant ଦ୍ୱାରା ସମାଧାନ କରାଯାଏ।" },
      { quiz: quiz2._id, questionText: "(AB)ᵀ କେତେ?", options: ["AᵀBᵀ", "BᵀAᵀ", "AB", "BA"], correctAnswer: 1, marks: 1, explanation: "Transpose product ରେ order reverse ହୁଏ।" },
      { quiz: quiz2._id, questionText: "Skew-symmetric matrix ପାଇଁ କଣ ସଠିକ?", options: ["A=Aᵀ", "A=-Aᵀ", "A=A⁻¹", "A²=I"], correctAnswer: 1, marks: 1, explanation: "Skew-symmetric matrix ର diagonal element 0।" },
      { quiz: quiz2._id, questionText: "2×2 matrix [[a,b],[c,d]] ର adjoint କଣ?", options: ["[[d,b],[c,a]]", "[[d,-b],[-c,a]]", "[[a,c],[b,d]]", "[[-d,b],[c,-a]]"], correctAnswer: 1, marks: 1, explanation: "Adjoint ରେ diagonal swap ଏବଂ off-diagonal negate ହୁଏ।" },
      { quiz: quiz2._id, questionText: "ଯଦି det(A)=0, ତେବେ AX=B ର କେମିତି solution ହୋଇପାରେ?", options: ["Unique solution", "No solution କିମ୍ବା infinitely many", "Exactly two", "Always infinite"], correctAnswer: 1, marks: 1, explanation: "det(A)=0 ହେଲେ unique solution ନଥାଏ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "Probability ଏବଂ Vector",
      subject: "Mathematics",
      category: "Probability",
      chapter: "Probability and Vectors",
      grade: 12,
      stream: "science",
      difficulty: "hard",
      language: "od",
      duration: 15,
      totalMarks: 10,
      xpReward: 35,
      isPublished: true,
      createdBy: adminId,
    });

    await Question.insertMany([
      { quiz: quiz3._id, questionText: "Bayes theorem କାହାକୁ ନିର୍ଣ୍ଣୟ କରେ?", options: ["Marginal probability", "Posterior probability", "Joint probability", "Complementary probability"], correctAnswer: 1, marks: 1, explanation: "Bayes theorem posterior probability ଦେଇଥାଏ।" },
      { quiz: quiz3._id, questionText: "Binomial distribution ର variance କଣ?", options: ["np", "npq", "np²", "n²pq"], correctAnswer: 1, marks: 1, explanation: "Variance = npq।" },
      { quiz: quiz3._id, questionText: "ଦୁଇ vector perpendicular ହେଲେ dot product କେତେ?", options: ["1", "0", "-1", "Undefined"], correctAnswer: 1, marks: 1, explanation: "Perpendicular vector ର dot product 0।" },
      { quiz: quiz3._id, questionText: "Parallel vector ର cross product କେତେ?", options: ["Maximum", "Zero vector", "Unit vector", "Undefined"], correctAnswer: 1, marks: 1, explanation: "Parallel vector ର cross product 0।" },
      { quiz: quiz3._id, questionText: "P(A∪B)=P(A)+P(B)-P(A∩B) କେଉଁ theorem?", options: ["Bayes theorem", "Addition theorem", "Multiplication rule", "Conditional probability"], correctAnswer: 1, marks: 1, explanation: "ଏହା probability ର addition theorem।" },
      { quiz: quiz3._id, questionText: "Direction cosine ପାଇଁ କେଉଁ relation ସଠିକ?", options: ["l+m+n=1", "l²+m²+n²=1", "l×m×n=1", "l-m-n=0"], correctAnswer: 1, marks: 1, explanation: "Direction cosine ର square sum 1 ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Plane ର vector equation କଣ?", options: ["r·n=d", "r×n=d", "r+n=d", "r/n=d"], correctAnswer: 0, marks: 1, explanation: "r·n=d plane ର vector equation।" },
      { quiz: quiz3._id, questionText: "ଯଦି P(A|B)=P(A), ତେବେ A ଏବଂ B କେମିତି event?", options: ["Mutually exclusive", "Independent", "Dependent", "Complementary"], correctAnswer: 1, marks: 1, explanation: "Conditional probability same ହେଲେ event independent।" },
      { quiz: quiz3._id, questionText: "Scalar triple product କଣ ଦେଇଥାଏ?", options: ["Triangle area", "Parallelepiped volume", "Perimeter", "Diagonal"], correctAnswer: 1, marks: 1, explanation: "a·(b×c) ରେ volume ମିଳେ।" },
      { quiz: quiz3._id, questionText: "Poisson distribution ର mean କେତେ?", options: ["λ²", "λ", "1/λ", "√λ"], correctAnswer: 1, marks: 1, explanation: "Poisson distribution ର mean = variance = λ।" },
    ]);

    console.log("✓ Class 12 Science - Mathematics Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12ScienceMathematicsOdia };
