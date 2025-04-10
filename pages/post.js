import { postModel } from "../models/postModel.js";

export async function posts(req, res) {
  const allPosts = await postModel.find();
  res.send(allPosts);
}
