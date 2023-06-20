// Importing the User model from the database
const User = require("../db/models/user");

// Function to handle user registration
const Register = async (req, res) => {
  res.send("Register User");
};

// Function to handle user login
const Login = async (req, res) => {
  const { email, password } = req.body; // Extracting email and password from the request body
  try {
    // Finding a user with the provided email and password
    const user = await User.findOne({ email, password });
    console.log(user);
    if (!user) {
      // If no user is found, throw an error
      throw new Error("User not found");
    }

    // Sending a success response with a console log message
    // res.status(200).send(console.log("Login succesful"));
    res.status(200).send("Login succesful");
  } catch (err) {
    // Handling any errors that occur during the login process
    res.status(400).json({ message: err.message });
  }
};

// Exporting the Login function
module.exports = {
  Register,
  Login,
};
