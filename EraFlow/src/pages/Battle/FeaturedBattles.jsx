import React from "react";
import { featuredBattles } from "./data";
import BattleCard from "./BattleCard";


const FeaturedBattles = () => {


  return (

    <section className="featured-section">


      <div className="section-header">


        <p className="section-label">
          HISTORICAL MOMENTS
        </p>


        <h2>
          Legendary Battles That
          <span> Changed The World</span>
        </h2>


        <p className="section-description">
          Discover the strategies, sacrifices and leadership
          behind the battles that shaped civilizations.
        </p>


      </div>





      <div className="battle-grid">


        {
          featuredBattles.map((battle)=> (

            <BattleCard
              key={battle.id}
              battle={battle}
            />

          ))
        }


      </div>



    </section>

  );


};


export default FeaturedBattles;