import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const router = express.Router();

dotenv.config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

router.get("/search", async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Missing search query." });

  try {
    const { data } = await axios.get(
      "https://deezerdevs-deezer.p.rapidapi.com/search",
      {
        params: { q },
        headers: {
          "X-RapidAPI-Key": process.env.SPOTIFY_DEEZER_API,
          "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
        },
      }
    );

    const tracks = data.data
      .filter((item) => item.preview)
      .map(({ id, title, artist, preview, album }) => ({
        id,
        title,
        artist: artist.name,
        preview,
        cover_m: album.cover_medium,
        cover_s: album.cover_small,
      }));

    res.json({ data: tracks });
  } catch (err) {
    res.status(500).json({
      error: "Unable to fetch songs from Deezer.",
      details: err.message,
    });
  }
});

export default router;
