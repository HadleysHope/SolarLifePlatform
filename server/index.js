// Importing required modules and packages
const express = require("express"); // Express framework for creating the server
const cors = require("cors"); // Cross-Origin Resource Sharing middleware
const bodyParser = require("body-parser"); // Body parsing middleware
const connect = require("./db/connection"); // Custom function to establish database connection
const cookieParser = require("cookie-parser");

// Establishing database connection
(async function () {
  await connect();
})();

const users = require("./routes/user.routes"); // Importing user routes
const auth = require("./routes/auth.routes"); // Importing auth routes
const products = require("./routes/product.routes"); // Importing products routes

const app = express(); // Creating an Express application
app.use(cookieParser());
app.use(bodyParser.json()); // Parse request bodies as JSON

app.use(cors()); // Enable Cross-Origin Resource Sharing

app.use("/users", users); // Mounting the user routes on "/users" path
app.use("/auth", auth); // Mounting the authentication routes on "/auth" path
app.use("/products", products); // Mounting the authentication routes on "/products" path

// Starting the server
app.listen(process.env.PORT || 3005, () => {
  console.log("Server running ok");
});
