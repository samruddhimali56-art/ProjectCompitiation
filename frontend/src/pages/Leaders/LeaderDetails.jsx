import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import API from "../../api/axios";

import "./LeaderDetails.css";


const LeaderDetails = () => {


  const { id } = useParams();


  const [leader,setLeader] = useState(null);

  const [loading,setLoading] = useState(true);



  useEffect(()=>{


    const fetchLeader = async()=>{

      try{

        const response = await API.get(`/leaders/${id}`);

        setLeader(response.data);


      }
      catch(error){

        console.log(
          "Leader fetch error:",
          error
        );

      }
      finally{

        setLoading(false);

      }

    };


    fetchLeader();


  },[id]);




  if(loading){

    return(

      <div className="container text-center py-5">

        <div className="spinner-border text-warning"></div>

        <p className="mt-3">
          Loading...
        </p>

      </div>

    );

  }





  if(!leader){

    return(

      <div className="container text-center py-5">

        <h2>
          Leader Not Found
        </h2>


        <Link 
          to="/leaders"
          className="btn btn-dark mt-3"
        >

          Back

        </Link>


      </div>

    );

  }




return (

<section className="leader-details-page">


<div className="container py-5">



{/* HERO */}


<div className="row align-items-center g-5 mb-5">


<div className="col-lg-5">


<img

src={leader.image}

alt={leader.name}

className="leader-detail-image"

onError={(e)=>{

e.target.src="https://via.placeholder.com/400";

}}

/>


</div>





<div className="col-lg-7">


<span className="badge bg-warning text-dark mb-3">

{leader.category}

</span>


<h1 className="display-3 fw-bold">

{leader.name}

</h1>


<h3 className="text-secondary">

{leader.title}

</h3>



<p className="lead mt-3">

{leader.shortDescription || "Explore the history and legacy of this great personality."}

</p>




<div className="d-flex flex-wrap gap-3">


<span className="info-pill">
🏰 {leader.empire}
</span>


<span className="info-pill">
⚜️ {leader.dynasty}
</span>


<span className="info-pill">
🏛️ {leader.capital}
</span>


</div>


</div>


</div>







<Section title="Basic Information">


<div className="row g-4">


{
[
["Birth",leader.birth],
["Death",leader.death],
["Reign",leader.reign],
["Birth Place",leader.placeOfBirth],
["Father",leader.father],
["Mother",leader.mother]

].map((item,index)=>(


<div className="col-md-4" key={index}>


<div className="info-card">


<h5>
{item[0]}
</h5>


<p>
{item[1] || "Not Available"}
</p>


</div>


</div>


))

}


</div>


</Section>









<Section title="Biography">


<p className="content-text">

{leader.biography}

</p>


</Section>









<Section title="Major Achievements">


<ListData data={leader.achievements}/>


</Section>









<Section title="Major Battles">


<div className="row g-3">


{
leader.battles?.map((battle,index)=>(


<div 
className="col-md-4"
key={index}
>


<div className="content-card">

⚔️ {battle}

</div>


</div>


))

}


</div>


</Section>









<Section title="Timeline">


{
leader.timeline?.map((item,index)=>(


<div 
className="timeline-item"
key={index}
>


<h5>
{item.year}
</h5>


<p>
{item.event}
</p>


</div>


))

}


</Section>








<Section title="Interesting Facts">


<ListData data={leader.interestingFacts}/>


</Section>








<Section title="Famous Quotes">


{
leader.quotes?.map((quote,index)=>(


<div
className="quote-card mb-3"
key={index}
>

❝ {quote}

</div>


))

}


</Section>







<Link

to="/leaders"

className="btn btn-outline-dark rounded-pill px-4"

>

← Back To Leaders

</Link>





</div>


</section>

);

};






const ListData = ({data})=>{


if(!data || data.length===0)

return (

<p className="content-text">

No information available.

</p>

);



return (

<ul className="list-group">


{
data.map((item,index)=>(

<li
className="list-group-item"
key={index}
>

{item}

</li>


))

}


</ul>


);


}






const Section = ({title,children})=>(

<section className="mb-5">


<h2 className="section-heading">

{title}

</h2>


{children}


</section>


);



export default LeaderDetails;