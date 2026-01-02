const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Shu",
    lastName: "R",
    emailId: "shubha@gmail.com",
    password: "shubha@123",
    age: 24,
    gender: "Female",
  };
  const user = new User(userObj);

  await user.save();
  res.send("User signed up successfully");
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(8888, () => {
      console.log("Server is running on port 8888");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
