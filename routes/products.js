// ************ Require's ************

const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const products = require("../controllers/products");

/*** GET ALL PRODUCTS ***/
router.get("/", products.list);

/***PRODUCT DETAIL */

router.get("/productDetail/:id", products.detail);

/***PRODUCT CART */
router.get("/productCart", products.cart);

/***PRODUCT ADD */
router.get("/productsAdd", products.add);
router.post("/products", products.new);


/*** GET ONE PRODUCT ***/

/*** EDIT ONE PRODUCT 
router.get("/:id/edit", products.edit);
router.put("/:id", products.update);

/*** DELETE ONE PRODUCT 
router.delete("/:id", products.destroy);***/

router.get("/modificationListProducts", products.modification);

module.exports = router;
