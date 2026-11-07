import React from "react";

function Home() {
  return(
  <>
  {/* HERO */}


<div
  className="d-flex justify-content-center align-items-center text-center"
  style={{
    minHeight: "550px",
    backgroundImage: `linear-gradient(rgba(248,243,239,0.35), rgba(248,243,239,0.35)), url(${"https://i.ibb.co/HT12jqCp/images.jpg"})`,
    // backgroundImage: `linear-gradient(rgba(248,243,239,0.35), rgba(248,243,239,0.35)), url(${"https://i.ibb.co/Q7B4DZ3Z/istockphoto-163881276-170667a.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Decorative Background Circles */}

  <div
    style={{
      position: "absolute",
      width: "550px",
      height: "550px",
      border: "1px solid rgba(165,106,69,.12)",
      borderRadius: "50%",
      top: "-330px",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  ></div>

  <div
    style={{
      position: "absolute",
      width: "700px",
      height: "700px",
      border: "1px solid rgba(165,106,69,.08)",
      borderRadius: "50%",
      top: "-410px",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  ></div>

  <div
    style={{
      position: "absolute",
      width: "850px",
      height: "850px",
      border: "1px solid rgba(165,106,69,.05)",
      borderRadius: "50%",
      top: "-500px",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  ></div>

  <div style={{ position: "relative", zIndex: 2 }}>

    {/* Small Decorative Line */}

    <div
      style={{
        width: "45px",
        height: "2px",
        background: "#D7B79C",
        margin: "0 auto 20px",
      }}
    ></div>

    <h2
      style={{
        color: "#8C3C11",
        fontFamily: "Georgia, serif",
        fontWeight: "600",
        fontSize: "34px",
        lineHeight: "1.25",
        marginBottom: "15px",
      }}
    >
      Preserving the Past,
      <br />
      Flowing into
      <br />
      the Future.
    </h2>

    <p
      style={{
        color: "#A56A45",
        fontSize: "15px",
        margin: 0,
        letterSpacing: ".3px",
      }}
    >
      Where history becomes an immersive digital journey.
    </p>

  </div>
</div>
<br /><br />


{/* Categories Section */}
<div className="container my-5">
  <div className="row g-4">

    {/* Mission Card */}
    <div className="col-lg-6">
      <div
        style={{
          background: "#fff",
          border: "1px solid #E8E2DC",
          boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
          padding: "28px",
          height: "100%",
        }}
      >
        <div
          className="d-flex align-items-center mb-3"
          style={{
            color: "#8C3C11",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          <i
            className="bi bi-compass me-2"
            style={{
              fontSize: "18px",
            }}
          ></i>

          Mission
        </div>

        <p
          style={{
            color: "#7D7D7D",
            fontSize: "14px",
            lineHeight: "28px",
            marginBottom: 0,
          }}
        >
          Intertwine historical discovery for students,
          researchers, and history buffs. We strive to make
          the annals of human endeavor accessible,
          engaging, and deeply informative.
        </p>
      </div>
    </div>

    {/* Vision Card */}

    <div className="col-lg-6">
      <div
        style={{
          background: "#fff",
          border: "1px solid #E8E2DC",
          boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
          padding: "28px",
          height: "100%",
        }}
      >
        <div
          className="d-flex align-items-center mb-3"
          style={{
            color: "#8C3C11",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          <i
            className="bi bi-eye me-2"
            style={{
              fontSize: "18px",
            }}
          ></i>

          Vision
        </div>

        <p
          style={{
            color: "#7D7D7D",
            fontSize: "14px",
            lineHeight: "28px",
            marginBottom: 0,
          }}
        >
          Reimagining how humanity interacts with history
          through dynamic timeline flows. We envision a
          future where the past is not a static text, but a
          living, explorable dimension.
        </p>
      </div>
    </div>

  </div>
</div>
<br /><br />

{/* ================= Our Chronicle ================= */}

<div
  className="container py-5"
  style={{
    background: "#F8F3EF",
    borderRadius: "25px",
  }}
>
  <div className="text-center mb-5">
    <h2
      style={{
        color: "#8C3C11",
        fontWeight: "700",
        fontSize: "42px",
      }}
    >
      Our Chronicle
    </h2>

    <p
      style={{
        color: "#A56A45",
        fontSize: "18px",
      }}
    >
      The unfolding narrative of EraFlow
    </p>
  </div>

  <div
    style={{
      position: "relative",
      maxWidth: "1000px",
      margin: "auto",
    }}
  >
    {/* Center Line */}

    <div
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: "3px",
        background: "#DCC8B7",
        transform: "translateX(-50%)",
      }}
    ></div>

    {[
      {
        stage: "INCEPTION",
        title: "Concept",
        desc: "The idea of bringing India's historical journey into one beautiful digital experience.",
      },

      {
        stage: "COLLECTION",
        title: "Data Curation",
        desc: "Collecting verified events, personalities, kingdoms and timelines from trusted historical sources.",
      },

      {
        stage: "DEVELOPMENT",
        title: "Interactive Engine",
        desc: "Engineering maps, quizzes, timelines and immersive exploration for every learner.",
      },

      {
        stage: "EXPANSION",
        title: "Global Archive",
        desc: "Making Indian history accessible to students, researchers and history lovers worldwide.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="row align-items-center mb-5"
      >
        {/* LEFT */}

        <div
          className={`col-md-5 ${
            index % 2 === 0 ? "text-end" : ""
          }`}
        >
          {index % 2 !== 0 && (
            <div
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #E8E2DC",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              }}
            >
              <small
                style={{
                  color: "#A56A45",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                {item.stage}
              </small>

              <h4
                style={{
                  color: "#8C3C11",
                  marginTop: "10px",
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  color: "#7D7D7D",
                  marginTop: "10px",
                  lineHeight: "28px",
                }}
              >
                {item.desc}
              </p>
            </div>
          )}
        </div>

        {/* CENTER */}

        <div className="col-md-2 text-center position-relative">
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#8C3C11",
              margin: "auto",
              border: "4px solid #F8F3EF",
              position: "relative",
              zIndex: 10,
            }}
          ></div>
        </div>

        {/* RIGHT */}

        <div className="col-md-5">
          {index % 2 === 0 && (
            <div
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #E8E2DC",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              }}
            >
              <small
                style={{
                  color: "#A56A45",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                {item.stage}
              </small>

              <h4
                style={{
                  color: "#8C3C11",
                  marginTop: "10px",
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  color: "#7D7D7D",
                  marginTop: "10px",
                  lineHeight: "28px",
                }}
              >
                {item.desc}
              </p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
<br />
<br />
<hr />
<br />


{/* ======================= Foundational Pillars ======================= */}

<div className="container py-5">

  <h2
    className="text-center mb-5"
    style={{
      color: "#8C3C11",
      fontWeight: "500",
      fontSize: "40px",
      fontFamily: "Georgia, serif",
    }}
  >
    Foundational Pillars
  </h2>

  {/* First Row */}

  <div className="row g-4 mb-4">

    {/* Historical Accuracy */}

    <div className="col-lg-8">
      <div
        style={{
          background: "#fff",
          minHeight: "210px",
          padding: "30px",
          border: "1px solid #E8E2DC",
          boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <i
          className="bi bi-bank"
          style={{
            fontSize: "28px",
            color: "#A56A45",
          }}
        ></i>

        <h3
          style={{
            marginTop: "35px",
            color: "#8C3C11",
            fontSize: "32px",
            fontFamily: "Georgia, serif",
          }}
        >
          Historical Accuracy
        </h3>

        <p
          style={{
            color: "#777",
            fontSize: "15px",
            marginTop: "12px",
            lineHeight: "28px",
            maxWidth: "520px",
          }}
        >
          Rigorous verification against primary sources to ensure
          structural integrity of our temporal data.
        </p>
      </div>
    </div>

    {/* Interactive */}

    <div className="col-lg-4">
      <div
        style={{
          background: "#fff",
          minHeight: "210px",
          padding: "30px",
          border: "1px solid #E8E2DC",
          boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <i
          className="bi bi-hand-index-thumb"
          style={{
            fontSize: "28px",
            color: "#A56A45",
          }}
        ></i>

        <h3
          style={{
            marginTop: "35px",
            color: "#8C3C11",
            fontSize: "28px",
            fontFamily: "Georgia, serif",
          }}
        >
          Interactive Exploration
        </h3>

        <p
          style={{
            color: "#777",
            fontSize: "15px",
            marginTop: "12px",
            lineHeight: "28px",
          }}
        >
          Tactile interfaces that invite discovery.
        </p>
      </div>
    </div>

  </div>

  {/* Second Row */}

  <div className="row g-4">

    {/* Community */}

    <div className="col-lg-4">
      <div
        style={{
          background: "#fff",
          minHeight: "210px",
          padding: "30px",
          border: "1px solid #E8E2DC",
          boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <i
          className="bi bi-people-fill"
          style={{
            fontSize: "28px",
            color: "#A56A45",
          }}
        ></i>

        <h3
          style={{
            marginTop: "35px",
            color: "#8C3C11",
            fontSize: "30px",
            fontFamily: "Georgia, serif",
          }}
        >
          Community Archiving
        </h3>

        <p
          style={{
            color: "#777",
            fontSize: "15px",
            marginTop: "12px",
            lineHeight: "28px",
          }}
        >
          Fostering a collaborative environment for shared historical
          curation.
        </p>
      </div>
    </div>

    {/* Accessibility */}

    <div className="col-lg-8">
      <div
        style={{
          background: "#fff",
          minHeight: "210px",
          padding: "30px",
          border: "1px solid #E8E2DC",
          boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <i
          className="bi bi-universal-access"
          style={{
            fontSize: "28px",
            color: "#A56A45",
          }}
        ></i>

        <h3
          style={{
            marginTop: "35px",
            color: "#8C3C11",
            fontSize: "32px",
            fontFamily: "Georgia, serif",
          }}
        >
          Accessibility
        </h3>

        <p
          style={{
            color: "#777",
            fontSize: "15px",
            marginTop: "12px",
            lineHeight: "28px",
            maxWidth: "560px",
          }}
        >
          Ensuring the archives are navigable and comprehensible for all
          minds seeking knowledge.
        </p>
      </div>
    </div>

  </div>

</div>
</>
 
)
}

export default Home;