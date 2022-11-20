const productDao = require("../models/productDao");
const { makeProductQueryBuilders } = require("../util/productQueryBuilder");

const getProductByCategory = async (categoryId) => {
  return await productDao.getProductByCategory(categoryId);
};

const getProductByStock = async () => {
  return await productDao.getProductByStock();
};

const getProductByParameter = async (params) => {
  const builder = makeProductQueryBuilders(params);
  return await productDao.getProductByParameter(builder);
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
