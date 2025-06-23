import React from "react";
import img1 from "../../assets/images/about-page/img1.jpg";
import img2 from "../../assets/images/about-page/img2.jpg";
import img3 from "../../assets/images/about-page/img3.jpg";
import img4 from "../../assets/images/about-page/img4.jpg";
import img5 from "../../assets/images/about-page/img5.jpg";
import img6 from "../../assets/images/about-page/img6.jpg";
import img7 from "../../assets/images/about-page/img7.jpg";

const team = [
  {
    name: "Oyebanji Akins",
    role: "Founder & Host",
    image: img1,
    bio: " Oyebanji leads CTDA with heart and vision. A storyteller and cultural critic, he’s known for his sharp reviews on X and his deep love for music, books, movies, and football."
  },
  {
    name: "Gift RapzyRita",
    role: "Social Media Strategist",
    image: img2,
    bio: " Rapzy drives CTDA’s campaigns with precision and creativity. As founder of @teamdrimedia, he blends strategy with cultural insight and always with the right vibe."
  },
  {
    name: "Toyin Omoyeni",
    role: "Video Editor",
    image: img3,
    bio: " Toyin brings CTDA’s visuals to life with motion, style, and story. She’s the eye behind our YouTube magic. When she’s not editing, she’s reading or creating."
  },
  {
    name: "Destiny (Goldmond) Osaratin",
    role: "Marketing & Content Strategist",
    image: img7,
    bio: "Goldmond leads CTDA’s marketing efforts, blending strategy and storytelling to grow our reach and impact. Offline, he’s a talented pencil artist with a creative soul."
  },
  {
    name: "Ajayi Goodness",
    role: "Social Media Manager",
    image: img6,
    bio: "Goodness plans and manages CTDA’s content across platforms, making sure our voice stays clear and consistent. She’s also a content creator and lover of dance, food, and conversation."
  },
  {
    name: "Precious Osazee",
    role: "Content Writer",
    image: img4,
    bio: " Precious writes engaging blog content for CTDA, transforming research into stories that connect. She also loves cooking, fiction, and great animations."
  }
];

const About = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {/* Hero Intro */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
  <h1 className="text-2xl md:text-4xl font-bold mb-2 text-gray-900">CTDA Media</h1>
  <p className="text-md md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
    More than a podcast — we're a dynamic media company blending African heritage and global
    perspectives. From music and movies to deep conversations, we celebrate the Black experience.
  </p>
</div>

{/* Mission Cards */}
<div className="max-w-6xl mx-auto px-6 py-4 grid md:grid-cols-3 gap-6">
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-t-4 border-green-600">
    <h3 className="text-xl font-semibold mb-3 text-red-600">Who We Are</h3>
    <p className="text-gray-700 text-sm leading-relaxed">
      CTDAmongBlacks is a vibrant media company driven by a passionate team of creatives. We
      aim to connect the dots in conversations around music, movies, culture, and everyday life
      of Black people in and outside Africa.
    </p>
  </div>
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-t-4 border-green-600">
    <h3 className="text-xl font-semibold mb-3 text-red-600">What We Do</h3>
    <p className="text-gray-700 text-sm leading-relaxed">
      We deliver engaging content through social media, podcasts, and visuals. Our hosts lead
      thought-provoking discussions and interviews that reflect and celebrate the Black cultural
      identity across borders.
    </p>
  </div>
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-t-4 border-green-600">
    <h3 className="text-xl font-semibold mb-3 text-red-600">Our Mission</h3>
    <p className="text-gray-700 text-sm leading-relaxed">
      We amplify Black voices and bridge cultural gaps through storytelling, creativity, and
      connection. Our platform celebrates identity and empowers communities through diverse
      narratives and shared experiences.
    </p>
  </div>
</div>

{/* Our Story */}
<div className="max-w-5xl mx-auto px-6 py-12">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-6">Our Story</h2>
  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
    CTDA was born from a simple idea: that Black stories deserve space, truth, and celebration on our own terms.
    Founded by <span className="font-semibold">Oyebanji Akins</span>, a Nigerian-born American creative with a global voice,
    CTDA stands for <span className="font-semibold">Connecting the Dots Africa</span>. But it’s more than a name, it’s a mission.
    We connect the dots between generations, between the diaspora and the continent, between the known and the forgotten.
    We speak from the heart of the culture, wherever it lives, and we don’t just observe, we participate.
    CTDA is a growing home for stories that feel like us, sound like us, and move like us.
  </p>
</div>

{/* CTDA Pillars */}
<div className="text-center px-6">
  <p className="text-red-600 text-md font-semibold italic border-y-2 border-green-300 py-4 max-w-md mx-auto">
    CTDA Pillars: Culture | Creativity | Community | Connection
  </p>
</div>

{/* What Makes Us Different */}
<div className="max-w-5xl mx-auto px-6 py-12">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-6">What Makes Us Different</h2>
  <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
    CTDA is not here to go viral and vanish. We're here to mean something. Our content is intentional and rooted in experience.
    We platform emerging voices right alongside established names. We ask the questions no one else is asking.
    We center everyday Black life; the big wins, the quiet struggles, the nuance.
    <br /><br />
    Most of all, we care deeply. About the culture. About the creators. About the community.
    That’s what sets us apart. And that’s what keeps us going.
  </p>
</div>


      {/* Team Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[3/4] object-contain rounded-2xl mb-4 bg-white"
              />
              <h4 className="text-lg font-semibold text-center">{member.name}</h4>
              <p className="text-sm text-red-500 text-center font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
