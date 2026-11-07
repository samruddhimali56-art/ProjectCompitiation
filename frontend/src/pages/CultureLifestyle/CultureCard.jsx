import React from "react";

import "./CultureCard.css";


const CultureCard = ({ item }) => {


  return (


    <div className="culture-card">


      <img

        src={item.image}

        alt={item.name}

        className="culture-card-image"

      />



      <div className="culture-card-content">


        <h3>

          {item.name}

        </h3>



        <p>

          {item.shortDescription || item.description}

        </p>



      </div>



    </div>


  );

};


export default CultureCard;