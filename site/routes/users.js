// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

//* Middleware Multer*//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.resolve(__dirname, "../public/img/users");
    if (
      file.mimetype != "image/jpeg" &&
      file.mimetype != "image/png" &&
      file.mimetype != "image/jpg" &&
      file.mimetype != "image/gif"
    ) {
      return cb(new Error("Solo se aceptan archivos JPEG , PNG , JPG o GIF"));
    }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const newFilename = Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

// Middelware Required

const loginValidation = require("../middleware/loginValidation");
const registerValidation = require("../middleware/registerValidation");
const middlewareHuesped = require("../middleware/middlewareHuesped");
const middlewareUsuario = require("../middleware/middlewareUsuario");

// ************ Controller Require ************

const users = require("../controllers/users");

/* Register and processing form*/

router.get("/register", /*middlewareHuesped,*/ users.register);

router.post("/register", upload.single("picture"), users.processRegister);

/*LOGIN and processing form*/

router.get("/logIn", users.login);

router.post("/logIn", /*loginValidation, */ users.processLogIn);

/*USER PROFILE - VISUALIZACION DETALLE*/

router.get("/user", users.userProfile);

/* USER PROFILE - MODIFICACION DETALLE and processing form*/

router.get("/userProfile", /*middlewareUsuario,*/ users.profile);

router.post("/userProfile"); //falta controller para post

module.exports = router;
