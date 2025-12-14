import { getUserById, getUsers } from "../controllers/user.controller";

import express from "express";

const userRouter = express.Router();

userRouter.get("/users", getUsers);

userRouter.get("/user/", getUserById);

export default userRouter;
