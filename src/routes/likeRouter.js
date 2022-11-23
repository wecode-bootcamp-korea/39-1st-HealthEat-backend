const express = require("express");
const router = express.Router();
const { loginRequired } = require("../util/auth")

const likeController = require("../controllers/likeController");

router.post("", loginRequired, likeController.createLike);
router.get("", loginRequired, likeController.getLikeList);

module.exports = router;