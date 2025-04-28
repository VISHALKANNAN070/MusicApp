import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Player = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [song]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  if (!song)
    return (
      <div className="fixed bottom-0 w-full bg-[#181818] border-t border-[#232323] py-4 px-8 shadow-inner flex items-center gap-6 z-50">
        Select a Song to Play...{" "}
      </div>
    );
  return (
    <div className="fixed bottom-0 w-full bg-[#181818] border-t border-[#232323] py-4 px-8 shadow-inner flex items-center gap-6 z-50">
      <img
        src={song.cover_m}
        alt={song.title}
        className="w-12 h-12 rounded object-cover bg-[#242424]"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-white text-lg truncate">{song.title}</h3>
        <p className="text-gray-400 truncate">{song.artist}</p>
      </div>
      <audio
        ref={audioRef}
        src={song.preview}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
      <button
        onClick={handlePlayPause}
        className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-400 transition"
      >
        {isPlaying ? (
         <FaPause/>
        ) : (
        <FaPlay/>
        )}
      </button>
    </div>
  );
};

export default Player;
