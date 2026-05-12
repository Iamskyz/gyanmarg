import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "../../../models/Quiz.js";
import Question from "../../../models/Question.js";
import User from "../../../models/User.js";

dotenv.config();

const seedClass12SciencePhysics = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    const adminId = admin?._id || null;

    const quiz1 = await Quiz.create({
      title: "Electrostatics and Current Electricity",
      subject: "Physics",
      category: "Electrostatics",
      chapter: "Electric Charges and Fields",
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
      { quiz: quiz1._id, questionText: "Coulomb's law is analogous to:", options: ["Ohm's law", "Newton's law of gravitation", "Faraday's law", "Ampere's law"], correctAnswer: 1, marks: 1, explanation: "Both follow inverse square law and involve a product of two quantities (charges/masses)." },
      { quiz: quiz1._id, questionText: "The SI unit of electric field intensity is:", options: ["Volt", "Newton per Coulomb", "Coulomb per meter", "Joule"], correctAnswer: 1, marks: 1, explanation: "Electric field intensity is measured in N/C or equivalently V/m." },
      { quiz: quiz1._id, questionText: "Electric flux through a closed surface enclosing a charge q is:", options: ["q/ε₀²", "q/ε₀", "qε₀", "q²/ε₀"], correctAnswer: 1, marks: 1, explanation: "By Gauss's law, total electric flux through a closed surface = q/ε₀." },
      { quiz: quiz1._id, questionText: "The capacitance of a parallel plate capacitor increases with:", options: ["Increase in distance between plates", "Increase in area of plates", "Decrease in dielectric constant", "Decrease in area"], correctAnswer: 1, marks: 1, explanation: "C = ε₀εᵣA/d, so capacitance increases with area." },
      { quiz: quiz1._id, questionText: "In a series combination of capacitors, which quantity remains same?", options: ["Voltage", "Charge", "Capacitance", "Energy"], correctAnswer: 1, marks: 1, explanation: "In series, the same charge flows through each capacitor." },
      { quiz: quiz1._id, questionText: "Drift velocity of electrons is proportional to:", options: ["Square of electric field", "Electric field", "Inverse of electric field", "Square root of field"], correctAnswer: 1, marks: 1, explanation: "Drift velocity vd = eEτ/m, directly proportional to E." },
      { quiz: quiz1._id, questionText: "The resistance of a conductor depends on:", options: ["Current only", "Length, area, and resistivity", "Voltage only", "Temperature only"], correctAnswer: 1, marks: 1, explanation: "R = ρL/A, depends on resistivity, length, and cross-sectional area." },
      { quiz: quiz1._id, questionText: "Kirchhoff's junction rule is based on conservation of:", options: ["Energy", "Charge", "Momentum", "Mass"], correctAnswer: 1, marks: 1, explanation: "Junction rule states total current entering = total current leaving (charge conservation)." },
      { quiz: quiz1._id, questionText: "The Wheatstone bridge is used to measure:", options: ["Current", "Unknown resistance", "EMF", "Capacitance"], correctAnswer: 1, marks: 1, explanation: "Wheatstone bridge measures unknown resistance when the bridge is balanced." },
      { quiz: quiz1._id, questionText: "Internal resistance of a cell can be determined using:", options: ["Ammeter only", "Potentiometer", "Voltmeter only", "Galvanometer only"], correctAnswer: 1, marks: 1, explanation: "Potentiometer can accurately measure internal resistance without drawing current." },
    ]);

    const quiz2 = await Quiz.create({
      title: "Magnetism and Electromagnetic Induction",
      subject: "Physics",
      category: "Magnetism",
      chapter: "Moving Charges and Magnetism",
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
      { quiz: quiz2._id, questionText: "The force on a current-carrying conductor in a magnetic field is given by:", options: ["F = qE", "F = BIL sinθ", "F = mv²/r", "F = kq₁q₂/r²"], correctAnswer: 1, marks: 1, explanation: "Force on a conductor: F = BIL sinθ where θ is angle between I and B." },
      { quiz: quiz2._id, questionText: "A moving coil galvanometer works on the principle of:", options: ["Electromagnetic induction", "Torque on a current loop in magnetic field", "Electrostatics", "Thermoelectricity"], correctAnswer: 1, marks: 1, explanation: "MCG works on torque experienced by a current-carrying coil in a magnetic field." },
      { quiz: quiz2._id, questionText: "Biot-Savart law gives the magnetic field due to:", options: ["A magnet", "A current element", "A stationary charge", "A capacitor"], correctAnswer: 1, marks: 1, explanation: "Biot-Savart law calculates magnetic field produced by a small current element." },
      { quiz: quiz2._id, questionText: "Faraday's law of electromagnetic induction states that EMF is proportional to:", options: ["Magnetic flux", "Rate of change of magnetic flux", "Current", "Resistance"], correctAnswer: 1, marks: 1, explanation: "Induced EMF = -dΦ/dt (rate of change of magnetic flux)." },
      { quiz: quiz2._id, questionText: "Lenz's law is consistent with the law of conservation of:", options: ["Charge", "Energy", "Momentum", "Mass"], correctAnswer: 1, marks: 1, explanation: "Lenz's law ensures induced current opposes the change, conserving energy." },
      { quiz: quiz2._id, questionText: "Self-inductance of a solenoid depends on:", options: ["Current through it", "Number of turns, area, and length", "Resistance", "Applied voltage"], correctAnswer: 1, marks: 1, explanation: "L = μ₀n²Al, depends on turns, area, and length." },
      { quiz: quiz2._id, questionText: "In an AC circuit with only inductance, current:", options: ["Leads voltage by 90°", "Lags voltage by 90°", "Is in phase with voltage", "Leads by 45°"], correctAnswer: 1, marks: 1, explanation: "In pure inductive circuit, current lags voltage by π/2 (90°)." },
      { quiz: quiz2._id, questionText: "At resonance in an LCR circuit:", options: ["Impedance is maximum", "Impedance is minimum (equals R)", "Current is minimum", "Power factor is zero"], correctAnswer: 1, marks: 1, explanation: "At resonance, XL = XC, so impedance Z = R (minimum), current is maximum." },
      { quiz: quiz2._id, questionText: "A transformer works on the principle of:", options: ["Self-induction", "Mutual induction", "Electrostatics", "Thermionic emission"], correctAnswer: 1, marks: 1, explanation: "Transformers use mutual induction between primary and secondary coils." },
      { quiz: quiz2._id, questionText: "The quality factor (Q) of an LCR circuit represents:", options: ["Power loss", "Sharpness of resonance", "Total impedance", "Phase angle"], correctAnswer: 1, marks: 1, explanation: "Q factor indicates how sharp/narrow the resonance peak is." },
    ]);

    const quiz3 = await Quiz.create({
      title: "Optics and Modern Physics",
      subject: "Physics",
      category: "Optics",
      chapter: "Wave Optics and Dual Nature",
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
      { quiz: quiz3._id, questionText: "Young's double slit experiment demonstrates:", options: ["Particle nature of light", "Wave nature of light (interference)", "Photoelectric effect", "Compton effect"], correctAnswer: 1, marks: 1, explanation: "Young's experiment shows interference pattern, proving wave nature of light." },
      { quiz: quiz3._id, questionText: "The photoelectric effect proves:", options: ["Wave nature of light", "Particle (quantum) nature of light", "Dual nature of matter", "Diffraction"], correctAnswer: 1, marks: 1, explanation: "Photoelectric effect can only be explained by particle (photon) theory of light." },
      { quiz: quiz3._id, questionText: "de Broglie wavelength is given by:", options: ["λ = h/E", "λ = h/p", "λ = p/h", "λ = hc/p"], correctAnswer: 1, marks: 1, explanation: "de Broglie wavelength λ = h/p = h/(mv) for matter waves." },
      { quiz: quiz3._id, questionText: "In Bohr's model, the radius of nth orbit is proportional to:", options: ["n", "n²", "1/n", "1/n²"], correctAnswer: 1, marks: 1, explanation: "Bohr radius rₙ = r₁ × n², proportional to n²." },
      { quiz: quiz3._id, questionText: "Nuclear binding energy per nucleon is maximum for:", options: ["Hydrogen", "Iron (Fe-56)", "Uranium", "Helium"], correctAnswer: 1, marks: 1, explanation: "Iron-56 has the highest binding energy per nucleon (~8.8 MeV), making it most stable." },
      { quiz: quiz3._id, questionText: "In beta-minus decay, a neutron converts to:", options: ["Proton + positron + neutrino", "Proton + electron + antineutrino", "Two protons", "Alpha particle"], correctAnswer: 1, marks: 1, explanation: "β⁻ decay: n → p + e⁻ + ν̄ (antineutrino)." },
      { quiz: quiz3._id, questionText: "Total internal reflection occurs when light travels from:", options: ["Rarer to denser medium", "Denser to rarer medium at angle > critical angle", "Any medium to vacuum", "Vacuum to glass"], correctAnswer: 1, marks: 1, explanation: "TIR occurs when light goes from denser to rarer medium at angle exceeding critical angle." },
      { quiz: quiz3._id, questionText: "The resolving power of a microscope increases with:", options: ["Decrease in wavelength", "Increase in wavelength", "Decrease in aperture", "Increase in focal length"], correctAnswer: 0, marks: 1, explanation: "Resolving power ∝ 1/λ, so shorter wavelength gives better resolution." },
      { quiz: quiz3._id, questionText: "In a p-n junction diode, the depletion region is formed due to:", options: ["External voltage", "Diffusion of charge carriers across junction", "Heating", "Magnetic field"], correctAnswer: 1, marks: 1, explanation: "Depletion region forms due to diffusion of electrons and holes across the junction." },
      { quiz: quiz3._id, questionText: "A transistor can be used as:", options: ["Only amplifier", "Amplifier and switch", "Only switch", "Only rectifier"], correctAnswer: 1, marks: 1, explanation: "Transistors function as both amplifiers (active region) and switches (saturation/cutoff)." },
    ]);

    console.log("✓ Class 12 Science - Physics: 3 quizzes, 30 questions created");
    return { quizzes: 3, questions: 30 };
  } catch (error) {
    console.error("Failed:", error.message);
    return { quizzes: 0, questions: 0 };
  }
};

export { seedClass12SciencePhysics };
