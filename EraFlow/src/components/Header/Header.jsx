import { NavLink } from "react-router-dom";
import "./Header.css";


function Header() {


  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">


      <div className="container">


        {/* Logo */}

        <NavLink 
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >

          <span className="logo-icon">
            🏛️
          </span>

          <span className="logo-text">
            EraFlow
          </span>

        </NavLink>





        {/* Mobile Button */}

        <button

          className="navbar-toggler"

          type="button"

          data-bs-toggle="collapse"

          data-bs-target="#navbarMenu"

        >

          <span className="navbar-toggler-icon"></span>

        </button>







        {/* Menu */}

        <div 
          className="collapse navbar-collapse"
          id="navbarMenu"
        >



          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


            <li className="nav-item">

              <NavLink
                to="/"
                className="nav-link"
              >

                Home

              </NavLink>

            </li>





            <li className="nav-item">

              <NavLink
                to="/leaders"
                className="nav-link"
              >

                Leaders

              </NavLink>

            </li>





            <li className="nav-item">

              <NavLink
                to="/heritage"
                className="nav-link"
              >

                Heritage

              </NavLink>

            </li>





            <li className="nav-item">

              <NavLink
                to="/battles"
                className="nav-link"
              >

                Battles

              </NavLink>

            </li>





            <li className="nav-item">

              <NavLink
                to="/explore"
                className="nav-link"
              >

                Explore

              </NavLink>

            </li>





            <li className="nav-item">

              <NavLink
                to="/culture"
                className="nav-link"
              >

                Culture

              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                to="/game"
                className="nav-link"
              >

                Game

              </NavLink>

            </li>





            <li className="nav-item">

              <NavLink
                to="/chatbot"
                className="nav-link"
              >

                AI Chat

              </NavLink>

            </li>


          </ul>






          




        </div>


      </div>


    </nav>

  );

}


export default Header;