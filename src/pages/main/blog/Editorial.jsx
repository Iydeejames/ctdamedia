import React from "react";
import { motion } from "framer-motion";
import {
  FaUserEdit,
  FaPenNib,
  FaCheckCircle,
  FaBullhorn,
} from "react-icons/fa";

import editorialHero from "../../../assets/images/editorial-page/img3.jpg";
import team1 from "../../../assets/images/editorial-page/img1.jpg";
import team2 from "../../../assets/images/editorial-page/img2.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SectionHeader = ({ icon: Icon, title }) => (
  <motion.div
    className="text-center mb-8"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex justify-center items-center gap-2 text-green-800 text-2xl font-semibold">
      <Icon />
      <h2>{title}</h2>
    </div>
    <div className="w-12 h-1 bg-green-700 mx-auto mt-2 rounded" />
  </motion.div>
);

const Editorial = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 text-gray-800">
      {/* === HERO === */}
      <div className="relative text-white">
        {/* Mobile */}
        <div className="md:hidden relative h-72 w-full">
          <img
            src={editorialHero}
            alt="Editorial Hero Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-3xl font-bold mb-2">CTDA Editorial</h1>
            <p className="text-base font-semibold">
              Thoughtful. Unfiltered. Grounded in Truth.
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <div className="w-1/2 text-white">
            <h1 className="text-3xl font-extrabold mb-2">CTDA Editorial</h1>
            <p className="text-base leading-snug">
              Thoughtful commentary and cultural criticism rooted in truth,
              creativity, and bold Black storytelling.
            </p>
          </div>
        </div>
      </div>

{/* === Mission Statement === */}
<section className="py-20 px-6 bg-white text-center">
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="max-w-3xl mx-auto"
  >
    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
      Our Editorial Mission
    </h2>
    <p className="text-sm text-gray-700 leading-relaxed">
      At CTDA Media, we harness storytelling to reclaim truth, celebrate identity,
      and challenge the dominant narrative — unapologetically. We publish content that
      honors lived Black experiences, shaped by creativity, courage, and truth.
    </p>
  </motion.div>
</section>

{/* === Philosophy === */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-2xl font-bold font-serif text-center text-gray-900 mb-8"
    >
      Our Editorial Philosophy
    </motion.h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Truth First",
          text: "Every piece we publish starts with facts — we go beyond headlines to illuminate context and clarity.",
        },
        {
          title: "Global Black Voices",
          text: "We uplift stories from across the African diaspora, giving platform to both legacy and emerging voices.",
        },
        {
          title: "Bold Formats",
          text: "From audio narratives to short-form critique, we experiment to meet our audience where they are.",
        },
        {
          title: "Cultural Depth",
          text: "We interpret culture critically, understanding its social and historical weight — not just trends.",
        },
        {
          title: "Creative Freedom",
          text: "Writers have autonomy. Our editors guide, but we protect the original voice and tone of each contributor.",
        },
        {
          title: "Ethical Grounding",
          text: "Our standards are rooted in care, respect, and accountability — to both the story and the people behind it.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md transition hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-red-800 mb-3">{item.title}</h3>
          <p className="text-sm text-gray-700">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* === Editorial Process === */}
<section className="bg-white py-20 px-6">
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="max-w-4xl mx-auto text-center"
  >
    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
      How We Work
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      Every article, interview, and opinion goes through a careful editorial pipeline — blending transparency, accuracy, and care.
    </p>
    <div className="flex flex-col md:flex-row gap-6 mt-10">
      {[
        {
          title: "Research & Reporting",
          text: "We begin with primary sources, field expertise, and authentic perspectives from our communities.",
        },
        {
          title: "Rigorous Review",
          text: "Each submission is reviewed for clarity, balance, and relevance by experienced editors.",
        },
        {
          title: "Transparent Corrections",
          text: "If we get it wrong, we say so — promptly and publicly. Accuracy is a non-negotiable value.",
        },
      ].map((step, idx) => (
        <div
          key={idx}
          className="bg-gray-50 rounded-lg p-5 shadow-sm border-t-4 border-red-700"
        >
          <h3 className="text-lg font-semibold text-red-900 mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-gray-700">{step.text}</p>
        </div>
      ))}
    </div>
  </motion.div>
</section>

{/* === Editorial Team === 
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
      Meet the Editorial Team
    </h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[{
        name: "Oyebanji Akins",
        role: "Editor-in-Chief",
        img: team1,
        bio: "Connecting Africa to the world through editorial leadership and truth-driven storytelling."
      }, {
        name: "Precious Osazee",
        role: "Content Writer",
        img: team2,
        bio: "Writing from a place of curiosity, craft, and cultural awareness."
      }].map((member, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4 shadow-md"
          />
          <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="text-sm mt-2 text-gray-700">{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
</section>
*/}

{/* === Pitch Section === */}
<section className="bg-white text-black py-20 px-6 text-center">
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="max-w-3xl mx-auto"
  >
    <h2 className="text-xl font-serif font-bold mb-4">Pitch Your Story</h2>
    <p className="mb-6 text-sm">
      Are you a journalist, creator, or cultural critic with a story to tell?
      Pitch us your piece — we're always open to bold, new voices.
    </p>
    <a
      href="/contact"
      className="bg-red-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-900 transition"
    >
      Submit a Pitch
    </a>
  </motion.div>
</section>

    </section>
  );
};

export default Editorial;
