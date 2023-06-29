// Importing the User model from the database
const Category = require("../db/models/Categories");

// Controller function to list all categories
const ListCategories = async (req, res) => {
  try {
    // Find all categories in the database
    const category = await Category.find({});
    // Return the list of users as a JSON response
    res.json(category);
  } catch (err) {
    console.error(err);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to get a user by their ID
const GetCategory = async (req, res) => {
  try {
    // Extract the category_id from the request parameters
    const { category_id } = req.params;
    // Find the category with the specified ID in the database
    const category = await Category.findById(category_id);
    // Return the user as a JSON response
    res.json(category);
  } catch (err) {
    console.error(err);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to create a new category
const CreateCategory = async (req, res) => {
  // Create a new category instance based on the request body data
  const category = new Category({
    name: req.body.name,
  });
  try {
    // Save the new category to the database
    const result = await category.save();
    // Return the saved category as a JSON response with a status of 201 (Created)
    res.status(201).json(result);
  } catch (err) {
    // If an error occurs, return the error as a JSON response
    res.json(err);
  }
};

// Controller function to update a category
const UpdateCategory = async (req, res) => {
  try {
    // Extract the category_id from the request parameters
    const { category_id } = req.params;
    // Find the category with the specified ID in the database
    const category = await Category.findById(category_id);
    // Update the category name based on the request body data
    category.name = req.body.name;
    // Save the updated category to the database
    const updateCategory = await category.save();
    // Return the updated category as a JSON response
    res.json(updateCategory);
  } catch (err) {
    // If an error occurs, return a JSON response with a status of 400 (Bad Request) and an error message
    res.status(400).json({ message: err.message });
  }
};

// Controller function to delete a category
const DeleteCategory = async (req, res) => {
  try {
    // Extract the category_id from the request parameters
    const { category_id } = req.params;
    // Find and delete the category with the specified ID in the database
    const category = await Category.findByIdAndDelete(category_id);
    // Return a JSON response with a success message
    res.json({ message: `Category '${category.name}' deleted successfully` });
  } catch (err) {
    // If an error occurs, return a JSON response with a status of 500 (Internal Server Error) and an error message
    res.status(500).json({ message: err.message });
  }
};

// Exporting the controller functions as an object
module.exports = {
  ListCategories,
  GetCategory,
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
};
