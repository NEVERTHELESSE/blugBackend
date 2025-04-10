import { config } from "dotenv";
import nodemailer from "nodemailer";
config();

const GMAIL_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const GMAIL_USER = process.env.GMAIL_USER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
});

export async function sendEmail(userEmail, html) {
  const mailOptions = {
    from: {
      name: "blugs",
      address: "neverthelesse21@gmail.com",
    },
    to: userEmail,
    subject: "hello",
    text: "hi mom",
    html,
  };
  try {
    await transporter.sendMail(mailOptions);
    return "okay";
  } catch (e) {
    console.log(e);
    res.send("error");
  }
}
