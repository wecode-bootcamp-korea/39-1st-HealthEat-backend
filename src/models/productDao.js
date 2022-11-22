const { sqlDataSource } = require("./data-source");
const {
  makeProductQueryBuilders,
  orderBy,
} = require("../util/productQueryBuilder");
const getProductByParameter = async (limit, offset, filterOptions, sort) => {
  const builder = makeProductQueryBuilders(filterOptions);
  const sorts = orderBy(sort);
  const products = await sqlDataSource.query(
    `
            SELECT
                p.id,
                p.name,
                b.name as brand_name,
                p.category_id,
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
            ${builder}
            ${sorts}
            LIMIT ? OFFSET ?
            `,
    [limit, offset]
  );
  return products;
};
module.exports = {
  getProductByParameter,
};
