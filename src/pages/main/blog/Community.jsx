import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../../../assets/images/community-page/img1.png";
import img2 from "../../../assets/images/community-page/img2.png";
import img3 from "../../../assets/images/community-page/img3.png";
import img4 from "../../../assets/images/community-page/img4.png";

const fallbackCommunityData = [
  {
    id: 1,
    title: "Voices from the Ground: Youth Leading Local Change",
    description:
      "Meet the next generation of community activists making bold strides in education, food security, and public safety.",
    image: img1,
    slug: "youth-leading-change",
    date: "2025-05-12",
  },
  {
    id: 2,
    title: "Healing Together: Mental Health Circles in African Towns",
    description:
      "Grassroots mental wellness initiatives are creating safe spaces for dialogue and healing across communities.",
    image: img2,
    slug: "mental-health-circles",
    date: "2025-05-28",
  },
  {
    id: 3,
    title: "Feeding the Future: Urban Gardens Transforming Cities",
    description:
      "Discover how abandoned lots are becoming green hubs of nutrition, sustainability, and community pride.",
    image: img3,
    slug: "urban-gardens-community",
    date: "2025-06-07",
  },
  {
    id: 4,
    title: "Beyond the Ball: Football as a Tool for Social Unity",
    description:
      "From refugee camps to remote villages, football is uniting people, breaking divides, and building peace.",
    image: img4,
    slug: "football-for-unity",
    date: "2025-06-15",
  },
];

const Community = () => {
  const [communityContent, setCommunityContent] = useState([]);

  useEffect(() => {
    setCommunityContent(fallbackCommunityData);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="bg-white text-gray-900">
      {/* Hero */}
      <div className="relative text-white">
        <div className="md:hidden relative h-72 w-full">
          <img
            src={img4}
            alt="Community Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-2xl font-bold mb-2">Our Community</h1>
            <p className="text-base font-semibold">
              Uplifting stories, neighborhood heroes, and collective power in action.
            </p>
          </div>
        </div>

        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <div className="w-1/2 text-white">
            <h1 className="text-3xl font-extrabold mb-2">Our Community</h1>
            <p className="text-base leading-snug">
              From small wins to social revolutions — discover how communities are shaping the future together.
            </p>
          </div>
        </div>
      </div>

      {/* Community Stories */}
      <div className="px-4 sm:px-8 lg:px-24 py-20 space-y-24">
        {communityContent.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col-reverse ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Text */}
            <div className="md:w-1/2">
              <div className="bg-emerald-100 inline-block px-3 py-1 text-xs uppercase font-semibold text-emerald-800 mb-4 rounded-full">
                {formatDate(item.date)}
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>
              <Link
                to={`/community/${item.slug}`}
                className="inline-flex items-center text-emerald-700 font-semibold hover:underline group"
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

export default Community;
