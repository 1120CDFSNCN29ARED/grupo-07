// ************ Require's ************

const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const products = require("../controllers/products");

/*** GET ALL PRODUCTS ***/
router.get("/", products.list);

/***GET ONE PRODUCT - detail */
router.get("/productDetail/:id", products.detail);

/***PRODUCT CART */
router.get("/productCart", products.cart);

/***PRODUCT create */
router.get("/productsAdd", products.add);
router.post("/products", products.new);

/*** GET ONE PRODUCT- MODIFICATION LIST PRODUCTS */

router.get("/modificationListProducts", products.modification);

/*** EDIT ONE PRODUCT */
router.get("/modificationListProducts/:id/edit", products.edit);
router.put("/modificationListProducts/:id", products.update);

/*** DELETE ONE PRODUCT */
router.delete("/modificationListProducts/:id", products.destroy);

module.exports = router;
