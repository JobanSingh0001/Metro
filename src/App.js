import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from "./Login"; // Assuming you have Login.js
import Register from "./Register"; // Assuming you have Register.js
import Metro from "./Metro";
import Home from "./Home";
import "./index.css"; // Import the master stylesheet

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            MetroConnect
          </NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/metro" activeClassName="active">Find Route</NavLink></li>
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
        </ul>
      </nav>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/metro" element={<Metro />} />
        </Routes>
      </main>


      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} MetroConnect. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
