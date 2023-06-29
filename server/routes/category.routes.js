// Importing the Express framework
const express = require("express");

// Creating a new router instance
const router = express.Router();

// Importing the controller functions from the categories.controller.js file
const {
  ListCategories,
  GetCategory,
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
} = require("../controllers/categories.controller");

// Route to list all users
router.get("/", ListCategories);

// Route to get a user by their ID
router.get("/:category_id", GetCategory);

// Route to create a new user
router.post("/", CreateCategory);

// Route to update a user
router.put("/:category_id", UpdateCategory);

// Route to delete a user
router.delete("/:category_id", DeleteCategory);

// Exporting the router instance
module.exports = router;
