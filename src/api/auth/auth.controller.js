const { login } = require("./auth.handler");

const loginController = async ({ body }, res, next) => {
  try {
    const data = await login(body);
    res.send(data);
    console.log(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
};
