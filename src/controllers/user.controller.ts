import client from "../db.js";
import { Request, Response } from "express";

import * as userService from "../services/user.services.js";
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }
    const user = await userService.validateUserPassword(email, password);

    if (!user) {
      return res.status(400).json({
        message: "Invalid credential",
      });
    }
  } catch (error) {}
};
