// ************ Require's ************

// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const userValidation = require("../middleware/userValidation");
const middlewareHuesped = require("../middleware/middlewarehuesped");
const usuarioMiddleware = require("../middleware/middelwareUsuario");
const users = require("../controllers/users");

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

// ************ Controller Require ************

router.get("/register", middlewareHuesped, users.register);

router.post("/register", upload.single("picture"), users.processRegister);

router.get("/logIn", users.login);

router.post("/logIn", userValidation, users.processLogIn);

router.get("/user", users.userProfile);

router.get("/userProfile", usuarioMiddleware, users.profile);

module.exports = router;
