// ************ Require's ************

const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const products = require("../controllers/products");

/*** GET ALL PRODUCTS ***/
router.get("/", products.list);

/***PRODUCT DETAIL */

router.get("/productDetail", products.detail);

/***PRODUCT CART */
router.get("/productCart", products.cart);

/***PRODUCT ADD */
router.get("/productsAdd", products.add);

/*** CREATE ONE PRODUCT ***/

/*** GET ONE PRODUCT ***/

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:idProduct", products.edit);

/*** DELETE ONE PRODUCT ***/
router.delete("/delete/:idProduct", products.delete);

router.get("/modificationListProducts", products.modification);

module.exports = router;
