import CardImg from "../../components/CardImg";
import rip from "../../assets/images/9rip.webp";
import itehari from "../../assets/images/itehari.webp";
import { Trophy } from "lucide-react";

const CompletedGames = () => {
  const completedGames = [
    {
      id: 1,
      title: "9Rip",
      status: "Completed",
      img: rip,
    },
    {
      id: 2,
      title: "Illusion of Itehari",
      status: "Completed",
      img: itehari,
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-2 text-purple-800 dark:text-white">
        <Trophy className="w-5 h-5" />
        <p className="font-semibold">Completed ({completedGames.length})</p>
      </div>
      <div className="flex flex-wrap gap-4 py-4">
        {completedGames.map((game) => (
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

export default CompletedGames;
