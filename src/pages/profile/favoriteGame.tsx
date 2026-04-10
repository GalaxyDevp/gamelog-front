import CardImg from "../../components/CardImg";
import preload from "../../assets/images/p3r.webp";
import proyal from "../../assets/images/p5r.webp";
import rip from "../../assets/images/9rip.webp";

const FavoriteGame = () => {
  const favoriteGame = [
    {
      id: 1,
      title: "Persona 3 Reload",
      img: preload,
    },
    {
      id: 1,
      title: "Persona 5 Royal",
      img: proyal,
    },
    {
      id: 1,
      title: "9RIP",
      img: rip,
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-semibold text-purple-800 dark:text-white">
          Favorites Games
        </h1>
      </div>
      <div className="flex gap-4 pt-2">
        {favoriteGame.map((game) => (
          <CardImg
            key={game.id}
            className="border border-1 border-violet-200"
            img={game.img}
          >
            <div className="flex flex-col items-center py-2">
              <p className="text-sm font-semibold">{game.title}</p>
            </div>
          </CardImg>
        ))}
      </div>
    </div>
  );
};

export default FavoriteGame;
