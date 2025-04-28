import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const Home = ({
  songs,
  onPlaySong,
  onToggleFavourite,
  favourites,
  onSearch,
  loading,
}) => {
  const [searchSong, setSearchSong] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchSong.trim()) onSearch(searchSong);
    else alert("Search a Song");
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="mb-8 flex">
        <input
          type="text"
          value={searchSong}
          onChange={(e) => setSearchSong(e.target.value)}
          placeholder="Search for a song or artist..."
          className="flex-1 px-4 py-2 rounded-l bg-[#232323] text-white border-0 focus:ring-2 focus:ring-green-500"
          disabled={loading}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white font-bold rounded-r hover:bg-green-400 transition"
          disabled={loading}
        >
          Search
        </button>
      </form>
    {loading ? (<div className="text-[#646464] mt-4 text-4xl flex justify-center">Loading songs...</div>) : (<div>
      <h1 className="text-2xl font-bold text-white mb-8">Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <div
            onClick={() => onPlaySong(song)}
            key={song.id}
            className="bg-[#232323] rounded-lg shadow-md flex items-center p-4 transition"
          >
            <img
              src={song.cover_m}
              alt={song.title}
              className="w-16 h-16 rounded shadow-md object-cover mr-4"
            />
            <div className="flex-1">
              <h2 className="text-white text-lg font-semibold truncate">
                {song.title}
              </h2>
              <p className="text-gray-400 truncate">{song.artist}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavourite(song);
                  }}

                  className={`text-sm px-3 py-1 rounded font-bold focus:outline-none flex items-center ${
                    favourites.find((s) => s.id === song.id)
                      ? "bg-[#232323]"
                      : "bg-[#232323]"
                  }`}
                  title="Toggle favourite"
                >
                  {favourites.find((s) => s.id === song.id) ? (
                    <FaHeart className="text-pink-500" />
                  ) : (
                    <FaHeart className="text-gray-200" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {songs.length === 0 && (
        <div className="mt-10 text-gray-400 text-center">
          Search for songs to begin!
        </div>
      )}
          </div>)}
    </section>
  );
};

export default Home;
