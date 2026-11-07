import React from "react";

import Hero from "./Hero";
import BattleVideos from "./BattleVideos";
import WhyBattleMatters from "./WhyBattleMatters";

import "./Battles.css";

const Battles = () => {

  const scrollToBattles = () => {
    document.getElementById("battle-videos")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="battle-page">

      <Hero onWatchClick={scrollToBattles} />

      <BattleVideos />

      <WhyBattleMatters />

    </div>
  );
};

export default Battles;