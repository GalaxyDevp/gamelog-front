import { LibraryBig } from "lucide-react";
import preload from "../../assets/images/p3r.webp";
import CardImg from "../../components/CardImg";

const BacklogGames = () => {
  const backlogGames = [
    {
      id: 1,
      title: "Persona 3 Reload",
      status: "In progress",
      img: preload,
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-2 text-purple-800 dark:text-white">
        <LibraryBig className="w-5 h-5" />
        <p className="font-semibold">Backlog ({backlogGames.length})</p>
      </div>
      <div className="flex flex-wrap gap-4 py-4">
        {backlogGames.map((game) => (
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

export default BacklogGames;
