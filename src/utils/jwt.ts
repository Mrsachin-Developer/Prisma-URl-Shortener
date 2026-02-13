import Jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export const signToken = (id: string, email: string) => {
  return Jwt.sign({ id, email }, SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  return Jwt.verify(token, SECRET);
};
