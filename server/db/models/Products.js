// Importing the Mongoose library
const mongoose = require("mongoose");

// Defining the UserSchema using the mongoose.Schema class
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  dimensions: {
    type: String,
  },
  wattage: {
    type: Number,
  },
  efficiencyPercentage: {
    type: Number,
  },
  warranty: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  price: {
    type: Number,
    require: true,
  },
  currentStock: {
    type: Number,
    require: true,
  },
  minimunStock: {
    type: Number,
    require: true,
  },
  serialNumber: {
    type: String,
  },
  category_id: {
    type: String,
    require: true,
  },
});

// Creating a UserModel using the UserSchema
const ProductModel = mongoose.model("products", ProductSchema);

// Exporting the UserModel
module.exports = ProductModel;
