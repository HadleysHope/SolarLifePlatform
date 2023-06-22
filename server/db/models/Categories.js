// Importing the Mongoose library
const mongoose = require("mongoose");

// Defining the UserSchema using the mongoose.Schema class
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

// Creating a UserModel using the UserSchema
const CategoryModel = mongoose.model("categories", CategorySchema);

// Exporting the UserModel
module.exports = CategoryModel;
