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
  const [selectedSection, setSelectedSection] = useState("Featured");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: "", category: "", date: "", img: null, content: "" });
  const [editingId, setEditingId] = useState(null);

  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [newEpisode, setNewEpisode] = useState({ title: "", category: "", date: "", img: null });
  const [editEpisodeId, setEditEpisodeId] = useState(null);

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

  const handleAddOrUpdate = () => {
    if (!newItem.title || !newItem.content) return;
    const imgURL = newItem.img ? URL.createObjectURL(newItem.img) : "";

    if (editingId) {
      const updatedItems = items.map((item) =>
        item.id === editingId ? { ...item, ...newItem, img: newItem.img instanceof File ? imgURL : item.img } : item
      );
      setItems(updatedItems);
      dummyData[selectedSection] = updatedItems;
      setEditingId(null);
    } else {
      const newEntry = { ...newItem, id: Date.now(), img: imgURL };
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

  const handleAddOrUpdateEpisode = () => {
    if (!newEpisode.title || !newEpisode.img) return;
    const imgURL = newEpisode.img ? URL.createObjectURL(newEpisode.img) : "";

    if (editEpisodeId) {
      const updated = latestEpisodes.map((ep) =>
        ep.id === editEpisodeId ? { ...ep, ...newEpisode, img: imgURL } : ep
      );
      setLatestEpisodes(updated);
      setEditEpisodeId(null);
    } else {
      const newEntry = { ...newEpisode, id: Date.now(), img: imgURL };
      setLatestEpisodes([...latestEpisodes, newEntry]);
    }
    setNewEpisode({ title: "", category: "", date: "", img: null });
  };

  const handleEditEpisode = (ep) => {
    setNewEpisode({ ...ep, img: ep.img });
    setEditEpisodeId(ep.id);
  };

  const handleDeleteEpisode = (id) => {
    setLatestEpisodes(latestEpisodes.filter((ep) => ep.id !== id));
  };

  return (
    <div className="min-h-screen  p-4 md:p-6 space-y-10 text-[14px] md:text-[16px]">
      {/* 🎧 LATEST EPISODES SECTION */}
      <div className="bg-green-100 text-white rounded-2xl p-4 md:p-6 shadow-xl border-l-4 border-green-500">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-extrabold text-green-400">🎧 Latest Episodes</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <input value={newEpisode.title} onChange={(e) => handleChange(e, "title", true)} placeholder="Episode Title" className="p-2 md:p-3 rounded bg-black text-white border border-green-600 placeholder-gray-400" />
          <input value={newEpisode.category} onChange={(e) => handleChange(e, "category", true)} placeholder="Category" className="p-2 md:p-3 rounded bg-black text-white border border-green-600 placeholder-gray-400" />
          <input type="date" value={newEpisode.date} onChange={(e) => handleChange(e, "date", true)} className="p-2 md:p-3 rounded bg-black text-white border border-green-600" />
          <input type="file" accept="image/*" onChange={(e) => handleChange(e, "img", true)} className="p-2 md:p-3 rounded bg-black text-white file:bg-green-600 file:border-none file:px-3 file:py-2" />
        </div>
        <button onClick={handleAddOrUpdateEpisode} className="bg-green-600 hover:bg-green-700 px-4 md:px-6 py-2 text-white rounded font-semibold">
          {editEpisodeId ? "Update Episode" : "Add Episode"}
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {latestEpisodes.map((item) => (
            <div key={item.id} className="relative group">
              <img src={item.img} alt={item.title} className="w-full h-36 md:h-48 object-cover rounded" />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-3 md:p-4 flex flex-col justify-end rounded transition group-hover:bg-opacity-80">
                <p className="text-xs md:text-sm text-green-300">{item.category} / {item.date}</p>
                <h3 className="text-sm md:text-lg font-semibold leading-tight">{item.title}</h3>
              </div>
              <div className="absolute top-2 right-2 flex gap-1">
                <button onClick={() => handleEditEpisode(item)} className="bg-white text-black px-2 py-1 text-xs rounded hover:bg-gray-200">Edit</button>
                <button onClick={() => handleDeleteEpisode(item.id)} className="bg-red-600 text-white px-2 py-1 text-xs rounded hover:bg-red-700">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ MAIN DASHBOARD SECTIONS */}
      <div>
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-black">🛠 Admin Dashboard</h1>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-6 border-b border-gray-200">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                setSelectedSection(sec);
                setEditingId(null);
                setNewItem({ title: "", category: "", date: "", img: null, content: "" });
              }}
              className={`relative pb-2 text-sm md:text-lg font-semibold transition duration-300 ${sec === selectedSection ? "text-green-600 border-b-4 border-green-500" : "text-gray-500 hover:text-black"}`}
            >
              {sec}
            </button>
          ))}
        </div>

        <div className="bg-green-200 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-6 mb-8 border-l-4 border-green-500">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black">{editingId ? "Edit" : "Add New"} {selectedSection}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input value={newItem.title} onChange={(e) => handleChange(e, "title")} placeholder="Title" className="px-3 py-2 border rounded-lg shadow-sm focus:ring-2 ring-green-500" />
            <input value={newItem.category} onChange={(e) => handleChange(e, "category")} placeholder="Category" className="px-3 py-2 border rounded-lg shadow-sm focus:ring-2 ring-green-500" />
            <input type="date" value={newItem.date} onChange={(e) => handleChange(e, "date")} className="px-3 py-2 border rounded-lg shadow-sm focus:ring-2 ring-green-500" />
            <input type="file" accept="image/*" onChange={(e) => handleChange(e, "img")} className="px-3 py-2 border rounded-lg shadow-sm file:bg-green-500 file:text-white file:rounded file:border-none file:px-4 file:py-2" />
          </div>
          <textarea value={newItem.content} onChange={(e) => handleChange(e, "content")} placeholder="Full Write-up" className="w-full mt-3 md:mt-4 p-3 h-32 md:h-36 border rounded-lg shadow-sm focus:ring-2 ring-green-500" />
          <button onClick={handleAddOrUpdate} className="mt-4 md:mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 md:px-6 md:py-3 rounded-lg transition">
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {items.length === 0 ? (
            <p className="text-gray-500 text-sm md:text-lg col-span-full">No items in this section yet.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="rounded-xl shadow-lg overflow-hidden bg-white border border-gray-100 transition hover:shadow-xl">
                {item.img && <img src={item.img} alt="preview" className="w-full h-32 md:h-40 object-cover" />}
                <div className="p-3 md:p-4 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-black mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">{item.category} • {item.date}</p>
                    <p className="text-sm text-gray-700 line-clamp-3">{item.content}</p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => handleEdit(item)} className="px-3 py-1 md:px-4 md:py-2 bg-black text-white rounded hover:bg-gray-800 text-xs md:text-sm">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="px-3 py-1 md:px-4 md:py-2 bg-red-600 text-white rounded hover:bg-red-700 text-xs md:text-sm">Delete</button>
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
