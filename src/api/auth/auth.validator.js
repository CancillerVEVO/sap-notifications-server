const { body } = require("express-validator");
const validationErrors = require("../../middleware/validation.middleware");

const loginValidator = [
  body("email")
    .exists()
    .withMessage("field Email is required")
    .isLength({ min: 1 })
    .withMessage("field Email cannot be empty")
    .isEmail()
    .withMessage("field Email must be a valid email address"),
  body("password")
    .exists()
    .withMessage("field Password is required")
    .isLength({ min: 1 })
    .withMessage("field Password cannot be empty"),
  validationErrors,
];

module.exports = { loginValidator };
