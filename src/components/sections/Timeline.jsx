import React from "react";
import { timelineData } from "../../data";

const Timeline = () => {
  return (
    <section className="section schedule" id="timeline">
      <div className="container">
        <h2 className="section-title">Event Timeline</h2>
        <p className="section-subtitle">
          Mark your calendars and prepare for an amazing experience
        </p>

        <div className="timeline">
          {timelineData.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
