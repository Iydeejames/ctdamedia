import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FaYoutube, FaSpotify, FaApple, FaInstagram } from "react-icons/fa";

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

const categoryImages = [img2, img7, img9, img10];
const featuredImages = [img6, img7, img1, img2];
// const blockImages = [img3, img4, img5, img6, img7, img1];

const metrics = [
  { label: "Audience Reach", value: "100%", color: "bg-blue-600" },
  { label: "Content Reliability", value: "98%", color: "bg-green-600" },
  { label: "Engagement Rate", value: "85%", color: "bg-yellow-500" },
  { label: "Update Frequency", value: "70%", color: "bg-red-500" },
]

const featuredCards = [
  {
    img: img11,
    category: "Entertainment",
    date: "May 01, 2025",
    title: "Behind the Scenes of Nollywood's Rising Stars"
  },
  {
    img: img12,
    category: "Culture",
    date: "May 02, 2025",
    title: "Exploring the Roots of Afrobeat in Lagos"
  },
  {
    img: img13,
    category: "Tech",
    date: "May 03, 2025",
    title: "How Nigerian Startups Are Changing Africa"
  },
  {
    img: img14,
    category: "Lifestyle",
    date: "May 04, 2025",
    title: "Modern Fashion Trends from West Africa"
  }
];


