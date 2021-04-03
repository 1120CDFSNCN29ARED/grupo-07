// ************ Require's ************

const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

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

router.get("/register", users.register);

router.post("/register", upload.single("picture"), users.newUser);

router.get("/logIn", users.login);

router.get("/userProfile", users.profile);

module.exports = router;
