import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollPosition } from "../../hooks";
import { navLinks } from "../../data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition(50);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    // If it's a hash link on the same page
    if (href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-placeholder">VH</div>
          <span className="logo-text">
            Vector<span>Hack</span>
          </span>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  to={link.href}
                  className={location.pathname === link.href ? "active" : ""}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={
                    location.hash === link.href.replace("/", "") ? "active" : ""
                  }
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="/#register"
              className="nav-cta"
              onClick={(e) => handleNavClick(e, "/#register")}
            >
              Register Now
            </a>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span
            style={{
              transform: isMenuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              transform: isMenuOpen
                ? "rotate(-45deg) translate(7px, -6px)"
                : "none",
            }}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
