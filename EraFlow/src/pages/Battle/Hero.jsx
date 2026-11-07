import React from "react";
import battle from "/images/battles/battle.png";

const Hero = ({ onWatchClick }) => {
  return (
    <section className="hero-section">

      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="hero-small-title">
            ANIMATED HISTORY EXPERIENCE
          </p>

          <h1>
            Witness The
            <span> Battles Of Legends</span>
          </h1>

          <p className="hero-description">
            Experience legendary battles through cinematic animated stories.
            Discover warriors, strategies and historic moments brought to life.
          </p>

          <button
            className="hero-button"
            onClick={onWatchClick}
            type="button"
          >
            ▶ Watch Animated Battles
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-leader-area">

          <img
            src={battle}
            alt="Legendary Battle"
            className="hero-leader"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;