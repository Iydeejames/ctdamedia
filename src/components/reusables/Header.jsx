import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const blogPages = [
    'Fashion',
    'Lifestyle',
    'Music',
    'Business',
    'Technology',
    'Entertainment',
  ];

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
        <nav className="hidden lg:flex items-center space-x-6 font-semibold uppercase tracking-wide relative">
          {/* Home */}
          <a
            href="/"
            className="hover:text-red-500 transition-colors duration-200 uppercase"
          >
            Home
          </a>

          {/* Blog Dropdown */}
          <div className="relative group">
            <button className="hover:text-red-500 transition-colors duration-200 uppercase">
            Blog {blogDropdownOpen ? '▼' : '▲'}
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white text-green-700 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform scale-95 group-hover:scale-100 transition duration-200 origin-top w-56 z-30">
              {blogPages.map((item) => (
                <a
                  key={item}
                  href={`/blog/${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm hover:bg-green-100 hover:text-green-800 border-b border-gray-100 last:border-none"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Other Links */}
          {['About', 'Music', 'Podcasts', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
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
        className={`fixed top-0 right-0 h-full w-3/4 bg-green-700 text-white transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
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
          <span className="text-xl font-bold tracking-wide uppercase">
            CTDA<span className="font-light text-white">Media</span>
          </span>

          {/* Mobile Links */}
          <div className="flex flex-col gap-5 font-medium text-sm uppercase tracking-wide mt-8">
            {/* Home */}
            <a
              href="/"
              className="hover:text-red-500 transition-colors font-semibold duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            {/* Blog Dropdown for Mobile */}
            <button
              onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
              className="text-left font-semibold hover:text-red-500 transition duration-200 uppercase"
            >
              Blog {blogDropdownOpen ? '▼' : '▲'}
            </button>
            {blogDropdownOpen && (
              <div className="grid grid-cols-2 gap-3 text-xs mt-2 ml-2">
                {blogPages.map((item) => (
                  <a
                    key={item}
                    href={`/blog/${item.toLowerCase()}`}
                    className="hover:text-red-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}

            {/* Other Links */}
            {['About', 'Music', 'Podcasts', 'Contact'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-red-500 font-semibold transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-10 border-t border-white/30 pt-6 text-white text-xs leading-relaxed">
            <p className="font-semibold uppercase mb-2">Quick Info</p>
            <p className="text-white/90">
              CTDA Media is your go-to source for authentic black culture, entertainment, news, and lifestyle content. Stay tuned for stories that move you.
            </p>

            <div className="mt-6">
              <p className="font-semibold uppercase mb-2">Visit Platforms</p>
              <ul className="space-y-1">
                <li><a href="/music" className="hover:text-red-500">Youtube</a></li>
                <li><a href="/podcasts" className="hover:text-red-500">Spotify</a></li>
                <li><a href="/about" className="hover:text-red-500">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
