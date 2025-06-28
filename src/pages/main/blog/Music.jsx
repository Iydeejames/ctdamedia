import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import img1 from "../../../assets/images/music-page/img1.jpg";
import img2 from "../../../assets/images/music-page/img2.jpg";
import img3 from "../../../assets/images/music-page/img3.jpg";
import img4 from "../../../assets/images/music-page/img4.jpg";
import img5 from "../../../assets/images/music-page/img5.jpg";
import img from "../../../assets/images/music-page/img.png";

const placeholderMusicNews = [
  {
    title: "Fire Boy - Coachella (Live)",
    description: "Afro-fusion magic on the biggest global stage.",
    img: img3,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Tems - Wild (Intro)",
    description: "A powerful opening to her new album.",
    img: img1,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Tiwa Savage - Empire Talk",
    description: "Her thoughts on the future of Afrobeats.",
    img: img4,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    title: "J.Cole - RADAR Freestyle",
    description: "Bars and rhythm from the king of lyrical rap.",
    img: img2,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    title: "Burna Boy - Stage Energy",
    description: "A record-breaking night to remember.",
    img: img5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
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
      currentAudio.play().catch((e) => console.error("Playback error:", e));
      setPlayingIndex(index);
    }
  };

  return (
    <div className="text-black">
      {/* Hero */}
      <div className="relative text-white">
        <div className="relative h-72 w-full">
          <img
            src={img}
            alt="Music Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Music</h1>
            <p className="text-base md:text-lg font-medium">
              From Afrobeats to Hip Hop — sound that speaks.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Music Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 text-green-800 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Audio Drops
        </motion.h2>

        <div className="space-y-6">
          {musicNews.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-lg p-3 md:p-4 shadow hover:shadow-xl transition flex items-center gap-3 md:gap-5"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Image with Visualizer */}
              <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {playingIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-green-400 animate-waveBar"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: "0.9s",
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {/* Text + Controls */}
              <div className="flex-1">
                <h3 className="text-sm md:text-lg font-bold text-green-800">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => togglePlay(index)}
                    className="px-3 py-1 text-xs md:text-sm bg-red-700 hover:bg-red-800 text-white rounded"
                  >
                    {playingIndex === index ? "Pause" : "Play"}
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[index] = el)}
                    src={item.audioUrl}
                    preload="none"
                    className="hidden"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Animation for Bars */}
      <style>{`
        @keyframes waveBar {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
        .animate-waveBar {
          animation: waveBar 1s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Music;
