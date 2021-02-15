const express = require("express");
const router = express.Router();
const products = require("../controllers/products");

router.get("/", products.list);

router.get("/productDetail", products.detail);

router.get("/productCart", products.cart);

router.get("/productsAdd", products.add);

router.get("/modificationListProducts", products.modification);

module.exports = router;
