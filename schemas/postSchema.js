import mongoose from "mongoose";
export const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
    },
    author: {
      id: mongoose.SchemaTypes.ObjectId,
      username: String,
      profilePics: String,
      // require: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    shares: {
      type: Array,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
