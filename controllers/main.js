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
