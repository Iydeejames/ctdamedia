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

      {/* === Mission === */}
      <motion.div
        className="py-12 px-6 max-w-5xl mx-auto text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader icon={FaBullhorn} title="Our Mission" />
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At CTDA Media, we believe stories shape identity, drive change, and
          challenge narratives. Our editorial team is committed to telling the
          truth — boldly, responsibly, and unapologetically.
        </p>
      </motion.div>

      {/* === Philosophy (No Animation on Cards) === */}
      <div className="py-12 px-6 max-w-6xl mx-auto">
        <SectionHeader icon={FaPenNib} title="Editorial Philosophy" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["Independent Journalism", "Free from external influence, rooted in facts and integrity."],
            ["Diverse Voices", "We spotlight Black stories, diasporic experiences, and new perspectives."],
            ["Cultural Consciousness", "Content that respects and reflects the African and global Black identity."],
            ["Accountability", "We hold the powerful — and ourselves — to high editorial standards."],
            ["Innovation", "Multimedia storytelling, new platforms, and bold formats drive our work."],
          ].map(([title, desc], idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-green-800 mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === Editorial Process === */}
      <motion.div
        className="py-12 px-6 max-w-5xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader icon={FaCheckCircle} title="Our Editorial Process" />
        <div className="space-y-6 text-gray-700 text-base">
          <div>
            <strong className="text-black">Fact-Checking:</strong> Every
            report undergoes a rigorous review for accuracy and fairness.
          </div>
          <div>
            <strong className="text-black">Sources:</strong> We value firsthand
            sources, lived experiences, and documented truth.
          </div>
          <div>
            <strong className="text-black">Corrections Policy:</strong> We
            promptly correct any errors and ensure transparency with our
            readers.
          </div>
        </div>
      </motion.div>

      {/* === Meet the Team (No Animation on Cards) === */}
      <div className="bg-white py-12 px-6">
        <SectionHeader icon={FaUserEdit} title="Meet the Editorial Team" />
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {[{
            name: "Oyebanji Akins",
            role: "Editor-in-Chief",
            img: team1,
            bio: "Nigerian-born, globally-minded. A passionate storyteller connecting Africa to the world."
          }, {
            name: "Precious Osazee",
            role: "Content Writer",
            img: team2,
            bio: "Precious writes engaging blog content for CTDA, transforming research into stories that connect. She also loves cooking, fiction, and great animations."
          }].map((member, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover shadow" />
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm mt-1">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Ethical Standards === */}
      <motion.div
        className="py-12 px-6 max-w-5xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader icon={FaCheckCircle} title="Ethical Standards" />
        <ul className="space-y-4 text-gray-800 list-disc list-inside">
          <li>We adhere to the International Federation of Journalists (IFJ) ethical standards.</li>
          <li>We do not publish hate speech, misinformation, or discriminatory content.</li>
          <li>Our editorial team is trained in anti-bias, trauma-informed reporting, and ethical sourcing.</li>
        </ul>
      </motion.div>

      {/* === Pitch Section === */}
      <motion.div
        className="bg-green-100 text-black text-center py-12 px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pitch Your Story</h2>
        <p className="max-w-2xl mx-auto mb-6 text-base md:text-lg">
          Are you a writer, thinker, or journalist with a unique voice or viewpoint?
          We welcome pitches that align with our editorial vision.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Submit a Pitch
        </a>
      </motion.div>
    </section>
  );
};

export default Editorial;
