/**
 * Scroll to an element with offset for fixed header
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Offset in pixels (default: 120)
 */
export function scrollToElement(elementId, offset = 120) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
