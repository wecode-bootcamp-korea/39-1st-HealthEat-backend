const likeService = require('../services/likeService');
const { Errors } = require('../util/errors');
const { catchAsync } = require('../util/errors')

const createLike = catchAsync(async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id

    if (!productId) {
        throw new Error('KEY_ERROR');
    }

    const isLiked = await likeService.createLike(productId, userId)
    return res.status(200).json({ message : 'LIKE_SUCCESS', isLiked : isLiked})
})

const getLikeList = async (req, res) => {
    const { userId } = req.body;
    
    const result = await likeService.getLikeList(userId)
    return res.status(200).json(result)
}

const deleteLike = async (req, res) => {
    try {
    
    const { productId } = req.params;
    const userId = req.user.id;
    
    const result = await likeService.deleteLike(productId, userId)
    return res.status(200).json(result)
    } catch(err) {
    }
}

module.exports = { createLike, getLikeList, deleteLike }