import Sidebar from "../../components/Admin/Sidebar";
import LeaderForm from "../../components/Admin/LeaderForm";

function EditLeader() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="container-fluid p-4">

        <div className="card shadow">

          <div className="card-body">

            <h2 className="mb-4">
              Edit Leader
            </h2>

            <LeaderForm mode="edit" />

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditLeader;