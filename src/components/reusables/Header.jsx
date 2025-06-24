import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const blogPages = [
    'Editorial',
    'Spotlight',
    'Culture',
    'Music',
    'Lifestyle',
    'On the Scene',
    'Community',
    'Documentary',
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

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

          <div className="relative">
            <button
              className="flex items-center gap-2 cursor-pointer hover:text-red-500"
              onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
            >
              BLOG {blogDropdownOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
            <AnimatePresence>
              {blogDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white text-green-800 shadow-lg rounded-md w-64 z-30 p-4 grid grid-cols-1 gap-2"
                >
                  {blogPages.map((item) => (
                    <a
                      key={item}
                      href={`/blog/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-green-100 rounded-md px-3 py-2 text-sm hover:bg-green-200 hover:text-green-900 transition shadow-sm"
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/podcasts" className="hover:text-red-500">Podcasts</a>
          <a href="/contact" className="hover:text-red-500">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-2xl z-[60] relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Background Blur Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-green-800 text-white w-full absolute top-[95%] left-0 shadow-md rounded-b-lg py-4 px-6 z-40 max-h-[90vh] overflow-y-auto"
          >
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
                        href={`/blog/${item.toLowerCase().replace(/\s+/g, "-")}`}
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

            <hr className="my-6 border-white/20" />

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-xl pb-4">
              <a href="/music" className="hover:text-red-500" title="YouTube"><FaYoutube /></a>
              <a href="/podcasts" className="hover:text-red-500" title="Spotify"><FaSpotify /></a>
              <a href="/about" className="hover:text-red-500" title="Instagram"><FaInstagram /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
