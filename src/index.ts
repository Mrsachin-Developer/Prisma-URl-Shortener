import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import urlRouter from "./routes/url.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/", urlRouter);
app.use("/api/v1/", userRouter);
app.use("/api/v1/url", urlRouter);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
