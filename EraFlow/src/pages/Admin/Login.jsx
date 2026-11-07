import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const res = await API.post("/admin/login", formData);

      // Save token
      localStorage.setItem("token", res.data.token);

      // Save admin details
      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );

      navigate("/admin/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          EraFlow Admin Login
        </h2>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;