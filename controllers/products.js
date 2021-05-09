// ************ Require's ************

const fs = require("fs");
const path = require("path");
const db = require("./../database/models");

const allProducts = db.Product;
//const allUsers = db.User;
const carts = db.Cart;
//const category = db.category;

const toThousand = (n) => {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};

//const productsFilePath = path.join(__dirname, "../data/products.json");
//const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const products = {
  list: (req, res) => {
    allProducts
      .findAll({
        limit: 8,
        offset: 6,
      })
      .then((products) => {
        res.render("products/products", { products: products });
      })
      .catch(() => {
        res.redirect("error");
      });
  },

  detail: (req, res) => {
    allProducts
      .findByPk(req.params.id, {
        include: ["category"],
      })
      .then((productsDetail) => {
        res.render("products/productDetail", { productsDetail });
      })
      .catch(() => {
        res.redirect("error");
      });
  },

  cart: (req, res) => {
    carts
      .findByPk(req.params.id, {
        include: ["product"],
      })
      .then((productsCart) => {
        res.render("products/productCart", { productsCart });
      })
      .catch(() => {
        res.redirect("error");
      });
  },

  add: (req, res) => {
    allProducts
      .findAll(req.params.id, {
        include: ["category", "brand"],
      })
      .then((productsAdd) => {
        res.render("products/productsAdd", { productsAdd });
      })
      .catch(() => {
        res.redirect("error");
      });
  },

  modificationList: (req, res) => {
    allProducts
      .findAll({
        include: ["category"],
      })
      .then((productsList) => {
        res.render("products/modificationListProducts", { productsList });
      })
      .catch(() => {
        res.redirect("error");
      });
  },
};

module.exports = products;
