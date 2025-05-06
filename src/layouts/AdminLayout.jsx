// src/layouts/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Example: Admin Header */}
      <header className="bg-white shadow p-4">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
      </header>

      {/* Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
