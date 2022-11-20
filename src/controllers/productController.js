const productService = require("../services/productService");

const getProductByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await productService.getProductByCategory(categoryId);
    res.status(200).json({ products });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

const getProductByStock = async (req, res) => {
  try {
    const products = await productService.getProductByStock();
    res.status(200).json({ products });
  } catch (err) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

const getProductByParameter = async (req, res) => {
  try {
    if (Object.keys(req.query).length !== 0) {
      const products = await productService.getProductByParameter(req.query);
      res.status(200).json({ products });
    } else {
      const products = await productService.getAllproduct();
      res.status(200).json({ products });
    }
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};
module.exports = {
  getProductByCategory,
  getProductByStock,
  getProductByParameter,
};
