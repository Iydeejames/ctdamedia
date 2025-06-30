import { useState } from "react";
import Sidebar from "../pages/admin/components/Sidebar";
import Topbar from "../pages/admin/components/Topbar";
import Footer from "../pages/admin/components/Footer";
import PropTypes from "prop-types";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Topbar */}
      <Topbar onToggleSidebar={handleToggleSidebar} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            md:relative md:translate-x-0 md:block overflow-y-auto`}
        >
          <Sidebar onClose={handleCloseSidebar} />
        </div>

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-30 md:hidden"
            onClick={handleCloseSidebar}
          ></div>
        )}

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <main className="flex-1 p-4">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
