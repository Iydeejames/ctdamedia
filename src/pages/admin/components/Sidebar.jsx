// src/pages/admin/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaNewspaper,
  FaMicrophone,
  FaMusic,
  FaUsers,
  FaCog,
  FaChartBar,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: <FaHome /> },
  { label: "Blog", path: "/posts/blog", icon: <FaNewspaper /> },
  { label: "Podcasts", path: "/admin/podcasts", icon: <FaMicrophone /> },
  { label: "Music", path: "/admin/music", icon: <FaMusic /> },
  { label: "Newsletter", path: "/admin/newsletter", icon: <FaEnvelope /> },
  { label: "Analytics", path: "/admin/analytics", icon: <FaChartBar /> },
  { label: "User Management", path: "/admin/users", icon: <FaUsers /> },
  { label: "Settings", path: "/admin/settings", icon: <FaCog /> },
];

const Sidebar = ({ onClose }) => {
  return (
    <aside className="fixed pt-20 left-0 w-60 h-full bg-white p-4 overflow-y-auto z-50 scrollbar-hide md:scrollbar-default">
      <h2 className="text-2xl font-bold text-green-700 mb-6">CTDA Admin</h2>
      <nav className="space-y-1">
        {navItems.map(({ label, path, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={onClose}
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
