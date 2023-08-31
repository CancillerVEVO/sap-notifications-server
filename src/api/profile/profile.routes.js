const express = require("express");
const { getLandingController } = require("./profile.controller");
const checkJWT = require("../../middleware/session.middleware");

const router = express.Router();

router.post("/", checkJWT, getLandingController);

module.exports = router;
