// src/pages/main/Detail.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_BASE = "https://ctda-api.onrender.com/api";

export default function Detail() {
  // Route params from the URL: /:category/:slug
  const { category, slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 Fetch all posts from the backend
    fetch(`${API_BASE}/posts`)
      .then((res) => res.json())
      .then((data) => {
        // 🔹 Find the post that matches the slug from the URL
        const matched = data.find((item) => item.slug === slug);
        setPost(matched);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch post:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-red-600">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-6 pb-16 max-w-4xl">
      {/* ✅ HERO IMAGE */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ Title and Date */}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>

      {/* ✅ Short Description */}
      {post.description && (
        <p className="text-gray-700 text-base mb-6">{post.description}</p>
      )}

      {/* ✅ RICH CONTENT BODY (HTML from Quill) */}
      <div
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* ✅ Extra Media (if backend provides extra images/videos) */}
      {post.extraMedia?.length > 0 && (
        <div className="space-y-4 mt-10">
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

      {/* Comment Section */}
      <div className="mt-12 border-t pt-8">
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
