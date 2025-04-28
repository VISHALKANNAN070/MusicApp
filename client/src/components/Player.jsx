import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Player = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
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

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) =>
    time ? new Date(time * 1000).toISOString().substr(14, 5) : "00:00";

  if (!song)
    return (
      <div className="fixed bottom-0 w-full bg-[#181818] border-t border-[#232323] py-4 px-8 shadow-inner text-white">
        Select a Song to Play...
      </div>
    );

  return (
    <div className="fixed bottom-0 w-full bg-[#181818] border-t border-[#232323] py-4 px-8 shadow-inner flex flex-col gap-2 z-50">
      <div className="flex items-center gap-6">
        <img
          src={song.cover_m}
          alt={song.title}
          className="w-12 h-12 rounded object-cover"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-lg truncate">{song.title}</h3>
          <p className="text-gray-400 truncate">{song.artist}</p>
        </div>
        <audio
          ref={audioRef}
          src={song.preview}
          onEnded={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="hidden"
        />
        <button
          onClick={handlePlayPause}
          className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-400 transition"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      <div className=" flex items-center text-white gap-4 text-sm">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          step="0.1"
          className="w-full h-1 accent-green-500"
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default Player;
