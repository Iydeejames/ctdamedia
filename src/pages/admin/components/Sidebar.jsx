// src/pages/admin/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // X iconimport { NavLink } from "react-router-dom";
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
 { label: "Sports", path: "/posts/sports", icon: <FaNewspaper /> },
  { label: "Podcasts", path: "/admin/pages/podcasts", icon: <FaMicrophone /> },
  { label: "Music", path: "/admin/pages/music", icon: <FaMusic /> },
  { label: "Newsletter", path: "/admin/pages/newsletter", icon: <FaEnvelope /> },
  { label: "Analytics", path: "/admin/pages/analytics", icon: <FaChartBar /> },
  { label: "User Management", path: "/admin/pages/users", icon: <FaUsers /> },
  { label: "Settings", path: "/admin/pages/settings", icon: <FaCog /> },
];

const Sidebar = ({ onClose }) => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-full bg-white border-r shadow p-4 overflow-y-auto z-50 scrollbar-hide md:scrollbar-default">
      {/* Mobile Close Icon */}
      <div className="flex justify-end mb-4 md:hidden">
        <button
          onClick={onClose}
          aria-label="Close Sidebar"
          className="text-green-700 text-xl"
        >
          <FaTimes />
        </button>
      </div>

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
            onClick={onClose} // auto close after click
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