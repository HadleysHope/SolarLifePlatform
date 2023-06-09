// Importing the Mongoose library
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  },
  type: {
    type: String,
    require: true,
  },
});

//Encrypt password before saving to DB
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

// Creating a UserModel using the UserSchema
const UserModel = mongoose.model("users", UserSchema);

// Exporting the UserModel
module.exports = UserModel;
