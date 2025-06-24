import React from "react";
import editorialHero from "../../../assets/images/editorial-page/img3.jpg";
import team1 from "../../../assets/images/editorial-page/img1.jpg";
import team2 from "../../../assets/images/editorial-page/img2.jpg";

const Editorial = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {/* Hero Section */}
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
            <p className="text-base font-semibold">Thoughtful. Unfiltered. Grounded in Truth.</p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <div className="w-1/2 text-white">
            <h1 className="text-3xl font-extrabold mb-2">CTDA Editorial</h1>
            <p className="text-base leading-snug">
              Thoughtful commentary and cultural criticism rooted in truth, creativity, and bold Black storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          At CTDA Media, we believe stories shape identity, drive change, and challenge narratives. Our editorial team is
          committed to telling the truth — boldly, responsibly, and unapologetically.
        </p>
      </div>

      {/* Editorial Philosophy */}
      <div className="max-w-6xl mx-auto px-6 py-12 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold text-black mb-6 text-center">Editorial Philosophy</h2>
        <ul className="space-y-4 text-gray-800 list-disc list-inside">
          <li><strong>Independent Journalism:</strong> Free from external influence, rooted in facts and integrity.</li>
          <li><strong>Diverse Voices:</strong> We spotlight Black stories, diasporic experiences, and new perspectives.</li>
          <li><strong>Cultural Consciousness:</strong> Content that respects and reflects the African and global Black identity.</li>
          <li><strong>Accountability:</strong> We hold the powerful — and ourselves — to high editorial standards.</li>
          <li><strong>Innovation:</strong> Multimedia storytelling, new platforms, and bold formats drive our work.</li>
        </ul>
      </div>

      {/* Editorial Process */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold text-green-800 mb-6 text-center">Our Editorial Process</h2>
        <ul className="space-y-4 text-gray-800 list-disc list-inside">
          <li><strong>Fact-Checking:</strong> Every report undergoes a rigorous review for accuracy and fairness.</li>
          <li><strong>Sources:</strong> We value firsthand sources, lived experiences, and documented truth.</li>
          <li><strong>Corrections Policy:</strong> We promptly correct any errors and ensure transparency with our readers.</li>
        </ul>
      </div>

      {/* Meet the Editorial Team */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-xl font-semibold text-center text-black mb-10">Meet the Editorial Team</h2>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <img
              src={team1}
              alt="Oyebanji Akins"
              className="w-16 h-16 object-cover rounded-full shadow"
            />
            <div>
              <h3 className="font-bold text-lg">Oyebanji Akins</h3>
              <p className="text-sm text-gray-600">Editor-in-Chief</p>
              <p className="text-sm mt-1">
                Nigerian-born, globally-minded. A passionate storyteller connecting Africa to the world.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={team2}
              alt="Ama Osei"
              className="w-16 h-16 object-cover rounded-full shadow"
            />
            <div>
              <h3 className="font-bold text-lg">Precious Osazee</h3>
              <p className="text-sm text-gray-600">Content Writer</p>
              <p className="text-sm mt-1">
              Precious writes engaging blog content for CTDA, transforming research into stories that connect. She also loves cooking, fiction, and great animations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical Standards */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold text-green-800 mb-6 text-center">Ethical Standards</h2>
        <ul className="space-y-4 text-gray-800 list-disc list-inside">
          <li>We adhere to the International Federation of Journalists (IFJ) ethical standards.</li>
          <li>We do not publish hate speech, misinformation, or discriminatory content.</li>
          <li>Our editorial team is trained in anti-bias, trauma-informed reporting, and ethical sourcing.</li>
        </ul>
      </div>

      {/* Contribute Section */}
      <div className="bg-green-100 text-black text-center py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">Pitch Your Story</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Are you a writer, thinker, or journalist with a unique voice or viewpoint? We welcome pitches that align with our
          editorial vision.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Submit a Pitch
        </a>
      </div>
    </section>
  );
};

export default Editorial;
