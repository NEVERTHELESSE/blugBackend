import express from "express";
import { createAccount } from "../pages/createAccount.js";
import { login } from "../pages/login.js";
import { loginToken } from "../pages/loginToken.js";

export const UserRouter = express.Router();

UserRouter.post("/createAccount", createAccount);
UserRouter.get("/userToken/:token", loginToken);
UserRouter.post("/login", login);
