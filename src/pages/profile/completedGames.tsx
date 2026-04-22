import CardImg from "../../components/CardImg";
import { Trophy } from "lucide-react";
import { useState } from "react";
import { games } from "../../const/games";
import { Modal } from "@mantine/core";
import GameDetail from "../games/gameDetail";

const CompletedGames = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectdGame, setSelectedGame] = useState<{
    id: number;
    title: string;
    status: string;
    img: string;
    developer: string[];
    releaseDate: string;
    genres: string[];
    platforms: string[];
  } | null>(null);

  const completedGames = games.filter((game) => game.status === "Completed");

  return (
    <div>
      <div className="flex items-center gap-2 text-purple-800 dark:text-white">
        <Trophy className="w-5 h-5" />
        <p className="font-semibold">Completed ({completedGames.length})</p>
      </div>
      <div className="flex overflow-x-auto scroll-smooth gap-4 py-4">
        {completedGames.map((game) => (
          <div className="col-span-6 md:col-span-3">
            <CardImg
              key={game.id}
              className="border border-1 border-violet-200"
              img={game.img}
              onClick={() => {
                setIsOpen(true);
                setSelectedGame(game);
              }}
            >
              <div className="flex flex-col items-center justify-center p-2 h-14">
                <p className="text-sm font-semibold line-clamp-2 text-center">
                  {game.title}
                </p>
              </div>
            </CardImg>
          </div>
        ))}
      </div>
      <Modal
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        withCloseButton={false}
      >
        {selectdGame && <GameDetail game={selectdGame} setIsOpen={setIsOpen} />}
      </Modal>
    </div>
  );
};

export default CompletedGames;
