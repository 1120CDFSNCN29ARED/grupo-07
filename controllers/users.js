const { render } = require("ejs");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
// const { delete } = require("../routes/main");

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
      contraseña: bcrypt.hashSync(req.body.password, 10),
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
let usuarioALoguearse = await User.findOne({where: {email: req.body.email}});
if (usuarioALoguearse) {
  let passwordOK = bcrypt.compareSync(req.body.password, usuarioALoguearse.password);
  if (passwordOK){
    // delete usuarioALoguearse.password;
    req.session.usuarioLogueado = usuarioALoguearse;
    res.redirect("/", {usuario: req.session.usuarioLogueado})
  }
}
if (usuarioALoguearse == null){
  return res.render("users/logIn", {
    errors: {
    msg: "Emial o contraseña incorrectos"
  }});
}
  },
  profile: (req, res) => {
    res.render("users/userProfile", {usuario: req.session.usuarioLogueado});
  },
};

module.exports = users;
