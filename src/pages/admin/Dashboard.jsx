import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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

const pollTemplate = `
  <div class="poll">
    <p><strong>What do you think about this topic?</strong></p>
    <form onsubmit="event.preventDefault(); alert('Thank you for voting!')">
      <label><input type="radio" name="poll" value="1"> Option 1</label><br>
      <label><input type="radio" name="poll" value="2"> Option 2</label><br>
      <label><input type="radio" name="poll" value="3"> Option 3</label><br>
      <button type="submit">Vote</button>
    </form>
  </div>
`;

const commentBoxTemplate = `
  <div class="comment-box">
    <h4>Leave a comment</h4>
    <form onsubmit="event.preventDefault(); alert('Thank you for your comment!')">
      <input type="text" placeholder="Your name" required/><br/>
      <textarea placeholder="Your comment" required></textarea><br/>
      <button type="submit">Submit</button>
    </form>
  </div>
`;

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");
  const [data, setData] = useState({});
  const [newEntry, setNewEntry] = useState({ title: "", date: "", category: "", content: "", img: null });
  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [newEpisode, setNewEpisode] = useState({ title: "", category: "", date: "", img: null, content: "" });
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
    if (!newEpisode.title || !newEpisode.category || !newEpisode.date || !newEpisode.img || !newEpisode.content) return;

    let imgURL;
    if (typeof newEpisode.img === "string") {
      imgURL = newEpisode.img;
    } else {
      imgURL = URL.createObjectURL(newEpisode.img);
    }

    const newEp = {
      ...newEpisode,
      img: imgURL,
      id: editEpisodeId || Date.now()
    };

    const updatedEpisodes = editEpisodeId
      ? latestEpisodes.map((ep) => (ep.id === editEpisodeId ? newEp : ep))
      : [...latestEpisodes, newEp];

    setLatestEpisodes(updatedEpisodes);
    setEditEpisodeId(null);
    setNewEpisode({ title: "", category: "", date: "", img: null, content: "" });
  };

  const handleEditEpisode = (ep) => {
    setNewEpisode({ ...ep, img: ep.img.startsWith("blob:") ? ep.img : null });
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

  const appendToContent = (html) => {
    setNewEntry(prev => ({ ...prev, content: prev.content + html }));
  };

  const appendToEpisodeContent = (html) => {
    setNewEpisode(prev => ({ ...prev, content: prev.content + html }));
  };

  return (
    <div className="flex min-h-screen bg-white overflow-x-hidden">
      <div className="fixed md:static top-0 left-0 w-64 bg-white shadow-lg h-full z-20">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h1 className="text-xl font-bold text-green-600">CTDA Admin</h1>
          <FiX onClick={() => setSidebarOpen(false)} className="md:hidden text-xl cursor-pointer" />
        </div>
        <nav className="p-4 space-y-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setSelectedPage(page)}
              className={`block w-full text-left px-3 py-2 rounded-lg font-medium ${selectedPage === page ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-red-100"}`}
            >
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

        <div className="bg-red-50 border-l-4 border-red-600 rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-semibold text-red-800 mb-4">🎧 Latest Episodes</h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 mb-4">
            <input value={newEpisode.title} onChange={(e) => handleChangeEpisode(e, "title")} placeholder="Episode Title" className="p-2 border border-red-300 rounded" />
            <input value={newEpisode.category} onChange={(e) => handleChangeEpisode(e, "category")} placeholder="Category" className="p-2 border border-red-300 rounded" />
            <input type="date" value={newEpisode.date} onChange={(e) => handleChangeEpisode(e, "date")} className="p-2 border border-red-300 rounded" />
            <input type="file" onChange={(e) => handleChangeEpisode(e, "img")} className="p-2 border border-red-300 rounded" />
            <div className="col-span-full">
              <ReactQuill theme="snow" value={newEpisode.content} onChange={(value) => setNewEpisode({ ...newEpisode, content: value })} />
              <div className="flex gap-2 mt-2">
                <button className="text-xs bg-green-500 text-white px-2 py-1 rounded" onClick={() => appendToEpisodeContent(pollTemplate)}>+ Poll</button>
                <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded" onClick={() => appendToEpisodeContent(commentBoxTemplate)}>+ Comment Box</button>
              </div>
            </div>
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
            <div className="col-span-full">
              <ReactQuill theme="snow" value={newEntry.content} onChange={(value) => setNewEntry({ ...newEntry, content: value })} />
              <div className="flex gap-2 mt-2">
                <button className="text-xs bg-green-500 text-white px-2 py-1 rounded" onClick={() => appendToContent(pollTemplate)}>+ Poll</button>
                <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded" onClick={() => appendToContent(commentBoxTemplate)}>+ Comment Box</button>
              </div>
            </div>
          </div>
          <button onClick={handleAddEntry} className="bg-green-600 text-white px-4 py-2 rounded">Add Entry</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
