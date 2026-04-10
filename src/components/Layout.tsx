import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-dvh flex flex-col">
      <Navbar />
      <div className="mx-4 lg:mx-10 xl:mx-16 2xl:mx-60 my-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
