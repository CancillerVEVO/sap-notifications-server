const { successResponse } = require("../../handlers/responseHandler");
const {
  getLanding,
  subscribeToUser,
  getUserNotifications,
  markAsRead,
} = require("./profile.handler");

const getLandingController = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const data = await getLanding(userId);

    return successResponse(data, "Data retrieved succesfully")(res);
  } catch (error) {
    next(error);
  }
};
const subscribeToUserController = async ({ body, user }, res, next) => {
  try {
    const { userId } = user;
    const { userTopicId } = body;

    const response = await subscribeToUser(userId, userTopicId);

    return successResponse(response, "Subscribed succesfully")(res);
  } catch (error) {
    next(error);
  }
};

const getUserNotificationsController = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const data = await getUserNotifications(userId);

    return successResponse(data, "Data retrieved succesfully")(res);
  } catch (error) {
    next(error);
  }
};

const markAsReadController = async ({ body, user }, res, next) => {
  try {
    const { userId } = user;
    const { notificationId } = body;
    const data = await markAsRead(notificationId, userId);

    return successResponse(data, "Data retrieved succesfully")(res);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLandingController,
  subscribeToUserController,
  getUserNotificationsController,
  markAsReadController,
};
