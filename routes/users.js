// ************ Require's ************

const express = require("express");
const router = express.Router();

// ************ Middlewares ************

const upload = require("../middlewares/multerMiddleware");
//const validations = require("../middlewares/validateRegisterMiddleware");

// ************ Controller Require ************
const users = require("../controllers/users");

router.get("/register", users.register);

router.post("/register", upload.single("picture"), users.processRegister);

router.get("/logIn", users.login);

router.get("/userProfile", users.profile);

module.exports = router;
