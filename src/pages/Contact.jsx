import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { contactsData } from "../data";
import {
  PersonIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  CheckIcon,
  ArrowLeftIcon,
} from "../components/Icons";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            Have questions or facing issues? Reach out to our coordinators.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {contactsData.map((contact) => (
              <div className="contact-card" key={contact.id}>
                <div className="contact-avatar">
                  <PersonIcon size={48} />
                </div>
                <h3 className="contact-name">{contact.name}</h3>
                <p className="contact-role">{contact.role}</p>
                <div className="contact-info">
                  <a href={`tel:+977${contact.phone}`} className="contact-link">
                    <PhoneIcon size={20} />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* General Contact Info */}
          <div className="general-contact">
            <h2>General Inquiries</h2>
            <div className="general-contact-grid">
              <div className="general-contact-item">
                <EmailIcon size={24} />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ices@wrc.edu.np">ices@wrc.edu.np</a>
                </div>
              </div>
              <div className="general-contact-item">
                <LocationIcon size={24} />
                <div>
                  <h4>Venue</h4>
                  <p>IOE, WRC, Pokhara, Nepal</p>
                </div>
              </div>
              <div className="general-contact-item">
                <CheckIcon size={24} />
                <div>
                  <h4>Registration</h4>
                  <a
                    href="https://bit.ly/vectorhack2026"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bit.ly/vectorhack2026
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="back-home">
            <Link to="/" className="btn btn-secondary">
              <ArrowLeftIcon size={20} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
