import type { Request, Response } from "express";

import * as userServices from "../services/user.services.js";
import { signToken } from "../utils/jwt.js";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await userServices.createUser(username, email, password);
    return res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await userServices.loginUser(email, password);

    res.json({ token });
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};
