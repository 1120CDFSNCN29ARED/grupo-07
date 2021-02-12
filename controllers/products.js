const path = require("path");

const products = {
  list: (req, res) => {
    res.render("/products");
  },
  detail: (req, res) => {
    /* let detalle = productDetail.find(el => el.id === req.params.id)*/
    res.render("/products/productDetail");
  },
  cart: (req, res) => {
    res.render("/products/productCart");
  },
  charge: (req, res) => {
    res.render("/products/productsCharge");
  },
};

module.exports = products;
