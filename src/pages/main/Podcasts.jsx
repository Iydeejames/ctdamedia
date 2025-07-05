import  { useRef, useEffect } from "react";
import img7 from "../../assets/images/podcast/img7.png";
import vid from "../../assets/videos/vid.mp4";
import vid3 from "../../assets/videos/vid3.mp4";
import vid1 from "../../assets/videos/vid1.mp4";

const interviews = [
  {
    id: "interview-creators",
    title: "Interview with Creators",
    video: vid,
    description: "Discussing innovation and storytelling with Black creatives.",
    date: "June 20, 2025",
  },
  {
    id: "global-voices",
    title: "Global Voices",
    video: vid3,
    description: "Diaspora artists talk identity, struggle, and creativity.",
    date: "June 18, 2025",
  },
];

const conversations = [
  {
    id: "lagos-love",
    title: "Love & Lagos",
    video: vid1,
    description: "Conversations about love, hustle, and modern Nigerian life.",
    date: "June 15, 2025",
  },
  {
    id: "faith-culture",
    title: "Faith and Culture",
    video: vid,
    description: "How faith intersects with African culture and community.",
    date: "June 12, 2025",
  },
];



const Podcasts = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const handlePlay = (index) => {
      videoRefs.current.forEach((video, i) => {
        if (i !== index && video && !video.paused) {
          video.pause();
        }
      });
    };

    videoRefs.current.forEach((video, i) => {
      if (video) {
        video.addEventListener("play", () => handlePlay(i));
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener("play", () => handlePlay());
        }
      });
    };
  }, []);

  const renderSection = (title, items, startIndex) => (
    <section className="mb-16">
      <h2 className="text-xl md:text-3xl font-extrabold mb-6 text-black border-b-2 border-black pb-2">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((pod, index) => (
          <div
            key={pod.id}
            className="group block bg-white shadow hover:shadow-xl transition overflow-hidden border border-gray-200 "
          >
            <video
              src={pod.video}
              controls
              playsInline
              muted
              preload="auto"
              className="w-full h-64 object-cover"
              ref={(el) => (videoRefs.current[startIndex + index] = el)}
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-green-900">
                {pod.title}
              </h3>
              <p className="text-sm text-gray-500">{pod.date}</p>
              <p className="text-sm text-gray-700 mt-2">{pod.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <section className="bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative text-white">
        {/* Mobile View */}
        <div className="md:hidden relative h-72 w-full">
          <img
            src={img7}
            alt="Podcast Hero Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-3xl font-bold mb-2">CTDA Media Podcasts</h1>
            <p className="text-base font-semibold">
              Real Voices. Raw Stories. Unfiltered Culture.
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <div className="w-1/2 text-white">
            <h1 className="text-3xl font-bold mb-2">CTDA Media Podcasts</h1>
            <p className="text-base leading-snug">
              Join powerful interviews and deep conversations exploring African stories, identity, and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Podcast Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {renderSection(" Interviews", interviews, 0)}
        {renderSection(" Conversations", conversations, interviews.length)}


      </div>
    </section>
  );
};

export default Podcasts;
