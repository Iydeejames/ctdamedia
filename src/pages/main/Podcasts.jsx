import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
    description: "An honest discussion on how faith intersects with African culture.",
    date: "June 12, 2025",
  },
];

const relatedLinks = [
  { title: "CTDA Featured Stories", url: "/featured" },
  { title: "Behind the Music", url: "/music" },
  { title: "CTDA Culture Blog", url: "/culture" },
  { title: "New Voices: Emerging Creators", url: "/blog/emerging-creators" },
  { title: "Black Experience Series", url: "/about#black-experience" },
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
          <Link
            key={pod.id}
            to={`/podcast/${pod.id}`}
            className="group block bg-white shadow hover:shadow-xl transition overflow-hidden border border-gray-200"
          >
            <video
              src={pod.video}
              controls
              preload="metadata"
              className="w-full h-64 object-cover"
              ref={(el) => (videoRefs.current[startIndex + index] = el)}
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-green-900 group-hover:underline">
                {pod.title}
              </h3>
              <p className="text-sm text-gray-500">{pod.date}</p>
              <p className="text-sm text-gray-700 mt-2">{pod.description}</p>
              <span className="inline-block text-sm text-red-600 mt-2 font-medium">
                Watch →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-gray-50 text-gray-900 px-4 md:px-10 py-12 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-black mb-8">
        Join the Conversation
      </h1>

      {/* Interviews */}
      {renderSection(" Interviews", interviews, 0)}

      {/* Conversations */}
      {renderSection(" Conversations", conversations, interviews.length)}

      {/* Related Text Links */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-700 border-b border-red-300 pb-2">
          You Might Also Like
        </h2>
        <ul className="list-disc list-inside text-green-800 text-md space-y-2">
          {relatedLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                className="hover:underline transition duration-200 hover:text-red-600"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Podcasts;
