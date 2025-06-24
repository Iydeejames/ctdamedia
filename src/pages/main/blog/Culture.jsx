import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/podcast/img1.jpg";
import img2 from "../../../assets/images/culture-page/img2.jpg";
import img3 from "../../../assets/images/culture-page/img3.jpg";
import img4 from "../../../assets/images/culture-page/img4.jpg";
import img5 from "../../../assets/images/culture-page/img5.jpg";

// Example blog data with publish date and slug
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
    const fetchCultureData = async () => {
      try {
        // Replace with real backend fetch later
        setCultureContent(fallbackCultureData);
      } catch (error) {
        console.error("Failed to fetch culture content:", error);
        setCultureContent(fallbackCultureData);
      }
    };

    fetchCultureData();
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
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-black mb-12 border-b-4 border-black inline-block pb-2">
        Culture & Heritage
      </h1>

      <div className="grid gap-12 md:grid-cols-2">
        {cultureContent.map((item) => (
          <Link
            to={`/culture/${item.slug}`}
            key={item.id}
            className="group bg-green-50 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2">
                Published: {formatDate(item.date)}
              </p>
              <h2 className="text-2xl font-semibold text-black mb-3 group-hover:text-green-700 transition-colors">
                {item.title}
              </h2>
              <p className="text-black text-sm flex-grow">{item.description}</p>
              <span className="mt-4 text-red-600 font-medium hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Culture;
