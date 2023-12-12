const express = require("express");
const app = express();
const dotenv = require("dotenv");
require("dotenv").config();
var cors = require("cors");
console.log(process.env.PORT);
const port = process.env.PORT || 6000;
app.use(express.json());
const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
  exposedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
const db = require("./config/mongoose");
app.use("/", require("./routes/index"));

app.listen(port, () => console.log(`server running on ${port}`));
