import { Link } from "react-router-dom";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-content">

                <h1>
                    Journey Through
                    <span> India's Rich History</span>
                </h1>

                <p>
                    Explore legendary leaders, magnificent heritage,
                    historic battles and vibrant culture all in one place.
                </p>

                <div className="hero-buttons">

                    <Link to="/leaders" className="btn-primary">
                        Explore Leaders
                    </Link>

                    <Link to="/heritage" className="btn-secondary">
                        Explore Heritage
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default Hero;