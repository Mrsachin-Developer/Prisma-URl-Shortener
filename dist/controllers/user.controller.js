import * as userServices from "../services/user.services.js";
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }
        const user = await userServices.createUser(username, email, password);
        return res.status(201).json({
            message: "User created",
            user,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await userServices.loginUser(email, password);
        res.json({ token });
    }
    catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
};
