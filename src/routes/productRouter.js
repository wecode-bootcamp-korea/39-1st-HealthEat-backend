const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/category/:categoryId", productController.getProductByCategory);
router.get("/best", productController.getProductByStock);
router.get("/", productController.getProductByParameter);

module.exports = router;
