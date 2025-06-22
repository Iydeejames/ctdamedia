import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/images/music-page/img1.jpg";
import img2 from "../../assets/images/music-page/img2.jpg";
import img3 from "../../assets/images/music-page/img3.jpg";
import img4 from "../../assets/images/music-page/img4.jpg";
import img5 from "../../assets/images/music-page/img5.jpg";
import img6 from "../../assets/images/music-page/img6.jpg";
import img7 from "../../assets/images/music-page/img7.jpg";
import vid from "../../assets/videos/vid.mp4";

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
    title: "Davido launches record label imprint",
    description: "30BG Empire aims to sign emerging acts...",
    img: img6,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    title: "J.Cole joins Spotify's global RADAR program",
    description: "Award winning star Cole continues his international rise...",
    img: img2,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    title: "Davido launches record label imprint",
    description: "30BG Empire aims to sign emerging acts...",
    img: img7,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    title: "Burna Boy makes history at Coachella",
    description: "The Grammy winner delivered a genre-bending performance...",
    img: img5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
];

const featuredVideos = [
  {
    title: "Behind the Scenes with Fireboy DML",
    subtitle: "Exclusive backstage experience",
    release: "April 22, 2025",
    video: vid,
  },
  {
    title: "CTDA Live Lounge: Rema - 'Calm Down'",
    subtitle: "Stripped version of the hit song",
    release: "May 3, 2025",
    video: vid,
  },
];

const Music = () => {
  const [musicNews, setMusicNews] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  useEffect(() => {
    const fetchMusicNews = async () => {
      try {
        const response = await fetch("https://your-backend.com/music-news");
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setMusicNews(data);
        } else {
          setMusicNews(placeholderMusicNews);
        }
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
    <div className="px-4 py-10 max-w-7xl mx-auto bg-white">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
        CTDA Music & Entertainment News
      </h1>
      <h5 className="text-base sm:text-lg text-center mb-12 text-gray-800">
        Dive into music reviews, artist spotlights, and genre explorations with a focus on diverse sounds and the influence of Black culture in the music world.
      </h5>

      {/* News Section - Timeline Style */}
      <section className="relative border-l-4 border-green-500 pl-6">
        {musicNews.map((news, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute w-4 h-4 bg-green-600 rounded-full left-[-35px] top-3"></div>
            <div className="md:flex md:items-start">
              <div className="relative bg-white">
                <img
                  src={news.img}
                  alt="music news"
                  className="w-full md:w-56 h-40 object-contain rounded-xl mb-4 md:mb-0 md:mr-6"
                />
                <button
                  onClick={() => togglePlay(index)}
                  className="absolute inset-0 flex items-center justify-center   rounded-xl"
                >
                  {playingIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <audio preload="auto" ref={(el) => (audioRefs.current[index] = el)}>
                  <source src={news.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  {news.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {news.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Video Section */}
      <section className="mt-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
          Visual Recordings
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {featuredVideos.map((vidItem, index) => (
            <div key={index} className="bg-green-700 overflow-hidden shadow-lg">
              <video src={vidItem.video} controls className="w-full h-64 object-cover bg-black"></video>
              <div className="p-4 text-white">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">{vidItem.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{vidItem.subtitle}</p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Released: {vidItem.release}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Music;
