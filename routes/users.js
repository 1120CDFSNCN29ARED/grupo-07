// ************ Require's ************

const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const users = require("../controllers/users");

router.get("/register", users.register);

router.get("/logIn", users.login);

router.get("/userProfile", users.profile);

module.exports = router;
