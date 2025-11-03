import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Techmlogo from "../images/Techmlogo.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic
      alert("✅ Login successful!");
      navigate("/dashboard");
    } else {
      // Signup logic
      alert("✅ Registration successful! Please login.");
      setIsLogin(true); // Switch back to login form instead of redirecting
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-lg">
        <div className="container-fluid px-4 px-lg-5">
          {/* Logo */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center text-decoration-none"
          >
            <img
              src={Techmlogo}
              alt="Tech Mahindra"
              style={{ width: "160px", marginRight: "10px" }}
            />
            <span className="fw-bold text-danger">🛠 IT Helpdesk</span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link to="/about" className="nav-link text-danger fw-semibold">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-danger fw-semibold">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-danger fw-semibold">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login/Register Form Section */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "120vh",
          background: "linear-gradient(135deg, #b71c1c, #4a0000, #43ffefff)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 8s ease infinite",
          paddingTop: "80px", // to prevent navbar overlap
        }}
      >
        <div
          className="card shadow-lg border-0"
          style={{
            width: "900px",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Left Branding */}
          <div
            className="d-none d-md-flex flex-column justify-content-center align-items-center text-light p-4"
            style={{
              flex: 1,
              background:
                "linear-gradient(135deg, #b71c1c, #4a0000, #43ffefff)",
              textAlign: "center",
            }}
          >
            <img
              src={Techmlogo}
              alt="Tech Mahindra"
              style={{ width: "160px", marginBottom: "20px" }}
            />
            <h3 className="fw-bold">Tech Mahindra Helpdesk</h3>
            <p className="px-4 text-center">
              Your IT companion for smart ticketing, approvals, and real-time
              support.
            </p>
          </div>

          {/* Right Form */}
          <div
            className="p-5 d-flex flex-column justify-content-center bg-white"
            style={{ flex: 1.2 }}
          >
            <h3
              className="text-center fw-bold mb-4"
              style={{ color: "#b71c1c" }}
            >
              {isLogin ? "Admin Sign In to Helpdesk" : "Create Your Account"}
            </h3>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label fw-semibold text-danger">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control rounded-3"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label fw-semibold text-danger">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-3"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold text-danger">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control rounded-3"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {!isLogin && (
                <div className="mb-3">
                  <label className="form-label fw-semibold text-danger">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control rounded-3"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="btn btn-danger w-100 py-2 fw-semibold rounded-3"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <p className="text-center mt-4 mb-0 text-muted">
              {isLogin ? "Don’t have an account?" : "Already registered?"}{" "}
              <button
                type="button"
                className="btn btn-link text-danger fw-bold p-0"
                style={{ textDecoration: "none" }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Create one" : "Login"}
              </button>
            </p>
          </div>
        </div>

        {/* Inline Styles */}
        <style jsx="true">{`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          input:focus {
            border-color: #b71c1c !important;
            box-shadow: 0 0 0 0.2rem rgba(183, 28, 28, 0.2);
          }

          .btn-danger:hover {
            background-color: #900000 !important;
            transition: 0.3s;
          }
        `}</style>
      </div>
    </>
  );
};

export default Login;
