// src/pages/main/Detail.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { allPosts } from "../../data/allPosts"; // ✅ Correct path to allPosts.js

export default function Detail() {
  const { category, slug } = useParams();
  const [post, setPost] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const categoryPosts = allPosts[category] || [];
    const matchedPost = categoryPosts.find((p) => p.slug === slug);
    setPost(matchedPost);
  }, [category, slug]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <div className="text-gray-800 text-base leading-relaxed space-y-4">
        <p>{post.description}</p>
        <p>
          {post.content ||
            "This is where the full article content will appear. You can render videos, images, and even rich text blocks if you're using a CMS or a rich editor."}
        </p>

        {post.extraMedia?.length > 0 && (
          <div className="space-y-4 mt-4">
            {post.extraMedia.map((media, index) => {
              if (media.type === "image") {
                return (
                  <img
                    key={index}
                    src={media.src}
                    alt={`extra-${index}`}
                    className="w-full rounded"
                  />
                );
              }
              if (media.type === "video") {
                return (
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={media.src}
                      title={`video-${index}`}
                      className="w-full h-64 rounded"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>

      {/* Comment Section */}
      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-2"
          />
          <textarea
            placeholder="Your Comment"
            className="w-full border rounded p-2 h-24"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}
