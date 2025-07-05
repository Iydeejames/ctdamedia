import { useEffect, useState } from "react";
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
    category: "community",
    date: "2025-05-12",
  },
  {
    id: 2,
    title: "Healing Together: Mental Health Circles in African Towns",
    description:
      "Grassroots mental wellness initiatives are creating safe spaces for dialogue and healing across communities.",
    image: img2,
    slug: "mental-health-circles",
    category: "community",
    date: "2025-05-28",
  },
  {
    id: 3,
    title: "Feeding the Future: Urban Gardens Transforming Cities",
    description:
      "Discover how abandoned lots are becoming green hubs of nutrition, sustainability, and community pride.",
    image: img3,
    slug: "urban-gardens-community",
    category: "community",
    date: "2025-06-07",
  },
  {
    id: 4,
    title: "Beyond the Ball: Football as a Tool for Social Unity",
    description:
      "From refugee camps to remote villages, football is uniting people, breaking divides, and building peace.",
    image: img4,
    slug: "football-for-unity",
    category: "community",
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
      <div className="px-4 sm:px-8 lg:px-24 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Voices That Build Us
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {communityContent.map((item) => (
            <div
              key={item.id}
              className="bg-green-50 overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs uppercase font-semibold text-red-900 bg-red-200 px-3 py-1 rounded-full inline-block mb-3">
                    {formatDate(item.date)}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                </div>
                <Link
                  to={`/${item.category}/${item.slug}`}
                  className="text-gray-900 text-sm font-semibold hover:underline inline-flex items-center group mt-auto"
                >
                  Read Full Story
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
