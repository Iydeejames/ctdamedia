import React, { useState } from 'react';
import {  FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" className="flex items-center gap-2">
  <img
    src={logo}
    alt="CTDA Media Logo"
    className="h-14 w-14 rounded-full object-cover"
  />
</a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 font-medium text-white">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/music" className="hover:underline">Music</a>
          <a href="/podcasts" className="hover:underline">Podcasts</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>



        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-green-700 px-4 pb-4 text-white animate-slide-down">
          <nav className="flex flex-col space-y-3 font-medium text-sm">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/music" className="hover:underline">Music</a>
            <a href="/podcasts" className="hover:underline">Podcasts</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
