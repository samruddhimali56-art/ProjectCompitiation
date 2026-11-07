import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Fort() {
const [articles, setArticles] = useState([]);

useEffect(() => {

    axios.get("http://localhost:5000/articles")

        .then((response) => {

            setArticles(response.data);

        })

        .catch((error) => {

            console.log(error);

        });

    console.log("Fort component mounted");

}, []);

  return (
    <>
      <h1>forts</h1>
   <div
    className="container py-5"
    style={{
        backgroundColor: "#F8F4EF"
    }}
>
    <div className="row">

        {articles.map((article) => (

            <div
                className="col-lg-6 col-md-6 col-sm-12 mb-5"
                key={article._id}
            >

                <div
                    style={{
                        transition: "0.3s ease",
                        cursor: "pointer"
                    }}
                >

                    {/* Image */}

                    <img
                        src={article.imageUrl}
                        alt={article.name}
                        style={{
                            width: "100%",
                            height: "260px",
                            objectFit: "cover",
                            borderRadius: "18px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                        }}
                    />

                    {/* Content */}

                    <div className="mt-4">

                        {/* Small Heading */}

                        <p
                            style={{
                                color: "#A0522D",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                                fontWeight: "600",
                                fontSize: "13px",
                                marginBottom: "10px"
                            }}
                        >
                            Digital Archive
                        </p>

                        {/* Title */}

                        <h2
                            style={{
                                color: "#8B4513",
                                fontFamily: "Georgia",
                                fontSize: "40px",
                                lineHeight: "1.2",
                                fontWeight: "600"
                            }}
                        >
                            {article.name}
                        </h2>

                        {/* Description */}

                        <p
                            style={{
                                color: "#5C4033",
                                fontSize: "20px",
                                lineHeight: "1.7",
                                marginTop: "15px"
                            }}
                        >
                            {article.description}
                        </p>

                        {/* Read More */}

                        <button
                            className="btn mt-3"
                            style={{
                                backgroundColor: "#8B4513",
                                color: "white",
                                borderRadius: "30px",
                                padding: "10px 25px",
                                border: "none",
                                fontWeight: "500"
                            }}
                        >
                            Read More →
                        </button>

                    </div>

                </div>

            </div>

        ))}

    </div>
</div>

      
    </>
  )
}

export default Fort
