import React, { useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";


export default function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [recents, setRecents] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setRecents((prev) => [song, ...prev.filter((s) => s.id !== song.id)].slice(0, 8));
  };

  const handleToggleFavourite = (song) => {
    setFavourites((prev) =>
      prev.find((s) => s.id === song.id)
        ? prev.filter((s) => s.id !== song.id)
        : [song, ...prev]
    );
  };

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://musicapp-3n2d.onrender.com/api/songs/search", {
        params: { q: query }
      });
      setSongs(data.data);
    } catch {
      alert("Error fetching songs from backend.");
    }
    setLoading(false);
  };



  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#121212] to-[#181818]">
      <Sidebar
        recents={recents}
        favourites={favourites}
        onPlaySong={handlePlaySong}
        setSongs={setSongs}
      />
      <main className="flex-1 p-8 overflow-y-auto">
        <Home
          songs={songs}
          onPlaySong={handlePlaySong}
          onToggleFavourite={handleToggleFavourite}
          favourites={favourites}
          onSearch={handleSearch}
        />
        {loading && <div className="text-white mt-4">Loading songs...</div>}
      </main>
      <Player song={currentSong} />
    </div>
  );
}
