function FeaturedSection() {

    const categories = [

        {
            title: "Great Leaders",
            emoji: "👑"
        },

        {
            title: "Heritage",
            emoji: "🏛️"
        },

        {
            title: "Historic Battles",
            emoji: "⚔️"
        },

        {
            title: "Culture",
            emoji: "🎭"
        },

        {
            title: "Explore India",
            emoji: "🗺️"
        }

    ];

    return (

        <section className="featured">

            <h2>Explore Categories</h2>

            <div className="cards">

                {categories.map((item, index) => (

                    <div className="category-card" key={index}>

                        <div className="icon">
                            {item.emoji}
                        </div>

                        <h3>{item.title}</h3>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default FeaturedSection;