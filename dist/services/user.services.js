import bcrypt from "bcrypt";
import client from "../db.js";
import { signToken } from "../utils/jwt.js";
export const findUserByEmail = async (email) => {
    return client.user.findUnique({
        where: { email },
    });
};
export const createUser = async (username, email, password) => {
    const hashed = await bcrypt.hash(password, 10);
    return client.user.create({
        data: {
            username,
            email,
            password: hashed,
        },
        select: {
            id: true,
            username: true,
            email: true,
        },
    });
};
export const validateUserPassword = async (email, password) => {
    const user = await findUserByEmail(email);
    if (!user)
        return null;
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        return null;
    return user;
};
export const loginUser = async (email, password) => {
    const user = await validateUserPassword(email, password);
    if (!user) {
        throw new Error("Invalid credentials");
    }
    return signToken(user.id, user.email);
};
