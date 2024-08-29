import './App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Ensure the paths and filenames match exactly with your project structure
import LandingPage from './pages/LandingPage'; // Check if 'LandingPage.js' exists in 'pages'
import Footer from './components/molecule/Footer'; // Verify 'Footer.js' is in 'components/molecule'
import Navbar from './components/molecule/Navbar'; // Verify 'Navbar.js' is in 'components/molecule'
import Profile from './pages/Profile'; // Ensure 'Profile.js' is in 'pages' (Note: Profile, not profile)

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />  
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
