const sapNotif = require("../../handlers");

const login = async ({ email, password }) => {
  const data = await sapNotif.callEndpoint({
    EMAIL: email,
    PASSWORD: password,
    ACTION: "1",
  });

  return data;
};

module.exports = { login };
