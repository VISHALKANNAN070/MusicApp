import express from "express";
import User from "../database/User.js";

const router = express.Router();

//add favs ==================================================
router.post("/add", async (req, res) => {
  const { songId } = req.body;
  const userId = req.user.id;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  if (!user.favourites.includes(songId)) {
    user.favourites.push(songId);
    await user.save();
  }
  res.json({ message: "Song added to favourites" });
});

//remove favs ==============================================

router.post("/remove", async (req, res) => {
  const { songId } = req.body;
  const userId = req.user.id;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.favorites = user.favorites.filter((id) => id.toString() !== songId);
  await user.save();

  res.json({ message: "Song removed from favorites" });
});

//get all favs=============================================
router.get("/", async (req, res) => {
  const userId = req.user.id;

  const user = await User.findById(userId).populate("favorites");
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user.favorites);
});

export default router;
