const path = require("path")


const products = {
    list : (req, res) => {
      res.sendFile(path.resolve(__dirname, "../Views/products.html"))
    },
    detail: (req, res) => {
        let detalle = productDetail.find(el => el.id === req.params.id)
        res.sendFile(detalle)},
    cart: (req, res) => {
      res.sendFile(path.resolve(__dirname, "../Views/productCart.html"))
    },
    charge: (req, res) => {
      res.sendFile(path.resolve(__dirname, "../Views/productsCharge.html"))
    }
      }


module.exports = products;