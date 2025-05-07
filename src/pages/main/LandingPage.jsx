import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FaYoutube, FaSpotify, FaApple, FaInstagram } from "react-icons/fa";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import vid from "../../assets/videos/vid.mp4";

const categoryImages = [img2, img3, img4, img5];
const featuredImages = [img6, img7, img1, img2];
const blockImages = [img3, img4, img5, img6, img7, img1];

const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
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
            {["Business", "Technology", "Entertainment", "Sports"].map((cat, index) => (
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
          <h2 className="text-2xl font-bold">Featured</h2>
          <a href="#" className="text-sm text-blue-500 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredImages.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} className="w-full h-48 object-cover rounded" alt={`featured-${index}`} />
              <div className="absolute inset-0 bg-black bg-opacity-40 text-white p-4 flex flex-col justify-end">
                <p className="text-sm">Technology / January 01, 2045</p>
                <h3 className="text-lg font-semibold leading-tight">Sanctus amet sed ipsum lorem</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {["Business", "Technology", "Entertainment", "Sports"].map((section, secIndex) => {
  const itemCount = section === "Technology" || section === "Sports" ? 2 : 3;

  return (
    <motion.section
      key={section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 mt-10"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{section}</h2>
        <div className="flex gap-2">
          <button className="bg-gray-200 px-2">◀</button>
          <button className="bg-gray-200 px-2">▶</button>
        </div>
      </div>

      {["Business", "Entertainment"].includes(section) ? (
        <div className="space-y-4">
          {[...Array(itemCount)].map((_, item) => {
            const imgIndex = (secIndex * 3 + item) % blockImages.length;
            return (
              <div key={item} className="flex gap-4 items-start">
                <img
                  src={blockImages[imgIndex]}
                  alt="post"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold text-sm md:text-base hover:underline cursor-pointer">
                    Sample article title for {section} {item + 1}
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">EPISODE {itemCount - item + 9}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className={`grid gap-4 ${
            itemCount === 2
              ? "grid-cols-2 justify-center"
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
          }`}
        >
          {[...Array(itemCount)].map((_, item) => {
            const imgIndex = (secIndex * 3 + item) % blockImages.length;
            return (
              <div key={item} className="bg-white shadow p-2 rounded">
                <img
                  src={blockImages[imgIndex]}
                  alt="post"
                  className="w-full h-40 object-cover rounded"
                />
                <p className="text-xs text-red-500 mt-2">{section} / January 01, 2045</p>
                <h4 className="font-semibold mt-1">Sanctus amet sed ipsum lorem</h4>
              </div>
            );
          })}
        </div>
      )}
    </motion.section>
  );
})}


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
        className="container mx-auto px-4 mt-10 mb-10 flex justify-center"
      >
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Watch Now</h2>
          <video controls className="w-full h-[500px] object-cover rounded shadow">
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
