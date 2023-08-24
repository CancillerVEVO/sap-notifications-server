const { successResponse } = require("../../handlers/responseHandler");

const getLandingController = async (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLandingController,
};
