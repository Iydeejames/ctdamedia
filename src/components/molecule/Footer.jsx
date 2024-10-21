import DroneLogo from "../../assets/logo/Drone-logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 -mt-8">
      {/* Top Section (Black Background) */}
      <div className="bg-black text-white py-8 px-4 md:px-8 w-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul>
                <li><a href="#about-us" className="hover:underline">About Us</a></li>
                <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#terms-conditions" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="/ContactUs" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>

            {/* Customer Service Section */}
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul>
                <li><a href="#hire-drone-pilot" className="hover:underline">Hire a Drone Pilot</a></li>
                <li><a href="#become-drone-pilot" className="hover:underline">Become a Drone Pilot</a></li>
                <li><a href="#drone-services" className="hover:underline">Drone Services</a></li>
                <li><a href="#drone-repair-service" className="hover:underline">Drone Repair Service</a></li>
              </ul>
            </div>

            {/* Contacts Section */}
            <div>
              <h4 className="font-bold mb-4">Contacts</h4>
              <ul>
                <li>+234 7072 2618 83</li>
                <li>+234 8025 2918 63</li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Email Us</h4>
              <p>info@drdrone.ng</p>
            </div>

            {/* Address Section */}
            <div>
              <h4 className="font-bold mb-4">Address</h4>
              <address>
                3 Emmanuel Bassey,<br />
                Avenue,<br />
                Uyo, Nigeria<br />
                520102 ZIP Code
              </address>
            </div>

            {/* Our Socials Section */}
            <div>
              <h4 className="font-bold mb-4">Our Socials</h4>
              <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61565898366337" target="_blank" rel="noopener noreferrer" className="text-blue-600">
      <FaFacebookF size={22} />
    </a>
                <a href="https://www.instagram.com/drdronehq?igsh=MXFtYTgyN3ZnNDl0Zg==" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                  <FaInstagram size={22} />
                </a>
                <a href="https://wa.me/2347072261883" target="_blank" rel="noopener noreferrer" className="text-green-500">
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section (White Background) */}
      <div className="bg-white w-full">
        <div className="container mx-auto px-4 md:px-8 -pb-[4] pt-6">
          <div className="flex items-center justify-center">
            {/* Left Line */}
            <div className="flex-grow border-t border-black mr-4"></div>

            {/* Center Content */}
            <div className="flex items-center text-black space-x-2">
              <img
                src={DroneLogo}
                alt="Drone Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Right Line */}
            <div className="flex-grow border-t border-black ml-4"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
