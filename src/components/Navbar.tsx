import { Link, useNavigate } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import FormAddGame from "../pages/formAddGame";
import { Burger, Drawer, Menu, Modal } from "@mantine/core";
import {
  Spotlight,
  spotlight,
  type SpotlightActionData,
} from "@mantine/spotlight";
// import kaelix from "../assets/images/kaelixDebonair.jpg";
import { ChevronDown, Search, UserRound } from "lucide-react";
import { games } from "../const/games";
import MobileMenu from "./MobileMenu";
import { useDisclosure } from "@mantine/hooks";

interface Game {
  id: number;
  title: string;
  status: string;
  img: string;
  developer: string[];
  releaseDate: string;
  genres: string[];
  platforms: string[];
  favorite: boolean;
}

const Navbar = () => {
  const [openDrawer, { open, close }] = useDisclosure(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "All Games", href: "/games" },
  ];
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const actions: SpotlightActionData[] = games.map((game) => ({
    id: game.id.toString(),
    label: game.title,
    onClick: () => {
      setIsOpen(true);
      setSelectedGame(game);
      spotlight.close();
    },
  }));

  return (
    <>
      <nav className="border-b border-violet-300 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex flex-row items-center justify-between px-4 lg:px-10 xl:px-16 2xl:px-20 py-4">
          <div>
            <h1 className="text-3xl font-bold bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-500 dark:to-fuchsia-500">
              <Link to="/">GameLog</Link>
            </h1>
          </div>
          <div className="hidden md:flex flex-row gap-4 items-center text-black dark:text-white">
            <ul className="flex flex-row gap-4">
              {navItems.map((item) => (
                <li key={item.label} className="hover:text-violet-500">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center flex-row gap-4">
              <Menu trigger="hover" width={150} shadow="md">
                <Menu.Target>
                  <div className="flex items-center gap-2 cursor-pointer">
                    {/* <img src={kaelix} className="w-10 h-10 rounded-full" /> */}
                    Kaelix <ChevronDown size={14} />
                  </div>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<UserRound size={14} />}
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <button
                className="bg-violet-500 py-2 px-4 rounded-xl text-white hover:bg-violet-600 dark:bg-purple-800 
                          dark:text-purple-200 cursor-pointer dark:hover:bg-purple-700 dark:hover:text-purple-200"
                onClick={spotlight.open}
              >
                Add Game
              </button>
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex flex-row gap-4 items-center">
            <button
              className="bg-violet-500 py-2 px-4 rounded-xl text-white hover:bg-violet-600 dark:bg-purple-800 
                          dark:text-purple-200 cursor-pointer dark:hover:bg-purple-700 dark:hover:text-purple-200"
              onClick={spotlight.open}
            >
              Add Game
            </button>
            <ThemeToggle />
            <Burger opened={openDrawer} onClick={open} />
            <Drawer opened={openDrawer} onClose={close}>
              <MobileMenu items={navItems} close={close} />
            </Drawer>
          </div>
        </div>
      </nav>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <Search size={20} />,
          placeholder: "Search...",
        }}
      />
      <Modal opened={isOpen} onClose={() => setIsOpen(false)} title="Add Game">
        <div className="flex flex-col gap-4">
          <FormAddGame selectedGame={selectedGame} />
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
