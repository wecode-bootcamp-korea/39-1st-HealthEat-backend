const productService = require("../services/productService");
const { catchAsync } = require("../util/errors");

const getProductByParameter = catchAsync(async (req, res) => {
  const { products, totalCount } = await productService.getProductByParameter(
    req.query
  );
  res.status(200).json({ totalCount, products });
});
module.exports = {
  getProductByParameter,
};
