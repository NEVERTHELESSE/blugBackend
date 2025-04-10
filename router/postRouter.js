import express from "express";
import { newPost } from "../pages/newPost.js";
import { posts } from "../pages/post.js";
import { singlePost } from "../pages/singlePost.js";
import { addComment } from "../pages/addComment.js";
import { trendingPost } from "../pages/trendingPost.js";

export const PostRouter = express.Router();

PostRouter.get("/postId/:id", singlePost);

PostRouter.post("/posts", posts);
PostRouter.post("/trendingPost", trendingPost);
PostRouter.post("/data", posts);
PostRouter.post("/newPost", newPost);
PostRouter.post("/addComment/:id", addComment);
