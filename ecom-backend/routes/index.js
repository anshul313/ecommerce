const express = require("express");
const router = express.Router();
const user = require("./user");

router.use("/user", require("./user"));

module.exports = router;
