const express = require("express");
const router = express.Router();
const APIProductsControllers = require("../../controllers/APIcontrollers/APIProductsControllers");

/*RUTAS*/

/*listar productos*/
router.get("/products", APIProductsControllers.productList);

/*listar detalle de un producto*/
router.get("/products/:id", APIProductsControllers.detailProduct);
module.exports = router;
