// ************ Require's ************
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
//const fetch = require("node-fetch");

/*MODELOS*/
const db = require("./../database/models");
const allProducts = db.Product;
const sequelize = db.sequelize;
const { Op } = db.Sequelize;

const productsFilePath = path.join(__dirname, "../data/products.json");
const productsJson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const products = {
  /*Listado de productos*/
  list: (req, res) => {
    allProducts
      .findAll({
        limit: 11,
      })
      .then((products) => {
        return res.render("products/products", { products });
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
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /*Carrito de compra*/

  cart: (req, res) => {
    const toThousand = (n) => {
      return n.toLocaleString("es-AR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };
    allProducts
      .findByPk(req.params.id)
      .then((productsCart) => {
        return res.render("products/productCart", { productsCart, toThousand });
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
    //const errors = validationResult(req);
    //if (errors.isEmpty()) {
    const newProducts = {
      ...req.body,
      picture: "/img/products/" + req.file.filename,
      brand_id: req.body.brand_id,
    };
    allProducts
      .create(newProducts)
      .then((newProducts) => {
        return res.redirect("/products/modificationListProducts");
      })
      .catch(() => {
        return res.redirect("error");
      });
    //} else {
    // res.render("products/productsAdd", { errors: errors.array() });
  },
  //},

  /*Editar producto existente en ModificationList*/

  edit: function (req, res) {
    allProducts
      .findByPk(req.params.id)
      .then((products) => {
        return res.render("products/productsEdit", { products });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  update: function (req, res) {
    allProducts
      .update(req.body, { where: { id: req.params.id } })
      .then(() => {
        return res.redirect("products/modificationListProducts");
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /*Buscador de productos segun nombre -  FALTA HACER CON API */
  buscar: function (req, res) {
    let { word } = req.query;
    // word = word.toLowerCase; //palabras en minusculas
    allProducts
      .findAll({
        where: {
          name: { [Op.startsWith]: `%${word}%` },
        },
      })
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
    allProducts
      .destroy({ where: { id: req.params.id }, force: true })
      .then((products) => {
        return res.redirect("/products/modificationListProducts");
      })
      .catch(() => {
        return res.send(error);
      });
  },
};

module.exports = products;
