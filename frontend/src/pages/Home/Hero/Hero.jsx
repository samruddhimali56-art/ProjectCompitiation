
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* ================= HERO IMAGE ================= */}

      <div className="hero-image-wrapper">

        <img
          src="/images/pic2.png"
          alt="Historical India"
          className="hero-image"
        />

        <div className="hero-image-overlay"></div>

        {/* Image label */}
        <div className="hero-image-label">
          <span>✦</span>
          INDIA • THROUGH THE AGES
        </div>

      </div>


      {/* ================= HERO CONTENT ================= */}

      <div className="hero-content">

        <div className="hero-small-title">
          <span></span>
          A JOURNEY THROUGH HISTORY
          <span></span>
        </div>


        <h1>
          THE <br />STORY <br />
         
          <em>OF INDIA</em>
        </h1>


        <p className="hero-description">
          From ancient civilizations and mighty empires to
          legendary<br /> battles, magnificent monuments and timeless
          traditions — <br />discover the stories that shaped India.
        </p>


        {/* ================= HISTORICAL PERIOD ================= */}

        <div className="hero-period">

          <div className="period-date">
            <strong>2500</strong>
            <span>BCE</span>
          </div>


          <div className="period-line">

            <div className="period-dot"></div>

            <div className="period-middle"></div>

            <div className="period-dot"></div>

          </div>


          <div className="period-date">
            <strong>1947</strong>
            <span>CE</span>
          </div>

        </div>


        <div className="hero-period-label">
          OVER FOUR MILLENNIA OF CIVILIZATION
        </div>

      </div>


      {/* ================= SIDE INFORMATION ================= */}

      <div className="hero-side-info">

        <div className="side-number">
          01
        </div>

        <div className="side-line"></div>

        <div className="side-text">
          EXPLORE
          <br />
          THE PAST
        </div>

      </div>


      {/* ================= BOTTOM INFORMATION ================= */}

      <div className="hero-bottom">

        <div className="hero-bottom-item">
          <span>01</span>

          <p>
            ANCIENT
            <br />
            CIVILIZATIONS
          </p>
        </div>


        <div className="hero-bottom-item">
          <span>02</span>

          <p>
            ROYAL
            <br />
            KINGDOMS
          </p>
        </div>


        <div className="hero-bottom-item">
          <span>03</span>

          <p>
            BATTLES &
            <br />
            EMPIRES
          </p>
        </div>


        <div className="hero-bottom-item">
          <span>04</span>

          <p>
            CULTURE &
            <br />
            HERITAGE
          </p>
        </div>

      </div>


      {/* ================= SCROLL INDICATOR ================= */}

      <div className="hero-scroll">

        <div className="scroll-line"></div>

        <span>
          SCROLL TO DISCOVER
        </span>

      </div>

    </section>
  );
};

export default Hero;

