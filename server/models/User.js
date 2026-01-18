import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    classGrade: {
      type: String,
      required: true,
    },
    preferredLanguage: {
      type: String,
      enum: ["en", "or"],
      default: "en",
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    role: {
  type: String,
  enum: ["student", "admin"],
  default: "student",
},

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
