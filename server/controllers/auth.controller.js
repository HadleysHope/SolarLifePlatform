// Importing the User model from the database
const User = require("../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Function to handle user registration
const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body; // Extracting email and password from the request body

    //User input validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Plese make sure to fill required fields");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters");
    }

    // Check if user email already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("Email has already been registered");
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
    });

    // Generate Token
    const token = generateToken(user._id);

    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });

    if (user) {
      const { _id, name, email } = user;
      res.status(201).json({
        _id,
        name,
        email,
        token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }

    // res.status(200).send("Registration succesful");
  } catch (err) {
    // Handling any errors that occur during the registration process
    res.status(400).json({ message: err.message });
  }
};

// Function to handle user login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

  // Validate Request
  if (!email || !password) {
    return res.status(400).json({ message: "Please provide email and password" });
  }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // User exists, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!passwordIsCorrect) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Password is correct, generate token
    const token = generateToken(user._id);

    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });

    const { _id, name,  } = user;
    res.status(200).json({
      _id,
      name,
      email,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred. Please try again later." });
  }
};

// Exporting the Login function
module.exports = {
  Register,
  Login,
};
