import { Routes, Route } from 'react-router-dom';
import Landingpage from '../pages/landingpage';
 import Navbar from '../components/molecule/Navbar';
import Footer from '../components/molecule/Footer';
import Profile from '../pages/Profile';



function PageRoutes() {
  return (
    <div>
     <Navbar />  Ensure Navbar is always visible 
      <Routes>
     <Route path="/" element={<Landingpage />} />
     <Route path="/profile" element={<Profile />} />
     </Routes>
     <Footer /> {/* Ensure Footer is always visible */}
     </div>
  );
}

export default PageRoutes;
