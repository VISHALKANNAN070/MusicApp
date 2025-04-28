import { FaHome } from "react-icons/fa";
const Sidebar = ({ recents, favourites, onPlaySong, setSongs }) => {
  return (
    <aside className="w-64 bg-[#161616] text-white p-6 flex flex-col justify-between min-h-screen">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold tracking-wide ">Recents </h2>
          <FaHome onClick={(e)=>setSongs([])} />
        </div>
        <ul className="mb-8 space-y-2">
          {recents.length === 0 && (
            <li className="text-gray-400">No recent plays</li>
          )}
          {recents.map((song) => (
            <li key={song.id}>
              <button
                onClick={() => onPlaySong(song)}
                className="w-full text-left hover:text-green-400 truncate flex items-center gap-2"
              >
                {song.cover_s && (
                  <img
                    src={song.cover_s}
                    alt={song.title}
                    className="w-8 h-8 rounded object-cover"
                    style={{ display: "inline-block" }}
                  />
                )}
                {song.title}
              </button>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-bold mb-4 tracking-wide">Favourites</h2>
        <ul className="space-y-2">
          {favourites.length === 0 && (
            <li className="text-gray-400">No favourites yet</li>
          )}
          {favourites.map((song) => (
            <li key={song.id}>
              <button
                onClick={() => onPlaySong(song)}
                className="w-full text-left hover:text-green-400 truncate flex items-center gap-2"
              >
                {song.cover_s && (
                  <img
                    src={song.cover_s}
                    alt={song.title}
                    className="w-8 h-8 rounded object-cover"
                    style={{ display: "inline-block" }}
                  />
                )}
                {song.title[0]!=='(' ? song.title.split('(')[0].trim() : song.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-gray-500 text-xs mt-8">Spotify UI &copy; 2024</div>
    </aside>
  );
};

export default Sidebar;
