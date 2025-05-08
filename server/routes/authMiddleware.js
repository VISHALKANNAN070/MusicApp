import jwt from "jsonwebtoken";
import User from "../database/User.js";

const JWT_SECRET = process.env.JWT_SECRET || "key";

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(400).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    req.user = user;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
