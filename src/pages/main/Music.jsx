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
    <div className=" text-black px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3"> CTDA Music & Culture</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Experience the pulse of Black music — from global hits to underground gems.
        </p>

        {/* Music News Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {musicNews.map((item, index) => (
            <div key={index} className="bg-gray-200  shadow-md overflow-hidden relative">
<img
  src={item.img}
  alt={item.title}
  className="w-full h-72 object-contain bg-white rounded"
/>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => togglePlay(index)}
                    className="bg-red-700 hover:bg-red-500 transition text-white text-sm px-4 py-1 rounded-full"
                  >
                    {playingIndex === index ? "Pause" : "Play"}
                  </button>
                  <audio ref={(el) => (audioRefs.current[index] = el)}>
                    <source src={item.audioUrl} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Music;
