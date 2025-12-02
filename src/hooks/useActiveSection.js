import { useState, useEffect } from "react";

/**
 * Custom hook to track active section based on scroll position
 * @param {Array} sections - Array of section objects with { id, label }
 * @param {number} offset - Scroll offset for header (default: 150)
 * @returns {string} Active section ID
 */
export function useActiveSection(sections, offset = 150) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const scrollPosition = window.scrollY + offset;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, offset]);

  return activeSection;
}
