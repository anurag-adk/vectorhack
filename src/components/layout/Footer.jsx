import React from "react";
import { Link } from "react-router-dom";
import { footerLinks, socialLinks } from "../../data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  GitHubIcon,
} from "../Icons";

const getSocialIcon = (iconName) => {
  const icons = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
  };
  return icons[iconName] || null;
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-placeholder">VH</div>
              <span className="logo-text">
                Vector<span>Hack</span>
              </span>
            </Link>
            <p>
              A 48-hour national software hackathon organized by i-CES as part
              of VECTOR at IOE, WRC, Pokhara.
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link to={link.href}>{link.name}</Link>
                  ) : (
                    <a href={link.href}>{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              {footerLinks.contact.map((item) => (
                <li key={item.name}>
                  {item.href ? <a href={item.href}>{item.name}</a> : item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 VectorHack. Organized by{" "}
            <a
              href="https://ices.edu.np"
              target="_blank"
              rel="noopener noreferrer"
            >
              i-CES
            </a>
          </p>
          <a
            href="https://ices.edu.np"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ices-logo"
          >
            <img src="/i-CES Logo.svg" alt="i-CES Logo" height="40" />
            <span>Innovative Computer Engineering Students' Society</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
