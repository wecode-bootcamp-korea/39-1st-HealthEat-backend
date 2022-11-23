const jwt = require('jsonwebtoken');
const  userService  = require('../services/userService');


const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    const error = new Error('NEED_ACCESSTOKEN');
    error.statusCode = 401;
    throw error;
  }
  const verifyToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    const user = await userService.getUserById(verifyToken.id);
  if (!user) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;
    throw error;
  }
  req.user = user;
  next();
};

module.exports = { loginRequired };