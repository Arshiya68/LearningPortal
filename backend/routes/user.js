const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Temporary me route (no auth yet)
router.get("/me", async (req, res) => {
  try {
    const user = await User.findOne(); // returns first user
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
