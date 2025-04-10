import { postModel } from "../models/postModel.js";

export async function newPost(req, res) {
  const userPost = req.body;
  console.log(userPost);
  try {
    const saveData = await postModel.create(userPost);
    res.send(saveData);
  } catch (e) {
    res.send("error");
    console.log(e);
  }
}
