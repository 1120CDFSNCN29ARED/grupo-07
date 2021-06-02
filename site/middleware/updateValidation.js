const { body } = require("express-validator");

const updateValidation = [
  body("name")
    .notEmpty()
    .withMessage("Debes completar el nombre")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Debe tener al menos 5 caracteres el nombre del producto"),
  //body("picture").notEmpty().withMessage("Debes cargar la foto del producto"),
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
    .isLength({ min: 20 })
    .withMessage(
      "Debe tener al menos 20 caracteres la descripción del producto"
    ),
  body("picture").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".JPG", ".JPEG", ".PNG", ".GIF"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ","
          )}`
        );
      }
    }
    return true;
  }),
];

module.exports = updateValidation;
