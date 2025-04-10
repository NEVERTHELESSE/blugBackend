import mongoose from "mongoose";
import { postSchema } from "../schemas/postSchema.js";

export const postModel =
  mongoose.models.posts || mongoose.model("post", postSchema);
