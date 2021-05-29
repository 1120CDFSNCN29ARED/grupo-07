// ************ Require's ************

const fs = require("fs");
const path = require("path");
const db = require("./../database/models");
const { validationResult } = require("express-validator");

const allProducts = db.Product;
//const allUsers = db.User;
const carts = db.Cart;
//const category = db.category;

const productsFilePath = path.join(__dirname, "../data/products.json");
const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const products = {
  /*Listado de productos*/
  list: (req, res) => {
    allProducts
      .findAll({
        limit: 9,
        offset: 6,
      })
      .then((products) => {
        return res.render("products/products", { products: products });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /* Detalle de un producto*/
  detail: (req, res) => {
    allProducts
      .findByPk(req.params.id)
      .then((productsDetail) => {
        return res.render("products/productDetail", { productsDetail });
        /*return res
          .status(200)
          .json({
            total: productsDetail.lenght,
            data: productsDetail,
            status: 200,*/
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /*Carrito de compra*/

  cart: (req, res) => {
    carts
      .findByPk(req.params.id)
      .then((productsCart) => {
        return res.render("products/productCart", { productsCart });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /* Lista de productos para actualizar/modificar , agregar o eliminar*/
  modificationList: (req, res) => {
    allProducts
      .findAll()
      .then((productsList) => {
        return res.render("products/modificationListProducts", {
          productsList,
        });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /*agregar productos nuevos en productsAdd*/

  add: (req, res) => {
    allProducts
      .findAll()
      .then((productsAdd) => {
        return res.render("products/productsAdd", { productsAdd });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  create: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const newProducts = {
        ...req.body,
      };
      allProducts
        .create(newProducts)
        .then((newProducts) => {
          return res.redirect("/products/modificationListProducts");
        })
        .catch(() => {
          return res.redirect("error");
        });
    } else {
      res.render("products/productsAdd", { errors: errors.array() });
    }
  },

  /*Editar producto existente en ModificationList*/

  edit: (req, res) => {
    console.log("req de edit", req.params.id);
    allProducts
      .findByPk(req.params.id)
      .then((productsUpdate) => {
        return res.render("products/productsUpdate", { productsUpdate });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  update: function (req, res) {
    allProducts
      .update({ ...req.body }, { where: { id: req.params.id } })
      .then((productsUpdate) => {
        return res.redirect("/products");
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /*Buscador de productos segun nombre -            FALTA HACER */
  buscar: function (req, res) {
    allProducts
      .findAll()
      .then(() => {
        return res.render("products/searchProduct");
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /*Borrar producto existente de modificationListProducts*/

  delete: function (req, res) {
    allProducts.findByPk(req.params.id).then((products) => {
      return res.render("products/productsDelete", { products });
    });
  },

  destroy: function (req, res) {
    console.log("id", req.params.id);
    allProducts
      .destroy({ where: { id: req.params.id }, force: true })
      .then((products) => {
        console.log("prto", products);
        return res.redirect("/products/modificationListProducts");
      })
      .catch(() => {
        return res.send(error);
      });
  },
};

module.exports = products;
