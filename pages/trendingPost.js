import { postModel } from "../models/postModel.js";

export async function trendingPost(_, res) {
  const allPosts = await postModel.find().limit(1);
  res.send(allPosts[0]);
}
