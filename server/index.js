const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

mongoose.connect(
  "mongodb+srv://admin:V8XKuUPStP1kwCCB@cluster0.0fw2zbr.mongodb.net/solarLifeDB?retryWrites=true&w=majority"
);

app.get("/getUsers", async (req, res) => {
  try {
    const result = await UserModel.find({ name: "admin" });
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

app.listen(3001, () => {
  console.log("Server running ok");
});
