// Footer.jsx
import DroneLogo from "../../assets/logo/Drone-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-white py-8 border-t border-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center">
          {/* Left Line */}
          <div className="flex-grow border-t border-black  mr-4"></div>

          {/* Center Content */}
          <div className="flex items-center text-black space-x-2">
            <span>We are powered by</span>
            <img
              src={DroneLogo}
              alt="Drone Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Right Line */}
          <div className="flex-grow border-t border-black  ml-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
