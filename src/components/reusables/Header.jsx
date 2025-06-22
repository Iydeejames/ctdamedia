import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 font-medium uppercase tracking-wide">
          {['Home', 'About', 'Music', 'Podcasts', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase().replace(/\s+/g, '')}`}
              className="hover:text-red-500 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-green-800 text-white transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col justify-between h-full relative">

          {/* Close Icon */}
          <button
            className="absolute top-8 right-4 text-2xl text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Dropdown Caption */}
          <div className="text-center mt-2 mb-1">
            <h2 className="text-2xl font-extrabold tracking-widest uppercase">CTDA Media</h2>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-5 font-medium text-sm uppercase tracking-wide">
            {['Home', 'About Us', 'Music', 'Podcasts', 'Contact'].map((item) => (
              <a
                key={item}
                href={`/${item === 'Home' ? '' : item.toLowerCase().replace(/\s+/g, '')}`}
                className="hover:text-red-500 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Extra Info Section */}
          <div className="mt-10 border-t border-white/30 pt-6 text-white text-sm leading-relaxed">
            <p className="font-semibold uppercase mb-2">Quick Info</p>
            <p className="text-white/90">
              CTDA Media is your trusted source for entertainment, culture, music, and podcasts. Stay updated with bold stories from the Black experience.
            </p>

            <div className="mt-6">
              <p className="font-semibold uppercase mb-2">Visit Platforms</p>
              <ul className="space-y-1">
                <li><a href="/music" className="hover:text-red-500">Music</a></li>
                <li><a href="/podcasts" className="hover:text-red-500">Podcasts</a></li>
                <li><a href="/about" className="hover:text-red-500">About CTDA</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
