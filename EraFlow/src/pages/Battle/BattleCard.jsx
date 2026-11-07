import React from "react";


const BattleCard = ({ battle }) => {


  return (

    <article className="battle-card">


      {/* IMAGE AREA */}

      <div className="battle-card-image">


        <img
          src={battle.image}
          alt={battle.title}
        />



        <div className="battle-year">

          {battle.year}

        </div>


      </div>





      {/* CONTENT AREA */}

      <div className="battle-card-content">


        <h3>
          {battle.title}
        </h3>



        <p className="battle-leader">

          Led by <strong>{battle.leader}</strong>

        </p>



        <p className="battle-text">

          {battle.description}

        </p>





        <button className="battle-read-button">

          Read History

          <span>
            →
          </span>

        </button>



      </div>



    </article>

  );


};


export default BattleCard;