const { body } = require("express-validator");

const addValidation = [
  body("name")
    .notEmpty()
    .withMessage("Debes completar el nombre")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Debe tener al menos 3 caracteres el nombre del producto"),
  body("picture").notEmpty().withMessage("Debes cargar la foto del producto"),
  body("price")
    .notEmpty()
    .withMessage("Debes completar el precio del producto"),
  body("discount")
    .notEmpty()
    .isInt()
    .withMessage("Debes completar el descuento del producto")
    .bail(),
  body("quantity")
    .notEmpty()
    .withMessage("Debes completar la cantidad del producto"),
  body("weight").notEmpty().withMessage("Debes completar el peso del producto"),
  body("brand")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Debes tener al menos 3 caracteres la marca del producto"),
  body("description")
    .notEmpty()
    .withMessage("Debes completar la descripción")
    .bail()
    .isLength({ min: 10 })
    .withMessage(
      "Debe tener al menos 10 caracteres la descripción del producto"
    ),
];

module.exports = addValidation;
