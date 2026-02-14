import { nanoid } from "nanoid";
import client from "../db.js";

export const createShortUrl = async (userId: string, original: string) => {
  const shortCode = nanoid(7);

  const url = await client.url.create({
    data: {
      original,
      shortCode,
      userId,
    },
  });

  return url;
};

export const getOriginalUrl = async (code: string) => {
  const url = await client.url.findUnique({
    where: { shortCode: code },
  });

  if (!url) return null;

  // increment clicks atomically
  await client.url.update({
    where: { id: url.id },
    data: {
      clicks: {
        increment: 1,
      },
    },
  });

  return url.original;
};
