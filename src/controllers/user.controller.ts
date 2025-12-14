import { NextFunction, Request, Response } from "express";

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .json({ status: "success", message: "Get all users", data: [] });
};

const getUserById = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.query;

  if (!id) {
    return res
      .status(400)
      .json({ status: "error", message: "User ID is required" });
  }

  res
    .status(200)
    .json({ status: "success", message: `Get user with ID: ${id}`, data: {} });
};

export { getUsers, getUserById };
