import mongoose from "mongoose";
import { config } from "dotenv";

config();

const MONGODB_URL = process.env.MONGODB_URL;
export async function connectDb() {
  try {
    await mongoose
      .connect(MONGODB_URL)
      .then(() => console.log("database connected successfully..."));
  } catch (e) {
    console.log(e);
  }
}
