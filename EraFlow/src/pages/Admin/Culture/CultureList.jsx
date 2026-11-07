import React, { useEffect, useState } from "react";

import axios from "../../../api/axios";

import { Link } from "react-router-dom";

import "./Culture.css";


const CultureList = () => {


  const [culture, setCulture] = useState([]);

  const [loading, setLoading] = useState(true);



  // ==========================
  // GET ALL CULTURE
  // ==========================

  const getCulture = async () => {

    try {

      const { data } = await axios.get("/culture");

      setCulture(data);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };





  useEffect(() => {

    getCulture();

  }, []);





  // ==========================
  // DELETE CULTURE
  // ==========================

  const handleDelete = async (id) => {


    const confirmDelete = window.confirm(

      "Are you sure you want to delete this culture?"

    );


    if (!confirmDelete) {

      return;

    }



    try {


      await axios.delete(`/culture/${id}`);



      alert("Culture deleted successfully!");



      getCulture();


    }


    catch (error) {


      console.log(error);



      alert(

        error.response?.data?.message ||

        "Delete failed"

      );


    }


  };





  return (


    <div className="admin-page">



      <div className="admin-header">


        <h1>
          Culture Management
        </h1>



        <Link

          to="/admin/culture/add"

          className="add-btn"

        >

          + Add Culture


        </Link>



      </div>





      {


        loading ?


        (

          <h3>
            Loading...
          </h3>

        )


        :


        (


          <table className="culture-table">


            <thead>


              <tr>


                <th>
                  Image
                </th>


                <th>
                  Name
                </th>


                <th>
                  Category
                </th>


                <th>
                  Era
                </th>


                <th>
                  Region
                </th>


                <th>
                  Actions
                </th>


              </tr>


            </thead>





            <tbody>


              {


                culture.map((item) => (


                  <tr key={item._id}>


                    <td>


                      <img

                        src={item.image}

                        alt={item.name}

                        className="table-image"

                      />


                    </td>




                    <td>

                      {item.name}

                    </td>




                    <td>

                      {item.category}

                    </td>




                    <td>

                      {item.era}

                    </td>




                    <td>

                      {item.region}

                    </td>





                    <td>


                      <div className="action-buttons">



                        <Link

                          to={`/admin/culture/edit/${item._id}`}

                          className="edit-btn"

                        >

                          Edit


                        </Link>




                        <button


                          className="delete-btn"


                          onClick={() => handleDelete(item._id)}


                        >

                          Delete


                        </button>



                      </div>



                    </td>



                  </tr>


                ))


              }



            </tbody>




          </table>


        )


      }



    </div>


  );


};


export default CultureList;