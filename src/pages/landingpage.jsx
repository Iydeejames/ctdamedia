// landingpage.jsx
import Button from "../components/atoms/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#001D3B] text-white">
        <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
          <h1 className="text-3xl font-bold">SchoolPadi</h1>
          <nav>
            <ul className="flex space-x-8 text-lg">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 md:px-8">
          <h2 className="text-5xl font-semibold mb-6 text-[#001D3B]">
            Welcome to SchoolPadi
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your comprehensive solution for school management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/s">
              <Button
                bgColor="#001D3B"
                color="#FFFFFF"
                borderColor="#001D3B"
                width="180px"
                height="50px"
                fontSize="16px"
                fontWeight="600"
                className="rounded-lg shadow-lg hover:bg-blue-800 transition-transform transform hover:-translate-y-1"
              >
                Super Admin Dashboard
              </Button>
            </Link>

            
            <Link to="/AdminDashboard">
              <Button
                bgColor="#001D3B"
                color="#FFFFFF"
                borderColor="#001D3B"
                width="180px"
                height="50px"
                fontSize="16px"
                fontWeight="600"
                className="rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1"
              >
                Admin Dashboard
              </Button>
            </Link>


            <Link to="/StudentDashboard">
              <Button
                bgColor="#001D3B"
                color="#FFFFFF"
                borderColor="#001D3B"
                width="180px"
                height="50px"
                fontSize="16px"
                fontWeight="600"
                className="rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:-translate-y-1"
              >
                Student Dashboard
              </Button>
            </Link>
            <Link to="/t">
              <Button
                bgColor="#001D3B"
                color="#FFFFFF"
                borderColor="#001D3B"
                width="180px"
                height="50px"
                fontSize="16px"
                fontWeight="600"
                className="rounded-lg shadow-lg hover:bg-blue-800 transition-transform transform hover:-translate-y-1"
              >
                Teachers Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#001D3B] text-white py-4">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2024 SchoolPadi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
