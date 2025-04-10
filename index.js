import express from "express";
import cors from "cors";
import { Router } from "./router/router.js";
import { UserRouter } from "./router/userRouter.js";
import { connectDb } from "./database/connectDb.js";
import { PostRouter } from "./router/postRouter.js";

const app = express();
const port = 9000;
console.clear();
connectDb();

app.use(cors());
app.use(express.json());

app.use("/api", Router);
app.use("/api/user", UserRouter);
app.use("/api/post", PostRouter);

app.listen(port, () => console.log(`server running on port ${port}...`));
