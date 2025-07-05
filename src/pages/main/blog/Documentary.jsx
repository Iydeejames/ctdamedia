import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../../assets/images/documentary-page/img1.png";
import img2 from "../../../assets/images/documentary-page/img2.png";
import img3 from "../../../assets/images/documentary-page/img3.png";
import img4 from "../../../assets/images/documentary-page/img4.png";
import img5 from "../../../assets/images/documentary-page/img5.png";
import img6 from "../../../assets/images/documentary-page/img6.png";

const fallbackDocumentaryData = [
  {
    id: 1,
    title: "Voices of the Ancestors",
    description: "A cinematic journey into oral storytelling traditions and their role in preserving African heritage.",
    image: img1,
    slug: "voices-of-the-ancestors",
    category: "documentary",
    date: "2025-01-10",
  },
  {
    id: 2,
    title: "Urban Beats, Rural Roots",
    description: "Exploring the rhythm of modern African cities and how tradition lives on through sound and dance.",
    image: img2,
    slug: "urban-beats-rural-roots",
    category: "documentary",
    date: "2025-02-05",
  },
  {
    id: 3,
    title: "Threads of Identity",
    description: "From kente to ankara, this documentary weaves through the fabrics that tell Africa's story.",
    image: img3,
    slug: "threads-of-identity",
    category: "documentary",
    date: "2025-03-18",
  },
  {
    id: 4,
    title: "Fighting Silence",
    description: "A powerful exposé on underrepresented African communities reclaiming their space and voice.",
    image: img4,
    slug: "fighting-silence",
    category: "documentary",
    date: "2025-04-12",
  },
  {
    id: 5,
    title: "Sacred Landscapes",
    description: "A breathtaking visual tribute to Africa’s spiritual sites, rituals, and sacred natural wonders.",
    image: img5,
    slug: "sacred-landscapes",
    category: "documentary",
    date: "2025-05-03",
  },
  {
    id: 6,
    title: "Heroines of the Homeland",
    description: "Spotlighting African women leaders past and present who shaped history and inspire change.",
    image: img6,
    slug: "heroines-of-the-homeland",
    category: "documentary",
    date: "2025-06-07",
  },
];

const Documentary = () => {
  const [documentaryContent, setDocumentaryContent] = useState([]);

  useEffect(() => {
    setDocumentaryContent(fallbackDocumentaryData);
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
            alt="Documentary Hero Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-800 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-2xl font-bold mb-2">CTDA Documentaries</h1>
            <p className="text-base font-semibold">
              Discover real stories, bold truths, and cultural archives on film.
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <div className="w-1/2 text-white">
            <h1 className="text-3xl font-extrabold mb-2">CTDA Documentaries</h1>
            <p className="text-base leading-snug">
              Powerful storytelling from the African perspective — past, present, and future.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-24">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center text-black mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Documentary In Writings
        </motion.h2>

        {/* Desktop Layout */}
        <div className="hidden md:block space-y-12">
          {documentaryContent.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex items-center gap-6 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                to={`/${item.category}/${item.slug}`}
                className="w-1/2 block overflow-hidden rounded-lg shadow-lg group"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.03 }}
                />
              </Link>
              <div className="w-1/2">
                <p className="text-xs text-gray-500 mb-1">
                  Published: {formatDate(item.date)}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                <Link
                  to={`/${item.category}/${item.slug}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid gap-10">
          {documentaryContent.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={`/${item.category}/${item.slug}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">
                    Published: {formatDate(item.date)}
                  </p>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>
                  <span className="text-rose-600 font-semibold text-sm">
                    Read Full Story →
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

export default Documentary;
