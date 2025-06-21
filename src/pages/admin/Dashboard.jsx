import React, { useState, useEffect } from "react";

const sections = ["Featured", "Business", "Technology", "Entertainment", "Sports"];

const dummyData = {
  Featured: [],
  Business: [],
  Technology: [],
  Entertainment: [],
  Sports: [],
};

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Featured");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: "", category: "", date: "", img: null, content: "" });
  const [editingId, setEditingId] = useState(null);

  const [episodes, setEpisodes] = useState([]);
  const [newEpisode, setNewEpisode] = useState({ title: "", category: "", date: "", img: null });

  useEffect(() => {
    setItems(dummyData[selectedSection] || []);
  }, [selectedSection]);

  const handleChange = (e, field, isEpisode = false) => {
    const value = field === "img" ? e.target.files[0] : e.target.value;
    if (isEpisode) {
      setNewEpisode({ ...newEpisode, [field]: value });
    } else {
      setNewItem({ ...newItem, [field]: value });
    }
  };

  const handleAddEpisode = () => {
    const imgURL = newEpisode.img ? URL.createObjectURL(newEpisode.img) : "";
    const newEntry = { ...newEpisode, id: Date.now(), img: imgURL };
    setEpisodes([...episodes, newEntry]);
    setNewEpisode({ title: "", category: "", date: "", img: null });
  };

  const handleAddOrUpdate = () => {
    if (!newItem.title || !newItem.content) return;

    const imgURL = newItem.img ? URL.createObjectURL(newItem.img) : "";

    if (editingId) {
      const updatedItems = items.map((item) =>
        item.id === editingId
          ? { ...item, ...newItem, img: newItem.img instanceof File ? imgURL : item.img }
          : item
      );
      setItems(updatedItems);
      dummyData[selectedSection] = updatedItems;
      setEditingId(null);
    } else {
      const newEntry = {
        ...newItem,
        id: Date.now(),
        img: imgURL,
      };
      const updatedItems = [...items, newEntry];
      setItems(updatedItems);
      dummyData[selectedSection] = updatedItems;
    }

    setNewItem({ title: "", category: "", date: "", img: null, content: "" });
  };

  const handleDelete = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
    dummyData[selectedSection] = filtered;
  };

  const handleEdit = (item) => {
    setNewItem({ ...item, img: item.img });
    setEditingId(item.id);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-br from-white via-green-100 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white transition-all p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">🛠 CTDA Admin Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded shadow"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* =================== Latest Episodes Section =================== */}
        <div className="bg-white dark:bg-gray-800 p-6 mb-10 rounded-xl shadow-lg border-l-4 border-red-600">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">🎧 Latest Episodes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              value={newEpisode.title}
              onChange={(e) => handleChange(e, "title", true)}
              placeholder="Episode Title"
              className="p-3 border rounded-lg focus:outline-green-500"
            />
            <input
              value={newEpisode.category}
              onChange={(e) => handleChange(e, "category", true)}
              placeholder="Category"
              className="p-3 border rounded-lg focus:outline-green-500"
            />
            <input
              type="date"
              value={newEpisode.date}
              onChange={(e) => handleChange(e, "date", true)}
              className="p-3 border rounded-lg focus:outline-green-500"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleChange(e, "img", true)}
              className="p-3 border rounded-lg file:bg-red-600 file:text-white file:border-none"
            />
          </div>
          <button
            onClick={handleAddEpisode}
            className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
          >
            Add Episode
          </button>

          {/* Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {episodes.map((item, index) => (
              <div key={index} className="relative rounded overflow-hidden shadow-lg group">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition" />
                <div className="absolute inset-0 bg-black bg-opacity-40 text-white p-3 flex flex-col justify-end">
                  <p className="text-sm opacity-90">{item.category} / {item.date}</p>
                  <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================== Tabs Section =================== */}
        <div className="flex gap-4 mb-6 border-b border-gray-300 dark:border-gray-600">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                setSelectedSection(sec);
                setEditingId(null);
                setNewItem({ title: "", category: "", date: "", img: null, content: "" });
              }}
              className={`pb-2 transition font-semibold ${
                sec === selectedSection
                  ? "border-b-4 border-green-500 text-green-600 dark:text-green-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* =================== Form Section =================== */}
        <div className="bg-white dark:bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl mb-10 border-l-4 border-green-500">
          <h2 className="text-xl font-bold mb-4">{editingId ? "Edit" : "Add New"} {selectedSection}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              value={newItem.title}
              onChange={(e) => handleChange(e, "title")}
              placeholder="Title"
              className="p-3 border rounded focus:outline-green-500"
            />
            <input
              value={newItem.category}
              onChange={(e) => handleChange(e, "category")}
              placeholder="Category"
              className="p-3 border rounded focus:outline-green-500"
            />
            <input
              type="date"
              value={newItem.date}
              onChange={(e) => handleChange(e, "date")}
              className="p-3 border rounded focus:outline-green-500"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleChange(e, "img")}
              className="p-3 border rounded file:bg-green-500 file:text-white file:border-none"
            />
          </div>
          <textarea
            value={newItem.content}
            onChange={(e) => handleChange(e, "content")}
            placeholder="Full Write-up"
            className="w-full mt-4 p-3 h-32 border rounded focus:outline-green-500"
          />
          <button
            onClick={handleAddOrUpdate}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        {/* =================== Items List =================== */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No items in this section yet.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition hover:shadow-xl"
              >
                {item.img && (
                  <img
                    src={item.img}
                    alt="preview"
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.category} • {item.date}</p>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{item.content}</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
