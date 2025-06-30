const Topbar = ({ onToggleSidebar }) => {
  return (
    <div className="w-full bg-green-700 text-white shadow-sm p-4 flex items-center justify-between">
      {/* Hamburger menu on mobile */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={onToggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      <div className="text-lg font-semibold">Welcome Admin</div>

      <div className="flex items-center gap-4">
        <span className="text-sm hidden sm:inline">CTDA Media Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Admin Avatar"
          className="w-8 h-8 rounded-full object-cover border border-white"
        />
      </div>
    </div>
  );
};

export default Topbar;
