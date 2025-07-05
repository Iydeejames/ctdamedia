// src/pages/main/FullPost.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const FullPost = () => {
  const { category, slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/blogs");
        const match = res.data.find((p) => p.slug === slug);
        setPost(match);
      } catch (err) {
        console.error("Failed to load post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div className="p-6 text-center text-gray-600">Loading post...</div>;

  if (!post) return <div className="p-6 text-center text-red-600">Post not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={post.displayImage}
        alt={post.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-extrabold mb-3 text-green-800">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {post.category} • {new Date(post.timestamp).toDateString()}
      </p>
      <p className="text-gray-700 mb-6">{post.description}</p>
      <div className="prose max-w-none text-gray-900">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default FullPost;
