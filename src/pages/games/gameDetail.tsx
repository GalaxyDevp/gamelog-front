import { X } from "lucide-react";

const GameDetail = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-col text-black dark:text-white">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <button className="absolute top-2 right-2 bg-purple-400/80 hover:bg-purple-400 dark:bg-gray-700/80 dark:hover:bg-gray-800 text-white p-1 rounded-xl">
          <X size={20} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h1 className="text-2xl font-bold text-white">Persona 3 Reload</h1>
          <p className="text-sm text-gray-300">Atlus</p>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-4">
        <p className="flex flex-row gap-2">
          <span className="font-semibold">Genres:</span>{" "}
          <span className="font-semibold border border-2 border-gray-300 px-2 rounded-lg">
            RPG
          </span>
          <span className="font-semibold border border-2 border-gray-300 px-2 rounded-lg">
            Adventure
          </span>
        </p>
        <p className="flex flex-wrap gap-2">
          <span className="font-semibold">Platforms:</span>{" "}
          <span className="font-semibold border border-2 border-sky-200 px-2 rounded-lg">
            Windows PC
          </span>
          <span className="font-semibold border border-2 border-sky-200 px-2 rounded-lg">
            PS5
          </span>
          <span className="font-semibold border border-2 border-sky-200 px-2 rounded-lg">
            Xbox Series X/S
          </span>
          <span className="font-semibold border border-2 border-sky-200 px-2 rounded-lg">
            Nintendo Switch 2
          </span>
        </p>
        <p>
          <span className="font-semibold">Release date:</span>{" "}
          <span className="font-semibold">Feb 02, 2024</span>
        </p>
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span className="font-semibold">Playing</span>
        </p>
      </div>
    </div>
  );
};
export default GameDetail;
