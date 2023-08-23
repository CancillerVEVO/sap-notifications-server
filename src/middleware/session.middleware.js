const { verifyToken } = require("../utils/jsonwebtoken");

const checkJWT = async (req, _, next) => {
  try {
    const token = req.cookies.token;

    const payload = verifyToken(token);

    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkJWT;
