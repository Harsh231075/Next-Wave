import React, { useState } from 'react';
import { TreePine, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleDashboardClick = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/dashboard');
    } else {
      navigate('/signup'); // Redirect to signup page if no token
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <TreePine className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl">EcoCup</span>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {menuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`absolute top-16 left-0 w-full bg-white md:static md:flex md:space-x-6 md:bg-transparent md:items-center md:w-auto ${menuOpen ? 'block' : 'hidden'
              }`}
          >
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <NavLink to="/" label="Home" isActive={isActive('/')} />
              <NavLink to="/challenges" label="Challenges" isActive={isActive('/challenges')} />
              <NavLink to="/community" label="Community" isActive={isActive('/community')} />
              <NavLink to="/impact" label="Impact" isActive={isActive('/impact')} />
              <button
                onClick={handleDashboardClick}
                className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors"
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label, isActive }) => (
  <Link
    to={to}
    className={`text-lg font-medium ${isActive ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
      } transition-colors`}
  >
    {label}
  </Link>
);

export default Navbar;
