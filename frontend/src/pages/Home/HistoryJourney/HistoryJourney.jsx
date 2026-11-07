
import React, { useState } from "react";
import "./HistoryJourney.css";

const eras = [
  {
    id: "ancient",
    number: "01",
    period: "c. 2500 BCE – 600 BCE",
    title: "Ancient India",
    subtitle: "THE BEGINNING OF CIVILIZATION",
    description:
      "From the cities of the Indus Valley to the rise of early kingdoms, ancient India witnessed remarkable achievements in urban planning, trade, philosophy, science and culture.",
    image: "/images/India1.png",
    label: "INDUS VALLEY",
  },
  {
    id: "classical",
    number: "02",
    period: "c. 600 BCE – 700 CE",
    title: "Classical India",
    subtitle: "AGE OF EMPIRES & KNOWLEDGE",
    description:
      "The Mauryas, Guptas and other powerful kingdoms shaped an era of political expansion, mathematics, astronomy, literature, art and philosophical thought.",
    image: "/images/India2.png",
    label: "MAURYA • GUPTA",
  },
  {
    id: "medieval",
    number: "03",
    period: "c. 700 – 1526 CE",
    title: "Medieval India",
    subtitle: "KINGDOMS, FORTS & CULTURES",
    description:
      "Across the subcontinent, regional kingdoms flourished while new architectural styles, languages, traditions and cultural exchanges transformed Indian society.",
    image: "/images/India3.png",
    label: "KINGDOMS",
  },
  {
    id: "mughal",
    number: "04",
    period: "1526 – 1707 CE",
    title: "Mughal Era",
    subtitle: "ARCHITECTURE & IMPERIAL POWER",
    description:
      "The Mughal period left an extraordinary architectural and artistic legacy while shaping politics, culture, cuisine, gardens and traditions across large parts of India.",
    image: "/images/India4.png",
    label: "MUGHAL INDIA",
  },
  {
    id: "maratha",
    number: "05",
    period: "c. 1674 – 1818 CE",
    title: "Maratha Era",
    subtitle: "THE RISE OF SWARAJYA",
    description:
      "The Maratha movement transformed the political landscape of India, with forts, naval power, administration and the idea of Swarajya becoming central to its legacy.",
    image: "/images/India5.png",
    label: "SWARAJYA",
  },
  {
    id: "modern",
    number: "06",
    period: "1857 – 1947 CE",
    title: "Modern India",
    subtitle: "THE ROAD TO FREEDOM",
    description:
      "From the uprising of 1857 to the independence movement, generations of Indians challenged colonial rule and shaped the journey toward a free nation.",
    image: "/images/India6.png",
    label: "FREEDOM",
  },
];

const HistoryJourney = () => {
  const [activeEra, setActiveEra] = useState(eras[0]);

  return (
    <section className="history-journey">

      {/* ================= HEADER ================= */}

      <div className="journey-header">

        <div className="journey-eyebrow">
          <span></span>
          INDIA • THROUGH THE AGES
          <span></span>
        </div>

        <h2>
          A <em>Journey</em>
          <br />
          Through Time
        </h2>

        <p>
          Thousands of years. Countless stories.
          One extraordinary civilization.
        </p>

      </div>


      {/* ================= MAIN EXPERIENCE ================= */}

      <div className="journey-experience">

        {/* ================= LEFT TIMELINE ================= */}

        <div className="journey-timeline">

          <div className="timeline-heading">
            <span>THE ERAS</span>
            <small>SELECT AN ERA</small>
          </div>

          <div className="era-list">

            {eras.map((era) => (

              <div
                key={era.id}
                className={`era-item ${
                  activeEra.id === era.id ? "active" : ""
                }`}
                onMouseEnter={() => setActiveEra(era)}
              >

                <div className="era-number">
                  {era.number}
                </div>

                <div className="era-info">

                  <span className="era-period">
                    {era.period}
                  </span>

                  <h3>
                    {era.title}
                  </h3>

                </div>

                <div className="era-arrow">
                  →
                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ================= RIGHT VISUAL ================= */}

        <div className="journey-display">

          <div className="display-image">

            <img
              key={activeEra.image}
              src={activeEra.image}
              alt={activeEra.title}
            />

            <div className="display-overlay"></div>

            <div className="display-era-number">
              {activeEra.number}
            </div>

            <div className="display-label">
              ✦ {activeEra.label}
            </div>

          </div>


          {/* ================= CONTENT ================= */}

          <div className="display-content">

            <div className="display-period">
              {activeEra.period}
            </div>

            <h3>
              {activeEra.title}
            </h3>

            <div className="display-subtitle">
              {activeEra.subtitle}
            </div>

            <p>
              {activeEra.description}
            </p>

          </div>


          {/* ================= IMAGE FRAME ================= */}

          <div className="display-frame"></div>

        </div>

      </div>


      {/* ================= BOTTOM STATEMENT ================= */}

      <div className="journey-bottom">

        <div className="journey-line"></div>

        <div className="journey-bottom-text">

          <span>2500 BCE</span>

          <strong>
            OVER FOUR MILLENNIA
          </strong>

          <span>1947 CE</span>

        </div>

        <div className="journey-line"></div>

      </div>

    </section>
  );
};

export default HistoryJourney;

