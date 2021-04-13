// ************ Require's ************

// ************ Require's ************
const express = require("express");
const router = express.Router();
const userValidation = require("../middleware/userValidation");
const middlewareHuesped = require("../middleware/middlewarehuesped");
const usuarioMiddleware = require("../middleware/middelwareUsuario");
const upload = require("../middleware/multerMiddleware");

const users = require("../controllers/users");
// ************ Controller Require ************

router.get("/register", middlewareHuesped, users.register);

router.post("/register", upload.single("picture"), users.processRegister);

router.get("/logIn", users.login);

router.post("/logIn", userValidation, users.processLogIn);

router.get("/userProfile", usuarioMiddleware, users.profile);

module.exports = router;
