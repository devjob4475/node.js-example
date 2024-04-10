const express = require("express");
const app = express();
const User = require("./models/User");

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const { email, firstname, lastname } = req.body;
    const newUser = await User.create({ email, firstname, lastname });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user." });
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
