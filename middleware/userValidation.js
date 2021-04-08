const { body } = require("express-validator");

const userValidation = [
  body("email").isEmail().notEmpty(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres.")
    .isAlphanumeric()
    .notEmpty(),
];

module.exports = userValidation;
