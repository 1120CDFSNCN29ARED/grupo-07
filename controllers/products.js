const { render } = require("ejs");
const fs = require("fs");
const path = require("path");



const toThousand = (n) => {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

const productsFilePath = path.join(__dirname, "../data/products.json");
const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const products = {
  list: (req, res) => {
    res.render("products", { products: productsJson });
  },
  detail: (req, res) => {
    let detalle = productsJson.find(prod => prod.id == req.params.id)
    // if (detalle == null){
      // res.render("error");
    // }else{
      res.render("productDetail", {detalle})
    // }
  },
  cart: (req, res) => {
    res.render("productCart");
  },
  add: (req, res) => {
    res.render("productsAdd");
  },
  new: (req,res) =>{
    let newProduct = {
    nombre: req.body.name,
    foto: req.body.picture,
    precio: req.body.price,
    marca: req.body.brand,
    descripcion: req.body.description,
    categoria: req.body.category
    };
  res.redirect("/");
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
