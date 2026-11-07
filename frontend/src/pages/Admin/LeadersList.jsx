import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";
import Sidebar from "../../components/Admin/Sidebar";

function LeadersList() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetchLeaders();
  }, []);

  // Fetch all leaders
  const fetchLeaders = async () => {
    try {
      const res = await API.get("/leaders");
      setLeaders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete leader
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this leader?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/leaders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Leader deleted successfully!");

      fetchLeaders();
    } catch (error) {
      console.log(error);
      alert("Delete failed!");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container-fluid p-4">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">🏛️ Leaders Management</h2>

          <Link
            to="/admin/add-leader"
            className="btn btn-primary"
          >
            + Add New Leader
          </Link>
        </div>

        {/* Table */}
        <div className="table-responsive">

          <table className="table table-bordered table-hover align-middle shadow">

            <thead className="table-dark">

              <tr>
                <th style={{ width: "60px" }}>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Empire</th>
                <th>Dynasty</th>
                <th style={{ width: "180px" }}>Actions</th>
              </tr>

            </thead>

            <tbody>

              {leaders.length === 0 ? (

                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-5 text-muted"
                  >
                    No leaders found.
                  </td>
                </tr>

              ) : (

                leaders.map((leader, index) => (

                  <tr key={leader._id}>

                    <td>{index + 1}</td>

                    <td>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        width="70"
                        height="70"
                        className="rounded shadow-sm"
                        style={{
                          objectFit: "cover",
                          border: "2px solid #dee2e6",
                        }}
                      />
                    </td>

                    <td className="fw-semibold">
                      {leader.name}
                    </td>

                    <td>{leader.category}</td>

                    <td>{leader.empire}</td>

                    <td>{leader.dynasty}</td>

                    <td>

                      <Link
                        to={`/admin/edit-leader/${leader._id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                        ✏️ Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(leader._id)}
                      >
                        🗑️ Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default LeadersList;