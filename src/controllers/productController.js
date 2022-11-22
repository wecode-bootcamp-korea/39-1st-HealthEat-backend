const productService = require("../services/productService");
const { catchAsync } = require("../util/errors");

const getProductByParameter = catchAsync(async (req, res) => {
  const products = await productService.getProductByParameter(req.query);
  res.status(200).json({ products });
});
module.exports = {
  getProductByParameter,
};
