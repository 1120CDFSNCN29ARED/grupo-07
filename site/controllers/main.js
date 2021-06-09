/*MODELOS*/
const db = require("./../database/models");
const allProducts = db.Product;
const sequelize = db.sequelize;
const { Op } = db.Sequelize;

const main = {
  home: (req, res) => {
    allProducts
      .findAll({ limit: 3 })
      .then((products) => {
        return res.render("index", { products });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },
  help: (req, res) => {
    res.render("help");
  },
  envios: (req, res) => {
    res.render("envios");
  },
};

module.exports = main;
