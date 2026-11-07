import React, { useState } from "react";

import HeritageSidebar from "./HeritageSidebar";
import HeritageContent from "./HeritageContent";

import "./HeritagePage.css";

const HeritagePage = () => {

    const [activeCategory, setActiveCategory] = useState("Forts");

    return (

        <div className="heritage-page">

            {/* Sidebar */}

            <HeritageSidebar

                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}

            />



            {/* Main Content */}

            <main className="heritage-main">

                {/* Hero */}

                <section className="heritage-hero">

                    <div className="hero-overlay">

                        <span className="hero-tag">

                            🇮🇳 INDIA'S HERITAGE

                        </span>

                        <h1>

                            Explore India's Heritage

                        </h1>

                        <p>

                            Discover majestic forts, ancient temples,
                            museums, mountains and UNESCO World Heritage
                            Sites that preserve India's glorious history
                            and architectural excellence.

                        </p>

                       

                    </div>

                </section>



                {/* Content */}

                <HeritageContent

                    category={activeCategory}

                />

            </main>

        </div>

    );

};

export default HeritagePage;