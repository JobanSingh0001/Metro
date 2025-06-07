import React from "react";
import MetroFinder from "./MetroFinder";
import { Link } from "react-router-dom";

const Metro = () => {
  const handleLogout = () => {
    // localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={containerStyle}>
      {/* Embedded CSS for animations and responsive design */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media screen and (max-width: 768px) {
          .nav-list {
            flex-direction: column;
            gap: 10px;
          }
          .quick-links-grid {
            grid-template-columns: 1fr;
          }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-in-out forwards;
        }

        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Header */}
      <header style={headerStyle}>
        <div style={logoStyle}>MetroConnect</div>
        <nav style={navStyle}>
          <ul style={navListStyle} className="nav-list">
            <li style={navItemStyle}><Link to="/" style={navLinkStyle}>Home</Link></li>
            <li style={navItemStyle}><Link to="/about" style={navLinkStyle}>About</Link></li>
            <li style={navItemStyle}><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
            <li style={navItemStyle}><Link to="/login" style={navLinkStyle}>Login</Link></li>
            <li style={navItemStyle}><Link to="/register" style={navLinkStyle}>Register</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main style={mainContentStyle} className="fade-in">
        <section style={welcomeStyle}>
          <h2 style={{ fontSize: "28px", color: "#1f2937" }}>Welcome to MetroConnect</h2>
          <p style={{ color: "#4b5563", fontSize: "16px" }}>
            Your ultimate guide to navigate metro stations and find the shortest routes!
          </p>
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        </section>

        {/* MetroFinder Component */}
        <section style={metroFinderWrapperStyle}>
          <MetroFinder />
        </section>

        {/* Quick Links Section */}
        <section style={quickLinksStyle}>
          <h3 style={{ fontSize: "24px", marginBottom: "10px", color: "#1e40af" }}>Quick Links</h3>
          <div className="quick-links-grid" style={quickLinksGridStyle}>
            <div className="hover-scale" style={quickLinkCardStyle}>
              <Link to="/routes" style={quickLinkCardLinkStyle}>Metro Routes</Link>
            </div>
            <div className="hover-scale" style={quickLinkCardStyle}>
              <Link to="/stations" style={quickLinkCardLinkStyle}>Stations</Link>
            </div>
            <div className="hover-scale" style={quickLinkCardStyle}>
              <Link to="/tickets" style={quickLinkCardLinkStyle}>Buy Tickets</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Styles
const containerStyle = {
  fontFamily: "'Segoe UI', sans-serif",
  minHeight: "100vh",
  backgroundColor: "#f0f4f8",
};

const headerStyle = {
  backgroundColor: "#1f2937",
  padding: "20px",
  color: "#ffffff",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

const logoStyle = {
  fontSize: "32px",
  fontWeight: "700",
};

const navStyle = {
  marginTop: "10px",
};

const navListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",
};

const navItemStyle = {};

const navLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
};

const mainContentStyle = {
  padding: "40px 20px",
  textAlign: "center",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  margin: "30px auto",
  maxWidth: "1000px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
};

const welcomeStyle = {
  marginBottom: "40px",
};

const buttonStyle = {
  backgroundColor: "#ef4444",
  color: "white",
  padding: "12px 24px",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "15px",
};

const metroFinderWrapperStyle = {
  margin: "40px 0",
};

const quickLinksStyle = {
  marginTop: "50px",
};

const quickLinksGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const quickLinkCardStyle = {
  backgroundColor: "#3b82f6",
  color: "#ffffff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
  transition: "transform 0.3s",
};

const quickLinkCardLinkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "600",
};

export default Metro;
