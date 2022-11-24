const brandFilterBuilder = (value) => {
  //need to check what the type of value is
  if (typeof value == "string") {
    return `p.brand_id = ${value}`;
  } else {
    let brands = value.map((x) => {
      return `p.brand_id = ${x}`;
    });
    return `(${brands.join(" OR ")})`;
  }
};

const minPriceFilterBuilder = (value) => {
  // return `price BETWEEN ${value}`;
  return `price >= ${value}`;
};
const maxPriceFilterBuilder = (value) => {
  // return `${value}`;
  return `price <= ${value}`;
};
const categoryFilterBuilder = (value) => {
  // return `${value}`;
  return `category_id = ${value}`;
};
const detailFilterBuilder = (value) => {
  // return `${value}`;
  return `p.id = ${value}`;
};
const makeProductQueryBuilders = (params) => {
  const builderSet = {
    minPrice: minPriceFilterBuilder,
    maxPrice: maxPriceFilterBuilder,
    brand: brandFilterBuilder,
    category: categoryFilterBuilder,
    id: detailFilterBuilder,
  };

  const whereClauses = Object.entries(params).map(([key, value]) =>
    builderSet[key](value)
  );
  if (whereClauses.length !== 0) {
    return `WHERE ${whereClauses.join(" AND ")}`;
  } else return "";
};

module.exports = { makeProductQueryBuilders, brandFilterBuilder };
