import React from "react";

const CTA = () => {
  return (
    <section className="cta-section" id="register">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Hack the Future?</h2>
          <p>
            Join us for 48 hours of coding, learning, and innovation. Break a
            leg!
          </p>
          <a
            href="https://bit.ly/vectorhack2026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <span>Register Now</span>
            <span>→</span>
          </a>
          <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
            Registration closes on February 6, 2026 at 5:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
