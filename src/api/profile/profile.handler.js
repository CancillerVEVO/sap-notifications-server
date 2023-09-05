const sapNotif = require("../../handlers");

const getLanding = async (userId) => {
  const data = await sapNotif.callEndpoint({
    USER_ID: userId,
    ACTION: "2",
  });

  const cleanData = {
    posts: data.posts,
    subscriptions: data.subscriptions,
    notifications: data.notifications.map((notif) => {
      return {
        ...notif,
        isOpened: notif.isOpened === "X" ? true : false,
      };
    }),
  };

  return cleanData;
};

const subscribeToUser = async (userId, userTopicId) => {
  const data = await sapNotif.callEndpoint({
    USER_ID: userId,
    USER_TOPIC_ID: userTopicId,
    ACTION: "3",
  });

  return data;
};

const getUserNotifications = async (userId) => {
  const data = await sapNotif.callEndpoint({
    USER_ID: userId,
    ACTION: "4",
  });

  const cleanData = {
    notifications: data.notifications.map((notif) => {
      return {
        ...notif,
        isOpened: notif.isOpened === "X" ? true : false,
      };
    }),
  };
  return cleanData;
};
const markAsRead = async (notificationId, userId) => {
  await sapNotif.callEndpoint({
    NOTIF_ID: notificationId,
    ACTION: "5",
  });

  const response = await getUserNotifications(userId);

  return response;
};
module.exports = {
  getLanding,
  subscribeToUser,
  getUserNotifications,
  markAsRead,
};
