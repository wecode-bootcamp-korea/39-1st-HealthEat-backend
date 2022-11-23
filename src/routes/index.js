const express = require("express");

const router = express.Router();
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const likeRouter = require("./likeRouter");

router.use("/users", userRouter);
router.use("/likes", likeRouter);
router.use("/products", productRouter);

module.exports = { router };