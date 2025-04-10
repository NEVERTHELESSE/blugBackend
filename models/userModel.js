import mongoose from "mongoose";
import { userSchema } from "../schemas/userSchema.js";

export const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);
