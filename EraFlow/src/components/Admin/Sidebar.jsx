import { Link, useNavigate } from "react-router-dom";


function Sidebar() {


  const navigate = useNavigate();



  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("admin");

    navigate("/admin/login");

  };



  return (


    <div

      className="bg-dark text-white p-3"

      style={{

        width:"250px",

        minHeight:"100vh",

      }}

    >


      <h3 className="text-center mb-4">

        EraFlow Admin

      </h3>




      <ul className="nav flex-column">



        {/* Dashboard */}

        <li className="nav-item mb-3">


          <Link

            to="/admin/dashboard"

            className="nav-link text-white"

          >


            <i className="bi bi-speedometer2 me-2"></i>

            Dashboard


          </Link>


        </li>





        {/* Leaders */}

        <li className="nav-item mb-3">


          <Link

            to="/admin/leaders"

            className="nav-link text-white"

          >


            <i className="bi bi-people-fill me-2"></i>

            Leaders


          </Link>


        </li>






        {/* Culture */}

        <li className="nav-item mb-3">


          <Link

            to="/admin/culture"

            className="nav-link text-white"

          >


            <i className="bi bi-bank me-2"></i>

            Culture


          </Link>


        </li>





        {/* Logout */}

        <li className="nav-item mt-5">


          <button

            onClick={handleLogout}

            className="btn btn-danger w-100"

          >


            <i className="bi bi-box-arrow-right me-2"></i>

            Logout


          </button>


        </li>



      </ul>



    </div>


  );

}


export default Sidebar;