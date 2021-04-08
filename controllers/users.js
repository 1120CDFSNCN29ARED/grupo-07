const { render } = require("ejs");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../data/users.json");
const usersJson = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const UserModels = require("../models/users");
const upload = require("../middlewares/multerMiddleware");
//const { validation } = require("express-validator");

const users = {
  register: (req, res) => {
    res.render("users/register");
  },

  processRegister: (req, res) => {
    /* const resultValidation = validationResult(req);

     if (resultValidation.errors.lenght > 0) {
       return.res.render("users/register")
     }*/

    let userInData = UserModels.findByField("email", req.body.email);

    let newRegister = {
      id,
      nombre: req.body.name,
      apellido: req.body.surname,
      foto: req.file.filename,
      email: req.body.email,
      contraseña: bcryptjs.hashSync(req.body.password, 10),
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

  modificationProfle: (req, res) => {},
};

//console.log(usersJson);

module.exports = users;
