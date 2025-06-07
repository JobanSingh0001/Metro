import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // backend registration logic here
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }

        .register-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 420px;
          width: 100%;
          text-align: center;
        }

        .logo {
          font-size: 2rem;
          font-weight: 800;
          color: #3b82f6;
        }

        .subtitle {
          color: #6b7280;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .tab {
          flex: 1;
          padding: 0.5rem 0;
          border-radius: 10px;
          margin: 0 0.25rem;
          cursor: pointer;
          font-weight: bold;
        }

        .tab.active {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          color: #fff;
        }

        .form-group {
          margin-bottom: 1rem;
          text-align: left;
        }

        .form-group label {
          font-weight: 500;
          display: block;
          margin-bottom: 0.5rem;
        }

        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 1rem;
        }

        .submit-btn {
          width: 100%;
          margin-top: 1rem;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.75rem;
          font-size: 1rem;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .submit-btn:hover {
          opacity: 0.9;
        }

        .footer {
          font-size: 0.75rem;
          margin-top: 1.5rem;
          color: #6b7280;
        }

        .footer a {
          color: #6b7280;
          text-decoration: underline;
        }

        .background {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: radial-gradient(#c4b5fd 1px, transparent 1px),
                            radial-gradient(#c4b5fd 1px, transparent 1px);
          background-size: 30px 30px;
          background-position: 0 0, 15px 15px;
          opacity: 0.2;
          z-index: -1;
        }
      `}</style>

      <div className="background"></div>

      <div className="register-card">
        <div className="logo">MetroConnect</div>
        <p className="subtitle">Register to get shortest routes and travel times</p>

        <div className="tabs">
          <div className="tab">
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
          </div>
          <div className="tab active">Register</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Create Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a secure password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>

        <div className="footer">
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
    position: "relative",
    padding: "2rem",
  },
};

export default Register;
