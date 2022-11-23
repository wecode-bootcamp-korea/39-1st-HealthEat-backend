const likeDao = require("../models/likeDao");

const createLike = async(productId, userId) => {
    const [checkLikeList] = await likeDao.checkLikeList(productId, userId)

    if (!productId) {
        const err = new Error("INVALID_PRODUCT_ID");
        err.statusCode = 400;
        throw err;
    }
    
    if (checkLikeList) {
        await likeDao.deleteLike(productId, userId)
        return false
    } else {
        await likeDao.createLike(productId, userId)
        return true
    }
}

const getLikeList = async (userId) => {
    const getLikeList = await likeDao.getLikeList(userId)
    return getLikeList
}

module.exports = { createLike, getLikeList }