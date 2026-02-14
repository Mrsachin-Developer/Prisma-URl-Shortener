import express from "express";
import { createShortUrl, redirectUrl } from "../controllers/url.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// create short URL
router.post("/", authMiddleware, createShortUrl);

// public redirect
router.get("/:code", redirectUrl);

export default router;
