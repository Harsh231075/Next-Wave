import React from "react";
import { Link } from 'react-router-dom'
const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 bg-blue-600 text-white h-screen fixed">
      <div className="p-6 text-2xl font-bold"><Link to='/'>Dashboard</Link> </div>
      <nav className="flex flex-col space-y-2 mt-4">
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("profile")}
        >
          Profile
        </button>
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("mypost")}
        >
          My Posts
        </button>
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("leaderboard")}
        >
          Leaderboard
        </button>
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("reward")}
        >
          Reward
        </button>
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("challenges")}
        >
          Challenges
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
