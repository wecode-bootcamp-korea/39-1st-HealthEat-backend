const productDao = require("../models/productDao");
const {
  makeProductQueryBuilders,
  orderBy,
} = require("../util/productQueryBuilder");

const getProductByCategory = async (params) => {
  const { limit = 6, offset = 0, ...categoryOption } = params;
  const { categoryId } = categoryOption;
  return await productDao.getProductByCategory(limit, offset, categoryId);
};

const getProductByStock = async () => {
  return await productDao.getProductByStock();
};

const getProductByParameter = async (params) => {
  const {
    limit = 6,
    offset = 0,
    sortMethod = "lowPrice",
    ...filterOptions
  } = params;

  const sort = orderBy(sortMethod);
  const builder = makeProductQueryBuilders(filterOptions);
  return await productDao.getProductByParameter(limit, offset, sort, builder);
};
const getAllproduct = async () => {
  return productDao.getAllproduct();
};
module.exports = {
  getProductByCategory,
  getProductByStock,
  getProductByParameter,
  getAllproduct,
};
