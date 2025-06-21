import React, { useState, useEffect } from "react";
import {
  FaBars, FaHome, FaMusic, FaPodcast, FaEnvelope, FaChartBar, FaInfoCircle,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const pages = ["Home", "About Us", "Music", "Podcasts", "Contact"];
const categories = ["Business", "Technology", "Entertainment", "Sports"];

const dummyUsageData = [
  { name: 'Mon', views: 240 },
  { name: 'Tue', views: 360 },
  { name: 'Wed', views: 500 },
  { name: 'Thu', views: 320 },
  { name: 'Fri', views: 780 },
  { name: 'Sat', views: 430 },
  { name: 'Sun', views: 290 },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");
  const [data, setData] = useState({});
  const [newEntry, setNewEntry] = useState({ title: "", date: "", category: "", content: "", img: null });
  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [newEpisode, setNewEpisode] = useState({ title: "", category: "", date: "", img: null });
  const [editEpisodeId, setEditEpisodeId] = useState(null);

  useEffect(() => {
    const initialData = {};
    categories.forEach((cat) => {
      initialData[cat] = [];
    });
    setData(initialData);
  }, []);

  const handleAddEntry = () => {
    const updated = { ...data };
    const imgURL = newEntry.img ? URL.createObjectURL(newEntry.img) : "";
    if (newEntry.category && updated[newEntry.category]) {
      updated[newEntry.category].push({ ...newEntry, id: Date.now(), img: imgURL });
      setData(updated);
      setNewEntry({ title: "", date: "", category: "", content: "", img: null });
    }
  };

  const handleChangeEpisode = (e, field) => {
    const value = field === "img" ? e.target.files[0] : e.target.value;
    setNewEpisode({ ...newEpisode, [field]: value });
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
      const newEp = { ...newEpisode, id: Date.now(), img: imgURL };
      setLatestEpisodes([...latestEpisodes, newEp]);
    }
    setNewEpisode({ title: "", category: "", date: "", img: null });
  };

  const handleEditEpisode = (ep) => {
    setNewEpisode({ ...ep });
    setEditEpisodeId(ep.id);
  };

  const handleDeleteEpisode = (id) => {
    setLatestEpisodes(latestEpisodes.filter((ep) => ep.id !== id));
  };

  const handleDeleteEntry = (cat, id) => {
    const updated = { ...data };
    updated[cat] = updated[cat].filter((entry) => entry.id !== id);
    setData(updated);
  };

  const handleEditEntry = (entry) => {
    setNewEntry({ ...entry });
  };

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
      <div className={`fixed md:static top-0 left-0 w-64 bg-white shadow-lg h-full z-20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0`}>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h1 className="text-xl font-bold text-green-600 flex items-center gap-2">CTDA Admin</h1>
          <FiX onClick={() => setSidebarOpen(false)} className="md:hidden text-xl cursor-pointer" />
        </div>
        <nav className="p-4 space-y-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setSelectedPage(page)}
              className={`block w-full text-left px-3 py-2 rounded-lg font-medium ${selectedPage === page ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-red-100"}`}
            >
              {page === "Home" ? <FaHome className="inline mr-2" /> : page === "About Us" ? <FaInfoCircle className="inline mr-2" /> : page === "Music" ? <FaMusic className="inline mr-2" /> : page === "Podcasts" ? <FaPodcast className="inline mr-2" /> : <FaEnvelope className="inline mr-2" />}
              {page}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-4 md:p-6 w-full">
        <div className="md:hidden mb-4 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(true)} className="text-green-600 text-2xl"><FaBars /></button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-green-700">{selectedPage} Page Content</h2>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow rounded p-4">
            <p className="text-gray-500 text-sm">Total Posts</p>
            <p className="text-xl font-bold">{Object.values(data).reduce((sum, arr) => sum + arr.length, 0)}</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <p className="text-gray-500 text-sm">Episodes Published</p>
            <p className="text-xl font-bold">{latestEpisodes.length}</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <p className="text-gray-500 text-sm">Last Update</p>
            <p className="text-xl font-bold">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <p className="text-gray-500 text-sm">Active Sections</p>
            <p className="text-xl font-bold">{categories.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2"><FaChartBar /> Site Usage This Week</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={dummyUsageData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#DC2626" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-semibold text-red-800 mb-4">🎧 Latest Episodes</h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 mb-4">
            <input value={newEpisode.title} onChange={(e) => handleChangeEpisode(e, "title")} placeholder="Episode Title" className="p-2 border border-red-300 rounded" />
            <input value={newEpisode.category} onChange={(e) => handleChangeEpisode(e, "category")} placeholder="Category" className="p-2 border border-red-300 rounded" />
            <input type="date" value={newEpisode.date} onChange={(e) => handleChangeEpisode(e, "date")} className="p-2 border border-red-300 rounded" />
            <input type="file" onChange={(e) => handleChangeEpisode(e, "img")} className="p-2 border border-red-300 rounded" />
          </div>
          <button onClick={handleAddOrUpdateEpisode} className="bg-red-600 text-white px-4 py-2 rounded">
            {editEpisodeId ? "Update Episode" : "Add Episode"}
          </button>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
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

        <div className="bg-green-50 border-l-4 border-green-600 rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">📝 Add Section Content</h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 mb-4">
            <input value={newEntry.title} onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })} placeholder="Title" className="p-2 border border-green-300 rounded" />
            <input type="date" value={newEntry.date} onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })} className="p-2 border border-green-300 rounded" />
            <select value={newEntry.category} onChange={(e) => setNewEntry({ ...newEntry, category: e.target.value })} className="p-2 border border-green-300 rounded">
              <option value="">Select Category</option>
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <input type="file" onChange={(e) => setNewEntry({ ...newEntry, img: e.target.files[0] })} className="p-2 border border-green-300 rounded" />
            <textarea value={newEntry.content} onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })} placeholder="Content" className="p-2 border border-green-300 rounded h-24 md:h-auto" />
          </div>
          <button onClick={handleAddEntry} className="bg-green-600 text-white px-4 py-2 rounded">Add Entry</button>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{cat}</h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {data[cat] && data[cat].length > 0 ? data[cat].map((entry) => (
                <div key={entry.id} className="bg-white rounded shadow p-3">
                  {entry.img && <img src={entry.img} alt={entry.title} className="w-full h-32 object-cover rounded mb-2" />}
                  <h4 className="text-lg font-semibold text-green-700">{entry.title}</h4>
                  <p className="text-sm text-gray-500">{entry.date}</p>
                  <p className="text-gray-700 mt-1 line-clamp-3">{entry.content}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => handleEditEntry(entry)} className="text-xs bg-black text-white px-2 py-1 rounded">Edit</button>
                    <button onClick={() => handleDeleteEntry(cat, entry.id)} className="text-xs bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                  </div>
                </div>
              )) : <p className="text-gray-500 text-sm">No content in this category yet.</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
