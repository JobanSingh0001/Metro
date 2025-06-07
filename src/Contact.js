import React, { useState, useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const cardRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(cardRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: {
            color: { value: darkMode ? "#0f172a" : "#f9fafb" },
          },
          particles: {
            number: { value: 60 },
            color: { value: "#8b5cf6" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            links: {
              enable: true,
              distance: 150,
              color: "#8b5cf6",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div
        className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div
          ref={cardRef}
          className={`w-full max-w-lg p-8 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-70 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm px-3 py-1 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            We'd love to hear from you! Send us your thoughts or feedback.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" theme={darkMode ? "dark" : "light"} />
    </div>
  );
};

export default Contact;
