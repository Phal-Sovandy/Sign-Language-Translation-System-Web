import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 * Scrolls to the top of the page when the route changes or when clicking on the same page link
 */
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on any navigation (including same-route clicks)
    // Using location.key ensures it triggers even when clicking the same route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Use "instant" for immediate scroll, or "smooth" for animated scroll
    });
  }, [location.pathname, location.key]);

  return null;
}
