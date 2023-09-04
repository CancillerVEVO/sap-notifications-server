const { body } = require("express-validator");
const validationErrors = require("../../middleware/validation.middleware");

const subscribeToUserValidator = [
  body("userTopicId")
    .isLength({ min: 1 })
    .withMessage("field userTopicId cannot be empty"),
  validationErrors,
];

const markNotificationAsOpenedValidator = [
  body("notificationId")
    .isLength({ min: 1 })
    .withMessage("field notificationId cannot be empty"),
  validationErrors,
];
module.exports = {
  subscribeToUserValidator,
  markNotificationAsOpenedValidator,
};
