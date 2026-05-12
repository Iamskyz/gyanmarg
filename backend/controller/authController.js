import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  try {
    const { name, email, password, grade, language, stream } = req.body;

    // Validations
    if (!name || name.trim().length < 2) return res.status(400).json({ message: "Name must be at least 2 characters" });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ message: "Enter a valid email" });
    if (!password || password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters" });
    if (grade && (grade < 6 || grade > 12)) return res.status(400).json({ message: "Grade must be between 6 and 12" });
    if (grade >= 11 && !stream) return res.status(400).json({ message: "Stream is required for Class 11 and 12" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const userStream = grade >= 11 ? stream : null;
    const user = await User.create({ name, email, password: hashed, grade, language, stream: userStream });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      grade: user.grade,
      stream: user.stream,
      language: user.language,
      xp: user.xp,
      level: user.level,
      streak: user.streak,
      badges: user.badges,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    // Update streak
    const now = new Date();
    const lastActive = new Date(user.lastActive);
    const diffDays = Math.floor((now - lastActive) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) user.streak += 1;
    else if (diffDays > 1) user.streak = 1;
    user.lastActive = now;
    await user.save();

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      grade: user.grade,
      stream: user.stream,
      language: user.language,
      xp: user.xp,
      level: user.level,
      streak: user.streak,
      badges: user.badges,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, grade, language, avatar, stream } = req.body;
    const updates = {};

    if (name !== undefined) updates.name = name;
    if (language !== undefined) updates.language = language;
    if (avatar !== undefined) updates.avatar = avatar;
    if (grade !== undefined) {
      updates.grade = grade;
      updates.stream = grade >= 11 ? (stream || null) : null;
    } else if (stream !== undefined) {
      updates.stream = stream;
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { new: true }
    ).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "No account found with this email" });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.json({ message: "Password reset successful. You can now login." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
