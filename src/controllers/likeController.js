const likeService = require("../services/likeService");
const { Errors } = require("../util/errors");
const { catchAsync } = require("../util/errors");

const createLike = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;

  if (!productId) {
    throw new Error("KEY_ERROR");
  }

  const isLiked = await likeService.createLike(productId, userId);
  return res.status(200).json({ message: "LIKE_SUCCESS", isLiked: isLiked });
});

const getLikeList = async (req, res) => {
  const userId = req.user.id;

  const [products, name] = await likeService.getLikeList(userId);
  res.status(200).json([products, name]);
};

module.exports = { createLike, getLikeList };
