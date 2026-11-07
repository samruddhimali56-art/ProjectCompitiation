import React, { useEffect, useState } from "react";


import Sidebar from "./Sidebar";
import FilterBar from "./FilterBar";
import CultureCard from "./CultureCard";


import axios from "../../api/axios";


import "./CultureLifestyle.css";



const CultureLifestyle = () => {



  const [cultureData, setCultureData] = useState([]);


  const [selectedCategory, setSelectedCategory] = useState("Home");


  const [selectedFilter, setSelectedFilter] = useState("All");


  const [searchTerm, setSearchTerm] = useState("");



  // ==========================
  // Fetch Culture Data
  // ==========================

  useEffect(() => {


    const fetchCulture = async () => {


      try {


        const { data } = await axios.get("/culture");


        setCultureData(data);

        



      }

      catch(error){


        console.log("Culture Fetch Error:",error);


      }


    };



    fetchCulture();



  }, []);







  const handleCategoryChange = (category) => {


    setSelectedCategory(category);


    setSelectedFilter("All");


  };

  const scrollToCategories = () => {
  document.getElementById("categories-section")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};









  // ==========================
  // Filter Data
  // ==========================


  let displayData = [];



  if(selectedCategory !== "Home"){



    displayData = cultureData.filter((item)=>{


      return (

        item.category === selectedCategory

        &&

        (

          selectedFilter === "All"

          ||

          item.era === selectedFilter

        )

      );


    });


  }







  const filteredData = displayData.filter((item)=>{


    return item.name

      ?.toLowerCase()

      .includes(

        searchTerm.toLowerCase()

      );


  });







return (


<div className="culture-page">







{/* SIDEBAR */}



<Sidebar


selectedCategory={selectedCategory}


setSelectedCategory={handleCategoryChange}


setSelectedFilter={setSelectedFilter}



/>









{/* MAIN CONTENT */}



<main className="culture-content">







{/* HERO */}



<section className="culture-hero">





<div className="hero-content">



<span className="hero-tag">


🇮🇳 EXPLORE INDIA


</span>





<h1>


Culture & Lifestyle

<br/>

of India


</h1>






<p>


Discover India's food, clothing, music,

dance, festivals and architectural heritage.

Explore traditions through different historical eras.


</p>






<button
  className="hero-btn"
  onClick={scrollToCategories}
  type="button"
>
  Explore Culture
</button>




</div>









<div className="hero-image">


<img


src="/images/culture/hero.jpg"


alt="Indian Culture"



/>


</div>





</section>









{/* FILTER */}



<FilterBar



searchTerm={searchTerm}


setSearchTerm={setSearchTerm}


selectedFilter={selectedFilter}


setSelectedFilter={setSelectedFilter}


/>









{/* CONTENT AREA */}



<section


id="categories-section"


className="categories-section"



>







<div className="section-header">





<span>


DISCOVER INDIA


</span>






<h2>



{

selectedCategory === "Home"

?

"Explore Indian Culture"

:

selectedCategory


}



</h2>








<p>


Choose a historical era to discover traditions and heritage.


</p>





</div>









<div className="row g-4">







{

selectedCategory === "Home"

?




<div className="empty-state">



<h3>


Select any category from sidebar


</h3>





<p>


Example:

Food → Maratha → Maratha Thali


</p>



</div>







:




filteredData.length > 0

?




filteredData.map((item,index)=>(




<div


className="col-lg-4 col-md-6"


key={item._id || index}



>



<CultureCard


item={item}


/>



</div>





))






:




<div className="empty-state">



<h3>


No Data Found


</h3>





<p>


Try another era filter.


</p>



</div>




}







</div>







</section>









</main>






</div>



);



};



export default CultureLifestyle;