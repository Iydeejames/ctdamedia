import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white pt-12 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/20 pb-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">CTDA Media</h2>
            <p className="text-sm leading-6">
              CTDA Media is your go-to source for authentic black culture, entertainment, news, and lifestyle content. Stay tuned for stories that move you.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/editorial" className="hover:underline">Editorial</a></li>
              <li><a href="/lifestyle" className="hover:underline">Lifestyle</a></li>
              <li><a href="/spotlight" className="hover:underline">Spotlight</a></li>
              <li><a href="/culture" className="hover:underline">Culture</a></li>
              <li><a href="/community" className="hover:underline">Community</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-sm mb-4">Get the latest updates, stories, and insights delivered straight to your inbox.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded text-black outline-none"
              />
              <button
                type="submit"
                className="bg-white text-green-700 font-semibold py-2 rounded hover:bg-green-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} CTDA Media. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="mailto:info@ctdamedia.com" aria-label="Email" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
