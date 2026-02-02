import React, { useState } from "react";
import { faqData } from "../../data";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Got questions? We've got answers</p>

        <div className="faq-container">
          {faqData.map((item) => (
            <div
              className={`faq-item ${activeId === item.id ? "active" : ""}`}
              key={item.id}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >
                <span>{item.question}</span>
                <span className="icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
