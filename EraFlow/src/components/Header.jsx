import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="100" height="50" className="me-4" />
        </Link> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link to="/home" className="nav-link" style={{ color: "#A67B5B" }}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/demo" className="nav-link" style={{ color: "#A67B5B" }}>
                Demo
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/heritage" className="nav-link" style={{ color: "#A67B5B" }}>
                Heritage
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/chatbot" className="nav-link" style={{ color: "#A67B5B" }}>
                Chatbot
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/journey" className="nav-link" style={{ color: "#A67B5B" }}>
                Explore
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/game" className="nav-link" style={{ color: "#A67B5B" }}>
                Game
              </Link>
            </li>

             <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: "#A67B5B" }}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: "#A67B5B" }}>
                Contact
              </Link>
            </li>
            </ul>

         

        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
