import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
     <div
  className="shadow"
  style={{
    width: "260px",
    minHeight: "100vh",
    backgroundColor: "#F8F5F0",
    borderRight: "2px solid #D4A373",
  }}
>
  {/* Sidebar Heading */}
  <div
    className="text-white text-center py-4"
    style={{
      background: "linear-gradient(135deg, #8B5E3C, #C68B59)",
    }}
  >
    <h3 className="mb-0">🏛 Heritage</h3>
  </div>

  {/* Sidebar Links */}
  <div className="list-group list-group-flush">

    <Link
      to="/heritage/fort"
      className="list-group-item list-group-item-action "
      style={{
        padding: "16px 20px",
        fontSize: "17px",
        fontWeight: "500",
        color: "#5C4033",
        backgroundColor: "#F8F5F0",
        borderBottom: "1px solid #8B5E3C",
      }}
    >
      🏰 Fort
    </Link>

    <Link
      to="/heritage/mountain"
      className="list-group-item list-group-item-action "
      style={{
        padding: "16px 20px",
        fontSize: "17px",
        fontWeight: "500",
        color: "#5C4033",
        backgroundColor: "#F8F5F0",
        borderBottom: "1px solid #8B5E3C",
      }}
    >
      ⛰️ Mountain
    </Link>

    <Link
      to="/heritage/museum"
      className="list-group-item list-group-item-action "
      style={{
        padding: "16px 20px",
        fontSize: "17px",
        fontWeight: "500",
        color: "#5C4033",
        backgroundColor: "#F8F5F0",
        borderBottom: "1px solid #8B5E3C",
      }}
    >
      🏛 Museum
    </Link>

    <Link
      to="/heritage/temple"
      className="list-group-item list-group-item-action "
      style={{
        padding: "16px 20px",
        fontSize: "17px",
        fontWeight: "500",
        color: "#5C4033",
        backgroundColor: "#F8F5F0",
        borderBottom: "1px solid #8B5E3C",
      }}
    >
      🛕 Temple
    </Link>

    <Link
      to="/heritage/unesco"
      className="list-group-item list-group-item-action border-0"
      style={{
        padding: "16px 20px",
        fontSize: "17px",
        fontWeight: "500",
        color: "#5C4033",
        backgroundColor: "#F8F5F0",
        borderBottom: "1px solid #8B5E3C",
      }}
    >
      🌍 UNESCO
    </Link>

  </div>
</div>
    </>
  )
}

export default Sidebar
