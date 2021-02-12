const path = require("path");

const main = {
  home: (req, res) => {
    res.render("index");
  },
  register: (req, res) => {
    res.render("/register");
  },
  login: (req, res) => {
    res.render("/logIn");
  },
};

module.exports = main;
