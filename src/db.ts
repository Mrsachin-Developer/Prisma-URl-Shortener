import "dotenv/config";
// Point exactly to the generated index inside your custom folder
import { PrismaClient } from "./generated/prisma/index.js";

const client = new PrismaClient();

export default client;
