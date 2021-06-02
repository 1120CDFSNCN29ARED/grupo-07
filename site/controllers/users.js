const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const usersJson = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const db = require("./../database/models");
const allUsers = db.User;

const users = {
  /* CREAR USUARIO - REGISTER*/
  register: (req, res) => {
    res.render("users/register");
  },

  processRegister: (req, res) => {
    /* const resultValidation = validationResult(req);

     if (resultValidation.errors.lenght > 0) {
       return.res.render("users/register")
     }*/

    //falta crear un ID y agregarlo al array de users.

    /*let lastUser = users.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }

    let userInData = Users.findByField("email", req.body.email);*/
    const newUser = {
      nombre: req.body.name,
      apellido: req.body.surname,
      foto: req.body.picture.filename,
      email: req.body.email,
      contraseña: bcrypt.hashSync(req.body.password, 10),
      calle: req.body.street,
      piso: req.body.floor,
      entreCalles: req.body.between - street,
      localidad: req.body.locality,
      cp: req.body.cp,
      telefono: req.body.phone,
      fechaDeNacimiento: req.body.birthday,
    };
    allUsers.create(newUser).then(() => {
      res.redirect("/userProfile", { newUser });
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
        res.redirect("/", { usuario: req.session.usuarioLogueado });
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
        res.render("users/user", { oneUser });
      })
      .catch(() => {
        res.redirect("error");
      });
  },

  /* USER PROFILE - MODIFICACION Usuario DETALLE*/
  profile: (req, res) => {
    res.render("users/userProfile", { usuario: req.session.usuarioLogueado });
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
      .then(res.redirect("/userProfile" + req.params.id));
  },
};

module.exports = users;
