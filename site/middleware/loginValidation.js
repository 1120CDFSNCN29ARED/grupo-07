const { body } = require("express-validator");

const loginValidation = [
  body("user-name").notEmpty().withMessage("Debes completar el nombre"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres.")
    .isAlphanumeric()
    .notEmpty(),
];

module.exports = loginValidation;
