import { useState } from 'react';
import DroneLogo from "../../assets/logo/Drone-logo.png";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full p-1 lg:p-2 shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src={DroneLogo}
              alt="Drone Logo"
              className="h-20 w-28 object-contain"
            />
          </Link>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-[#007791]">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Regular navigation menu for large screens */}
        <nav className="hidden lg:flex lg:space-x-6">
          <ul className="flex space-x-6 font-bold text-[#007791]">
            <li><Link to="/" className="hover:text-black text-lg transition duration-300">Home</Link></li>
            <li><Link to="/Services" className="hover:text-black text-lg transition duration-300">Services</Link></li>
            <li><Link to="/Training" className="hover:text-black text-lg transition duration-300">Training</Link></li>
            <li><Link to="/Repair" className="hover:text-black text-lg transition duration-300">Drone repair</Link></li>
            <li><Link to="/ContactUs" className="hover:text-black text-lg transition duration-300">Contact</Link></li>
          </ul>
        </nav>

        {/* Full-screen overlay menu for small screens */}
        <div
          className={`fixed inset-0 bg-[#007791] w-1/2 left-0 top-0 flex flex-col items-start justify-start z-50 lg:hidden transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <nav className="mt-16 pl-8">
            <ul className="flex flex-col space-y-4 list-disc text-white marker:text-white">
              <li>
                <Link
                  to="/"
                  className="text-white font-bold text-sm"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                  to="/Services"
                  className="text-white font-bold text-sm"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/Training"
                  className="text-white font-bold text-sm"
                  onClick={toggleMenu}
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  to="/Repair"
                  className="text-white font-bold text-sm"
                  onClick={toggleMenu}
                >
                  Drone repair
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className="text-white font-bold text-sm"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
