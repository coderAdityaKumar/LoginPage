const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const port = 3000;
main().catch((err) => console.log(err));


async function main() {
  await mongoose.connect(`mongodb+srv://aditya:341025@cluster0.lqk62gs.mongodb.net/loginpage`);
  console.log("DB connected.");
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  password: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

app.use(bodyParser.json());
app.post("/demo", async (req, res) => {
  let newUser = new user();
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  console.log("this runs");
  await newUser.save();
});



app.listen(port, () => {
  console.log("Server is listening...");
});
