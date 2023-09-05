const { successResponse } = require("../../handlers/responseHandler");
const { login } = require("./auth.handler");

const loginController = async ({ body }, res, next) => {
  try {
    const { token, userId } = await login(body);
    res.cookie("token", token);
    return successResponse(userId, "Login successful")(res);
  } catch (error) {
    next(error);
  }
};

const logOutController = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return successResponse(null, "Logout successful")(res);
  } catch (error) {
    next(error);
  }
};

const meController = async (req, res, next) => {
  try {
    return successResponse(req.user, "User data")(res);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  loginController,
  logOutController,
  meController,
};
