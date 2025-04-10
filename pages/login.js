import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";

export async function login(req, res) {
  const userInfo = req.body.userInfo;
  try {
    const [user] = await userModel.find({ email: userInfo.email });
    // const hash = await bcrypt.hash("ajibola", 11);
    const hashPassword = await bcrypt.compare(userInfo.password, user.password);
    if (hashPassword) {
      res.status(201).send({ token: user.token });
    } else [res.send("no user found")];
  } catch (e) {
    console.log(e);
    res.send("error");
  }
}
