import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-dvh flex flex-col">
      <Navbar />
      <div className="mx-4 lg:mx-12 xl:mx-22 2xl:mx-64 my-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
