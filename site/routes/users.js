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
    const newFilename = Date.now() + "_" + file.originalname;
    cb(null, newFilename);
    return file;
  },
});

const upload = multer({ storage }).single("picture");

// Middelware Required

const loginValidation = require("../middleware/loginValidation");
const registerValidation = require("../middleware/registerValidation");
const middlewareHuesped = require("../middleware/middlewareHuesped");
const middlewareUsuario = require("../middleware/middlewareUsuario");

// ************ Controller Require ************

const usersControllers = require("../controllers/usersControllers");

/* Register and processing form*/

router.get("/register", /*middlewareHuesped,*/ usersControllers.register);

router.post("/register", upload, usersControllers.processRegister);

/*LOGIN and processing form*/

router.get("/logIn", usersControllers.login);

router.post("/logIn", /*loginValidation, */ usersControllers.processLogIn);

/*USER PROFILE - VISUALIZACION DETALLE*/

router.get("/user", usersControllers.userProfile);

/* USER PROFILE - MODIFICACION DETALLE and processing form*/

router.get("/userProfile", /*middlewareUsuario,*/ usersControllers.profile);

//router.post("/userProfile"); //falta controller para post

module.exports = router;
