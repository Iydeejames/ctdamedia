import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import PropTypes from "prop-types";

// Main pages
import LandingPage from "./pages/main/LandingPage";
import Footer from "./components/reusables/Footer";
import Header from "./components/reusables/Header";
import ScrollToTop from "./components/reusables/ScrollToTop";
import Music from "./pages/main/blog/Music";
import Culture from "./pages/main/blog/Culture";
import Spotlight from "./pages/main/blog/Spotlight";
import Editorial from "./pages/main/blog/Editorial";
import Lifestyle from "./pages/main/blog/Lifestyle";
import Scene from "./pages/main/blog/Scene";
import Community from "./pages/main/blog/Community";
import Documentary from "./pages/main/blog/Documentary";
import Podcasts from "./pages/main/Podcasts";
import About from "./pages/main/About";
import Services from "./pages/main/Services";
import Contact from "./pages/main/Contact";
import Search from "./pages/main/Search";
import NewsDetail from "./pages/FullPost";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Admin Pages
import Dashboard from "./pages/admin/pages/Dashboard";
import Blog from "./pages/admin/pages/posts/Blog";
import PodcastsAdmin from "./pages/admin/pages/Podcasts";
import MusicAdmin from "./pages/admin/pages/Music";
import Newsletter from "./pages/admin/pages/Newsletter";
import Analytics from "./pages/admin/pages/Analytics";
import Users from "./pages/admin/pages/Users";
import Settings from "./pages/admin/pages/Settings";

// Auth Pages
import Login from "./pages/admin/auth/Login";
import Signup from "./pages/admin/auth/Signup";
import ForgotPassword from "./pages/admin/auth/ForgotPassword";

// Optional layout wrapper (not currently used)
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <Router>
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      <Routes>

        {/* ========== AUTH ROUTES ========== */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />

        {/* ========== PUBLIC ROUTES (with MainLayout) ========== */}
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/music" element={<Music />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/community" element={<Community />} />
          <Route path="/documentary" element={<Documentary />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:category/:slug" element={<NewsDetail />} />

          {/* Optional blog aliases */}
          <Route path="/blog/music" element={<Music />} />
          <Route path="/blog/newsletter" element={<Newsletter />} />
          <Route path="/blog/culture" element={<Culture />} />
          <Route path="/blog/spotlight" element={<Spotlight />} />
          <Route path="/blog/editorial" element={<Editorial />} />
          <Route path="/blog/lifestyle" element={<Lifestyle />} />
          <Route path="/blog/community" element={<Community />} />
          <Route path="/blog/scene" element={<Scene />} />
          <Route path="/blog/documentary" element={<Documentary />} />
        </Route>

        {/* ========== ADMIN ROUTES (with AdminLayout) ========== */}
        <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/posts/blog" element={<AdminLayout><Blog /></AdminLayout>} />
        <Route path="/admin/podcasts" element={<AdminLayout><PodcastsAdmin /></AdminLayout>} />
        <Route path="/admin/music" element={<AdminLayout><MusicAdmin /></AdminLayout>} />
        <Route path="/admin/newsletter" element={<AdminLayout><Newsletter /></AdminLayout>} />
        <Route path="/admin/analytics" element={<AdminLayout><Analytics /></AdminLayout>} />
        <Route path="/admin/users" element={<AdminLayout><Users /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><Settings /></AdminLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
