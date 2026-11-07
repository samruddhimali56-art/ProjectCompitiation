import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import HeritageCard from "./HeritageCard";

const HeritageContent = ({ category }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHeritage();
    }, [category]);

    const fetchHeritage = async () => {
        try {
            setLoading(true);

            const response = await API.get(
                `/heritage?category=${encodeURIComponent(category)}`
            );

            setData(response.data);

        } catch (error) {
            console.error("Error fetching heritage:", error);
        } finally {
            setLoading(false);
        }
    };

    return (

        <section className="heritage-content">

            <div className="content-header">

                <span>
                    DISCOVER INDIA
                </span>

                <h1>
                    {category}
                </h1>

                <p>
                    Explore the beauty, history, architecture and
                    cultural significance of India's{" "}
                    <strong>{category.toLowerCase()}</strong>.
                    Discover remarkable places that have shaped the
                    nation's identity through centuries.
                </p>

            </div>

            {loading ? (

                <h2 style={{ textAlign: "center" }}>
                    Loading...
                </h2>

            ) : (

                <div className="heritage-cards">

                    {data.map((item) => (

                        <HeritageCard
                            key={item._id}
                            item={item}
                        />

                    ))}

                </div>

            )}

        </section>

    );
};

export default HeritageContent;