import React from "react";

import {
  FaHome,
  FaUtensils,
  FaTshirt,
  FaLanguage,
  FaMusic,
  FaTheaterMasks,
  FaGlassCheers,
  FaLandmark,
  FaPalette
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  setSelectedFilter
}) => {

  const menuItems = [

    {
      name: "Home",
      icon: <FaHome />
    },

    {
      name: "Food",
      icon: <FaUtensils />
    },

    {
      name: "Clothing",
      icon: <FaTshirt />
    },

    {
      name: "Languages",
      icon: <FaLanguage />
    },

    {
      name: "Dance",
      icon: <FaTheaterMasks />
    },

    {
      name: "Music",
      icon: <FaMusic />
    },

    {
      name: "Festivals",
      icon: <FaGlassCheers />
    },

    {
      name: "Architecture",
      icon: <FaLandmark />
    },

    {
      name: "Arts & Crafts",
      icon: <FaPalette />
    }

  ];


  const handleClick = (category) => {

    setSelectedCategory(category);

    // Reset filter every time
    setSelectedFilter("All");

    // Wait for React to update
    setTimeout(() => {

      // HOME
      if (category === "Home") {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }

      // OTHER CATEGORIES
      else {

        const section = document.getElementById("categories-section");

        if (section) {

          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }

    }, 100);

  };


  return (

    <aside className="culture-sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        <h2>EraFlow</h2>

        <p>Culture & Lifestyle</p>

      </div>


      {/* Menu */}

      <nav className="sidebar-menu">

        {

          menuItems.map((item, index) => (

            <button

              key={index}

              className={
                selectedCategory === item.name
                  ? "sidebar-item active-sidebar"
                  : "sidebar-item"
              }

              onClick={() => handleClick(item.name)}

            >

              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </button>

          ))

        }

      </nav>


      {/* Footer */}

      <div className="sidebar-footer">

        <p>
          Preserving India's rich heritage 🇮🇳
        </p>

      </div>

    </aside>

  );

};

export default Sidebar;