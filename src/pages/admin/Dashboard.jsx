import React, { useState, useEffect } from "react";
import { FaBars, FaHome, FaMusic, FaPodcast, FaEnvelope, FaChartBar, FaInfoCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const pages = ["Home", "About Us", "Music", "Podcasts", "Contact"];
const categories = ["Featured", "Business", "Technology", "Entertainment", "Sports"];

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
  const [newEntry, setNewEntry] = useState({ title: "", date: "", category: "", content: "" });

  useEffect(() => {
    const initialData = {};
    categories.forEach((cat) => {
      initialData[cat] = [];
    });
    setData(initialData);
  }, []);

  const handleAddEntry = () => {
    const updated = { ...data };
    if (newEntry.category && updated[newEntry.category]) {
      updated[newEntry.category].push({ ...newEntry, id: Date.now() });
      setData(updated);
      setNewEntry({ title: "", date: "", category: "", content: "" });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Sidebar */}
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
              className={`block w-full text-left px-3 py-2 rounded-lg font-medium ${selectedPage === page ? "bg-green-100 text-green-700" : "text-gray-600 hover:bg-gray-100"}`}
            >
              {page === "Home" ? <FaHome className="inline mr-2" /> : page === "About Us" ? <FaInfoCircle className="inline mr-2" /> : page === "Music" ? <FaMusic className="inline mr-2" /> : page === "Podcasts" ? <FaPodcast className="inline mr-2" /> : <FaEnvelope className="inline mr-2" />}
              {page}
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

        <h2 className="text-2xl font-bold mb-6 text-green-700">{selectedPage} Page Content</h2>

        {/* Usage Chart */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2"><FaChartBar /> Site Usage This Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dummyUsageData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Add Content */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Add New Content</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input value={newEntry.title} onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })} placeholder="Title" className="p-2 border rounded" />
            <input type="date" value={newEntry.date} onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })} className="p-2 border rounded" />
            <select value={newEntry.category} onChange={(e) => setNewEntry({ ...newEntry, category: e.target.value })} className="p-2 border rounded">
              <option value="">Select Category</option>
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <textarea value={newEntry.content} onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })} placeholder="Content" className="p-2 border rounded h-24 md:h-auto" />
          </div>
          <button onClick={handleAddEntry} className="bg-green-600 text-white px-4 py-2 rounded">Add Entry</button>
        </div>

        {/* Display Content by Category */}
        {categories.map((cat) => (
          <div key={cat} className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{cat}</h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {data[cat] && data[cat].length > 0 ? data[cat].map((entry) => (
                <div key={entry.id} className="bg-white rounded shadow p-3">
                  <h4 className="text-lg font-semibold text-green-700">{entry.title}</h4>
                  <p className="text-sm text-gray-500">{entry.date}</p>
                  <p className="text-gray-700 mt-1 line-clamp-3">{entry.content}</p>
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
