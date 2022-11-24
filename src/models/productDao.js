const { sqlDataSource } = require("./data-source");
const { makeProductQueryBuilders } = require("../util/productQueryBuilder");
const getProductByParameter = async (limit, offset, filterOptions, sort) => {
  const whereClauses = makeProductQueryBuilders(filterOptions);

  const sortSet = {
    lowPrice: "ORDER BY price",
    highPrice: "ORDER BY price DESC",
    id: "ORDER BY id",
    best: "ORDER BY stock",
  };

  const products = await sqlDataSource.query(
    `
      SELECT
        p.id,
        p.name,
        b.name as brand_name,
        c.name as category_name,
        c.category_icon,
        information,
        thumbnail,
        price,
        made_from,
        stock,
        discount_rate
      FROM products p
      INNER JOIN brands b ON p.brand_id = b.id
      INNER JOIN categories c ON c.id = p.category_id
      ${whereClauses}
      ${sortSet[sort]}
      LIMIT ? OFFSET ?
    `,
    [limit, offset]
  );

  const totalCount = await sqlDataSource.query(
    `
      SELECT COUNT(*) as count
      FROM products p
      INNER JOIN brands b ON p.brand_id = b.id
      INNER JOIN categories c ON c.id = p.category_id
      ${whereClauses}
    `
  );

  return { products, totalCount };
};

module.exports = {
  getProductByParameter,
};
