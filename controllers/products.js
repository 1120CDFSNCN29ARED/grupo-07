// ************ Require's ************

const fs = require("fs");
const path = require("path");
//const { UPDATE } = require("sequelize/types/lib/query-types");
//const { delete } = require("../routes/products");
const db = require("./../database/models");

const allProducts = db.Product;
//const allUsers = db.User;
const carts = db.Cart;
//const category = db.category;

/*const toThousand = (n) => {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};*/

const productsFilePath = path.join(__dirname, "../data/products.json");
const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const products = {
  list: (req, res) => {
    allProducts
      .findAll({
        limit: 9,
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
        /*return res
          .status(200)
          .json({
            total: productsDetail.lenght,
            data: productsDetail,
            status: 200,*/
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

  add: (req, res) => {
    allProducts
      .findAll()
      .then((productsAdd) => {
        res.render("products/productsAdd", { productsAdd });
      })
      .catch(() => {
        res.redirect("error");
      });
  },

  /*agregar prodcutos nuevos en productsAdd*/

  create: (req, res) => {
    const newProducts = {
      ...req.body,
    };
    allProducts
      .create(newProducts)
      .then((newProducts) => {
        res.redirect("/products/modificationListProducts");
      })
      .catch(() => {
        res.redirect("error");
      });
  },

  /*editar prodcutos existentes en productUpdate*/

  edit: (req, res) => {
    allProducts
      .findByPk(req.params.id, {
        include: ["category"],
      })
      .then((productsUpdate) => {
        res.render("products/productsUpdate", { productsUpdate });
      })
      .catch(() => {
        res.redirect("error");
      });
  },

  /*buscar:  function (req,res) {}*/

  update: function (req, res) {
    allProducts
      .update({ ...req.body }, { where: { id: req.params.id } })
      .then((products) => res.redirect("/products"))
      .catch(() => res.send(error));
  },

  delete: function (req, res) {
    allProducts.findByPk(req.params.id).then((products) => {
      res.render("products/productsDelete", { products });
    });
  },

  destroy: function (req, res) {
    allProducts
      .destroy({ where: { id: req.params.id } })
      .then((products) => res.redirect("/products"))
      .catch(() => res.send(error));
  },
};

module.exports = products;
