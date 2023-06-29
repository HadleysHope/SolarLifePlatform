// Importing the Products model from the database
const Products = require("../db/models/Products");

// Controller function to list all products
const ListProducts = async (req, res) => {
  try {
    // Find all products in the database
    const products = await Products.find({});
    // Return the list of products as a JSON response
    res.json(products);
  } catch (err) {
    console.error(err);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to get a product by their ID
const GetProduct = async (req, res) => {
  try {
    // Extract the product_id from the request parameters
    const { product_id } = req.params;
    // Find the product with the specified ID in the database
    const product = await Products.findById(product_id);
    // Return the product as a JSON response
    res.json(product);
  } catch (err) {
    console.error(err);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to create a new product
const CreateProduct = async (req, res) => {
  // Create a new Product instance based on the request body data
  const product = new Products({
    name: req.body.name,
    dimensions: req.body.dimensions,
    wattage: req.body.wattage,
    efficiencyPercentage: req.body.efficiencyPercentage,
    warranty: req.body.warranty,
    weight: req.body.weight,
    price: req.body.price,
    currentStock: req.body.currentStock,
    minimunStock: req.body.minimunStock,
    serialNumber: req.body.serialNumber,
    category_id: req.body.category_id,
  });
  try {
    // Save the new product to the database
    const result = await product.save();
    // Return the saved product as a JSON response with a status of 201 (Created)
    res.status(201).json(result);
  } catch (err) {
    // If an error occurs, return the error as a JSON response
    res.json(err);
  }
};

// Controller function to update a product
const UpdateProduct = async (req, res) => {
  try {
    // Extract the product_id from the request parameters
    const { product_id } = req.params;
    // Find the user with the specified ID in the database
    const product = await Products.findById(product_id);
    // Update the propduct's based on the request body data
    product.name = req.body.name;
    product.dimensions = req.body.dimensions;
    product.wattage = req.body.wattage;
    product.efficiencyPercentage = req.body.efficiencyPercentage;
    product.warranty = req.body.warranty;
    product.weight = req.body.weight;
    product.price = req.body.price;
    product.currentStock = req.body.currentStock;
    product.minimunStock = req.body.minimunStock;
    product.serialNumber = req.body.serialNumber;
    product.category_id = req.body.category_id;
    // Save the updated product to the database
    const updatedProduct = await product.save();
    // Return the updated product as a JSON response
    res.json(updatedProduct);
  } catch (err) {
    // If an error occurs, return a JSON response with a status of 400 (Bad Request) and an error message
    res.status(400).json({ message: err.message });
  }
};

// Controller function to delete a product
const DeleteProduct = async (req, res) => {
  try {
    // Extract the product_id from the request parameters
    const { product_id } = req.params;
    // Find and delete the product with the specified ID in the database
    const product = await Products.findByIdAndDelete(product_id);
    // Return a JSON response with a success message
    res.json({ message: `Product '${product.name}' deleted successfully` });
  } catch (err) {
    // If an error occurs, return a JSON response with a status of 500 (Internal Server Error) and an error message
    res.status(500).json({ message: err.message });
  }
};

// Exporting the controller functions as an object
module.exports = {
  ListProducts,
  GetProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
};
