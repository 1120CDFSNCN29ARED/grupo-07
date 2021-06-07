const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const usersFilePath = path.join(__dirname, "../data/users.json");
const usersJson = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

//const fetch = require("node-fetch");

/*MODELOS*/
const db = require("../database/models");
const { User } = require("../database/models");
const allUsers = User.db;

const sequelize = db.sequelize;
const { Op } = db.Sequelize;

const usersControllers = {
  /* CREAR USUARIO - REGISTER*/
  register: (req, res) => {
        return res.render("users/register");
      },
    

  processRegister: (req, res) => {
    /* const resultValidation = validationResult(req);

     if (resultValidation.errors.lenght > 0) {
       return.res.render("users/register")
     }*/

    const newUser = {
      name: req.body.name,
      surname: req.body.surname,
      picture: req.body.picture,
      email: req.body.email,
      pass: bcrypt.hashSync(req.body.pass, 10),
      street: req.body.street,
      floorLevel: req.body.floorLevel,
      betweenStreet: req.body.betweenStreet,
      locality: req.body.locality,
      cp: req.body.cp,
      phone: req.body.phone,
      birthday: req.body.birthday,
    };

    allUsers
      .create(newUser)
      .then(() => {
        console.log("hola", newUser);
        return res.redirect("users/user");
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /* PROCESO LOGIN  */
  login: (req, res) => {
    res.render("users/logIn");
  },
  processLogIn: (req, res) => {
    let usuarioALoguearse = allUsers.findOne({
      where: { email: req.body.email },
    });
    if (usuarioALoguearse) {
      let passwordOK = bcrypt.compareSync(
        req.body.password,
        usuarioALoguearse.password
      );
      if (passwordOK) {
        // delete usuarioALoguearse.password;
        req.session.usuarioLogueado = usuarioALoguearse;
        if (req.body.recordame != undefined) {
          res.cookie("recordame", usuarioLogueado.email, { maxAge: 1200000 });
        }
       return res.redirect("/", { usuario: req.session.usuarioLogueado });
      }
    }
    if (usuarioALoguearse == null) {
      return res.render("users/logIn", {
        errors: {
          msg: "Email o contraseña incorrectos",
        },
      });
    }
  },

  /*USER PROFILE - VISUALIZACION usuario DETALLE*/
  userProfile: (req, res) => {
    allUsers
      .findByPk(req.params.id)
      .then((oneUser) => {
        return res.render("users/user", { oneUser });
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /* USER PROFILE - MODIFICACION Usuario DETALLE*/
  profile: (req, res) => {
    return res.render("users/userProfile", { usuario: req.session.usuarioLogueado });
  },

  modificationProfle: (req, res) => {
    allUsers
      .update(
        { ...req.params },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(() => {
        return res.redirect("/userProfile" + req.params.id)
      })
      .catch(() => {
        return res.redirect("error");
      });
  },
};

module.exports = usersControllers;
