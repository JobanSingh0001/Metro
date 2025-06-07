import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import "./index.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Connecting You to the Future of Transport</h1>
          <p>Seamless Metro Services Across the City</p>
          <Link to="/metro" className="btn">
            Find Your Route
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1577726030161-508f10e256ff?q=80&w=2070&auto=format&fit=crop"
              alt="Fast Travel"
              className="card-image"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e0f7fa/333?text=Fast+Travel'; }}
            />
            <h3>Fast Travel</h3>
            <p>Experience quick and efficient travel across the city with real-time updates and optimized routing.</p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1604922532719-4d5a4eecbb4a?q=80&w=1932&auto=format&fit=crop"
              alt="Eco-Friendly Metro"
              className="card-image"
               onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e0f7fa/333?text=Eco-Friendly'; }}
            />
            <h3>Eco-Friendly</h3>
            <p>
              Our metros are energy-efficient, contributing to a greener, cleaner, and more sustainable city for everyone.
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1577285547383-2159900f7a67?q=80&w=1956&auto=format&fit=crop"
              alt="24/7 Availability"
              className="card-image"
               onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e0f7fa/333?text=24/7+Service'; }}
            />
            <h3>24/7 Availability</h3>
            <p>Enjoy round-the-clock metro services for your convenience, ensuring you can travel anytime you need.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
