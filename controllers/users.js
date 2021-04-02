const { render } = require("ejs");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");

const usersJson = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const users = {
  register: (req, res) => {
    res.render("users/register");
  },
  newUser: (req, res) => {
    let newRegister = {
      id,
      nombre: req.body.name,
      apellido: req.body.surname,
      foto: req.body.picture,
      email: req.body.email,
      contraseña: req.body.password,
    };
    usersJson.push(newRegister);

    fs.writeFileSync(usersFilePath, JSON.stringify(usersJson));

    res.redirect("/");
  },
  login: (req, res) => {
    res.render("users/logIn");
  },
  profile: (req, res) => {
    res.render("users/userProfile");
  },
};

module.exports = users;
