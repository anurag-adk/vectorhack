import React from "react";
import { statsData } from "../../data";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About The Hackathon</h2>
        <p className="section-subtitle">
          A platform for the convergence of technology and problem-solving
        </p>

        <div className="about-grid">
          <div className="about-content">
            <h3>What is VectorHack?</h3>
            <p>
              Software Hackathon is a 48-hours long national hackathon organized
              by{" "}
              <strong className="highlight">
                i-CES (Innovative Computer Engineering Students' Society)
              </strong>
              , as a part of VECTOR at IOE, Pashchimanchal Campus.
            </p>
            <p>
              This hackathon serves as a platform for the convergence of
              technology and problem-solving. We encourage participants to apply
              modern tools and creative thinking to address real-world
              challenges. Through intense collaboration and innovation, the
              hackathon aims to foster practical learning, teamwork, and the
              development of solutions that create meaningful technological
              impact across various sectors.
            </p>
            <p>
              <strong className="highlight-yellow">
                Unique and innovative ideas are highly encouraged!
              </strong>
            </p>
          </div>

          <div className="about-stats">
            {statsData.map((stat, index) => (
              <div className="stat-card" key={index}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
