import { Play } from "lucide-react";
import proyal from "../../assets/images/p5r.webp";
import CardImg from "../../components/CardImg";

const CurrentGames = () => {
  const currentGames = [
    {
      id: 1,
      title: "Persona 5 Royal",
      status: "Completed",
      img: proyal,
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-2 text-purple-800 dark:text-white">
        <Play className="w-5 h-5" />
        <p className="font-semibold">
          Currently Playing ({currentGames.length})
        </p>
      </div>
      <div className="flex flex-wrap gap-4 py-4">
        {currentGames.map((game) => (
          <div className="col-span-6 md:col-span-3">
            <CardImg
              key={game.id}
              className="border border-1 border-violet-200"
              img={game.img}
            >
              <div className="flex flex-col items-center py-2">
                <p className="text-sm font-semibold">{game.title}</p>
              </div>
            </CardImg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentGames;
