const adminAuth = (req, res, next) => {
  const token = "abc";
  if (token === "abc") {
    console.log("Admin authenticated");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz";
  if (token === "xyz") {
    console.log("User authenticated");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = { adminAuth, userAuth };
