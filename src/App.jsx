import './App.css';
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from './pages/landingpage';
import Footer from './components/molecule/Footer';
import Navbar from './components/molecule/Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/';

  return (
    <div>
      {/* Render Navbar on all pages */}
      {!hideHeaderFooter && <Navbar />}
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        {children}
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


const App = () => {
  return (
    <Router>
      <Routes>
        {/* admin */}
        <Route path="/" element={<Layout><LandingPage /></Layout>} />  
      </Routes>
    </Router>
  );
};

export default App;