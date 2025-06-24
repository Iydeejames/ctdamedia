import React, { useEffect, useState } from "react";
import img1 from "../../../assets/images/podcast/img1.jpg";
import img2 from "../../../assets/images/culture-page/img2.jpg";
import img3 from "../../../assets/images/culture-page/img3.jpg";
import img4 from "../../../assets/images/culture-page/img4.jpg";
import img5 from "../../../assets/images/culture-page/img5.jpg";

const fallbackCultureData = [
  {
    id: 1,
    title: "Preserving Ancestral Traditions Through Art",
    description:
      "Discover how African artists are using visual and performance art to preserve their heritage, tell stories of resilience, and pass culture down through generations.",
    image: img1,
  },
  {
    id: 2,
    title: "The Rhythm of Resistance: Cultural Dances Reimagined",
    description:
      "Traditional dances aren't just art — they're acts of resistance and identity. See how young creatives are reviving and reshaping cultural dances in a modern world.",
    image: img2,
  },
  {
    id: 3,
    title: "Fashion as a Cultural Archive",
    description:
      "Explore how indigenous fabrics, patterns, and garments tell the complex story of identity, colonization, and pride across African societies.",
    image: img3,
  },
  {
    id: 4,
    title: "Language Revival: Keeping Indigenous Tongues Alive",
    description:
      "Languages hold worlds. Meet the activists and educators leading a movement to document and teach endangered African languages.",
    image: img4,
  },
  {
    id: 5,
    title: "Food, Family, and Folklore: The Culture of the Kitchen",
    description:
      "From ancestral recipes to communal cooking, African kitchens are sacred spaces of memory, healing, and storytelling.",
    image: img5,
  },
];

const Culture = () => {
  const [cultureContent, setCultureContent] = useState([]);

  useEffect(() => {
    // Simulate fetch from backend
    const fetchCultureData = async () => {
      try {
        // Replace this with actual fetch logic in future
        // const response = await fetch("/api/culture");
        // const data = await response.json();
        // setCultureContent(data);
        setCultureContent(fallbackCultureData); // fallback
      } catch (error) {
        console.error("Failed to fetch culture content:", error);
        setCultureContent(fallbackCultureData);
      }
    };

    fetchCultureData();
  }, []);

  return (
    <div className="bg-white dark:white py-12 px-4 sm:px-8 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12 border-b-4 border-green-700 inline-block pb-2">
        Culture & Heritage
      </h1>

      <div className="grid gap-12">
        {cultureContent.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } gap-8 items-center bg-green-100  p-6 rounded-2xl shadow-md`}
          >
            <div className="flex-1 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover rounded-xl"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-black  mb-4">
                {item.title}
              </h2>
              <p className="text-black">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
