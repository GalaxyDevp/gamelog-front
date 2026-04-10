import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes/routes";
import ThemeProvider from "./provider/themeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
