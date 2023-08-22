const express = require("express");
const { loginValidator } = require("./auth.validator");
const { loginController } = require("./auth.controller");

const router = express.Router();

router.post("/login", loginValidator, loginController);

module.exports = router;
