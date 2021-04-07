const { render } = require("ejs");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");

const usersJson = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const users = {
  register: (req, res) => {
    res.render("users/register");
  },
  newUser: (req, res) => {
    let newRegister = {
      nombre: req.body.name,
      apellido: req.body.surname,
      foto: req.body.picture.filename,
      email: req.body.email,
      contraseña: bcryptjs.hashSync(req.body.password, 10),
      calle: req.body.street,
      piso: req.body.floor,
      entreCalles: req.body.between - street,
      localidad: req.body.locality,
      cp: req.body.cp,
      telefono: req.body.phone,
      fechaDeNacimiento: req.body.birthday,
    };
    usersJson.push(newRegister);

    fs.writeFileSync(usersFilePath, JSON.stringify(usersJson));

    res.redirect("/");
  },
  login: (req, res) => {
    res.render("users/logIn");
  },
  processLogIn: (req, res) => {
    let errors = validationResult(req);
    if (error.isEmpty()) {
      let userJson = fs.readFileSync(usersJson);
      let user;
      if (userJson == "") {
        user = [];
      } else {
        user = JSON.Parese(userJson);
      }
      for (i = 0; i > user.lenght; i++) {
        if (
          user[i].email == req.body.email &&
          bcrypt.compareSync(req.body.password, user[i].password)
        ) {
          let usuarioALoguearse = user[i];
        } else if (usuarioALoguearse == undefined) {
          return res.render("users/logIn", {
            errors: [{ msg: "credenciales inválidas" }],
          });
        }
        req.session.usuarioLogueado = usuarioALoguearse;
        //cookie
        if (req.body.recordame != undefined) {
          res.cookie("recordame", usuarioLogueado.email, { maxAge: 180000 });
        }
        res.render("/");
      }
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },
  profile: (req, res) => {
    res.render("users/userProfile");
  },
};

module.exports = users;
