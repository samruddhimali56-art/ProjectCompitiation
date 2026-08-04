import React from "react";
import { Link } from "react-router-dom";

import "./LeaderCard.css";

const LeaderCard = ({ leader }) => {


  return (

    <div className="card leader-card border-0 shadow-sm">


      {/* Leader Image */}

      <div className="leader-image-wrapper">

        <img

          src={leader.image}

          alt={leader.name}

          className="card-img-top leader-image"

        />

      </div>





      {/* Card Content */}

      <div className="card-body d-flex flex-column">


        <h3 className="card-title fw-bold">

          {leader.name}

        </h3>



        <p className="text-muted mb-2">

          <i className="bi bi-shield-fill"></i>

          {" "}

          {leader.empire}

        </p>




        <p className="text-muted">

          <i className="bi bi-calendar-event"></i>

          {" "}

          {leader.birth}

        </p>





        <div className="mt-auto">


          <Link

            to={`/leaders/${leader._id}`}

            className="btn btn-dark rounded-pill px-4 w-100"

          >

            Explore Story

            <i className="bi bi-arrow-right ms-2"></i>


          </Link>


        </div>



      </div>


    </div>

  );

};


export default LeaderCard;