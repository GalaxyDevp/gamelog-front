import { Modal } from "@mantine/core";
import CardImg from "../../components/CardImg";
import { games } from "../../const/games";
import GameDetail from "../games/gameDetail";
import { useState } from "react";

const FavoriteGame = () => {
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
  const favoriteGame = games.filter((game) => game.favorite);

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-semibold text-purple-800 dark:text-white">
          Favorites Games
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-row gap-4 pt-2">
        {favoriteGame.map((game) => (
          <CardImg
            key={game.id}
            className="border border-1 border-violet-200"
            img={game.img}
            onClick={() => {
              setIsOpen(true);
              setSelectedGame(game);
            }}
          >
            <div className="flex flex-col items-center justify-center p-2 h-12">
              <p className="text-sm font-semibold line-clamp-2 text-center">
                {game.title}
              </p>
            </div>
          </CardImg>
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

export default FavoriteGame;
