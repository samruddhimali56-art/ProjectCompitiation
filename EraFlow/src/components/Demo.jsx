import React from 'react'

function Demo() {
  return (
    <div>
      

     <div className="container mt-5">

    <div className="row">

        {articles.map((article) => (

            <div
                className="col-lg-6 col-md-6 col-sm-12 mb-5"
                key={article._id}
            >

                {/* Rectangle Image */}

                <img

                    src={article.imageUrl}

                    alt={article.name}

                    style={{

                        width: "100%",

                        height: "250px",

                        objectFit: "cover",

                        borderRadius: "15px"

                    }}

                />

                {/* Heading */}

                <h2

                    style={{

                        marginTop: "18px",

                        fontSize: "34px",

                        fontFamily: "Georgia",

                        fontWeight: "500",

                        lineHeight: "1.2"

                    }}

                >

                    {article.name}

                </h2>

                {/* Description */}

                <p

                    style={{

                        fontSize: "22px",

                        color: "#555",

                        lineHeight: "1.5"

                    }}

                >

                    {article.description}

                </p>

            </div>

        ))}

    </div>

</div>


    </div>
  )
}

export default Demo
