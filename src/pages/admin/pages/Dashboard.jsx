import {
  FaUsers,
  FaEye,
  FaMicrophone,
  FaNewspaper,
  FaChartBar,
  FaChartPie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const overview = [
    {
      label: "Visitors",
      value: "12,450",
      icon: <FaEye className="text-blue-600 text-xl sm:text-2xl" />,
    },
    {
      label: "Subscribers",
      value: "2,184",
      icon: <FaUsers className="text-green-600 text-xl sm:text-2xl" />,
    },
    {
      label: "Podcasts",
      value: "53",
      icon: <FaMicrophone className="text-purple-600 text-xl sm:text-2xl" />,
    },
    {
      label: "Articles",
      value: "128",
      icon: <FaNewspaper className="text-red-600 text-xl sm:text-2xl" />,
    },
  ];

  const quickLinks = [
    { label: "Home", to: "/", color: "blue" },
    { label: "Podcasts", to: "/admin/podcasts", color: "purple" },
    { label: "Subscribers", to: "/admin/newsletter", color: "green" },
    { label: "Analytics", to: "/admin/analytics", color: "red" },
    { label: "Settings", to: "/admin/settings", color: "gray" },
  ];

  const lineData = [
    { month: "Jan", views: 1200 },
    { month: "Feb", views: 1400 },
    { month: "Mar", views: 1800 },
    { month: "Apr", views: 2100 },
    { month: "May", views: 2500 },
    { month: "Jun", views: 2900 },
    { month: "Jul", views: 3100 },
    { month: "Aug", views: 3000 },
    { month: "Sep", views: 2700 },
    { month: "Oct", views: 2900 },
    { month: "Nov", views: 3200 },
    { month: "Dec", views: 3300 },
  ];

  const pieData = [
    { name: "Articles", value: 128 },
    { name: "Podcasts", value: 53 },
    { name: "Videos", value: 20 },
  ];

  const COLORS = ["#10B981", "#6366F1", "#F59E0B"];

  const recentActivities = [
    { activity: "Added new podcast episode", time: "30 mins ago" },
    { activity: "Published an article", time: "3 hours ago" },
    { activity: "Subscriber joined newsletter", time: "Yesterday" },
    { activity: "Updated site analytics", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-12">
      <h1 className="text-3xl font-bold text-green-800 mt-10 mb-10">Overview</h1>

      {/* Overview Cards */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 mb-12">
        {overview.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow hover:shadow-md flex items-center gap-4"
          >
            <div className="bg-gray-100 p-3 sm:p-4 rounded-full">{item.icon}</div>
            <div>
              <p className="text-gray-500 text-xs sm:text-sm">{item.label}</p>
              <p className="text-md sm:text-xl font-bold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Traffic Overview</h2>
            <FaChartBar className="text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                interval={1}
                tick={({ x, y, payload }) =>
                  ["Jan", "Mar", "May", "Jul", "Sep", "Nov"].includes(payload.value) ? (
                    <text x={x} y={y + 15} textAnchor="middle" fill="#666">
                      {payload.value}
                    </text>
                  ) : null
                }
              />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Content Breakdown</h2>
            <FaChartPie className="text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Pie Chart Legend */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[0] }}></span>
              <span className="text-gray-600">Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[1] }}></span>
              <span className="text-gray-600">Podcasts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[2] }}></span>
              <span className="text-gray-600">Videos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <ul className="space-y-4">
          {recentActivities.map((item, index) => (
            <li key={index} className="flex justify-between text-sm sm:text-base text-gray-600 border-b pb-2">
              <span>{item.activity}</span>
              <span className="text-red-400">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Access</h2>
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className={`bg-${link.color}-100 hover:bg-${link.color}-200 text-${link.color}-800 text-sm font-medium p-3 rounded-xl text-center transition`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
