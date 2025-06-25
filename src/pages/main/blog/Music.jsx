import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import img1 from "../../../assets/images/music-page/img1.jpg";
import img2 from "../../../assets/images/music-page/img2.jpg";
import img3 from "../../../assets/images/music-page/img3.jpg";
import img4 from "../../../assets/images/music-page/img4.jpg";
import img5 from "../../../assets/images/music-page/img5.jpg";
import img6 from "../../../assets/images/music-page/img6.jpg";
import img7 from "../../../assets/images/music-page/img7.jpg";
import img from "../../../assets/images/music-page/img.png";
import vid from "../../../assets/videos/vid.mp4";

const placeholderMusicNews = [
  {
    title: "Fire Boy makes history at Coachella with electrifying Afro-fusion set",
    description: "The Grammy winner delivered a genre-bending performance...",
    img: img3,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Tems debuts new album 'Born in the Wild'",
    description: "Tems' latest project offers introspective ballads...",
    img: img1,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Tiwa Savage launches record label imprint",
    description: "30BG Empire aims to sign emerging acts...",
    img: img4,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    title: "J.Cole joins Spotify's global RADAR program",
    description: "Award winning star Cole continues his international rise...",
    img: img2,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    title: "Burna Boy makes history at Coachella",
    description: "The Grammy winner delivered a genre-bending performance...",
    img: img5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const Music = () => {
  const [musicNews, setMusicNews] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  useEffect(() => {
    const fetchMusicNews = async () => {
      try {
        const response = await fetch("https://backend.com/music-news");
        const data = await response.json();
        setMusicNews(Array.isArray(data) && data.length > 0 ? data : placeholderMusicNews);
      } catch (error) {
        console.error("Fetch failed, using placeholder data", error);
        setMusicNews(placeholderMusicNews);
      }
    };

    fetchMusicNews();
  }, []);

  const togglePlay = (index) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    if (playingIndex === index) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex].pause();
      }
      currentAudio.load();
      currentAudio.play().catch((e) => console.error("Playback error:", e));
      setPlayingIndex(index);
    }
  };

  return (
    <div className="text-black">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Mobile View */}
        <div className="md:hidden relative h-72 w-full">
          <img
            src={img}
            alt="Music Hero Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          >
            <h1 className="text-3xl font-bold mb-2">Music</h1>
            <p className="text-base font-semibold">
              Experience the pulse of Black music — from global hits to underground gems.
            </p>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/2 text-white"
          >
            <h1 className="text-3xl font-extrabold mb-2">Music</h1>
            <p className="text-base leading-snug">
              From Afrobeats to Highlife, Hip Hop to Soul — we tell the stories behind the sound.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 text-green-800 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Latest in Music
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicNews.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg overflow-hidden transition-transform hover:scale-105"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
<div className="w-full aspect-video ">
  <img
    src={item.img}
    alt={item.title}
    className="w-full h-full object-contain object-center "
  />
</div>

              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  {item.description}
                </p>
                <button
                  onClick={() => togglePlay(index)}
                  className="bg-red-700 hover:bg-red-900 text-white text-sm px-4 py-2  transition"
                >
                  {playingIndex === index ? "Pause" : "Play Audio"}
                </button>
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  src={item.audioUrl}
                  className="hidden"
                  preload="none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Music;
