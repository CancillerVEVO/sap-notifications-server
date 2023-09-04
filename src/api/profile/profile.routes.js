const express = require("express");
const {
  getLandingController,
  subscribeToUserController,
  getUserNotificationsController,
  markAsReadController,
} = require("./profile.controller");
const checkJWT = require("../../middleware/session.middleware");
const {
  subscribeToUserValidator,
  markNotificationAsOpenedValidator,
} = require("./profile.validator");

const router = express.Router();

router.post("/", checkJWT, getLandingController);
router.post(
  "/subscribe",
  checkJWT,
  subscribeToUserValidator,
  subscribeToUserController
);
router.post("/notifications", checkJWT, getUserNotificationsController);
router.post(
  "/notifications/markAsOpened",
  checkJWT,
  markNotificationAsOpenedValidator,
  markAsReadController
);

module.exports = router;
