const express = require("express");
const User = require("../db/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "invalid username" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "invalid username or password" });
    }
    return res.status(200).json({ message: "login successfuly" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
