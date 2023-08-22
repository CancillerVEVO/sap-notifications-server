const { successResponse } = require("../../handlers/responseHandler");
const { login } = require("./auth.handler");

const loginController = async ({ body }, res, next) => {
  try {
    const data = await login(body);
    return successResponse(data, "Login successful")(res);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
};
