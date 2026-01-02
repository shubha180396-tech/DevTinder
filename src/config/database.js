const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shubha180396_db_user:r1BA3djl5Vs0WuBo@nodejs.nmcuq9n.mongodb.net/devTinder"
  );
};
module.exports = connectDB;

//If connection  fails to connnect, then login to "https://cloud.mongodb.com/v2/6954cb95269f7b5b7415f71d#/overview" and go to Database Access and add your IP address to the IP Whitelist.
