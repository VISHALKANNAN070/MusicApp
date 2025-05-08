import React, { useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
// import Register from "./components/Register";
// import Login from "./components/Login";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [recents, setRecents] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  // const [showLogin, setShowLogin] = useState(true);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setRecents((prev) =>
      [song, ...prev.filter((s) => s.id !== song.id)].slice(0, 8)
    );
  };

  const handleToggleFavourite = (song) => {
    setFavourites((prev) =>
      prev.find((s) => s.id === song.id)
        ? prev.filter((s) => s.id !== song.id)
        : [song, ...prev]
    );
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://musicapp-3n2d.onrender.com/api/songs/search",
        {
          params: { q: query },
        }
      );
      setSongs(data.data);
    } catch {
      alert("Error fetching songs from backend.");
    } finally {
      setLoading(false);
    }
  };

  // const handleToggleLoginRegister = () => {
  //   setShowLogin(!showLogin);
  // };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#121212] to-[#181818]">
      {/* {user ? ( */}
        <>
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
              loading={loading}
            />
          </main>
          <Player song={currentSong} />
        </>
      {/* ) : (
        <div className="flex items-center justify-center w-full h-full">
          {showLogin ? (
            <Login
              setUser={setUser}
              handleToggleLoginRegister={handleToggleLoginRegister}
            />
          ) : (
            <Register setUser={setUser} />
          )}
        </div>
      )} */}
    </div>
  );
};

export default App;
