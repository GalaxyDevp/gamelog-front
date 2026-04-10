import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeStore } from "../interfaces/themeStore";

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state: { theme: string }) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
      setTheme: (theme: string) => set({ theme }),
    }),
    {
      name: "themeStore",
    },
  ),
);
