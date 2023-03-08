const jwt = require("jsonwebtoken");
const userService = require("../services/userService");
const { Errors } = require("./errors");
const { generateAccessToken } = require("./token");

const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization;
  const refreshToken = req.headers.refresh_token;

  if (!accessToken) {
    throw new Errors("NEED_ACCESSTOKEN", 401);
  }

  try {
    const decodedAccessToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    req.id = decodedAccessToken.id;
    next();
  } catch (err) {
    //catch를 사용해 accessToken의 에러여부를 진단
    // accessToken이 만료된 상황 -> refresh 토큰이 있는지 파악, 있으면 verify를 통해 access token 재발행,
    if (err.name === "TokenExpiredError") {
      try {
        const decodedRefreshToken = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY);
        if (Date.now() >= decodedRefreshToken.exp * 1000) {
          throw new Errors("RE_LOGIN_REQUIRED", 401);
        }
        const user = await userService.getUserById(decodedRefreshToken.id);
        const newAccessToken = generateAccessToken(user.id);
        req.id = user.id;
        // 새로 발급된 access token은 response의 headers에 담아서 보낸다.
        res.set("Authorization", newAccessToken);
        next();
      } catch (err) {
        throw new Errors("JWT_REFRESH_ERROR", 401);
      }
    }
    //access token의 signature의 인증이 실패한 상황
    else if (err.message === "invalid signature") {
      throw new Errors("CHECK_ACCESS_TOKEN_SECRET_KEY");
    } else {
      throw new Errors("JWT_ACCESS_ERROR");
    }
  }
};

module.exports = { loginRequired };
