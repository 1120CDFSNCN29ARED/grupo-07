const users = {
  register: (req, res) => {
    res.render("users/register");
  },
  login: (req, res) => {
    res.render("users/logIn");
  },
  profile: (req, res) => {
    res.render("users/userProfile");
  },
};

module.exports = users;
