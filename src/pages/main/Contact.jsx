import {
  Mail,
  Users,
  Megaphone,
  Share2
} from 'lucide-react';
import {
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaYoutube,
  FaXTwitter,
  FaTiktok
} from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 text-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-base sm:text-lg text-green-700 max-w-2xl mx-auto">
          Got a question, collaboration idea, or media inquiry? Reach out—we'd love to hear from you.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto mb-20">
        {/* General */}
        <div className="backdrop-blur-md bg-green-700 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-4">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            <h2 className="text-xl sm:text-2xl font-semibold">General Inquiries</h2>
          </div>
          <p className="text-sm sm:text-base text-green-100">Have a question? We're just an email away.</p>
          <a href="mailto:CTDAMedia@afrikanrootstore.com" className="mt-3 inline-block text-white underline font-medium text-sm sm:text-base">
            CTDAMedia@afrikanrootstore.com
          </a>
        </div>

        {/* Collaborations */}
        <div className="backdrop-blur-md bg-green-700 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            <h2 className="text-xl sm:text-2xl font-semibold">Collaborations</h2>
          </div>
          <p className="text-sm sm:text-base text-green-100">Let's collaborate and create something impactful.</p>
          <a href="mailto:CTDAMedia@afrikanrootstore.com" className="mt-3 inline-block text-white underline font-medium text-sm sm:text-base">
            CTDAMedia@afrikanrootstore.com
          </a>
        </div>

        {/* Press */}
        <div className="backdrop-blur-md bg-green-700 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-4">
            <Megaphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            <h2 className="text-xl sm:text-2xl font-semibold">Press & Media</h2>
          </div>
          <p className="text-sm sm:text-base text-green-100">Reach our media team for interviews or press kits.</p>
          <a href="mailto:info@afrikanrootstore.com" className="mt-3 inline-block text-white underline font-medium text-sm sm:text-base">
          info@afrikanrootstore.com
          </a>
        </div>

        {/* Social Media */}
        <div className="backdrop-blur-md bg-green-700 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-4">
            <Share2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            <h2 className="text-xl sm:text-2xl font-semibold">Social Media</h2>
          </div>
          <p className="text-sm sm:text-base text-green-100">Follow and stream us everywhere:</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm sm:text-base">
            <li>
              <a
                href="https://www.instagram.com/ctda_media"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:underline"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61576711739005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:underline"
              >
                <FaFacebook />FaceBook
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/playlist/7a7Xe4xxHU3J87pyXddibZ?si=zcV50LtKQn2JQkGE0x36wQ&pt=4a16698b4b4726428d1e8a0b73f21970&pi=e-ewbOrumcTzuO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:underline"
              >
                <FaSpotify /> Spotify
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@ctdamedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:underline"
              >
                <FaYoutube /> YouTube
              </a>
            </li>
            <li>
              <a
                href="https://x.com/CTDAMEDIA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:underline"
              >
                <FaXTwitter /> Twitter (X)
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@ctdamedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:underline"
              >
                <FaTiktok /> TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-gray-800">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 text-center">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 text-white py-2.5 sm:py-3 px-6 rounded-lg hover:bg-green-800 transition-all font-semibold text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 min-h-[350px] sm:min-h-[450px]">
          <iframe
            title="CTDA Media Location"
            src="https://www.google.com/maps?q=2550+Gray+Falls+Drive,+Houston,+Texas&output=embed"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
