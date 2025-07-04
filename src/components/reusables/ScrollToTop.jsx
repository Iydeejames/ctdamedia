// src/components/reusables/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
