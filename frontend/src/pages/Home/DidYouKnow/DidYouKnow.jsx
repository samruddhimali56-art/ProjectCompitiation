import React, { useEffect, useState } from "react";
import "./DidYouKnow.css";

const facts = [
  {
    number: "01",
    period: "ANCIENT INDIA",
    fact: "The ancient city of Mohenjo-daro had an advanced drainage system and carefully planned streets.",
    detail:
      "Its urban planning reflects remarkable knowledge of engineering and city organization thousands of years ago."
  },
  {
    number: "02",
    period: "MATHEMATICS",
    fact: "Indian mathematicians played a major role in developing the concept of zero.",
    detail:
      "The development of zero as a number transformed mathematics and eventually influenced mathematical thinking around the world."
  },
  {
    number: "03",
    period: "ARCHITECTURE",
    fact: "The Brihadisvara Temple at Thanjavur is one of India's remarkable examples of Chola architecture.",
    detail:
      "Its monumental design demonstrates the engineering, artistic and architectural achievements of the Chola period."
  },
  {
    number: "04",
    period: "MARITIME HISTORY",
    fact: "Ancient and medieval Indian kingdoms maintained extensive maritime connections across the Indian Ocean.",
    detail:
      "Trade networks connected the Indian subcontinent with regions of Southeast Asia, Arabia and East Africa."
  },
  {
    number: "05",
    period: "FREEDOM STRUGGLE",
    fact: "India's independence movement involved countless people, movements and ideas across the subcontinent.",
    detail:
      "The struggle for independence developed over generations and included political movements, social reform and mass participation."
  }
];

const DidYouKnow = () => {

  const [activeFact, setActiveFact] = useState(0);

  const currentFact = facts[activeFact];

  useEffect(() => {

    const timer = setInterval(() => {

      setActiveFact((previous) =>
        (previous + 1) % facts.length
      );

    }, 6000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="did-you-know">

      {/* Background */}

      <div className="fact-background"></div>

      <div className="fact-glow"></div>


      {/* ================= HEADER ================= */}

      <div className="fact-header">

        <span>
          ✦ FROM THE HISTORICAL ARCHIVES ✦
        </span>

        <h2>
          DID YOU
          <br />
          <strong>KNOW?</strong>
        </h2>

      </div>


      {/* ================= MAIN CARD ================= */}

      <div className="fact-card">

        {/* Decorative corners */}

        <div className="fact-corner fact-corner-tl"></div>
        <div className="fact-corner fact-corner-tr"></div>
        <div className="fact-corner fact-corner-bl"></div>
        <div className="fact-corner fact-corner-br"></div>


        {/* Left */}

        <div className="fact-left">

          <div className="fact-seal">

            <div className="seal-inner">

              <span>✦</span>

              <strong>
                ERA
                <br />
                FLOW
              </strong>

              <span>✦</span>

            </div>

          </div>


          <div className="fact-index">

            <span>ARCHIVE</span>

            <strong>
              {currentFact.number}
            </strong>

          </div>

        </div>


        {/* Right */}

        <div className="fact-content">

          <span className="fact-period">
            {currentFact.period}
          </span>

          <div className="fact-line"></div>

          <h3 key={currentFact.fact}>
            {currentFact.fact}
          </h3>

          <p key={currentFact.detail}>
            {currentFact.detail}
          </p>


          {/* Fact navigation */}

          <div className="fact-navigation">

            {facts.map((_, index) => (

              <button
                key={index}
                className={
                  activeFact === index
                    ? "fact-dot active"
                    : "fact-dot"
                }
                onClick={() => setActiveFact(index)}
                aria-label={`Show historical fact ${index + 1}`}
              />

            ))}

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="fact-footer">

        <div className="footer-line"></div>

        <span>
          KNOWLEDGE • MEMORY • LEGACY
        </span>

        <div className="footer-line"></div>

      </div>

    </section>
  );
};

export default DidYouKnow;