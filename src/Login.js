import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VanillaTilt from "vanilla-tilt";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "password") {
      toast.success("Login successful!", { position: "top-center" });
      setTimeout(() => navigate("/metro"), 2000);
    } else {
      toast.error("Invalid credentials!", { position: "top-center" });
    }
  };

  useEffect(() => {
    // Particles
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 60 },
            color: { value: "#8b5cf6" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#8b5cf6",
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 3 },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "grab" } },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);

    // Tilt effect
    VanillaTilt.init(cardRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }} className={darkMode ? "dark" : ""}>
      <div id="particles-js" style={styles.particles} />
      <div style={styles.wrapper}>
        <div className="login-card" ref={cardRef}>
          <div style={styles.toggleContainer}>
            <label style={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />{" "}
              Dark Mode
            </label>
          </div>

          <h1 className="logo">MetroConnect</h1>
          <p className="subtitle">Smarter Metro Navigation</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Sign In</button>
          </form>

          <div className="footer">
            New here? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>

      <ToastContainer />

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }
        .dark {
          background-color: #0f172a;
          color: #f1f5f9;
        }
        .login-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          animation: fadeInUp 0.9s ease forwards;
          transition: background 0.4s ease, color 0.4s ease;
        }
        .dark .login-card {
          background: rgba(30, 41, 59, 0.95);
          color: #f1f5f9;
        }
        .logo {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .subtitle {
          text-align: center;
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
        }
        .dark .subtitle {
          color: #cbd5e1;
        }
        .form-group {
          margin-bottom: 1.2rem;
        }
        .form-group label {
          font-weight: 600;
          display: block;
          margin-bottom: 0.4rem;
        }
        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          transition: all 0.3s ease;
        }
        .form-control:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
        }
        .dark .form-control {
          background: #1e293b;
          color: #f1f5f9;
          border: 1px solid #334155;
        }
        .submit-btn {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          color: white;
          font-weight: bold;
          font-size: 1rem;
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .submit-btn:hover {
          transform: scale(1.04);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        }
        .footer {
          text-align: center;
          margin-top: 1rem;
          font-size: 0.9rem;
        }
        .footer a {
          color: #8b5cf6;
          text-decoration: underline;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    position: "relative",
    zIndex: 1,
  },
  particles: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  toggleContainer: {
    textAlign: "right",
    marginBottom: "0.5rem",
  },
  toggleLabel: {
    fontSize: "0.9rem",
    cursor: "pointer",
  },
};

export default Login;
