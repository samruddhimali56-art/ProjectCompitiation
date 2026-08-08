import React from "react";

import Hero from "./Hero/Hero";
import AboutEraFlow from "./AboutEraFlow/AboutEraFlow";
import HistoryJourney from "./HistoryJourney/HistoryJourney";
import DidYouKnow from "./DidYouKnow/DidYouKnow";



import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">

      <Hero />

       <HistoryJourney />
       <DidYouKnow />

        <AboutEraFlow />




        

    </main>
  );
};

export default Home;