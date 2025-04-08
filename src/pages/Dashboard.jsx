import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="d-flex">
      {showSidebar && <Sidebar />}

      <div className="flex-grow-1">
        <div className="mt-2 ms-3">
          <RxHamburgerMenu
            size={24}
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
