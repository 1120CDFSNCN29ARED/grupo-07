const express = require("express");
const router = express.Router();
const products = require("../controllers/products");

routes.get("/", products.list);

routes.get("/products/productDetail", products.detail);

routes.get("/products/productCart", products.cart);

routes.get("/products/productsCharge", products.charge);

module.exports = router;
