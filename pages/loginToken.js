import { userModel } from "../models/userModel.js";

export async function loginToken(req, res) {
  const userToken = req.params.token;

  try {
    const user = await userModel
      .find({ token: userToken })
      .select(["username", "profilePics"]);
    res.status(201).send(user);
  } catch (e) {
    console.log(e);
    res.send("error");
  }
}
