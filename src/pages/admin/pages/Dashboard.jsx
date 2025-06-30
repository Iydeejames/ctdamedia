import React from "react";
import { FaUsers, FaEye, FaMicrophone, FaNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Visitors",
      value: "12,450",
      icon: <FaEye className="text-blue-500 text-2xl" />,
    },
    {
      title: "Newsletter Subscribers",
      value: "2,184",
      icon: <FaUsers className="text-green-500 text-2xl" />,
    },
    {
      title: "Podcasts Uploaded",
      value: "53",
      icon: <FaMicrophone className="text-purple-500 text-2xl" />,
    },
    {
      title: "Published Posts",
      value: "128",
      icon: <FaNewspaper className="text-red-500 text-2xl" />,
    },
  ];

  const recentActivity = [
    { title: "New podcast episode uploaded", time: "1 hour ago" },
    { title: "Culture article published", time: "3 hours ago" },
    { title: "New subscriber joined", time: "5 hours ago" },
    { title: "Sports post updated", time: "Yesterday" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4">
            <div className="bg-gray-100 rounded-full p-3">
              {stat.icon}
            </div>
            <div>
              <h4 className="text-gray-600 text-sm">{stat.title}</h4>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 shadow-md rounded-2xl mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">🕒 Recent Activity</h2>
        <ul className="space-y-3">
          {recentActivity.map((activity, index) => (
            <li key={index} className="flex justify-between text-gray-700">
              <span>{activity.title}</span>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white p-6 shadow-md rounded-2xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">🚀 Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/posts/featured" className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-4 rounded-lg text-center font-medium">Manage Featured</Link>
          <Link to="/admin/podcasts" className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-4 rounded-lg text-center font-medium">View Podcasts</Link>
          <Link to="/admin/newsletter" className="bg-green-100 hover:bg-green-200 text-green-800 p-4 rounded-lg text-center font-medium">Subscribers</Link>
          <Link to="/admin/analytics" className="bg-red-100 hover:bg-red-200 text-red-800 p-4 rounded-lg text-center font-medium">Analytics</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
