const express = require("express");
const { loginValidator } = require("./auth.validator");
const {
  loginController,
  logOutController,
  meController,
} = require("./auth.controller");
const checkJWT = require("../../middleware/session.middleware");

const router = express.Router();

router.post("/login", loginValidator, loginController);
router.post("/logout", logOutController);
router.get("/me", checkJWT, meController);

module.exports = router;
