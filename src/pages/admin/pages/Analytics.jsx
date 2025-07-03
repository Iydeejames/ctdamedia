import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { FaUsers, FaEye, FaNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";

const fallbackData = {
  pageViews: 13240,
  subscribers: 897,
  monthlyData: [
    { month: "Jan", views: 1200 },
    { month: "Feb", views: 2000 },
    { month: "Mar", views: 1500 },
    { month: "Apr", views: 2200 },
    { month: "May", views: 2600 },
    { month: "Jun", views: 3100 },
  ],
  topCategories: [
    { name: "Culture", count: 1420 },
    { name: "Entertainment", count: 1230 },
    { name: "Sports", count: 980 },
  ],
};

const Analytics = () => {
  const [stats, setStats] = useState(fallbackData);
  const API_URL = "http://localhost:3000/api/analytics";

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(API_URL);
        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch analytics, continuing with fallback.");
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-2xl mt-20 sm:text-3xl font-bold text-green-800 mb-6">
          Site Analytics
        </h1>

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-6 mb-10">
          <div className="bg-red-100 p-5 rounded-xl shadow flex items-center gap-4 hover:shadow-md transition">
            <FaEye className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Total Page Views</p>
              <p className="text-xl font-semibold text-gray-800">
                {stats.pageViews.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="bg-green-100 p-5 rounded-xl shadow flex items-center gap-4 hover:shadow-md transition">
            <FaUsers className="text-green-700 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Newsletter Subscribers</p>
              <p className="text-xl font-semibold text-gray-800">
                {stats.subscribers.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="bg-purple-100 p-5 rounded-xl shadow flex items-center gap-4 hover:shadow-md transition">
            <FaNewspaper className="text-purple-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Top Category</p>
              <p className="text-lg font-medium text-gray-700">
                {stats.topCategories[0]?.name || "—"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-700 shadow rounded-xl p-4 sm:p-5 mb-10">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Monthly Page Views
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF" />
              <XAxis dataKey="month" stroke="#FFFFFF" />
              <YAxis stroke="#FFFFFF" />
              <Tooltip contentStyle={{ backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" }} />
              <Line type="monotone" dataKey="views" stroke="#FFFFFF" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-green-700 shadow rounded-xl p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Top Performing Categories
          </h2>
          <ul className="divide-y divide-green-500">
            {stats.topCategories.map((cat, i) => (
              <li key={i} className="flex justify-between py-3 text-sm sm:text-base">
                <span className="text-white font-medium">{cat.name}</span>
                <span className="text-white">{cat.count.toLocaleString()} views</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;
