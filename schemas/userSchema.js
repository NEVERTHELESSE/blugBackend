import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: String,
    token: String,
    profilePics: {
      type: String,
      default: "profile.png",
    },
  },
  {
    timestamps: true,
  }
);
