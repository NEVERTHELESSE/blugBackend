import { postModel } from "../models/postModel.js";

export async function singlePost(req, res) {
  const id = req.params.id;
  try {
    const post = await postModel.findById(id);
    res.send(post);
  } catch (e) {
    res.send("error");
    console.log(e);
  }
}
