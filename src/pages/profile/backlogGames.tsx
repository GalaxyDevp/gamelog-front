import { LibraryBig } from "lucide-react";
import CardImg from "../../components/CardImg";
import { Modal } from "@mantine/core";
import GameDetail from "../games/gameDetail";
import { useState } from "react";
import { games } from "../../const/games";

const BacklogGames = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<{
    id: number;
    title: string;
    status: string;
    img: string;
    developer: string[];
    releaseDate: string;
    genres: string[];
    platforms: string[];
  } | null>(null);
  const backlogGames = games.filter((game) => game.status === "Backlog");
  return (
    <div>
      <div className="flex items-center gap-2 text-purple-800 dark:text-white">
        <LibraryBig className="w-5 h-5" />
        <p className="font-semibold">Backlog ({backlogGames.length})</p>
      </div>
      <div className="flex overflow-x-auto scroll-smooth gap-4 py-4">
        {backlogGames.map((game) => (
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
        {selectedGame && (
          <GameDetail game={selectedGame} setIsOpen={setIsOpen} />
        )}
      </Modal>
    </div>
  );
};

export default BacklogGames;
