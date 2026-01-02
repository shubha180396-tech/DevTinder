//Middlewares Examples
// const { adminAuth, userAuth } = require("./middlewares/auth");

// app.use("/admin", adminAuth);

// app.get("/admin/deleteData", (req, res) => {
//   res.send("Delete Data");
// });

// app.get("/user", userAuth, (req, res) => {
//   res.send("Get user endpoint2");
// });

// Error handling Example

// app.use("/", (err, req, res, next) => {
//   res.status(500).send("Internal Server Error");
// });

// app.get("/getData", (req, res) => {
//   try {
//     throw new Error("Something went wrong!");
//     res.send("Get Data");
//   } catch (error) {
//     res.status(500).send("Data fetch failed");
//   }
// });
