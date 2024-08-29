
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-800 w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Dr Drone</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-white hover:text-blue-400 transition duration-300">Home</Link></li>
            <li><Link to="/features" className="text-white hover:text-blue-400 transition duration-300">Features</Link></li>
            <li><Link to="/pricing" className="text-white hover:text-blue-400 transition duration-300">Pricing</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-400 transition duration-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
