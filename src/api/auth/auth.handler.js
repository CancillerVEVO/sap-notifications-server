const sapNotif = require("../../handlers");

const login = async ({ email, password }) => {
  const data = await sapNotif.callEndpoint({
    EMAIL: email,
    PASSWORD: password,
    ACTION: "1",
  });

  console.log(data);

  return data;
};

module.exports = { login };
