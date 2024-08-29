import './App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import landingPage from './pages/landingPage';
import Footer from './components/molecule/Footer';
import Navbar from './components/molecule/Navbar';
import Profile from './pages/profile';

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
        <Route path="/" element={<Layout><landingPage /></Layout>} />  
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
