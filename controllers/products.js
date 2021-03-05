/*const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");

const toThousand = (n) => {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
},*/

const products = {
  list: (req, res) => {
    res.render("products");
  },
  detail: (req, res) => {
    // let detalle = productDetail.find(el => el.id === req.params.id)
    res.render("productDetail");
  },
  cart: (req, res) => {
    res.render("productCart");
  },
  add: (req, res) => {
    res.render("productsAdd");
  },
  modification: (req, res) => {
    res.render("modificationListProducts");
  },

  /*** PRODUCT EDIT

  edit: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const prodId = req.params.id;
    const product = products.find((prod) => {
      return prod.id == prodId;
    });

    res.render("producstAdd");
  },

  update: (req, res) =>{

  },

  /*** PRODUCT DELETE
  destroy: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    const productIndex = products.findIndex((prod) => {
      return prod.id == req.params.id;
    });
    products.splice(productIndex, 1);

    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect("modificationListProducts");
  },*/
};

module.exports = products;
