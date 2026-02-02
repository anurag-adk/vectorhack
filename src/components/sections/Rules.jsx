import React from "react";
import { rulesData } from "../../data";
import { DocumentIcon, ChartIcon, CodeIcon, HeartIcon } from "../Icons";

const getRuleIcon = (iconName) => {
  const icons = {
    document: <DocumentIcon size={24} />,
    chart: <ChartIcon size={24} />,
    code: <CodeIcon size={24} />,
    heart: <HeartIcon size={24} />,
  };
  return icons[iconName] || null;
};

const Rules = () => {
  return (
    <section className="section rules" id="rules">
      <div className="container">
        <h2 className="section-title">Rules & Guidelines</h2>
        <p className="section-subtitle">
          Please read carefully before registering
        </p>

        <div className="rules-container">
          {rulesData.map((category) => (
            <div className="rules-card" key={category.id}>
              <h3>
                <span className="rules-icon">{getRuleIcon(category.icon)}</span>
                {category.title}
              </h3>
              <ul className="rules-list">
                {category.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
