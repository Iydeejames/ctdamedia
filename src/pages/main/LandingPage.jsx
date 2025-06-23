import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaYoutube, FaSpotify, FaApple, FaInstagram } from "react-icons/fa";

import img1 from "../../assets/images/hero-page/img1.jpg";
import img2 from "../../assets/images/hero-page/img2.jpg";
import img3 from "../../assets/images/hero-page/img3.jpg";
import img4 from "../../assets/images/hero-page/img4.jpg";
import img5 from "../../assets/images/hero-page/img5.jpg";
import img6 from "../../assets/images/hero-page/img6.jpg";
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

import vid from "../../assets/videos/vid.mp4";
import vid3 from "../../assets/videos/vid3.mp4";

const categoryImages = [img2, img7, img9, img10];

const slides = [
  { image: img5, caption: "WELCOME TO CTDAMedia" },
  { image: img7, caption: "EXPERIENCE TRUE BLACK MEDIA" },
  { image: img4, caption: "UNCOVER STORIES THAT MATTER" },
];

const recentReleases = [
  { img: img11, category: "spotlight", date: "May 01, 2025", title: "Behind the Scenes of Nollywood's Rising Stars", content: "Full article content for release 1." },
  { img: img12, category: "Culture", date: "May 02, 2025", title: "Exploring the Roots of Afrobeat in Lagos", content: "Full article content for release 2." },
  { img: img13, category: "Tech", date: "May 03, 2025", title: "How Nigerian Startups Are Changing Africa", content: "Full article content for release 3." },
  { img: img14, category: "Lifestyle", date: "May 04, 2025", title: "Modern Fashion Trends from West Africa", content: "Full article content for release 4." }
];

const businessItems = [
  { img: img15, title: "How African Entrepreneurs Are Shaping Global Markets", date: "EPISODE 12", content: "Full article content for business 1." },
  { img: img16, title: "Funding Challenges and Success Stories in Nigeria’s SME Sector", date: "EPISODE 11", content: "Full article content for business 2." },
  { img: img17, title: "Youth-Owned Startups That Are Disrupting the Status Quo", date: "EPISODE 10", content: "Full article content for business 3." }
];

const techItems = [
  { img: img18, title: "The Rise of AI Startups in Africa", date: "Technology / January 01, 2025", content: "Full article content for tech 1." },
  { img: img19, title: "Why Nigeria Is Becoming a Hub for Tech Innovation", date: "Technology / January 02, 2025", content: "Full article content for tech 2." }
];

const spotlightItems = [
  { img: img21, title: "How Afrobeat Conquered the Global Charts", date: "EPISODE 15", content: "Full article content for spotlight 1." },
  { img: img23, title: "Nollywood: The Untold Stories Behind the Scenes", date: "EPISODE 14", content: "Full article content for spotlight 2." },
  { img: img20, title: "The Influence of Gen Z Creators on African Media", date: "EPISODE 13", content: "Full article content for spotlight 3." }
];

const sportsItems = [
  { img: img25, title: "How African Athletes Are Redefining Global Sports", date: "Sports / March 10, 2025", content: "Full article content for sports 1." },
  { img: img24, title: "The Rise of Nigerian Football in the European Leagues", date: "Sports / March 11, 2025", content: "Full article content for sports 2." }
];

const metrics = [  
  { label: "Audience Reach", value: "100%", color: "bg-blue-600" },
  { label: "Content Reliability", value: "98%", color: "bg-green-600" },
  { label: "Engagement Rate", value: "85%", color: "bg-yellow-500" },
  { label: "Update Frequency", value: "70%", color: "bg-red-500" },
];

