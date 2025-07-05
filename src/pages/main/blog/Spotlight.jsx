import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../../assets/images/spotlight-page/img1.jpg";
import img2 from "../../../assets/images/spotlight-page/img2.jpg";
import img3 from "../../../assets/images/spotlight-page/img3.jpg";
import img4 from "../../../assets/images/spotlight-page/img4.jpg";

const spotlightContent = [
  {
    title: "Voices of the Diaspora",
    slug: "voices-of-the-diaspora",
    image: img1,
    description: "Exploring the global impact of African heritage.",
    date: "June 12, 2025",
    category: "spotlight",
  },
  {
    title: "Afrobeats Uncovered",
    slug: "afrobeats-uncovered",
    image: img2,
    description: "A deep dive into Africa’s musical revolution.",
    date: "June 10, 2025",
    category: "spotlight",
  },
  {
    title: "Legacy of the Lens",
    slug: "legacy-of-the-lens",
    image: img3,
    description: "Celebrating Black photographers shaping narratives.",
    date: "June 8, 2025",
    category: "spotlight",
  },
  {
    title: "Untold Black Stories",
    slug: "untold-black-stories",
    image: img4,
    description: "Stories that history books left behind.",
    date: "June 5, 2025",
    category: "spotlight",
  },
  {
    title: "Cultural Icons",
    slug: "cultural-icons",
    image: img1,
    description: "Honoring the faces and voices of a generation.",
    date: "June 3, 2025",
    category: "spotlight",
  },
  {
    title: "Behind the Rhythm",
    slug: "behind-the-rhythm",
    image: img2,
    description: "Inside the creative process of Black musicians.",
    date: "June 1, 2025",
    category: "spotlight",
  },
  {
    title: "Spotlight Shorts",
    slug: "spotlight-shorts",
    image: img3,
    description: "Powerful stories told in under 5 minutes.",
    date: "May 29, 2025",
    category: "spotlight",
  },
  {
    title: "Generation Bold",
    slug: "generation-bold",
    image: img4,
    description: "Young Black voices breaking boundaries.",
    date: "May 27, 2025",
    category: "spotlight",
  },
];

const Spotlight = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Mobile View */}
        <div className="md:hidden relative h-72 w-full">
          <img
            src={img3}
            alt="Spotlight Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-2"
            >
              SPOTLIGHT
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base font-light"
            >
              Discover bold stories and Black brilliance in motion — all in one place.
            </motion.p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <motion.div
            className="w-1/2 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-extrabold mb-2">SPOTLIGHT</h1>
            <p className="text-base font-light leading-snug">
              Discover the powerful stories, fearless creators, and bold narratives shaping today’s Black experience. Our Spotlight section brings you original series, documentaries, and visual deep dives into culture, art, music, and movements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Spotlight Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          LATEST FROM SPOTLIGHT
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {spotlightContent.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow hover:shadow-lg transition duration-300 rounded overflow-hidden"
            >
              <Link to={`/${item.category}/${item.slug}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-3"
                >
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="font-semibold text-sm md:text-base mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-600 hidden md:block">
                    {item.description}
                  </p>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Spotlight;
