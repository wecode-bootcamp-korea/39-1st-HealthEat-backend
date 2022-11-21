const orderBy = (value) => {
  const obj = {
    lowPrice: "ORDER BY price",
    highPrice: "ORDER BY price DESC",
  };
  console.log(value);
  return `${obj[value]}`;
};

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
const makeProductQueryBuilders = (params) => {
  const builderSet = {
    minPrice: minPriceFilterBuilder,
    maxPrice: maxPriceFilterBuilder,
    brand: brandFilterBuilder,
  };

  const whereClauses = Object.entries(params).map(([key, value]) =>
    builderSet[key](value)
  );
  console.log(whereClauses);

  return `WHERE ${whereClauses.join(" AND ")}`;
};

module.exports = { makeProductQueryBuilders, brandFilterBuilder, orderBy };
