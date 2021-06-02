const { body } = require("express-validator");

const loginValidation = [
  body("email").isEmail().notEmpty().withMessage("Debes completar el e-mail."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres.")
    .isAlphanumeric()
    .notEmpty(),
];

module.exports = loginValidation;