const LandingPage = () => {
  return (
    <div className=" text-gray-800 font-sans">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6"
      >
<div className="lg:w-3/4 relative h-[525px]">
  {/* Image */}
  <img src={img5} alt="hero" className="w-full h-full object-cover" />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-70"></div>

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-3xl lg:text-5xl font-bold text-center px-4">
      WELCOME TO CTDAmongBlacks
    </h1>
  </div>
</div>


        {/* SIDEBAR */}
        <aside className="lg:w-1/4">
          <div className="bg-white p-4 shadow rounded">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Categories</h2>
            </div>
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-200 py-10 mt-12"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Black Experience</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-6 leading-relaxed">
            <strong>CTDAmongBlacks</strong> is more than just a podcast, it's a dynamic media company powered by a talented team, many of whom were born in Nigeria but have had the privilege of living both in and outside the country.
            <br /><br />
            At CTDA, we focus on music, movies, culture, and everyday life, delivering it straight to your feed via our social media platforms. Whether through captivating captions or insightful discussions from our amazing host and co-host, we share perspectives while welcoming inspiring guests from all walks of life.
            <br /><br />
            Curious about the name? CTDA stands for "Connecting the Dots Among Blacks." Follow us to stay connected!
          </p>
          <a
            href="https://ctdamongblacks.com/entertainment/who-do-you-think-deserves-the-headies-digital-artiste-of-the-year-round-3-in-the-arena/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700 transition"
          >
            <FaPlay /> Start Listening
          </a>
        </div>
      </motion.section>

{/* FEATURED SECTION */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="container mx-auto px-4 mt-10"
> 
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold">Latest Episodes</h2>
   {/* <a href="#" className="text-sm text-blue-500 hover:underline">View All</a> */}
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {featuredCards.map((item, index) => (
      <div key={index} className="relative">
<img src={item.img} className="w-full h-48 object-cover rounded" alt={item.title} />
<div className="absolute inset-0 bg-black bg-opacity-40 text-white p-4 flex flex-col justify-end">
          <p className="text-sm">{item.category} / {item.date}</p>
          <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
        </div>
      </div>
    ))}
  </div>
</motion.section>

{/* BUSINESS SECTION */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="container mx-auto px-4 mt-10"
>
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold">Business</h2>
  </div>
  <div className="space-y-4">
    <div className="flex gap-4 items-start">
      <img src={img15} alt="post" className="w-20 h-20 object-cover rounded" />
      <div>
        <h4 className="font-semibold text-sm md:text-base hover:underline cursor-pointer">
          How African Entrepreneurs Are Shaping Global Markets
        </h4>
        <p className="text-gray-500 text-xs mt-1">EPISODE 12</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <img src={img16} alt="post" className="w-20 h-20 object-cover rounded" />
      <div>
        <h4 className="font-semibold text-sm md:text-base hover:underline cursor-pointer">
          Funding Challenges and Success Stories in Nigeria’s SME Sector
        </h4>
        <p className="text-gray-500 text-xs mt-1">EPISODE 11</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <img src={img17} alt="post" className="w-20 h-20 object-cover rounded" />
      <div>
        <h4 className="font-semibold text-sm md:text-base hover:underline cursor-pointer">
          Youth-Owned Startups That Are Disrupting the Status Quo
        </h4>
        <p className="text-gray-500 text-xs mt-1">EPISODE 10</p>
      </div>
    </div>
  </div>
</motion.section>

{/* TECHNOLOGY SECTION */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="container mx-auto px-4 mt-10"
>
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold">Technology</h2>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-white shadow p-2 rounded">
      <img src={img18} alt="post" className="w-full h-40 object-cover rounded" />
      <p className="text-xs text-red-500 mt-2">Technology / January 01, 2025</p>
      <h4 className="font-semibold mt-1">The Rise of AI Startups in Africa</h4>
    </div>
    <div className="bg-white shadow p-2 rounded">
      <img src={img19} alt="post" className="w-full h-40 object-cover rounded" />
      <p className="text-xs text-red-500 mt-2">Technology / January 02, 2025</p>
      <h4 className="font-semibold mt-1">Why Nigeria Is Becoming a Hub for Tech Innovation</h4>
    </div>
  </div>
</motion.section>

{/* ENTERTAINMENT SECTION */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="container mx-auto px-4 mt-10"
>
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold">Entertainment Gists</h2>
  </div>
  <div className="space-y-4">
    <div className="flex gap-4 items-start">
      <img src={img21} alt="post" className="w-20 h-20 object-cover rounded" />
      <div>
        <h4 className="font-semibold text-sm md:text-base hover:underline cursor-pointer">
          How Afrobeat Conquered the Global Charts
        </h4>
        <p className="text-gray-500 text-xs mt-1">EPISODE 15</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <img src={img23} alt="post" className="w-20 h-20 object-cover rounded" />
      <div>
        <h4 className="font-semibold text-sm md:text-base hover:underline cursor-pointer">
          Nollywood: The Untold Stories Behind the Scenes
        </h4>
        <p className="text-gray-500 text-xs mt-1">EPISODE 14</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <img src={img20} alt="post" className="w-20 h-20 object-cover rounded" />
      <div>
        <h4 className="font-semibold text-sm md:text-base hover:underline cursor-pointer">
          The Influence of Gen Z Creators on African Media
        </h4>
        <p className="text-gray-500 text-xs mt-1">EPISODE 13</p>
      </div>
    </div>
  </div>
</motion.section>

{/* SPORTS SECTION */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="container mx-auto px-4 mt-10"
>
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold">Sports</h2>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-white shadow p-2 rounded">
      <img src={img25} alt="post" className="w-full h-40 object-cover rounded" />
      <p className="text-xs text-red-500 mt-2">Sports / March 10, 2025</p>
      <h4 className="font-semibold mt-1">How African Athletes Are Redefining Global Sports</h4>
    </div>
    <div className="bg-white shadow p-2 rounded">
      <img src={img24} alt="post" className="w-full h-40 object-cover rounded" />
      <p className="text-xs text-red-500 mt-2">Sports / March 11, 2025</p>
      <h4 className="font-semibold mt-1">The Rise of Nigerian Football in the European Leagues</h4>
    </div>
  </div>
</motion.section>




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
  className="container mx-auto px-4 mt-16 mb-16"
>
  <div className=" rounded-xl shadow-md p-6 flex flex-col items-center text-center">
    <h2 className="text-2xl font-bold mb-3 text-gray-800">Visual Of The Week</h2>
    <p className="text-gray-600 text-sm mb-6 max-w-xl">
      Short text describing the video
    </p>

    <div className="w-full max-w-2xl rounded overflow-hidden shadow-sm">
      <video
        controls
        className="w-full h-74 md:h-82 object-cover rounded"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
