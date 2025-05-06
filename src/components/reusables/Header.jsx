import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl md:text-3xl font-bold text-green-700 tracking-wide">
          CTDA Media
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <a href="/" className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition">
            Home
          </a>
          <a href="/categories" className="hover:text-green-600 transition">Categories</a>
          <a href="/post/sample-id" className="hover:text-green-600 transition">Single News</a>
          <div className="relative group">
            <button className="hover:text-green-600 transition flex items-center gap-1">
              Dropdown ▾
            </button>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md rounded w-40 mt-2 py-2 z-50">
              <a href="/option1" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
              <a href="/option2" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
              <a href="/option3" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
            </div>
          </div>
          <a href="/contact" className="hover:text-green-600 transition">Contact</a>
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="text-green-700 hover:text-green-900">
            <FaSearch />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            <a href="/" className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition">
              Home
            </a>
            <a href="/categories" className="hover:text-green-600">Categories</a>
            <a href="/post/sample-id" className="hover:text-green-600">Single News</a>
            <a href="#" className="hover:text-green-600">Dropdown</a>
            <a href="/contact" className="hover:text-green-600">Contact</a>
          </nav>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="text-green-700">
              <FaSearch />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
