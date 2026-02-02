import React from "react";
import { themesData } from "../../data";
import { LeafIcon, EducationIcon, HealthIcon, InnovationIcon } from "../Icons";

const getThemeIcon = (iconName) => {
  const icons = {
    leaf: <LeafIcon size={32} />,
    education: <EducationIcon size={32} />,
    health: <HealthIcon size={32} />,
    innovation: <InnovationIcon size={32} />,
  };
  return icons[iconName] || null;
};

const Themes = () => {
  return (
    <section className="section themes" id="themes">
      <div className="container">
        <h2 className="section-title">Hackathon Themes</h2>
        <p className="section-subtitle">
          Choose your domain and build solutions that matter
        </p>

        <div className="themes-grid">
          {themesData.map((theme) => (
            <div className="theme-card" key={theme.id}>
              <div className="theme-icon">{getThemeIcon(theme.icon)}</div>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
