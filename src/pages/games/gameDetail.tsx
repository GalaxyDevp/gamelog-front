import { X } from "lucide-react";

const GameDetail = ({
  img,
  setIsOpen,
}: {
  img: string;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="flex flex-col text-black dark:text-white">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <button
          className="absolute top-2 right-2 bg-purple-700/60 hover:bg-purple-800/60 dark:bg-gray-700/80 dark:hover:bg-gray-800 text-white p-1 rounded-xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h1 className="text-2xl font-bold text-white">Persona 3 Reload</h1>
          <p className="text-sm text-gray-300">Atlus</p>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p>
          <span className="font-semibold">Release date:</span>{" "}
          <span>Feb 02, 2024</span>
        </p>{" "}
        <p>
          <span className="font-semibold">Status:</span> <span>Playing</span>
        </p>
        <p className="flex flex-row gap-2">
          <span className="font-semibold">Genres:</span>{" "}
          <span
            className="border border-1 dark:border-orange-300 px-2 rounded-lg dark:text-orange-300
          border-orange-400 text-orange-400
          hover:border-orange-500 hover:text-orange-500"
          >
            RPG
          </span>
          <span
            className="border border-1 dark:border-orange-300 px-2 rounded-lg dark:text-orange-300
          border-orange-400 text-orange-400
          hover:border-orange-500 hover:text-orange-500"
          >
            Adventure
          </span>
        </p>
        <p className="flex flex-wrap gap-2">
          <span className="font-semibold">Platforms:</span>{" "}
          <span
            className="border border-1 dark:border-sky-300 px-2 rounded-lg dark:text-sky-300
           border-sky-400 text-sky-400
          hover:border-sky-600 hover:text-sky-600"
          >
            Windows PC
          </span>
          <span className="border border-1 border-sky-300 px-2 rounded-lg text-sky-300 border-sky-400 text-sky-400 hover:border-sky-600 hover:text-sky-600">
            PS5
          </span>
          <span className="border border-1 border-sky-300 px-2 rounded-lg text-sky-300 border-sky-400 text-sky-400 hover:border-sky-600 hover:text-sky-600">
            Xbox Series X/S
          </span>
          <span className="border border-1 border-sky-300 px-2 rounded-lg text-sky-300 border-sky-400 text-sky-400 hover:border-sky-600 hover:text-sky-600">
            Nintendo Switch 2
          </span>
        </p>
        <div className="flex flex-row gap-2">
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
