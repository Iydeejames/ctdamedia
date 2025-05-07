import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-3xl font-extrabold tracking-wide">
          CTDA<span className="text-white font-light">Media</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 font-medium text-white">
          <a href="/" className="hover:underline">Home</a>
          <a href="/categories" className="hover:underline">Categories</a>
          <a href="/post/sample-id" className="hover:underline">Single News</a>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:underline">
              More ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md py-2 w-40 mt-2 z-50 transition-all">
              <a href="/option1" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
              <a href="/option2" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
              <a href="/option3" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
            </div>
          </div>

          <a href="/contact" className="hover:underline">Contact</a>
        </nav>

        {/* Search - Hidden on Mobile */}
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
          <button className="text-green-700 text-lg ml-2">
            <FaSearch />
          </button>
        </div>

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
            <a href="/categories" className="hover:underline">Categories</a>
            <a href="/post/sample-id" className="hover:underline">Single News</a>
            <a href="#" className="hover:underline">Dropdown</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
