import { Gamepad2, LibraryBig, Trophy } from "lucide-react";
import rip from "../assets/images/9rip.webp";
import itehari from "../assets/images/itehari.webp";
import preload from "../assets/images/p3r.webp";
import proyal from "../assets/images/p5r.webp";
import CardImg from "../components/CardImg";
import CardStatus from "../components/CardStatus";
import ModalCustom from "../components/Modal";
import GameDetail from "./games/gameDetail";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemGames = [
    {
      id: 1,
      title: "Playing",
      number: 2,
      border: "border-pink-200 dark:border-pink-500",
      color: "bg-pink-100 text-fuchsia-900 dark:bg-pink-500 dark:text-white",
      icon: <Gamepad2 />,
    },
    {
      id: 2,
      title: "Completed",
      number: 2,
      border: "border-green-200 dark:border-green-500",
      color: "bg-green-200 text-green-900 dark:bg-green-500 dark:text-white",
      icon: <Trophy />,
    },
    {
      id: 3,
      title: "Backlog",
      number: 2,
      border: "border-sky-200 dark:border-sky-500",
      color: "bg-sky-100 text-sky-900 dark:bg-sky-500 dark:text-white",
      icon: <LibraryBig />,
    },
  ];

  const recentGames = [
    {
      id: 1,
      title: "Persona 3 Reload",
      status: "In progress",
      img: preload,
    },
    {
      id: 2,
      title: "Persona 5 Royal",
      status: "Completed",
      img: proyal,
    },
    {
      id: 3,
      title: "9Rip",
      status: "Completed",
      img: rip,
    },
    {
      id: 4,
      title: "Illusion of Itehari",
      status: "Completed",
      img: itehari,
    },
  ];
  return (
    <div className="py-2 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Welcome back, Jisung!</h1>
      <div className="flex flex-row gap-4 py-4">
        {itemGames.map((item) => (
          <div className="">
            <CardStatus item={item} />
          </div>
        ))}
      </div>
      <div className="py-4">
        <h1 className="text-xl font-bold mb-4">Recent played games</h1>
        <div className="flex flex-wrap gap-4 py-4 ">
          {recentGames.map((game) => (
            <>
              <CardImg
                key={game.id}
                className="border border-1 border-violet-200"
                img={game.img}
                onClick={() => setIsOpen(true)}
              >
                <div className="flex flex-col items-center py-2">
                  <p className="text-sm font-semibold">{game.title}</p>
                </div>
              </CardImg>
            </>
          ))}
        </div>
      </div>
      <ModalCustom
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeTrigger={false}
        className="px-2 py-0"
      >
        <GameDetail img={preload} />
      </ModalCustom>
    </div>
  );
};

export default Dashboard;
