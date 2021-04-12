// ************ Require's ************

const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const userValidation = require("../middleware/userValidation");
const middlewareHuesped = require("../middleware/middlewarehuesped");
const usuarioMiddleware = require("../middleware/middelwareUsuario");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.resolve(__dirname, "../../public/img/users");
    if (file.mimetype != "image/jpeg") {
      return cb(new Error("Solo se aceptan archivos jpg o png"));
    }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const newFilename = Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

const bcrypt = require("bcryptjs");
let passEncriptada = bcrypt.hashSync("secreto", 10);
let check = bcrypt.compareSync("secreto", passEncriptada);
console.log(check);

// ************ Controller Require ************
const users = require("../controllers/users");

router.get("/register", middlewareHuesped, users.register);

router.post("/register", upload.single("picture"), users.processRegister);

router.get("/logIn", users.login);

router.post("/logIn", userValidation, users.processLogIn);

router.get("/userProfile", usuarioMiddleware, users.profile);

module.exports = router;
