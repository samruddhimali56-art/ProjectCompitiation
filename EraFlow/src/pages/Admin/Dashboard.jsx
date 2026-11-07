import Sidebar from "../../components/Admin/Sidebar";

function Dashboard() {
  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <div className="d-flex">

      <Sidebar />

      <div className="container-fluid p-4">

        <h2>
          Welcome, {admin?.name} 👋
        </h2>

        <hr />

        <div className="row mt-4">

          <div className="col-md-4">

            <div className="card shadow">

              <div className="card-body text-center">

                <h5>Total Leaders</h5>

                <h2>4</h2>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow">

              <div className="card-body text-center">

                <h5>Manage Leaders</h5>

                <p>View, Add, Edit & Delete</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;