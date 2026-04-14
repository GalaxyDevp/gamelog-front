import { Gamepad2, LibraryBig, Trophy } from "lucide-react";
import CardImg from "../components/CardImg";
import CardStatus from "../components/CardStatus";
import GameDetail from "./games/gameDetail";
import { useState } from "react";
import { Modal } from "@mantine/core";
import { games } from "../const/games";

const Dashboard = () => {
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
  const itemGames = [
    {
      id: 1,
      title: "Playing",
      number: games.filter((game) => game.status === "Playing").length,
      border: "border-pink-200 dark:border-pink-500",
      color: "bg-pink-100 text-fuchsia-900 dark:bg-pink-500 dark:text-white",
      icon: <Gamepad2 />,
    },
    {
      id: 2,
      title: "Completed",
      number: games.filter((game) => game.status === "Completed").length,
      border: "border-green-200 dark:border-green-500",
      color: "bg-green-200 text-green-900 dark:bg-green-500 dark:text-white",
      icon: <Trophy />,
    },
    {
      id: 3,
      title: "Backlog",
      number: games.filter((game) => game.status === "Backlog").length,
      border: "border-sky-200 dark:border-sky-500",
      color: "bg-sky-100 text-sky-900 dark:bg-sky-500 dark:text-white",
      icon: <LibraryBig />,
    },
  ];

  const recentGames = games
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 4);
  return (
    <div className="py-2 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-2">Welcome back, Kaelix!</h1>
      <div className="flex flex-row gap-4 py-4">
        {itemGames.map((item) => (
          <div className="">
            <CardStatus item={item} />
          </div>
        ))}
      </div>
      <div className="py-4">
        <h1 className="text-xl font-bold mb-2">Recent played games</h1>
        <div className="flex flex-wrap gap-4 py-4 ">
          {recentGames.map((game) => (
            <>
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
            </>
          ))}
        </div>
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

export default Dashboard;
