// Importing the Mongoose library
const mongoose = require("mongoose");

// Defining the CategorySchema using the mongoose.Schema class
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

// Creating a CategoryModel using the CategorySchema
const CategoryModel = mongoose.model("categories", CategorySchema);

// Exporting the CategoryModel
module.exports = CategoryModel;
