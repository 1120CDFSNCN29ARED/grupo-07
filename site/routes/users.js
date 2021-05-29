// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

//* Middleware Multer*//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.resolve(__dirname, "../public/img/users");
    if (file.mimetype != "image/jpeg" && file.mimetype != "image/png") {
      return cb(new Error("Solo se aceptan archivos jpeg o png"));
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
const middlewareHuesped = require("../middleware/middlewarehuesped");
const middlewareUsuario = require("../middleware/middlewareUsuario");

// ************ Controller Require ************

const users = require("../controllers/users");

/* REGISTER*/

router.get("/register", middlewareHuesped, users.register);

router.post("/register", upload.single("picture"), users.processRegister);

/*LOGIN*/

router.get("/logIn", users.login);

router.post("/logIn", loginValidation, users.processLogIn);

/*USER PROFILE - VISUALIZACION DETALLE*/

router.get("/user", users.userProfile);

/* USER PROFILE - MODIFICACION DETALLE*/

router.get("/userProfile", middlewareUsuario, users.profile);

module.exports = router;
