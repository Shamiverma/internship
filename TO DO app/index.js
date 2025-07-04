import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";


connectDB();
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);


app.listen(3000, () => {
  console.log("Server is running at port 3000");
});