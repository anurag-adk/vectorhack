import React from "react";
import { useScrollPosition } from "../../hooks";

const ScrollToTop = () => {
  const { isScrolled } = useScrollPosition(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top ${isScrolled ? "visible" : ""}`}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
