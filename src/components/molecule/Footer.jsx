import DroneLogo from "../../assets/logo/Drone-logo.png";

const Footer = () => {
  return (
    <footer className="text-white py-8 -mt-8">
      {/* Top Section (Black Background) */}
      <div className="bg-black text-white py-8 px-4 md:px-8 w-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
               {/* <li><a href="#drone-buying-guides" className="hover:underline">Drone Buying Guides</a></li> */}
              </ul>
            </div>

            {/* Contacts Section */}
            <div>
              <h4 className="font-bold mb-4">Contacts</h4>
              <ul>
                <li>+234 9080 0066 00</li>
                <li>+234 7033 8055 23</li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Email Us</h4>
                <p>drdronenigltd@gmail.com</p>
            </div>

            {/* Address Section */}
            <div>
              <h4 className="font-bold mb-4">Address</h4>
              <address>
                3 Emmanuel Bassey,<br />
                Avenue,<br />
                Uyo, Nigeria<br />
                12345 ZIP Code
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section (White Background) */}
      <div className="bg-white w-full">
        <div className="container mx-auto px-4 md:px-8 -pb-[4] pt-2">
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
