import React from "react";
import "./FilterBar.css";

const FilterBar = ({
  selectedFilter,
  setSelectedFilter
}) => {

  const filters = [
    "All",
    "Ancient India",
    "Maratha",
    "Mughal",
    "Rajput",
    "Sikh",
    "South India"
  ];

  return (

    <section className="filter-section">

      <div className="filter-header">

        <span>
          EXPLORE BY ERA
        </span>

        <h2>
          India's Historical Periods
        </h2>

        <p>
          Select an era to discover the food, clothing, festivals,
          architecture, music, languages and traditions from that period.
        </p>

      </div>

      <div className="filter-container">

        {

          filters.map((filter) => (

            <button

              key={filter}

              className={
                selectedFilter === filter
                  ? "filter-btn active-filter"
                  : "filter-btn"
              }

              onClick={() => setSelectedFilter(filter)}

            >

              {filter}

            </button>

          ))

        }

      </div>

    </section>

  );

};

export default FilterBar;