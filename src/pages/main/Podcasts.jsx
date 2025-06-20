import  { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";

const podcastGroups = [
  {
    category: "Culture",
    items: [
      {
        type: "link",
        title: "Culture Clash: Afro vs Western",
        description: "Exploring the tension and blend between African and Western norms.",
        image: img1,
        link: "#",
      },
      {
        type: "link",
        title: "The Evolution of Urban Slang",
        description: "We explore how language shapes and evolves in Afro-diasporic communities.",
        image: img2,
        link: "https://spotify.com/culture-urban-slang",
      },
      {
        type: "link",
        title: "Street Culture & Music",
        description: "From graffiti to breakdancing – what makes the street pulse?",
        image: img3,
        link: "#",
      },
      {
        type: "link",
        title: "The Evolution of Urban Slang",
        description: "We explore how language shapes and evolves in Afro-diasporic communities.",
        image: img2,
        link: "https://spotify.com/culture-urban-slang",
      },
      {
        type: "link",
        title: "Traditional Rites in Modern Times",
        description: "Are cultural rites being lost or transformed in today's world?",
        image: img4,
        link: "https://spotify.com/traditional-rites",
      },
      {
        type: "link",
        title: "Street Culture & Music",
        description: "From graffiti to breakdancing – what makes the street pulse?",
        image: img3,
        link: "#",
      },
    ],
  },
  {
    category: "Documentary",
    items: [
      {
        type: "link",
        title: "Voices of Lagos",
        description: "An aural tour through Nigeria’s bustling megacity.",
        image: img5,
        link: "#",
      },
      {
        type: "link",
        title: "Inside the Nigerian Film Industry",
        description: "Behind the scenes of Nollywood's booming ecosystem.",
        image: img6,
        link: "https://spotify.com/nollywood-doc",
      },
      {
        type: "link",
        title: "Documenting War & Peace",
        description: "Uncovering stories in war zones and peace tables alike.",
        image: img7,
        link: "#",
      },
      {
        type: "link",
        title: "Voices of Lagos",
        description: "An aural tour through Nigeria’s bustling megacity.",
        image: img5,
        link: "#",
      },
      {
        type: "link",
        title: "Oil & History",
        description: "An investigative series on how oil shaped African geopolitics.",
        image: img1,
        link: "https://spotify.com/oil-africa",
      },
      {
        type: "link",
        title: "Inside the Nigerian Film Industry",
        description: "Behind the scenes of Nollywood's booming ecosystem.",
        image: img6,
        link: "https://spotify.com/nollywood-doc",
      },
    ],
  },
  {
    category: "Music",
    items: [
      {
        type: "link",
        title: "Naija Beats: Then & Now",
        description: "Tracing the evolution of Nigeria’s pop scene.",
        image: img2,
        link: "#",
      },
      {
        type: "link",
        title: "African Jazz & Highlife",
        description: "A sonic journey through West Africa's legendary genres.",
        image: img3,
        link: "https://spotify.com/highlife-sound",
      },
      {
        type: "link",
        title: "The Rise of Afrobeats",
        description: "How global charts are embracing Afro sounds.",
        image: img4,
        link: "https://spotify.com/afrobeats-rise",
      },
      {
        type: "link",
        title: "Studio Sessions: Live in Lagos",
        description: "Experience real-time music creation from Lagos studios.",
        image: img5,
        link: "#",
      },
      {
        type: "link",
        title: "African Jazz & Highlife",
        description: "A sonic journey through West Africa's legendary genres.",
        image: img3,
        link: "https://spotify.com/highlife-sound",
      },
      {
        type: "link",
        title: "The Rise of Afrobeats",
        description: "How global charts are embracing Afro sounds.",
        image: img4,
        link: "https://spotify.com/afrobeats-rise",
      },
    ],
  },
  {
    category: "Food",
    items: [
      {
        type: "link",
        title: "Jollof Wars",
        description: "Who truly owns the crown: Nigeria or Ghana?",
        image: img6,
        link: "https://spotify.com/jollof-wars",
      },
      {
        type: "link",
        title: "Palm Oil Stories",
        description: "The untold origin and impact of red gold.",
        image: img7,
        link: "#",
      },
      {
        type: "link",
        title: "A Day at the Lagos Market",
        description: "Dive into the colors, sounds and scents of Africa’s largest markets.",
        image: img1,
        link: "#",
      },
      {
        type: "link",
        title: "Street Food Culture",
        description: "Exploring the flavours of the roadside.",
        image: img2,
        link: "https://spotify.com/street-food",
      },
      {
        type: "link",
        title: "A Day at the Lagos Market",
        description: "Dive into the colors, sounds and scents of Africa’s largest markets.",
        image: img1,
        link: "#",
      },
    ],
  },
];

const podcasts = [
  {
    title: 'The Echo Chamber',
    date: 'Jan 12, 2025',
    src: 'https://example.com/audio1.mp3',
  },
  {
    title: 'Voices of Youth',
    date: 'Feb 9, 2025',
    src: 'https://example.com/audio2.mp3',
  },
  {
    title: 'Breaking Bias',
    date: 'Mar 2, 2025',
    src: 'https://example.com/audio3.mp3',
  },
  {
    title: 'Voices of the Street',
    date: 'Apr 18, 2025',
    src: 'https://example.com/audio4.mp3',
  },
];

const Podcasts = () => {
  const scrollRefs = useRef([]);

  const scroll = (index, direction) => {
    const ref = scrollRefs.current[index];
    if (ref) {
      ref.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white text-black min-h-screen px-6 py-12 space-y-20">
      <h3 className="text-2xl font-bold  text-center">🎙️ Welcome To Our Podcast Library</h3>
      <section className="space-y-8">
        
        {/*
        <h2 className="text-3xl font-bold border-b pb-2 border-gray-300">Latest Releases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <video controls className="rounded-xl w-full h-64 object-cover">
            <source src={vid} type="video/mp4" />
          </video>
          <video controls className="rounded-xl w-full h-64 object-cover">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        */}
        <div className="mt-4">
  {/* On mobile: horizontal scroll | On md+: 2-column grid */}
  <div className="md:grid md:grid-cols-2 md:gap-6 overflow-x-auto  flex md:block gap-4 scrollbar-hide py-2">
    {podcasts.slice(0, 4).map((podcast, index) => (
      <div
        key={index}
        className="min-w-[80%] md:min-w-0 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-5 shrink-0"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-2v13" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-900">{podcast.title}</h3>
            <p className="text-sm text-green-600">{podcast.date}</p>
          </div>
        </div>
        <audio controls className="w-full accent-green-600 rounded-md">
          <source src={podcast.src} type="audio/mpeg" />
        </audio>
      </div>
    ))}
  </div>
</div>

      </section>

      {podcastGroups.map((group, i) => (
        <section key={i} className="space-y-4 relative">
          <h2 className="text-2xl font-bold border-b pb-2 border-gray-300">{group.category}</h2>

          <div className="relative">
            <button
              onClick={() => scroll(i, "left")}
              className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-10 bg-green-600 p-1 rounded-full shadow-md hover:bg-green-400 transition"
            >
              <ChevronLeft size={18} />
            </button>

            <div
              ref={(el) => (scrollRefs.current[i] = el)}
              className="flex overflow-x-auto gap-4 py-4 scrollbar-hide"
            >
              {group.items.map((item, j) => (
                <a
                  key={j}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[220px] max-w-[220px] shrink-0 block hover:underline"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl w-full h-36 object-cover mb-2"
                  />
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <span className="text-blue-600 text-sm mt-1 inline-block">Listen →</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => scroll(i, "right")}
              className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-10 bg-green-600 p-1 rounded-full shadow-md hover:bg-green-400 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Podcasts;
