import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BattleVideoPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const battle = location.state?.video;

  // If the page is opened directly without card navigation
  if (!battle) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#f9f8ef",
          color: "#2b2118",
          fontFamily: "Inter, sans-serif",
          padding: "40px",
          textAlign: "center"
        }}
      >
        <h2>Battle Video Not Found</h2>

        <button
          onClick={() => navigate("/battles")}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "25px",
            background: "#8b5e34",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          ← Back to Battles
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9f8ef",
        padding: "50px 7%",
        color: "#2b2118"
      }}
    >

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate("/battles")}
        style={{
          marginBottom: "30px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "25px",
          background: "#8b5e34",
          color: "#fff",
          fontWeight: "600",
          cursor: "pointer"
        }}
      >
        ← Back to Battles
      </button>


      {/* TITLE */}

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >

        <p
          style={{
            color: "#c49a3a",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "3px"
          }}
        >
          CINEMATIC BATTLE
        </p>


        <h1
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: "42px",
            lineHeight: "1.3",
            marginBottom: "15px"
          }}
        >
          {battle.title}
        </h1>


        <p
          style={{
            color: "#6b5a45",
            fontSize: "17px",
            lineHeight: "1.8",
            marginBottom: "30px"
          }}
        >
          {battle.description}
        </p>


        {/* VIDEO PLAYER */}

        <div
          style={{
            width: "100%",
            background: "#000",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 20px 45px rgba(80,50,20,0.20)"
          }}
        >

          <video
            src={battle.video}
            controls
            autoPlay
            playsInline
            style={{
              width: "100%",
              display: "block",
              maxHeight: "700px"
            }}
          />

        </div>


        {/* BATTLE INFORMATION */}

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            marginTop: "30px"
          }}
        >

          <div>
            <strong>Year</strong>
            <p>{battle.year}</p>
          </div>

          <div>
            <strong>Leader</strong>
            <p>{battle.leader}</p>
          </div>

          <div>
            <strong>Category</strong>
            <p>{battle.category}</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default BattleVideoPage;

