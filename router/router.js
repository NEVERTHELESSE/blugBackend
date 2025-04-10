import express from "express";
import { upload } from "../components/imagekit.js";
import { test } from "../pages/test.js";

export const Router = express.Router();

Router.post("/test", upload.single("file"), test);
