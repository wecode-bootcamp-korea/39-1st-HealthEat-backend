const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { validateEmail } = require("../util/validators");
const userDao = require("../models/userDao");

const signup = async (name, phone, email, password) => {
  validateEmail(email);

  const user = await userDao.getUserByEmail(email);
  if (user) {
    throw new Error("DUPLICATED_EMAIL", 400);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  return await userDao.createUser(name, phone, email, hashedPassword);
};

const signin = async (email, password) => {
  validateEmail(email);
  const user = await userDao.getUserByEmail(email);
  const is_match = await bcrypt.compare(password, user.password);
  if (!is_match) {
    throw new Error("INVALID_USER", 401);
  }

  const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  return jwtToken;
};

const getUserById = async (id) => {
  const user = await userDao.getUserById(id)
  return user
}

module.exports = { signup, signin, getUserById };