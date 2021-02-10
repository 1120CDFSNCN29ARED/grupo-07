const path = require("path")


const products = {
    list : (req, res) => {
      res.render("products")
    },
    detail: (req, res) => {
        let detalle = productDetail.find(el => el.id === req.params.id)
        res.render(detalle)},
    cart: (req, res) => {
      res.render("productCart")
    },
    charge: (req, res) => {
      res.render("productsCharge")
    }
      }


module.exports = products;