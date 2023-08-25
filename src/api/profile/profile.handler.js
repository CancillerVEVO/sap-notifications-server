const sapNotif = require("../../handlers");

const getLanding = async (userId) => {
  const data = await sapNotif.callEndpoint({
    USER_ID: userId,
    ACTION: "2",
  });

  return data;
};

module.exports = { getLanding };
