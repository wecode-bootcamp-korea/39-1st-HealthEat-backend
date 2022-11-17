const userService = require("../services/userService");

const signup = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !password || !email) {
      throw new Error("KEY_ERROR");
    }
    const insertId = await userService.signup(name, phone, email, password);
    return res.status(201).json(insertId.insertId);
  } catch (err) {
    res.status(err.statusCode || 400).json({ error: err.message });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const accessToken = await userService.signin(email, password);
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

module.exports = { signup, signin };
