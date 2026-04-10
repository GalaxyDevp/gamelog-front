import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { Gamepad, UserRound } from "lucide-react";
import ModalCustom from "./Modal";
import { useState } from "react";
import SearchGames from "../pages/games/SearchGames";
import FormAddGame from "../pages/formAddGame";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "All Games", href: "/games" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border-b-1 border-violet-300 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex flex-row items-center justify-between px-4 lg:px-10 xl:px-16 2xl:px-20 py-4">
          <div>
            <h1 className="text-3xl font-bold bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-500 dark:to-fuchsia-500">
              <Link to="/">GameLog</Link>
            </h1>
          </div>
          <div className="flex flex-row gap-4 items-center text-black dark:text-white">
            <ul className="flex flex-row gap-4">
              {navItems.map((item) => (
                <li key={item.label} className="hover:text-violet-500">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center flex-row gap-4">
              <div className="transition bg-fuchsia-200 p-2 rounded-full text-pink-900 dark:bg-purple-800 dark:text-purple-200 cursor-pointer">
                <Link to="/profile">
                  <UserRound width={20} height={20} />
                </Link>
              </div>
              <button
                className="bg-violet-500 py-2 px-4 rounded-xl text-white hover:bg-violet-600 dark:bg-purple-800 
            dark:text-purple-200 cursor-pointer dark:hover:bg-purple-700 dark:hover:text-purple-200"
                onClick={() => setIsOpen(true)}
              >
                Add Game
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <ModalCustom
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add Game"
        icon={<Gamepad />}
        size="lg"
      >
        <div className="flex flex-col gap-4">
          <SearchGames />
          <FormAddGame />
        </div>
      </ModalCustom>
    </>
  );
};

export default Navbar;
