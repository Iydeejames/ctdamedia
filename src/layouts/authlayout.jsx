import Navbar from '../components/Landingpage/Navbar';
import Footer from '../components/Landingpage/Footer';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;