/*const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

const toThousand = (n) => {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};*/

const main = {
  home: (req, res) => {
    res.render("index");
  },
  help: (req, res) => {
    res.render("help");
  },
  envios: (req, res) => {
    res.render("envios");
  },
};

module.exports = main;
