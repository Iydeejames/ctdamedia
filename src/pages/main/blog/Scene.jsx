import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../../assets/images/scene-page/img1.png";
import img2 from "../../../assets/images/scene-page/img2.png";
import img3 from "../../../assets/images/scene-page/img3.png";
import img5 from "../../../assets/images/scene-page/img5.png";

const fallbackSceneData = [
  {
    id: 1,
    title: "Behind the Velvet Rope: Exclusive Looks from AfroFashion Night",
    description:
      "Get access to the glitz, the glam, and the backstage chaos from the most anticipated fashion night in Lagos.",
    image: img2,
    slug: "afrofashion-night-behind-scenes",
    date: "2025-05-15",
  },
  {
    id: 2,
    title: "Moments Before the Mic: Spoken Word Stars in Action",
    description:
      "We caught rising poetry talents as they warmed up, rehearsed, and channeled raw emotion into powerful words.",
    image: img1,
    slug: "spoken-word-behind-mic",
    date: "2025-05-22",
  },
  {
    id: 3,
    title: "Red Carpet Recap: Highlights from the Creative Awards 2025",
    description:
      "From daring fashion choices to heartfelt moments, here’s everything that went down on the red carpet.",
    image: img1,
    slug: "creative-awards-red-carpet",
    date: "2025-06-01",
  },
  {
    id: 4,
    title: "Street Pulse: What the Crowd Wore to AfroBeat Fest",
    description:
      "Candid photos of festival-goers and their Afrocentric drip. Style, color, and culture — unfiltered.",
    image: img3,
    slug: "afrobeat-fest-street-style",
    date: "2025-06-10",
  },
];

const Scene = () => {
  const [sceneContent, setSceneContent] = useState([]);

  useEffect(() => {
    setSceneContent(fallbackSceneData);
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
     <section className="bg-white text-gray-900">
     {/* Hero */}
     <div className="relative text-white">
       <div className="md:hidden relative h-72 w-full">
         <img
           src={img5}
           alt="Scene Hero"
           className="absolute inset-0 w-full h-full object-cover opacity-60"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
           <h1 className="text-2xl font-bold mb-2">On the Scene</h1>
           <p className="text-base font-semibold">
             Candid moments. Bold fashion. Real culture — captured live.
           </p>
         </div>
       </div>

       <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
       <div className="w-1/2 text-white">
           <h1 className="text-3xl font-extrabold mb-2">On the Scene</h1>
           <p className="text-base leading-snug">
             From red carpets to underground art shows — discover how culture comes alive in real time.
           </p>
         </div>
       </div>
     </div>

     {/* New Magazine Style Section */}
     <div className="px-4 sm:px-8 lg:px-24 py-20 space-y-24">
     <motion.h2
          className="text-2xl sm:text-2xl md:text-3xl font-bold text-center text-black mb-2 inline-block "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          What's On The Scene?
        </motion.h2>
       {sceneContent.map((item, index) => (
         <div
           key={item.id}
           className={`flex flex-col-reverse ${
             index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
           } items-center gap-8`}
         >
           {/* Text Content */}
           <div className="md:w-1/2">
             <div className="bg-red-100 inline-block px-3 py-1 text-xs uppercase font-semibold text-red-800 mb-4 rounded-full">
               {formatDate(item.date)}
             </div>
             <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
               {item.title}
             </h2>
             <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
               {item.description}
             </p>
             <Link
               to={`/scene/${item.slug}`}
               className="inline-flex items-center text-red-700 font-semibold hover:underline group"
             >
               Read Full Story{" "}
               <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                 →
               </span>
             </Link>
           </div>

           {/* Image */}
           <div className="md:w-1/2 w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
             <img
               src={item.image}
               alt={item.title}
               className="w-full h-80 object-cover rounded-lg"
             />
           </div>
         </div>
       ))}
     </div>
   </section>
  );
};

export default Scene;
