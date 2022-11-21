const { sqlDataSource } = require("./data-source");

const getProductByCategory = async (limit, offset, categoryId) => {
  const products = await sqlDataSource.query(
    `
        SELECT
            p.name,
            brand_id,
            information,
            thumbnail,
            price,
            made_from,
            stock,
            discount_rate
        FROM products as p
        INNER JOIN categories c
        ON p.category_id = c.id
        WHERE category_id = ?
        LIMIT ? OFFSET ?
        `,
    [categoryId, limit, offset]
  );
  return products;
};
const getProductByStock = async () => {
  const products = await sqlDataSource.query(
    `
          SELECT
              p.id,
              p.name,
              b.name as brand_id,
              information,
              thumbnail,
              price,
              made_from,
              stock,
              discount_rate
          FROM products p
          INNER JOIN brands b ON p.brand_id = b.id
          ORDER BY stock
          LIMIT 6
          `
  );
  return products;
};
const getProductByParameter = async (limit, offset, sort, builder) => {
  const products = await sqlDataSource.query(
    `
            SELECT
                p.name,
                brand_id,
                information,
                thumbnail,
                price,
                made_from,
                stock,
                discount_rate
            FROM products p
            INNER JOIN brands b ON p.brand_id = b.id
            ${builder}
            ${sort}
            LIMIT ? OFFSET ?
            `,
    [limit, offset]
  );
  return products;
};
const getAllproduct = async () => {
  const products = await sqlDataSource.query(
    `
            SELECT
                p.id,
                p.name,
                b.name as brand_id,
                information,
                thumbnail,
                price,
                made_from,
                stock,
                discount_rate
            FROM products p
            INNER JOIN brands b ON p.brand_id = b.id
            ORDER BY id 
            `
  );
  return products;
};

module.exports = {
  getProductByCategory,
  getProductByStock,
  getProductByParameter,
  getAllproduct,
};
