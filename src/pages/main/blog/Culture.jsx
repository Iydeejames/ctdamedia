import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/podcast/img1.jpg";
import img2 from "../../../assets/images/culture-page/img2.jpg";
import img3 from "../../../assets/images/culture-page/img3.jpg";
import img4 from "../../../assets/images/culture-page/img4.jpg";
import img5 from "../../../assets/images/culture-page/img5.jpg";

const fallbackCultureData = [
  {
    id: 1,
    title: "Preserving Ancestral Traditions Through Art",
    description: "Discover how African artists are using visual and performance art...",
    image: img1,
    slug: "preserving-ancestral-traditions",
    date: "2024-12-10",
    category: "culture",
  },
  {
    id: 2,
    title: "The Rhythm of Resistance: Cultural Dances Reimagined",
    description: "Traditional dances aren't just art — they're acts of resistance...",
    image: img2,
    slug: "cultural-dances-reimagined",
    date: "2025-01-22",
    category: "culture",
  },
  {
    id: 3,
    title: "Fashion as a Cultural Archive",
    description: "Explore how indigenous fabrics, patterns, and garments...",
    image: img3,
    slug: "fashion-cultural-archive",
    date: "2025-02-11",
    category: "culture",
  },
  {
    id: 4,
    title: "Language Revival: Keeping Indigenous Tongues Alive",
    description: "Languages hold worlds. Meet the activists and educators...",
    image: img4,
    slug: "language-revival",
    date: "2025-03-05",
    category: "culture",
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
        {/* Mobile View */}
        <div className="md:hidden relative h-72 w-full">
          <img
            src={img5}
            alt="Culture Hero Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-2xl font-bold mb-2">Culture & Heritage</h1>
            <p className="text-base font-semibold">
              Exploring African identity, tradition, and modern expression.
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <div className="w-1/2 text-white">
            <h1 className="text-3xl font-extrabold mb-2">Culture & Heritage</h1>
            <p className="text-base leading-snug">
              Exploring African identity, ancestral traditions, and the vibrant cultural movements shaping tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Culture Posts Section */}
      <div className="py-16 px-4 sm:px-8 lg:px-24">
        <motion.h2
          className="text-2xl sm:text-2xl md:text-3xl font-bold text-center text-black mb-12 inline-block pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Featured Cultural Stories
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {cultureContent.map((item) => (
            <motion.div
              key={item.id}
              className="bg-green-50 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={`/${item.category}/${item.slug}`}>
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
    </section>
  );
};

export default Culture;
