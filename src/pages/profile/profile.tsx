import { Clock, Gamepad2, LibraryBig, Trophy } from "lucide-react";
import Card from "../../components/Card";
import CurrentGames from "./currentGames";
import CompletedGames from "./completedGames";
import BacklogGames from "./backlogGames";
import FavoriteGame from "./favoriteGame";
import CardStatus from "../../components/CardStatus";
import { games } from "../../const/games";
import kaelix from "../../assets/images/kaelixDebonair.jpg";

const Profile = () => {
  const cardStatus = [
    {
      id: 1,
      number: games.length,
      icon: <Gamepad2 />,
      border: "border-violet-200 dark:border-violet-500",
      color:
        "bg-violet-100 text-fuchsia-900 dark:bg-violet-500 dark:text-white",
      title: "Total games",
    },
    {
      id: 2,
      title: "Playing",
      number: games.filter((game) => game.status === "Playing").length,
      border: "border-pink-200 dark:border-pink-500",
      color: "bg-pink-100 text-fuchsia-900 dark:bg-pink-500 dark:text-white",
      icon: <Clock />,
    },
    {
      id: 3,
      title: "Completed",
      number: games.filter((game) => game.status === "Completed").length,
      border: "border-green-200 dark:border-green-500",
      color: "bg-green-200 text-green-900 dark:bg-green-500 dark:text-white",
      icon: <Trophy />,
    },
    {
      id: 4,
      title: "Backlog",
      number: games.filter((game) => game.status === "Backlog").length,
      border: "border-sky-200 dark:border-sky-500",
      color: "bg-sky-100 text-sky-900 dark:bg-sky-500 dark:text-white",
      icon: <LibraryBig />,
    },
  ];

  return (
    <div>
      <Card className="border border-1 border-violet-200 bg-purple-50/30 dark:border-gray-700">
        <div className="flex flex-col gap-4 text-black dark:text-white">
          <div className="flex flex-row items-center gap-4">
            <div className="rounded-full text-fuchsia-800 dark:bg-purple-800 dark:text-purple-200">
              <img src={kaelix} alt="" className="w-20 h-20 rounded-full" />
            </div>
            <div>
              <p className="text-xl font-semibold">Kaelix Debonair</p>
              <p className="text-sm">@kaelixdebonair</p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-row justify-center gap-4 py-4">
            {cardStatus.map((item) => (
              <div className="">
                <CardStatus item={item} />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <FavoriteGame />
          </div>
          <div className="border-t-1 border-violet-200 dark:border-gray-600"></div>
          <div className="flex flex-col gap-4">
            <CurrentGames />
            <CompletedGames />
            <BacklogGames />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
