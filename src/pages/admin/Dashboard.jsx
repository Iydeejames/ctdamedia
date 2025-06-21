import React, { useState, useEffect } from "react";
import { FaPodcast, FaNewspaper, FaVideo, FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FiX } from "react-icons/fi";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="flex min-h-screen bg-gray-100 text-sm md:text-base overflow-x-hidden">
      {/* Sidebar */}
      <div className={`fixed md:static top-0 left-0 w-64 bg-white shadow-lg h-full z-20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0`}>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h1 className="text-xl font-bold text-green-600 flex items-center gap-2"><MdDashboard /> CTDA Admin</h1>
          <FiX onClick={() => setSidebarOpen(false)} className="md:hidden text-xl cursor-pointer" />
        </div>
        <nav className="p-4 space-y-2">
          {sections.map(sec => (
            <button
              key={sec}
              onClick={() => {
                setSelectedSection(sec);
                setEditingId(null);
                setNewItem({ title: "", category: "", date: "", img: null, content: "" });
              }}
              className={`block w-full text-left px-3 py-2 rounded-lg font-medium ${sec === selectedSection ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"}`}
            >
              {sec}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 w-full">
        {/* Mobile Navbar */}
        <div className="md:hidden mb-4 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(true)} className="text-green-600 text-2xl"><FaBars /></button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-gray-500">Total Articles</p>
            <h2 className="text-xl font-bold text-green-600">{dummyData.Featured.length + dummyData.Business.length}</h2>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-gray-500">Latest Episodes</p>
            <h2 className="text-xl font-bold text-green-600">{latestEpisodes.length}</h2>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-gray-500">Videos</p>
            <h2 className="text-xl font-bold text-green-600">Coming Soon</h2>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-gray-500">Visitors</p>
            <h2 className="text-xl font-bold text-green-600">Live</h2>
          </div>
        </div>

        {/* Latest Episodes Section */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4">🎧 Latest Episodes</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <input value={newEpisode.title} onChange={(e) => handleChange(e, "title", true)} placeholder="Title" className="p-2 border rounded" />
            <input value={newEpisode.category} onChange={(e) => handleChange(e, "category", true)} placeholder="Category" className="p-2 border rounded" />
            <input type="date" value={newEpisode.date} onChange={(e) => handleChange(e, "date", true)} className="p-2 border rounded" />
            <input type="file" onChange={(e) => handleChange(e, "img", true)} className="p-2 border rounded" />
          </div>
          <button onClick={handleAddOrUpdateEpisode} className="bg-green-600 text-white px-4 py-2 rounded">
            {editEpisodeId ? "Update" : "Add"} Episode
          </button>
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            {latestEpisodes.map((ep) => (
              <div key={ep.id} className="bg-white shadow rounded overflow-hidden">
                <img src={ep.img} alt="" className="h-32 w-full object-cover" />
                <div className="p-3">
                  <p className="text-sm text-gray-500">{ep.category} - {ep.date}</p>
                  <h3 className="font-semibold text-gray-800">{ep.title}</h3>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => handleEditEpisode(ep)} className="text-xs bg-black text-white px-2 py-1 rounded">Edit</button>
                    <button onClick={() => handleDeleteEpisode(ep.id)} className="text-xs bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Content Manager */}
        <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4">📝 Manage {selectedSection}</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input value={newItem.title} onChange={(e) => handleChange(e, "title")} placeholder="Title" className="p-2 border rounded" />
          <input value={newItem.category} onChange={(e) => handleChange(e, "category")} placeholder="Category" className="p-2 border rounded" />
          <input type="date" value={newItem.date} onChange={(e) => handleChange(e, "date")} className="p-2 border rounded" />
          <input type="file" onChange={(e) => handleChange(e, "img")} className="p-2 border rounded" />
        </div>
        <textarea value={newItem.content} onChange={(e) => handleChange(e, "content")} placeholder="Content" className="w-full p-3 h-24 border rounded mb-2" />
        <button onClick={handleAddOrUpdate} className="bg-green-600 text-white px-4 py-2 rounded mb-6">
          {editingId ? "Update" : "Add"} Content
        </button>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded shadow overflow-hidden">
              {item.img && <img src={item.img} className="h-32 w-full object-cover" />}
              <div className="p-3">
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category} • {item.date}</p>
                <p className="text-sm mt-1 line-clamp-3">{item.content}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => handleEdit(item)} className="text-xs bg-black text-white px-2 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="text-xs bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
