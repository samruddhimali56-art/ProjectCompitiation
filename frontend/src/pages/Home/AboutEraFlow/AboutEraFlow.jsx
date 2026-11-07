import React from "react";
import "./AboutEraFlow.css";
import pic4 from "/images/pic4.png";

const AboutEraFlow = () => {
  return (
    <section className="about-era-section">

      {/* Decorative background */}
      <div className="about-bg-pattern"></div>

      {/* Top decorative line */}
      <div className="about-ornament">
        <span></span>
        <div>✦</div>
        <span></span>
      </div>


      <div className="about-container">

        {/* ================= LEFT IMAGE ================= */}

        <div className="about-image-wrapper">

          <div className="about-image-frame">

            <img
              src={pic4}
              alt="Indian Historical Heritage"
            />

          </div>

          {/* Image decoration */}

          <div className="image-number">
            01
          </div>

          <div className="image-caption">
            <span>INDIA</span>
            <span>THE LAND OF STORIES</span>
          </div>

        </div>


        {/* ================= RIGHT CONTENT ================= */}

        <div className="about-content">

          <div className="about-label">
            ✦ THE STORY BEHIND ERAFLOW
          </div>


          <h2>
            INDIA IS NOT
            <br />
            JUST A <span>COUNTRY.</span>
          </h2>


          <div className="about-divider">
            <span></span>
            ✦
            <span></span>
          </div>


          <p className="about-lead">
            It is a civilization shaped by thousands of years
            of stories, ideas, kingdoms, traditions and people.
          </p>


          <p>
            From the ancient cities of the Indus Valley to the
            magnificent kingdoms of the medieval era, from
            powerful empires to the struggle for independence,
            India's past is a vast tapestry of human experiences.
          </p>


          <p>
            <strong>EraFlow</strong> brings these stories together
            and transforms history into an experience that is
            visual, engaging and interactive.
          </p>


          {/* Historical highlights */}

          <div className="about-highlights">

            <div className="about-highlight">

              <strong>5000+</strong>

              <span>
                YEARS OF
                <br />
                HISTORY
              </span>

            </div>


            <div className="about-highlight">

              <strong>∞</strong>

              <span>
                STORIES
                <br />
                TO DISCOVER
              </span>

            </div>


            <div className="about-highlight">

              <strong>1</strong>

              <span>
                INCREDIBLE
                <br />
                JOURNEY
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom quote */}

      <div className="about-quote">

        <div className="quote-mark">“</div>

        <p>
          A nation lives as long as its stories are remembered.
        </p>

        <span>— THE SPIRIT OF HISTORY</span>

      </div>

    </section>
  );
};

export default AboutEraFlow;