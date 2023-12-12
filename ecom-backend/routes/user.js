const express = require("express");

const router = express.Router();
const usercontroller = require("../controller/user_controller");

router.post("/signup", usercontroller.signup);
router.post("/signin", usercontroller.signin);

module.exports = router;
