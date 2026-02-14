import Jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET;
if (!SECRET) {
    throw new Error("JWT_SECRET is not defined");
}
export const signToken = (id, email) => {
    return Jwt.sign({ id, email }, SECRET, {
        expiresIn: "7d",
    });
};
export const verifyToken = (token) => {
    return Jwt.verify(token, SECRET);
};
