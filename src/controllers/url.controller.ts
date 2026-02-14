import type { Request, Response } from "express";
import * as urlServices from "../services/url.services.js";

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const { original } = req.body;

    if (!original) {
      return res.status(400).json({
        message: "Original URL is required",
      });
    }

    const userId = req.user!.id;

    const url = await urlServices.createShortUrl(userId, original);

    // 🔥 dynamic base URL
    const base = `${req.protocol}://${req.get("host")}`;

    return res.status(201).json({
      shortUrl: `${base}/${url.shortCode}`,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const redirectUrl = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;

    const originalUrl = await urlServices.getOriginalUrl(code);

    if (!originalUrl) {
      return res.status(404).json({
        message: "Short URL not found",
      });
    }

    return res.redirect(originalUrl);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
