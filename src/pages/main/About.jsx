import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/about-page/img1.jpg";
import img2 from "../../assets/images/about-page/img2.jpg";
import img3 from "../../assets/images/about-page/img3.jpg";
import img4 from "../../assets/images/about-page/img4.jpg";
import img6 from "../../assets/images/about-page/img6.jpg";
import img7 from "../../assets/images/about-page/img7.jpg";
import aboutHero from "../../assets/images/logo.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const team = [
  {
    name: "Oyebanji Akins",
    role: "Founder & Host",
    image: img1,
    bio: "Oyebanji leads CTDA with heart and vision. A storyteller and cultural critic, he’s known for his sharp reviews on X and his deep love for music, books, movies, and football.",
  },
  {
    name: "Gift RapzyRita",
    role: "Social Media Strategist",
    image: img2,
    bio: "Rapzy drives CTDA’s campaigns with precision and creativity. As founder of @teamdrimedia, he blends strategy with cultural insight and always with the right vibe.",
  },
  {
    name: "Toyin Omoyeni",
    role: "Video Editor",
    image: img3,
    bio: "Toyin brings CTDA’s visuals to life with motion, style, and story. She’s the eye behind our YouTube magic. When she’s not editing, she’s reading or creating.",
  },
  {
    name: "Destiny (Goldmond) Osaratin",
    role: "Marketing & Content Strategist",
    image: img7,
    bio: "Goldmond leads CTDA’s marketing efforts, blending strategy and storytelling to grow our reach and impact. Offline, he’s a talented pencil artist with a creative soul.",
  },
  {
    name: "Ajayi Goodness",
    role: "Social Media Manager",
    image: img6,
    bio: "Goodness plans and manages CTDA’s content across platforms, making sure our voice stays clear and consistent. She’s also a content creator and lover of dance, food, and conversation.",
  },
  {
    name: "Precious Osazee",
    role: "Content Writer",
    image: img4,
    bio: "Precious writes engaging blog content for CTDA, transforming research into stories that connect. She also loves cooking, fiction, and great animations.",
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Mobile View */}
        <div className="md:hidden relative h-72 w-full">
          <img
            src={aboutHero}
            alt="CTDA Hero Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          >
            <h1 className="text-3xl font-bold mb-2">About Us</h1>
            <p className="text-base text-semibold">
              Connecting the dots through culture and conversation.
            </p>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-1/2 text-white"
          >
            <h1 className="text-3xl font-extrabold mb-2">About CTDA Media</h1>
            <p className="text-base leading-snug">
              We're a dynamic media company blending African heritage and global perspectives. We tell stories that celebrate identity, inspire thought, and build community.
            </p>
          </motion.div>
        </div>
      </div>

{/* Mission Cards */}
<div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
  {[
    {
      title: "Who We Are",
      desc: "CTDA is a vibrant media company driven by a passionate team of creatives. We connect the dots in conversations around music, movies, culture, and Black life in Africa and the diaspora.",
    },
    {
      title: "What We Do",
      desc: "We create, curate, and share engaging content via social media, podcasts, and video. We explore conversations that reflect the heartbeat of Black culture across continents.",
    },
    {
      title: "Our Mission",
      desc: "To amplify Black voices and bridge cultural gaps through storytelling, creativity, and connection — celebrating identity and empowering community.",
    },
    {
      title: "What Makes Us Different",
      desc: "CTDA isn't here to go viral and vanish. We're here to mean something. Our content is intentional and rooted in lived experience. We highlight emerging voices and elevate everyday Black life — the wins, the struggles, the nuance.We care deeply: about the culture, the creators, and the community. That's what sets us apart — and keeps us going.",
    },
    {
      title: "Our Story",
      desc: "CTDA was born from a simple idea: that Black stories deserve space, truth, and celebration on our own terms. Founded by Oyebanji Akins, a Nigerian-born American creative with a global voice, CTDA stands for Connecting the Dots Africa. But it’s more than a name — it’s a mission.We connect generations, the diaspora and the continent, the known and the forgotten. We speak from the heart of the culture, wherever it lives. We don’t just observe, we participate. CTDA is a growing home for stories that feel like us, sound like us, and move like us.",
    },
    {
      title: "More than a podcast",
      desc: "We're a dynamic media company blending African heritage and global perspectives. We tell stories that celebrate identity, inspire thought, and build community.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-l-4 border-green-600"
    >
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xl font-semibold mb-3 text-red-600"
      >
        {item.title}
      </motion.h3>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-700 text-sm leading-relaxed"
      >
        {item.desc}
      </motion.p>
    </div>
  ))}
</div>


      {/* Pillars */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center px-6"
      >
        <p className="text-black text-md font-semibold italic border-y-2 border-black py-4 max-w-md mx-auto">
          CTDA Pillars: Culture | Creativity | Community | Connection
        </p>
      </motion.div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6 pb-16">
        <h3 className="text-2xl font-bold text-center mb-10">Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[3/4] object-contain  mb-4 bg-white"
              />
              <motion.h4
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg font-semibold text-center"
              >
                {member.name}
              </motion.h4>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm text-red-500 text-center font-medium"
              >
                {member.role}
              </motion.p>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm text-gray-600 mt-2 text-center"
              >
                {member.bio}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
