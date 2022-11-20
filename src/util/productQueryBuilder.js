const brandFilterBuilder = (value) => {
  //need to check what the type of value is
  if (typeof value == "string") {
    return `p.brand_id = ${value}`;
  } else {
    let brands = value.map((x) => {
      return `p.brand_id = ${x}`;
    });
    brands[0] = "(" + brands[0];
    brands[brands.length - 1] = brands[brands.length - 1] + ")";
    return `${brands.join(" OR ")}`;
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
const makeProductQueryBuilders = (params) => {
  const builderSet = {
    minPrice: minPriceFilterBuilder,
    maxPrice: maxPriceFilterBuilder,
    brand: brandFilterBuilder,
  };

  const whereClauses = Object.entries(params).map(([key, value]) =>
    builderSet[key](value)
  );

  return `WHERE ${whereClauses.join(" AND ")}`;
};

module.exports = { makeProductQueryBuilders, brandFilterBuilder };
