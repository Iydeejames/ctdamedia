import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaApple
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion"; 

// Images
import img1 from "../../assets/images/hero-page/img1.jpg";
import img2 from "../../assets/images/hero-page/img2.jpg";
import img4 from "../../assets/images/hero-page/img4.jpg";
import img5 from "../../assets/images/hero-page/img5.jpg";
import img7 from "../../assets/images/hero-page/img7.jpg";
import img9 from "../../assets/images/hero-page/img9.jpg";
import img10 from "../../assets/images/hero-page/img10.jpg";
import img11 from "../../assets/images/hero-page/img11.jpg";
import img12 from "../../assets/images/hero-page/img12.jpg";
import img13 from "../../assets/images/hero-page/img13.jpg";
import img14 from "../../assets/images/hero-page/img14.jpg";
import img15 from "../../assets/images/hero-page/img15.jpg";
import img16 from "../../assets/images/hero-page/img16.jpg";
import img17 from "../../assets/images/hero-page/img17.jpg";
import img18 from "../../assets/images/hero-page/img18.jpg";
import img19 from "../../assets/images/hero-page/img19.jpg";
import img20 from "../../assets/images/hero-page/img20.jpg";
import img21 from "../../assets/images/hero-page/img21.jpg";
import img22 from "../../assets/images/hero-page/img22.jpg";
import img23 from "../../assets/images/hero-page/img23.jpg";
import img24 from "../../assets/images/hero-page/img24.jpg";
import img25 from "../../assets/images/hero-page/img25.jpg";

const LandingPage = () => {

  const slides = [
    {
      image: img4,
      caption: 'Welcome to CTDA Media',
    },
    {
      image: img5,
      caption: 'Community-Driven Stories',
    },
    {
      image: img7,
      caption: 'Your Voice, Your Power',
    },
  ];

  const recentReleases = [
    { slug: "recent-1", title: "Exploring African Heritage Through Dance", date: "May 27, 2025", description: "A deep dive into dance as a cultural expression.", image: img2 },
    { slug: "recent-2", title: "Sound of Suburb in Lagos", date: "May 27, 2025", description: "The rise of grassroots music scenes.", image: img4 },
    { slug: "recent-3", title: "Tech on the Rise in Africa", date: "May 27, 2025", description: "Highlighting African innovation and start-ups.", image: img5 },
    { slug: "recent-4", title: "Fashion Week New Wave", date: "May 27, 2025", description: "New trends shaking up African fashion.", image: img7 },
  ];

  const business = [
    { slug: "biz-1", title: "Entrepreneurial Growth in Nigeria", date: "May 25, 2025", description: "Nigeria’s startup scene is booming.", image: img2 },
    { slug: "biz-2", title: "SMEs Driving New Economies", date: "May 26, 2025", description: "How small businesses shape local markets.", image: img4 },
    { slug: "biz-3", title: "Blockchain Startups Rise", date: "May 27, 2025", description: "A new wave of digital finance.", image: img5 },
  ];

  const sports = [
    { slug: "sport-1", title: "African Athletes on the World Stage", date: "May 25, 2025", description: "Stories of determination and global success.", image: img7 },
    { slug: "sport-2", title: "Grassroots Football Revolution", date: "May 26, 2025", description: "How local games build national pride.", image: img2 },
    { slug: "sport-3", title: "Emerging Basketball Stars", date: "May 27, 2025", description: "Young athletes shining in Africa.", image: img4 },
  ];

  const culture = [
    { slug: "culture-1", title: "The Art of Blackness in Motion", date: "May 20, 2025", description: "Celebrating Black identity through performance.", image: img5 },
    { slug: "culture-2", title: "Afrobeats Evolution", date: "May 22, 2025", description: "Charting the explosive growth of Afrobeats.", image: img7 },
    { slug: "culture-3", title: "African Storytelling Reimagined", date: "May 23, 2025", description: "A new era of digital folktales.", image: img2 },
  ];

  const spotlight = [
    { slug: "spot-1", title: "New Soundscape in Shaku Culture", date: "May 24, 2025", description: "Uncovering rhythmic revolutions.", image: img4 },
    { slug: "spot-2", title: "Creative Powerhouses Rising", date: "May 25, 2025", description: "Artists transforming global media.", image: img5 },
    { slug: "spot-3", title: "Fashion and Media Icons", date: "May 26, 2025", description: "Celebrating industry leaders.", image: img7 },
  ];


  const [scrollTime, setScrollTime] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

// 1. Slideshow transition
useEffect(() => {
  const interval = setInterval(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFade(true);
    }, 100);
  }, 8000);

  return () => clearInterval(interval);
}, []);

// 2. Scroll trigger for popup
const [email, setEmail] = useState("");
const [showPopup, setShowPopup] = useState(false);
const blackExperienceRef = useRef(null);

