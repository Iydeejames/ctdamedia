import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaApple
} from "react-icons/fa";

import img1 from "../../assets/images/hero-page/img1.jpg";
import img2 from "../../assets/images/hero-page/img2.jpg";
import img4 from "../../assets/images/hero-page/img4.jpg";
import img5 from "../../assets/images/hero-page/img5.jpg";
import img7 from "../../assets/images/hero-page/img7.jpg";

const LandingPage = () => {
  const recentReleases = [
    { slug: "recent-1", title: "Exploring African Heritage Through Dance", date: "May 27, 2025", description: "A deep dive into dance as a cultural expression.", image: img2 },
    { slug: "recent-2", title: "Sound of Suburb in Lagos", date: "May 27, 2025", description: "The rise of grassroots music scenes.", image: img4 },
    { slug: "recent-3", title: "Tech on the Rise in Africa", date: "May 27, 2025", description: "Highlighting African innovation and start-ups.", image: img5 },
    { slug: "recent-4", title: "Fashion Week New Wave", date: "May 27, 2025", description: "New trends shaking up African fashion.", image: img7 },
  ];

  const business = [
    { slug: "biz-1", title: "Entrepreneurial Growth in Nigeria", date: "May 25, 2025", description: "Nigeria’s startup scene is booming.", image: img2 },
    { slug: "biz-2", title: "SMEs Driving New Economies", date: "May 26, 2025", description: "How small businesses shape local markets.", image: img4 },
    { slug: "biz-3", title: "Blockchain Startups Rise", date: "May 27, 2025", description: "A new wave of digital finance.", image: img5 },
  ];

  const sports = [
    { slug: "sport-1", title: "African Athletes on the World Stage", date: "May 25, 2025", description: "Stories of determination and global success.", image: img7 },
    { slug: "sport-2", title: "Grassroots Football Revolution", date: "May 26, 2025", description: "How local games build national pride.", image: img2 },
    { slug: "sport-3", title: "Emerging Basketball Stars", date: "May 27, 2025", description: "Young athletes shining in Africa.", image: img4 },
  ];

  const culture = [
    { slug: "culture-1", title: "The Art of Blackness in Motion", date: "May 20, 2025", description: "Celebrating Black identity through performance.", image: img5 },
    { slug: "culture-2", title: "Afrobeats Evolution", date: "May 22, 2025", description: "Charting the explosive growth of Afrobeats.", image: img7 },
    { slug: "culture-3", title: "African Storytelling Reimagined", date: "May 23, 2025", description: "A new era of digital folktales.", image: img2 },
  ];

  const spotlight = [
    { slug: "spot-1", title: "New Soundscape in Shaku Culture", date: "May 24, 2025", description: "Uncovering rhythmic revolutions.", image: img4 },
    { slug: "spot-2", title: "Creative Powerhouses Rising", date: "May 25, 2025", description: "Artists transforming global media.", image: img5 },
    { slug: "spot-3", title: "Fashion and Media Icons", date: "May 26, 2025", description: "Celebrating industry leaders.", image: img7 },
  ];

  const renderSection = (title, data, isGrid) => (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className={`${isGrid ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "flex flex-col gap-4"}`}>
        {data.map((item, index) => (
          <Link
            to={`/post/${item.slug}`}
            key={index}
            className={`flex ${isGrid ? "" : "flex-row items-start gap-4 w-full max-w-md bg-white rounded shadow hover:shadow-lg transition overflow-hidden"}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`${isGrid ? "h-40 w-full object-cover" : "w-24 h-24 object-cover rounded-l"}`}
            />
            <div className="p-2 flex-1">
              <p className="text-xs text-red-500 line-clamp-1">{item.date}</p>
              <h3 className="text-sm font-semibold mt-1 line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <main>
      <section className="container mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <img src={img1} alt="Hero" className="w-full h-[450px] object-cover rounded" />
          <h1 className="text-3xl font-bold mt-4">Community-Driven Stories</h1>
        </div>
        <aside className="lg:w-1/4 grid gap-4">
          {[
            { text: "Music", link: "/music", image: img2 },
            { text: "Podcasts", link: "/podcasts", image: img4 },
            { text: "Culture", link: "/culture", image: img5 },
            { text: "Lifestyle", link: "/lifestyle", image: img7 }
          ].map((cat, i) => (
            <Link to={cat.link} key={i} className="relative h-24 block">
              <img src={cat.image} alt={cat.text} className="rounded w-full h-full object-cover" />
              <span className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center font-bold text-lg">{cat.text}</span>
            </Link>
          ))}
        </aside>
      </section>

      <section className="bg-gray-100 py-10 mt-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Who We Are?</h2>
          <p className="max-w-3xl mx-auto text-sm">
            <strong>CTDA Media</strong> is where Black stories live boldly. We're a culture-rooted media brand that celebrates the voices, dreams, and everyday brilliance of Black people across the world. Through powerful storytelling, interviews, fashion, and moments that matter, we shine a light on who we are, how we live, and where we're headed. This is a home of connection, community, and truth told our way. Welcome to CTDA! You're in the right place.
          </p>
        </div>
      </section>

      {renderSection("Recent Releases", recentReleases, true)}
      {renderSection("Business", business, false)}
      {renderSection("Sports", sports, true)}
      {renderSection("Culture", culture, false)}
      {renderSection("Spotlight", spotlight, true)}

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-2">Our Key Media Metrics</h2>
          <p className="text-sm mb-8">A snapshot of our performance...</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">12K</div>
              <p className="text-sm mt-2">YouTube Subs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">150K</div>
              <p className="text-sm mt-2">Podcast Streams</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-400 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">300+</div>
              <p className="text-sm mt-2">Articles Published</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">25K</div>
              <p className="text-sm mt-2">Instagram Followers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Subscribe and Follow</h2>
          <div className="flex justify-center gap-6 text-3xl">
            <a href="https://www.youtube.com/@ctdamongblacks" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 hover:scale-110 transition" />
            </a>
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
              <FaSpotify className="text-green-500 hover:scale-110 transition" />
            </a>
            <a href="https://www.apple.com/apple-podcasts/" target="_blank" rel="noopener noreferrer">
              <FaApple className="text-black hover:scale-110 transition" />
            </a>
            <a href="https://www.instagram.com/ctdamongblacks/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-purple-500 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
