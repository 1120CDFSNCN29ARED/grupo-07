const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");


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

  /*** PRODUCT EDIT*/
  edit: (req, res) => {
    let idProduct = req.params.idProduct;
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    
    /*const product = products.find((prod) => {
      return prod.id == prodId;
    });*/

    res.send(idProduct);

    /*res.render("product-edit-form", { product });
  },

  /*** PRODUCT DELETE*/
  delete: (req, res) => {},
  const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

   fs.writeFileSync(productsFilePath, JSON.stringify(products));
    /*res.redirect(`/`);*/
};

module.exports = products;
