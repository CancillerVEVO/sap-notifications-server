const express = require("express");

const router = express.Router();

router.use("/auth", require("./api/auth"));
router.use("/profile", require("./api/profile"));
module.exports = router;
