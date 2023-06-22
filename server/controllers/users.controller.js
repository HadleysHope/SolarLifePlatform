// Importing the User model from the database
const User = require("../db/models/user");

// Controller function to list all users
const ListUsers = async (req, res) => {
  try {
    // Find all users in the database
    const users = await User.find({});
    // Return the list of users as a JSON response
    res.json(users);
  } catch (err) {
    console.error(err);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to get a user by their ID
const GetUser = async (req, res) => {
  try {
    // Extract the user_id from the request parameters
    const { user_id } = req.params;
    // Find the user with the specified ID in the database
    const user = await User.findById(user_id);
    // Return the user as a JSON response
    res.json(user);
  } catch (err) {
    console.error(err);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send("Internal Server Error");
  }
};

// Controller function to create a new user
const CreateUser = async (req, res) => {
  // Create a new User instance based on the request body data
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    // Save the new user to the database
    const result = await user.save();
    // Return the saved user as a JSON response with a status of 201 (Created)
    res.status(201).json(result);
  } catch (err) {
    // If an error occurs, return the error as a JSON response
    res.json(err);
  }
};

// Controller function to update a user
const UpdateUser = async (req, res) => {
  try {
    // Extract the user_id from the request parameters
    const { user_id } = req.params;
    // Find the user with the specified ID in the database
    const user = await User.findById(user_id);
    // Update the user's name, email, and password based on the request body data
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    // Save the updated user to the database
    const updatedUser = await user.save();
    // Return the updated user as a JSON response
    res.json(updatedUser);
  } catch (err) {
    // If an error occurs, return a JSON response with a status of 400 (Bad Request) and an error message
    res.status(400).json({ message: err.message });
  }
};

// Controller function to delete a user
const DeleteUser = async (req, res) => {
  try {
    // Extract the user_id from the request parameters
    const { user_id } = req.params;
    // Find and delete the user with the specified ID in the database
    const user = await User.findByIdAndDelete(user_id);
    // Return a JSON response with a success message
    res.json({ message: `User '${user.name}' deleted successfully` });
  } catch (err) {
    // If an error occurs, return a JSON response with a status of 500 (Internal Server Error) and an error message
    res.status(500).json({ message: err.message });
  }
};

// Exporting the controller functions as an object
module.exports = {
  ListUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
};
