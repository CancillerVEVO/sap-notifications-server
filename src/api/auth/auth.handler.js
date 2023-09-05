const sapNotif = require("../../handlers");
const { generateToken } = require("../../utils/jsonwebtoken");

const login = async ({ email, password }) => {
  const data = await sapNotif.callEndpoint({
    EMAIL: email,
    PASSWORD: password,
    ACTION: "1",
  });

  const { userId } = data;

  const token = generateToken(data);

  return {
    token,
    userId,
  };
};

module.exports = { login };
