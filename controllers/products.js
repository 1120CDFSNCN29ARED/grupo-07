const path = require("path");

const products = {
    list : (req, res) => {
      res.render("products")
    },
    detail: (req, res) => {
        // let detalle = productDetail.find(el => el.id === req.params.id)
        res.render("productDetail")},
    cart: (req, res) => {
      res.render("productCart")
    },
    add: (req, res) => {
      res.render("productsAdd")
    }
      }


module.exports = products;
