import { useState } from "react";
import { allPosts } from "../../../../data/allPosts";
import { Link } from "react-router-dom";

export default function BusinessAdmin() {
  const [editingPost, setEditingPost] = useState(null);
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    content: "",
    image: "",
  });

  const businessPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === "business"
  );

  const handleEditClick = (post) => {
    setEditingPost(post.id);
    setForm({
      title: post.title,
      shortDescription: post.shortDescription,
      content: post.content,
      image: post.image,
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // 🔄 You’d send this data to your backend here
    alert("Post updated (simulate saving to database)");
    setEditingPost(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manage Business Posts</h1>
          <p className="text-gray-600 text-sm mt-1">Update or add business articles.</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm">
          + Add New Post
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {businessPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{post.date}</p>
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {post.shortDescription}
              </p>
              <div className="flex gap-3 mt-4">
                <Link
                  to={`/business/${post.slug}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  View
                </Link>
                <button
                  className="text-sm text-yellow-600 hover:underline"
                  onClick={() => handleEditClick(post)}
                >
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:underline" disabled>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingPost && (
        <div className="mt-10 bg-white rounded-lg p-6 shadow border">
          <h2 className="text-xl font-bold mb-4">Edit Post</h2>
          <div className="grid gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="border p-2 rounded w-full text-sm"
            />
            <input
              type="text"
              name="shortDescription"
              placeholder="Short Description"
              value={form.shortDescription}
              onChange={handleChange}
              className="border p-2 rounded w-full text-sm"
            />
            <textarea
              name="content"
              placeholder="Full Content"
              rows="5"
              value={form.content}
              onChange={handleChange}
              className="border p-2 rounded w-full text-sm"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={form.image}
              onChange={handleChange}
              className="border p-2 rounded w-full text-sm"
            />
            <div className="flex gap-4 mt-2">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingPost(null)}
                className="text-sm text-gray-600 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
