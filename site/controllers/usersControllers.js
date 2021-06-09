const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
//const fetch = require("node-fetch");

/*MODELOS*/
const db = require("../database/models");
const allUsers = db.User;
const sequelize = db.sequelize;
const { Op } = db.Sequelize;

const usersFilePath = path.join(__dirname, "../data/users.json");
const usersJson = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersControllers = {
  /* CREAR USUARIO - REGISTER*/
  register: (req, res) => {
    return res.render("users/register");
  },

  processRegister: (req, res) => {
    /* const resultValidation = validationResult(req);

     if (resultValidation.errors.lenght > 0) {
       return.res.render("users/register")
     }

    const userYaUtilizado = allUsers.findOne({
      where: { email: req.body.email },
    });

    if (userYaUtilizado) {
      return (
        res.render("users/register"),
        {
          errors: {
            email: {
              msg: "Este email ya está registrado",
            },
          },
        }
      );
    }*/

    const newUser = {
      ...req.body,
      picture: req.body.picture,
      pass: bcrypt.hashSync(req.body.pass, 10),
      repeatPassword: bcrypt.hashSync(req.body.repeatPassword, 10),
      picture: "/img/users/" + req.file.filename,
    };

    allUsers
      .create(newUser)
      .then(() => {
        return res.render("users/login");
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /* PROCESO LOGIN  */
  login: (req, res) => {
    console.log("plaza", req.body);
    res.render("users/logIn");
  },

  processLogIn: (req, res) => {
    allUsers
      .findOne({
        where: { email: req.body.email },
      })
      .then((oneUser) => {
        if (bcrypt.compareSync(req.body.pass)) {
          return res.render("users/user", { oneUser });
        }
      })
      .catch(() => {
        return res.redirect("error");
      });
  },

  /*  let usuarioALoguearse = allUsers.findOne({
      where: { email: req.body.email },
    });
    console.log("pepi", req.body);
    if (usuarioALoguearse) {
      let passwordOK = bcrypt.compareSync(
        req.body.pass,
        usuarioALoguearse.pass
      );
      if (passwordOK) {
        // delete usuarioALoguearse.password;
        req.session.usuarioLogueado = usuarioALoguearse;
        if (req.body.recordame != undefined) {
          res.cookie("userEmail", usuarioLogueado.email, { maxAge: 1200000 });
        }
   , {
       oneUser: req.session.usuarioLogueado,
        });
     }
    }
    if (usuarioALoguearse == null) {
      return res.render("users/logIn", {
        errors: {
          msg: "Email o contraseña incorrectos",
        },
      });
    }*/

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

  logout: (req, res) => {
    //  res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  /* USER PROFILE - MODIFICACION Usuario DETALLE*/
  profile: (req, res) => {
    return res.render("users/userProfile", {
      usuario: req.session.usuarioLogueado,
    });
  },

  /*  modificationProfle: (req, res) => {
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
        return res.redirect("/userProfile" + req.params.id);
      })
      .catch(() => {
        return res.redirect("error");
      });*/
};

module.exports = usersControllers;
