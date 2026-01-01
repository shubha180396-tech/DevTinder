const express = require("express");
const app = express();
// app.use(express.json());

// Sample route
// app.use("/", (req, res) => {
//   res.send("Welcome to the Home Page!");
// });

// app.use("/hello", (req, res) => {
//   res.send("   Hello, World!");
// });

// app.use("/test", (req, res) => {
//   res.send("This is a test route.");
// });

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});
app.get("/test", (req, res) => {
  res.send("This is a test route.");
});
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.listen(8888, () => {
  console.log("Server is running on port 8888");
});
