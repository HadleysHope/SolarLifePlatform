// Importing the required modules and packages

const express = require("express"); // Express framework for creating the server
const { Login, Register } = require("../controllers/auth.controller"); // Importing the Login controller function

const router = express.Router(); // Creating a new router instance

// Register route
router.post("/register", Register);

// Login route
router.post("/login", Login);

// Exporting the router instance
module.exports = router;