// Only show popup once per session, never if already subscribed
useEffect(() => {
  const hasSubscribed = localStorage.getItem("ctda_has_subscribed");
  const hasSeenPopup = sessionStorage.getItem("ctda_seen_popup");

  if (hasSubscribed || hasSeenPopup) return;

  const handleScroll = () => {
    const section = blackExperienceRef.current;
    if (section) {
      const top = section.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.75;

      if (top < trigger) {
        setShowPopup(true);
        sessionStorage.setItem("ctda_seen_popup", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleSubscribe = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  localStorage.setItem("ctda_has_subscribed", "true");
  setShowPopup(false);
  setEmail("");
};


  const renderSection = (title, data, isGrid) => (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className={`${isGrid ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "flex flex-col gap-4"}`}>
        {data.map((item, index) => (
          <Link
            to={`/post/${item.slug}`}
            key={index}
            className={`${isGrid ? "bg-white rounded shadow hover:shadow-lg transition overflow-hidden" : "flex flex-row items-start gap-4 w-full max-w-md bg-white rounded shadow hover:shadow-lg transition overflow-hidden"}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`${isGrid ? "h-40 w-full object-cover" : "w-24 h-24 object-cover rounded-l"}`}
            />
            <div className={`${isGrid ? "p-2" : "p-2 flex-1"}`}>
              <p className="text-xs text-red-500 line-clamp-1">{item.date}</p>
              <h3 className="text-sm font-semibold mt-1 line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
  

  return (
    <main>
      <section className="container mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6">
      <div className="lg:w-3/4 relative rounded overflow-hidden h-[450px]">
  <img
    src={slides[currentIndex].image}
    alt="Slide"
    className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
  />
  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
    <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center px-6 leading-snug">
      {slides[currentIndex].caption}
    </h1>
  </div>
</div>

        <aside className="lg:w-1/4 grid gap-4">
          {[
            { text: "Music", link: "/music", image: img2 },
            { text: "Podcasts", link: "/podcasts", image: img4 },
            { text: "Culture", link: "/culture", image: img5 },
            { text: "Lifestyle", link: "/lifestyle", image: img7 }
          ].map((cat, i) => (
            <Link to={cat.link} key={i} className="relative h-24 block">
              <img src={cat.image} alt={cat.text} className="rounded w-full h-full object-cover" />
              <span className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center font-bold text-lg">{cat.text}</span>
            </Link>
          ))}
        </aside>
      </section>

      <AnimatePresence>
  {showPopup && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md text-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest updates, stories, and insights delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 border rounded text-sm"
          />
          <button
            onClick={handleSubscribe}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
          >
            Subscribe
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

     {/* BLACK EXPERIENCE SECTION */}
     <section ref={blackExperienceRef} className="bg-gray-200 py-10 mt-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-6 leading-relaxed">
            <strong>CTDA Media</strong> is where Black Black stories live boldly. 
            We’re a culture-rooted media brand that celebrates the voices, dreams,
             and everyday brilliance of Black people across the world. Through powerful 
             storytelling, interviews, fashion, and moments that matter, we shine a light
              on who we are, how we live, and where we’re headed. This is a home of connection, 
              community, and truth told our way.Welcome to CTDA! You’re in the right place..
          </p>
        </div>
      </section>

      {renderSection("Recent Releases", recentReleases, true)}
      {renderSection("Business", business, false)}
      {renderSection("Sports", sports, true)}
      {renderSection("Culture", culture, false)}
      {renderSection("Spotlight", spotlight, true)}

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-2">Our Key Media Metrics</h2>
          <p className="text-sm mb-8">A snapshot of our performance...</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">12K</div>
              <p className="text-sm mt-2">YouTube Subs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">150K</div>
              <p className="text-sm mt-2">Podcast Streams</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-400 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">300+</div>
              <p className="text-sm mt-2">Articles Published</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">25K</div>
              <p className="text-sm mt-2">Instagram Followers</p>
            </div>
          </div>
        </div>
      </section>

{/* SUBSCRIBE & FOLLOW SECTION */}
<section className="bg-gray-100 mt-6 py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Subscribe and Follow</h2>
    <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
      <a
        href="https://www.youtube.com/@ctdamongblacks"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
      >
        <FaYoutube className="text-2xl sm:text-4xl" />
      </a>
      <a
        href="https://open.spotify.com/show/1KibEPZONRPj2jlOrygxQK"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
      >
        <FaSpotify className="text-2xl sm:text-4xl" />
      </a>
      <a
        href="https://podcasts.apple.com/us/podcast/ctdamongblacks/id1674951670"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300"
      >
        <FaApple className="text-2xl sm:text-4xl" />
      </a>
      <a
        href="https://www.instagram.com/ctdamongblacks?igsh=MWIzc2locHRoNG56ag=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
      >
        <FaInstagram className="text-2xl sm:text-4xl" />
      </a>
    </div>
  </div>
</section>
    </main>
  );
};

export default LandingPage;
