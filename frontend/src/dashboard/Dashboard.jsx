import React, { useState } from "react";
import Profile from "./Profile";
import Mypost from "./Mypost";
import Leaderboard from "./Leaderboard";
import Reward from "./Reward";
import Challenges from "./Challenges";
import Sidebar from "./Sidebar";

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed z-10 h-screen bg-blue-600 text-white transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:w-64`}
      >
        <button
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          &#x2715;
        </button>
        <Sidebar setActiveSection={setActiveSection} />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="fixed z-20 top-4 left-4 bg-blue-600 text-white p-2 rounded-md md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        &#9776;
      </button>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 overflow-y-auto p-6 md:ml-64">
        {activeSection === "profile" && <Profile />}
        {activeSection === "mypost" && <Mypost />}
        {activeSection === "leaderboard" && <Leaderboard />}
        {activeSection === "reward" && <Reward />}
        {activeSection === "challenges" && <Challenges />}
      </div>
    </div>
  );
};
