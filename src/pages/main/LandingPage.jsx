import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaSpotify, FaApple, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

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

// Slideshow + category data
const slides = [
  { image: img5, caption: "WELCOME TO CTDAMedia" },
  { image: img7, caption: "EXPERIENCE TRUE BLACK MEDIA" },
  { image: img4, caption: "UNCOVER STORIES THAT MATTER" },
];

const categoryImages = [img2, img7, img9, img10];

// Section layout data
const sections = [
  { title: "Recent Releases", layout: "grid" },
  { title: "Business", layout: "list" },
  { title: "Sports", layout: "grid" },
  { title: "Culture", layout: "list" },
  { title: "Spotlight", layout: "grid" },
];

const sectionData = {
  "Recent Releases": [
    { slug: "nollywood-stars", img: img11, date: "May 01, 2025", title: "Behind the Scenes of Nollywood's Rising Stars", excerpt: "An inside look into Nigeria's booming film industry." },
    { slug: "afrobeat-roots", img: img12, date: "May 02, 2025", title: "Exploring the Roots of Afrobeat in Lagos", excerpt: "The cultural and political influence of Afrobeat." },
    { slug: "startups-africa", img: img13, date: "May 03, 2025", title: "How Nigerian Startups Are Changing Africa", excerpt: "Tech innovation taking off across West Africa." },
    { slug: "fashion-trends", img: img14, date: "May 04, 2025", title: "Modern Fashion Trends from West Africa", excerpt: "Afrocentric style meets global runway trends." },
  ],
  Business: [
    { slug: "african-entrepreneurs", img: img15, date: "EPISODE 12", title: "How African Entrepreneurs Are Shaping Global Markets", excerpt: "Insights into emerging African business leaders." },
    { slug: "sme-funding", img: img16, date: "EPISODE 11", title: "Funding Challenges and Success Stories in Nigeria’s SME Sector", excerpt: "Navigating growth in small and medium enterprises." },
    { slug: "youth-startups", img: img17, date: "EPISODE 10", title: "Youth-Owned Startups That Are Disrupting the Status Quo", excerpt: "The next generation of tech and innovation." },
  ],
  Sports: [
    { slug: "african-athletes", img: img25, date: "Mar 10, 2025", title: "How African Athletes Are Redefining Global Sports", excerpt: "Champion stories and sports excellence from Africa." },
    { slug: "nigerian-football", img: img24, date: "Mar 11, 2025", title: "The Rise of Nigerian Football in the European Leagues", excerpt: "Success stories and influence abroad." },
    { slug: "basketball-africa", img: img22, date: "Mar 15, 2025", title: "Basketball Africa League’s Rising Fame", excerpt: "How basketball is shaping youth in Africa." },
  ],
  Culture: [
    { slug: "ai-startups", img: img18, date: "Jan 01, 2025", title: "The Rise of AI Startups in Africa", excerpt: "AI innovation shaping the continent’s future." },
    { slug: "nigeria-tech-hub", img: img19, date: "Jan 02, 2025", title: "Why Nigeria Is Becoming a Hub for Tech Innovation", excerpt: "Startups and funding growth in tech." },
    { slug: "african-art", img: img1, date: "Jan 05, 2025", title: "The Global Appeal of Contemporary African Art", excerpt: "Creative minds driving Africa’s identity." },
  ],
  Spotlight: [
    { slug: "afrobeat-global", img: img21, date: "EPISODE 15", title: "How Afrobeat Conquered the Global Charts", excerpt: "The sound and soul of a continent now global." },
    { slug: "nollywood-untold", img: img23, date: "EPISODE 14", title: "Nollywood: The Untold Stories Behind the Scenes", excerpt: "What it takes to thrive behind the camera." },
    { slug: "genz-media", img: img20, date: "EPISODE 13", title: "The Influence of Gen Z Creators on African Media", excerpt: "Content creation in the hands of youth." },
  ],
};

// Metrics
const metrics = [
  { label: "YouTube Subs", value: "12K", color: "bg-red-500" },
  { label: "Podcast Streams", value: "150K", color: "bg-green-500" },
  { label: "Articles Published", value: "300+", color: "bg-blue-500" },
  { label: "Instagram Followers", value: "25K", color: "bg-pink-500" },
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [scrollTime, setScrollTime] = useState(0);
  const blackExperienceRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const SectionCard = ({ title, layout, items }) => (
    <section className="container mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {layout === "list" ? (
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <Link to={`/post/${item.slug}`} key={index} className="flex gap-4 items-start max-w-xs bg-white rounded shadow p-2 hover:shadow-md transition">
              <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <p className="text-xs text-red-500">{item.date}</p>
                <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <Link
            to={`/post/${item.slug}`}
            key={index}
            className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-32 sm:h-36 md:h-40 object-cover"
            />
            <div className="p-3">
              <p className="text-xs text-red-500">{item.date}</p>
              <h3 className="text-sm font-semibold mt-1">{item.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      
      )}
    </section>
  );

  return (
    <div className="text-gray-800 font-sans relative">
      <AnimatePresence>
        {showPopup && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md text-center relative"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
              <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold">&times;</button>
              <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
              <p className="text-sm text-gray-600 mb-4">Get the latest updates, stories, and insights delivered straight to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border rounded text-sm" />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">Subscribe</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO + CATEGORIES */}
      <div className="container mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4 relative h-[525px] overflow-hidden shadow-lg">
          {slides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
              <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-3xl lg:text-5xl font-bold text-center px-4">{slide.caption}</h1>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:w-1/4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            {["Music", "Podcasts", "Culture", "Lifestyle"].map((cat, index) => (
  <div key={cat} className="relative mb-4 rounded overflow-hidden aspect-[3/1]">
    <img
      src={categoryImages[index]}
      alt={cat}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-bold">
      <a href={`/${cat.toLowerCase()}`} className="hover:underline">
        {cat}
      </a>
    </div>
  </div>
))}

          </div>
        </aside>
      </div>

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

      {/* SECTION CARDS */}
      {sections.map((section, index) => (
        <SectionCard key={index} title={section.title} layout={section.layout} items={sectionData[section.title]} />
      ))}

      {/* METRICS */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Key Media Metrics</h2>
          <p className="text-gray-500 mb-10 text-sm">A snapshot of our performance across core media delivery areas</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
