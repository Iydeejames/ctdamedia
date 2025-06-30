// src/data/allPosts.js
import img1 from "../assets/images/hero-page/img1.jpg";
import img2 from "../assets/images/hero-page/img2.jpg";
import img3 from "../assets/images/hero-page/img3.jpg";
import img4 from "../assets/images/hero-page/img4.png";
import img5 from "../assets/images/hero-page/img5.jpg";
import img6 from "../assets/images/hero-page/img6.jpg";
import vid from "../assets/videos/vid.mp4";
import vid1 from "../assets/videos/vid1.mp4";
import vid3 from "../assets/videos/vid3.mp4";


export const allPosts = [
  {
    id: "1",
    title: "Inside the Culture: Voices of a New Generation",
    category: "Culture",
    date: "2025-06-25",
    shortDescription: "An exploration into the rise of youth culture and artistic expression in urban communities.",
    content: `This article dives deep into the vibrant cultural expressions coming from young creatives in urban neighborhoods. From music to fashion, the shift represents a major cultural wave that challenges traditional media representation. Interviews, stories, and movements are reshaping what modern African culture means today.`,
    image: img1,
    extraMedia: [
      { type: "image", src: img3 },
      { type: "video", src: vid }
    ]
  },
  {
    id: "2",
    title: "Black Business Spotlight: Growth Against All Odds",
    category: "Business",
    date: "2025-06-28",
    shortDescription: "A look into Black-owned businesses navigating modern economic challenges.",
    content: `Despite institutional barriers, Black entrepreneurs are growing powerful brands and reshaping local economies. This feature highlights several standout businesses, their stories, and the tools they're using to scale in the digital age.`,
    image: img2,
    extraMedia: [
      { type: "image", src: img4 },
      { type: "video", src: vid1 }
    ]
  },
  {
    id: "3",
    title: "Entertainment as Resistance: The Stage, the Screen, the Message",
    category: "Entertainment",
    date: "2025-06-20",
    shortDescription: "Film, theatre, and music as tools for social critique and resistance.",
    content: `In recent years, entertainment has become more than just a source of amusement. It has become a powerful weapon for resistance and cultural affirmation. This editorial looks at recent films and shows that tackle police brutality, racism, and Afro-futurism.`,
    image: img5,
    extraMedia: [
      { type: "image", src: img6 },
    ]
  },
  {
    id: "4",
    title: "The Sound of Change: Black Musicians Redefining Genres",
    category: "Music",
    date: "2025-06-22",
    shortDescription: "Black musicians around the world are fusing sounds to create something entirely new.",
    content: `Afrobeats, R&B, drill, amapiano — the boundaries are fading. Artists are bending genres, adding local flavor, and reshaping the global soundscape. This piece explores the musicians at the forefront and the impact their work is having culturally and commercially.`,
    image: img4,
    extraMedia: [
      { type: "video", src: vid3 }
    ]
  }
];
