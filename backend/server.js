const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/user");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes); // <--- mounts /me route

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
