// Importing the Mongoose library
const mongoose = require("mongoose");

// Defining the UserSchema using the mongoose.Schema class
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    // minLength: [6, "Password minimun lenght allowed is 6 characteres"],
    // maxLenght: [30, "Password maximun lenght allowed is 30 characteres"],
  },
});

// Creating a UserModel using the UserSchema
const UserModel = mongoose.model("users", UserSchema);

// Exporting the UserModel
module.exports = UserModel;
