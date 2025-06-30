import {
  FaUsers,
  FaEye,
  FaMicrophone,
  FaNewspaper,
  FaBell,
} from "react-icons/fa";
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

  const userStats = [
    { role: "Admins", count: 3 },
    { role: "Editors", count: 7 },
    { role: "Contributors", count: 12 },
    { role: "Guests", count: 890 },
  ];

  const activity = [
    { title: "New podcast episode uploaded", time: "1 hour ago" },
    { title: "Culture article published", time: "3 hours ago" },
    { title: "New subscriber joined", time: "5 hours ago" },
    { title: "Sports post updated", time: "Yesterday" },
  ];

  const alerts = [
    "3 posts pending approval",
    "1 podcast upload failed",
    "Newsletter campaign sent",
    "New comment needs review",
  ];

  const uploadsThisWeek = [
    { type: "Posts", count: 8 },
    { type: "Podcasts", count: 3 },
    { type: "Music", count: 5 },
    { type: "Videos", count: 2 },
  ];

  const upcoming = [
    { task: "Culture article scheduled", date: "July 2" },
    { task: "Newsletter goes out", date: "July 4" },
    { task: "Podcast episode drop", date: "July 5" },
  ];

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">📊 Dashboard Overview</h1>

      {/* Primary Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-sm rounded-xl p-4 flex items-center gap-4">
            <div className="bg-gray-100 rounded-full p-3">{stat.icon}</div>
            <div>
              <h4 className="text-gray-600 text-sm">{stat.title}</h4>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* User Roles */}
      <div className="bg-white p-4 shadow-sm rounded-xl mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">👥 User Breakdown</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {userStats.map((user, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded text-center">
              <p className="font-bold text-gray-700">{user.count}</p>
              <p className="text-gray-500">{user.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        {/* Activity */}
        <div className="bg-white p-4 shadow-sm rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">🕒 Recent Activity</h2>
          <ul className="space-y-3 text-sm">
            {activity.map((item, index) => (
              <li key={index} className="flex justify-between text-gray-700">
                <span>{item.title}</span>
                <span className="text-gray-400 text-xs">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Alerts */}
        <div className="bg-white p-4 shadow-sm rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">🔔 System Notifications</h2>
          <ul className="space-y-2 text-sm text-red-600 font-medium">
            {alerts.map((msg, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaBell className="text-red-400" />
                <span>{msg}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Upload Summary & Upcoming Tasks */}
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        {/* Upload Summary */}
        <div className="bg-white p-4 shadow-sm rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">📥 Uploads This Week</h2>
          <ul className="space-y-2 text-sm">
            {uploadsThisWeek.map((item, i) => (
              <li key={i} className="flex justify-between text-gray-700">
                <span>{item.type}</span>
                <span className="font-semibold">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white p-4 shadow-sm rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">📅 Upcoming Tasks</h2>
          <ul className="space-y-2 text-sm">
            {upcoming.map((item, i) => (
              <li key={i} className="flex items-center justify-between text-gray-700">
                <span>{item.task}</span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-4 sm:p-6 shadow-sm rounded-xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">🚀 Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/posts/featured"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-3 rounded text-center font-medium text-sm"
          >
            Manage Featured
          </Link>
          <Link
            to="/admin/podcasts"
            className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-3 rounded text-center font-medium text-sm"
          >
            View Podcasts
          </Link>
          <Link
            to="/admin/newsletter"
            className="bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded text-center font-medium text-sm"
          >
            Subscribers
          </Link>
          <Link
            to="/admin/analytics"
            className="bg-red-100 hover:bg-red-200 text-red-800 p-3 rounded text-center font-medium text-sm"
          >
            Analytics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
