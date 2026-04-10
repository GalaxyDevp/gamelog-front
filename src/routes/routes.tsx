import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard";
import Layout from "../components/Layout";
import Profile from "../pages/profile/profile";
import AllGames from "../pages/games/games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/games",
        element: <AllGames />,
      },
    ],
  },
]);

export default router;
