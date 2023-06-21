// Importing Mongoose library
const mongoose = require("mongoose");

require("dotenv").config();

// Function to establish a connection to the MongoDB database
const connect = async () => {
  try {
    // Connecting to the MongoDB database using the provided connection string
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.MONGODB_DB,
    });

    // Logging a success message if the connection is established
    console.log("Connected to MongoDB");

    // Returning the Mongoose connection object
    return mongoose.connection;
  } catch (err) {
    // Handling any errors that occur during the connection process
    console.error(err);
  }
};

// Exporting the connect function to be used by other parts of the application
module.exports = connect;
