import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function HeritageLayout() {
  return (
    <>
      <div className="container-fluid">
      <div className="row">

        <div className="col-md-3 p-0">
          <Sidebar />
        </div>

        <div className="col-md-9 p-4">
          <Outlet />
        </div>

      </div>
    </div>
    </>
  )
}

export default HeritageLayout
