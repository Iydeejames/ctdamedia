import { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageResize", ImageResize);

const API_BASE = "https://ctda-api.onrender.com/api";

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

export default function BusinessAdmin() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    date: "",
    image: "",
    content: "",
    category: "Business",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/posts`)
      .then((res) => res.json())
      .then((data) =>
        setPosts(data.filter((p) => p.category.toLowerCase() === "business"))
      );
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
    setForm({
      id: null,
      title: "",
      description: "",
      date: "",
      image: "",
      content: "",
      category: "Business",
    });
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
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Manage Business Posts</h2>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {showForm ? "Cancel" : isEditing ? "Edit Post" : "Add New Post"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow p-4 rounded-lg mb-6 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border p-2 rounded"
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
              className="border p-2 rounded col-span-full"
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1">Full Article Content</label>
            <ReactQuill
              value={form.content}
              onChange={handleContentChange}
              theme="snow"
              modules={modules}
              formats={formats}
              className="bg-white"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
          >
            {isEditing ? "Update" : "Add"} Post
          </button>
        </form>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row gap-4"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full sm:w-32 h-32 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-700 text-sm mb-1">{post.description}</p>
              <div className="mt-2 flex gap-3 text-sm">
                <button
                  onClick={() => handleEdit(post)}
                  className="text-blue-600 underline"
                >
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
