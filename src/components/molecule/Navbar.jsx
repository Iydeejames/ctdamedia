import React, { useState } from 'react';
import DroneLogo from "../../assets/logo/Drone-logo.png";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={DroneLogo}
            alt="Drone Logo"
            className="h-20 w-26 object-contain"
          />
        </div>

        {/* Hamburger icon for small screens */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Full-screen overlay menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800">
              <FaTimes size={24} />
            </button>
            <nav>
              <ul className="flex flex-col space-y-6">
                <li><Link to="/" className="text-black text-2xl" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/features" className="text-black text-2xl" onClick={toggleMenu}>Features</Link></li>
                <li><Link to="/pricing" className="text-black text-2xl" onClick={toggleMenu}>Tutorials</Link></li>
                <li><Link to="/contact" className="text-black text-2xl" onClick={toggleMenu}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
