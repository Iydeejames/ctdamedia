// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import PropTypes from "prop-types";

// Main pages
import LandingPage from "./pages/main/LandingPage";
import Header from "./components/reusables/Header";
import Footer from "./components/reusables/Footer";
import Music from "./pages/main/blog/Music";
import Culture from "./pages/main/blog/Culture";
import Spotlight from "./pages/main/blog/Spotlight";
import Editorial from "./pages/main/blog/Editorial";
import Lifestyle from "./pages/main/blog/Lifestyle";
import Podcasts from "./pages/main/Podcasts";
import About from "./pages/main/About";
import Contact from "./pages/main/Contact";
import Search from "./pages/main/Search";

// Admin pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ManagePosts from "./pages/admin/ManagePosts";
import MediaLibrary from "./pages/admin/MediaLibrary";
import Comments from "./pages/admin/Comments";
import Settings from "./pages/admin/Settings";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public/Main Site Layout */}
        <Route element={<MainLayout />}>
  <Route index element={<LandingPage />} />
  <Route path="/music" element={<Music />} />
  <Route path="/culture" element={<Culture />} />
  <Route path="/spotlight" element={<Spotlight />} />
  <Route path="/editorial" element={<Editorial />} />
  <Route path="/lifestyle" element={<Lifestyle />} />
  <Route path="/podcasts" element={<Podcasts />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/search" element={<Search />} />
  
  {/* 🆕 Blog routes */}
  <Route path="/blog/music" element={<Music />} />
  <Route path="/blog/culture" element={<Culture />} />
  <Route path="/blog/spotlight" element={<Spotlight />} />
  <Route path="/blog/editorial" element={<Editorial />} />
  <Route path="/blog/lifestyle" element={<Lifestyle />} />
</Route>


        {/* Admin Login (outside layout) */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Panel Layout */}
        <Route path="/admin" element={<AdminLayout />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="posts" element={<ManagePosts />} />
  <Route path="media" element={<MediaLibrary />} />
  <Route path="comments" element={<Comments />} />
  <Route path="settings" element={<Settings />} />
</Route>

      </Routes>
    </Router>
  );
}

export default App;


