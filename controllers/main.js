

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
  profile: (req, res) =>{
    res.render("userProfile");
  }
};

module.exports = main;
