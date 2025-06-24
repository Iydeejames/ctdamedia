import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/spotlight-page/img1.jpg";
import img2 from "../../../assets/images/spotlight-page/img2.jpg";
import img3 from "../../../assets/images/spotlight-page/img3.jpg";
import img4 from "../../../assets/images/spotlight-page/img4.jpg";

const spotlightContent = [
  { title: "Voices of the Diaspora", slug: "voices-of-the-diaspora", image: img1 },
  { title: "Afrobeats Uncovered", slug: "afrobeats-uncovered", image: img2 },
  { title: "Legacy of the Lens", slug: "legacy-of-the-lens", image: img3 },
  { title: "Untold Black Stories", slug: "untold-black-stories", image: img4 },
  { title: "Cultural Icons", slug: "cultural-icons", image: img1 },
  { title: "Behind the Rhythm", slug: "behind-the-rhythm", image: img2 },
  { title: "Spotlight Shorts", slug: "spotlight-shorts", image: img3 },
  { title: "Generation Bold", slug: "generation-bold", image: img4 },
];

const Spotlight = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section - compact height */}
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
      <h1 className="text-3xl  font-bold mb-2">SPOTLIGHT</h1>
      <p className="text-base font-light">
        Discover bold stories and Black brilliance in motion — all in one place.
      </p>
    </div>
  </div>

  {/* Desktop View (reduced height) */}
  <div className="hidden md:flex bg-gradient-to-r from-green-700 via-green-900 to-white h-72 items-center px-6 md:px-12">
    <div className="w-1/2 text-white">
      <h1 className="text-3xl font-extrabold mb-2">SPOTLIGHT</h1>
      <p className="text-base font-light leading-snug">
        Discover the powerful stories, fearless creators, and bold narratives shaping today’s Black experience. Our Spotlight section brings you original series, documentaries, and visual deep dives into culture, art, music, and movements.
      </p>
    </div>
    <div className="w-1/2">
      <img
        src={img3}
        alt="Spotlight Banner"
        className=" shadow-lg w-full h-60 object-cover"
      />
    </div>
  </div>
</div>


      {/* Spotlight Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          LATEST FROM SPOTLIGHT
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {spotlightContent.map((item, index) => (
            <Link
              to={`/spotlight/${item.slug}`}
              key={index}
              className="bg-white  shadow hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className=" w-full h-60 object-cover"
              />
              <div className="p-3">
                <p className="text-center font-semibold text-sm md:text-base">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Spotlight;
