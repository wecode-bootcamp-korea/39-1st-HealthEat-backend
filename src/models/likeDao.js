const { sqlDataSource } = require("./data-source");

const createLike = async (productId, userId) => {
  try {
    return await sqlDataSource.query(
      `INSERT INTO likes(
                product_id,
                user_id
            ) VALUES (?, ?)
            `,
      [productId, userId]
    );
  } catch (err) {
    throw new Error("INVALID DATA INPUT");
  }
};

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
      [productId, userId]
    );
  } catch (err) {
    const error = new Error("DUPLICATE DATA");
    error.statusCode = 400;
    throw error;
  }
};

const getLikeList = async (userId) => {
  try {
    return await sqlDataSource.query(
      `SELECT 
            likes.id As likes_id,
            brands.name AS brand_name,
            products.id AS id,
            products.name AS name,
            products.thumbnail AS thumbnail,
            products.price AS price,
            products.discount_rate AS discount_rate
        FROM
            products
        INNER JOIN 
            likes ON likes.product_id = products.id
        INNER JOIN 
            brands ON brands.id = products.brand_id
        WHERE
            likes.user_id = ?
        `,
      [userId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 400;
    throw error;
  }
};

const deleteLike = async (productId, userId) => {
  try {
    return await sqlDataSource.query(
      `DELETE FROM 
                likes
            WHERE
                product_id = ? AND user_id = ?
            `,
      [productId, userId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = { createLike, checkLikeList, getLikeList, deleteLike };
