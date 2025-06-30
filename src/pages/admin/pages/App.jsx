import React from "react";

export default function Dashboard() {
  console.log("✅ Dashboard component is loaded");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold text-blue-700">Total Posts</h2>
          <p className="text-2xl font-bold mt-2">126</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold text-green-700">Subscribers</h2>
          <p className="text-2xl font-bold mt-2">3021</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold text-purple-700">Podcast Episodes</h2>
          <p className="text-2xl font-bold mt-2">54</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold text-orange-700">Music Releases</h2>
          <p className="text-2xl font-bold mt-2">37</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold text-red-700">Tweet Posts</h2>
          <p className="text-2xl font-bold mt-2">189</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold text-yellow-700">User Accounts</h2>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
      </div>
    </div>
  );
}
