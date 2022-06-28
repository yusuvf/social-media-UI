import { Outlet } from "react-router-dom";

import LeftSidebar from "./LeftSidebar";
import BottomNavigation from "./BottomNavigation";
import Newsfeed from "./Newsfeed";

const Dashboard = () => {
  return (
    <div className="max-w-screen-2xl flex min-h-full m-auto bg-slate-800">
      <LeftSidebar />
      <Outlet />
      <Newsfeed />
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
