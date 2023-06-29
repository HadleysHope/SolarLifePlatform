// Importing the Express framework
const express = require("express");

// Creating a new router instance
const router = express.Router();

// Importing the controller functions from the products.controller.js file
const {
  ListProducts,
  GetProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controllers/products.controller");

// Route to list all products
router.get("/", ListProducts);

// Route to get a product by their ID
router.get("/:product_id", GetProduct);

// Route to create a new product
router.post("/", CreateProduct);

// Route to update a product
router.put("/:product_id", UpdateProduct);

// Route to delete a product
router.delete("/:product_id", DeleteProduct);

// Exporting the router instance
module.exports = router;
