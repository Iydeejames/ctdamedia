import { useState } from "react";
import {  FaTrash, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

const Settings = () => {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@ctdamedia.com",
    profileImage: "",
    bio: "Editor at CTDA Media",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    joinedDate: "2024-03-15",
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setForm({ ...form, profileImage: imageUrl });
    }
  };

  const handleSave = () => {
    if (
      form.newPassword &&
      (form.newPassword !== form.confirmPassword || form.newPassword.length < 6)
    ) {
      setMessage("New passwords must match and be at least 6 characters.");
      return;
    }

    setSaving(true);
    setMessage("");
    setTimeout(() => {
      setSaving(false);
      setMessage("Settings saved successfully.");
    }, 1000);
  };

  const handleDelete = () => {
    setDeleteConfirm(false);
    alert("Account deleted permanently.");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6 md:px-10">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mt-10 text-green-800 mb-10">
          Settings
        </h2>

        {/* Profile */}
        <section className="bg-gray-50 p-6 rounded-xl shadow mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile</h3>
          <div className="flex items-center gap-5 mb-6">
            <div className="relative w-20 h-20 rounded-full border border-green-200 overflow-hidden">
              <img
                src={form.profileImage || "https://via.placeholder.com/150"}
                alt=".....Image"
                className="w-full h-full object-cover"
              />
              <label className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full cursor-pointer">
                <FaCamera size={14} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div>
              <p className="text-sm text-gray-500">Joined: {form.joinedDate}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={3}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Password */}
        <section className="bg-gray-50 p-6 rounded-xl shadow mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-700">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Delete Account */}
        <section className="bg-red-50 border border-red-200 p-6 rounded-xl shadow mb-10">
          <h3 className="text-xl font-semibold text-red-700 mb-4">Danger Zone</h3>
          <p className="text-sm text-red-600 mb-4">
            Deleting your account is irreversible. Please proceed with caution.
          </p>
          <button
            onClick={() => setDeleteConfirm(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            <FaTrash /> Delete My Account
          </button>

          {deleteConfirm && (
            <div className="mt-4 bg-white border border-red-300 p-4 rounded-md">
              <p className="text-sm mb-3">
                Are you sure? This will permanently delete your account and all data.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDelete}
                  className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setDeleteConfirm(false)}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Save Button */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md transition"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
          {message && (
            <p className="mt-3 text-sm text-green-600 font-medium">{message}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;







{/*
export default function Settings() {
  return <div className="text-xl font-bold p-4"> Settings Management</div>;
}
  */}