export interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
  setTheme: (theme: string) => void;
}
