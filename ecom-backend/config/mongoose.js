const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://anshulsharma:anshul%401234@cluster0.r3dqw9a.mongodb.net/ecommerce"
);
// mongoose.connect('mongodb://localhost/habit-tracker');

const db = mongoose.connection;

//if error then pritnt message
db.on("error", console.error.bind(console, "error in connectin DB"));

// server is up then run a message
db.once("open", () => {
  console.log("Succesfully !! Connected to the DataBase");
});
module.export = db;
