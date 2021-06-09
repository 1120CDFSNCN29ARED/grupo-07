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
    //console.log("vamos", req.body);
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
    // console.log("papa", req.body, req.file);
    // console.log("welcome", newUser);
    allUsers
      .create(newUser)
      .then(() => {
        //   console.log("hola", newUser);
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
    //console.log("palta", req.body);

    allUsers
      .findOne({
        where: { email: req.body.email },
      })
      .then((oneUser) => {
        if (bcrypt.compareSync(req.body.password)) {
          return res.redirect("users/user", { oneUser });
        }
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
    return res.render("users/user", {
      oneUser: req.session.usuarioLogueado,
    });

    // allUsers.findByPk(req.params.id);
    // console
    //  .log("negru", req.params.id)
    //  .then((oneUser) => {
    //  console.log("basta", oneUser);
    //return res.render("users/user", { oneUser });
    //})
    //.catch(() => {
    // return res.redirect("error");
    //});
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
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
