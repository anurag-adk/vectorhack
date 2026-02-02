import { useState, useEffect } from "react";

/**
 * Custom hook to track scroll position
 * @param {number} threshold - The scroll threshold to trigger scrolled state
 * @returns {Object} - Object containing scrollY and isScrolled
 */
export const useScrollPosition = (threshold = 50) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrollY, isScrolled };
};

export default useScrollPosition;
