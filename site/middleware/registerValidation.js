const { body } = require("express-validator");

const registerValidation = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres.")
    .notEmpty()
    .withMessage("Debes completar tu nombre."),
  body("surname")
    .isLength({ min: 3 })
    .withMessage("El apellido debe tener al menos 3 caracteres.")
    .notEmpty()
    .withMessage("Debes completar tu apellido."),
  body("picture").notEmpty().withMessage("Debes adjuntar una foto de usuario."),
  //body("street")
  //body("floorLevel")
  //body("betweenstreet")
  //body("locality")
  //body("cp")
  //body("phone")
  //body("birthday")
  body("email").isEmail().notEmpty().withMessage("Debes completar el e-mail."),
  body("pass")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres.")
    .isAlphanumeric()
    .notEmpty()
    .withMessage("La contraseña debe ser completada."),
  body("repeatPassword")
    .notEmpty()
    .withMessage("La contraseña debe ser completada."),
];

module.exports = registerValidation;
