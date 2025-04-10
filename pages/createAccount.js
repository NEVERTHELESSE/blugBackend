import bcrypt from "bcrypt";
import { userModel } from "../models/userModel.js";
import { sendEmail } from "../components/email.js";
import { createAccountHtml } from "../html/createAccountHtml.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const html = createAccountHtml;
const jwtSecretKey = process.env.JWT_SECRET_KEY;
export async function createAccount(req, res) {
  try {
    const userInfo = req.body.userInfo;
    const hashPassword = await bcrypt.hash(userInfo.password, 10);
    const token = jwt.sign(
      {
        username: userInfo.username,
        email: userInfo.email,
        password: hashPassword,
      },
      jwtSecretKey
    );
    const userHashInfo = {
      username: userInfo.username,
      email: userInfo.email,
      password: hashPassword,
      token,
    };
    const saveUser = await userModel.create(userHashInfo);
    sendEmail(userInfo.email, html);
    res.send(saveUser);
  } catch (e) {
    if (e.code == 11000) {
      res.send("duplicate");
    } else {
      res.send(e);
    }
    console.log(e);
  }
}
