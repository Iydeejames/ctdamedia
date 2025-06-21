import React from "react";
import img1 from "../../assets/images/about-page/img1.jpg";

const team = [
  {
    name: "Amaka O.",
    role: "Creative Director",
    image: img1,
    bio: "Amaka brings bold creativity and a love for storytelling to every project at CTDA."
  },
  {
    name: "Tunde A.",
    role: "Lead Producer",
    image: img1,
    bio: "Born in Nigeria, Tunde bridges cultures through powerful content and smooth production."
  },
  {
    name: "Zainab B.",
    role: "Media Strategist",
    image: img1,
    bio: "Zainab curates experiences across platforms, shaping how CTDA connects with the world."
  },
  {
    name: "Dayo M.",
    role: "Podcast Host",
    image: img1,
    bio: "With charm and intellect, Dayo drives conversations that resonate with diverse audiences."
  }
];

const About = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {/* Hero Intro */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">CTDA Media</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          More than a podcast — we're a dynamic media company blending African heritage and global
          perspectives. From music and movies to deep conversations, we celebrate the Black experience.
        </p>
      </div>

      {/* Mission Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
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
