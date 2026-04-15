import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes/routes";
import ThemeProvider from "./provider/themeProvider";
import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import { MantineProvider } from "@mantine/core";
import { useThemeStore } from "./store/themeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <>
      <MantineProvider
        forceColorScheme={theme === "dark" ? "dark" : "light"}
        theme={{
          colors: {
            dark: [
              "#d1d5db",
              "#9ca3af",
              "#6b7280",
              "#4b5563",
              "#374151",
              "#1f2937",
              "#1f2937",
              "#111827",
              "#111827",
              "#374151",
            ],
          },
          components: {
            Modal: {
              classNames: {
                root: "bg-gray-900 rounded-2xl overflow-hidden",
              },
            },
          },
        }}
      >
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </MantineProvider>
    </>
  );
}

export default App;
