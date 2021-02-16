const path = require("path");

const main = {
  home: (req, res) => {
    res.render("index");
  },
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("logIn");
  },
  profile: (req, res) => {
    res.render("userProfile");
  },
  help: (req, res) => {
    res.render("help");
  },
};

module.exports = main;
