import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return <div className="transition-colors duration-500">{children}</div>;
};
export default ThemeProvider;
