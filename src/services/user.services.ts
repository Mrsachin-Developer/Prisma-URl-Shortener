import bcrypt from "bcrypt";
import client from "../db.js";

export const findUserByEmail = async (email: string) => {
  return client.user.findUnique({
    where: { email },
  });
};
export const createUser = async (
  username: string,
  email: string,
  password: string,
) => {
  const hashed = await bcrypt.hash(password, 10);

  const user = await client.user.create({
    data: {
      username,
      email,
      password: hashed,
    },
  });

  return user;
};

export const validateUserPassword = async (email: string, password: string) => {
  const user = await findUserByEmail(email);

  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return null;

  return user;
};
