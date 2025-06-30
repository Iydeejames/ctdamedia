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
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        📊 Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-xl p-4 flex items-center gap-4"
          >
            <div className="bg-gray-100 rounded-full p-3">{stat.icon}</div>
            <div>
              <h4 className="text-gray-600 text-sm">{stat.title}</h4>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 sm:p-6 shadow-sm rounded-xl mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          🕒 Recent Activity
        </h2>
        <ul className="space-y-3 text-sm sm:text-base">
          {recentActivity.map((activity, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-700"
            >
              <span className="w-2/3 truncate">{activity.title}</span>
              <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                {activity.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white p-4 sm:p-6 shadow-sm rounded-xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          🚀 Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/posts/featured"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-3 rounded text-center font-medium text-sm sm:text-base"
          >
            Manage Featured
          </Link>
          <Link
            to="/admin/podcasts"
            className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-3 rounded text-center font-medium text-sm sm:text-base"
          >
            View Podcasts
          </Link>
          <Link
            to="/admin/newsletter"
            className="bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded text-center font-medium text-sm sm:text-base"
          >
            Subscribers
          </Link>
          <Link
            to="/admin/analytics"
            className="bg-red-100 hover:bg-red-200 text-red-800 p-3 rounded text-center font-medium text-sm sm:text-base"
          >
            Analytics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
