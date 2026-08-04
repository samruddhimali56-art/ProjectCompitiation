import React, { useEffect, useState } from "react";

import API from "../../api/axios";

import LeaderCard from "./components/LeaderCard";

import "./Leaders.css";


const Leaders = () => {


  const [leaders,setLeaders] = useState([]);

  const [loading,setLoading] = useState(true);


  const [search,setSearch] = useState("");

  const [category,setCategory] = useState("All");




  useEffect(()=>{


    const fetchLeaders = async()=>{


      try{

        const response = await API.get("/leaders");

        setLeaders(response.data);


      }
      catch(error){

        console.log(error);

      }
      finally{

        setLoading(false);

      }


    };


    fetchLeaders();


  },[]);






  if(loading){

    return(

      <div className="loading-container">

        <div className="spinner-border text-warning"></div>

        <p>
          Loading Historical Records...
        </p>

      </div>

    );

  }





  const filteredLeaders = leaders.filter((leader)=>{


    const searchMatch =
    leader.name
    .toLowerCase()
    .includes(search.toLowerCase());



    const categoryMatch =
    category==="All" ||
    leader.category===category;



    return searchMatch && categoryMatch;


  });






return (

<section className="leaders-page">


<div className="container py-5">





{/* HEADER */}


<div className="leaders-header">


<span className="archive-tag">
INDIAN HISTORY ARCHIVE
</span>


<h1>
Great Leaders of India
</h1>


<p>
Discover the stories, achievements, and legacy of India's legendary personalities.
</p>


</div>









{/* FILTER AREA */}



<div className="filter-card">


<div className="search-wrapper">


<i className="bi bi-search"></i>


<input

type="text"

placeholder="Search historical personalities..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

>


</input>


</div>





<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

>


<option>
All Categories
</option>

<option>
King
</option>

<option>
Queen
</option>

<option>
Emperor
</option>

<option>
Warrior
</option>

<option>
Freedom Fighter
</option>


</select>


</div>









{/* CARDS */}



<div className="row g-4 mt-4">


{

filteredLeaders.map((leader)=>(


<div

className="col-xl-4 col-lg-4 col-md-6"

key={leader._id}

>


<LeaderCard

leader={leader}

/>


</div>


))


}



</div>






</div>


</section>

);


};


export default Leaders;