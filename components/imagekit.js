import ImageKit from "imagekit";
import multer from "multer";
import { config } from "dotenv";
config();

const publicKey = process.env.IMAGE_KIT_PUBLICKEY;
const privateKey = process.env.IMAGE_KIT_PRIVATEKEY;
const urlEndpoint = process.env.IMAGE_KIT_URLENDPOINT;

export const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});

const storage = multer.memoryStorage(); // Store files in memory
export const upload = multer({ storage });
