import './App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingpage';
import Footer from './components/molecule/Footer';
import Navbar from './components/molecule/Navbar';
import Profile from './pages/Profile';
import Certification from './pages/certification';  
import ContactUs from './pages/ContactUs';
import Repair from './pages/Repair';

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
        <Route path="/Profile" element={<Layout><Profile /></Layout>} />
        <Route path="/Certification" element={<Layout><Certification/></Layout>} />
        <Route path="/ContactUs" element={<Layout><ContactUs/></Layout>} />
        <Route path="/Repair" element={<Layout><Repair/></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
