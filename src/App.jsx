import './App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from './pages/landingpage';
import Footer from './components/molecule/Footer';
import Navbar from './components/molecule/Navbar';

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
        {/* Define other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
