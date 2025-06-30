import { useState } from "react";

const initialData = [
  {
    id: 1,
    title: "Exclusive Interview with Rising Artist",
    date: "2025-06-28",
    description: "We caught up with one of Africa’s hottest young talents.",
    image: "https://via.placeholder.com/150",
  },
];

export default function Featured() {
  const [posts, setPosts] = useState(initialData);
  const [form, setForm] = useState({ id: null, title: "", description: "", date: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPosts(posts.map((p) => (p.id === form.id ? form : p)));
      setIsEditing(false);
    } else {
      const newPost = { ...form, id: Date.now() };
      setPosts([newPost, ...posts]);
    }
    setForm({ id: null, title: "", description: "", date: "", image: "" });
  };

  const handleEdit = (post) => {
    setForm(post);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Manage Featured Posts</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6 space-y-4">
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
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Short Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded col-span-full"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {isEditing ? "Update" : "Add"} Post
        </button>
      </form>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow rounded flex gap-4 items-start">
            <img src={post.image} alt={post.title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-700">{post.description}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="text-blue-600 text-sm underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 text-sm underline"
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
