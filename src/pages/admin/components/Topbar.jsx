import logo from "../../../assets/images/logo.jpg";

const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-green-700 text-white shadow-sm p-4 flex items-center justify-between">
      {/* Toggle icon on mobile */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={onToggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>

      <div className="text-lg font-semibold">Welcome Admin</div>

      <div className="flex items-center gap-4">
        <span className="text-sm hidden sm:inline">CTDA Media Admin</span>
        <img
          src={logo}
          alt="Admin Avatar"
          className="w-8 h-8 rounded-full object-cover border border-white"
        />
      </div>
    </div>
  );
};

export default Topbar;
