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
  await mongoose.connect(`mongodb://127.0.0.1:27017/DemoForm`);
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

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is listening...");
});
