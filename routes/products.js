const {Router}=require("express");
const routes = Router();
const products =require("../controllers/products");

routes.get("/", products.list);

routes.get("/productDetail/:id?", products.detail);

routes.get("/productCart", products.cart);

routes.get("/productsCharge", products.add);



module.exports = routes;