import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../database/User.js";

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "key";

// register auth=================================================================

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: "Username already exists" });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = new User({ username, password: hashedPass });
  await newUser.save();

  const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1d" });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    })
    .json({ message: "User successfully registered", token });
});

// login auth=================================================================

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    })
    .json({ message: "Login successful", token });
});

//logout ===================================================================

router.post("/logout", (_, res) => {
  res.clearCookie("token").json({ message: "Logged Out Successfully" });
});

export default router;
