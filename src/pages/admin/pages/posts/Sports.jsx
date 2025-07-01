import { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";

const API_BASE = "https://ctda-api.onrender.com/api";
Quill.register("modules/imageResize", ImageResize);

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
    },
  },
  imageResize: {
    parchment: Quill.import("parchment"),
  },
};

function imageHandler() {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();
  input.onchange = () => {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        const range = this.quill.getSelection();
        this.quill.insertEmbed(range.index, "image", base64);
        this.quill.setSelection(range.index + 1);
      };
      reader.readAsDataURL(file);
    }
  };
}

const formats = [
  "header", "bold", "italic", "underline", "strike", "list", "bullet", "link", "image"
];

export default function SportsAdmin() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    id: null, title: "", description: "", date: "", image: "", content: "", category: "Sports"
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/posts`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((post) => post.category === "Sports");
        setPosts(filtered);
        localStorage.setItem("sportsPosts", JSON.stringify(filtered));
      })
      .catch(() => {
        const stored = localStorage.getItem("sportsPosts");
        if (stored) setPosts(JSON.parse(stored));
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setForm({ ...form, image: preview });
    }
  };

  const handleContentChange = (value) => {
    setForm({ ...form, content: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API_BASE}/posts/${form.id}` : `${API_BASE}/posts`;

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    const updated = isEditing
      ? posts.map((p) => (p.id === form.id ? result : p))
      : [result, ...posts];

    setPosts(updated);
    localStorage.setItem("sportsPosts", JSON.stringify(updated));
    setForm({ id: null, title: "", description: "", date: "", image: "", content: "", category: "Sports" });
    setIsEditing(false);
    setShowForm(false);
  };

  const handleEdit = (post) => {
    setForm(post);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_BASE}/posts/${id}`, { method: "DELETE" });
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    localStorage.setItem("sportsPosts", JSON.stringify(updated));
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-green-800 to-green-500 text-white rounded-lg p-6 shadow mb-6">
        <h1 className="text-3xl font-bold">Manage Sports Posts</h1>
        <p className="text-sm mt-1">Add, edit, and manage all articles under the sports category.</p>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setIsEditing(false);
            setForm({ id: null, title: "", description: "", date: "", image: "", content: "", category: "Sports" });
          }}
          className="mt-4 bg-white text-green-700 px-4 py-2 rounded hover:bg-green-100 shadow text-sm"
        >
          {showForm ? "Close Form" : "Add New Post"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-green-200 shadow-lg p-4 sm:p-6 rounded-lg mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Post Title"
              value={form.title}
              onChange={handleChange}
              className="border p-2 rounded text-sm"
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border p-2 rounded text-sm"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border p-2 rounded text-sm"
            />
            {form.image && (
              <img
                src={form.image}
                alt="Preview"
                className="w-full h-32 object-cover rounded col-span-full"
              />
            )}
            <textarea
              name="description"
              placeholder="Short Description"
              value={form.description}
              onChange={handleChange}
              className="border p-2 rounded col-span-full text-sm"
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <label className="block font-semibold mb-1 text-sm">Full Article Content</label>
            <ReactQuill
              value={form.content}
              onChange={handleContentChange}
              theme="snow"
              modules={modules}
              formats={formats}
              className="bg-white text-sm"
              style={{ fontSize: "0.875rem" }}
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm"
          >
            {isEditing ? "Update Post" : "Publish Post"}
          </button>
        </form>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No sports posts available yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-green-600 font-medium mb-1">{post.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.description}</p>

                {/* Toggle Button for Full Content */}
                <button
                  onClick={() => toggleExpand(post.id)}
                  className="mt-3 text-xs text-green-700 hover:underline"
                >
                  {expandedId === post.id ? "Hide Content" : "Show Full Content"}
                </button>

                {/* Expanded Content */}
                {expandedId === post.id && (
                  <div
                    className="mt-2 p-3 bg-green-50 border border-green-200 rounded text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                )}

                <div className="mt-3 flex gap-3 text-sm">
                  <button onClick={() => handleEdit(post)} className="text-green-700 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
