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

app.get("/user", (req, res) => {
  res.send({ name: "John", age: 30 });
});
app.post("/user", (req, res) => {
  res.send("Data received successfully!");
});
app.delete("/user", (req, res) => {
  res.send("User deleted successfully!");
});

app.patch("/user", (req, res) => {
  res.send("User updated successfully!");
});

app.put("/user", (req, res) => {
  res.send("User updated successfully with PUT method!");
});

app.listen(8888, () => {
  console.log("Server is running on port 8888");
});