const videoList = [
  {
    src: vid,
    title: "Inside CTDA Culture",
    description: "Behind the scenes with creators and thinkers",
  },
  {
    src: vid3,
    title: "Creative Highlights",
    description: "This week's top artistic moments from CTDA",
  },
];

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [scrollTime, setScrollTime] = useState(0);
  const blackExperienceRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const allItems = [...recentReleases, ...businessItems, ...techItems, ...spotlightItems, ...sportsItems];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = allItems.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const SectionCard = ({ title, data }) => (
    <section className="container mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className={
        title === "Technology" || title === "Sports"
          ? "grid grid-cols-2 gap-4"
          : title === "Recent Releases"
          ? "grid grid-cols-2 md:grid-cols-4 gap-4"
          : "space-y-4"
      }>
        {data.map((item, index) => (
          <div
            key={index}
            id={item.title.replace(/\s+/g, "-").toLowerCase()}
            className="bg-white rounded shadow p-2"
          >
            <img
              src={item.img}
              alt={item.title}
              className={
                title === "Technology" || title === "Sports" || title === "Recent Releases"
                  ? "w-full h-40 object-cover rounded"
                  : "w-20 h-20 object-cover rounded"
              }
            />
            <div className={title === "Technology" || title === "Sports" || title === "Recent Releases" ? "mt-2" : ""}>
              <p className="text-xs text-red-500 mt-1">{item.date}</p>
              <h4 className="font-semibold mt-1 text-sm md:text-base">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      if (scrollTime === 0) {
        timeout = setTimeout(() => {
          setScrollTime(10);
        }, 10000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTime]);

  useEffect(() => {
    if (scrollTime < 10) return;
    const handleScrollToSection = () => {
      const section = blackExperienceRef.current;
      if (section) {
        const { top } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top <= windowHeight - 100) {
          setShowPopup(true);
          window.removeEventListener("scroll", handleScrollToSection);
        }
      }
    };
    window.addEventListener("scroll", handleScrollToSection);
    return () => window.removeEventListener("scroll", handleScrollToSection);
  }, [scrollTime]);


  return (

    <div className="text-gray-800 font-sans relative">
      <div className="container mx-auto px-4 mt-6">
  <div className="relative w-full max-w-xl mx-auto">
  <div className="w-full bg-gray-50 shadow-sm py-3">
  <div className="container mx-auto px-4">
    <div className="relative w-full max-w-md mx-auto">
  <input
  type="text"
  placeholder="🔍 Search articles..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full px-3 py-1.5 border border-gray-300 rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400"
/>
</div>
  </div>
</div>

    {searchResults.length > 0 && (
      <ul className="absolute z-40 bg-white border border-gray-300 w-full mt-1 rounded shadow max-h-60 overflow-y-auto">
        {searchResults.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            onClick={() => {
              const section = document.getElementById(
                item.title.replace(/\s+/g, "-").toLowerCase()
              );
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              setSearchTerm("");
              setSearchResults([]);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

      {/* AnimatePresence handles animation mount/unmount */}
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
              transition={{ duration: 0.4 }}
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
                  className="flex-1 px-4 py-2 border rounded text-sm"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6"
      >
 <div className="lg:w-3/4 relative h-[525px] overflow-hidden  shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
           loading="lazy"
            src={slide.image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl lg:text-5xl font-bold text-center px-4">
              {slide.caption}
            </h1>
          </div>
        </div>
      ))}
    </div>

        <aside className="lg:w-1/4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            {["Music", "Podcasts", "Culture", "Documentary"].map((cat, index) => (
              <div key={cat} className="relative mb-4">
                <img src={categoryImages[index]} alt={cat} className="w-full h-24 object-cover rounded" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-bold">
                  <a href={`/${cat.toLowerCase()}`} className="hover:underline">
                    {cat}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </motion.div>

      {/* BLACK EXPERIENCE SECTION */}
      <motion.section
        ref={blackExperienceRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-200 py-10 mt-12"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-6 leading-relaxed">
            <strong>CTDA Media</strong> is where Black stories live boldly. We’re a culture-rooted media brand that celebrates the voices, dreams, and everyday brilliance of Black people across the world.
            <br /><br />
            Through powerful storytelling, interviews, fashion, and moments that matter, we shine a light on who we are, how we live, and where we’re headed. This is a home of connection, community, and truth told our way.
            <br /><br />
            Welcome to CTDA! You’re in the right place.
          </p>
        </div>
      </motion.section>

{/* FEATURED SECTION */}
<div className="text-gray-800 font-sans">
  
<SectionCard title="Recent Releases" data={recentReleases} />
      <SectionCard title="Business" data={businessItems} />
      <SectionCard title="Technology" data={techItems} />
      <SectionCard title="Spotlight" data={spotlightItems} />
      <SectionCard title="Sports" data={sportsItems} />

    </div>



      {/* SUBSCRIBE & FOLLOW SECTION */}
      <section className="bg-gray-100 mt-6 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Subscribe and Follow</h2>
          <div className="flex justify-center gap-6">
            <a href="https://www.youtube.com/@ctdamongblacks" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300">
              <FaYoutube className="text-4xl" />
            </a>
            <a href="https://open.spotify.com/show/1KibEPZONRPj2jlOrygxQK" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300">
              <FaSpotify className="text-4xl" />
            </a>
            <a href="https://podcasts.apple.com/us/podcast/ctdamongblacks/id1674951670" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300">
              <FaApple className="text-4xl" />
            </a>
            <a href="https://www.instagram.com/ctdamongblacks?igsh=MWIzc2locHRoNG56ag==" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300">
              <FaInstagram className="text-4xl" />
            </a>
          </div>
        </div>
      </section>

     {/* VIDEO SECTION */}
     <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.7 }}
  className="container mx-auto px-4 mt-16 mb-20"
>
  <div className=" shadow-xl p-6 text-center bg-white">
    <h2 className="text-3xl font-bold mb-2 text-black">Recent interviews</h2>
    <p className="text-gray-600 text-sm mb-6 max-w-xl mx-auto">
      Powerful moments captured this week. Explore the stories behind the lens.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videoList.map((video, index) => (
        <div
          key={index}
          className="relative overflow-hidden shadow-lg bg-black "
        >
          <div
            className="relative w-full cursor-pointer"
            onClick={() => setPlayingIndex(index)}
          >
            <video
              className="w-full h-[400px] object-fill rounded-xl"
              muted
              playsInline
              controls={playingIndex === index}
              autoPlay={playingIndex === index}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Icon Overlay (only when not playing) */}
            {playingIndex !== index && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full shadow-xl">
                  <FaPlay className="text-2xl" />
                </div>
              </div>
            )}
          </div>

          {/* Captions – always visible */}
          <div className="p-4 text-left">
            <h3 className="text-lg font-semibold text-white">{video.title}</h3>
            <p className="text-sm text-gray-300">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</motion.section>



<section className="py-16 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Key Media Metrics</h2>
        <p className="text-gray-500 mb-10 text-sm">A snapshot of our performance across core media delivery areas</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-center items-center">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-bold ${metric.color}`}>
                {metric.value}
              </div>
              <p className="mt-3 text-sm font-medium text-gray-800">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
</div>
  );
};

export default LandingPage;
