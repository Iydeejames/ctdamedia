import { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import img3 from "../../../../assets/images/hero-page/img3.jpg";



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
        this.quill.insertText(range.index + 1, "\n");
      };
      reader.readAsDataURL(file);
    }
  };
}

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
];

export default function SportsAdmin() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    date: "",
    image: "",
    content: "",
    category: "Sports",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/posts`)
      .then((res) => res.json())
      .then((data) => {
        const sportsPosts = data.filter(
          (post) => post.category?.toLowerCase() === "sports"
        );
        setPosts(sportsPosts);
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
    const url = isEditing
      ? `${API_BASE}/posts/${form.id}`
      : `${API_BASE}/posts`;

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
    setForm({
      id: null,
      title: "",
      description: "",
      date: "",
      image: "",
      content: "",
      category: "Sports",
    });
    setIsEditing(false);
  };

  const handleEdit = (post) => {
    setForm(post);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await fetch(`${API_BASE}/posts/${id}`, { method: "DELETE" });
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    localStorage.setItem("sportsPosts", JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Manage Sports Posts
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-green-50 border border-green-200 shadow-md p-4 rounded-lg mb-8 space-y-4"
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
            type="text"
            name="date"
            placeholder="dd/mm/yyyy"
            value={form.date}
            onChange={handleChange}
            className="border p-2 rounded text-sm text-gray-800"
            required
          />

          <label className="cursor-pointer text-green-600 text-sm">
            <span className="bg-green-100 border border-green-400 text-green-700 px-3 py-1 rounded hover:bg-green-200">
              Add Image
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="w-full h-28 object-cover rounded col-span-full"
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

        <div>
          <label className="block font-semibold mb-1 text-sm">Full Article Content</label>
          <ReactQuill
            value={form.content}
            onChange={handleContentChange}
            theme="snow"
            modules={modules}
            formats={formats}
            className="bg-white text-sm"
            placeholder="Write full article content here..."
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4 text-sm"
        >
          {isEditing ? "Update" : "Add"} Post
        </button>
      </form>

      {/* Hardcoded Sample Card to Preview UI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src={img3}  
            alt="Sample"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h3 className="text-sm font-semibold text-green-800 mb-1">
              Sample Sports Article
            </h3>
            <p className="text-xs text-gray-500 mb-1">01/07/2025</p>
            <p className="text-sm text-gray-600">This is a hardcoded preview post card.</p>
            <div className="mt-2 flex gap-3 text-sm">
              <button className="text-green-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/* Real Posts Rendered Below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-green-800 mb-1">{post.title}</h3>
              <p className="text-xs text-gray-500 mb-1">{post.date}</p>
              <p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>
              <div className="mt-2 flex gap-3 text-sm">
                <button
                  onClick={() => handleEdit(post)}
                  className="text-green-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
