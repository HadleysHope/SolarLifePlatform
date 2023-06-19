// Importing the Express framework
const express = require("express");

// Creating a new router instance
const router = express.Router();

// Importing the controller functions from the users.controller.js file
const {
  ListUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controller");

// Route to list all users
router.get("/", ListUsers);

// Route to get a user by their ID
router.get("/:user_id", GetUser);

// Route to create a new user
router.post("/", CreateUser);

// Route to update a user
router.put("/:user_id", UpdateUser);

// Route to delete a user
router.delete("/:user_id", DeleteUser);

// Exporting the router instance
module.exports = router;
