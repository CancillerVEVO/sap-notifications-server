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

module.exports = { getLanding };
