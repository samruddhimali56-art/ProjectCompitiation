import React from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

import "./HeritageCard.css";

const HeritageCard = ({ item }) => {
  return (
    <article className="heritage-card">

      <div className="card-image">
        <img src={item.image} alt={item.title} />

        <div className="image-overlay">
          <span>
            <FaStar /> Heritage
          </span>
        </div>
      </div>

      <div className="card-content">

        <h2>{item.title}</h2>

        <p className="location">
          <FaMapMarkerAlt />
          {item.location}
        </p>

        <p className="description">
          {item.description}
        </p>

        <div className="facts">

          <h4>Interesting Highlights</h4>

          <ul>
            {item.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>

        </div>

       

      </div>

    </article>
  );
};

export default HeritageCard;