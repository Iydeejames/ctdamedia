import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// ✅ Your hardcoded images
import img1 from "../../assets/images/podcast/img1.jpg";
import img2 from "../../assets/images/podcast/img2.jpg";
import img3 from "../../assets/images/podcast/img3.jpg";
import img4 from "../../assets/images/podcast/img4.jpg";
import img5 from "../../assets/images/podcast/img5.jpg";
import img6 from "../../assets/images/podcast/img6.jpg";
import img7 from "../../assets/images/podcast/img7.jpg";
import img8 from "../../assets/images/podcast/img8.jpg";
import img9 from "../../assets/images/podcast/img9.jpg";
import img10 from "../../assets/images/podcast/img10.jpg";
import img12 from "../../assets/images/podcast/img12.jpg";
import img13 from "../../assets/images/podcast/img13.jpg";
import img14 from "../../assets/images/podcast/img14.jpg";
import img15 from "../../assets/images/podcast/img15.jpg";
import img16 from "../../assets/images/podcast/img16.jpg";
import img17 from "../../assets/images/podcast/img17.jpg";
import img18 from "../../assets/images/podcast/img18.jpg";
import img19 from "../../assets/images/podcast/img19.jpg";
import img20 from "../../assets/images/podcast/img20.jpg";
import img21 from "../../assets/images/podcast/img21.jpg";
import img22 from "../../assets/images/podcast/img22.jpg";
import img23 from "../../assets/images/podcast/img23.jpg";

// ✅ Hardcoded fallback data
const fallbackData = [
  {
    category: "Culture",
    items: [
      {
        type: "link",
        title: "Culture Clash: Afro vs Western",
        description: "Exploring the tension and blend between African and Western norms.",
        image: img6,
        link: "#",
      },
      {
        type: "link",
        title: "The Evolution of Urban Slang",
        description: "We explore how language shapes and evolves in Afro-diasporic communities.",
        image: img7,
        link: "https://spotify.com/culture-urban-slang",
      },
      {
        type: "link",
        title: "Street Culture & Music",
        description: "From graffiti to breakdancing – what makes the street pulse?",
        image: img8,
        link: "#",
      },
      {
        type: "link",
        title: "The Evolution of Urban Slang",
        description: "We explore how language shapes and evolves in Afro-diasporic communities.",
        image: img9,
        link: "https://spotify.com/culture-urban-slang",
      },
      {
        type: "link",
        title: "Traditional Rites in Modern Times",
        description: "Are cultural rites being lost or transformed in today's world?",
        image: img10,
        link: "https://spotify.com/traditional-rites",
      },
      {
        type: "link",
        title: "Street Culture & Music",
        description: "From graffiti to breakdancing – what makes the street pulse?",
        image: img6,
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
        image: img17,
        link: "#",
      },
      {
        type: "link",
        title: "Inside the Nigerian Film Industry",
        description: "Behind the scenes of Nollywood's booming ecosystem.",
        image: img18,
        link: "https://spotify.com/nollywood-doc",
      },
      {
        type: "link",
        title: "Documenting War & Peace",
        description: "Uncovering stories in war zones and peace tables alike.",
        image: img19,
        link: "#",
      },
      {
        type: "link",
        title: "Voices of Lagos",
        description: "An aural tour through Nigeria’s bustling megacity.",
        image: img17,
        link: "#",
      },
      {
        type: "link",
        title: "Oil & History",
        description: "An investigative series on how oil shaped African geopolitics.",
        image: img18,
        link: "https://spotify.com/oil-africa",
      },
      {
        type: "link",
        title: "Inside the Nigerian Film Industry",
        description: "Behind the scenes of Nollywood's booming ecosystem.",
        image: img19,
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
        image: img22,
        link: "#",
      },
      {
        type: "link",
        title: "African Jazz & Highlife",
        description: "A sonic journey through West Africa's legendary genres.",
        image: img23,
        link: "https://spotify.com/highlife-sound",
      },
      {
        type: "link",
        title: "The Rise of Afrobeats",
        description: "How global charts are embracing Afro sounds.",
        image: img13,
        link: "https://spotify.com/afrobeats-rise",
      },
      {
        type: "link",
        title: "Studio Sessions: Live in Lagos",
        description: "Experience real-time music creation from Lagos studios.",
        image: img20,
        link: "#",
      },
      {
        type: "link",
        title: "African Jazz & Highlife",
        description: "A sonic journey through West Africa's legendary genres.",
        image: img15,
        link: "https://spotify.com/highlife-sound",
      },
      {
        type: "link",
        title: "The Rise of Afrobeats",
        description: "How global charts are embracing Afro sounds.",
        image: img14,
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
        image: img5,
        link: "https://spotify.com/jollof-wars",
      },
      {
        type: "link",
        title: "Palm Oil Stories",
        description: "The untold origin and impact of red gold.",
        image: img4,
        link: "#",
      },
      {
        type: "link",
        title: "A Day at the Lagos Market",
        description: "Dive into the colors, sounds and scents of Africa’s largest markets.",
        image: img3,
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



const Podcasts = () => {
  const scrollRefs = useRef([]);
  const [podcastGroups, setPodcastGroups] = useState([]);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await fetch("https://your-api.com/podcasts"); // Replace with your actual API
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPodcastGroups(data);
        } else {
          setPodcastGroups(fallbackData);
        }
      } catch (err) {
        console.error("Failed to fetch podcast data:", err);
        setPodcastGroups(fallbackData);
      }
    };

    fetchPodcasts();
  }, []);

  const scroll = (index, direction) => {
    const ref = scrollRefs.current[index];
    if (ref) {
      ref.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (modalItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalItem]);
  

  return (
    <div className="bg-white text-black min-h-screen px-6 py-12 space-y-20 relative">
      <h3 className="text-2xl font-bold text-center">🎙️ Welcome To Our Podcast Library</h3>

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
                <div
                  key={j}
                  onClick={() => setModalItem(item)}
                  className="min-w-[220px] max-w-[220px] shrink-0 cursor-pointer hover:underline"
                >
                  <img src={item.image} alt={item.title} className="rounded-xl w-full h-36 object-cover mb-2" />
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <span className="text-blue-600 text-sm mt-1 inline-block">Listen →</span>
                </div>
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

      {/* Modal */}
      {modalItem && (
  <div className="fixed inset-0 z-50 bg-white text-black overflow-y-auto px-6 py-8">
    <button
      onClick={() => setModalItem(null)}
      className="absolute top-6 right-6 text-black hover:text-red-600"
    >
      <X size={28} />
    </button>

    <div className="max-w-3xl mx-auto mt-10">
      <img
        src={modalItem.image}
        alt={modalItem.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h2 className="text-3xl font-bold mb-3">{modalItem.title}</h2>
      <p className="text-gray-800 text-base mb-6">{modalItem.description}</p>

      {modalItem.link && (
        <a
          href={modalItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline font-medium text-lg"
        >
          🎧 Listen Now →
        </a>
      )}
    </div>
  </div>
)}


    </div>
  );
};

export default Podcasts;
