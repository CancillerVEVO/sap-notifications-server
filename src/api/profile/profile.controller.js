const { successResponse } = require("../../handlers/responseHandler");
const { getLanding } = require("./profile.handler");

const getLandingController = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const data = await getLanding(userId);

    return successResponse(data, "Data retrieved succesfully")(res);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLandingController,
};
