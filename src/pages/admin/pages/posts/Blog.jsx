import { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import TurndownService from "turndown";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import img12 from "../../../../assets/images/hero-page/img12.jpg";

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

export default function  Blog() {
  const [posts, setPosts] = useState([
    // Sample card so admin sees something instantly
    {
      id: "sample",
      title: "Spotlight on Black Innovators",
      description: "Celebrating excellence and achievement.",
      date: "2025-07-01",
      image: img12,
      content: "This is a placeholder post content for Blog.",
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    date: "",
    image: "",
    content: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/posts`)
      .then((res) => res.json())
      .then((data) => {
        const blogPosts = data.filter(
          (p) => p.category?.toLowerCase() === "blog"
        );
        setPosts((prev) => [...blogPosts, ...prev]);
      })
      .catch(() => {});
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

    const newPost = { ...form, category: "Blog" };

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    const result = await res.json();
    const updated = isEditing
      ? posts.map((p) => (p.id === form.id ? result : p))
      : [result, ...posts];

    setPosts(updated);
    setForm({
      id: null,
      title: "",
      description: "",
      date: "",
      image: "",
      content: "",
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
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-800">
      Blog Admin Dashboard
      </h2>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-green-50 border border-green-300 p-4 rounded-sm shadow-md mb-8 space-y-4"
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

<div className="col-span-full">
  <div className="flex items-center space-x-4">
    <label className="cursor-pointer bg-white border text-green-700 px-8 py-2  text-sm hover:bg-green-100 transition">
      Add Image
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
        className="h-20 w-auto rounded shadow"
      />
    )}
  </div>
</div>

          <textarea
            name="description"
            placeholder="Short Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded text-sm col-span-full"
            required
          />
        </div>

        <div className=" bg-white">
          <label className="block font-semibold mb-1 bg-green-50 text-green-700 text-sm">
            Full Article Content
          </label>
          <ReactQuill
            value={form.content}
            onChange={handleContentChange}
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="Write full content here..."
          />
        </div>

        <button
          type="submit"
          className="bg-red-700 text-white px-3 py-2  text-xs hover:bg-green-800 mt-4"
        >
          {isEditing ? "Update" : "Add"} Post
        </button>
      </form>

      {/* POSTS - Compact Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border shadow-sm overflow-hidden text-sm"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-28 object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-green-900 line-clamp-2 text-xs">
                {post.title}
              </h3>
              <p className="text-[11px] text-gray-500 mb-1">{post.date}</p>
              <p className="text-[12px] text-gray-700 line-clamp-2">
                {post.description}
              </p>
              <div className="mt-2 flex justify-between text-[12px] text-green-700">
                <button onClick={() => handleEdit(post)} className="underline">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 underline"
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
