import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/podcast/img1.jpg";
import img2 from "../../../assets/images/culture-page/img2.jpg";
import img3 from "../../../assets/images/culture-page/img3.jpg";
import img4 from "../../../assets/images/culture-page/img4.jpg";
import img5 from "../../../assets/images/culture-page/img5.jpg";

// Sample Data
const fallbackCultureData = [
  {
    id: 1,
    title: "Preserving Ancestral Traditions Through Art",
    description:
      "Discover how African artists are using visual and performance art to preserve their heritage, tell stories of resilience, and pass culture down through generations.",
    image: img1,
    slug: "preserving-ancestral-traditions",
    date: "2024-12-10",
  },
  {
    id: 2,
    title: "The Rhythm of Resistance: Cultural Dances Reimagined",
    description:
      "Traditional dances aren't just art — they're acts of resistance and identity. See how young creatives are reviving and reshaping cultural dances in a modern world.",
    image: img2,
    slug: "cultural-dances-reimagined",
    date: "2025-01-22",
  },
  {
    id: 3,
    title: "Fashion as a Cultural Archive",
    description:
      "Explore how indigenous fabrics, patterns, and garments tell the complex story of identity, colonization, and pride across African societies.",
    image: img3,
    slug: "fashion-cultural-archive",
    date: "2025-02-11",
  },
  {
    id: 4,
    title: "Language Revival: Keeping Indigenous Tongues Alive",
    description:
      "Languages hold worlds. Meet the activists and educators leading a movement to document and teach endangered African languages.",
    image: img4,
    slug: "language-revival",
    date: "2025-03-05",
  },
];

const Culture = () => {
  const [cultureContent, setCultureContent] = useState([]);

  useEffect(() => {
    setCultureContent(fallbackCultureData);
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <div className="bg-white dark:bg-white py-16 px-4 sm:px-8 lg:px-24">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-black mb-12  inline-block pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Culture & Heritage
      </motion.h1>

      <div className="grid gap-12 md:grid-cols-2">
        {cultureContent.map((item) => (
          <motion.div
            key={item.id}
            className="bg-green-50  shadow hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link to={`/culture/${item.slug}`}>
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
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-3 group-hover:text-green-700 transition-colors">
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
  );
};

export default Culture;
