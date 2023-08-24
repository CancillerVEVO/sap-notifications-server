const express = require("express");
const { getLandingController } = require("./profile.controller");

const router = express.Router();

router.get("/", getLandingController);

module.exports = router;
