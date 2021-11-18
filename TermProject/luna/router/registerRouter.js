const express = require("express");
const registerCtrl = require("../controller/registerCtrl");
const router = express.Router();

router.post("/register.do", registerCtrl.register);

module.exports = router;