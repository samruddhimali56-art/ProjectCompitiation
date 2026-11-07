import React from "react";


const WhyBattleMatters = () => {


  const importance = [


    {
      icon: "⚔️",
      title: "Strategy & Leadership",
      text:
        "Great battles teach us how vision, planning and leadership can change the course of history."
    },


    {
      icon: "📜",
      title: "Historical Legacy",
      text:
        "Every battle leaves behind stories that help future generations understand the past."
    },


    {
      icon: "🛡️",
      title: "Courage & Sacrifice",
      text:
        "The bravery of warriors reminds us about determination, responsibility and courage."
    },


    {
      icon: "🏛️",
      title: "Civilization Impact",
      text:
        "Many battles became turning points that shaped cultures, nations and societies."
    }


  ];





  return (


    <section className="why-section">



      <div className="why-container">





        <div className="why-heading">


          <p className="section-label">
            BEYOND THE BATTLEFIELD
          </p>



          <h2>

            Why Battle Stories
            <span> Matter</span>

          </h2>



          <p>

            Battles are not only about victory or defeat.
            They represent human ambition, leadership,
            courage and the moments that transformed history.

          </p>


        </div>







        <div className="importance-grid">


          {
            importance.map((item,index)=>(


              <div

                className="importance-card"

                key={index}

              >



                <div className="importance-icon">

                  {item.icon}

                </div>




                <h3>

                  {item.title}

                </h3>




                <p>

                  {item.text}

                </p>



              </div>



            ))
          }



        </div>




      </div>



    </section>


  );


};


export default WhyBattleMatters;