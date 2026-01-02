const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/getData", (req, res) => {
  res.send("Get Data");
});

app.get("/admin/deleteData", (req, res) => {
  res.send("Delete Data");
});

app.get("/user", userAuth, (req, res) => {
  res.send("Get user endpoint2");
});

app.listen(8888, () => {
  console.log("Server is running on port 8888");
});
