const jwt = require("jsonwebtoken");

const generateAccessToken = async (userId) => {
  const accessToken = jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
  });
  return accessToken;
};

const generateRefreshToken = async (userId) => {
  const refreshToken = jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME,
  });
  return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };
