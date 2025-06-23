import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const blogPages = [
    'CTDA Editorial',
    'Spotlight',
    'Culture',
    'Music',
    'Lifestyle',
    'On the Scene',
    'Community',
    'Documentary',
  ];

  // Close mobile menu if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CTDA Media Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-white"
          />
          <span className="text-xl font-bold tracking-wide uppercase">
            CTDA<span className="font-light text-white">Media</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 font-semibold uppercase tracking-wide relative">
          <a href="/" className="hover:text-red-500">Home</a>
          <a href="/about" className="hover:text-red-500">About CTDA</a>

          {/* Blog Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-red-500">
              BLOG <FaChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white text-green-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform scale-95 group-hover:scale-100 transition duration-200 origin-top w-64 z-30 p-4 grid grid-cols-1 gap-2">
              {blogPages.map((item) => (
                <a
                  key={item}
                  href={`/blog/${item.toLowerCase()}`}
                  className="bg-green-100 rounded-md px-3 py-2 text-sm hover:bg-green-200 hover:text-green-900 transition shadow-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <a href="/podcasts" className="hover:text-red-500">Podcasts</a>
          <a href="/contact" className="hover:text-red-500">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-green-700 text-white w-full absolute top-full left-0 shadow-md rounded-b-lg py-4 px-6 z-40 transition-all duration-300">
          {/* Logo Centered */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={logo}
              alt="CTDA Media Logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-white"
            />
            <span className="text-lg font-bold mt-2 uppercase tracking-wide">
              CTDA <span className="font-light">Media</span>
            </span>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col space-y-4 text-sm font-semibold uppercase tracking-wide">
            <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-red-400">Home</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-400">About CTDA</a>

            {/* Blog Dropdown */}
            <div>
              <button
                onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                className="flex items-center justify-between w-full hover:text-red-400"
              >
                <span>BLOG</span>
                {blogDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {blogDropdownOpen && (
                <div className="grid grid-cols-2 gap-3 mt-3 pl-1 text-xs">
                  {blogPages.map((item) => (
                    <a
                      key={item}
                      href={`/blog/${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="bg-green-600 rounded-md px-2 py-1 text-white hover:bg-green-500 transition shadow"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/podcasts" onClick={() => setMenuOpen(false)} className="hover:text-red-400">Podcasts</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-400">Contact</a>
          </nav>

          {/* Divider */}
          <hr className="my-6 border-white/20" />

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-xl">
            <a href="/music" className="hover:text-red-500" title="YouTube"><FaYoutube /></a>
            <a href="/podcasts" className="hover:text-red-500" title="Spotify"><FaSpotify /></a>
            <a href="/about" className="hover:text-red-500" title="Instagram"><FaInstagram /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
