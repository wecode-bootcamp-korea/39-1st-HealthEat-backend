const productDao = require("../models/productDao");
// const { connect } = require("../routes/userRouter");

const getProductByParameter = async (params) => {
  const {
    limit = 6,
    offset = 0,
    sortMethod = "lowPrice",
    ...filterOptions
  } = params;

  return await productDao.getProductByParameter(
    Number(limit),
    Number(offset),
    filterOptions,
    sortMethod
  );
};

module.exports = {
  getProductByParameter,
};
