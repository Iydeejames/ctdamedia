import DroneLogo from "../../assets/logo/Drone-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-800 hover:text-blue-400 transition duration-300">Home</Link></li>
            <li><Link to="/features" className="text-gray-800 hover:text-blue-400 transition duration-300">Features</Link></li>
            <li><Link to="/pricing" className="text-gray-800 hover:text-blue-400 transition duration-300">Pricing</Link></li>
            <li><Link to="/contact" className="text-gray-800 hover:text-blue-400 transition duration-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
