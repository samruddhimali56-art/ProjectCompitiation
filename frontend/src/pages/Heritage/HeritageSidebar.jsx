import React from "react";

import {
    FaFortAwesome,
    FaMountain,
    FaLandmark,
    FaPlaceOfWorship,
    FaGlobeAsia
} from "react-icons/fa";

import "./HeritageSidebar.css";

const HeritageSidebar = ({
    activeCategory,
    setActiveCategory
}) => {

    const categories = [

        {
            name:"Forts",
            icon:<FaFortAwesome/>
        },

        {
            name:"Mountains",
            icon:<FaMountain/>
        },

        {
            name:"Museums",
            icon:<FaLandmark/>
        },

        {
            name:"Temples",
            icon:<FaPlaceOfWorship/>
        },

        {
            name:"UNESCO Sites",
            icon:<FaGlobeAsia/>
        }

    ];

    const handleClick = (category)=>{

        setActiveCategory(category);

        setTimeout(()=>{

            const section=document.querySelector(".heritage-content");

            if(section){

                section.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            }

        },100);

    };

    return(

        <aside className="heritage-sidebar">

            {/* Logo */}

            <div className="sidebar-logo">

                <h2>EraFlow</h2>

                <p>Indian Heritage</p>

            </div>


            {/* Menu */}

            <nav className="sidebar-menu">

                {

                    categories.map((item,index)=>(

                        <button

                            key={index}

                            className={
                                activeCategory===item.name
                                ?
                                "sidebar-item active-sidebar"
                                :
                                "sidebar-item"
                            }

                            onClick={()=>handleClick(item.name)}

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

export default HeritageSidebar;