import React from "react";
import { prizesData } from "../../data";
import { TrophyIcon, StarIcon } from "../Icons";

const Prizes = () => {
  return (
    <section className="section prizes" id="prizes">
      <div className="container">
        <h2 className="section-title">Prizes & Rewards</h2>
        <p className="section-subtitle">Amazing prizes await the winners</p>

        <div className="prizes-grid prizes-two">
          {prizesData.map((prize) => (
            <div
              className={`prize-card ${prize.featured ? "featured" : ""}`}
              key={prize.id}
            >
              <span className="prize-badge">{prize.badge}</span>
              <div className="prize-icon">
                {prize.featured ? (
                  <TrophyIcon size={64} />
                ) : (
                  <StarIcon size={64} />
                )}
              </div>
              <p className="prize-place">{prize.place}</p>
              <p className="prize-amount">{prize.amount}</p>
              <ul className="prize-perks">
                {prize.perks.map((perk, index) => (
                  <li key={index}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
