const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const likeRouter = require("./likeRouter");

router.use("/users", userRouter);
router.use("/likes", likeRouter);

module.exports = { router };