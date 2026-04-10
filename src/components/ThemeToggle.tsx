import { useThemeStore } from "../store/themeStore";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);
  return (
    <button onClick={() => toggleTheme()}>
      <div
        className="transition bg-fuchsia-200 p-2 rounded-xl text-pink-900 hover:bg-fuchsia-300 hover:text-pink-800 
      dark:bg-purple-800 dark:text-purple-200 dark:hover:bg-purple-700 dark:hover:text-purple-200"
      >
        {theme === "light" ? (
          <Moon width={20} height={20} />
        ) : (
          <Sun width={20} height={20} />
        )}
      </div>
    </button>
  );
};
export default ThemeToggle;
