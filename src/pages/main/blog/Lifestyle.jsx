import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../../assets/images/lifestyle-page/img1.png";
import img2 from "../../../assets/images/lifestyle-page/img2.png";
import img3 from "../../../assets/images/lifestyle-page/img3.png";
import img4 from "../../../assets/images/lifestyle-page/img4.png";
import img5 from "../../../assets/images/lifestyle-page/img5.png";

const fallbackLifestyleData = [
  {
    id: 1,
    title: "Wellness Rituals to Reset Your Mind and Body",
    description:
      "Explore timeless self-care practices rooted in African wellness traditions — from herbal baths to grounding routines.",
    image: img1,
    slug: "wellness-rituals-mind-body",
    date: "2025-03-12",
  },
  {
    id: 2,
    title: "Modern Living with Cultural Flair",
    description:
      "Infuse your home and lifestyle with textures, colors, and crafts that celebrate African heritage in contemporary ways.",
    image: img2,
    slug: "modern-living-cultural-flair",
    date: "2025-04-05",
  },
  {
    id: 3,
    title: "Conscious Fashion: Style with Purpose",
    description:
      "Meet African designers prioritizing sustainability, community, and bold cultural storytelling in their collections.",
    image: img3,
    slug: "conscious-fashion-style",
    date: "2025-05-15",
  },
  {
    id: 4,
    title: "The Art of Slow Living in a Fast World",
    description:
      "Reclaim your time and reconnect with what matters through ancestral teachings about rhythm and balance.",
    image: img4,
    slug: "art-of-slow-living",
    date: "2025-06-01",
  },
];

const Lifestyle = () => {
  const [lifestyleContent, setLifestyleContent] = useState([]);

  useEffect(() => {
    setLifestyleContent(fallbackLifestyleData);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Mobile */}
        <div className="md:hidden relative h-72 w-full">
          <img
            src={img5}
            alt="Lifestyle Hero Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-800 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-2xl font-bold mb-2">Lifestyle & Wellness</h1>
            <p className="text-base font-semibold">
              Living intentionally through culture, fashion, and daily rituals.
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <div className="w-1/2 text-white">
            <h1 className="text-3xl font-extrabold mb-2">Lifestyle & Wellness</h1>
            <p className="text-base leading-snug">
              Curating conscious living through cultural pride, wellbeing, and artistic expression.
            </p>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="py-16 px-4 sm:px-8 lg:px-24">
        <motion.h2
          className="text-2xl sm:text-2xl md:text-3xl font-bold text-center text-black mb-12 inline-block pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Explore Our Lifestyle Features
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {lifestyleContent.map((item) => (
            <motion.div
              key={item.id}
              className="bg-green-50 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={`/lifestyle/${item.slug}`}>
                <div className="overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">
                    Published: {formatDate(item.date)}
                  </p>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-3 group-hover:text-rose-700 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-black flex-grow">
                    {item.description}
                  </p>
                  <span className="mt-4 text-red-600 font-medium text-sm sm:text-base hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
