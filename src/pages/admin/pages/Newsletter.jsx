import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaTrash,
  FaPlus,
  FaSearch,
  FaFileExport,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 6;

const fallbackEmails = [
  { _id: "1", email: "john@example.com" },
  { _id: "2", email: "jane@ctdamedia.com" },
  { _id: "3", email: "syntrix7hq@gmail.com" },
  { _id: "4", email: "john@example.com" },
  { _id: "5", email: "syntrix7hq@gmail.com" },
  { _id: "6", email: "user6@gmail.com" },
  { _id: "7", email: "john@example.com" },
  { _id: "8", email: "syntrix7hq@gmail.com" },
];

const Newsletter = () => {
  const [emails, setEmails] = useState(fallbackEmails);
  const [filteredEmails, setFilteredEmails] = useState(fallbackEmails);
  const [newEmail, setNewEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  //PLACEHOLDER LINK
  const API_URL = "http://localhost:3000/api/newsletter";

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await axios.get(API_URL);
        if (res.data.length > 0) {
          setEmails(res.data);
          setFilteredEmails(res.data);
        }
      } catch (err) {
        console.error("Error fetching emails. Using fallback.");
      }
    };
    fetchEmails();
  }, []);

  const handleAddEmail = async () => {
    if (!newEmail || !newEmail.includes("@")) return;
    try {
      const res = await axios.post(API_URL, { email: newEmail });
      const updated = [{ _id: res.data._id, email: newEmail }, ...emails];
      setEmails(updated);
      setFilteredEmails(updated);
      setNewEmail("");
      setPage(1);
    } catch (err) {
      console.error("Add failed:", err);
      alert("Failed to add email.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      const updated = emails.filter((email) => email._id !== id);
      setEmails(updated);
      setFilteredEmails(updated);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const result = emails.filter((email) =>
      email.email.toLowerCase().includes(query)
    );
    setFilteredEmails(result);
    setPage(1);
  };

  const exportToCSV = () => {
    const csvContent = [
      ["Email"],
      ...emails.map((e) => [e.email]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const href = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = href;
    link.download = "newsletter_subscribers.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentEmails = filteredEmails.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredEmails.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white px-4 py-6 lg:px-8">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 text-center lg:text-left">
            Newsletter Subscribers
          </h2>

          {/* Mobile & Tablet: Joined Search + Export */}
          <div className="w-full lg:hidden flex">
            <div className="flex w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search email..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
              <button
                onClick={exportToCSV}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-xs rounded-r-md border border-l-0 border-gray-300"
              >
                <FaFileExport />
              </button>
            </div>
          </div>

          {/* Desktop: Separated Search + Export */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search email..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
              <FaFileExport className="text-sm" /> Export CSV
            </button>
          </div>
        </div>

        {/* Mobile & Tablet: Email + Add */}
        <div className="flex w-full gap-0 lg:hidden mb-8">
          <input
            type="email"
            placeholder="Enter email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          />
          <button
            onClick={handleAddEmail}
            className="bg-red-700 hover:bg-red-600 text-white px-3 py-2 text-xs rounded-r-md border border-l-0 border-gray-300"
          >
            <FaPlus />
          </button>
        </div>

        {/* Desktop: Email + Add */}
        <div className="hidden lg:flex items-center gap-3 mb-8">
          <input
            type="email"
            placeholder="Enter email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full lg:flex-1 px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          />
          <button
            onClick={handleAddEmail}
            className="bg-red-700 hover:bg-red-600 text-white px-5 py-3 rounded-md flex items-center justify-center gap-2"
          >
            <FaPlus className="text-xs" /> Add Email
          </button>
        </div>

        {/* Email List */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
            {currentEmails.map(({ _id, email }) => (
              <motion.div
                key={_id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="px-4 py-4 sm:px-6 sm:py-5 flex justify-between items-center hover:bg-gray-50 text-sm sm:text-base"
              >
                <div className="flex items-center gap-3 text-gray-700 truncate">
                  <FaEnvelope className="text-green-500 min-w-[16px]" />
                  <span className="truncate max-w-[180px] sm:max-w-[240px]">
                    {email}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(_id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash className="text-xs sm:text-sm" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm ${
                  page === 1
                    ? "text-black  cursor-not-allowed"
                    : "text-green-800 "
                }`}
              >
                <FaArrowLeft />
              </button>

              <span className="text-gray-600 text-sm">
                {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm ${
                  page === totalPages
                    ? "text-black  cursor-not-allowed"
                    : "text-green-800"
                }`}
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
