const { body } = require("express-validator");

const registerValidation = [
  body("name")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres.")
    .notEmpty()
    .withMessage("Debes completar tu nombre."),
  body("surname")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener al menos 2 caracteres.")
    .notEmpty()
    .withMessage("Debes completar tu apellido."),
  //body("picture").notEmpty().withMessage("Debes adjuntar una foto de usuario."),
  body("email").isEmail().notEmpty().withMessage("Debes completar el e-mail."),
  body("pass")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres.")
    .isAlphanumeric()
    .notEmpty()
    .withMessage("La contraseña debe ser completada."),
  body("repeatPassword")
    .notEmpty()
    .withMessage("La contraseña debe ser completada."),
  /* body("picture").custom((value, { req }) => {
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
  }),*/
];

module.exports = registerValidation;
