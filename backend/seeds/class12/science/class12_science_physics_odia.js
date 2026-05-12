import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12SciencePhysicsOdia = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "ତଡିତ୍ ସ୍ଥିତିବିଜ୍ଞାନ ଏବଂ ବିଦ୍ୟୁତ୍ ପ୍ରବାହ",
      subject: "Physics",
      category: "Electrostatics",
      chapter: "ତଡିତ୍ ଆବେଶ ଏବଂ କ୍ଷେତ୍ର",
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
      { quiz: quiz1._id, questionText: "କୁଲମ୍ବ ନିୟମ କାହା ସହ ସଦୃଶ?", options: ["ଓହମ୍ ନିୟମ", "ନ୍ୟୁଟନଙ୍କ ଗୁରୁତ୍ୱାକର୍ଷଣ ନିୟମ", "ଫାରାଡେ ନିୟମ", "ଏମ୍ପିୟର ନିୟମ"], correctAnswer: 1, marks: 1, explanation: "ଉଭୟ inverse square law ଅନୁସରଣ କରେ।" },
      { quiz: quiz1._id, questionText: "ତଡିତ୍ କ୍ଷେତ୍ର ତୀବ୍ରତାର SI unit କଣ?", options: ["ଭୋଲ୍ଟ", "ନ୍ୟୁଟନ ପ୍ରତି କୁଲମ୍ବ", "କୁଲମ୍ବ ପ୍ରତି ମିଟର", "ଜୁଲ"], correctAnswer: 1, marks: 1, explanation: "Electric field intensity କୁ N/C ରେ ମାପାଯାଏ।" },
      { quiz: quiz1._id, questionText: "ବନ୍ଦ ପୃଷ୍ଠ ମଧ୍ୟରେ q ଆବେଶ ଥିଲେ electric flux କେତେ?", options: ["q/ε₀²", "q/ε₀", "qε₀", "q²/ε₀"], correctAnswer: 1, marks: 1, explanation: "Gauss law ଅନୁଯାୟୀ electric flux = q/ε₀।" },
      { quiz: quiz1._id, questionText: "Parallel plate capacitor ର capacitance କେଉଁଥିରେ ବଢ଼େ?", options: ["Plate ମଧ୍ୟର distance ବଢ଼ିଲେ", "Plate ର area ବଢ଼ିଲେ", "Dielectric constant କମିଲେ", "Area କମିଲେ"], correctAnswer: 1, marks: 1, explanation: "Capacitance area ସହ ସମାନୁପାତିକ।" },
      { quiz: quiz1._id, questionText: "Series capacitor ରେ କେଉଁ quantity ସମାନ ରହେ?", options: ["Voltage", "Charge", "Capacitance", "Energy"], correctAnswer: 1, marks: 1, explanation: "Series ରେ ପ୍ରତ୍ୟେକ capacitor ର charge ସମାନ ରହେ।" },
      { quiz: quiz1._id, questionText: "Electron ର drift velocity କାହା ସହ ସମାନୁପାତିକ?", options: ["Electric field ର square", "Electric field", "Electric field ର inverse", "Field ର square root"], correctAnswer: 1, marks: 1, explanation: "Drift velocity electric field ସହ ସମାନୁପାତିକ।" },
      { quiz: quiz1._id, questionText: "ଏକ conductor ର resistance କାହାଉପରେ ନିର୍ଭର କରେ?", options: ["Current", "Length, area ଏବଂ resistivity", "Voltage", "Temperature"], correctAnswer: 1, marks: 1, explanation: "Resistance = ρL/A।" },
      { quiz: quiz1._id, questionText: "Kirchhoff junction rule କାହାର conservation ଉପରେ ଆଧାରିତ?", options: ["Energy", "Charge", "Momentum", "Mass"], correctAnswer: 1, marks: 1, explanation: "Current conservation ହେଉଛି charge conservation।" },
      { quiz: quiz1._id, questionText: "Wheatstone bridge କାହାକୁ ମାପେ?", options: ["Current", "Unknown resistance", "EMF", "Capacitance"], correctAnswer: 1, marks: 1, explanation: "Wheatstone bridge unknown resistance ମାପିବା ପାଇଁ ବ୍ୟବହୃତ।" },
      { quiz: quiz1._id, questionText: "Cell ର internal resistance କେଉଁ ଯନ୍ତ୍ର ଦ୍ୱାରା ମାପାଯାଏ?", options: ["Ammeter", "Potentiometer", "Voltmeter", "Galvanometer"], correctAnswer: 1, marks: 1, explanation: "Potentiometer ସଠିକ ଭାବେ internal resistance ମାପେ।" },
    ]);

    const quiz2 = await Quiz.create({
      title: "ଚୁମ୍ବକତ୍ୱ ଏବଂ ବିଦ୍ୟୁତ୍ଚୁମ୍ବକୀୟ ପ୍ରେରଣ",
      subject: "Physics",
      category: "Magnetism",
      chapter: "ଚଳିତ ଆବେଶ ଏବଂ ଚୁମ୍ବକତ୍ୱ",
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
      { quiz: quiz2._id, questionText: "ଚୁମ୍ବକ କ୍ଷେତ୍ରରେ current carrying conductor ଉପରେ ବଳର ସମୀକରଣ କଣ?", options: ["F=qE", "F=BIL sinθ", "F=mv²/r", "F=kq₁q₂/r²"], correctAnswer: 1, marks: 1, explanation: "ଚୁମ୍ବକ କ୍ଷେତ୍ରରେ conductor ଉପରେ ବଳ F=BIL sinθ।" },
      { quiz: quiz2._id, questionText: "Moving coil galvanometer କେଉଁ ସିଦ୍ଧାନ୍ତ ଉପରେ କାମ କରେ?", options: ["Electromagnetic induction", "Current loop ଉପରେ torque", "Electrostatics", "Thermoelectricity"], correctAnswer: 1, marks: 1, explanation: "Current carrying coil ଉପରେ torque ଲାଗେ।" },
      { quiz: quiz2._id, questionText: "Biot-Savart law କାହାର magnetic field ଦେଇଥାଏ?", options: ["ଚୁମ୍ବକ", "Current element", "ସ୍ଥିର ଆବେଶ", "Capacitor"], correctAnswer: 1, marks: 1, explanation: "Current element ଦ୍ୱାରା magnetic field ଗଣନା କରାଯାଏ।" },
      { quiz: quiz2._id, questionText: "Faraday law ଅନୁଯାୟୀ induced EMF କାହା ସହ ସମାନୁପାତିକ?", options: ["Magnetic flux", "Flux ର rate of change", "Current", "Resistance"], correctAnswer: 1, marks: 1, explanation: "EMF = -dΦ/dt।" },
      { quiz: quiz2._id, questionText: "Lenz law କେଉଁ conservation law ସହ ସମ୍ପର୍କିତ?", options: ["Charge", "Energy", "Momentum", "Mass"], correctAnswer: 1, marks: 1, explanation: "Lenz law energy conservation ସୁନିଶ୍ଚିତ କରେ।" },
      { quiz: quiz2._id, questionText: "Solenoid ର self inductance କାହାଉପରେ ନିର୍ଭର କରେ?", options: ["Current", "Turns, area ଏବଂ length", "Resistance", "Voltage"], correctAnswer: 1, marks: 1, explanation: "Self inductance turns, area ଏବଂ length ଉପରେ ନିର୍ଭର କରେ।" },
      { quiz: quiz2._id, questionText: "Pure inductive AC circuit ରେ current କିପରି ରହେ?", options: ["Voltage ଠାରୁ 90° ଆଗରେ", "Voltage ଠାରୁ 90° ପଛରେ", "In phase", "45° ଆଗରେ"], correctAnswer: 1, marks: 1, explanation: "Inductive circuit ରେ current voltage ଠାରୁ 90° ପଛରେ ରହେ।" },
      { quiz: quiz2._id, questionText: "LCR circuit resonance ରେ କଣ ହୁଏ?", options: ["Impedance maximum", "Impedance minimum", "Current minimum", "Power factor zero"], correctAnswer: 1, marks: 1, explanation: "Resonance ରେ impedance minimum ହୁଏ।" },
      { quiz: quiz2._id, questionText: "Transformer କେଉଁ ସିଦ୍ଧାନ୍ତ ଉପରେ କାମ କରେ?", options: ["Self induction", "Mutual induction", "Electrostatics", "Thermionic emission"], correctAnswer: 1, marks: 1, explanation: "Transformer mutual induction ଉପରେ କାମ କରେ।" },
      { quiz: quiz2._id, questionText: "LCR circuit ର quality factor କଣ ସୂଚାଏ?", options: ["Power loss", "Resonance ର sharpness", "Impedance", "Phase angle"], correctAnswer: 1, marks: 1, explanation: "Q factor resonance ର sharpness ଦର୍ଶାଏ।" },
    ]);

    const quiz3 = await Quiz.create({
      title: "ଆଲୋକ ବିଜ୍ଞାନ ଏବଂ ଆଧୁନିକ ଭୌତିକବିଜ୍ଞାନ",
      subject: "Physics",
      category: "Optics",
      chapter: "Wave Optics ଏବଂ Dual Nature",
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
      { quiz: quiz3._id, questionText: "Young double slit experiment କଣ ପ୍ରମାଣ କରେ?", options: ["Particle nature", "Wave nature of light", "Photoelectric effect", "Compton effect"], correctAnswer: 1, marks: 1, explanation: "Interference pattern ଦ୍ୱାରା wave nature ପ୍ରମାଣିତ।" },
      { quiz: quiz3._id, questionText: "Photoelectric effect କଣ ପ୍ରମାଣ କରେ?", options: ["Wave nature", "Particle nature of light", "Dual nature", "Diffraction"], correctAnswer: 1, marks: 1, explanation: "Photoelectric effect photon theory କୁ ସମର୍ଥନ କରେ।" },
      { quiz: quiz3._id, questionText: "de Broglie wavelength ର ସମୀକରଣ କଣ?", options: ["λ=h/E", "λ=h/p", "λ=p/h", "λ=hc/p"], correctAnswer: 1, marks: 1, explanation: "Matter wave ପାଇଁ λ=h/p।" },
      { quiz: quiz3._id, questionText: "Bohr model ରେ nth orbit ର radius କାହା ସହ ସମାନୁପାତିକ?", options: ["n", "n²", "1/n", "1/n²"], correctAnswer: 1, marks: 1, explanation: "Bohr radius n² ସହ ସମାନୁପାତିକ।" },
      { quiz: quiz3._id, questionText: "Maximum binding energy per nucleon କେଉଁ nucleus ରେ ଥାଏ?", options: ["Hydrogen", "Iron-56", "Uranium", "Helium"], correctAnswer: 1, marks: 1, explanation: "Iron-56 ସବୁଠାରୁ ସ୍ଥିର nucleus।" },
      { quiz: quiz3._id, questionText: "Beta-minus decay ରେ neutron କଣରେ ପରିଣତ ହୁଏ?", options: ["Proton + positron + neutrino", "Proton + electron + antineutrino", "Two protons", "Alpha particle"], correctAnswer: 1, marks: 1, explanation: "β⁻ decay: n → p + e⁻ + ν̄।" },
      { quiz: quiz3._id, questionText: "Total internal reflection କେବେ ହୁଏ?", options: ["Rarer ଠାରୁ denser", "Denser ଠାରୁ rarer medium ରେ critical angle ଠାରୁ ଅଧିକ କୋଣରେ", "Any medium ଠାରୁ vacuum", "Vacuum ଠାରୁ glass"], correctAnswer: 1, marks: 1, explanation: "Critical angle ଠାରୁ ଅଧିକ କୋଣରେ TIR ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Microscope ର resolving power କେବେ ବଢ଼େ?", options: ["Wavelength କମିଲେ", "Wavelength ବଢ଼ିଲେ", "Aperture କମିଲେ", "Focal length ବଢ଼ିଲେ"], correctAnswer: 0, marks: 1, explanation: "ଛୋଟ wavelength ରେ better resolution ମିଳେ।" },
      { quiz: quiz3._id, questionText: "p-n junction diode ର depletion region କାହିଁକି ଗଠିତ ହୁଏ?", options: ["External voltage", "Charge carrier diffusion", "Heating", "Magnetic field"], correctAnswer: 1, marks: 1, explanation: "Electron ଏବଂ hole diffusion ଫଳରେ depletion region ଗଠିତ ହୁଏ।" },
      { quiz: quiz3._id, questionText: "Transistor କାହା ଭାବରେ ବ୍ୟବହୃତ ହୁଏ?", options: ["Only amplifier", "Amplifier ଏବଂ switch", "Only switch", "Only rectifier"], correctAnswer: 1, marks: 1, explanation: "Transistor amplifier ଏବଂ switch ଭାବରେ କାମ କରେ।" },
    ]);

    console.log("✓ Class 12 Science - Physics Odia: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12SciencePhysicsOdia };
