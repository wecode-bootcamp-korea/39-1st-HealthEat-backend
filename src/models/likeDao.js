const { sqlDataSource } = require("./data-source");

const createLike = async (productId, userId) => {
    try {
        return await sqlDataSource.query(
            `INSERT INTO likes(
                product_id,
                user_id
            ) VALUES (?, ?)
            `,
            [ productId, userId ]
        )
    } catch (err) {
        throw new Error("INVALID DATA INPUT");
    }
}

const checkLikeList = async (productId, userId) => {
    try {
        return await sqlDataSource.query(
            `SELECT
                product_id
            FROM
                likes 
            WHERE
                product_id = ? AND user_id = ?
            `,
            [ productId, userId ]
        )
    } catch (err) {
        const error = new Error("DUPLICATE DATA");
        error.statusCode = 400
        throw error;
    }
}

const getLikeList = async (userId) => {
    try {
        return await sqlDataSource.query(
        `SELECT 
            likes.product_id As No,
            products.brand_id AS Brand,
            products.name AS Name,
            products.thumbnail AS Thumbnail,
            products.price AS Price
        FROM
            products
        INNER JOIN 
            likes ON likes.product_id = products.id
        WHERE
            likes.user_id = ?
        `,
        [ userId ]
        );
    } catch (err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 400
        throw error;
    }
}

const deleteLike = async (productId, userId) => {
    try {
        return await sqlDataSource.query(
            `DELETE FROM 
                likes
            WHERE
                product_id = ? AND user_id = ?
            `,
            [ productId, userId ]
        )
    } catch (err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 400
        throw error;
    }
}

module.exports = { createLike, checkLikeList, getLikeList, deleteLike }