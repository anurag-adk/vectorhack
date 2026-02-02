import React from "react";
import { useCountdown } from "../../hooks";
import { heroMetaData } from "../../data";
import { CalendarIcon, ClockIcon, LocationIcon, TeamIcon } from "../Icons";

const getMetaIcon = (iconName) => {
  const icons = {
    calendar: <CalendarIcon size={28} />,
    clock: <ClockIcon size={28} />,
    location: <LocationIcon size={28} />,
    team: <TeamIcon size={28} />,
  };
  return icons[iconName] || null;
};

const Hero = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    "February 9, 2026 09:00:00",
  );

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            <span>Registration Open • Limited Seats</span>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">VectorHack</span> 2026
          </h1>

          <p className="hero-tagline">Green Tech for Green Pokhara</p>

          <p className="hero-description">
            A 48-hour national software hackathon organized by i-CES, as part of
            VECTOR at IOE, Pashchimanchal Campus. Build innovative solutions
            that create meaningful impact.
          </p>

          <div className="hero-meta">
            {heroMetaData.map((item) => (
              <div className="hero-meta-item" key={item.label}>
                <span className="icon">{getMetaIcon(item.icon)}</span>
                <span className="value">{item.value}</span>
                <span className="label">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <a href="#register" className="btn btn-primary">
              <span>Register Your Team</span>
              <span>→</span>
            </a>
            <a href="#about" className="btn btn-secondary">
              <span>Learn More</span>
            </a>
          </div>

          <div className="countdown-container">
            <p className="countdown-label">Hackathon Starts In</p>
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-value">{formatNumber(days)}</span>
                <span className="countdown-unit">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{formatNumber(hours)}</span>
                <span className="countdown-unit">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{formatNumber(minutes)}</span>
                <span className="countdown-unit">Mins</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{formatNumber(seconds)}</span>
                <span className="countdown-unit">Secs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
