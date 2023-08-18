const { login } = require("./auth.handler");

const loginController = async ({ body }, res, next) => {
  try {
    const data = await login(body);
    console.log(data);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
};
