import express from "express";
import userRouter from "./routes/user.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Warehouse Management System API",
  });
});

app.use("/api", userRouter);

export default app;
