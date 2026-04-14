import { X } from "lucide-react";

const GameDetail = ({
  game,
  setIsOpen,
}: {
  game: {
    id: number;
    title: string;
    status: string;
    img: string;
    developer: string[];
    releaseDate: string;
    genres: string[];
    platforms: string[];
  };
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="flex flex-col text-black dark:text-white">
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <img src={game.img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <button
          className="absolute top-2 right-2 bg-purple-700/60 hover:bg-purple-800/60 dark:bg-gray-700/80 dark:hover:bg-gray-800 text-white p-1 rounded-xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h1 className="text-2xl font-bold text-white">{game.title}</h1>
          <p className="text-sm text-gray-300">
            by {game.developer.map((developer) => developer).join(", ")}
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p>
          <span className="font-semibold">Release date:</span>{" "}
          <span>{game.releaseDate}</span>
        </p>{" "}
        <p>
          <span className="font-semibold">Status:</span> {game.status}
        </p>
        <p className="flex flex-row gap-2">
          <span className="font-semibold">Genres:</span>{" "}
          {game.genres.map((genre) => (
            <span
              className="border border-1 dark:border-orange-300 px-2 rounded-lg dark:text-orange-300
          border-orange-400 text-orange-400
          hover:border-orange-500 hover:text-orange-500"
            >
              {genre}
            </span>
          ))}
        </p>
        <p className="flex flex-wrap gap-2">
          <span className="font-semibold">Platforms:</span>
          {game.platforms.map((platform) => (
            <span
              className="border border-1 dark:border-sky-300 px-2 rounded-lg dark:text-sky-300
           border-sky-400 text-sky-400
          hover:border-sky-600 hover:text-sky-600"
            >
              {platform}
            </span>
          ))}
        </p>
        <div className="flex flex-row gap-2 pt-4">
          <button className="w-full p-2 bg-purple-400 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-800 rounded-lg text-white font-semibold cursor-pointer">
            Completed
          </button>
          <button
            className="w-full font-semibold p-2 border border-violet-500 rounded-lg text-violet-500
          hover:border-violet-700 hover:bg-violet-100  hover:text-violet-700
          dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-300/10 dark:hover:border-violet-300 dark:hover:text-violet-300 cursor-pointer"
          >
            Add to backlog
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameDetail;
